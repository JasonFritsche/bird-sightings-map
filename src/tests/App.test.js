import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
import { RecoilRoot } from 'recoil'
import '../../jest/mocks/matchMedia.mock'

test('renders App component', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
  // screen.debug()
})
