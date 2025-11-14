import { supabaseAdmin } from '../../lib/supabase.js';

export const UsuarioRepository = {
  async create(userId: string, rolId: string, email: string) {
    const { error } = await supabaseAdmin
      .from('usuarios')
      .insert({ id: userId, rol_id: rolId, email });

    return { error };
  },

  async delete(userId: string) {
    return await supabaseAdmin.from('usuarios').delete().eq('id', userId);
  },
};
