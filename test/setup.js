const { expect } = require('chai')
const supertest = require('supertest')
const knex = require("knex");
const app = require('../src/app'); 



const { PORT, DATABASE_URL } = require('./testConfig');


const db = knex({ client: 'pg', connection: DATABASE_URL, });

app.set('db', db);


global.expect = expect
global.supertest = supertest