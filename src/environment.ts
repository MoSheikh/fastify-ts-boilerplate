import dotenv from "dotenv";

dotenv.config();

class EnvironmentVariableRequiredError extends Error {
  constructor(variable: string) {
    super(`${variable} environment variable is required but is missing.`);
  }
}

if (!process.env.NODE_ENV)
  throw new EnvironmentVariableRequiredError("NODE_ENV");

if (!process.env.PORT) throw new EnvironmentVariableRequiredError("PORT");

export const env = {
  LOGGER: process.env.logger === "true",
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
