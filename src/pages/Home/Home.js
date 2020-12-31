import React from 'react';
import FrontLayout from "Containers/Laoyouts/FrontLayout";
import { FormattedMessage } from "react-intl";

const Home = () => {
    return (
        <FrontLayout>
            <FormattedMessage id="testMessage"/>
        </FrontLayout>
    );
};

export default Home;
