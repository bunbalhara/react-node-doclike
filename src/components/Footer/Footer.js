import React from "react";
import { Box } from 'Components';
import Logo from "Components/Logo";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import './style.scss'

const appStore = require('Assets/image/app-store.png')
const googlePlay = require('Assets/image/google-play.png')

const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
  }
`;

export const Footer = () => {
    return (
        <Box className="footer">
            <Container>
                <Box>
                    <Row>
                        <Col lg="4" md="4" style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection:'column'}}>
                            <Logo />
                            <div style={{fontSize: 16}}>Discover amazing things toto evrywhere you go.</div>
                            <div className="pr-lg-5" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop: 20, width:'100%'}}>
                                <img src={appStore} style={{width: 150, height:50}} alt='app store'/>
                                <img src={googlePlay} style={{width: 150, height: 50}} alt='google play store'/>
                            </div>
                        </Col>
                        <Col lg="6" md="8" className="mt-5 mt-lg-0">
                            <Row>
                                <Col xs="6" lg="4">
                                    <div className="mb-5 mb-lg-4">
                                        <div className='title' >
                                            Company
                                        </div>
                                        <UlStyled>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    F.A.Q
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    Contact
                                                </Link>
                                            </li>
                                        </UlStyled>
                                    </div>
                                </Col>
                                <Col xs="6" lg="4">
                                    <div className="mb-5 mb-lg-4">
                                        <div className='title' >
                                            Support
                                        </div>
                                        <UlStyled >
                                            <li>
                                                <Link to="/" target="_blank">
                                                    Get in Touch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    Help Center
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" target="_blank">
                                                    How it works
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/terms-of-service">
                                                    Terms Of Service
                                                </Link>
                                            </li>
                                        </UlStyled>
                                    </div>
                                </Col>
                                <Col xs="6" lg="4">
                                    <div className="mb-lg-4">
                                        <div className='title' >
                                            Contact Us
                                        </div>
                                        <UlStyled >
                                            <li>
                                                <Link to="/" target="_blank">
                                                    Email: support@doclike.fr
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" style={{whiteSpace:'nowrap'}}>
                                                    Phone: 1 (00) 832 2342
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/privacy-policy">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </UlStyled>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Box>
                <div className='copy-right-area'>
                    <Row className="align-items-center">
                        <Col sm="6" className="text-sm-left text-center mb-2 mb-sm-0">
                            <p>2020 &copy; DocLike powered by Hannapp's. All rights reserved</p>
                        </Col>
                        <Col sm="6" className="text-sm-right text-center">
                            <Link to="/">
                                <TwitterIcon/>
                            </Link>
                            <Link to="/">
                                <LinkedInIcon/>
                            </Link>
                            <Link to="/">
                                <FacebookIcon/>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Box>
    );
};
