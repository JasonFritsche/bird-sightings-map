import React from 'react'
import PropTypes from 'prop-types'
import { Marker, Popup } from 'react-leaflet'

const MapMarker = ({ marker }) => {
  return (
    <Marker key={marker.id} position={[marker.lat, marker.lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> {marker.locName}
      </Popup>
    </Marker>
  )
}

MapMarker.propTypes = {
  marker: PropTypes.shape({
    id: PropTypes.node,
    lat: PropTypes.number,
    lng: PropTypes.number,
    locName: PropTypes.string
  })
}

export default MapMarker
