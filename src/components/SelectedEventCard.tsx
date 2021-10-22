import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { MapCard } from ".";
import type { DeviceEvent} from "../types";
import { useDispatch, useSelector } from "react-redux";
import { closeEventInfoWindow } from "../reducers";
import SensorInfo from "./SensorInfo"
// import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// import SensorsIcon from '@mui/icons-material/Sensors';


// TODO: ADD TYPE FOR STATE VARIABLES, ALSO THE TYPE OF PROPS

// *****

export default function SelectedEventCard(): JSX.Element | null {
  const [selectedEvent, setSelectedEvent]: [selectedEvent: any, setSelectedEvent: any] = React.useState({device_alias: null})
  const dispatch = useDispatch();
  const deviceEvents = useSelector((state) => state.deviceEvents.entities);
  const selectedEventId = useSelector((state) => state.deviceEvents.selectedId);

   const handleClose = (): void => {
    dispatch(closeEventInfoWindow());
  };

  React.useEffect(() => {
    if (typeof selectedEventId === "number") {
      setSelectedEvent(deviceEvents[selectedEventId])
    }
  }, [deviceEvents, selectedEventId])

   React.useEffect(() => {
     console.log(selectedEvent, "selectedEvent");
  }, [selectedEvent])


  if (typeof selectedEventId === "undefined" || !selectedEvent.device_alias) {
    return null;
  } else {
    const { event_timestamp, gps: { location: { coordinates: [lng, lat] } } } = selectedEvent;
    const dateTimeFormat = new Date(event_timestamp);
    // const iconStyles = { fontSize: "24px", color: "black" };

    return (
      <MapCard
        onClose={handleClose}
        id="event-card"
        title={selectedEvent.device_alias}>
        <hr />
        <span className="event_card_date">{dateTimeFormat.toString()}</span>
        <div className="event_card_coordinates">
          <span className="coordinates_label">
            Lat:
          </span>
          <span>
            {lat}
          </span>
          <span className="coordinates_label">
            Lng:
          </span>
          <span>
            {lng}
          </span>
        </div>
        <SensorInfo selectedEvent={selectedEvent} />
        {/* <div className="event_card_sensors">
          <span className="event_card_pressure">
            <CompareArrowsIcon sx={iconStyles} />
          </span>
          <span>
            <span>
              kPa:
            </span>
            <span>

            </span>
          </span>
           <span className="event_card_pressure">
            <SensorsIcon sx={iconStyles} />
          </span>
           <span>
            hello
          </span>
        </div> */}
      </MapCard>)
    }
  }
