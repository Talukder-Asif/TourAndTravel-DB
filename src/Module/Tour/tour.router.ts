import { Router } from "express";
import { tourController } from "./tour.controller";

export const tourRoute = Router();

tourRoute.post("/create-tour", tourController.createTour);
tourRoute.get("/", tourController.getTours);
