import React from "react";
import { useHistory } from "react-router-dom";
import {
  Column,
  Container,
  Row,
  Button,
  SubTitle,
  Title,
  Body,
  TextCol,
  Wrapper,
  ImgWrapper,
  Img,
  FullContainer
} from "../../components/Layout";
import { data } from "../../services/data";
const Home = (props) => {
  const history = useHistory();
  const changePage = (e) => {
    e.preventDefault();
    history.push(`/${e.target.name}`);
  };
  return (
    <>
      <Wrapper bgColor={"light"}>
        <Container>
          <FullContainer>
            <Row>
              <Column>
                <TextCol>
                  <SubTitle>Jeremy Barber</SubTitle>
                  <Title>Full Stack Developer</Title>
                  <Body>
                    I solve problems and create solutions by developing websites
                    and applications.
                  </Body>
                  <Button onClick={changePage} primary name="contact">
                    Contact Me
                  </Button>
                </TextCol>
              </Column>
              <Column>
                <ImgWrapper>
                  <Img shadow src={data.images.Profile} />
                </ImgWrapper>
              </Column>
            </Row>
          </FullContainer>
        </Container>
      </Wrapper>
      <Wrapper bgColor={"dBlue"}>
        <Container>
          <FullContainer>
            <Row reverse>
              <Column>
                <TextCol>
                  <SubTitle lightText>Tech Stack</SubTitle>
                  <Title lightText>ReactJS, NodeJS, MySQL</Title>
                  <Body lightText>
                    Of course there is more to the story than this, and at the
                    same time I would consider these my top skills.
                  </Body>
                  <Button onClick={changePage} name="about">
                    About Me
                  </Button>
                </TextCol>
              </Column>
              <Column>
                <ImgWrapper reverse>
                  <Img src={data.images.Creation} />
                </ImgWrapper>
              </Column>
            </Row>
          </FullContainer>
        </Container>
      </Wrapper>
      <Wrapper bgColor={"light"}>
        <Container>
          <FullContainer>
            <Row>
              <Column>
                <TextCol center card>
                  <Title lightText>About</Title>
                  <Body lightText>Take a dive into my background.</Body>
                  <Button onClick={changePage} name="about">
                    View About
                  </Button>
                </TextCol>
              </Column>
              <Column>
                <TextCol center card>
                  <Title lightText>Projects</Title>
                  <Body lightText> View some of my latest work.</Body>
                  <Button onClick={changePage} name="projects">
                    View Work
                  </Button>
                </TextCol>
              </Column>
              <Column>
                <TextCol center card>
                  <Title lightText>Contact</Title>
                  <Body lightText>Have a question? Get in touch.</Body>
                  <Button onClick={changePage} name="contact">
                    Contact Me
                  </Button>
                </TextCol>
              </Column>
            </Row>
          </FullContainer>
        </Container>
      </Wrapper>
    </>
  );
};
export default Home;
