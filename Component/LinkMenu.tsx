import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  children: React.ReactNode
  href: string
}

const LinkMenu = ({ children, href }: Props) => {
  const router = useRouter()
  const { pathname } = router
  const selected = pathname === href
  return (
    <>
      <Link
        className={
          selected
            ? 'inline-flex items-center w-full px-4 py-2 text-sm font-semibold  transition-colors duration-150 text-gray-800 bg-gray-100'
            : 'inline-flex items-center w-full text-sm font-semibold  transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100'
        }
        href={href}
      >
        {children}
      </Link>
    </>
  )
}
export default LinkMenu
