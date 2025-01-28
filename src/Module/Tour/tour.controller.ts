import { Request, Response } from "express";
import { tourService } from "./tour.service";

const createTour = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await tourService.createTour(payload);
    res.json({
      status: 200,
      message: "Tour created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: (error as Error).message,
    });
  }
};

const getTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getTours();
    res.json({
      status: 200,
      message: "Tours fetched successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: (error as Error).message,
    });
  }
};

export const tourController = {
  createTour,
  getTours,
};
