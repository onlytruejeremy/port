import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import * as yup from "yup";
import { useFormik } from "formik";
import { sendMessage } from "../../services/Contact";
import styled from "styled-components";
const Form = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.dark};
  flex-flow: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  border-radius: 15px;
`;
const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;
const FormInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid ${({ theme }) => theme.pHaze};
  color: ${({ theme }) => theme.light};
  transition: 0.3s ease-out;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.pHaze};
  }
`;
const FormLabel = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.pHaze};
  font-size: 18px;
`;
const FormTextArea = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid ${({ theme }) => theme.pHaze};
  resize: none;
  height: 15ch;
  color: ${({ theme }) => theme.light};
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.pHaze};
  }
`;

const Contact = (props) => {
  const emailEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactValidation = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "minimum of 3 characters")
      .max(30, "max of 30 characters")
      .required("name is required"),
    lastName: yup
      .string()
      .min(3, "minimum of 3 characters")
      .max(30, "max of 30 characters")
      .required("name is required"),
    email: yup
      .string()
      .min(5, "minimum of 5 characters")
      .max(60, "max of 60 characters")
      .matches(emailEx, "enter valid email")
      .required("email is required"),
    message: yup
      .string()
      .min(10, "minimum of 10 characters")
      .max(250, "max of 250 characters")
      .required("message is required")
  });
  const contactFormik = useFormik({
    onSubmit: async (values, { resetForm }) => {
      try {
        alert(values);
        await sendMessage(values);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: contactValidation,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
  });
  return (
    <>
      <Wrapper bgColor={"light"}>
        <Container>
          <FullContainer>
            <Row>
              <Column>
                <Form>
                  <Title lightText>Contact</Title>
                  <FormGroup>
                    <FormInput
                      name="firstName"
                      value={contactFormik.values.firstName}
                      onChange={contactFormik.handleChange}
                    />
                    <FormLabel>
                      {contactFormik.errors.firstName || "First Name"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormInput
                      name="lastName"
                      value={contactFormik.values.lastName}
                      onChange={contactFormik.handleChange}
                    />
                    <FormLabel>
                      {contactFormik.errors.lastName || "Last Name"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormInput
                      name="email"
                      value={contactFormik.values.email}
                      onChange={contactFormik.handleChange}
                    />
                    <FormLabel>
                      {contactFormik.errors.email || "Email"}
                    </FormLabel>
                  </FormGroup>
                  <FormGroup>
                    <FormTextArea
                      name="message"
                      value={contactFormik.values.message}
                      onChange={contactFormik.handleChange}
                    />
                    <FormLabel>
                      {contactFormik.errors.message || "Message"}
                    </FormLabel>
                  </FormGroup>
                  <Button onClick={contactFormik.handleSubmit} type="submit">
                    Send Message
                  </Button>
                </Form>
              </Column>
            </Row>
          </FullContainer>
        </Container>
      </Wrapper>
    </>
  );
};
export default Contact;
