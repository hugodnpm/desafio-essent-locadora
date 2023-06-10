import { useEffect, useState } from 'react'
import { UseFetchGet } from 'utils/useFechGet'

interface Cliente {
  id: string
  name: string
  email: string
  atorFavorito: string
  diretorfavorito: string
  categoriaFavorito: string
}

const AppHome = () => {
  const [alertSucess, setAlertSucess] = useState('')
  const [alertError, setAlertError] = useState('')
  const [dataClient, setDataClient] = useState<Cliente[]>([])
  useEffect(() => {
    const fetchGet = async () => {
      const res = await UseFetchGet(
        `client`,
        setDataClient,
        setAlertSucess,
        setAlertError
      )
    }
    fetchGet()
  }, [])
  console.log(dataClient)
  return (
    <>
      <main className='h-full overflow-y-auto'>
        <div className='container px-6 mx-auto grid'>
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Dashboard
          </h2>

          {/* New Table */}
          <div className='w-full overflow-hidden rounded-lg shadow-xs'>
            <div className='w-full overflow-x-auto'>
              <table className='w-full whitespace-no-wrap'>
                <thead>
                  <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                    <th className='px-4 py-3'>Cliente</th>
                    <th className='px-4 py-3'>Email</th>
                    <th className='px-4 py-3'>Filme Favorito</th>
                    <th className='px-4 py-3'>Diretor Favorito</th>
                    <th className='px-4 py-3'>Tipo Favorito</th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                  {dataClient &&
                    dataClient?.map((item) => {
                      return (
                        <tr
                          key={item.id}
                          className='text-gray-700 dark:text-gray-400'
                        >
                          <td className='px-4 py-3'>
                            <div className='flex items-center text-sm'>
                              <div>
                                <p className='font-semibold'>{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className='px-4 py-3 text-sm'>{item.email}</td>
                          <td className='px-4 py-3 text-xs'>
                            {item.atorFavorito}
                          </td>
                          <td className='px-4 py-3 text-sm'>
                            {item.diretorfavorito}
                          </td>
                          <td className='px-4 py-3 text-sm'>
                            {item.categoriaFavorito}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
            <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'></div>
          </div>
        </div>
      </main>
    </>
  )
}
export default AppHome
