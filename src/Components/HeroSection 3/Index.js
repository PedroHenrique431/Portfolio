import React from 'react'
import {HeroContainer3, HeroBg, VideoBg, HeroContent3, HeroH1} from './HeroElements3'
import Video from '../../videos/skills.mp4'

function HeroSection3() {
    return (
        <HeroContainer3 id='Habilidades'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent3>
                <HeroH1>- Minhas Habilidades -</HeroH1>
            </HeroContent3>
        </HeroContainer3>
    )
}

export default HeroSection3
