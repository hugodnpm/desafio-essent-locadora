import '../styles/globals.css'
import LayoutDashBoard from 'Component/Layout/layoutDashBoard'
import LayoutPublic from 'Component/Layout/layoutPublic'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function useTokenRedirect() {
  const router = useRouter()
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('tokenVideo') : null

  useEffect(() => {
    if (!token && router.pathname !== '/') {
      router.push('/')
    }
  }, [token, router])
}

export default function App({ Component, pageProps }: AppProps) {
  useTokenRedirect()

  const { pathname } = useRouter()
  let Layout = LayoutPublic

  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutDashBoard
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
