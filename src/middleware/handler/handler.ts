import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import Chalk from 'chalk'
import AppError from '../error/AppError'

const errorHandler: ErrorRequestHandler = (error: Error, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message
    })
  }
  // eslint-disable-next-line
  console.log(Chalk.yellow(error.message))
  console.error(Chalk.red(error))
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default errorHandler
