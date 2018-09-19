import React from 'react'
import renderer from 'react-test-renderer'

import Clock from 'Clock'

describe('Clock component renders the clock correctly', () => {
  it('renders correctly', () => {
    const seconds = 64
    const rendered = renderer.create(
      <Clock timeInSeconds={seconds} />
    )

    expect(rendered.toJSON()).toMatchSnapshot()
  })

  it('renders correctly with less than 10 seconds on the clock', () => {
    const seconds = 0
    const rendered = renderer.create(
      <Clock timeInSeconds={seconds} />
    )

    expect(rendered.toJSON()).toMatchSnapshot()
  })
})
