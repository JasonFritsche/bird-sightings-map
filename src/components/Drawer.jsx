import BirdMap from './BirdMap'
import Search from './Search'
import Filters from './Filters'

const Drawer = () => {
  return (
    <div className="drawer drawer-mobile rounded-lg shadow bg-base-200 h-full">
      <input id="the-drawer" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-center drawer-content">
        {/* <label htmlFor="the-drawer" className="btn btn-primary drawer-button">
          open menu
        </label> */}
        <BirdMap />
      </div>
      <div className="drawer-side">
        <label htmlFor="the-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <div>
              <h1>Bird Sightings</h1>
            </div>
          </li>
          <li>
            <Search />
          </li>
          <li>
            <Filters />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Drawer
