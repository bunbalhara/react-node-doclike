/**
 * Language Reducer
 */
import { LANGUAGE_CHANGE_LOCALE } from "../actions/LanguageActions";
import { config } from 'Config';

const initialState = {
    locale: config.defaultLocale,
    test: 'asdfasdfasdf'
};

/* eslint-disable default-case, no-param-reassign */
const languageReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LANGUAGE_CHANGE_LOCALE:
            return { ...state, locale: payload };
        default:
            return state;
    }
};

export default languageReducer;
