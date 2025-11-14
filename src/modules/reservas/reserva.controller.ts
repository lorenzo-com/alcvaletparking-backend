import type { Context } from 'hono';
import { ReservaService } from './reserva.service.js';
import { ReservaValidator } from './reserva.schema.js';

export class ReservaController {
  private service = new ReservaService();

  async list(c: Context) {
    const reservas = await this.service.getAll();
    return c.json(reservas);
  }

  async create(c: Context) {
    const body = await c.req.json();

    const parsed = ReservaValidator.safeParse(body);
    if (!parsed.success) {
      return c.json({ error: parsed.error.flatten() }, 400);
    }

    const data = await this.service.getAll();
    return c.json(data, 201);
  }
}
