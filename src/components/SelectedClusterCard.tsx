import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SelectedClusterCard() {
   const dispatch = useDispatch();
  // NOTE: You can use the react-redux hooks api in addition to map state to props
  const eventClusterData = useSelector((state) => {state.deviceEvents.clusterEvents});
}
