import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// loader error with reactDOM type canoot return null from functional component?
// export default function({children, id}: Props) {
//   const node: any = document.getElementById(id);
//   return ReactDOM.createPortal(
//     children,
//     node,
//   );
// }

export default class Portal extends Component {
  render() {
    let node = document.getElementById(this.props.id);
    console.log(node)
    if (!node) {
      while (!node) {
        setTimeout(() => {
          node = document.getElementById(this.props.id);
          console.log(node)
        }, 10000)
      }
    }
    if (!node) {
      node = document.createElement('div');
      node.id = this.props.id;
      document.body.appendChild(node);
    }

    return ReactDOM.createPortal(
      this.props.children,
      node,
    );
  }
}
