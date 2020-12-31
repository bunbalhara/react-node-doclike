import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Box } from "../Core";
import Logo from "../Logo";
import appStore from '../../assets/image/app-store.png';
import googlePlay from '../../assets/image/google-play.png';
import Link from "next/link";

const TitleStyled = styled(Title)`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 22px;
`;

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const CopyRightArea = styled.div`
  border-top: ${({ dark, theme }) =>
        dark ? `1px solid #2f2f31 ` : `1px solid ${theme.colors.border}`};

  padding: 15px 0;
  p {
    color: ${({ dark, theme }) =>
        dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    letter-spacing: -0.41px;
    line-height: 38px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;

const Footer1 = ({ isDark = true }) => {
    return (
        <>
            {/* <!-- Footer1 section --> */}
            <Box bg="white" style={{ borderTop: 'solid 1px #8080803f' }}>
                <Container>
                    <Box
                        css={`
              padding: 80px 0 60px;
            `}
                    >
                        <Row className="justify-content-center">
                            <Col lg="4" md="4" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column' }}>
                                <Logo white={isDark} />
                                <div style={{ fontSize: 16 }}>Discover amazing things toto evrywhere you go.</div>
                                <div className="pr-lg-5" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: '100%' }}>
                                    <img src={appStore} style={{ width: 150, height: 50 }}/>
                                    <img src={googlePlay} style={{ width: 150, height: 50 }} />
                                </div>
                            </Col>
                            <Col lg="6" md="8" className="mt-5 mt-lg-0">
                                <Row>
                                    <Col xs="6" lg="4">
                                        <div className="mb-5 mb-lg-4">
                                            <TitleStyled
                                                variant="card"
                                                color={isDark ? "light" : "dark"}
                                            >
                        Company
                                            </TitleStyled>
                                            <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                                                <li>
                                                    <a href="/#" target="_blank">
                            About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank">
                            Blog
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank">
                            F.A.Q
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank">
                            Contact
                                                    </a>
                                                </li>
                                            </UlStyled>
                                        </div>
                                    </Col>
                                    <Col xs="6" lg="4">
                                        <div className="mb-5 mb-lg-4">
                                            <TitleStyled
                                                variant="card"
                                                color={isDark ? "light" : "dark"}
                                            >
                        Support
                                            </TitleStyled>
                                            <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                                                <li>
                                                    <a href="/#" target="_blank">
                            Get in Touch
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank">
                            Help Center
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank">
                            How it works
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/terms-of-service">
                                                        <a target="_blank" >Terms Of Service</a>
                                                    </Link>
                                                </li>
                                            </UlStyled>
                                        </div>
                                    </Col>
                                    <Col xs="6" lg="4">
                                        <div className="mb-lg-4">
                                            <TitleStyled
                                                variant="card"
                                                color={isDark ? "light" : "dark"}
                                            >
                        Contact Us
                                            </TitleStyled>
                                            <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                                                <li>
                                                    <a href="/#" target="_blank">
                            Email: support@doclike.fr
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/#" target="_blank" style={{ whiteSpace: 'nowrap' }}>
                            Phone: 1 (00) 832 2342
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/privacy-policy">
                                                        <a target="_blank">Privacy Policy</a>
                                                    </Link>
                                                </li>
                                            </UlStyled>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Box>
                    <CopyRightArea dark={isDark ? 1 : 0}>
                        <Row className="align-items-center">
                            <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
                                <p>2020 &copy; DocLike powered by Hannapp's. All rights reserved</p>
                            </Col>
                            <Col sm="6" className="text-sm-right text-center">
                                <ul className="social-icons">
                                    <li>
                                        <a href="/#" target="_blank">
                                            <i className="icon icon-logo-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" target="_blank">
                                            <i className="icon icon-logo-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" target="_blank">
                                            <i className="icon icon-logo-facebook" />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </CopyRightArea>
                </Container>
            </Box>
        </>
    );
};

export default Footer1;
