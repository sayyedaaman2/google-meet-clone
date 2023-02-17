import Head from 'next/head'
import Start from '@/components/Start'
import Login from '@/components/Login'



export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Google Meet</title>
        <meta name="description" content="Use Native WebRTC API for video conferencing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Start/>
    </div>
  )
}
