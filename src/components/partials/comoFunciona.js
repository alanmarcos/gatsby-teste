import React from 'react'
import { SectionHeader } from '../sectionHeader/index'
import PictoComoFunciona from '../../images/svg/picto-como-funciona.svg'
import { ComoFuncionaWrapper, EtapasWrapper, EtapaHeaderWrapper } from './style'

import NumberBackground from '../../images/svg/splash1.svg'
import ImageCpf from '../../images/svg/cpf.svg'
import ImageAnalise from '../../images/svg/analise.svg'
import ImageTermo from '../../images/svg/termoCredpago.svg'

const EtapaHeader = ({ image, number }) => {


  const deg = `${number === 3 ? 194 : (360 / number)}deg`

  return (
    <EtapaHeaderWrapper>
      <div className="illustration-wrapper">
        <img src={image} alt={`Etapa ${number}`} />
      </div>
      <div className="number-wrapper">
        <img src={NumberBackground} style={{ transform: `rotate(${deg})` }} />
        <span>#{number}</span>
      </div>
    </EtapaHeaderWrapper>
  )
}

const ComoFunciona = props => {

  return (
    <ComoFuncionaWrapper>
      <SectionHeader 
        title="Como Funciona?" 
        desc="O Processo é simples e totalmente digital. Mais facilidade para inquilinos, sem custo para a imobiliária."
        descMaxWidth={660}
        icon={PictoComoFunciona}
        />
      <EtapasWrapper>
        <div>
          <EtapaHeader
            number={1}
            image={ImageCpf}
            />
          <p>Inquilino escolhe o imóvel que deseja alugar e apresenta para a imobiliária ou corretor apenas o seu CPF;</p>
        </div>
        <div>
          <EtapaHeader
            number={2}
            image={ImageAnalise}
            />
          <p>A plataforma analisa em menos de 1 minuto. Se aprovado, o inquilino recebe um e-mail com os termos de contrato para leitura e aceite.</p>
        </div>
        <div>
          <EtapaHeader
            number={3}
            image={ImageTermo}
            />
          <p>Após aprovação da análise o inquilino já pode alugar sem fiador. Para isso, basta fazer o Aceite dos Termos e definir a forma de pagamento das taxas.</p>
        </div>
      </EtapasWrapper>
    </ComoFuncionaWrapper>
  )
}

export default ComoFunciona