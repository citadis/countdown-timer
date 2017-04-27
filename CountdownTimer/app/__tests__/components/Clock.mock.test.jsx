import React from 'react'
import ReactDOM from 'react-dom'

//jest.mock('Clock')
//const Clock = require('Clock')

jest.unmock('Clock')
import Clock from 'Clock'

import { shallow } from 'enzyme'
import { mount } from 'enzyme'

xdescribe('Clock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Clock/>, div)
  })

  it('really renders without crashing', () => {
    mount(<Clock/>)
  })

  it('really renders without crashing and can find elements', () => {
    const wrapper = shallow(<Clock/>)
    expect(wrapper.find('.clock-text')).toHaveLength(1)
    expect(wrapper.render().find('.clock-text')).toHaveLength(1)
  })

  describe('render', () => {
    it('should render the clock', () => {
      const clock = shallow(<Clock timeInSeconds={63}/>)
      const time = <span className="clock-text">01:03</span>

      expect(clock.contains(time)).toEqual(true)
    })
  })

  describe('formatTime', () => {
    it('should format seconds', () => {
      const clock = shallow(<Clock />)
      const seconds = 635
      const expected = '10:35'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when minutes or seconds are less than 10', () => {
      const clock = shallow(<Clock/>)
      const seconds = 65
      const expected = '01:05'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })
  })

  describe('formatTime with mock', () => {
    it('should format seconds', () => {
      jest.mock('Clock')

      const MyClock = require('Clock')

      let clock = shallow(<Clock />)
      //let mockfn = jest.fn(() => '1000')
      //let mockfn = jest.fn(() => MyClock.formatTime(1))
      //clock.instance().formatTime = mockfn
      clock.instance().formatTime = MyClock.formatTime

      const seconds = 635
      const expected = '1001'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when minutes or seconds are less than 10', () => {
      let clock = shallow(<Clock/>)
      const MyClock = require('Clock')
      clock.instance().formatTime = MyClock.formatTime

      const seconds = 65
      const expected = '1001'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })
  })

  describe('mocks', () => {
    it('mocks correctly', function() {
      const MyClock = require('Clock')
      expect(MyClock.formatTime(1)).toBe('1001')
    })
  })

})
