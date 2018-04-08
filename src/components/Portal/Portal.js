import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  render() {
    let node = document.getElementById(this.props.id);
    if (!node) {
      while (!node) {
        setTimeout(() => {
          node = document.getElementById(this.props.id);
        }, 10000);
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
