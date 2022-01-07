import { useEffect, useState } from 'react'
import { useMapEvents } from 'react-leaflet'
import { useRecoilState } from 'recoil'
import { selectedBounds } from '../recoil/atom'
import L from 'leaflet'
import PropTypes from 'prop-types'

const AreaSelect = ({ isAreaSelection }) => {
  const [selectedArea, setSelectedArea] = useState(null)
  const [bounds, setBounds] = useRecoilState(selectedBounds)

  const map = useMapEvents({
    areaselectstart: () => {
      if (selectedArea) {
        map.removeLayer(selectedArea)
        setSelectedArea(null)
      }
    },
    areaselected: (e) => {
      const selectedLayer = L.rectangle(e.bounds, { color: 'blue', weight: 1 }).addTo(map)
      const { _bounds } = selectedLayer
      const selectedBounds = _bounds
      setBounds(selectedBounds)
      setSelectedArea(selectedLayer)
    }
  })
  useEffect(() => {
    if (!isAreaSelection) {
      map.selectArea.disable()
      return
    }
    map.selectArea.enable()

    // now switch it off
    map.selectArea.setValidate()
  }, [isAreaSelection, map])

  return null
}

AreaSelect.propTypes = {
  isAreaSelection: PropTypes.bool
}

export default AreaSelect
