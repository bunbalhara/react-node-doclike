

import enTranslationMessages from './en';
import { config } from 'Config';

const DEFAULT_LOCALE = config.defaultLocale;

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE ?
        formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
    const flattenFormattedMessages = (formattedMessages, key) => {
        const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE ?
            defaultFormattedMessages[key] : messages[key];
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    };
    return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages)
};
