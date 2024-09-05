import Navbar from "./Navbar";
import { useRef, useState } from "react";
import Upload from "../../public/assets/icons/upload.svg";
import { useDispatch } from "react-redux";
import { challengeReducer } from "../slices/ChallengesSlice";

const CreateChallenge = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    img: null,
    level: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const newChallenge = {
      ...formData,
      id: new Date(),
    };

    dispatch(challengeReducer(newChallenge));

    setFormData({
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      img: null,
      level: "",
    });

    console.log("New challenge added:", newChallenge);

    // You can perform form submission logic here, like sending the data to an API
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#F8F9FD]">
        <p className="font-bold text-2xl px-20 py-4">Challenge Details</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="px-20 py-10">
          <div>
            <p className="pb-4 font-semibold">Challenge Name</p>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border w-[30%] px-2 py-1"
              type="text"
              required
            />
          </div>

          <div className="pt-8">
            <p className="pb-4 font-semibold">Start Date</p>
            <input
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="border w-[30%] px-2 py-1"
              placeholder="Add start date"
              type="date"
              required
            />
          </div>

          <div className="pt-8">
            <p className="pb-4 font-semibold">End Date</p>
            <input
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="border w-[30%] px-2 py-1"
              placeholder="Add end date"
              type="date"
              required
            />
          </div>

          <div className="pt-8">
            <p className="pb-4 font-semibold">Description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border w-[40%] h-56 px-2 py-1"
              required
            />
          </div>

          <div className="pt-8">
            <p className="pb-4 font-semibold">Image</p>
            <input
              className="hidden"
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => inputRef.current.click()}
              className="px-12 flex items-center rounded-md py-1 bg-[#F4F4F4] text-[#666666]"
            >
              Upload
              <img className="px-1" src={Upload} alt="upload icon" />
            </button>
            {formData.img && (
              <p className="pt-2 text-sm">{formData.img.name}</p>
            )}
          </div>

          <div className="pt-8">
            <p className="pb-4 font-semibold">Level Type</p>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="border rounded-md pr-24"
              required
            >
              <option value="">Select Level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="px-6 rounded-md py-1 text-white bg-[#44924C]"
            >
              Create Challenge
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateChallenge;
