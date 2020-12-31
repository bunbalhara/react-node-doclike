import React, {useEffect, useState} from "react";
import './style.less';
import Logo from "Components/Logo";

export const Header = () => {
    const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
    const opacity = Math.min(100 / currentScrollHeight  , 1)
    useEffect(()=>{
        window.onscroll =()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
            if (currentScrollHeight !== newScrollHeight){
                setCurrentScrollHeight(newScrollHeight)
            }
        }
    },[])

    return (
        <div className="header" >
            <Logo/>
        </div>
    );
};
