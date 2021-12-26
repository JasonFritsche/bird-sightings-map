import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import { atom, useRecoilValue } from 'recoil'

// const markersState = atom({
//   key: 'markers',
//   default: []
// })

const BirdMap = () => {
  // const markers = useRecoilValue(markersState)
  // console.log(markers)
  const position = [30.266666, -97.73333]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default BirdMap
