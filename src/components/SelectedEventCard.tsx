import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { MapCard } from ".";
import type { DeviceEvent} from "../types";
import { useDispatch, useSelector } from "react-redux";
import {closeEventInfoWindow} from "../reducers"

export default function SelectedEventCard({ deviceEvents }: { deviceEvents: DeviceEvent[] }): JSX.Element | null {
  const [selectedEvent, setSelectedEvent]: [selectedEvent: any, setSelectedEvent: any] = React.useState({device_alias: null})
  const dispatch = useDispatch();
  const selectedEventId = useSelector((state) => {
    // const id: number  | undefined= state.deviceEvents.selectedId;
    // if (typeof id === "undefined") return;
    // setSelectedEvent(state.deviceEvents)
    return state.deviceEvents.selectedId;
  });


   const handleClose = (): void => {
    dispatch(closeEventInfoWindow());
  };

  React.useEffect(() => {
    if (typeof selectedEventId === "number") {
      setSelectedEvent(deviceEvents[selectedEventId])
    }
  }, [deviceEvents])

   React.useEffect(() => {
     console.log(selectedEvent, "selectedEvent");
  }, [selectedEvent])

  console.log(selectedEventId, "selectedEventId");

  if (typeof selectedEventId === "undefined" || !selectedEvent.device_alias) {
    return null;
  } else {
  return (
    <MapCard onClose={ }
      id="event-card"
      title={selectedEvent.device_alias}>
      {selectedEventId}
      <hr />
      {selectedEvent.device_alias}
        {/* {fieldData.fieldName}: this is here */}
    </MapCard>)
  }
}
