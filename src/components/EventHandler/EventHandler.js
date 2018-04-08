import React, { Component } from 'react';

class EventHandler extends Component {
  componentDidMount() {
    const { area, type, callback } = this.props;
    window.addEventListener(type, callback);
  }

  componentWillUnmount() {
    const { area, type, callback } = this.props;
    window.removeEventListener(type, callback);
  }

  render() {
    return null;
  }
}

export default EventHandler;
