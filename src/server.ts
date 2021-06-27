import fastify from "fastify";
import { env } from "./environment.js";

export const server = fastify({
  logger: env.LOGGER && {
    level: "info",
    prettyPrint: env.NODE_ENV === "development",
  },
});
