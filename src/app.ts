import express, { Request, Response } from "express";
import userRouter from "./Module/User/user.router";
import { tourRoute } from "./Module/Tour/tour.router";

const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/tour", tourRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "Server is running",
  });
});

export default app;
