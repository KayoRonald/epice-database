import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import Chalk from 'chalk'
import swaggerUi from 'swagger-ui-express'
// import * as basicAuth from 'express-basic-auth'
import routes from './routes/routes'
import swaggerDocs from '../../docs/swagger.json'
import AppError from '../../middleware/AppError'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/v1', routes)

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
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
)

export default app
