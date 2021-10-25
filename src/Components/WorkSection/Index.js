import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer2,
  InfoRow2,
  InfoWrapper2,
  Column12,
  Column22,
  TopLine2,
  Heading2,
  Subtitle2,
  BtnWrap2,
  TextWrapper2,
  ImgWrap2,
  Img2,
} from "./WorkElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
  headline,
  description,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer2 lightBg={lightBg} id={id}>
        <InfoWrapper2>
          <InfoRow2 imgStart={imgStart}>
            <Column12>
              <TextWrapper2>
                <TopLine2>{topLine}</TopLine2>
                <Heading2 lightText={lightText}> {headline} </Heading2>
                <Subtitle2 darkText={darkText}> {description} </Subtitle2>
                <BtnWrap2>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap2>
              </TextWrapper2>
            </Column12>
            <Column22>
              <ImgWrap2>
                <Img2 src={img} alt={alt} />
              </ImgWrap2>
            </Column22>
          </InfoRow2>
        </InfoWrapper2>
      </InfoContainer2>
    </>
  );
};

export default InfoSection;
