import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import HttpException from '../../common/exceptions/http.exception'
import Logger from '../../config/logger'

const errorHandler: ErrorRequestHandler = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (error instanceof HttpException) {
    return response.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message
    })
  }
  // eslint-disable-next-line
  Logger.error(error.message)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}

export default errorHandler
