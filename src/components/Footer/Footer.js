import React, {Component} from 'react';
import axios from 'axios';
import './Footer.scss';
import {TextContainer, Divider, Container, Heading, TextInput} from '..';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
      message: '',
      error: '',
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
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    if (cleanPhoneNumber.length > 6) {
      axios.post(`https://programming-paradigms-api.herokuapp.com/api/phone-number/`, {
        phoneNumber: cleanPhoneNumber
      })
      .then(() => this.setState({error: '', phoneNumber: '', message: 'Thank you for signing up for sms notifications'}))
      .catch(err => this.setState({error: 'An error has occured while adding your phone number', message: ''}));
    } else {
      this.setState({error: 'Please enter a valid phone number', message: ''});
    }
  };

  handleTextBlur = (event) => {
    const {phoneNumber} = this.state;
    if (!phoneNumber) {
      this.setState({error: 'Please enter a phone number', message: ''});
    }
  };

  render() {
    const {phoneNumber, error, message} = this.state;

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
                  onBlur={this.handleTextBlur}
                  error={error}
                  message={message}
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
