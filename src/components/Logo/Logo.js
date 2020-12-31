import React from "react";
import imgLogo from "Assets/image/logo.png";
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import './style.less';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to='/'>
                <div className="logo-wrapper">
                    <img src={imgLogo} alt="Logo" />
                    <div className="text-doctors">
                        <FormattedMessage id="doctors"/>
                    </div>
                    <div className="text-in" >
                        <FormattedMessage id="in" />
                    </div>
                    <div className="text-country" >
                        <FormattedMessage id="country" />
                    </div>
                    <div className="powered-by-doclike">
                        <FormattedMessage id="poweredByDoclike"/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;
