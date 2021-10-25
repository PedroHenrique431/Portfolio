import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  TextWrapper,
  ImgWrap,
  Img,
} from "./InfoElements";

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
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
