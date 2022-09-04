import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class BadRequestException extends HttpException {
  constructor (message = 'Bad Request', statusCode = HttpStatus.BAD_REQUEST) {
    super(message, statusCode)
  }
}
