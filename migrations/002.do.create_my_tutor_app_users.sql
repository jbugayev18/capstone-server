CREATE TABLE my_tutor_app_users (
    id SERIAL PRIMARY KEY, 
    user_name TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    password TEXT NOT NULL, 
    date_created TIMESTAMPTZ NOT NULL DEFAULT now(),
    date_modified TIMESTAMPTZ 
);

ALTER TABLE tutors
    ADD COLUMN 
        user_id INTEGER REFERENCES my_tutor_app_users(id)
        ON DELETE SET NULL; 