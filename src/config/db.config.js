const mongoose = require("mongoose");
const { ATLAS_DB_URL } = require("../config/server.config");
const logger = require("./logger.config");

async function connectToDatabase() {
  try {
    if (!ATLAS_DB_URL) {
      throw new Error("MongoDB URI is not defined in the configuration.");
    }

    const connection = await mongoose.connect(ATLAS_DB_URL);

    const dbHost = connection.connection.host;
    const dbName = connection.connection.name;

    logger.info(`Connected to MongoDB at host: ${dbHost}, database: ${dbName}`);
  } catch (error) {
    logger.error("Error connecting to the database ", error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
