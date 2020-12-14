/**
 * Language Provider
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { useSelector } from "react-redux";

export const LanguageProvider = ({ messages, children }) => {
    const locale = useSelector(state => state.lang.locale);
    return (
        <IntlProvider
            key={locale}
            locale={locale}
            messages={messages[locale]}
        >
            {React.Children.only(children)}
        </IntlProvider>
    );
};

LanguageProvider.propTypes = {
    messages: PropTypes.object,
    children: PropTypes.element.isRequired
};
