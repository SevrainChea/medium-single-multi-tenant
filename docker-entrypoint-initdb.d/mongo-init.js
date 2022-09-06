// '#------------------------------- START MONGODB INITALIZATION -------------------------------#'

const xmenId = ObjectId('630d238a595d2636fa6a8c98');
const avengersId = ObjectId('630d23a87348816129cf5c87');
const justiceLeagueId = ObjectId('630d23bd9e1700ca1b96cfd5');

// '#------------------------------- INIT TENANTS DB 1 -------------------------------#'

tenantsDB1 = db.getSiblingDB('tenants_db1');

tenantsDB1.createUser({
  user: 'tenants_db1_user',
  pwd: 'tenants_db1_pwd',
  roles: [{ role: 'readWrite', db: 'tenants_db1' }],
});

tenantsDB1.createCollection('tenants');

tenantsDB1.tenants.insertMany([
  { _id: xmenId, name: 'The X-Men' },
  { _id: avengersId, name: 'The Avengers' },
]);

tenantsDB1.createCollection('users');

tenantsDB1.users.insertMany([
  { username: 'Wolverine', tenantId: xmenId },
  { username: 'Professor X', tenantId: xmenId },
  { username: 'Thor', tenantId: avengersId },
  { username: 'Iron Man', tenantId: avengersId },
]);

// '#------------------------------- INIT TENANTS DB 2 -------------------------------#'

tenantsDB2 = db.getSiblingDB('tenants_db2');

tenantsDB2.createUser({
  user: 'tenants_db2_user',
  pwd: 'tenants_db2_pwd',
  roles: [{ role: 'readWrite', db: 'tenants_db2' }],
});

tenantsDB2.createCollection('tenants');

tenantsDB2.tenants.insertMany([
  { _id: justiceLeagueId, name: 'The Justice League' },
]);

tenantsDB2.createCollection('users');

tenantsDB2.users.insertMany([
  { username: 'Batman', tenantId: justiceLeagueId },
  { username: 'Superman', tenantId: justiceLeagueId },
]);

// '#------------------------------- INIT DB END -------------------------------#'
