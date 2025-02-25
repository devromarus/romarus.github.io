import React, { Component } from "react";
import styled from "styled-components";
import backgroundImageUrl from "./background.jpg";
import backgroundImageUrl90 from "./background-90.jpg";
import backgroundImageUrl80 from "./background-80.jpg";

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  background-image: url("${backgroundImageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    background-image: url("${backgroundImageUrl90}");
  }

  @media screen and (max-width: 768px) {
    background-image: url("${backgroundImageUrl80}");
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 128px;
  color: white;
  z-index: 1;

  @media screen and (max-width: 767px) {
    margin: 8px;
  }
`;

const Name = styled.h1`
  font-size: 64px;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  margin: 4px;
  font-weight: 300;
  font-size: 24px;
  background: #47ffd1; /* Old Browsers */
  background: -webkit-linear-gradient(left, #47ffd1, #00ff99); /*Safari 5.1-6*/
  background: -o-linear-gradient(left, #47ffd1, #00ff99); /*Opera 11.1-12*/
  background: -moz-linear-gradient(left, #47ffd1, #00ff99); /*Fx 3.6-15*/
  background: linear-gradient(to right, #47ffd1, #00ff99); /*Standard*/
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const DescriptionLink = styled.a``;

const Copyright = styled.a`
  position: absolute;
  right: 32px;
  bottom: 32px;
  color: white;
  margin: 0;

  @media screen and (max-width: 767px) {
    right: 8px;
    bottom: 8px;
  }
`;

const AlfabankLink = () => (
  <DescriptionLink href="https://alfabank.ru" target="_blank" rel="noopener">
    alfabank.ru
  </DescriptionLink>
);

const ResumeLink = () => (
  <DescriptionLink href="http://resume.khisamutdinov.ru/" target="_blank" rel="noopener">
    ⟶ resume
  </DescriptionLink>
);

const Links = styled.div`
  color: white;
  position: absolute;
  bottom: 32px;
  left: 32px;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    bottom: 8px;
    left: 8px;
  }
`;

const SocietyLinkTag = styled.a`
  color: white;
  margin-bottom: 6px;

  :last-child {
    margin-bottom: 0;
  }

  :visited {
    color: white;
  }
`;

const BackgroundShadow = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;

  @media screen and (max-width: 767px) {
    background-color: rgba(0, 0, 0, 0.66);
  }
`;

const SocietyLink = ({ href, children }) => (
  <SocietyLinkTag href={href} target="_blank" rel="noopener">
    {children}
  </SocietyLinkTag>
);

export class App extends Component {
  render() {
    return (
      <Root>
        <TextBlock>
          Hi, I'm
          <Name>Khisamutdinov Rinas</Name>
          <Description>
            Software engineer at <AlfabankLink />
          </Description>
          <Description>
            <ResumeLink /> 
          </Description>
        </TextBlock>
        <Copyright>Background image by Tomislav Jakupec</Copyright>
        <Links>
          <SocietyLink href="https://vk.com/id33255365">
            <i className="fab fa-vk" />
          </SocietyLink>
          <SocietyLink href="https://www.instagram.com/rinas.kaa/">
            <i className="fab fa-instagram" />
          </SocietyLink>
          <SocietyLink href="https://github.com/devromarus/">
            <i className="fab fa-github" />
          </SocietyLink>
          <SocietyLink href="https://telegram.me/rinaska">
            <i className="fab fa-telegram" />
          </SocietyLink>
        </Links>
      </Root>
    );
  }
}
