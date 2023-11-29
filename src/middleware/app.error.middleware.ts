import { error } from "console";
import { NextFunction, Response } from "express";

class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;