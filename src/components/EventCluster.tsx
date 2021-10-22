import React from "react";
import { MarkerClusterer } from "@react-google-maps/api";
import { Cluster, MarkerExtended } from "@react-google-maps/marker-clusterer";
import { DevicePin } from "./";
import type { DeviceEvent} from "../types";
import { useDispatch } from "react-redux";
import { clickClusterEvent} from "../reducers";
import "./map_pins.css"

/**
 * Clusters events in the same area into one component
 *
 * @param props
 * @param props.deviceEvents // all of the events sent from Redux via state
 */

export default function EventCluster({ deviceEvents }: { deviceEvents: DeviceEvent[] }) {
  const dispatch = useDispatch();

  function mouseOverCluster(cluster: Cluster) {
    const labels = cluster.markers
      .map((marker: MarkerExtended) => marker.getLabel());
    if(labels) dispatch(clickClusterEvent(labels));
  }


  return (
    <MarkerClusterer onClick={(cluster) => mouseOverCluster(cluster)} zoomOnClick={true} >
      {(clusterer) => deviceEvents.map((event) => {
        return <DevicePin key={event.id} event={event} clusterer={clusterer} />
      })}
    </MarkerClusterer>)
}
