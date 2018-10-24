 -- Deploy database tables
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'

-- seed will use it for testing 
\i '/docker-entrypoint-initdb.d/seed/seed.sql'
