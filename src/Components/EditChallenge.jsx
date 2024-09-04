import { useRef } from "react";
import Upload from "../../assets/icons/upload.svg";
import Navbar from "./Navbar";

const EditChallenge = () => {
  let inputRef = useRef();

  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F9FD]">
        <p className="font-bold text-2xl px-20 py-4">Challenge Details</p>
      </div>

      <form>
        <div className="px-20 py-10">
          <div>
            <p className="pb-4 font-semibold">Challenge Name</p>
            <input className="border w-[30%] px-2 py-1 " type="text" />
          </div>
          <div className=" pt-8">
            <p className="pb-4 font-semibold">Start Date</p>
            <input
              className="border w-[30%] px-2 py-1 "
              placeholder="Add start date"
              type="date"
            />
          </div>
          <div className=" pt-8 ">
            <p className="pb-4 font-semibold">Start Date</p>
            <input
              className="border w-[30%] px-2 py-1 "
              placeholder="Add start date"
              type="date"
            />
          </div>

          <div className=" pt-8 ">
            <p className=" pb-4 font-semibold">Description</p>
            <input className="border w-[40%] h-56 px-2 py-1 " type="text" />
          </div>
          <div className=" pt-8 ">
            <p className=" pb-4 font-semibold">Image</p>
            <input className=" hidden" ref={inputRef} type="file" />
            <button className="px-12 flex items-center rounded-md py-1 bg-[#F4F4F4] text-[#666666]">
              {" "}
              Upload
              <img className="px-1" src={Upload} />
            </button>
          </div>
          <div className=" pt-8 ">
            <p className=" pb-4 font-semibold">Level Type</p>
            <select className="border rounded-md pr-24">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="pt-8">
            <button className="px-6 rounded-md py-1   text-white bg-[#44924C] ">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditChallenge;
