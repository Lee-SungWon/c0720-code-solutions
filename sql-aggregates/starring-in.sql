select "categories"."name",
      count("films".*) as "NumStarredIn"
from "categories"
join "filmCategory" using ("categoryId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
group by "categories"."categoryId"
