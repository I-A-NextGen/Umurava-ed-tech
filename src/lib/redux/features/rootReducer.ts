import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import competitionsReducer from "./competition/competitionsReducer";
import competitionReducer from "./competition/competitionReducer";
import mutateCompetitionReducer from "./competition/mutateCompetitionReducer";
import participantsReducer from "./competition/participantsReducer";
import applicationReducer from "./competition/applicationReducer";
import statsReducer from "./competition/statsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  competitions: competitionsReducer,
  competition: competitionReducer,
  mutateCompetition: mutateCompetitionReducer,
  participants: participantsReducer,
  application: applicationReducer,
  competitionsStats: statsReducer,
});

export default rootReducer;
