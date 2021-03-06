import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right'
}

const MapControl = (props) => {
  const [container, setContainer] = React.useState(document.createElement('div'))
  const positionClass =
    (props.position && POSITION_CLASSES[props.position]) || POSITION_CLASSES.topright

  React.useEffect(() => {
    const targetDiv = document.getElementsByClassName(positionClass)
    setContainer(targetDiv[0])
  }, [positionClass])

  const controlContainer = <div className="leaflet-control leaflet-bar">{props.children}</div>

  L.DomEvent.disableClickPropagation(container)

  return ReactDOM.createPortal(controlContainer, container)
}

export default MapControl
