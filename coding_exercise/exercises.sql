select film.title, film.release_year, film.rating,  concat(actor.first_name ,' ',actor.last_name) as full_name from film
left join film_actor on film.film_id = film_actor.film_id
left join actor on film_actor.actor_id = actor.actor_id
where (actor.first_name = 'Dan' and actor.last_name = 'Torn')
or (actor.first_name = 'Dan' and actor.last_name = 'Streep')
order by film.title;



