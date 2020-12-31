import React from "react";
import { useSelector } from "react-redux";
import imgLogoWhite from "../../assets/image/logo_white.png";
import imgLogo from "../../assets/image/logo.png";
import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";

const Logo = ({ white }) => {
    const { country, locale } = useSelector(state => state.app);
    strings.setLanguage(locale.code);
    const mode = process.env.NEXT_PUBLIC_MODE;

    if (white) {
        return (
            <div className="logo-wrapper">
                <Link>
                    <div className="content-container">
                        <img src={imgLogoWhite} style={{ width: 30, height: 30 }} alt="Logo" />
                        <div className="text-doctors" style={{ color: 'white' }}>
                            <FormattedMessage id='doctors'/>
                        </div>
                        <div className="text-in" style={{ color: 'white' }}>
                            <FormattedMessage id='in' />
                        </div>
                        <div className="text-country" style={{ color: 'white' }}>
                            <FormattedMessage id='country' />
                        </div>
                        <div className="powered-by-doclike">powered by Doclike</div>
                    </div>
                </Link>
            </div>
        );
    }

    return (
        <div className="logo-wrapper">
            <Link to='/'>
                <div className="content-container">
                    <img src={imgLogo} alt="Logo" style={{ width: 30, height: 30 }}/>
                    <div className="text-doctors">
                        <FormattedMessage id='doctors'/>
                    </div>
                    <div className="text-in">
                        <FormattedMessage id='in'/>
                    </div>
                    <div className="text-country">
                        <FormattedMessage id='country'/>
                    </div>
                    <div className="powered-by-doclike">
                        <FormattedMessage id='poweredByDoclike'/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Logo.defaultProps = {
    white: false
};

export default Logo;
