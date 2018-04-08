import React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component {
  render() {
    let node = document.getElementById(this.props.id);
    if (!node) {
      while (!node) {
          node = document.getElementById(this.props.id);
      }
    }
    if (!node) {
      node = document.createElement('div');
      node.id = this.props.id;
      document.body.appendChild(node);
    }

    return ReactDOM.createPortal(this.props.children, node);
  }
}
