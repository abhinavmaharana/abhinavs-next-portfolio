import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Banner from '../components/Home/Banner/Banner'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Abhinav Maharana</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      {/* <Banner /> */}

    </div>
  )
}

export default Home
