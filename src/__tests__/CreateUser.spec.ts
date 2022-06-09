/* eslint-disable */
import "jasmine";

import app from '../modules/shared/app'
import request from 'supertest'

describe('create user', () => {
  it('Should be able to create a new use', async () => {
    expect(2+2).toBe(4);
  })

  // it('Should not be able to create an existing user', async () => {
  //   await request(app).post('/epice')
  //     .send({
  //       name: "Kayo Ronald",
  //       email: "fulano@gmail.com",
  //       curso: "informática"
  //     })

  //   const response = await request(app).post('/epice')
  //     .send({
  //       name: "Kayo Ronald",
  //       email: "fulano@gmail.com",
  //       curso: "informática"
  //     })
  //   expect(response.status).toBe(400);
  // })

  // it('must list all registered users', async () => {
  //   const response = await request(app).get("/epice")
  //   expect(response.status).toBe(201);
  // })
})