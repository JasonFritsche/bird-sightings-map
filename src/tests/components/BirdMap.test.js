import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import BirdMap from '../../components/BirdMap'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const elements = (
    <RecoilRoot>
      <BirdMap />
    </RecoilRoot>
  )
  ReactDOM.render(elements, div)
})
