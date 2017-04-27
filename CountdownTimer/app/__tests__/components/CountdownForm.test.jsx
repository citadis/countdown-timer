import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CountdownForm/>, div)
  })

  it('should call onSetCountdownTime if valid seconds entered', () => {
    const spy = jest.fn()
    const countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>)
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form')

    countdownForm.refs.seconds.value = '110'
    ReactTestUtils.Simulate.submit(form)

    expect(spy).toHaveBeenCalledWith(110)
  })

  it('should not call onSetCountdownTime if invalid seconds entered', () => {
    const spy = jest.fn()
    const countdownForm = ReactTestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>)
    const form = ReactTestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form')

    countdownForm.refs.seconds.value = '1H63' // something invalid
    ReactTestUtils.Simulate.submit(form)

    expect(spy).not.toHaveBeenCalled()
  })
})
