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

import TextContainer from '../TextContainer'
import {SocialIcon} from 'react-social-icons'
import './Nav.scss'

const routeInfo = [
  { name: 'Home',
    to: '/home',
  },
  { name: 'Articles',
    to: '/articles',
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
    const listMarkup = routeInfo && (
      <List items={routeInfo.map((route, ind) => (
        <Link {...route} key={ind}/>
    ))}/>
    )

    const navContentMarkup = (
      <div className="nav-content">
        <Icon src="search" />
        <Button>
          <GatsbyLink to="test"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Recent article
          </GatsbyLink>
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

    const headerBrandMarkup = (
      <div className="header-brand">
        <Spinner />
        <Heading>
          Andrew M.
        </Heading>
      </div>
    )

    const headerSocialIcons = (
      <div className="social-media-icons">
        <SocialIcon url="twitter.com" style={{ height: '2rem', width: '2rem' }} />
        <SocialIcon url="github.com" style={{ height: '2rem', width: '2rem' }} />
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
