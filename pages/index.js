import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
// import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, benefitThree, newsOne } from "../components/data";
// import Video from "../components/video";
import Benefits from "../components/benefits";
import News from "../components/news";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
// import Cta from "../components/cta";
// import Faq from "../components/faq";
// import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

import imgBg from "../public/img/311571546_1240304366789210_7344339275355158740_n.jpg"

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Container from "../components/container";


import slide32 from '../public/img/_XL11236.jpg'
import slide31 from '../public/img/_XL19788.jpg'
import slide30 from '../public/img/_XL19804.jpg'
import slide29 from '../public/img/20161118_202525_resized_1.jpg'
import slide28 from '../public/img/311571546_1240304366789210_7344339275355158740_n.jpg'
import slide27 from '../public/img/jardin14.jpg'
import slide26 from '../public/img/jardin22.jpg'
import slide25 from '../public/img/Micropolis-2010_236.jpg'
import slide24 from '../public/img/Micropolis-2010_239.jpg'
import slide23 from '../public/img/Micropolis-2010_240.jpg'
import slide22 from '../public/img/Micropolis-2010_242.jpg'
import slide21 from '../public/img/Micropolis-2010_246.jpg'
import slide20 from '../public/img/Micropolis-2010_247.jpg'
import slide19 from '../public/img/Micropolis-2010_254.jpg'
import slide18 from '../public/img/Micropolis-2010_256.jpg'
import slide17 from '../public/img/Micropolis-2010_305.jpg'
import slide16 from '../public/img/Micropolis-2010_306.jpg'
import slide15 from '../public/img/p1060716.jpg'
import slide14 from '../public/img/P1060760.jpg'
import slide13 from '../public/img/P1060761.jpg'
import slide12 from '../public/img/P1060824.jpg'
import slide11 from '../public/img/P1060835.jpg'
import slide10 from '../public/img/P1060860.jpg'
import slide9 from '../public/img/affiche-tfc-2023.jpg'
import slide8 from '../public/img/WP_20161118_17_56_19_Pro.jpg'
import slide7 from '../public/img/affiche-tfc-2021.jpg'
import slide6 from '../public/img/wpbafb1b16_06-233x300.png'
import slide5 from '../public/img/affiche-tfc-2019.jpg'
import slide4 from '../public/img/XL1_0530.jpg'
import slide3 from '../public/img/affiche-tfc-2018.jpg'
import slide2 from '../public/img/XL1_0556.jpg'
import slide1 from '../public/img/affiche-tfc-2016.jpg'
import slide0 from '../public/img/XL1_4838.jpg'


const buttonStyle = {
  width: "30px",
  background: 'none',
  border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>,
    pauseOnHover: false
}

export default function Home() {
  return (
    <>

      <Head>
        <title>Association des Tourneurs de Franche-Comté</title>
        <meta
          name="description"
          content="Association des Tourneurs de Franche-Comté"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar /> */}

      <Hero />

      <div className="relative w-full h-48 lg:h-64 overflow-hidden flex items-center">
        <Image
          src={imgBg}
          fill={true}
          alt=""
          placeholder="blur"
          style={{ objectFit: 'cover' }}
          className="absolute top-0 left-0 w-full"
        />
        <h1 className="[text-shadow:_2px_2px_3px_indigo] relative z-[200] text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white text-center uppercase max-w-3xl mx-auto"><span className="text-indigo-100">A</span>ssociation des <span className="text-indigo-100">T</span>ourneurs de <span className="text-indigo-100">F</span>ranche-<span className="text-indigo-100">C</span>omté</h1>
      </div>

      <SectionTitle
        title="Actualités">
      </SectionTitle>

      <News data={newsOne} />

      <SectionTitle
        pretitle="Association des Tourneurs de Franche-Comté"
        title="Association à but non lucratif créée à l’initiative de notre ancien président M. Daniel Reïchenbach.">
      </SectionTitle>

      <Testimonials />

      <Benefits data={benefitOne} />

      <Benefits imgPos="right" data={benefitTwo} />

      <Benefits data={benefitThree} />

      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video /> */}

      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}


      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}

      {/* <Faq /> */}

      {/* <Cta /> */}

      <div>
        <Container>
          <Zoom scale={1.4} duration={2000} {...properties}>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide0.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide1.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide2.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide3.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide4.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide5.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide6.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide7.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide8.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide9.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide10.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide11.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide12.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide13.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide14.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide15.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide16.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide17.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide18.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide19.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide20.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide21.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide22.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide23.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide24.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide25.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide26.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide27.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide28.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide29.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide30.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide31.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
              <div className="each-slide"><div style={{ 'backgroundImage': `url(${slide32.src})`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center'}}></div></div>
          </Zoom>
        </Container>
      </div>

      <Footer />

      {/* <PopupWidget /> */}

    </>
  );
}
