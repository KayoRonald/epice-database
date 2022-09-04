import { HttpStatus } from '../enums/http-status-code'
import HttpException from './http.exception'

export class Unexpected extends HttpException {
  constructor (
    message = 'Unexpected condition that prevented it from fulfilling the request.',
    statusCode = HttpStatus.SERVICE_UNAVAILABLE
  ) {
    super(message, statusCode)
  }
}
