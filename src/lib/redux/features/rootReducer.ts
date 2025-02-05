import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import competitionsReducer from "./competition/competitionsReducer";
import competitionReducer from "./competition/competitionReducer";
import createCompetitionReducer from "./competition/createCompetitionReducer";
import participantsReducer from "./competition/participantsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  competitions: competitionsReducer,
  competition: competitionReducer,
  mutateCompetition: createCompetitionReducer,
  participants: participantsReducer,
});

export default rootReducer;
