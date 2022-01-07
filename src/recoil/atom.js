import { atom, selector } from 'recoil'

const allMarkers = atom({
  key: 'allMarkers',
  default: []
})

const selectedBounds = atom({
  key: 'selectedBounds',
  default: { _northEast: { lat: null, lng: null }, _southWest: { lat: null, lng: null } }
})

const visibleFilters = selector({
  key: 'visibleFilters',
  get: ({ get }) => {
    const markers = get(allMarkers)
    return markers.filter((m) => m.isVisible)
  }
})

export { allMarkers, visibleFilters, selectedBounds }
