import React, {Component} from 'react';

class TextSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }
  }

  render() {
    const {type, value, onChange} = this.props;
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    )
  }
}

export default TextSearch