ALTER TABLE my_tutor_app_users 
    DROP COLUMN IF EXISTS user_id; 

DROP TABLE IF EXISTS my_tutor_app_users CASCADE; 