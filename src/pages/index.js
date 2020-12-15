/**
 *  Pages Async
 */
import React from 'react';
import Loading from 'Components/Loading';
import loadable from 'Utils/loadable';

export const HomePage = loadable(() =>
    import ('./Home'), {
    fallback: <Loading />
});
