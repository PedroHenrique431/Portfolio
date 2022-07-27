import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import {ContactSection, Title, SocialIconLink, SocialIcons, Form, Row} from "./contact.js";


const Contact = () => {
  return (
    <ContactSection>
      <Title> Entre em contato</Title>

      <SocialIcons>
        <SocialIconLink
          href="https://www.linkedin.com/in/pedro-henrique-88a810186/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink
          href="https://discord.com/invite/RaBwEVU"
          target="_blank"
          aria-label="Discord"
        >
          <FaDiscord />
        </SocialIconLink>
        <SocialIconLink
          href="https://github.com/PedroHenrique431"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </SocialIconLink>
      </SocialIcons>

      <Form action="https://formsubmit.co/cff3b84938f5937a17cdfeb3be84be5f" method="POST" >
      <input type="hidden" name="_captcha" value="false"/>
      <input type="hidden" name="_next" value="https://pedrohenrique431.github.io/Portfolio/"/>
      <input type="hidden" name="_template" value="table"></input>
        <Row>
          <input type="text" name="Nome" placeholder="Seu Nome"></input>
          <input type="email" name="E-mail" placeholder="Seu e-mail" required></input>
        </Row>
        <textarea
          name="Mensagem"
          placeholder="Sua mensagem"
          cols="30"
          rows="2"
        ></textarea>
        <div style={{ margin: "0 auto"}}>
          <button>Enviar</button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
