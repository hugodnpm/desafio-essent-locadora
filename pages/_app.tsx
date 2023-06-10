import '../styles/globals.css'
import LayoutDashBoard from 'Component/Layout/layoutDashBoard'
import LayoutPublic from 'Component/Layout/layoutPublic'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('tokenVideo') : null

  const { pathname } = router
  let Layout = LayoutPublic
  if (pathname.indexOf('/app') === 0) {
    Layout = LayoutDashBoard
  }
  useEffect(() => {
    if (!token && router.pathname !== '/') {
      router.push('/')
    }
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
