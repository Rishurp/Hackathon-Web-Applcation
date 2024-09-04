import Navbar from "./Navbar";
import Clock from "../../assets/icons/Clock.svg";
import Level from "../../assets/icons/skill-level.png";
import { useNavigate } from "react-router-dom";

const HackathonDetails = () => {
  let navigateTo = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
      </div>
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
              Data Sprint 72 - Butterfly Identification
            </p>
          </div>

          <div className="mt-6 text-white">
            <p>Identify the class to which each butterfly belongs to </p>
          </div>
          <div className="text-[#003145] flex w-[20%]  my-2 bg-white">
            <img className="px-2" src={Level} alt="level" />
            <p>Easy Level</p>
          </div>
        </div>
      </div>
      <div className="flex px-16 py-4 justify-between items-center border-b shadow-sm">
        <div className="">
          <p className=" text-lg font-semibold  ">Overview</p>
        </div>
        <div>
          <button
            onClick={() => navigateTo("/edit")}
            className="px-5  mx-6 rounded-md py-2 text-white bg-[#44924C]"
          >
            Edit
          </button>
          <button className="px-4 rounded-md py-2 text-[#DC1414] border  border-[#DC1414]">
            Delete
          </button>
        </div>
      </div>
      <div className="mt-8 px-24 w-[60 %]">
        <p className="">
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
          <p className=" mt-8">
            {" "}
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </p>
          <p className="mt-8 mb-4">
            {" "}
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </p>
        </p>
      </div>
    </div>
  );
};

export default HackathonDetails;
