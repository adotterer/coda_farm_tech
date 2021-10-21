import React from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import { Cluster } from "@react-google-maps/marker-clusterer";
import { DevicePin } from "./";
import type { DeviceEvent} from "../types";


function mouseOverCluster(cluster: Cluster) {
  console.log(cluster.getMarkers(), "cluster")
}
/**
 * Clusters events in the same area into one component
 *
 * @param props
 * @param props.deviceEvents // all of the events sent from Redux via state
 */

export default function EventCluster({deviceEvents}: {deviceEvents: DeviceEvent[]}) {
  return (
    <MarkerClusterer onMouseOver={mouseOverCluster} zoomOnClick={true} >
      {(clusterer) => deviceEvents.map((event) => {
        return <DevicePin key={event.id} event={event} clusterer={clusterer} />
      })}
    </MarkerClusterer>)
}
