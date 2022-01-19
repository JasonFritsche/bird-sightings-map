import React from 'react'
import { useRecoilValue } from 'recoil'
import { visibleFilters } from '../recoil/atom'

import BirdMap from './BirdMap'
import Search from './Search'
import Filters from './Filters'

const Drawer = () => {
  const visibleMarkers = useRecoilValue(visibleFilters)
  const showFiltersSection = () => {
    if (visibleMarkers.length) {
      return (
        <React.Fragment>
          <li>
            <div className="divider">Results</div>
          </li>
          <li>
            <Filters />
          </li>
        </React.Fragment>
      )
    }
  }
  return (
    <div className="drawer drawer-mobile rounded-lg shadow bg-base-200 h-full">
      <input id="the-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        <BirdMap />
      </div>
      <div className="drawer-side">
        <label htmlFor="the-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <div>
              <h1 className="font-scada text-2xl text-orange-300 text-center">Bird Sightings</h1>
            </div>
          </li>
          <li>
            <div className="divider">Search</div>
          </li>
          <li>
            <Search />
          </li>
          {showFiltersSection()}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
