import React from 'react';

class EventHandler extends React.Component {
  componentDidMount() {
    const {type, callback} = this.props;
    window.addEventListener(type, callback);
  }

  componentWillUnmount() {
    const {type, callback} = this.props;
    window.removeEventListener(type, callback);
  }

  render() {
    return null;
  }
}

export default EventHandler;
