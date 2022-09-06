--  #------------------------------- INIT POOLS TABLE -------------------------------#;
CREATE TABLE pools (
    id serial PRIMARY KEY,
    connection_string TEXT
);

-- #------------------------------- INIT CATALOGS TABLE -------------------------------#;
CREATE TABLE catalogs (
    id serial PRIMARY KEY,
    tenant_id VARCHAR(255),
    pool_id INT,
    subdomain VARCHAR(255),
    CONSTRAINT fk_pool FOREIGN KEY (pool_id) REFERENCES pools(id)
);

-- #------------------------------- INSERTING VALUES IN POOLS -------------------------------#;
INSERT INTO
    pools (connection_string)
VALUES
    (
        'mongodb://tenants_db1_user:tenants_db1_pwd@localhost:27017/?authSource=tenants_db1'
    ),
    (
        'mongodb://tenants_db2_user:tenants_db2_pwd@localhost:27017/?authSource=tenants_db2'
    );

-- #------------------------------- INSERTING VALUES IN CATALOGS -------------------------------#;
INSERT INTO
    catalogs (tenant_id, pool_id, subdomain)
VALUES
    ('630d238a595d2636fa6a8c98', 1, 'x-men'),
    ('630d23a87348816129cf5c87', 1, 'avengers'),
    ('630d23bd9e1700ca1b96cfd5', 2, 'justice-league')