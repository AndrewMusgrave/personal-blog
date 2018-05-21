import React, {Component} from 'react';
import debounce from 'lodash/debounce';
import {SocialIcon} from 'react-social-icons';
import Logo from '../../assets/andrew bear_final.png';
import {
  Link,
  Icon,
  Heading,
  List,
  Button,
  EventHandler,
  TextContainer,
} from '..';

import './Nav.scss';

const routeInfo = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Tags',
    to: '/tags',
  },
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetTop: 0,
    };

    // scroll
    // this.handleScroll = debounce(() => this.handleScrollEvent, 500, {trailing: true});
    // resize
    this.handleScroll = debounce(this.handleScrollEvent, 50);
  }

  componentDidMount() {
    if (this.node != null) {
      this.setState({offsetTop: this.node.offsetHeight});
    }
  }

  handleScrollEvent = () => {
    if (this.node != null) {
      this.setState({offsetTop: this.node.offsetHeight});
    }
  };

  render() {
    const {offsetTop} = this.state;
    const {recentArticle} = this.props;
    const listMarkup = routeInfo && (
      <List
        items={routeInfo.map((route, ind) => <Link {...route} key={ind} />)}
      />
    );

    const navContentMarkup = (
      <div className="nav-content">
        <Link aria-label="search" to="search">
          <Icon src="search" />
        </Link>
        <Button nav to={recentArticle}>Recent article</Button>
      </div>
    );

    const navLinkMarkup = (
      <div className="nav-links">
        <TextContainer>{listMarkup}</TextContainer>
      </div>
    );

    const navMarkup = (
      <nav className="nav">
        {navLinkMarkup}
        {navContentMarkup}
      </nav>
    );

    const navHeadingMarkup = (
      <React.Fragment>
        <Heading nav screen="web">
          Programming Paradigms.
        </Heading>
        <Heading nav screen="mobile">
          P.P.
        </Heading>
      </React.Fragment>
    );

    const headerBrandMarkup = (
      <div className="header-brand">
        {/* <Spinner /> */}
        <img src={Logo} alt="logo" style={{width: '2rem', marginRight: '5px'}} />
        <Link
          aria-label="home"
          to="/"
        >
          {navHeadingMarkup}
        </Link>
      </div>
    );

    const headerSocialIcons = (
      <div className="social-media-icons">
        <SocialIcon
          url="https://twitter.com/"
          style={{height: '2rem', width: '2rem'}}
          color="#b2e6e3"
        />
        <SocialIcon
          url="https://github.com/"
          style={{height: '2rem', width: '2rem'}}
          color="#b2e6e3"
        />
      </div>
    );

    const headerMarkup = (
      <header className="header">
        {headerBrandMarkup}
        {headerSocialIcons}
      </header>
    );

    return (
      <React.Fragment>
        <EventHandler type="resize" callback={this.handleScroll} />
        <div style={{height: `${offsetTop}px`}} />
        <div className="navbar-wrapper" ref={node => (this.node = node)}>
          <div className="navbar">
            {headerMarkup}
            {navMarkup}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
