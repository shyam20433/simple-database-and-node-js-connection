create table department(
     dept_id int default nextval('dept_id') primary key,
     department_name varchar(50)
);
create table employee(
	emp_id int default nextval('emp_id') primary key,
	employee_name varchar(100),
	phone BIGINT ,
	d_id int references department(dept_id) 
);

select add_dept('DS');
select add_dept('SS');
select add_dept('AIML');
select add_dept('DCS');
select add_dept('CSE');

--drop table department

select add_emp('shyam',934243746,1);
select add_emp('sundar',934248746,2);
select add_emp('thenmozhi',939243746,3);
select add_emp('Jothishree',935243746,4);
select add_emp('aishwarya',934673746,1);
select add_emp('nitin',934243446,2);
select add_emp('kishore',934244546,3);
select add_emp('tharun',934243666,4);
select add_emp('srijith',934248846,3);
select add_emp('sharath',934299746,2);
select add_emp('midhun',911243746,1);


truncate table employee
select * from department


