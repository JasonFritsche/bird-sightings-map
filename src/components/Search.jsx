import { useRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid'
import { allMarkers as markersState } from '../recoil/atom'
import devMarkers from '../utils/devMarkers'

const Search = () => {
  const lat = 30.266666
  const lng = -97.73333
  const [markers, setMarkers] = useRecoilState(markersState)
  const handleSearch = () => {
    console.log('searching')
    // const url = `https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}&key=nukg96b4vofk`
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //     setMarkers([...markers, ...json])
    //   })
    devMarkers.forEach((devMarker) => {
      devMarker.isSelected = true
      devMarker.isVisible = true
      devMarker.id = uuidv4()
    })
    setMarkers([...markers, ...devMarkers])
  }

  return (
    <div>
      <button className="btn btn-wide btn-sm" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Search
