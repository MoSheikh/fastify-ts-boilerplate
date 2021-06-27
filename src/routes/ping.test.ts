import request from "supertest";
import { server } from "../server";

describe("GET `/ping` - server health check", () => {
  it("should return 'pong'", async () => {
    const req = request(server.server);
    const result = await req.get("/ping");
    expect(result.text).toEqual("pong");
  });
});
