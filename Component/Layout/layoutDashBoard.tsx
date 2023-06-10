import React from 'react'
import { useRouter } from 'next/router'
import LinkMenu from 'Component/LinkMenu'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
}

const LayoutDashBoard = ({ children }: Props) => {
  const router = useRouter()
  const getOut = async () => {
    await localStorage.removeItem('tokenVideo')
    router.push('/')
  }
  const toggleSideMenu = () => {}

  const toggleTheme = () => {}

  const toggleNotificationsMenu = () => {}
  const toggleProfileMenu = () => {}
  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <aside className='z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 '>
        <div className='py-18 text-gray-500 dark:text-gray-400'>
          <a
            className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200'
            href='#'
          >
            Locadora de Video Cassete
          </a>
          <ul className='mt-6'>
            <li className='relative px-6 py-3'>
              <span
                className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
                aria-hidden='true'
              />
              <LinkMenu href='/app'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
                <span className='ml-4'>Dashboard</span>
              </LinkMenu>
            </li>
          </ul>
          <ul>
            <li className='relative px-6 py-3'>
              <LinkMenu href='/app/client'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
                </svg>
                <span className='ml-4'>Cadastrar Cliente</span>
              </LinkMenu>
            </li>
            <li className='relative px-6 py-3'>
              <LinkMenu href='/app/film'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
                <span className='ml-4'>Cadastrar Filme</span>
              </LinkMenu>
            </li>
            <li className='relative px-6 py-3'>
              <LinkMenu href='/app/rentFilm'>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' />
                  <path d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' />
                </svg>
                <span className='ml-4'>Aluguel Filme</span>
              </LinkMenu>
            </li>
          </ul>
          <div className='px-6 my-6'>
            <button
              onClick={getOut}
              className='flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-black transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
            >
              Sair
            </button>
          </div>
        </div>
      </aside>

      <div className='flex flex-col flex-1 w-full'>
        <header className='z-10 py-4 bg-white shadow-md dark:bg-gray-800'></header>
        {children}
      </div>
    </div>
  )
}
export default LayoutDashBoard
