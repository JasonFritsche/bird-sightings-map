import React, { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { allMarkers as markersState, selectedBounds, mapPosition } from '../recoil/atom'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet-area-select'
import { BiSelection } from 'react-icons/bi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import MapControl from './MapControl'
import MapMarker from './MapMarker'
import AreaSelect from './AreaSelect'
import AreaSelectMobile from './AreaSelectMobile'
import { useMatchMedia } from '../hooks/useMatchMedia'
import 'leaflet/dist/leaflet.css'

const BirdMap = () => {
  const [isAreaSelection, setIsAreaSelection] = useState(false)
  const markers = useRecoilValue(markersState)
  const [bounds, setBounds] = useRecoilState(selectedBounds)
  const [position, setPosition] = useRecoilState(mapPosition)

  useEffect(() => {
    // attempt to get users current location
    if (window.navigator.geolocation) {
      // Geolocation is available, show prompt to user requesting access to location
      window.navigator.geolocation.getCurrentPosition(userAllowedPosition, userDeniedPosition)
    } else {
      setPosition([38.266666, -91.73333])
    }
  }, [])

  // called if/when the user allows us to use their current location
  const userAllowedPosition = (providedPosition) => {
    const { latitude, longitude } = providedPosition.coords
    console.log(latitude, longitude)
    setPosition([latitude, longitude])
  }

  const userDeniedPosition = () => {
    setPosition([38.266666, -91.73333])
  }

  const isMobileDeviceWidth = useMatchMedia('(max-width:600px)', true)

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

  const setInitialMobileBounds = (map) => {
    if (isMobileDeviceWidth && map) {
      const selectedBounds = map.getBounds()
      setBounds(selectedBounds)
    }
  }

  return (
    <React.Fragment>
      {position && (
        <MapContainer
          whenCreated={(map) => setInitialMobileBounds(map)}
          className="markercluster-map"
          center={position}
          zoom={13}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.length && (
            <MarkerClusterGroup>{markers.map((marker) => renderMarker(marker))}</MarkerClusterGroup>
          )}

          {!isMobileDeviceWidth && (
            <MapControl position="topleft">
              <a onClick={() => setIsAreaSelection(!isAreaSelection)}>
                <div
                  data-tip={getSelectionTooltip()}
                  className="tooltip tooltip-right tooltip-secondary">
                  <BiSelection
                    size="30px"
                    style={{
                      color: '#333',
                      backgroundColor: `${isAreaSelection ? '#fff' : '#bababa'}`
                    }}
                  />
                </div>
              </a>
            </MapControl>
          )}

          <MapControl position="topleft">
            <a>
              <label htmlFor="the-drawer" className="drawer-button cursor-pointer">
                <AiOutlineMenuUnfold
                  size="30px"
                  style={{
                    color: '#333',
                    backgroundColor: '#fff'
                  }}
                />
              </label>
            </a>
          </MapControl>
          <AreaSelect isAreaSelection={isAreaSelection} />
          {!isMobileDeviceWidth && <AreaSelect />}
          {isMobileDeviceWidth && <AreaSelectMobile />}
        </MapContainer>
      )}
    </React.Fragment>
  )
}

export default BirdMap
