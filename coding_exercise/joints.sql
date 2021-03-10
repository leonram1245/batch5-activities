CREATE TABLE classrooms (
	"id" int,
	"student_id" int,
	"section" varchar(255)
);

insert into classrooms ("id", "student_id","section")
values
(1,1,"A"),
(2,2,"B"),
(3,3,"B"),
(4,4,"C"),
(5,5,"B"),
(6,6,"A"),
(7,7,"C"),
(8,8,"B"),
(9,9,"B"),
(10,10,"C");

SELECT * FROM classrooms
INNER JOIN students on classrooms.id = students.id;

SELECT * FROM classrooms
LEFT JOIN students on classrooms.id = students.id;

