import { Response } from 'express';
import * as Yup from 'yup';
import { IUSerRequest } from '../../interface';
import  UpdateUserServiceName  from '../services/UpdateUserServiceName';

export class UpdateUserControllerName {
  async update(req: IUSerRequest, res: Response) {
    const { name, email } = req.params;
    const data = {name, email}
    console.log(req.params)
    const updateName = new UpdateUserServiceName();
    
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email('Email inválido!').required(),
    });
  
    const errors = await schema.validate(data, {
      abortEarly: false,
    });

    await updateName.execute({name, email });

    return res.status(201).json({
      success: true,
      message: `Atualização feita com sucesso!`
    });
  }
}