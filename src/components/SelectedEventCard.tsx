import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { MapCard } from ".";
import { useDispatch, useSelector } from "react-redux";


export default function SelectedEventCard(): JSX.Element | null {
  const dispatch = useDispatch();
  // NOTE: You can use the react-redux hooks api in addition to map state to props
  // const eventClusterData = useSelector((state) => {state.deviceEvents.clusterEvents});
  const selectedEventId = useSelector((state) => {state.deviceEvents.selectedId})

  if (typeof selectedEventId  === "undefined") {
    return null;
  } else {
  return (
    <MapCard id="event-card" title="Event">
      {selectedEventId + " "}
        {/* {fieldData.fieldName}: this is here */}
    </MapCard>)
  }
}
