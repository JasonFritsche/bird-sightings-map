import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { allMarkers as markersState, visibleFilters } from '../recoil/atom'

const Filters = () => {
  const [markers, setMarkers] = useRecoilState(markersState)
  const visibleMarkers = useRecoilValue(visibleFilters)
  const [toggleAll, setToggleAll] = useState(false)

  const handleCheckboxChange = (idx) => {
    const updatedState = markers.map((marker, index) => {
      if (index === idx) {
        const updatedMarker = {
          ...marker,
          isSelected: !marker.isSelected
        }
        return updatedMarker
      } else return marker
    })
    setMarkers(updatedState)
  }

  const handleToggleAllChange = () => {
    setToggleAll(!toggleAll)
    const updatedState = markers.map((marker) => {
      const updatedMarker = {
        ...marker,
        isSelected: toggleAll
      }
      return updatedMarker
    })
    setMarkers(updatedState)
  }

  const handleSearchFilter = (e) => {
    const searchTerm = e.target.value
    if (searchTerm?.length) {
      const updatedMarkers = markers.map((marker) => {
        if (marker.comName.toLowerCase().startsWith(searchTerm.toLowerCase())) {
          const updatedMarker = {
            ...marker,
            isVisible: true
          }
          return updatedMarker
        } else {
          const updatedMarker = {
            ...marker,
            isVisible: false
          }
          return updatedMarker
        }
      })
      setMarkers(updatedMarkers)
    } else {
      const resetMarkers = markers.map((marker) => {
        const updatedMarker = {
          ...marker,
          isVisible: true
        }
        return updatedMarker
      })
      setMarkers(resetMarkers)
    }
  }

  return (
    <React.Fragment>
      <div className="form-control">
        <input
          type="text"
          placeholder="Filter"
          onChange={handleSearchFilter}
          className="input input-primary input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Show/Hide All</span>
          <input
            type="checkbox"
            checked={!toggleAll}
            onChange={() => handleToggleAllChange()}
            className="toggle"
          />
        </label>
      </div>
      <div className="h-40 overflow-y-scroll">
        {visibleMarkers.map((marker, index) => (
          <div key={marker.id} className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">{marker.comName}</span>
              <input
                type="checkbox"
                checked={markers[index].isSelected}
                className="checkbox checkbox-primary"
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Filters
