import { Request } from 'express'

export interface IuserEpice {
  id: number;
  name: string;
  curso: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUSerRequest extends Request {
  body: {
    name: string;
    email: string;
    mensagem?: string;
    curso: string;
  }
  params: {
    name: string;
    email: string;
    curso: string;
  }
}

export interface User {
  name: string;
  email: string;
  curso: string;
}