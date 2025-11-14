import { Hono } from 'hono';
import { errorHandler } from './app/middleware/error-handler.js';
import { registerRoutes } from './app/routes.js';

const app = new Hono();

app.use('*', errorHandler);

registerRoutes(app);

export default app;