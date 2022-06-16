--create table users (user_id int,
 --                   user_number varchar,
 --                   user_first_name varchar,
 --                   user_last_name varchar,
 --                   user_dni varchar,
 --                   user_preferred_role int,
 --                   user_password varchar)
--create table users (user_id bigint not null, user_dni varchar(255), user_first_name varchar(255), user_last_name varchar(255), user_number varchar(255), user_password varchar(255), user_preferred_role integer, primary key (user_id));
create table roles (role_id int not null, role_description varchar(255));
--create table user_roles (user_id bigint not null, role_id int not null);

insert into roles (role_id, role_description) values (1, 'Alumno');
insert into roles (role_id, role_description) values (2, 'Profesor');

insert into users (user_id,user_number,user_first_name,user_last_name,user_location,user_address,user_phone_number,user_birth_date,user_dni_type,user_dni_number,user_default_role,user_email, user_notification_email, user_password)
    values (1,'1','Alumno1','Alumno1','Buenos Aires','Calle Falsa 123','48540000','1/1/1901','DNI','12345678',1, 'algun@mail.edu.ar', 'algun@mail.edu.ar','1');
insert into users (user_id,user_number,user_first_name,user_last_name,user_location,user_address,user_phone_number,user_birth_date,user_dni_type,user_dni_number,user_default_role,user_email, user_notification_email, user_password)
    values (2,'2','Alumno2','Alumno2','Buenos Aires','Calle Falsa 123','48540001','1/1/1902','DNI','12345679',1, 'algun@mail.edu.ar', 'algun@mail.edu.ar','2');
insert into users (user_id,user_number,user_first_name,user_last_name,user_location,user_address,user_phone_number,user_birth_date,user_dni_type,user_dni_number,user_default_role,user_email, user_notification_email, user_password)
    values (3,'3','Profesor1','Profesor1','Buenos Aires','Calle Falsa 123','48540002','1/1/1900','LE','12345680',2, 'algun@mail.edu.ar', 'algun@mail.edu.ar','3');

insert into user_roles (id,user_id,role_id) values (1,1,1);
insert into user_roles (id,user_id,role_id) values (2,1,2);
insert into user_roles (id,user_id,role_id) values (3,2,1);
insert into user_roles (id,user_id,role_id) values (4,3,2);

--create table courses (course_id int not null, course_code varchar(255), course_name varchar(255), course_year varchar(255), primary key (course_id));
insert into courses (course_id,course_code, course_name, course_teacher_id, course_year) values (1,'K1234','MATERIA 3',2,'2022');
insert into courses (course_id,course_code, course_name, course_teacher_id, course_year) values (2,'K1235','MATERIA 4',2,'2022');
insert into courses (course_id,course_code, course_name, course_teacher_id, course_year) values (3,'K1236','MATERIA 5',2,'2022');

insert into students_courses (id,student_id,course_id) values (1,1,1);
insert into students_courses (id,student_id,course_id) values (2,1,2);
insert into students_courses (id,student_id,course_id) values (3,1,3);

create table teachers_courses (teacher_id bigint not null,course_id bigint not null);
insert into teachers_courses (teacher_id,course_id) values (3,1);

--create table past_courses (past_course_id bigint not null, past_course_name varchar(255), past_course_year varchar(4), past_course_regularization_date varchar(255), past_course_pass_date varchar(255), past_course_final_grade int);
create table past_courses_exams (past_exam_id bigint not null, past_course_id bigint not null, past_exam_type varchar(7), past_exam_date varchar(255), past_exam_grade int);
create table students_past_courses (student_id bigint not null, past_course_id bigint not null);

insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (1,'MATERIA 1','2021','1/1/2021','1/1/2021',7);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (2,'MATERIA 2','2021','1/1/2021',null,null);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (3,'MATERIA 7','2021','1/1/2021','1/1/2021',8);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (4,'MATERIA 8','2021','1/1/2021','1/1/2021',10);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (5,'MATERIA 9','2021','1/1/2021',null,null);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (6,'MATERIA 10','2021','1/1/2021',null,null);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (7,'MATERIA 11','2021','1/1/2021','1/1/2021',7);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (8,'MATERIA 12','2018',null,null,null);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (9,'MATERIA 12','2019',null,null,null);
insert into past_courses (past_course_id,past_course_name,past_course_year,past_course_regularization_date,past_course_pass_date,past_course_final_grade)
    values (10,'MATERIA 12','2020',null,null,null);

insert into past_courses_exams (past_exam_id,past_course_id,past_exam_type,past_exam_date,past_exam_grade) values (1,1,'PARCIAL','1/1/2021',6);
insert into past_courses_exams (past_exam_id,past_course_id,past_exam_type,past_exam_date,past_exam_grade) values (2,1,'FINAL','1/1/2021',7);
insert into past_courses_exams (past_exam_id,past_course_id,past_exam_type,past_exam_date,past_exam_grade) values (3,2,'PARCIAL','1/1/2021',6);
insert into past_courses_exams (past_exam_id,past_course_id,past_exam_type,past_exam_date,past_exam_grade) values (3,2,'FINAL','1/1/2021',2);

insert into students_past_courses (student_id,past_course_id) values (1,1);
insert into students_past_courses (student_id,past_course_id) values (1,2);
insert into students_past_courses (student_id,past_course_id) values (1,3);
insert into students_past_courses (student_id,past_course_id) values (1,4);
insert into students_past_courses (student_id,past_course_id) values (1,5);
insert into students_past_courses (student_id,past_course_id) values (1,6);
insert into students_past_courses (student_id,past_course_id) values (1,7);
insert into students_past_courses (student_id,past_course_id) values (1,8);
insert into students_past_courses (student_id,past_course_id) values (1,9);
insert into students_past_courses (student_id,past_course_id) values (1,10);
