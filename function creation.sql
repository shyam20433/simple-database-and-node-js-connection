--add employee function

create or replace function add_emp(
	name varchar(50),
	phone bigint,
	d_id int)
returns  void
as
$$
begin 
insert into employee(employee_name,phone,d_id) values(name,phone,d_id);
end;
$$
language plpgsql;


--add department

create or replace function add_dept(
department_name varchar(50)
)
returns void 
as $$
begin
insert into department(department_name) values(department_name);
end;
$$
language plpgsql