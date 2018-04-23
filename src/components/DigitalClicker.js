// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
    timesClicked = 0,
    };
  }

  render() {
    return (
      <div>
      <button onClick={this.upButton.bind(this)}<p>Up!</p></button>
      </div>
    )
  }

upButton() {
  this.setState({
    timesClicked: this.state.timesClicked + 1
  })
}


}

export default DigitalClicker;
