import { server } from "./server.js";
import { env } from "./environment.js";

server.listen(env.PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening on ${address}`);
});
