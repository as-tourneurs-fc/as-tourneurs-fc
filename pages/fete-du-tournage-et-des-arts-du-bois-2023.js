import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero";
// import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import News from "../components/news";
import Footer from "../components/footer";


import imgBg from "../public/img/311571546_1240304366789210_7344339275355158740_n.jpg"

import 'react-slideshow-image/dist/styles.css';

import Container from "../components/container";
import Link from 'next/link'

import newsOneImg from "../public/img/affiche-tfc-2023.jpg";
import mainLogo from "../public/img/logo-atfc.png";

export default function NewsDetailOne() {
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

      <Container className="flex flex-wrap justify-center">

        <div>

          <div className="w-full text-center">
            <Link href="/">
              <Image
                src={mainLogo}
                alt="Association des Tourneurs de France-Comté"
                placeholder="blur"
                className="mx-auto"
              />
            </Link>
          </div>

        </div>

      </Container>


      <Container>
        <div className="w-full flex justify-center">
          <div className="max-w-screen-lg">


            <div className="w-full my-5">

              <div className="md:float-right md:ml-10 mb-12">
                <Image
                  src={newsOneImg}
                  width="319"
                  height="451"
                  alt=""
                  placeholder="blur"
                  className="mx-auto"
                />
              </div>

              <h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Fête du tournage et des arts du bois</h1>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Salle DOLEXPO, rond-point des droits de l’homme, DOLE (39)</p>

              <p className="mb-5"><strong>du vendredi 10 novembre 14h00 au dimanche 12 novembre 2023 jusqu’à 18h00</strong></p>

              <p className="mb-5">Devant le succès des éditions précédentes, l’association des tourneurs de Franche-Comté organise pour la 4<sup>e</sup> fois sa grande fête du tournage et des arts du bois à la salle DOLEXPO de DOLE (39).</p>

              <p className="mb-5">De nombreux particuliers, associations et professionnels se regrouperont autour d’une exposition sur le thème de la Bourgogne-Franche-Comté, où vous seront présentés de multiples réalisations représentant notre belle région. Vous découvrirez sans doute quelques facettes de nos départements que vous ne connaissiez pas encore. <br />Ces passionnés partageront avec vous leur amour pour tout ce qui est en relation avec le travail du bois. Ils seront heureux de vous expliquer et de vous montrer leurs différentes techniques.</p>

              <p className="mb-5">Vous pourrez admirer au fil des différents stands des objets artisanaux de grande diversité alliant pièces de décoration, objets utilitaires, bijoux, jouets, et bien d’autres. Vous pourrez également découvrir les dernières innovations en matériaux et matériels utiles aux différentes manières de façonner le bois. Vous pourrez également tout au long de la journée, assister à des démonstrations effectuées par certains exposants ainsi que par les membres de l’association.</p>

              <p className="mb-5">De retour des Etats-Unis où elle vient de se produire, Madame NAIGEON Joss, artiste éminente, nous fera la joie de nous présenter une conférence et nous faire partager toute sa sensibilité. Une démonstration nous sera également présentée par Monsieur GISQUET Lionel, reconnu pour son travail d’une précision remarquable.</p>

              <div className="my-10 flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-4 dark:bg-neutral-800">

                <p className="mt-8 mb-5"><em>Durée des démonstrations 1 heure 30</em></p>

                <h2 className="mb-4 text-lg font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Démos de Joss Naigeon</h2>

                <ul className="list-disc pl-10">
                  <li className="mb-2">Vendredi  14h30 Ange gardien.</li>
                  <li className="mb-2">Samedi 14h30 bulle de dentelle.</li>
                  <li className="mb-2">Dimanche 14h00 Ukibori Boxes.</li>
                </ul>

                <h2 className="mt-8 mb-4 text-lg font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-xl dark:text-white">Démos de Lionel Gisquet</h2>

                <ul className="list-disc mb-8 pl-10">
                  <li className="mb-2">Vendredi 16h30 Boite dans une boule.</li>
                  <li className="mb-2">Samedi 16h30 suite Boite dans une boule.</li>
                  <li className="mb-2">Dimanche 16h00 boule de Canton.</li>
                </ul>

              </div>

              <p className="mb-5">Une pêche à la ligne est organisée pour les enfants qui gagneront à chaque fois des objets tournés. Ils auront également la joie de pouvoir rencontrer Onyx le magicien qui leur offrira des ballons les samedi et dimanche de 14 à 16 heures.</p>

              <p className="mb-5">Possibilité de se restaurer sur place le midi, et stand de gaufres et crêpes l’après-midi.</p>

              <p className="mb-5">Tarif unique de 5 euros par entrée et passe 3 jours 10 euros, entrée gratuite pour les moins de 12 ans.</p>

              <p className="mb-5">Pour tous renseignements complémentaires : <br /> <a href="https://www.facebook.com/groups/tourneursdefranchecomte" target="_blank" rel="noopener">https://www.facebook.com/groups/tourneursdefranchecomte</a></p>


            </div>

            <div className="w-full pt-5">
              <p className="mb-5"><a href="/" className="py-2 px-4 text-2xl leading-normal text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 hover:text-indigo-800 transition-all duration-300">Retour à l’accueil</a></p>
            </div>

          </div>
        </div>
      </Container>

      <Footer />

      {/* <PopupWidget /> */}

    </>
  );
}
