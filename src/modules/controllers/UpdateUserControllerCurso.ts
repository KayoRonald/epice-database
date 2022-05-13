import { Response } from 'express';
import * as Yup from 'yup';
import { IUSerRequest } from '../../interface';
import UpdateUserServiceCurso from '../services/UpdateUserServiceCurso';

export class UpdateUserControllerCurso {
  async update(req: IUSerRequest, res: Response) {
    const { curso, email } = req.params;
    const data = { curso, email }
    console.log(req.params)

    const updateCurso = new UpdateUserServiceCurso();
    const schema = Yup.object().shape({
      curso: Yup.string().required('Campo obrigatório'),
      email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await updateCurso.execute({ email, curso });

    return res.status(201).json({
      success: true,
      message: `Atualização feita com sucesso!`
    });
  }
}