import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedBounds, allMarkers as markersState } from '../recoil/atom'
import { v4 as uuidv4 } from 'uuid'
// import devMarkers from '../utils/devMarkers'

const Search = () => {
  const showSearchButton = () => {
    if (bounds._northEast.lat && bounds._southWest.lng) {
      return (
        <button className="btn btn-wide btn-sm" onClick={handleSearch}>
          Search
        </button>
      )
    } else {
      return (
        <div
          data-tip="Make a selection in the map, then click search"
          className="tooltip tooltip-secondary">
          <button disabled className="btn btn-wide btn-sm">
            Search
          </button>
        </div>
      )
    }
  }
  const [markers, setMarkers] = useRecoilState(markersState)
  const bounds = useRecoilValue(selectedBounds)
  const handleSearch = () => {
    const url = `https://api.ebird.org/v2/data/obs/geo/recent?lat=${bounds._northEast.lat}&lng=${bounds._southWest.lng}&key=nukg96b4vofk`
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.filter((marker) => {
          if (
            marker.lat <= bounds._northEast.lat &&
            marker.lng <= bounds._northEast.lng &&
            marker.lng >= bounds._southWest.lng &&
            marker.lat >= bounds._southWest.lat
          ) {
            // make sure the marker.lat and marker.lng are between them
            return marker
          }
        })
        filteredResults.forEach((resMarker) => {
          resMarker.isSelected = true
          resMarker.isVisible = true
          resMarker.id = uuidv4()
        })
        setMarkers(filteredResults)
      })
    // devMarkers.forEach((devMarker) => {
    //   devMarker.isSelected = true
    //   devMarker.isVisible = true
    //   devMarker.id = uuidv4()
    // })
    // setMarkers([...markers, ...devMarkers])
  }

  return <div className="flex justify-center">{showSearchButton()}</div>
}

export default Search
