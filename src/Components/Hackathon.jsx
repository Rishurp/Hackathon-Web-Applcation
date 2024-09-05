import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Participate from "./Participate";
import Filter from "./Filter";
import HackathonList from "./HackathonList";
import { useState } from "react";
import { useSelector } from "react-redux";

const Hackathon = () => {
  const challengeData = useSelector((state) => state.challenges.value);

  const [challengesData, setData] = useState(challengeData || []);

  const updateChallenges = (newData) => {
    setData(newData);
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Participate />
      <Filter  />
      <HackathonList  />
    </div>
  );
};

export default Hackathon;
