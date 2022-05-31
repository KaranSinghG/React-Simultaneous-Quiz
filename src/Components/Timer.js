import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let { count } = this.state;
      this.setState({
        count: count - 1
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      clearInterval(this.timer);
      if (this.props.nextHandler) {
        this.props.nextHandler();
        this.setState({
          count: 20
        });
      }
    }
    if (this.props.nextClicked) {
      clearInterval(this.timer);
      this.setState({
        count: 20
      });
      this.props.setNextClicked(false);
    }
  }

  render() {
    let { count } = this.state;
    return <>{count}</>;
  }
}

export default Timer;
