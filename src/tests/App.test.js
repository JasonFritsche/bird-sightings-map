import React from 'react'
import { create } from 'react-test-renderer'
import App from '../App'
import { RecoilRoot } from 'recoil'

describe('App component', () => {
  test('App component snapshot', () => {
    const app = create(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )
    expect(app.toJSON()).toMatchSnapshot()
  })
})
