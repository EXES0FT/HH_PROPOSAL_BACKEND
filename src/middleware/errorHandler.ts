import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line (no-unused-vars)
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
};
