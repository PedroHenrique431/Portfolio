import React from 'react'
import {HeroContainer2, HeroBg2, VideoBg2, HeroContent2, HeroH12, HeroP2} from './HeroElements2'
import Video from '../../videos/video2.mp4'
import { Button } from '../ButtonElements'

function HeroSection2() {
    return (
        <HeroContainer2 id="Trabalhos">
            <HeroBg2>
                <VideoBg2 autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg2>
            <HeroContent2>
                <HeroH12 >- Meus Trabalhos -</HeroH12>
                <HeroP2>
                </HeroP2>
                <Button>Ver no Github</Button>
            </HeroContent2>
        </HeroContainer2>
    )
}

export default HeroSection2
