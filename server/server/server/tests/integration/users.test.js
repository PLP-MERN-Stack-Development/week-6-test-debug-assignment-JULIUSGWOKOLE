const request = require("supertest");
const app = require("../../src/app");

test("GET /api/users returns 200", async () => {
  const res = await request(app).get("/api/users");
  expect(res.status).toBe(200);
});

