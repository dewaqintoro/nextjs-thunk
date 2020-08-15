import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

// const isBrowser = typeof window !== 'undefined';
//     let leaflet;
//     if (isBrowser) {
//       import leaflet from 'leaflet'
//       leaflet = require('leaflet');
//     }

const Mapku = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* memunculkan lingkaran berdasarkan kasus */}
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  )
}
 
export default Mapku