--filter students by decreasing age
select * from students
order by age desc;

--filter students by location
select * from students
where location ="Manila"

--return the number of students
select count(id)
from students;

--return average age of all students
select AVG(age)
from students;
