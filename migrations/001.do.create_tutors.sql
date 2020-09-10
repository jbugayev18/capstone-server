CREATE TABLE tutors (
    id SERIAL PRIMARY KEY, 
    image TEXT, 
    title TEXT NOT NULL, 
    content TEXT,
    zipcode TEXT,  
    date_created TIMESTAMPTZ DEFAULT now() NOT NULL
); 

