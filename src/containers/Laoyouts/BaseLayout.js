import React from 'react'


export const BaseLayout = (props) => {
    const {children}  = props;

    return (
        <div>
            {children}
        </div>
    )
}
