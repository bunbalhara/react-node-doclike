import React, { useEffect, useState } from "react";
import './style.scss';
import Logo from "Components/Logo";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import {SideBar} from "Components/SideBar/SideBar";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

export const Header = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
    const opacity = Math.min(100 / currentScrollHeight, 1);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (currentScrollHeight !== newScrollHeight) {
                setCurrentScrollHeight(newScrollHeight);
            }
        };
    }, []);

    const toggleSidebar = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSideBarOpen(open)
    };

    return (
        <div className="header" >
            <div className="wrapper">
                <div className='left-box'>
                    <MenuIcon className="menu-icon" onClick={toggleSidebar(true)}/>
                    <Drawer open={sideBarOpen} onClose={toggleSidebar(false)}>
                        <SideBar/>
                    </Drawer>
                </div>
                <div className='logo-box'>
                    <Logo/>
                </div>
                <div className='right-box'>
                    <Link to='/login' className="menu-item">
                        <FormattedMessage id="login"/>
                    </Link>
                    <Link to='/register' className="menu-item">
                        <FormattedMessage id="register"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
