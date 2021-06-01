import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill';

import LayoutContext from './layoutContext'

class Layout extends PureComponent {
  state = {}

  componentDidMount() {
    this.init()
  }

  init = () => {
    const header = document.querySelector('.header')
    if (header) {
      this.ro.observe(header)
    } else {
      setTimeout(this.init, 1000)
    }
  }

  ro = new ResizeObserver((entries) => {
    this.setState({ headerHeight: entries[0].contentRect.height })
  });

  render() {
    const { children } = this.props
    const { headerHeight } = this.state
    return (
      <LayoutContext.Provider
        value={{
          fullpageHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {children}
      </LayoutContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
