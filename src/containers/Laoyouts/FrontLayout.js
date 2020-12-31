import React, {
    useState,
    useLayoutEffect
} from "react";

import { BaseLayout } from "Containers/Laoyouts/BaseLayout";
import styled from "styled-components";
import './style.less';
import AOS from "aos";

import { Helmet } from "react-helmet";
import imgFavicon from "Assets/favicon.png";
import { Header } from "Components";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 1.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const FrontLayout = ({ children }) => {
    const [visibleLoader, setVisibleLoader] = useState(true);

    useLayoutEffect(() => {
        AOS.init({ offset: 100, duration: 300, easing: "ease-out-quad", once: !0 });
        window.addEventListener('load', AOS.refresh);
        setVisibleLoader(false);
    }, []);


    return (
        <BaseLayout>
            <Helmet>
                <title>DocLike</title>
                <link rel="icon" type="image/png" href={imgFavicon} />
            </Helmet>
            <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
                <div className="load-circle">
                    <span className="one" />
                </div>
            </Loader>
            <Header/>
            <div className="site-body">
                {children}
            </div>
        </BaseLayout>
    );
};

export default FrontLayout;
