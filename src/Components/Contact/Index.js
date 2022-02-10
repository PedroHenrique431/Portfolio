import React from "react";
import {FaDiscord, FaGithub, FaLinkedin} from 'react-icons/fa';
import {SocialIconLink,SocialIcons} from "./FooterElements";

const Contact = () => {
return <ContactSection>
    <Title> Entre em contato </Title>
    <SocialIcons>
              <SocialIconLink href="https://www.linkedin.com/in/pedro-henrique-88a810186/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
              <SocialIconLink href="https://discord.com/invite/RaBwEVU" target="_blank" aria-label="Discord"><FaDiscord /></SocialIconLink>
              <SocialIconLink href="https://github.com/PedroHenrique431" target="_blank" aria-label="GitHub"><FaGithub /></SocialIconLink>
    </SocialIcons>
</ContactSection>
};

export default Contact;