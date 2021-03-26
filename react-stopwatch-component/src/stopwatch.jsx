import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isOn: false
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    this.setState({ isOn: !this.state.isOn });
    this.timer = setInterval(
      () => this.setState({ count: this.state.count + 1 }), 1000
    );
  }

  pause() {
    this.setState({ isOn: !this.state.isOn });
    clearInterval(this.timer);

  }

  reset() {
    if (!this.state.isOn) {
      this.setState({ count: 0 });
    }
  }

  render() {
     let icon = "";
     let action = "";

     if(this.state.isOn) {
       icon = "fas fa-pause";
       action = this.pause;
      } else {
        icon = "fas fa-play";
        action = this.start;
      };

    return (
      <div class="container">
        <div class='circle' onClick={this.reset}>
          <h1>{this.state.count}</h1>
        </div>
        <div class="icon-container">
          <i className={icon} onClick={action}></i>
          </div>
      </div>
    );
  }
}

export default StopWatch;
