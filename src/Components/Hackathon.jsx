import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Participate from "./Participate";
import Filter from "./Filter";
import HackathonList from "./HackathonList";

const Hackathon = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Participate />
      <Filter />
      <HackathonList />
    </div>
  );
};

export default Hackathon;
