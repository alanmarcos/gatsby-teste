import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../images/svg/arrow.svg'
import { FaqQuestion, FaqAnswer, FaqItemWrapper } from './style'

const FaqItem = ({ currentIndex, item, index, onClick }) => {

  let isActive = currentIndex == index
  
  const handleClick = () => {
    if(onClick && !isActive){
      onClick()
    }    
  }

  return (
    <FaqItemWrapper key={index}>
      <FaqQuestion 
        onClick={handleClick} 
        aria-expanded={isActive.toString()}>
        <h6>{item.question}</h6>
        <div className="arrow">
          <Arrow width={16} />
        </div>
      </FaqQuestion>
      <FaqAnswer style={{ display: isActive ? 'block' : 'none' }}>
        <p>{item.answer}</p>
      </FaqAnswer>
    </FaqItemWrapper>
  )
}

const FAQ = ({ data }) => {

  const [currentIndex, setIndex] = useState(null)

  return (
    <div>
      {data.map( (item, index) => 
        <FaqItem 
          index={index} 
          currentIndex={currentIndex} 
          onClick={() => setIndex(index)}
          item={item} />
      )}
    </div>
  )
}
export default FAQ