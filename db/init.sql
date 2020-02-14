CREATE TABLE house (
    id SERIAL PRIMARY KEY,
    property_name TEXT,
    address TEXT,
    city VARCHAR(40),
    state VARCHAR(2),
    zip INT
);

INSERT INTO house (property_name, address, city, state, zip)
VALUES 
('Bigfoot Manor', '202 Out In The Woods Dr.', 'Yreka', 'CA', 90000),
('House In The Hills', '101 Beverly Dr.', 'Beverly Hills', 'CA', 90210),
('Beach Cabana', '55 Beachfront Way', 'Encinitas', 'CA', 90404);

ALTER TABLE house
ADD COLUMN 
    image_url TEXT,
ADD COLUMN 
    mortgage INT,
ADD COLUMN 
    rent INT;