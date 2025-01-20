import mongoose from "mongoose";
import app from "./app";
import Config from "./Config";
async function server() {
  try {
    await mongoose.connect(Config.database_url as string);

    app.listen(Config.port, () => {
      console.log("Server listening on port " + Config.port);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
