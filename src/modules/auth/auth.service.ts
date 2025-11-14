import { RolesService } from "../roles/roles.service.js";
import { AuthRepository } from "./auth.repository.js";
import { ClienteRepository } from "./cliente.repository.js";
import { UsuarioRepository } from "./usuario.repository.js";

export const AuthService = {
  async registerCliente(cliente: any) {
    const rolId = await RolesService.getClienteRolId();

    // Crear usuario en Supabase Auth
    const authUser = await AuthRepository.createUser(cliente.email, cliente.password);
    if (!authUser.ok) return { ok: false, error: authUser.error };

    const userId = authUser.data?.user.id;

    if (!userId) {
      return { ok: false, error: 'No se pudo obtener el ID del usuario' };
    }

    // Crear registro en tabla usuarios
    const usuarioRes = await UsuarioRepository.create(userId, rolId, cliente.email);
    if (usuarioRes.error) {
      await AuthRepository.deleteUser(userId);
      return { ok: false, error: 'Error al crear registro de usuario' };
    }

    // Crear registro en tabla clientes
    const clienteRes = await ClienteRepository.create(userId, cliente);
    if (clienteRes.error) {
      await UsuarioRepository.delete(userId);
      await AuthRepository.deleteUser(userId);
      return { ok: false, error: 'Error al crear registro de cliente' };
    }

    return { ok: true, userId };
  },
};