INSERT INTO house (property_name, address, city, state, zip)
VALUES 
($1, $2, $3, $4, $5);

SELECT * FROM house;