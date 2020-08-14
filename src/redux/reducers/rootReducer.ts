import shopsReducer from "./shops/shopsReducer";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  shops: shopsReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
