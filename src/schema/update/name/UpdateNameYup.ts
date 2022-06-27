import * as Yup from 'yup'

export default Yup.object({
  body: Yup.object({
    name: Yup.string().required()
  }),
  params: Yup.object({
    email: Yup.string().email('Email inválido!').required()
  })
})
