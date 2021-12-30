import { atom, selector } from 'recoil'

const allMarkers = atom({
  key: 'allMarkers',
  default: []
})

const visibleFilters = selector({
  key: 'visibleFilters',
  get: ({ get }) => {
    const markers = get(allMarkers)
    return markers.filter((m) => m.isVisible)
  }
})

export { allMarkers, visibleFilters }
