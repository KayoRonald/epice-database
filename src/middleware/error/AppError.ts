export default class AppError {
  public readonly message: string
  public readonly statusCode: number

  constructor (message: string, statusCode: number) {
    this.message = message
    this.statusCode = statusCode
  }
}

export class BadRequestException extends AppError {
  constructor (message: string, statusCode?: number) {
    super(message, statusCode = 400)
  }
}

export class NotFoundException extends AppError {
  constructor (message: string, statusCode?: number) {
    super(message, statusCode = 404)
  }
}

export class InternalServerErrorException extends AppError {
  constructor (message: string, statusCode?: number) {
    super(message, statusCode = 500)
  }
}
