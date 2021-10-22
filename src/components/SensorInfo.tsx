import React from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SensorsIcon from '@mui/icons-material/Sensors';
import type { DeviceEvent} from "../types";

function PressureInfo() {
  return
}

export default function SensorInfo({ selectedEvent }: { selectedEvent: DeviceEvent }): JSX.Element | null {
  const [pressure, setPressure]: [kpaPressure: any, setKpaPressure: any] = React.useState({});
  const [reel, setReel]: [reel: any, setReel: any] = React.useState({});
  const iconStyles = { fontSize: "24px", color: "black" };

  React.useEffect(() => {
    if (selectedEvent.pressure) {
      setPressure(selectedEvent.pressure)
    }
    if (selectedEvent.reel) {
      setReel(selectedEvent.reel)
    }
  },[selectedEvent, setReel])

  return (
    <div className="event_card_sensors">
      {pressure.kpaPressure && <><span className="event_card_pressure">
        <CompareArrowsIcon sx={iconStyles} />
      </span>
      <span>
          <span>
          kPa:
          </span>
          <span>
          {pressure.kpaPressure}
          </span>
          <span>
          State:
          </span>
          <span>
          {pressure.state_current}
          </span>
        </span></>}{
        reel.state_current &&<>
        <span className="event_card_pressure">
          <SensorsIcon sx={iconStyles} />
        </span>
        <span className="reel_info">
          <span>
            Run speed: {reel.run_speed_mmpm && reel.run_speed_mmpm + "mmpm"}
          </span>
          <span>
            State: {reel.state_current}
          </span>
        </span>

        </>}
    </div>)
}
