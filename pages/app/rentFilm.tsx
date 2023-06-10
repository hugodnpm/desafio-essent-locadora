import Form, { ClientFormsInputs, RentFormsInputs } from 'Component/Form/form'
import { useState } from 'react'
import { UseFetchGet } from 'utils/useFechGet'
import { UseFetchPost } from 'utils/useFechPost'
import { useRouter } from 'next/router'

interface Client {
  id: number
  // outras propriedades
}
const RentFilm = () => {
  const router = useRouter()
  const [alertSucess, setAlertSucess] = useState('')
  const [alertError, setAlertError] = useState('')
  const [dataClient, setDataClient] = useState<Client | null>(null)
  const [dataFilm, setDataFilm] = useState<Client | null>(null)

  const submitClient = async (values: ClientFormsInputs) => {
    await UseFetchGet(
      `client?cpf=${values.cpf}`,
      setDataClient,
      setAlertSucess,
      setAlertError
    )
  } //

  const submitFilm = async (values: any) => {
    await UseFetchGet(
      `film?titulo=${values.titulo}`,
      setDataFilm,
      setAlertSucess,
      setAlertError
    )
  }

  const submitRentFilm = async (values: RentFormsInputs) => {
    const data = {
      clientId: dataClient?.id,
      filmId: dataFilm?.id,
      dataRetirada: values.dataRetirada,
      dataDevolucao: values.dataDevolucao,
      horaDevolucao: values.horaDevolucao,
      valor: values.valor
    }

    const rentFilm = await UseFetchPost(
      'rent',
      data,
      setAlertSucess,
      setAlertError
    )
    if (rentFilm?.status) {
      router.push('/app')
    }
  }

  return (
    <div>
      <div>
        {alertSucess && (
          <div
            className='bg-green-200 border-green-600 text-green-600 border-l-4 p-4'
            role='alert'
          >
            <p className='font-bold'>{alertSucess}</p>
          </div>
        )}
        {alertError && (
          <div
            className='bg-red-200 border-red-600 text-red-600 border-l-4 p-4'
            role='alert'
          >
            <p className='font-bold'>{alertError}</p>
          </div>
        )}
      </div>
      {!dataClient && !dataFilm && (
        <Form.FormClient
          label='Insira o CPF do cliente'
          submit={submitClient}
        />
      )}
      {dataClient && !dataFilm && (
        <Form.FormFilm label='Insira o nome do Filme' submit={submitFilm} />
      )}
      {dataClient && dataFilm && (
        <Form.FormRent
          label='Registro retirada Locação:'
          submit={submitRentFilm}
          alertSucess={alertSucess}
          alertError={alertError}
          client={dataClient}
          film={dataFilm}
        />
      )}
    </div>
  )
}

export default RentFilm
