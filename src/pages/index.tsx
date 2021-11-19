import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../styles/Home.module.css";
import Particles from "react-tsparticles";
import NavBar from "../components/Navbar";
import LoadingButton from "@mui/lab/LoadingButton";
import Home1 from "../components/home";

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Thinkify</title>
        <meta name="description" content="thinkify is a recruting platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className="hero-section wf-section">
          <div className="container">
            <div className="hero-grid">
              <div
                id="w-node-_73498348-a563-d3f5-ce37-729646904a6e-69f3f067"
                className="hero-content-home"
              >
                <div id="w-node-fe201651-33d8-a264-0f5e-c650661890f4-69f3f067">
                  <h1>High-performance engineering teams</h1>
                  <div className="copy">
                    Thinkify provides technical recruiting, staff augmentation,
                    and managed development services for engineering leaders of
                    high-performance software and hardware teams.
                  </div>
                </div>
                <div
                  id="w-node-_20675ee2-98d6-b9c1-30e9-61d6f37986b5-69f3f067"
                  className="home-hero-links"
                >
                  <div>
                    <h4>For Employers</h4>
                    <a href="#hiring-solutions" className="hero-learn-more">
                      Hiring Solutions
                    </a>
                  </div>
                  <div>
                    <h4>For Job Seekers</h4>
                    <a href="#career-solutions" className="hero-learn-more">
                      Career Solutions
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_110c7caf-00b0-4ce7-df44-6a95c9837534-69f3f067"
                className="hero-image-home"
              ></div>
            </div>
          </div>
        </div>
        <Home1 />
        <div className="section gray wf-section">
          <div className="container">
            <div className="story-grid">
              <img
                src="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5fac1c36f403a97ee39c3fcf_nearshore.jpg"
                sizes="(max-width: 767px) 96vw, (max-width: 991px) 97vw, 545px"
                srcset="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5fac1c36f403a97ee39c3fcf_nearshore-p-800.jpeg 800w, https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5fac1c36f403a97ee39c3fcf_nearshore-p-1080.jpeg 1080w, https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5fac1c36f403a97ee39c3fcf_nearshore-p-1600.jpeg 1600w, https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5fac1c36f403a97ee39c3fcf_nearshore.jpg 1613w"
                alt=""
              />
              <div className="career-change-grid">
                <h2 className="no-margin">Throttle your career </h2>
                <div className="copy">
                  With Thinkify, we enable you to introspect where you stand and
                  move up the ladder , Enhance your exposure by working with
                  Interesting products from scratch with smart Engineers .
                  <a
                    href="https://app.Thinkify.net/signup"
                    className="cta-button w-inline-block"
                  >
                    <div>Join Thinkify</div>
                  </a>
                  <a
                    href="/passive-search"
                    className="cta-button-secondary w-inline-block"
                  >
                    <div>Learn More</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="hiring-solutions" className="section wf-section">
          <div className="container">
            <div className="section-header">
              <h1>Hiring Solutions</h1>
            </div>
            <div className="section-body">
              <div className="story-grid">
                <div>
                  <h2> Technical Recruiting</h2>
                  <div className="copy">
                    Thinkify was founded by engineers who have worked previously
                    at Flipkart, Adobe and Amazon to name a few. We provide
                    full-service technical recruiting solutions for engineering
                    leaders that have high standards. <br />
                    <br />
                    The best talent is never on the market long, which is why
                    Thinkify specializes in finding passive candidates. Our
                    unique targeting and vetting process ensures you get
                    high-quality candidates you'll want to hire.
                    <br />
                  </div>
                  <a href="/recruiting" className="benefit-learn-more">
                    Learn more about our recruiting services
                    <span className="learn-more-chevron"></span>
                  </a>
                </div>
                <img
                  src="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5ef1228e3ff6f818b152bfd3_smiling-whiteboard.jpg"
                  loading="lazy"
                  id="w-node-_9abebad9-7baa-c61b-ae77-56300cd8663e-69f3f067"
                  alt=""
                />
              </div>
              <div className="story-grid">
                <img
                  src="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5f035a81074ad95374950c63_open.jpg"
                  loading="lazy"
                  alt=""
                />
                <div>
                  <h2>Senior Developers</h2>
                  <div className="copy">
                    The&nbsp;Thinkify Network is a curated network of senior
                    software engineers, data scientists, SDETs, designers and
                    product managers, that have demonstrated experience building
                    and shipping high-quality software at scale.
                    <br />
                    <br />
                    That means you are hiring from an elite talent pool that
                    have already passed the most rigorous hiring bars in the
                    software industry.
                    <br />
                    <br />
                    Thinkify Engineers are based across the world, work onsite
                    or remote, and hail from the best software engineering
                    organizations in the world. <br />
                  </div>
                  <a href="/contractors" className="benefit-learn-more">
                    Learn more about hiring Thinkify
                    <span className="learn-more-chevron"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="career-solutions" className="section wf-section">
          <div className="container">
            <div className="section-header">
              <h1>Career Solutions</h1>
            </div>
            <div className="section-body">
              <div className="story-grid">
                <div>
                  <h2>Passively and privately search for your next job</h2>
                  <div className="copy">
                    You can now use Facet to passively and privately search for
                    your next job. Facet only sends you jobs that match
                    the&nbsp;preferences you've defined, like salary range, tech
                    stack, company size, and location. We'll also help you
                    through the interview and negotiation process.
                    <br />
                    <br />
                    Facet is 100% free for job seekers.
                  </div>
                  <a href="/passive-search" className="benefit-learn-more">
                    Learn more<span className="learn-more-chevron"></span>
                  </a>
                </div>
                <img
                  src="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5eecfd7dbe3ccd6091a9859f_woman-laptop.jpg"
                  loading="lazy"
                  id="w-node-_1362362b-3670-8c1a-37a5-98987c589634-69f3f067"
                  alt=""
                />
              </div>
              <div className="story-grid">
                <img
                  src="https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5ee479111725f900cbf3f052_fdn-member.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 96vw, (max-width: 991px) 97vw, 545px"
                  srcset={"https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5ee479111725f900cbf3f052_fdn-member-p-1080.jpeg 1080w, https://assets-global.website-files.com/5ee479111725f94ad4f3ef97/5ee479111725f900cbf3f052_fdn-member.jpg 1190w"}
                  alt=""
                />
                <div>
                  <h2>Become a Thinkify </h2>
                  <div className="copy">
                    Are you a senior developer, designer, product manager, or
                    data scientist that wants to propel you career to next level? Join the
                    thinkify Network (it's free!) and get high-quality
                    full-time opportunities.
                    <br />
                  </div>
                  <a href="/contractor-network" className="benefit-learn-more">
                    Learn more<span className="learn-more-chevron"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://thinkify.io" target="_blank" rel="noopener noreferrer">
          © 2018 by Thinkify{" "}
          <span className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Vercel Logo"
              width={16}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
