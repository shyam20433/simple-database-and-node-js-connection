drop sequence emp_id;


create sequence emp_id
start with 1
increment by 1
minvalue 1
maxvalue 9999999
cache 1
cycle;


alter sequence emp_id
restart with 1 ;


create sequence dept_id
start with 1
increment by 1
minvalue 1
maxvalue 10
cache 1
cycle;


alter sequence dept_id
start with 1;


















