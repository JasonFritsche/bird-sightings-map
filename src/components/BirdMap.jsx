import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { allMarkers as markersState } from '../recoil/atom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet-area-select'
import Control from 'react-leaflet-custom-control'
import { BiSelection } from 'react-icons/bi'
import MapMarker from './MapMarker'
import AreaSelect from './AreaSelect'

const BirdMap = () => {
  const [isAreaSelection, setIsAreaSelection] = useState(false)
  const markers = useRecoilValue(markersState)
  const position = [30.266666, -97.73333]

  const renderMarker = (marker) => {
    const _marker = marker // have to do this because marker.isSelected complains that isSelected is readonly
    if (_marker.isSelected) {
      return <MapMarker marker={marker} key={marker.id} />
    }
  }

  const getSelectionTooltip = () => {
    if (isAreaSelection) {
      return 'Hold the ctrl button to make a selection'
    } else {
      return 'Click me to make a selection'
    }
  }

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Control position="topleft">
        <a onClick={() => setIsAreaSelection(!isAreaSelection)}>
          <div data-tip={getSelectionTooltip()} className="tooltip tooltip-right tooltip-secondary">
            <BiSelection
              size="30px"
              style={{
                color: '#333',
                backgroundColor: `${isAreaSelection ? '#fff' : '#bababa'}`
              }}
            />
          </div>
        </a>
      </Control>
      <AreaSelect isAreaSelection={isAreaSelection} />
      {markers.map((marker) => renderMarker(marker))}
    </MapContainer>
  )
}

export default BirdMap