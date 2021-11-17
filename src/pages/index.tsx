import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SendIcon from '@mui/icons-material/Send';
import styles from '../../styles/Home.module.css'
import Particles from "react-tsparticles";
import NavBar from '../components/Navbar';
import LoadingButton from '@mui/lab/LoadingButton';
import Home1 from '../components/home';

const Home: NextPage = () => {

  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const handleClick = () => {
    console.log('Handle click');
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
	  <div className="container z-50">
		<div className="row mt-4 mb-4">
		<div className="col-sm-6">
			<h1 className="text-xl md:text-3xl mb-5 text-white">
				Level up your career
			</h1>
			{/* <h2 className="lead mb-5 leading-6 text-base md:text-xl text-white">
			Find your dream job with the help of a certified career coach.
			</h2>
			<div className="mt-5">
			<LoadingButton
				onClick={handleClick}
				endIcon={<SendIcon />}
				loadingPosition="end"
				variant="contained"
			>
				Find Your Coach
			</LoadingButton>
			</div> */}
			<Home1/>
			
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
