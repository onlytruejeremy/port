import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ bgColor, theme }) => theme[bgColor]};
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1200px;
  width: 100%;
`;

export const FullContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  padding: 50px 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  flex-wrap: wrap;
  width: 100%;
  gap: 10vw;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 800px) {
    min-width: 80vw;
  }
`;

export const TextCol = styled.div`
  max-width: 540px;

  padding-top: 0;
  padding-bottom: 60px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: ${({ reverse }) => (reverse ? "right" : "left")};
  align-items: ${({ reverse }) => (reverse ? "flex-end" : "flex-start")};
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
  ${({ center }) =>
    center ? "align-items: center; text-align: center;" : null}
  ${({ card, theme }) => {
    if (card) {
      return `padding: 10px; background: ${theme.dBlue}; min-height: 30vh; min-width: 200px; @media screen and (max-width: 800px) {
        width: 100%;
        padding: 10px;
      }`;
    }
  }}
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary, theme }) => (primary ? theme.dBlue : theme.purple)};
  padding: 10px 20px;
  color: ${({ theme }) => theme.light};
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.purple : theme.pHaze};
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const SubTitle = styled.div`
  color: ${({ lightText, theme }) => (lightText ? theme.pHaze : theme.purple)};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 56px;
  line-height: 1.1;
  color: ${({ lightText, theme }) => (lightText ? theme.light : theme.dark)};
`;

export const Body = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 24px;
  color: ${({ lightText, theme }) => (lightText ? theme.pHaze : theme.pHaze)};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ reverse, theme }) =>
    reverse ? "flex-start" : "flex-end"};
`;

export const Span = styled.span`
  max-width: 440px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 24px;
  color: ${({ lightText, theme }) => (lightText ? theme.light : theme.dark)};
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 500px;
  display: inline-block;

  ${({ shadow, theme }) =>
    shadow
      ? `box-shadow: 0 0.9px 2.2px rgba(0, 0, 0, 0.062),
    0 2.2px 5.6px rgba(0, 0, 0, 0.089), 0 4.4px 11.5px rgba(0, 0, 0, 0.111),
    0 9.1px 23.7px rgba(0, 0, 0, 0.138), 0 25px 65px rgba(0, 0, 0, 0.2); border: 2px solid ${theme.dBlue};`
      : `box-shadow: 0 0.9px 2.2px rgba(0, 0, 0, 0.062),
    0 2.2px 5.6px rgba(0, 0, 0, 0.089), 0 4.4px 11.5px rgba(0, 0, 0, 0.111),
    0 9.1px 23.7px rgba(0, 0, 0, 0.138), 0 25px 65px rgba(0, 0, 0, 0.2); padding: 1rem; border: 2px solid ${theme.dBlueAlt};`}
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.light};
  transition: 0.3s ease-out;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background: ${({ theme }) => theme.dark};
  padding: 10px 20px;
  &:hover {
    color: ${({ theme }) => theme.pHaze};
  }
  @media screen and (max-width: 850px) {
    border: none;
    &:hover {
      border: none;
    }
  }
`;
