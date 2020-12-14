import React from "react";
import {useSelector} from "react-redux";
import imgLogoWhite from "../../assets/image/logo_white.png";
import imgLogo from "../../assets/image/logo.png";
import LocalizedStrings from "react-localization";
const strings = new LocalizedStrings({
    en:{
        in:'in',
        doctors:"Doctors",
    },
    fr: {
        in:"en",
        doctors:"Docteurs",
    }
});

const Logo = ({white}) => {
    const {country, locale} = useSelector(state=>state.app);
    strings.setLanguage(locale.code);
    const mode = process.env.NEXT_PUBLIC_MODE;

    if(white){
        return (
            <div className='logo-wrapper'>
                <a href={mode==="pro"?'https://doclike.app':'http://doclike.nc:3000'}>
                    <div className="content-container">
                        <img src={imgLogoWhite} style={{width: 30, height: 30}} alt="Logo" />
                        <div className='text-doctors' style={{color:'white'}}>{strings.doctors}</div>
                        <div className='text-in' style={{color:'white'}}>{strings.in}</div>
                        <div className='text-country' style={{color:'white'}}>{country}</div>
                        <div className="powered-by-doclike">powered by Doclike</div>
                    </div>
                </a>
            </div>
        );
    }

      return (
        <div className='logo-wrapper'>
            <a href={mode==="pro"?'https://doclike.app':'http://doclike.nc:3000'}>
                <div  className="content-container">
                    <img src={imgLogo} alt="Logo"  style={{width: 30, height: 30}}/>
                    <div className='text-doctors'>{strings.doctors}</div>
                    <div className='text-in'>{strings.in}</div>
                    <div className='text-country'>{country}</div>
                    <div className="powered-by-doclike">powered by Doclike</div>
                </div>
            </a>
        </div>
      );
};

Logo.defaultProps = {
    white:false,
};

export default Logo;
