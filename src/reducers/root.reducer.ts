import { combineReducers } from "@reduxjs/toolkit";
import deviceEventsReducer from "./events";
import fieldsReducer from "./fields";
import mapReducer from "./map"

export default combineReducers({
  deviceEvents: deviceEventsReducer,
  fields: fieldsReducer,
  map: mapReducer,
});
