// components/HackathonDetails.js
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteChallenge } from "../slices/ChallengesSlice";
import Navbar from "./Navbar";
import Clock from "../../assets/icons/Clock.svg";
import Level from "../../assets/icons/skill-level.png";

const HackathonDetails = () => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { challengeData } = location.state;

  const handleDelete = () => {
    // Dispatch delete action
    dispatch(deleteChallenge({ id: challengeData.id }));

    // Navigate away after deletion, e.g., to a list of challenges
    navigateTo("/");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#003145] w-full h-[50vh] font-sans ">
        <div className="pt-12 pl-32 ">
          <div className=" w-[50%] ">
            <p className="pl-6 font-semibold flex py-1 text-start bg-[#FFCE5C]">
              <img className="pr-2" src={Clock} />
              Starts on 13th Jun22 09:00 PM (Indian Standard Time)
            </p>
          </div>
          <div className="mt-4">
            <p className=" text-white font-semibold  text-4xl">
              {challengeData.name}
            </p>
          </div>

          <div className="mt-6 text-white">
            <p>Identify the class to which each butterfly belongs to </p>
          </div>
          <div className="text-[#003145] flex  w-[20%]  my-2 bg-white">
            <img className="px-4" src={Level} alt="level" />
            <p>{challengeData.level} Level</p>
          </div>
        </div>
      </div>
      <div className="flex px-16 py-4 justify-between items-center border-b shadow-sm">
        <div className="">
          <p className=" text-lg font-semibold  ">Overview</p>
        </div>
        <div>
          <button
            onClick={() => navigateTo("/edit", { state: { challengeData } })}
            className="px-5  mx-6 rounded-md py-2 text-white bg-[#44924C]"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 rounded-md py-2 text-[#DC1414] border  border-[#DC1414]"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-8 px-24 w-[60 %]">
        <p>{challengeData.description}</p>
      </div>
    </div>
  );
};

export default HackathonDetails;
