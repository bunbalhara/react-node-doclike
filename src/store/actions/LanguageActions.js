
export const LANGUAGE_CHANGE_LOCALE = 'LANGUAGE_CHANGE_LOCALE';

export function languageChangeLocale (languageLocale) {
    return {
        type: LANGUAGE_CHANGE_LOCALE,
        locale: languageLocale
    };
}
