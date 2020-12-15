import React from 'react';
import { FrontLayout } from "Container";
import { FormattedMessage } from "react-intl";

const Home = () => {
    return (
        <FrontLayout>
            <FormattedMessage id="testMessage"/>
            <div>dsfasdf</div>
        </FrontLayout>
    );
};

export default Home;
