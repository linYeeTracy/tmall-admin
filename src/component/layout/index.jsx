import React from 'react'
import TopNav from 'component/top-nav/index.jsx'
import SiderNav from 'component/sider-nav/index.jsx'

import './theme.scss'


class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        <SiderNav />
        {this.props.children}
      </div>
    )
  }
}

export default Layout