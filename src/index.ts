import { server } from "./server.js";
import { env } from "./environment.js";

server.listen(env.PORT, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
