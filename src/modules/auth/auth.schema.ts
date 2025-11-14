import { z } from 'zod';

export const AuthSchema = z.object({
    nombre: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    telefono: z.string().min(1),
    nos_conociste: z.string().min(1),
    direccion: z.string().optional(),
    cif: z.string().optional()
});