import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroB} from './HeroElements'
import Video from '../../../videos/video.mp4'

function HeroSection() {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>- Pedro Henrique -</HeroH1>
                <HeroP>Pesquisador | Desenvolvedor @ Economia | UFABC  </HeroP>
                <HeroB type="button" action="https://drive.google.com/file/d/1I4dxT7HkImVLL-BeOtAWLUheIsODILAV/view?usp=sharing">Currículo</HeroB>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
