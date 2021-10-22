import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { MapCard } from ".";
import type { DeviceEvent} from "../types";
import { useDispatch, useSelector } from "react-redux";


export default function SelectedEventCard({ deviceEvents }: { deviceEvents: DeviceEvent[] }): JSX.Element | null {
  const [selectedEvent, setSelectedEvent]: [selectedEvent: any, setSelectedEvent: any] = React.useState({device_alias: null})

  const selectedEventId = useSelector((state) => {
    // const id: number  | undefined= state.deviceEvents.selectedId;
    // if (typeof id === "undefined") return;
    // setSelectedEvent(state.deviceEvents)
    return state.deviceEvents.selectedId;
  });


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
  } else if(!!selectedEvent){
  return (
    <MapCard id="event-card" title="Event">
      {selectedEventId}
      <hr />
      {selectedEvent.device_alias}
        {/* {fieldData.fieldName}: this is here */}
    </MapCard>)
  }
}
