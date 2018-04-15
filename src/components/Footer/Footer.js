import React, {Component} from 'react';
import axios from 'axios';
import './Footer.scss';
import {TextContainer, Divider, Container, Heading, TextInput} from '..'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
    };
  }

  handleTextChange = (key) => {
    return (event) => {
      const number = event.target.value;
      this.setState({[key]: number});
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {phoneNumber} = this.state;
    console.log(phoneNumber.replace(/\D/g, ''))
  }

  render() {
    const {phoneNumber} = this.state;

    return (
      <Container size="large">
        <TextContainer>
          <Divider />
          <div className="footer-content">
            <Container center>
              <Heading size="extra-small">
                Stay connected with sms notifications
              </Heading>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  onChange={this.handleTextChange('phoneNumber')}
                  value={phoneNumber}
                  placeholder="Phone number"
                  center
                />
              </form>
            </Container>
          </div>
        </TextContainer>
      </Container>
    );
  }
}

export default Footer;
