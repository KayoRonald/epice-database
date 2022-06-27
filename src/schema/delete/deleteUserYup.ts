import * as Yup from 'yup'

export default Yup.object({
  params: Yup.object({
    email: Yup.string().email('Email inválido!').required()
  })
})
