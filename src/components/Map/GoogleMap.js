import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useDispatch} from "react-redux";
import {APP_SET_MAP, APP_SET_MAPS} from "../../redux/actions";

export const GoogleMap = (props) => {
    const {zoom} = props;
    const {children, OnClick} = props;
    const dispatch = useDispatch();

    const handleApiLoaded = (map, maps) => {
        dispatch({type:APP_SET_MAP, payload: map})
        dispatch({type:APP_SET_MAPS, payload: maps})
    };

    return (
       <>
           <GoogleMapReact
               bootstrapURLKeys={{ key: "AIzaSyC44EVqETvbIjK4r2jy6QxLGaP7r6plKN8"}}
               defaultCenter={{
                   lat: 46.2276,
                   lng: 2.2237
               }}
               defaultZoom={zoom?zoom:13}
               center={props.center}
               style={{width: '100%', height:'100%'}}
               onClick={OnClick}
               options={{
                   styles: [
                       {
                           "featureType": "administrative",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#444444"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.country",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "on"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.country",
                           "elementType": "geometry.stroke",
                           "stylers": [
                               {
                                   "weight": "0.40"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.country",
                           "elementType": "labels.text",
                           "stylers": [
                               {
                                   "visibility": "on"
                               },
                               {
                                   "saturation": "-40"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.country",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#333366"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.country",
                           "elementType": "labels.text.stroke",
                           "stylers": [
                               {
                                   "hue": "#ff0000"
                               },
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.province",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.locality",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "on"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.neighborhood",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.land_parcel",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "landscape",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "color": "#ffffff"
                               }
                           ]
                       },
                       {
                           "featureType": "landscape.man_made",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "landscape.natural",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "on"
                               }
                           ]
                       },
                       {
                           "featureType": "poi",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "road",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "saturation": -100
                               },
                               {
                                   "lightness": 45
                               },
                               {
                                   "weight": "1.25"
                               },
                               {
                                   "visibility": "on"
                               }
                           ]
                       },
                       {
                           "featureType": "road.highway",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "simplified"
                               }
                           ]
                       },
                       {
                           "featureType": "road.arterial",
                           "elementType": "labels.icon",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "transit",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "featureType": "water",
                           "elementType": "all",
                           "stylers": [
                               {
                                   "visibility": "on"
                               },
                               {
                                   "color": "#dddcdc"
                               }
                           ]
                       }
                   ]
               }}
               yesIWantToUseGoogleMapApiInternals
               onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
           >
               { children }
           </GoogleMapReact>
       </>
    );
}

