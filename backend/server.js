import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

  // root rout http://localhost:5001/


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is Running on port ${PORT}`);
});
