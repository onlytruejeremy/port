import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";
import {
  Column,
  Container,
  Row,
  Button,
  Title,
  Body,
  TextCol,
  Wrapper,
  ImgWrapper,
  Img,
  FullContainer
} from "../../components/Layout";
import { data } from "../../services/data";
const About = (props) => {
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
                  <Title>About Me</Title>
                  <Body>
                    I've always been interested in how technology works; going
                    back to before I was even a teenager. I remember playing
                    around with 3d modeling in blender, fixing old computers and
                    messing around with technology.
                  </Body>
                  <Body>
                    During high school I attended cisco networking academy, as
                    well as a few courses in geographic information systems
                    (GIS). I ended up getting certified as a geospatial
                    technician.
                  </Body>
                  <Body>
                    I enlisted in the Army in 2016 where I served as a
                    geospatial intelligence imagery analyst. As I was leaving
                    the Army, I again contemplated what I was going to do next.
                    I knew I had a passion for technology and got the security+
                    certification. Eventually I found out about coding bootcamps
                    and I decided to attend one.
                  </Body>
                  <Body>
                    Now I'm building full stack applications and websites. I've
                    used FireBase, MongoDB, NodeJS, ReactJS, NGINX, and a lot
                    more on this journey so far and I can't wait to see what
                    I'll use next.
                  </Body>
                  <Button name="contact" onClick={changePage} primary>
                    Contact Me
                  </Button>
                </TextCol>
              </Column>
              <Column>
                <Carousel autoplay infiniteLoop interval={1000}>
                  <ImgWrapper>
                    <Img shadow src={data.images.Hike} />
                  </ImgWrapper>
                  <ImgWrapper>
                    <Img shadow src={data.images.Army} />
                  </ImgWrapper>
                </Carousel>
              </Column>
            </Row>
          </FullContainer>
        </Container>
      </Wrapper>
    </>
  );
};
export default About;
