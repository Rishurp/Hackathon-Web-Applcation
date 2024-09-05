import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateChallenge } from "../slices/ChallengesSlice";
import Upload from "../../assets/icons/upload.svg";
import Navbar from "./Navbar";

const EditChallenge = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const location = useLocation();
  const { challengeData } = location.state;

  const [name, setName] = useState(challengeData.name);
  const [startDate, setStartDate] = useState(challengeData.startDate);
  const [endDate, setEndDate] = useState(challengeData.endDate);
  const [description, setDescription] = useState(challengeData.description);
  const [level, setLevel] = useState(challengeData.level);
  const [file, setFile] = useState(null); // New state for the file
  const inputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileClick = () => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedChallengeData = {
      name,
      startDate,
      endDate,
      description,
      level,
      img: file ? URL.createObjectURL(file) : challengeData.img, // Use the new image or keep the old one
    };

    dispatch(
      updateChallenge({
        id: challengeData.id,
        updatedData: updatedChallengeData,
      })
    );

    navigateTo("/", {
      state: { challengeData: { ...challengeData, ...updatedChallengeData } },
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F9FD]">
        <p className="font-bold text-2xl px-20 py-4">Challenge Details</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="px-20 py-10">
          {/* Form fields */}
          <div>
            <p className="pb-4 font-semibold">Challenge Name</p>
            <input
              className="border w-[30%] px-2 py-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="pt-8">
            <p className="pb-4 font-semibold">Start Date</p>
            <input
              className="border w-[30%] px-2 py-1"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="pt-8">
            <p className="pb-4 font-semibold">End Date</p>
            <input
              className="border w-[30%] px-2 py-1"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="pt-8">
            <p className="pb-4 font-semibold">Description</p>
            <textarea
              className="border w-[40%] h-56 px-2 py-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="pt-8">
            <p className="pb-4 font-semibold">Image</p>
            <input
              className="hidden"
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
            <button
              type="button"
              onClick={handleFileClick}
              className="px-12 flex items-center rounded-md py-1 bg-[#F4F4F4] text-[#666666]"
            >
              Upload
              <img className="px-1" src={Upload} />
            </button>
          </div>
          <div className="pt-8">
            <p className="pb-4 font-semibold">Level Type</p>
            <select
              className="border rounded-md pr-24"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="pt-8">
            <button
              type="submit"
              className="px-6 rounded-md py-1 text-white bg-[#44924C]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditChallenge;
