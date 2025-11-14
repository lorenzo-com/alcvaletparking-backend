import { RolesRepository } from './roles.repository.js';

export const RolesService = {
  async getClienteRolId() {
    return await RolesRepository.getClienteRolId();
  },

  async listRoles() {
    return await RolesRepository.getAllRoles();
  },
};