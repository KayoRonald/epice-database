import { Request, Response } from 'express';
// import * as Yup from 'yup';
import knex from '../database/connection';
import { IUSerRequest } from '../interface';

export default {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;
    const users = await knex('database_epice')
    .from('database_epice')
    .select('id','name', 'curso', 'created_at')
      .orderBy('id')
      .offset((Number(page) - 1) * 10);
    return res
      .status(200)
      .json({ data: users});
  },

  async create(req: IUSerRequest, res: Response) {
    const { name, email, curso } = req.body;
    const data = {
      name,
      email,
      curso
    }
    try {
      const response = await knex('epice_user').insert(data);
      console.log(response)
      res.status(201).send()
    } catch (error: any) {
      console.log(error)
    } finally {
      knex.destroy().then((res) => {
        console.log('res')
      }).catch((error) => {
        console.log(error)
      })
    }
  },

  async update(req: Request, res: Response) {
    return res
      .status(200)
      .json({ data: "ok" });
  },

  async delete(req: Request, res: Response) {
    return res
      .status(200)
      .json({ data: "ok" });
  },
};