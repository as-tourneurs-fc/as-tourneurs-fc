// import Image from "next/image"
import Container from "./container"
import Image from "next/image"
import mainLogo from "../public/img/logo-atfc.png"
import ThemeChanger from "../components/DarkSwitch"

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap justify-center">

        <div>

          <div className="w-full text-center">
            <Image
              src={mainLogo}
              alt="Association des Tourneurs de France-Comté"
              placeholder="blur"
              className="mx-auto"
            />
          </div>

        </div>

        <div className="absolute top-4 right-4">
          <ThemeChanger></ThemeChanger>
        </div>

      </Container>

    </>
  );
}

