import { MapContainer, TileLayer } from 'react-leaflet'
import { useRecoilValue } from 'recoil'
import { allMarkers as markersState } from '../recoil/atom'
import MapMarker from './MapMarker'

const BirdMap = () => {
  const markers = useRecoilValue(markersState)
  const position = [30.266666, -97.73333]

  const renderMarker = (marker) => {
    const _marker = marker
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
      {markers.map((marker) => renderMarker(marker))}
    </MapContainer>
  )
}

export default BirdMap
