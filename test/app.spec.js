const supertest = require('supertest');
const app = require('../src/app');
const { expect } = require('chai'); 

describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world!')
  })
})

describe('/api/tutors', () => {
  it('responds', () => {
    return supertest(app)
    .get('/api/tutors')
    .expect(200, 'hello, world!')
  })
})