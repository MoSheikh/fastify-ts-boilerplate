import dotenv from "dotenv";
import { server } from "./server.js";
import { ping } from "./ping.js";

dotenv.config();

server.register(ping, {});

server.ready((err) =>
  err ? server.log.error(err) : server.log.info("Ready!")
);

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening on ${address}`);
});
