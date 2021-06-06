import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Column,
  Container,
  Row,
  Title,
  Body,
  TextCol,
  Wrapper,
  ImgWrapper,
  Img,
  FullContainer,
  Span,
  ItemLink,
  Button
} from "../../components/Layout";
import ReactModal from "react-modal";
import { data } from "../../services/data";
import { MenuIcon } from "../../components/Nav/NavComps";
import { FaTimes } from "react-icons/fa";
const Projects = (props) => {
  const [pros, setPros] = React.useState([]);
  React.useEffect(() => {
    setPros(data.projects.map(mapPros));
  }, []);
  const mapPros = (item, index) => {
    if (item.id % 2 === 1) {
      return (
        <Wrapper bgColor={"light"} id={index} key={index}>
          <Container>
            <FullContainer>
              <Row>
                <Column>
                  <TextCol>
                    <Title>{item.name}</Title>
                    <Span>About:</Span>
                    <Body>{item.description}</Body>
                    <Span>Goal:</Span>
                    <Body>{item.goal}</Body>
                    <Span>Tech:</Span>
                    <Body>
                      {item.tech.map((tech, index) => {
                        return item.tech[index + 1] ? ` ${tech},` : ` ${tech}`;
                      })}
                    </Body>
                    <Row>
                      {item.links.map((item) => {
                        return (
                          <ItemLink
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </ItemLink>
                        );
                      })}
                    </Row>
                  </TextCol>
                </Column>
                <Column>
                  <Carousel
                    onClickItem={() => changeModal(item.id)}
                    autoplay={true}
                    infiniteLoop={true}
                    interval={1000}
                  >
                    {item.images.map((item) => (
                      <ImgWrapper>
                        <Img src={item} />
                      </ImgWrapper>
                    ))}
                  </Carousel>
                </Column>
              </Row>
            </FullContainer>
          </Container>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper bgColor={"dBlue"} id={index} key={index}>
          <Container>
            <FullContainer>
              <Row reverse>
                <Column>
                  <TextCol>
                    <Title lightText>{item.name}</Title>
                    <Span lightText>About:</Span>
                    <Body>{item.description}</Body>
                    <Span lightText>Goal:</Span>
                    <Body>{item.goal}</Body>
                    <Span lightText>Tech:</Span>
                    <Body>
                      {item.tech.map((tech, index) => {
                        return item.tech[index + 1] ? ` ${tech},` : ` ${tech}`;
                      })}
                    </Body>
                    <Row>
                      {item.links.map((item) => {
                        return (
                          <ItemLink
                            lightText
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.label}
                          </ItemLink>
                        );
                      })}
                    </Row>
                  </TextCol>
                </Column>
                <Column>
                  <Carousel
                    onClickItem={() => changeModal(item.id)}
                    autoplay={true}
                    infiniteLoop={true}
                    interval={1000}
                  >
                    {item.images.map((item) => (
                      <ImgWrapper>
                        <Img src={item} />
                      </ImgWrapper>
                    ))}
                  </Carousel>
                </Column>
              </Row>
            </FullContainer>
          </Container>
        </Wrapper>
      );
    }
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const setModal = (e) => {
    e ? e.preventDefault() : null;
    setIsOpen(!isOpen);
  };
  const changeModal = (id) => {
    const tempData = data.projects.filter((item) => item.id === id);
    const images = tempData[0].images;
    const content = (
      <Carousel autoplay={true} infiniteLoop={true} interval={1000}>
        {images.map((item) => (
          <img src={item} alt="project" />
        ))}
      </Carousel>
    );
    setModalContent(content);
    setModal();
  };
  const [modalContent, setModalContent] = React.useState([]);
  return (
    <>
      {pros}
      <ReactModal
        style={{
          overlay: { zIndex: 2000000, background: "rgba(0,0,0,.7)" },
          content: {
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px"
          }
        }}
        isOpen={isOpen}
      >
        <MenuIcon display onClick={setModal}>
          <FaTimes />
        </MenuIcon>
        {modalContent}
      </ReactModal>
    </>
  );
};
export default Projects;
