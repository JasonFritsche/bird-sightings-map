import React from 'react'
import { render, screen } from '@testing-library/react'
import Drawer from '../../components/Drawer'
import { RecoilRoot } from 'recoil'

jest.mock('../../components/Filters.jsx', () => () => <div>Mocked Filter Component</div>)
jest.mock('../../components/BirdMap.jsx', () => () => <div>Mocked BirdMap Component</div>)

test('renders App component', () => {
  render(
    <RecoilRoot>
      <Drawer />
    </RecoilRoot>
  )
  // const filtersDiv = screen.getByText(/Filters/i)
  // expect(filtersDiv).toBeInTheDocument()
})
