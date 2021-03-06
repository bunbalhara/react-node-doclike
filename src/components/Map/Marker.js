import React, { useEffect, useState } from "react";
export const Marker = (props) => {
    const { show, children, src, setDestination } = props;
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (setDestination) {
            setDestination({
                lat: props.lat,
                lng: props.lng
            });
        }
        setShowInfoWindow(!showInfoWindow);
    };

    useEffect(() => {
        setShowInfoWindow(false);
        if (setDestination) {
            setDestination(null);
        }
    }, [show]);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ position: 'relative', width: 0, height: 0 }}
            onClick={handleClick}
        >
            {
                src ?
                    <div
                        className="position-absolute"
                        style={{
                            width: 40,
                            height: 40
                        }}
                    >
                        <img
                            style={{
                                position: 'absolute',
                                bottom: 5,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                border: showInfoWindow ? 'solid 5px #299acf' : 'solid 1px #8080803f',
                                borderRadius: '50%'
                            }}
                            src={src}
                            alt={'marker'}
                        />
                    </div> :
                    <div
                        className="position-absolute"
                        style={{
                            width: 50,
                            height: 46
                        }}
                    >
                        <img
                            style={{
                                position: 'absolute',
                                bottom: 23,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                            src={require('../../assets/image/map/current.png')}
                            alt={'marker'}
                        />
                    </div>
            }
            { showInfoWindow && children && React.cloneElement(children, { closeInfoWindow: setShowInfoWindow }) }
        </div>
    );
};
