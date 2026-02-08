import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import logger from './config/logger';

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	logger.info(`Incoming request: ${req.method} ${req.url}`);
	res.on('finish', () => {
		logger.info(`Response: ${res.statusCode} ${req.method} ${req.url}`);
	});
	next();
});
app.use('/api', routes);
app.use(errorHandler);

export default app;