import { Request, Response } from "express";
import { UpdateMedidadeSegurancaService } from "../../services/projects/UpdateMedidasSegurancaService";

class UptadeMedidadeSegurancaController{
  async handle(req: Request, res: Response){
    const {id, medidasSeguranca} = req.body
    const user_id = req.user_id
    const updateMedidadeSegurancaService = new UpdateMedidadeSegurancaService();
    const project = await updateMedidadeSegurancaService.execute({
      user_id,
      medidasSeguranca,
      id,
    })
    return res.json(project)
  }
}

export {UptadeMedidadeSegurancaController}