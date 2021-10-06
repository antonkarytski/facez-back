import app from "@server";
import logger from "@shared/Logger";
import mongoose from "mongoose";

const port = Number(process.env.PORT || 3000);

async function start() {
  try {
    console.log(process.env.MONGO_URI);
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    app.listen(port, () => {
      logger.info("Express server started on port: " + port);
    });
  } catch (e: any) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
