import React, {useState, useEffect} from 'react'
import RoomIcon from "@material-ui/icons/Room";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {getCurrentLocation} from "../../utils";
import {useDispatch, useSelector} from "react-redux";
import {JOB_SET_CURRENT_LOCATION} from "../../redux/actions";

export const AutoComplete = ({OnSelect, HandleDelete}) =>{

    const dispatch = useDispatch();
    const locale = useSelector(state=>state.app.locale)
    const [address, setAddress] = useState('');

    useEffect(()=>{
        getCurrentLocation(locale.code,res=>{
            dispatch({type: JOB_SET_CURRENT_LOCATION, payload: res})
        })
    },[])

    const _handleChange = address =>{
        let available = true;
        if(available){
            setAddress(address);
        }
        return () =>{
            available = false
        }
    }

    const _handleSelect = (address) =>{
        geocodeByAddress(address)
            .then(results => results[0])
            .then(async (res) =>{
                let latLng = await getLatLng(res);
                let locality = res.address_components.find(item=>item.types.includes("locality"));
                let administrate_level_1 = res.address_components.find(item=>item.types.includes("administrative_area_level_1"));
                let city = locality?.long_name;
                let state = administrate_level_1?administrate_level_1.long_name:'';
                let location = {
                    address: res.formatted_address,
                    city: city,
                    state: state,
                    location: latLng,
                }
                setAddress(location.address)
                if(OnSelect !== undefined){
                    OnSelect(location)
                }
            }).catch(error => console.error('Error', error));
    }

    const _handleDelete = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        setAddress('')
        if(HandleDelete !== undefined){
            HandleDelete()
        }
    }

    return (
        <>
            <PlacesAutocomplete
                value={address}
                onChange={_handleChange}
                onSelect={_handleSelect}
                highlightFirstSuggestion={true}
                searchOptions={{types: ['address'], componentRestrictions: {country: ['fr']},}}
            >
                {({getInputProps, getSuggestionItemProps, suggestions}) => (
                    <div
                        className='auto-complete'
                        style={{
                            maxWidth: 500,
                        }}
                    >
                        <div className="input-box-container">
                            <RoomIcon style={{fontSize: 22, marginLeft: 3, color:'#808080'}} />
                            <input
                                {...getInputProps({
                                    placeholder: 'User location address ...',
                                })}
                                className="autocomplete-inp"
                            />
                            <CancelRoundedIcon style={{fontSize: 22, marginRight: 3, color:'#8080807f', cursor:'pointer'}} onClick={_handleDelete} />
                        </div>

                        <div className="autocomplete-dropdown-container w-100">

                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                const style = suggestion.active
                                    ? {
                                        backgroundColor: '#299acf',
                                        position:'relative',
                                        color: 'white',
                                        cursor: 'pointer',
                                        padding: 15,
                                        borderBottom: 'solid 1px #8080803f',
                                        zIndex:9999999,
                                    }
                                    : {
                                        position:'relative',
                                        backgroundColor: '#ffffff',
                                        cursor: 'pointer',
                                        padding: 15,
                                        borderBottom: 'solid 1px #8080803f',
                                        zIndex:9999999,
                                    };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                        key={index}
                                    >
                                        <RoomIcon style={{color: suggestion.active ? 'white' : '#8080807f'}}/>
                                        <span
                                            style={{paddingLeft: 4}}>{suggestion.description.length < 50 ? suggestion.description : suggestion.description.substring(0, 50)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </>
    )
}
