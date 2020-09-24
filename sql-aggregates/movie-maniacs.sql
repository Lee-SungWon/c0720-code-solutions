select "customers"."firstName",
      "customers"."lastName",
      sum("amount") as "totalPayments"
from "customers"
join "payments" using ("customerId")
group by "customers"."customerId"
order by "totalPayments" desc
