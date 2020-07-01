import React from 'react'
import 'react-awesome-slider/dist/styles.css';
import LinhaBackground from '../../images/banners/lines-bg-bruno.png'
import { graphql, StaticQuery } from 'gatsby'
import { HomeAwesomeSlider, SliderWrapper, Slide, SlideTextWrapper } from './style'
import TextLoop from "react-text-loop"
import { H1 } from '../headings/index'
import Img from 'gatsby-image'

const Slider = props => {
  const { data } = props

  return (
    <SliderWrapper>
      <StaticQuery query={query}render={data => (
        <HomeAwesomeSlider>

          <Slide style={{ background: `url(${LinhaBackground}) no-repeat center center`, backgroundSize: '100% auto' }}>
              <SlideTextWrapper>
                <H1>
                  Para  
                  <TextLoop className="looping-texts">
                    <span>Imobiliárias</span>
                    <span>Proprietários</span>
                    <span>Inquilinos</span>
                  </TextLoop>              
                </H1>
                <p>Aluguel de imóveis de forma rápida, fácil e sem precisar de fiador.</p>
              </SlideTextWrapper>
              <Img 
                fixed={data.FotoBruno.childImageSharp.fixed}
                className="foto-bruno bottom-right"
                style={{position: "absolute"}} 
                alt="Bruno Gagliasso" />
          </Slide>

          <div>Slide 2</div>

        </HomeAwesomeSlider>
      )} />
    </SliderWrapper>
  )
};


export default Slider;

const query = graphql`
query {
  FotoBruno: file(relativePath: {eq: "banners/bruno.png"}) {
    childImageSharp {
      fixed(width: 1000) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
}
`