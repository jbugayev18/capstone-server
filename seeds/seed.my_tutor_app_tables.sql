BEGIN 

TRUNCATE 
    my_tutor_app_users,
    tutors
    RESTART IDENTITY CASCADE; 

INSERT INTO my_tutor_app_users (user_name,full_name, password)
VALUES
 (
  'jbuga',
  'Julia Bug',
  '$2a$04$3MkWYzik5nd.KVqtMsf8KudvQx/FIFFdCWXLc9SXEDEFaBXYzx5Zm'
),
(
  'd.star',
  'David Star',
  '$2a$04$WVHZEjqi3ljlnEPxeXhmm.OZJOSezW0Gb74wM.ccbdBZtp9sBKqAy'
),
(
  'c.santana',
  'Carlos Santana',
  '$2a$04$dHO2MnSGCT6d5XMCp7vyfeqe8ADMH3E0Wv0Ho9eyozljG/zUgm6Ti'
),
(
  'j.biden',
  'Joe Biden',
  '$2a$04$5SLkyAf9a0d5ohP6tiR68uKsuw43THhYMSrclHdXDd6lsGJQAfmTe'
),
(
  'patrick.la',
  'Patrick LA',
  '$2a$04$PFHS8JW9An0HdIoyCFkfDeJgoklSWqDi6phJEwT2GFqFFrgv5HqRW'
),
(
  'sammi',
  'Sam Frank',
  '$2a$04$o35MApbMVuE1XgS37jz0AOJj13uuSqPBqoFMwUgLJ2TBp9caMOkBW'
);

INSERT INTO tutors (title, user_id, zipcode, content, image)
VALUES
    ('Lawrence: Math Tutor', 1, '90210', 'Lawrence graduated from Stanford University with a degree in Mathematics and a minor in Economics. He has tutored students in Algebra II, Geometry, Calculus I and II, and Linear Algebra for over 2 years. He is very dedicated to his students and carries great patience.','lawrence.jpg' ),
    ('Patrick: French Tutor',  2, '90404', 'Patrick graduated from Columbia University, majoring in Economics and minoring in the French language. He studied abroad in SciencesPo in Paris, France, where he was able to immerse himself in the French language. Patrick is a certified French instructor.', 'patrick.jpg'), 
    ('Ekaterina: Coding Tutor', 3,'90069', 'Ekaternina studied Computer Science in MIT and has been participating in coding outreach programs for underprivileged high school students. She loves to teach students how to code in React!','ekaterina.jpg'), 
    ('Naomi: SAT Tutor', 4, '90272', 'Naomi went to an Ivy League University and obtained a degree in Political Science. She scored a perfect score on her SAT is dedicated to help students get into their dream colleges!', 'naomi.jpg' ), 
    ('Mary: English Tutor', 5,'90069', 'Mary is a certified teacher in the state of California, specializing in English literature and grammar. In particular, Mary offers services in SAT and ISEE','mary.jpg'), 
    ('David: Creative Writing Tutor',6,'91423','David pursued his studies in NYU and obtained a degree in Screen Writing and Photography', 'david.jpg');

    COMMIT; 
    