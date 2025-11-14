import { supabaseAdmin } from '../../lib/supabase.js';

export const ClienteRepository = {
  async create(userId: string, cliente: any) {
    const { error } = await supabaseAdmin.from('clientes').insert({
      id: userId,
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      nos_conociste: cliente.nos_conociste,
      direccion: cliente.direccion || null,
      cif: cliente.cif || null,
    });

    return { error };
  },

  async delete(userId: string) {
    return await supabaseAdmin.from('clientes').delete().eq('id', userId);
  },
};
