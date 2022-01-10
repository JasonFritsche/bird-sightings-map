import { useMapEvents } from 'react-leaflet'
import { useRecoilState } from 'recoil'
import { selectedBounds } from '../recoil/atom'

const AreaSelectMobile = () => {
  const [bounds, setBounds] = useRecoilState(selectedBounds)

  const map = useMapEvents({
    moveend: () => {
      const selectedBounds = map.getBounds()
      setBounds(selectedBounds)
    }
  })
  return null
}

export default AreaSelectMobile
