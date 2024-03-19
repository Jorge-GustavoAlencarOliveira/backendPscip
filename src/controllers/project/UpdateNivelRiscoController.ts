import { Request, Response } from "express";
import { UpdateNivelRiscoService } from "../../services/projects/UpdateNivelRiscoService";

class UptadeNivelRiscoController{
  async handle(req: Request, res: Response){
    const {id, nivelRisco} = req.body
    const user_id = req.user_id
    const updateNivelRiscoService = new UpdateNivelRiscoService();
    const project = await updateNivelRiscoService.execute({
      user_id,
      nivelRisco,
      id,
    })
    return res.json(project)
  }
}

export {UptadeNivelRiscoController}