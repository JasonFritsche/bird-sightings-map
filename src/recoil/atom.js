import { atom, selector } from 'recoil'

const allMarkers = atom({
  key: 'allMarkers',
  default: []
})

const markerFilters = selector({
  key: 'markerFilters',
  get: ({ get }) => {
    const markers = get(allMarkers)
    return [
      ...new Set(
        markers.map((marker) => {
          return {
            name: marker.comName,
            isSelected: marker.isSelected,
            id: marker.id
          }
        })
      )
    ]
  }
})

export { allMarkers, markerFilters }
