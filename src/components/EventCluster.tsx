import React from "react";
import { MarkerClusterer, Marker } from "@react-google-maps/api";
import { DevicePin } from "./";
import type { DeviceEvent} from "../types";

const svgMarker = {
    path: "M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z",
    fillColor: "peru",
    fillOpacity: 0.9,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
  };

export default function EventCluster({deviceEvents}: {deviceEvents: DeviceEvent[]}) {
  return (
    <MarkerClusterer zoomOnClick={true} >
      {(clusterer) => deviceEvents.map((event) => {
        return <DevicePin key={event.id} event={event} clusterer={clusterer} />
      })}
    </MarkerClusterer>)
}
