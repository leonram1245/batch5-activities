-- 0. Display the number of unique inventory rented and the total number of inventory rented
-- Column => unique_inventory_rented, total_inventory_rented
-- Answer => 1 row

select count(distinct inventory_id ) as unique_inventory_rented,
count (rental_id)as total_inventory_rented 
from rental;

-- 1. List all the films of Dan Torn and Dan Streep. Sort by film_title alphabetical order
-- Column => film_title, release_year, and rating, and actor_full_name. 
-- Answer => 46 rows
select film.title, film.release_year, film.rating,  concat(actor.first_name ,' ',actor.last_name) as full_name from film
left join film_actor on film.film_id = film_actor.film_id
left join actor on film_actor.actor_id = actor.actor_id
where (actor.first_name = 'Dan' and actor.last_name = 'Torn')
or (actor.first_name = 'Dan' and actor.last_name = 'Streep')
order by film.title;

-- 2. List all Comedy films of all actors whose last names start with 'D'. Sort by actor_full_name alphabetical order
-- Column => actor_full_name, film_title, category_name
-- Answer => 34 rows

select concat(actor.first_name ,' ',actor.last_name) as actor_full_name,film.title as film_title,category.name as category_name from film
left join film_actor on film.film_id = film_actor.film_id
left join actor on film_actor.actor_id = actor.actor_id
left join film_category on film.film_id = film_category.film_id
inner join category on film_category.category_id = category.category_id
where film_category.category_id = 5
and substring (actor.last_name,1,1) = 'D'
order by actor_full_name asc;


