import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'
import routes from '../routes/routes'
import swaggerDocs from '../../../docs/swagger.json'
import { NotFoundException } from '../../../middleware/error/AppError'
import errorHandler from '../../../middleware/handler/handler'
const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/v1', routes)
app.all('*', () => {
  throw new NotFoundException('O servidor não encontrou nada que corresponda ao Request-URI.')
})
app.use(errorHandler)

export default app
