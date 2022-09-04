import { Router, Response, Request } from 'express'

const routes = Router()

routes.get('/', (res: Response, req: Request) => {
  res.send('oi')
})

export default routes
