import {
  UserGroupIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
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

export { benefitOne, benefitTwo, benefitThree };
