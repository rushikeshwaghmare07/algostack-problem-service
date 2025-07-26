const mongoose = require("mongoose");
const { ATLAS_DB_URL } = require("../config/server.config");

async function connectToDatabase() {
  try {
    if (!ATLAS_DB_URL) {
      throw new Error("MongoDB URI is not defined in the configuration.");
    }

    const connection = await mongoose.connect(ATLAS_DB_URL);

    const dbHost = connection.connection.host;
    const dbName = connection.connection.name;

    console.log(`Connected to MongoDB at host: ${dbHost}, database: ${dbName}`);
  } catch (error) {
    console.log("Error connecting to the database ", error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
