import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

// Express error-handling middleware
export function errorHandler(
  err: any,
  req: Request,
  res: Response, 
  next: NextFunction,
) {
  logger.error(
    `Error: ${err.message} | Status: ${err.status || 500} | URL: ${req.method} ${req.url}`,
  );
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  });
}
