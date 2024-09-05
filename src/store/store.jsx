import { configureStore } from "@reduxjs/toolkit";
import challengeReducer from "../slices/ChallengesSlice";
import filterReducer from "../slices/FilterSlice";

const store = configureStore({
  reducer: {
    challenges: challengeReducer,
    filter: filterReducer,
  },
});

export default store;
