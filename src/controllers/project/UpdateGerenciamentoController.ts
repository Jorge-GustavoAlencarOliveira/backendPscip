import { Request, Response } from 'express';
import { UpdateGerenciamentoService } from '../../services/projects/UpdateGerenciamentoServices';

export class UpdateGerenciamentoController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const { id, gerenciamento } = req.body;
    const updateGerenciamentoService = new UpdateGerenciamentoService();
    const project = await updateGerenciamentoService.execute({
      id,
      user_id,
      gerenciamento,
    });
    return res.json(project);
  }
}


