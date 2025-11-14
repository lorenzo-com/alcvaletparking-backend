import { supabaseAdmin } from "../../lib/supabase.js";

export class ReservaRepository {
  async findAll() {
    const { data, error } = await supabaseAdmin
      .from('reservas')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

}
