import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.dBlue};
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: ${({ theme }) => theme.light};
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.light};

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  color: ${({ theme }) => theme.light};

  @media screen and (max-width: 850px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: 0.3s ease-out;
  &:hover {
    color: ${({ theme }) => theme.pHaze};
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  gap: 1rem;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${({ theme }) => theme.light};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  display: flex;
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.light};
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 1rem;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.light};
  font-size: 24px;
  transition: 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.pHaze};
  }
`;

export const SocialIcon = styled(FaCode)`
  margin-right: 10px;
`;
