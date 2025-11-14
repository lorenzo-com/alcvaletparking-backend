import { supabaseAdmin } from '../../lib/supabase.js';

export const RolesRepository = {
  async getClienteRolId() {
    const { data, error } = await supabaseAdmin
      .from('roles')
      .select('id')
      .eq('nombre', 'cliente')
      .single();

    if (error) throw new Error(error.message);
    return data.id;
  },

  async getAllRoles() {
    const { data, error } = await supabaseAdmin
      .from('roles')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }
};