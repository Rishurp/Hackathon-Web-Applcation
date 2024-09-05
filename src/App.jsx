import Hackathon from "./Components/Hackathon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateChallenge from "./Components/CreateChallenge";
import HackathonDetails from "./Components/HackathonDetails";
import EditChallenge from "./Components/EditChallenge";
import { Provider } from "react-redux";
import store from "../src/store/store.jsx";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Hackathon} />
              <Route path="/create-challenge" Component={CreateChallenge} />
              <Route path="/details" Component={HackathonDetails} />
              <Route path="/edit" Component={EditChallenge} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
