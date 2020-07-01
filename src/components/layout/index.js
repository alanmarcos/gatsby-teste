import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet }  from 'react-helmet'
import { LayoutWrapper } from './style'
import Header from "../header/index"
import Footer from '../footer/index'
import "./typetura.css"
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

  let filter = (true ? 'blur(0)' : 'blur(15px)') 

  return (
    <LayoutWrapper>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
          <script src={'/js/typetura.min.js'}></script>
        </Helmet>
        <Header 
          hasSpeechRecognition={speechRecognition} />
        <div 
          style={{ 
            transition: 'all .2s ease', 
            willChange: 'filter', 
            filter: filter
            }}>
          <main>
            {children}
          </main>
          <Footer />
        </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
