import React from 'react'
import ReactDOM from 'react-dom'

export default class ImageSlider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
    <div>
      <h2>I am on slide {this.state.currentSlideIndex}</h2>
    </div>
    )
  }
}
