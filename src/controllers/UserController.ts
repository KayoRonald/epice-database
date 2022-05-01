import { Request, Response } from 'express';
// import * as Yup from 'yup';
import knex from '../database/connection';

export default {
  async index(req: Request, res: Response) {
    const data = [
      {
        "id": 2938928392,
        "name": "Kayo Ronald",
        "curso": "3º informática",
        "createdAt": "2021-08-07T19:32:03.807Z",
        "updatedAt": "2021-08-07T19:32:03.807Z"
      },{
        "id": 2938928392,
        "name": "Kayo Ronald",
        "curso": "3º informática",
        "createdAt": "2021-08-07T19:32:03.807Z",
        "updatedAt": "2021-08-07T19:32:03.807Z"
      },{
        "id": 2938928392,
        "name": "Kayo Ronald",
        "curso": "2º informática",
        "createdAt": "2021-08-07T19:32:03.807Z",
        "updatedAt": "2021-08-07T19:32:03.807Z"
      },
    ]
      return res
        .status(200)
        .json({ data: data});
    },
  
  async create(req: Request, res: Response) {
    const { name } = req.body;
    console.log(name)
      return res
        .status(201)
        .json({ data: "ok"});
  },
  
  async update(req: Request, res: Response) {
    return res
      .status(200)
      .json({ data: "ok"});
  },

  async delete(req: Request, res: Response) {
    return res
      .status(200)
      .json({ data: "ok"});
  },
};