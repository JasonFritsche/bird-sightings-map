import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet-area-select'
import { useRecoilValue } from 'recoil'
import { allMarkers as markersState } from '../recoil/atom'
import MapMarker from './MapMarker'
import AreaSelect from './AreaSelect'

// function MyComponent() {
//   const map = useMapEvents({
//     moveend: () => {
//       console.log(map.getCenter())
//     }
//   })
//   return null
// }

const BirdMap = () => {
  const markers = useRecoilValue(markersState)
  const position = [30.266666, -97.73333]

  const renderMarker = (marker) => {
    const _marker = marker // have to do this because marker.isSelected complains that isSelected is readonly
    if (_marker.isSelected) {
      return <MapMarker marker={marker} />
    }
  }
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AreaSelect />
      {markers.map((marker) => renderMarker(marker))}
    </MapContainer>
  )
}

export default BirdMap
