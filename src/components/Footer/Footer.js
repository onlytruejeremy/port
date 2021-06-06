import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink,
  WebsiteRights
} from "./FooterComps";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Information</FooterLinkTitle>
            <FooterLink to="/about">About Me</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>UCode &copy; 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://github.com/onlytruejeremy"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialIconLink>

            <SocialIconLink
              href="https://linkedin.com/in/barber-jeremy"
              target="_blank"
              aria-label="Linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
