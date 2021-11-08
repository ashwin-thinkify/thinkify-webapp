import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Particles from "react-tsparticles";
import NavBar from '../components/Navbar';

const Home: NextPage = () => {

  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thinkify</title>
        <meta name="description" content="thinkify is a recruting platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
	  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="col-sm-6">
        <h1 className="text-xl md:text-3xl mb-5 text-white">
        	A career coach in your pocket
        </h1>
        <h2 className="lead mb-5 leading-6 text-base md:text-xl text-white">
          Find your dream job with the help of a certified career coach.
        </h2>
        <div className="mt-5">
          <a href="/start" className="btn btn-primary btn-pill py-3 px-4 font-weight-semi letterspace-2">
            Find Your Coach
            <span className="mdi mdi-arrow-right mdi-21px m-l-1"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
        <Particles id="tsparticles" url="./particlesjs-config.json" init={particlesInit} loaded={particlesLoaded} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://thinkify.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2018 by Thinkify{' '}
          <span className={styles.logo}>
            <Image src="/images/logo.png" alt="Vercel Logo" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
