import { ReservaRepository } from "./reserva.repository.js";

export class ReservaService {
  private repo = new ReservaRepository();

  getAll() {
    return this.repo.findAll();
  }

}
