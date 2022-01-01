import React from 'react'
import { render, screen } from '@testing-library/react'
import Drawer from '../../components/Drawer'
import { RecoilRoot } from 'recoil'

test('renders App component', () => {
  render(
    <RecoilRoot>
      <Drawer />
    </RecoilRoot>
  )
  screen.debug()
})
