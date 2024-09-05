import Skills from "../../assets/icons/carbon_notebook-reference.svg";
import Robot from "../../assets/icons/Robot.svg";
import Community from "../../assets/icons/Vector.svg";
import ICard from "../../assets/icons/IdentificationCard.svg";

const Participate = () => {
  return (
    <div className=" participate my-12  ">
      <div className=" text-center">
        <p className="text-xl font-bold  text-[#000000]">
          Why Participate in{" "}
          <span className="text-[#0FA958]">AI Challenges?</span>
        </p>
      </div>
      <div className=" w-[60%] mx-auto my-8">
        <div className="flex justify-evenly">
          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Skills}></img>
            <p className="font-bold text-lg">Prove your skills</p>
            <p className="text-[#64607D]">
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>

          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Community}></img>
            <p className="font-bold text-lg">Learn From Community</p>
            <p className="text-[#64607D]">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Robot}></img>
            <p className="font-bold text-lg">Challenge yourself</p>
            <p className="text-[#64607D]">
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={ICard}></img>
            <p className="font-bold text-lg">Earn recognition</p>
            <p className="text-[#64607D]">
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
