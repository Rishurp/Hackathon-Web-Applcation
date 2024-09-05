import HackathonCard from "./HackathonCard";
import { useSelector } from "react-redux";

const HackathonList = () => {
  const challengesData = useSelector((state) => state.challenges.value);
  const filterData = useSelector((state) => state.filter.filteredData);

  console.log(filterData);
  return (
    <div className="bg-[#003145]  w-full  p-4">
      {filterData.length > 0 ? (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 px-16   gap-6 ">
          {filterData.map((challengeData, index) => (
            <HackathonCard key={index} challengeData={challengeData} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 px-16   gap-6 ">
          {challengesData.map((challengeData, index) => (
            <HackathonCard key={index} challengeData={challengeData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HackathonList;
