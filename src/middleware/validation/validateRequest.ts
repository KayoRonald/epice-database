import { AnySchema } from 'yup'
import { Response, NextFunction } from 'express'
import { IUSerRequest } from '../../@types'
import { BadRequestException } from '../../common/exceptions'

const validate =
  (schema: AnySchema) =>
    async (req: IUSerRequest, res: Response, next: NextFunction) => {
      try {
        await schema.validate({
          body: req.body,
          params: req.params
        })
        next()
      } catch (error: any) {
        throw new BadRequestException(error.message)
      }
    }

export default validate
