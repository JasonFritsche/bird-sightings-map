import React from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import _marker from '../../assets/marker.png'
import { Icon } from 'leaflet'

const MapMarker = ({ marker }) => {
  console.log(marker)
  return (
    <Marker
      icon={new Icon({ iconUrl: _marker, iconSize: [35, 34], iconAnchor: [12, 41] })}
      key={marker.id}
      position={[marker.lat, marker.lng]}>
      <Popup>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h2>
              <span className="font-bold">Location:</span> {marker.locName}
            </h2>
          </div>
          <div className="flex flex-row">
            <h2>
              <span className="font-bold">Observed Date:</span> {marker.obsDt}
            </h2>
          </div>
          <div className="flex flex-row">
            <h2>
              <span className="font-bold">Common Name:</span> {marker.comName}
            </h2>
          </div>
          <div className="flex flex-row">
            <h2>
              <span className="font-bold">Scientific Name:</span> {marker.sciName}
            </h2>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

MapMarker.propTypes = {
  marker: PropTypes.shape({
    id: PropTypes.node,
    lat: PropTypes.number,
    lng: PropTypes.number,
    locName: PropTypes.string,
    obsDt: PropTypes.string,
    comName: PropTypes.string,
    sciName: PropTypes.string
  })
}

export default MapMarker
