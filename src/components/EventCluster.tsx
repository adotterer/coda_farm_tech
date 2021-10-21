import React from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import { DevicePin } from "./";
import type { DeviceEvent} from "../types";

/**
 * Clusters events in the same area into one component
 *
 * @param props
 * @param props.deviceEvents // all of the events sent from Redux via state
 */

export default function EventCluster({deviceEvents}: {deviceEvents: DeviceEvent[]}) {
  return (
    <MarkerClusterer zoomOnClick={true} >
      {(clusterer) => deviceEvents.map((event) => {
        return <DevicePin key={event.id} event={event} clusterer={clusterer} />
      })}
    </MarkerClusterer>)
}
