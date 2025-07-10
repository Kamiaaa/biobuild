

import { EmblaCarousel } from "./components/Carousel";
import ParallaxDemo from "./components/CompanyProfile";
import PrimeLocationsPage from "./components/PrimeLocation";
import Parallax from "./components/Profile";
import Projects from "./components/Projects";
import WhoWeArePage from "./components/WhoWeAre";

export default function Home() {
  return (
    <>
      <EmblaCarousel/>
      <Projects />
      <WhoWeArePage />
      <ParallaxDemo/>
      <PrimeLocationsPage/>
    </>
  );
}
