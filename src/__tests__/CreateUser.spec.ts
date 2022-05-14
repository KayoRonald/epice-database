import app from "../modules/shared/app";
import request from "supertest";

describe("create user", () => {
  it("Should be able to create a new use", async () => {
    const response = await request(app).post("/epice").send({
      name: "Fulano",
      email: "fulano@gmail.com",
      curso: "informática"
    });
    expect(response.status).toBe(201);
  });

  it("Should not be able to create an existing user", async () => {
    const response = await request(app).post("/epice").send({
      name: "Kayo Ronald",
      email: "kayot@gmail.com",
      curso: "informática"
    });
    expect(response.status).toBe(400);
  });
});
