import React from "react";
import { Marker } from "@react-google-maps/api";
import type { DeviceEvent } from "../types";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const svgMarker = {
    path: "M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z",
    fillColor: "peru",
    fillOpacity: 0.9,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,

  };
/**
 * Render a pin at the specified event
 *
 * @param props
 * @param props.event
 */

export default function DevicePin({ event }: { event: DeviceEvent }): JSX.Element | null {
  if (event.gps == null || event.gps.location == null) {
    return null;
  } else {
    const { gps: {location: {coordinates: [lng, lat]}} } = event;
    console.log(event.device_alias);
    // return <LocationOnIcon />
    return <Marker
      position={{ lat, lng }}
      icon={svgMarker}
      label={{
        text: event.device_alias,
        color: "white"
      }} />;
  }
}
