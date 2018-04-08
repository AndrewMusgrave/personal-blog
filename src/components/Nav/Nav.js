import React, {Component} from 'react'
import {default as GatsbyLink} from 'gatsby-link'
import debounce from 'lodash/debounce'
import Icon from '../Icon'
import Heading from '../Heading'
import Link from '../Link'
import List from '../List'
import Button from '../Button'
import Portal from '../Portal'
import Spinner from '../Spinner'
import EventHandler from '../EventHandler'
import Logo from '../../assets/andrew bear_final.png';

import TextContainer from '../TextContainer'
import {SocialIcon} from 'react-social-icons'
import './Nav.scss'

const routeInfo = [
  { name: 'Home',
    to: '/',
  },
  { name: 'Tags',
    to: '/tags',
  },
];

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offsetTop: 0,
    }

    // scroll
    // this.handleScroll = debounce(() => this.handleScrollEvent, 500, {trailing: true});
    // resize
    this.handleScroll = debounce(this.handleScrollEvent, 50); // , {trailing: true}
  }

  componentDidMount() {
    if (this.node != null) {
      this.setState({offsetTop: this.node.offsetHeight})
    }
  }

  handleScrollEvent = () => {
    if (this.node != null) {
      this.setState({offsetTop: this.node.offsetHeight})
    }
  }

  render() {
    const {offsetTop} = this.state;
    const {recentArticle} = this.props;
    const listMarkup = routeInfo && (
      <List items={routeInfo.map((route, ind) => (
        <Link {...route} key={ind}/>
    ))}/>
    )

    const navContentMarkup = (
      <div className="nav-content">
      <GatsbyLink style={{color: 'inherit', textDecoration: 'none'}} to="search">
        <Icon src="search" />
      </GatsbyLink>
        <Button to={recentArticle}>
            Recent article
        </Button>
      </div>
    )

    const navLinkMarkup = (
      <div className="nav-links">
        <TextContainer>
          {listMarkup}
        </TextContainer>
      </div>
    )

    const navMarkup = (
      <nav className="nav">
        {navLinkMarkup}
        {navContentMarkup}
      </nav>
    )

    const navHeadingMarkup = (
      <React.Fragment>
        <Heading nav screen="web">
          Programming Paradigms.
        </Heading>
        <Heading nav screen="mobile">
          P.P.
        </Heading>
      </React.Fragment>
    )

    const headerBrandMarkup = (
      <div className="header-brand">
        {/* <Spinner /> */}
        <img src={Logo} style={{width:'2rem', marginRight: '5px'}} />
        <a style={{color: 'inherit', textDecoration: 'none'}} href="http://www.andrewmusgrave.me" target="_blank">
          {navHeadingMarkup}
        </a>
      </div>
    )

    const headerSocialIcons = (
      <div className="social-media-icons">
        <SocialIcon url="https://twitter.com/" style={{ height: '2rem', width: '2rem' }} />
        <SocialIcon url="https://github.com/" style={{ height: '2rem', width: '2rem' }} />
      </div>
    )

    const headerMarkup = (
      <header className="header">
        {headerBrandMarkup}
        {headerSocialIcons}
      </header>
    )

    return (
      <React.Fragment>
        <EventHandler
          type="resize"
          callback={this.handleScroll}
        />
        <div style={{height: `${offsetTop}px`}}/>
        <div className={`navbar-wrapper`} ref={node => this.node = node}>
          <div className="navbar">
            {headerMarkup}
            {navMarkup}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Nav
