import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import GlobalContext from "../../context/GlobalContext";
import LocalizedStrings from 'react-localization'
import {useDispatch, useSelector} from "react-redux";
import {SET_APP_COUNTRY, SET_APP_LOCALE} from "../../redux/actions/appActions";


let strings = new LocalizedStrings({
  en:{
    home:'Home',
    howItWorks:"How it works",
    pricing:'Pricing',
    contact:'Contact',
    login:'Log in',
    register:'Register'
  },
  fr: {
    home:"Accueil",
    howItWorks:"Comment ça fonctionne",
    pricing:'Tarification',
    contact:'Contact',
    login:'S\'identifier',
    register:'S\'inscrire'
  }
});

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const MenuItem = ({
  label,
    type,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
    code,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);
  const dispatch = useDispatch();
  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className="d-flex align-items-center justify-content-between"
        >
          {
            type === 'locale'?
            <div className={'locale-item'}>
                <img className={'flag-img'} src={require(`../../assets/image/flags/${label.code}.png`)} alt={'locale flag'}/>
                <span className={'locale-name'}>{label.name}</span>
            </div>:
            <span className={'text-capitalize'}>{label}</span>
          }
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
          `}
        >
          {
            type !== undefined?(
                type === 'locale'?
                    <div className={'locale-item'} onClick={()=>{dispatch({type:SET_APP_LOCALE, payload: {code:code, name: name}})}}>
                      <img className={'flag-img'} src={require(`../../assets/image/flags/${code}.png`)} alt={'locale flag'}/>
                      <span className={'locale-name'}>{name}</span>
                    </div>:
                    <div className={'locale-item'} onClick={()=>{dispatch({type:SET_APP_COUNTRY, payload: label})}}>
                      <span className={'locale-name'}>{label}</span>
                    </div>
              ):(
                  isExternal ? (
                      <a
                          href={`${name}`}
                          onClick={() => {
                            if (gContext.visibleOffCanvas) {
                              gContext.toggleOffCanvas();
                            }
                          }}
                      >
                        <span className={'text-capitalize'}>{label}</span>
                      </a>
                  ) : (
                      <Link href={`/${name}`}>
                        <a
                            onClick={() => {
                              if (gContext.visibleOffCanvas) {
                                gContext.toggleOffCanvas();
                              }
                            }}
                        >
                          <span className={'text-capitalize'}>{label}</span>
                        </a>
                      </Link>)
                )
            }
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
                type ==='country'?
                    <MenuItem
                        key={subItem}
                        depth={depth + 1}
                        depthStep={depthStep}
                        type={type}
                        label={subItem}
                    />:
                    <MenuItem
                      key={subItem.name}
                      depth={depth + 1}
                      depthStep={depthStep}
                      type={type}
                        {...subItem}
                    />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = () => {
  const {locale, country} = useSelector(state=>state.app);
  const {localeList, countryList} = useSelector(state=>state.firestore.ordered);
  strings.setLanguage(locale.code);
  const menuItems = [
    { name: "", label: strings.home },
    { name: "https://doclike.app/how-it-works", label: strings.howItWorks, isExternal: true },
    { name: "https://doclike.app/pricing", label: strings.pricing , isExternal: true},
    { name: "https://doclike.app/contact", label: strings.contact , isExternal: true},
    { name: "https://doclike.app", label: strings.login, isExternal: true },
    { name: "https://doclike.app", label: strings.register, isExternal: true },
    {
      label: country,
      type: 'country',
      items: localeList?countryList[0].list:[],
    },
    {
      label: locale,
      type: 'locale',
      items: localeList?localeList[0].list:[],
    },
  ];


  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
