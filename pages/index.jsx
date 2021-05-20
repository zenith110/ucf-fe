import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className='dark'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <Nav />
      </header>
      <main>
        <h1>Hello</h1>
      </main>
    </div>
  )
}
