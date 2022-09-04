import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class Forbidden extends HttpException {
  constructor (message = 'Forbidden', statusCode = HttpStatus.FORBIDDEN) {
    super(message, statusCode)
  }
}
