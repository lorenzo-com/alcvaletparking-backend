import type { Hono } from 'hono';
import reservaRoutes from '../modules/reservas/reserva.routes.js';
import authRoutes from '../modules/auth/auth.routes.js';

export function registerRoutes(app: Hono) {
  app.route('/reservas', reservaRoutes);

  app.route('/auth', authRoutes);
}