import Head from 'next/head'
import Nav from '../components/nav'
import Pdf from '../components/pdf'
import Code from '../components/code'
import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div style={{height: '100vh'}}>
        <header>
          <Nav />
        </header>
        <main className={style.main}>
          <section className={style.left}>
            <Pdf />
          </section>
          <section className={style.right}>
            <Code />
          </section>
        </main>
        <footer>
          <p>For my fellow Knights</p>
        </footer>
      </div>
    </>
  )
}
