import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";

export const ping: FastifyPluginAsync = fp(async (instance, options) => {
  instance.log.info(options);

  instance.route({
    method: "GET",
    url: "/ping",
    handler: (request, reply) => {
      reply.send("pong");
    },
  });
});
