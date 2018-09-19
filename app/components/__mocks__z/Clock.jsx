'use strict'

const Clock = jest.genMockFromModule('../Clock')

function formatTime (timeInSeconds) {
  return '1001'
}

function render () {
  let { timeInSeconds } = Clock.props
  return (
    <div className='clock'>
      <span className='clock-text'>
        {this.formatTime(timeInSeconds)}
      </span>
    </div>
  )
}

Clock.formatTime = formatTime
Clock.render = render

module.exports = Clock
