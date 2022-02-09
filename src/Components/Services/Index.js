import React from 'react'
import Icon1 from '../../Images/html.svg'
import Icon2 from '../../Images/css3.svg'
import Icon3 from '../../Images/react.svg'
import Icon4 from '../../Images/vscode.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Tecnologias utilizadas neste site: </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>HTML</ServicesH2>
                    <ServicesP>HTML5</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>CSS</ServicesH2>
                    <ServicesP>CSS3</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>REACT</ServicesH2>
                    <ServicesP>REACT.JS</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
