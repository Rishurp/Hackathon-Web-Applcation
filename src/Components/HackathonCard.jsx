// /* eslint-disable react/prop-types */

// import check from "../../assets/icons/charm_circle-tick.png";

// const HackathonCard = ({ challengeData }) => {
//   return (
//     <div>
//       <div className="max-w-80 bg-white border rounded-2xl border-none ">
//         <a href="#">
//           <img className="" src={challengeData.img} alt="" />
//         </a>

//         <div className=" ">
//           {challengeData.status === "Past" ? (
//             <p className="bg-[#FF3C00] rounded-md bg-opacity-[17%] text-[#666666] text-center mt-4 mx-24 ">
//               {challengeData.status}
//             </p>
//           ) : (
//             <p className="bg-[#F2C94C] rounded-md bg-opacity-[25%] text-[#666666] text-center mt-4 mx-24 ">
//               {challengeData.status}
//             </p>
//           )}
//         </div>
//         <div className="px-5 py-2">
//           <a href="#">
//             <h5 className="mb-2 px-4 text-lg font-semibold text-center   ">
//               {challengeData.name}
//             </h5>
//           </a>
//         </div>

//         <div className="text-[#444444] text-center font-semibold">
//           <p>Starts in</p>
//           <div className="flex  justify-center text-xs">
//             <div className="px-1">
//               <div>00</div>
//               <div className=""> Days</div>
//             </div>
//             <div> :</div>

//             <div className="px-1">
//               <div>00</div>
//               <div>Hours</div>
//             </div>
//             <div>:</div>
//             <div>
//               <div className="px-1">00</div>
//               <div>Mins</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center py-4  ">
//           <button className=" flex items-center px-4 py-2 text-white rounded-lg bg-[#44924C]  ">
//             <img src={check} alt="" className="mr-2" />{" "}
//             <span>Paricipate Now</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HackathonCard;

import React from "react";
import check from "../../assets/icons/charm_circle-tick.png";

const parseDateString = (dateString) => {
  // Example format: "17th June'22 09:00 PM"
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const parts = dateString.match(/(\d+)\w*\s+(\w+)'(\d+)\s+(\d+:\d+\s+[APM]+)/);

  if (parts) {
    const day = parseInt(parts[1], 10);
    const month = months[parts[2]];
    const year = `20${parts[3]}`; // Converting '22' to '2022'
    const time = parts[4];

    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")} ${time}`;

    return new Date(dateStr);
  }

  return new Date(dateString); // Fallback if parsing fails
};

const HackathonCard = ({ challengeData }) => {
  const endDate = parseDateString(challengeData.endDate);
  const now = new Date();

  if (isNaN(endDate.getTime())) {
    console.error("Invalid date format:", challengeData.endDate);
  }

  const timeDiff = endDate - now;
  const isPast = timeDiff <= 0;

  // Calculate days, hours, minutes remaining if the hackathon is ongoing
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div>
      <div className="max-w-80 bg-white border rounded-2xl border-none">
        <a href="#">
          <img className="" src={challengeData.img} alt="" />
        </a>

        <div className="">
          {challengeData.status === "Past" ? (
            <p className="bg-[#FF3C00] rounded-md bg-opacity-[17%] text-[#666666] text-center mt-4 mx-24">
              {challengeData.status}
            </p>
          ) : (
            <p className="bg-[#F2C94C] rounded-md bg-opacity-[25%] text-[#666666] text-center mt-4 mx-24">
              {challengeData.status}
            </p>
          )}
        </div>
        <div className="px-5 py-2">
          <a href="#">
            <h5 className="mb-2 px-4 text-lg font-semibold text-center">
              {challengeData.name}
            </h5>
          </a>
        </div>

        <div className="text-[#444444] text-center font-semibold">
          {isPast ? (
            <div className="flex flex-col ">
              <p>Ended on</p>
              <div>
                <div className="py-1">
                  {endDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "2-digit",
                  })}{" "}
                  {endDate.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute   : "2-digit",
                  })}
                </div>
              </div>
            </div>
          ) : (
            <>
              <p>Starts in</p>
              <div className="flex justify-center text-xs">
                <div className="px-1">
                  <div>{days}</div>
                  <div>Days</div>
                </div>
                <div>:</div>
                <div className="px-1">
                  <div>{hours}</div>
                  <div>Hours</div>
                </div>
                <div>:</div>
                <div className="px-1">
                  <div>{minutes}</div>
                  <div>Mins</div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center py-4">
          <button className="flex items-center px-4 py-2 text-white rounded-lg bg-[#44924C]">
            <img src={check} alt="" className="mr-2" />{" "}
            <span>Participate Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
