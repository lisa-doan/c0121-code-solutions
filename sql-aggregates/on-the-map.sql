select "countries"."name" as "countries",
       count("cities".*) as "total cities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId";
