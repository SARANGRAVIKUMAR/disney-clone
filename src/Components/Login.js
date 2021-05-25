import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Sign Up</SignUp>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          laboriosam, eaque iusto nihil numquam porro ex excepturi consequatur!
          Iure, placeat?
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: 92vh;
  display: flex;
  justify-content: center;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  margin-top: 200px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063ef;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img``;
