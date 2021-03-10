CREATE TABLE students (
	"id" int,
	"first_name" VARCHAR(255),
	"middle_name" VARCHAR(255),
	"last_name" VARCHAR(255),
	"age" int,
	"location" VARCHAR(255)
);

INSERT INTO students ("id","first_name","middle_name","last_name","age","location")
VALUES 
(1,"Marnoel","Santos","de Guzman", 21,"Bulacan"),
(2,"Juan","dela Cruz","Concio", 24,"Cagayan"),
(3,"James","Akirs","Hanamichi", 27,"Nueva Ecija"),
(4,"Jen","Myers","Jennings", 24,"Nueva Vizcaya"),
(5,"Jason","Abon","Rimocal", 32,"USA"),
(6,"Adrian","Cena","Johnson", 35,"Great Britain");

UPDATE students
SET first_name = "Ana", middle_name = "Cui", last_name = "Cajocson"
where id = 1;

DELETE FROM students WHERE id = 6