import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Form, { FormsInputs } from 'Component/Form/form'
import { UseFetchPost } from 'utils/useFechPost'

const Client = () => {
  const [alertSucess, setAlertSucess] = useState('')
  const [alertError, setAlertError] = useState('')

  const submit = async (values: FormsInputs) => {
    const data = {
      name: values.name,
      email: values.email,
      cpf: values.cpf,
      endereco: values.address,
      atorFavorito: values.actor,
      diretorfavorito: values.director,
      categoriaFavorito: 'Comédia'
    }

    await UseFetchPost('client', data, setAlertSucess, setAlertError)
  }

  return (
    <Form
      label='Cadastro de Clientes'
      alertError={alertError}
      alertSucess={alertSucess}
      submit={submit}
    />
  )
}
export default Client
