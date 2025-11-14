import { Context } from "hono";
import { AuthSchema } from "./auth.schema.js";
import { AuthService } from "./auth.service.js";

export class AuthController {
  async register(c: Context) {
    try {
      const body = await c.req.json();
      const cliente = AuthSchema.parse(body);

      const result = await AuthService.registerCliente(cliente);

      if (!result.ok) {
        return c.json({ error: result.error }, 400);
      }

      return c.json({ success: true, userId: result.userId }, 201);
    } catch (error) {
      console.error(error);
      return c.json({ error: 'Error interno del servidor' }, 500);
    }
  }
}
