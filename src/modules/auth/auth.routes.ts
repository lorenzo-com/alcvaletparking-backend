import { Hono } from 'hono';
import { AuthController } from './auth.controller.js';

const auth = new Hono();
const controller = new AuthController();

auth.post('/registrar', (c) => controller.register(c));

export default auth;