import type { MiddlewareHandler } from 'hono';

export const errorHandler: MiddlewareHandler = async (c, next) => {
  try {
    await next();
  } catch (err: any) {
    console.error(err);
    return c.json({ error: err.message || 'Internal error' }, 500);
  }
};
