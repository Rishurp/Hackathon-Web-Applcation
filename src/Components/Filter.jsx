import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  return (
    <div className="bg-[#002A3B] flex flex-col items-center py-10">
      <div>
        <p className="text-white font-semibold text-xl ">Explore Challenges</p>
      </div>
      <div className="py-6 flex  justify-between w-[50%] mx-auto">
        <div className="w-[80%] flex items-center bg-white px-2 rounded-md">
          <SearchIcon />
          <input
            className=" w-full text-[#858585]  outline-none px-4 py-1"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        <div className="mx-4 ">
          <select
            className="px-4 outline-none rounded-md py-1"
            name="filter"
            id="filter"
          >
            Filter
            <option>Filter</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
