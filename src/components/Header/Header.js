import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Link from "next/link";
import LocalizedStrings from 'react-localization'
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import NestedMenu from "../NestedMenu";
import {device, getCurrentLocation} from "../../utils";
import Logo from "../Logo";
import {useDispatch, useSelector} from "react-redux";
import { useFirestoreConnect } from 'react-redux-firebase'
import {SET_APP_COUNTRY, SET_APP_LOCALE} from "../../redux/actions";
import MenuIcon from '@material-ui/icons/Menu';
import Head from "next/head";
import {JOB_SET_CURRENT_LOCATION} from "../../redux/actions";
import {Hidden} from "@material-ui/core";

let strings = new LocalizedStrings({
    en:{
        login:'Log in',
        register:"Register",
    },
    fr: {
        login:"S'identifier",
        register:"S'inscrire",
    }
});

const SiteHeader = styled.header`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
    position: fixed !important;
    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: white;
    }
    &.initial-header {
        transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: white;
    }
`;


const Menu = styled.ul`
      height: 60px;
      width: 100%;
    justify-content: flex-end;
    z-index:999999;
  .dropdown-toggle {
    cursor: pointer;
    text-transform: capitalize;
    
    &::after{
        position:absolute;
        top: 30px;
        @media screen and (max-width: 900px){
            vertical-align: 0;
        }
    }
  }
  > li {
    > .nav-link {
        color: black !important;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }
      &:hover {
        color: ${({ theme }) => theme.colors.primary} !important;
      }
    }
  }
  .nav-item.dropdown {
    margin-left: 10px;
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

const MenuDropdown = styled.ul`
  list-style: none;
  @media ${device.lg} {
    top: 45px!important;
    position: absolute;
    width: 150px;
    box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);
    padding: 10px 0px;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.4s, top 0.4s;
    pointer-events: none;
    left: 18px !important;
    background-color: #ffffff;
    display: block;
    color:black !important;
    box-shadow: 0 0 4px 2px #8080807f;
  }
  > .drop-menu-item {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-transform: capitalize;
    cursor: pointer;
    color:black !important;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    >img{
        width: 18px;
        height: 12px;
        margin-right: 10px;
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        &::after {
          transform: rotate(0deg);
        }
    }
  }
  &.dropdown-right {
    left: auto;
    right: -90%;
  }
`;

const Header = ({ isDark = false }) => {

    const mode = process.env.NEXT_PUBLIC_MODE;
  useFirestoreConnect([
      {
          collection:'settings',
          doc:'countries',
          storeAs:'countryList'
      },
      {
          collection:'settings',
          doc:'locales',
          storeAs:'localeList'
      }
  ])
      const { localeList} = useSelector(state=>state.firestore.ordered);
      const {locale, hideHeader} = useSelector(state=>state.app)
      const gContext = useContext(GlobalContext);
      const [showScrolling, setShowScrolling] = useState(false);
      const [showReveal, setShowReveal] = useState(false);
      const dispatch = useDispatch();
      strings.setLanguage(locale.code);
      const [open, setOpen] = useState(false)

    useEffect(()=>{
        getCurrentLocation(locale.code, (res)=>{
            dispatch({type:JOB_SET_CURRENT_LOCATION, payload: res})
        })
    },[])


  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : "initial-header"
        }  ${hideHeader?"header-hidden":""}`}
      >
        <Container fluid>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
            <div className="brand-logo">
                    <Logo />
            </div>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu className="navbar-nav" >
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="/#"
                            onClick={(e)=>e.preventDefault()}
                        >
                            <img src={require(`../../assets/image/flags/${locale.code}.png`)}/>
                        </a>
                        <MenuDropdown
                            className="menu-dropdown dropdown-right"
                            dark={isDark ? 1 : 0}
                        >
                            {
                                localeList && localeList[0].list.map((locale, index) => (
                                    <li
                                        className="drop-menu-item"
                                        key={index}
                                        onClick={()=>{dispatch({type:SET_APP_LOCALE, payload: locale})}}
                                    >
                                        <img src={require(`../../assets/image/flags/${locale.code}.png`)}/>
                                        {locale.name}
                                    </li>
                                ))
                            }
                        </MenuDropdown>
                    </li>
                    <li className="nav-item">
                        <a
                            href="/"
                            className="nav-link"
                            role="button"
                            aria-expanded="false"
                        >
                            {strings.login}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="/"
                            className="nav-link"
                            role="button"
                            aria-expanded="false"
                        >
                            {strings.register}
                        </a>
                    </li>
                </Menu>
              </div>
            </div>
              <div
                  className={`nav-toggle-btn ${gContext.visibleOffCanvas ? "collapsed" : ""}`}
                  data-toggle="collapse"
                  data-target="#mobile-menu"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={gContext.toggleOffCanvas}
              >
                  <MenuIcon className='menu-icon'/>
              </div>

              <Hidden mdUp>
                  <div style={{position:'absolute',right: 0}}>
                      <div className="position-relative" style={{zIndex: 99999999999}}>
                          <a
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              href="/#"
                              onClick={(e)=> {
                                  e.preventDefault()
                                  setOpen(true)
                              }}
                          >
                              <img src={require(`../../assets/image/flags/${locale.code}.png`)}/>
                          </a>
                          {
                              open &&
                              <MenuDropdown
                                  className="menu-dropdown dropdown-right position-absolute bg-white"
                              >
                                  {
                                      localeList && localeList[0].list.map((locale, index) => (
                                          <li
                                              className="drop-menu-item"
                                              key={index}
                                              onClick={()=>{dispatch({type:SET_APP_LOCALE, payload: locale});}}
                                          >
                                              <img src={require(`../../assets/image/flags/${locale.code}.png`)}/>
                                              {locale.name}
                                          </li>
                                      ))
                                  }
                              </MenuDropdown>
                          }
                      </div>
                  </div>
              </Hidden>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu />
      </Offcanvas>
    </>
  );
};
export default Header;
