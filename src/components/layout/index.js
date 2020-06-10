import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet }  from 'react-helmet'
import { LayoutWrapper } from './style'
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/index"
import "./layout.css"

const Layout = ({ children }) => {

  const [ speechRecognition, setSpeechRecognition ] = useState(false);

  useEffect( () => {
    setSpeechRecognition(Boolean(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <LayoutWrapper>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet" />
      </Helmet>
      <Header 
        hasSpeechRecognition={speechRecognition} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
