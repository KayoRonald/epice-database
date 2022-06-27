import * as Yup from 'yup'

export default Yup.object({
  body: Yup.object({
    name: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
    curso: Yup.string()
      .required('Campo obrigatório')
      .oneOf(
        ['Edificações', 'Informática', 'Geologia', 'Mineração', 'Visitante'],
        'Coloque os seguintes valores: Edificações, Informática, Geologia, Mineração, Visitante'
      )
  })
})
