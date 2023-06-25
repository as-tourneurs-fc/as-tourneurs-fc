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
};

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
};

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
};

const newsOne = {
  title: "Fête du tournage et des arts du bois",
  desc: "Salle DOLEXPO, rond-point des droits de l’homme, DOLE (39)",
  image: newsOneImg,
  excerpt: `<p class="mb-5"><strong>du vendredi 10 novembre 14h00 au dimanche 12 novembre 2023 jusqu’à 18h00</strong></p><p class="mb-5">L'association des tourneurs de Franche-Comté organise pour la 4ème fois sa grande fête du tournage et des arts du bois. <br />Particuliers, associations et professionnels se regrouperont autour d'une exposition sur le thème de la Bourgogne-Franche-Comté où vous seront présentés de multiples réalisations représentant notre belle région. <br />Vous pourrez admirer des objets artisanaux de grande diversité et les dernières innovations en matériels, voir des démontrations, et assister à des conférences présentées par Mme NAIGEON et M. GISQUET. <br />Pêche à la ligne et magicien pour les enfants. Restauration sur place.</p><p class="mb-5">Tarif unique de 5 euros par entrée et passe 3 jours 10 euros, entrée gratuite pour les moins de 12 ans.</p><p cl ass="mb-5">Pour tous renseignements complémentaires : <br /> <a href="https://www.facebook.com/groups/tourneursdefranchecomte" target="_blank" rel="noopener">https://www.facebook.com/groups/tourneursdefranchecomte</a></p>`
};

export { benefitOne, benefitTwo, benefitThree, newsOne };
