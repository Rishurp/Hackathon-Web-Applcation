import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Participate from "./Components/Participate";
import Filter from "./Components/Filter";
import HackathonList from "./Components/HackathonList";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Participate />
        <Filter />
        <HackathonList />
      </div>
    </>
  );
}

export default App;
