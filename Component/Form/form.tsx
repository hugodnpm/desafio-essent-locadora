import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

// ===> Form <===

const FormSchema = z.object({
  name: z.string().nonempty('O nome é Obrigatório'),
  cpf: z.string().nonempty('O nome é Obrigatório'),
  email: z.string().nonempty('O nome é Obrigatório'),
  address: z.string(),
  actor: z.string(),
  director: z.string()
})

export type FormsInputs = z.infer<typeof FormSchema>

interface FormProps {
  submit: SubmitHandler<FormsInputs>
  label: string
  alertSucess: any
  alertError: any
}

const Form = ({ submit, label, alertSucess, alertError }: FormProps) => {
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm<FormsInputs>({
    resolver: zodResolver(FormSchema)
  })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='space-y-12'>
        <div className=' pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            {label}
          </h2>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Dados Clientes{' '}
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
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Nome Completo:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('name')}
                  autoComplete='given-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='cpf'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                CPF:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('cpf')}
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.cpf && <span>{errors.cpf.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email:
              </label>
              <div className='mt-2'>
                <input
                  {...register('email')}
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='address'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Endereço:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('address')}
                  autoComplete='street-address'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.address && <span>{errors.address.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='actor'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Ator Favorito:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('actor')}
                  autoComplete='address-level2'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.actor && <span>{errors.actor.message}</span>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='director'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Diretor Favorito:
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  {...register('director')}
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.director && <span>{errors.director.message}</span>}
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

// ===> Form Client <===

const ClientSchema = z.object({
  cpf: z.string().nonempty('Informar um CPF.')
})

export type ClientFormsInputs = z.infer<typeof ClientSchema>

interface FormClientProps {
  submit: SubmitHandler<ClientFormsInputs>
  label: string
}
const FormClient = ({ submit, label }: FormClientProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<ClientFormsInputs>({
    resolver: zodResolver(ClientSchema)
  })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='space-y-12'>
        <div className=' pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Alugar Filme
          </h2>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='cpf'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                {label}
              </label>
              <div className='flex space-x-4'>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('cpf')}
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {errors.cpf && <span>{errors.cpf.message}</span>}
                </div>
                <div className='mt-2'>
                  <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

// ===> Form Film <===

/*const FilmSchema = z.object({
  titulo: z.string().nonempty('Informar um título.')
})

export type FilmFormsInputs = z.infer<typeof FilmSchema>

interface FormFilmProps {
  submit: SubmitHandler<FilmFormsInputs>
  label: string
}*/

const FormFilm = ({ submit, label }: any) => {
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm()

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='space-y-12'>
        <div className=' pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Alugar Filme
          </h2>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='titulo'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                {label}
              </label>
              <div className='flex space-x-4'>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('titulo')}
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
                <div className='mt-2'>
                  <button
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Consultar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
// ===> Form Alugar Film <===

const RentSchema = z.object({
  dataRetirada: z.string().nonempty('Informar uma dataRetirada.'),

  dataDevolucao: z.string().nonempty('Informar uma dataDevolucao.'),

  horaDevolucao: z.string().nonempty('Informar uma horaDevolucao.'),

  valor: z.string().nonempty('Informar uma hora.')
})

export type RentFormsInputs = z.infer<typeof RentSchema>

interface FormRentProps {
  submit: SubmitHandler<RentFormsInputs>
  label: string
  alertSucess: any
  alertError: any
  client: any
  film: any
}

const FormRent = ({
  submit,
  label,
  alertSucess,
  alertError,
  client,
  film
}: FormRentProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<RentFormsInputs>({
    resolver: zodResolver(RentSchema)
  })

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className='space-y-12'>
        <div className=' pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            {label}
          </h2>
        </div>

        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
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
            <div className='sm:col-span-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Cliente:
              </label>
              <div className='mt-2'>
                <input
                  name='name'
                  type='text'
                  defaultValue={client.name}
                  disabled
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-4 '>
              <label
                htmlFor='film'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Filme:
              </label>
              <div className='mt-2'>
                <input
                  name='film'
                  type='text'
                  defaultValue={film.titulo}
                  disabled
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='dataRetirada'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Data Retirada:
              </label>
              <div className='mt-2'>
                <input
                  {...register('dataRetirada')}
                  type='date'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.dataRetirada && (
                  <span>{errors.dataRetirada.message}</span>
                )}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='dataDevolucao'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Data Prevista Devolução:
              </label>
              <div className='mt-2'>
                <input
                  type='date'
                  {...register('dataDevolucao')}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.dataDevolucao && (
                  <span>{errors.dataDevolucao.message}</span>
                )}
              </div>
            </div>

            <div className='sm:col-span-2 sm:col-start-1'>
              <label
                htmlFor='horaDevolucao'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Hora Limite Devolução:
              </label>
              <div className='mt-2'>
                <input
                  type='time'
                  {...register('horaDevolucao')}
                  autoComplete='address-level2'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.horaDevolucao && (
                  <span>{errors.horaDevolucao.message}</span>
                )}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='valor'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Valor Total:
              </label>
              <div className='mt-2'>
                <input
                  type='number'
                  step='0.01'
                  {...register('valor')}
                  autoComplete='address-level1'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
                {errors.valor && <span>{errors.valor.message}</span>}
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
          Registrar Saída
        </button>
      </div>
    </form>
  )
}
//  ===>> Formulário Login <===

const loginSchema = z.object({
  email: z
    .string()
    .nonempty('O E-mail é Obrigatório')
    .email('Insira um e-mail válido'),
  password: z
    .string()
    .nonempty('A Senha é Obrigatória')
    .min(6, 'Asenha deve ter no mínimo 6 caracteres')
})

export type LoginFormsInputs = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSubmit: (data: LoginFormsInputs) => void
}

const FormLogin = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormsInputs>({
    resolver: zodResolver(loginSchema)
  })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-6'
      action='#'
      method='POST'
    >
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium leading-6 text-gray-900'
        >
          Email
        </label>
        <div className='mt-2'>
          <input
            {...register('email')}
            type='email'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label
            htmlFor='password'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Senha
          </label>
          <div className='text-sm'>
            <a
              href='#'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
              Esqueceu a Senha?
            </a>
          </div>
        </div>
        <div className='mt-2'>
          <input
            {...register('password')}
            type='password'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Entrar
        </button>
      </div>
    </form>
  )
}

Form.FormClient = FormClient
Form.FormFilm = FormFilm
Form.FormRent = FormRent
Form.FormLogin = FormLogin
export default Form
