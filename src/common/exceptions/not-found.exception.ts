import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class NotFoundException extends HttpException {
  constructor (message = 'Not Found', statusCode = HttpStatus.NOT_FOUND) {
    super(message, statusCode)
  }
}
