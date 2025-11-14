import { supabaseAdmin } from "../../lib/supabase.js";

export const AuthRepository = {
  async createUser(email: string, password: string) {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: false
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true, data };
  },

  async deleteUser(userId: string) {
    return await supabaseAdmin.auth.admin.deleteUser(userId);
  },
};