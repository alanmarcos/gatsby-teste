import React from 'react'
import SectionHeader from '../sectionHeader/index'
import FAQ from '../faq/index'
import { FAQWrapper } from './style'
import PictoPerguntas from '../../images/svg/picto-perguntas.svg'

const FAQPage = props => {

  const faqData = [
    {
      question: "Lorem Ipsum Dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      question: "Lorem Ipsum Dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      question: "Lorem Ipsum Dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    },
    {
      question: "Lorem Ipsum Dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    }
  ]

  return (
    <FAQWrapper>
      <SectionHeader 
        title="Perguntas Frequentes"
        icon={PictoPerguntas}
        />
      <FAQ data={faqData} />
    </FAQWrapper>
  )
}

export default FAQPage