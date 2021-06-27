import fastify from "fastify";
import { env } from "./environment.js";
import { ping } from "./routes/ping.js";

export const server = fastify({
  logger: env.LOGGER && {
    level: "info",
    prettyPrint: env.NODE_ENV === "development",
  },
});

server.register(ping, {});
server.ready(() => {
  server.log.info("Ready!");
});
