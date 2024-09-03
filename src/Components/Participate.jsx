import Skills from "../../assets/icons/carbon_notebook-reference.svg";

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
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>

          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Skills}></img>
            <p className="font-bold text-lg">Prove your skills</p>
            <p className="text-[#64607D]">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Skills}></img>
            <p className="font-bold text-lg">Prove your skills</p>
            <p className="text-[#64607D]">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className="w-[50%] bg-[#F8F9FD] p-4 m-4 rounded-lg">
            <img src={Skills}></img>
            <p className="font-bold text-lg">Prove your skills</p>
            <p className="text-[#64607D]">
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
