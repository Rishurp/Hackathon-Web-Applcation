import HackathonCard from "./HackathonCard";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "17th June'25 09:00 PM",
    endDate: "21st June'25 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002771.png",
  },
  {
    id: 2,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "03rd September'24 09:00 AM",
    endDate: "4th September'24 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002766.png",
  },
  {
    id: 3,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "17th June'22 09:00 PM",
    endDate: "21st June'22 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002767.png",
  },
  {
    id: 4,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "17th June'22 09:00 PM",
    endDate: "21st June'22 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002772.png",
  },
  {
    id: 5,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "17th June'22 09:00 PM",
    endDate: "21st June'22 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002773.png",
  },
  {
    id: 6,
    name: "Data Science Bootcamp - Graded Datathon",
    description:
      "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
    startDate: "17th June'22 09:00 PM",
    endDate: "21st June'22 11:00 PM",
    level: "Easy",
    img: "../../assets/cardimage/Group 1000002466.png",
  },
];
const HackathonList = () => {
  const [challengesData, setData] = useState([...data]);

  return (
    <div className="bg-[#003145]  w-full  p-4">
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 px-16   gap-6 ">
        {challengesData.map((challengeData, index) => (
          <HackathonCard key={index} challengeData={challengeData} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
