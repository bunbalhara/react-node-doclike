import React from "react";

export const WaveMarker = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ position: 'relative', width: 0, height: 0 }}
        >
            <span className="wav-marker"/>
            <span className="wav-marker" style={{ animationDelay: '1.5s' }}/>
            <span className="wav-marker" style={{ animationDelay: '3s' }}/>
            <span className="wav-marker" style={{ animationDelay: '4.5s' }}/>
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
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}
                    src={require('../../assets/image/map/current.png')}
                    alt={'marker'}
                />
            </div>
        </div>
    );
};
