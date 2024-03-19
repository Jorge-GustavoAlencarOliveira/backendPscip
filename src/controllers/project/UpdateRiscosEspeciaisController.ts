import { Request, Response } from "express";
import { UpdateRiscosEspeciaisService } from "../../services/projects/UpdateRiscosEspeciaisService";

class UptadeRiscosEspeciaisController{
  async handle(req: Request, res: Response){
    const {id, riscosEspeciais} = req.body
    const user_id = req.user_id
    const updateRiscosEspeciaisService = new UpdateRiscosEspeciaisService();
    const project = await updateRiscosEspeciaisService.execute({
      user_id,
      riscosEspeciais,
      id,
    })
    return res.json(project)
  }
}

export {UptadeRiscosEspeciaisController}