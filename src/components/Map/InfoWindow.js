import React from "react";
import CloseIcon from '@material-ui/icons/Close';
export const InfoWindow = (props) => {
    const { children } = props;
    return (
        <div className="position-absolute" style={{ bottom: 23 }}>
            <div
                style={{
                    minWidth: 200,
                    minHeight: 50,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    padding: 5,
                    boxShadow: '0 0 4px 2px #808080',
                    position: 'relative'
                }}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        right: 5,
                        top: 5
                    }}
                    onClick={() => {props.closeInfoWindow(false);}}
                >
                    <CloseIcon style={{ fontSize: 14 }}/>
                </div>
                {children}
            </div>
            <div className="triangle-with-shadow"> </div>
        </div>
    );
};
