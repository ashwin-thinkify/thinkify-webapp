import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Particles from "react-tsparticles";

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
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
