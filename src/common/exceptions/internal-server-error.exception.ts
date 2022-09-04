import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class InternalServerErrorException extends HttpException {
  constructor (
    message = 'Internal Server Error',
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode)
  }
}
