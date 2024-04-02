import { UpdateDimensionamentoService } from '../../services/projects/UpdateDimensionamentoService';
import { Request, Response } from 'express';

export class UpdateDimensionamentoController {
  async handle(req: Request, res: Response) {
    const { dimensionamento, id } = req.body;
    const user_id = req.user_id;
    const updateDimensionamentoService = new UpdateDimensionamentoService();
    const project = await updateDimensionamentoService.execute({
      id,
      user_id,
      dimensionamento,
    });
    return res.json(project);
  }
}
