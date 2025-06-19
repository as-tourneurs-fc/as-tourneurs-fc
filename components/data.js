import {
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  StarIcon,
  PuzzlePieceIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";


import benefitOneImg from "../public/img/_bee11115.jpg";
import benefitTwoImg from "../public/img/XL1_6413.jpg";
import benefitThreeImg from "../public/img/_XL19789.jpg";
import newsOneImg from "../public/img/affiche-tfc-2023.jpg";
import newsThreeImg from "../public/img/affiche-tfc-2025.jpg";


const benefitOne = {
  title: "Nos buts",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Regrouper et faire se rencontrer les amateurs de tournage sur bois.",
      desc: "",
      icon: <UserGroupIcon />,
    },
    {
      title: "Découvrir, échanger, diffuser les techniques traditionnelles et modernes de l’activité.",
      desc: "",
      icon: <PuzzlePieceIcon />,
    },
    {
      title: "Faire connaître, développer et promouvoir le tournage sur bois.",
      desc: "",
      icon: <SunIcon />,
    },
  ],
}

const benefitTwo = {
  title: "Esprit",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Bénévolat, partage, échanges, entraide.",
      desc: "",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Progresser, se renouveler, innover, créer, transmettre.",
      desc: "",
      icon: <AcademicCapIcon />,
    },
  ],
}

const benefitThree = {
  title: "Activités",
  desc: "",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Journées techniques de formation et de perfectionnement.",
      desc: "",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Expositions et animations sur le tournage et autres arts du bois.",
      desc: "",
      icon: <SparklesIcon />,
    },
    {
      title: "Participation active à des manifestations pour faire connaître et développer l’activité auprès du grand public.",
      desc: "",
      icon: <StarIcon />,
    },
  ],
}

const newsOne = {
  title: "Fête du tournage et des arts du bois",
  desc: "Salle DOLEXPO, rond-point des droits de l’homme, DOLE (39)",
  image: newsOneImg,
  excerpt: `<p class="mb-5"><strong>du vendredi 10 novembre 14h00 au dimanche 12 novembre 2023 jusqu’à 18h00</strong></p><p class="mb-5">L'association des tourneurs de Franche-Comté organise pour la 4ème fois sa grande fête du tournage et des arts du bois. <br />Particuliers, associations et professionnels se regrouperont autour d'une exposition sur le thème de la Bourgogne-Franche-Comté où vous seront présentés de multiples réalisations représentant notre belle région. <br />Vous pourrez admirer des objets artisanaux de grande diversité et les dernières innovations en matériels, voir des démontrations, et assister à des conférences présentées par Mme NAIGEON et M. GISQUET. <br />Pêche à la ligne et magicien pour les enfants. Restauration sur place.</p><p class="mb-5">Tarif unique de 5 euros par entrée et passe 3 jours 10 euros, entrée gratuite pour les moins de 12 ans.</p><p cl ass="mb-5">Pour tous renseignements complémentaires : <br /> <a href="https://www.facebook.com/groups/tourneursdefranchecomte" target="_blank" rel="noopener">https://www.facebook.com/groups/tourneursdefranchecomte</a></p>`,
  detail_link: '/fete-du-tournage-et-des-arts-du-bois/'
}

const newsTwo = {
  title: "Fête du tournage et des arts du bois",
  desc: "Salle DOLEXPO, rond-point des droits de l’homme, DOLE (39)",
  image: false,
  excerpt: `<p class="mb-5"><strong>Du vendredi 7 novembre 14h00 <br />au dimanche 9 novembre 2025 jusqu’à 18h00</strong></p><p class="mb-5">L’association des tourneurs de Franche-Comté organise pour la 5<sup>e</sup> fois sa grande fête du tournage et des arts du bois. <br />Particuliers, associations et professionnels se regrouperont autour d’une exposition. L’exposition sera une rétrospective des <strong>20 ans</strong> de l’association <strong>ATFC</strong>.</p><p class="mb-5">Vous pourrez admirer des objets artisanaux de grande diversité et les dernières innovations en matériels.</p><p class="mb-5">Des informations complémentaire seront ajoutées en cours d’année 2025.</p><p class="mb-5"><mark class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"><a href="https://www.facebook.com/groups/tourneursdefranchecomte" target="_blank" rel="noopener" class="text-indigo-600 hover:text-indigo-800 transition-all duration-300">https://www.facebook.com/groups/tourneursdefranchecomte</a></mark></p>`,
  detail_link: false
}

const newsThree = {
  title: "Fête des Tourneurs et de l’Artisant d’art",
  desc: "16 route de Grandfontaine – 25320 Torpes",
  image: newsThreeImg,
  excerpt: `<p class="mb-5"><strong>Du vendredi 7 novembre 14h00 <br />au dimanche 9 novembre 2025 jusqu’à 18h00</strong></p><div class="mb-5 bg-gray-100 px-4 rounded-2xl py-3 dark:bg-neutral-800"><p class="mb-5">Cette année <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"><a href="https://www.facebook.com/people/Thierry-Berth%C3%A9as/100057530766198/" target="_blank" rel="noopener" class="text-indigo-600 hover:text-indigo-800 transition-all duration-300">Thierry Berthéas</a></mark> sera de la fête des tourneurs de Franche-Comté.</p><p class="mb-1">Chaque jour une démonstration :</p><ul class="list-disc pl-10"><li class="mb-1">une sculpture Africaine</li><li class="mb-1">un coffret graphique</li><li class="mb-1">une sculpture à la défonceuse</li></ul></div><p class="mb-5">L’association des tourneurs de Franche-Comté organise pour la 5<sup>e</sup> fois sa grande fête du tournage et des arts du bois. <br />Particuliers, associations et professionnels se regrouperont autour d’une exposition. L’exposition sera une rétrospective des <strong>20 ans de l’association ATFC</strong>.</p><p class="mb-5"><mark class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"><a href="https://www.facebook.com/groups/tourneursdefranchecomte" target="_blank" rel="noopener" class="text-indigo-600 hover:text-indigo-800 transition-all duration-300">https://www.facebook.com/groups/tourneursdefranchecomte</a></mark></p>`,
  detail_link: false
}

export { benefitOne, benefitTwo, benefitThree, newsOne, newsTwo, newsThree }


// https://www.facebook.com/people/Thierry-Berth%C3%A9as/100057530766198/