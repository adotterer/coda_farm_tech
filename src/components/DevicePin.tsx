import React from "react";
import { Marker } from "@react-google-maps/api";
import { Clusterer } from "@react-google-maps/marker-clusterer";
import type { DeviceEvent } from "../types";
import { clickDeviceEvent, setMapCenter } from "../reducers";
import { useDispatch} from "react-redux";

const svgMarker = {
    path: "M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z",
    fillColor: "rgba(199, 129, 0, 0.8)",
    fillOpacity: 0.9,
    strokeColor: 'white',
    strokeWeight: 1,
    rotation: 0,
    scale: 2,

};

/**
 * Render a pin at the specified event
 *
 * @param props
 * @param props.event
 * @param props.clusterer // sent to the children of MarkerClusterer in EventCluster.tsx
 */

export default function DevicePin({ event, clusterer }: { event: DeviceEvent, clusterer: Clusterer }): JSX.Element | null {
  if (!event.gps || !event.gps.location) return null;
  const dispatch = useDispatch();

  const { gps: { location: { coordinates: [lng, lat] } } } = event;
  const label = {
    text: event.device_alias,
    color: "white", id: event.id,
    className: "event_device_pin"
  };


  const handleClick = ():void => {
    dispatch(clickDeviceEvent(event.id));
    dispatch(setMapCenter({ lat, lng }));
  }

  return <Marker
    onClick={handleClick}
    clusterer={clusterer}
    position={{ lat, lng }}
    icon={svgMarker}
    label={label} />;
  }
