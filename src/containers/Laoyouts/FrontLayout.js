import React from 'react';
import { BaseLayout } from "Container/Laoyouts/BaseLayout";


export const FrontLayout = (props) => {
    const { children } = props;

    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    );
};
