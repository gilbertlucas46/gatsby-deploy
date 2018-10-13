import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import MainMenu from '../components/menu/mainMenu'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query LayoutQuery{
      allWordpressWpApiMenusMenusItems {
        edges {
          node{
            id
            name
            items {
              title
              object_slug
              url 
            }
          }
        }
      }
    }

    `}
    render={data => (
      <>
        <Helmet
          title='zdfsdfasda'
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle='fgsdfgds' />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <MainMenu menu={data} />
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

