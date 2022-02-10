import React from "react";
import {FaInstagram, FaTwitter, FaTwitch, FaYoutube} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer id="Contato">
      <FooterWrap>
        

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="inicio"> PedroHbs </SocialLogo>
            <WebsiteRights>
              {" "}
              PedroHbs © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/pedro.hbs_/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href="https://twitter.com/PedroHbs__" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
              <SocialIconLink href="https://www.twitch.tv/pedrohbs__" target="_blank" aria-label="Twitch"><FaTwitch /></SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UCkLCbVcZcNfUGFYHLVbNXdw" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
