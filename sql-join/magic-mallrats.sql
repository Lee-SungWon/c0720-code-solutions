select  "firstName",
        "lastName",
        "films"."title"
from "customers"
join "payments" using ("customerId")
join "rentals" using ("rentalId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';
