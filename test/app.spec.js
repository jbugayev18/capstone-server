const { expect } = require("chai");
const supertest = require("supertest");
// const supertest = require('supertest');
const app = require("../src/app");

// // const { expect } = require('chai');

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app).get("/").expect(200, "Hello, world!");
  });
});

describe("GET /api/tutors", () => {
  it('Responds with a 200 status with an array of json objects of the correct structure', () => {
    return supertest(app)
      .get("/api/tutors")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("array");
        expect(res.body).to.have.lengthOf.at.least(1);
        const tutor = res.body[0];
        expect(tutor).to.include.all.keys(
          "title",
          "id",
          "zipcode",
          "content",
          "image",
          "user_id"
        );
      });
  });
});

describe("GET /api/tutors/zip/:zipcode", () => {
  it('Responds with a 200 status with a json object of the correct structure', () => {
    return supertest(app)
      .get("/api/tutors/zip/90069")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.include.all.keys(
          "title",
          "id",
          "zipcode",
          "content",
          "image",
          "user_id"
        );
      });
  });
});


describe("GET /api/tutors/:tutor_id", () => {
  it('Responds with a 200 status with a json object of the correct structure', () => {
    return supertest(app)
      .get("/api/tutors/3")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body).to.include.all.keys(
          "title",
          "id",
          "zipcode",
          "content",
          "image",
          "user_id"
        );
      });
  });
});
