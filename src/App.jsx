import Hackathon from "./Components/Hackathon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HackathonDetails from "./Components/HackathonDetails";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Hackathon} />
            <Route path="/details" Component={HackathonDetails} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
