import { Hono } from 'hono';
import { ReservaController } from './reserva.controller.js';

const controller = new ReservaController();
const router = new Hono();

router.get('/', (c) => controller.list(c));
router.post('/', (c) => controller.create(c));

export default router;
