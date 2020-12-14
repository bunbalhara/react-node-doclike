import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import GlobalContext from "../../context/GlobalContext";

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
    link,
    items,
    depthStep = 20,
    depth = 0,
    code,
    ...rest
}) => {
    const [open, setOpen] = useState(false);
    const hasSubItems = Array.isArray(items);
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
                        type === 'locale' ?
                            <div className={'locale-item'}>
                                <img className={'flag-img'} src={require(`../../assets/image/flags/${label.code}.png`)} alt={'locale flag'}/>
                                <span className={'locale-name'}>{label.name}</span>
                            </div> :
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
                            <Link href={`/${link}`}>
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
                    }
                </ListGroup.Item>
            )}

            {hasSubItems ? (
                <Collapse in={open}>
                    <ListGroup>
                        {items.map((subItem) => (
                            type === 'country' ?
                                <MenuItem
                                    key={subItem}
                                    depth={depth + 1}
                                    depthStep={depthStep}
                                    type={type}
                                    label={subItem}
                                /> :
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
    const menuItems = [
        { link: "", label: 'home' },
        { link: "/how-it-works", label: 'howItWorks' },
        { link: "/pricing", label: 'pricing' },
        { link: "/contact", label: 'contact' },
        { link: "/login", label: 'login' },
        { link: "/register", label: 'register' }
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
