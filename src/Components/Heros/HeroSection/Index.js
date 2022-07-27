import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP} from './HeroElements'
import Video from '../../../videos/video.mp4'

function HeroSection() {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>- Pedro Henrique -</HeroH1>
                <HeroP>Desenvolvedor @ I.T | React.JS | Flutter
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
