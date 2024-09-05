import { createSlice } from "@reduxjs/toolkit";

export const ChallengeSlice = createSlice({
  name: "challenges",
  initialState: {
    value: [
      {
        id: 1,
        name: "Data Science Bootcamp - Graded Datathon",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "17th June'25 09:00 PM",
        endDate: "21st June'25 11:00 PM",
        level: "Hard",
        img: "../../public/assets/cardimage/Group 1000002771.png",
      },
      {
        id: 2,
        name: "Data Sprint 72 - Butterfly Identification",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "03rd September'24 09:00 AM",
        endDate: "4th September'24 11:00 PM",
        level: "Medium",
        img: "../../public/assets/cardimage/Group 1000002766.png",
      },
      {
        id: 3,
        name: "Data Sprint 71 - Weather Recognition",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "17th June'22 09:00 PM",
        endDate: "21st June'22 11:00 PM",
        level: "Easy",
        img: "../../public/assets/cardimage/Group 1000002767.png",
      },
      {
        id: 4,
        name: "Data Sprint 70-Airline Passenger Satisfaction",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "17th June'22 09:00 PM",
        endDate: "21st June'22 11:00 PM",
        level: "Easy",
        img: "../../public/assets/cardimage/Group 1000002772.png",
      },
      {
        id: 5,
        name: "Engineering Graduates Employment Outcomes",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "17th June'22 09:00 PM",
        endDate: "21st June'22 11:00 PM",
        level: "Easy",
        img: "../../public/assets/cardimage/Group 1000002773.png",
      },
      {
        id: 6,
        name: "Travel Insurance Claim Prediction",
        description:
          "Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word Lepidoptera means scaly wings in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.",
        startDate: "17th June'22 09:00 PM",
        endDate: "21st June'22 11:00 PM",
        level: "Easy",
        img: "../../public/assets/cardimage/Group 1000002466.png",
      },
    ],
  },
  reducers: {
    challengeReducer: (state, action) => {
      state.value.push(action.payload);
    },
    updateChallenge: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.value.findIndex((challenge) => challenge.id === id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...updatedData };
      }
    },
    deleteChallenge: (state, action) => {
      const { id } = action.payload;
      state.value = state.value.filter((challenge) => challenge.id !== id);
    },
  },
});

export const { challengeReducer, updateChallenge, deleteChallenge } =
  ChallengeSlice.actions;
export default ChallengeSlice.reducer;
