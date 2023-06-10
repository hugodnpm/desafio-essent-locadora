import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { UseFetchPost } from 'utils/useFechPost'

const clientFormSchema = z.object({
  titulo: z.string().nonempty('O nome é Obrigatório'),
  ano: z.string(),
  imagem: z.string(),
  sinopse: z.string(),
  elenco: z.string(),
  categoria: z.string(),
  copia: z.string()
})
type NewClientForm = z.infer<typeof clientFormSchema>

const Film = () => {
  const [alertSucess, setAlertSucess] = useState('')
  const [alertError, setAlertError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewClientForm>({
    resolver: zodResolver(clientFormSchema)
  })
  const submit: SubmitHandler<NewClientForm> = async (values) => {
    const data = {
      titulo: values.titulo,
      ano: parseInt(values.ano),
      imagem: values.imagem,
      sinopse: values.sinopse,
      elenco: values.elenco,
      categoria: values.categoria,
      copia: values.copia
    }
    await UseFetchPost('film', data, setAlertSucess, setAlertError)
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='space-y-12'>
        <div className=' pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Cadastro de Filmes
          </h2>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Dados Filme{' '}
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
          </h2>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='titulo'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Título:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('titulo')}
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.titulo && <span>{errors.titulo.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='ano'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Ano:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('ano')}
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.ano && <span>{errors.ano.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='imagem'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Imagem:
              </label>
              <div className='mt-2'>
                <input
                  {...register('imagem')}
                  type='text'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.imagem && <span>{errors.imagem.message}</span>}
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='sinopse'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Sinopse:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('sinopse')}
                  autoComplete='street-address'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='elenco'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Elenco:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('elenco')}
                  autoComplete='address-level2'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='categoria'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Categoria:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('categoria')}
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='copia'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Número de Cópias:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('copia')}
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button
          type='button'
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Save
        </button>
      </div>
    </form>
  )
}
export default Film
