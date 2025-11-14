import { z } from 'zod';

export const ReservaValidator = z.object({
    cliente_id: z.string().uuid().optional(),
    fecha_entrada: z.string().min(1).optional(),
    fecha_salida: z.string().min(1).optional(),
    hora_entrada: z.string().min(1).optional(),
    hora_salida: z.string().min(1).optional(),
    nombre_completo: z.string().min(1).optional(),
    nombre_conductor: z.string().min(1).optional(),
    email: z.string().email().optional(),
    telefono: z.string().min(1).optional(),
    direccion: z.string().optional(),
    cif: z.string().optional(),
    coche: z.string().min(1),
    matricula: z.string().min(1),
    terminal_entrada: z.string().min(1),
    terminal_salida: z.string().min(1),
    tipo_plaza: z.string().min(1),
    precio: z.number().min(0),
    num_vuelo: z.string().min(1).optional(),
    comentarios: z.string().min(1).optional(),
    nos_conociste: z.string().min(1).optional()
}).superRefine((data, ctx) => {
    if(!data.cliente_id) {
        if(!data.nombre_completo) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'El nombre completo es obligatorio'
            })
        }

        if(!data.email) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'El email es obligatorio'
            })
        }

        if(!data.telefono) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'El teléfono es obligatorio'
            })
        }

        if(!data.nos_conociste) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'El campo de cómo nos conociste es obligatorio'
            })
        }
    }
});