import '@/styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import PopUp from '@/context/LoginPopUpContext'
import Login from '@/components/Login'

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return(
    <SessionProvider session={session}>

    <PopUp>
    <Layout>
       <Component {...pageProps} />
       <Login/>
    </Layout>
    </PopUp>
    </SessionProvider>
  )
}
