import * as Yup from 'yup'

export const createUserValidate = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
  curso: Yup.string()
    .required('Campo obrigatório')
    .oneOf(
      ['Edificações', 'Informática', 'Geologia', 'Mineração', 'Visitante'],
      'Coloque os seguintes valores: Edificações, Informática, Geologia, Mineração, Visitante'
    )
})

export const emailValidate = Yup.object().shape({
  email: Yup.string().email('Email inválido!').required('Campo obrigatório')
})

export const updateCursoValidate = Yup.object().shape({
  email: Yup.string().email('Email inválido!').required('Campo obrigatório'),
  curso: Yup.string()
    .required('Campo obrigatório')
    .oneOf(
      ['Edificações', 'Informática', 'Geologia', 'Mineração', 'Visitante'],
      'Coloque os seguintes valores: Edificações, Informática, Geologia, Mineração, Visitante'
    )
})

export const updateNameValidate = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email('Email inválido!').required()
})
