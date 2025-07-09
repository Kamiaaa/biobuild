import { EmblaCarousel } from "./components/Carousel";
import PrimeLocationsPage from "./components/PrimeLocation";
import Projects from "./components/Projects";
import WhoWeArePage from "./components/WhoWeAre";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <Projects />
      <WhoWeArePage />
      <PrimeLocationsPage/>
    </>
  );
}
