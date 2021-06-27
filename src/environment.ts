import dotenv from "dotenv";

dotenv.config();

export const env = {
  LOGGER: process.env.logger === "true",
  NODE_ENV: process.env.NODE_ENV || "development",
};
