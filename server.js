const { Pool } = require('pg');
const input = require('prompt-sync')({ sigint: true });
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '<your password>',
    database: 'students',
    port: 5432
});

async function add_employee(name, phone, dept_id) {
    const add_emp = await pool.query(
        'insert into employee (employee_name,phone,d_id) values($1,$2,$3) returning *',
        [name, phone, dept_id]
    );
    console.log(`employee ${name} added`);
    console.table(add_emp.rows);
}
//add_employee('shyamsundar',1234567890,1);


async function delete_employee(emp_id) {
    const del_emp = await pool.query(
        'delete from employee where emp_id= $1 returning *',
        [emp_id]
    );

    if (del_emp.rows.length === 0) {
        console.log(`employee ${emp_id} not found`);
    }
    console.log(`employee ${emp_id} deleted`);
    console.table(del_emp.rows);
}


//delete_employee(14);

async function update_employee(emp_id, name, phone) {
    const upd_emp = await pool.query(
        'update employee set employee_name=$2,phone=$3 where emp_id= $1 returning *',
        [emp_id, name, phone]
    );

    if (upd_emp.rows.length === 0) {
        console.log(`employee ${emp_id} not found`);
    }
    console.log(`employee ${emp_id} updated`);
    console.table(upd_emp.rows);
}


//update_employee(12,'ss',9876543210);



async function read_table(table,limit) {
    const result = await pool.query(
        `select * from ${table} limit ${limit}`

    );

    if (result.rows.length === 0) {
        console.log(`Table ${table} is empty`);
        return;
    }

    console.table(result.rows);
}

//read_table('employee');

async function execute() {
    mainloop: while (true) {
        console.log(`Enter Your choice`);
        console.log(`1=>Insert Employee`);
        console.log(`2=>Delete Employee`);
        console.log(`3=>Update Employee`);
        console.log(`4=>Read all Employee`);
        console.log(`5=>exit...`)
        const choice = Number(input('enter ur Choice: '));
        console.log(`Selected Choice ${choice}!`);


        switch (choice) {
            case 1:
                console.log(`Insert an employee`);
                const name = input(`enter Employee Name `);
                const phone = BigInt(input(`enter Phone number `));
                const dept_id = Number(input(`enter Department Number`));
                await add_employee(name, phone, dept_id);
                break;
            case 2:
                console.log(`Delete an employee`);
                const emp_id = Number(input(`Enter Employee ID to Delete `))
                await delete_employee(emp_id);
                break;
            case 3:
                console.log(`Update an employee`);
                const e_id = Number(input(`Enter Employee ID to update `));
                const e_name = input(`Enter Name to update `);
                const e_phone = BigInt(input(`Enter phone number to Update `));
                await update_employee(e_id, e_name, e_phone);
                break;
            case 4:
                console.log(`All Employee Details `);
                const lim=Number(input(`enter the limit `))
                await read_table('employee',lim);
                break;
            case 5:
                console.log(`Exiting ................!`);

                break mainloop;

            default:
                console.log(`invalid choice !`);
        }


    }
}

execute();