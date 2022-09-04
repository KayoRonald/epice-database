import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class Authorized extends HttpException {
  constructor (
    message = 'Authorization has been refused for those credentials',
    statusCode = HttpStatus.UNAUTHORIZED
  ) {
    super(message, statusCode)
  }
}
