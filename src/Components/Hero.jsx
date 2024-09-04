import { useNavigate } from "react-router-dom";
import Rocket from "../../assets/icons/PicsArt_04-14-04.42 1.svg";

const Hero = () => {
  const navigateTo = useNavigate();
  return (
    <div className="bg-[#003145] w-full h-[70%] font-sans flex items-center justify-around ">
      <div className="hero-information w-[42%]  h-[60%] text-white">
        <div className=" heading-message w-full text-start  border-l-8 pl-16 md:text-2xl border-[#FFCE5C] ">
          <p className="font-semibold pt-2 ">Accelerate Innovation</p>
          <p className="font-semibold  py-2">with Global AI Challenges</p>
        </div>
        <div className=" description pl-20 w-[80%] pt-6">
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through
          </p>
        </div>
        <div className=" pl-20 pt-10">
          <button
            onClick={() => navigateTo("/create-challenge")}
            className="text-[#003145] rounded-[10px] px-3 py-1 font-semibold bg-[#FFFFFF]"
          >
            Create Challenge
          </button>
        </div>
      </div>
      <div>
        <img src={Rocket} alt="RocketIcon" />
      </div>
    </div>
  );
};

export default Hero;
