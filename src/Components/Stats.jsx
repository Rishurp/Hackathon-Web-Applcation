import Book from "../../public/assets/icons/Group 1000002515.svg";

const Stats = () => {
  return (
    <div className="bg-[#002A3B] flex justify-evenly font-bold text-white w-full py-10">
      <div></div>
      <div className="flex justify-center items-center ">
        <div className="px-4">
          <img src={Book}></img>
        </div>
        <div>
          <p>100K+</p>
          <p>AI model submissions</p>
        </div>
      </div>
      <div className="border-l-2 border-[#C4C4C4]"></div>
      <div className="flex justify-center items-center  ">
        <div className="px-4">
          <img src={Book}></img>
        </div>
        <div>
          <p>50K+</p>
          <p>Data Scientists</p>
        </div>
      </div>
      <div className="border-l-2 border-[#C4C4C4]"></div>
      <div className="flex justify-center items-center ">
        <div className="px-4">
          <img src={Book}></img>
        </div>
        <div>
          <p>100K+</p>
          <p>AI Challenges hosted</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Stats;
