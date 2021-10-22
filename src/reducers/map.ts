import {
  createSlice,
    Reducer,
} from "@reduxjs/toolkit";

import {MapState} from "../types"

const initialState:MapState = {
  center: {lat: 48.4923659, lng: -122.3577212}
};

export const map = createSlice({
  name: "map",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMapCenter(state, action) {
      // console.log("action.payload",)
      state.center = action.payload;
    }
  },

});

export const {setMapCenter} = map.actions;

const mapReducer: Reducer<MapState> = map.reducer;
export default mapReducer;
