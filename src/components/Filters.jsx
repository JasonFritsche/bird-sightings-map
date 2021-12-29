import { useRecoilState } from 'recoil'
import { allMarkers as markersState } from '../recoil/atom'

const Filters = () => {
  const [markers, setMarkers] = useRecoilState(markersState)
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
  return (
    <div>
      <h1>filters</h1>
      {markers.map((marker, index) => (
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
  )
}

export default Filters
