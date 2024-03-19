import { UpdateEdificacaoService } from "../../services/projects/UpdateEdificacaoService";
import { Request, Response } from "express";

export class UpdateEdificacaoController {
  async handle(req: Request, res: Response){
    const user_id = req.user_id
    const {id, edificacao} = req.body
    const updateEdificacaoController = new UpdateEdificacaoService()
     const project = updateEdificacaoController.execute({
      id,
      user_id,
      edificacao
     })

     return res.json(project)
  }
}