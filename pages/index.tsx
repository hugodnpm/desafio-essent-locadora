import Form from 'Component/Form/form'
import { LoginFormsInputs } from 'Component/Form/form'
import { useState } from 'react'
import { UseFetchGet } from 'utils/useFechGet'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [alertSucess, setAlertSucess] = useState('')
  const [alertError, setAlertError] = useState('')
  const [dataToken, setDataToken] = useState()
  const handleLogin = async (data: LoginFormsInputs) => {
    await UseFetchGet(
      `login?email=${data.email}&password=${data.password}`,
      setDataToken,
      setAlertSucess,
      setAlertError
    )
    if (dataToken) {
      localStorage.setItem('tokenVideo', dataToken)
      router.push('/app')
    }
  }
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 my-16'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Locadora Video Bom
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <Form.FormLogin onSubmit={handleLogin} />
      </div>
    </div>
  )
}
