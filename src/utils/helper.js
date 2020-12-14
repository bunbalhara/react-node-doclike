import Geocode from "react-geocode";
import { loadStripe } from '@stripe/stripe-js';

export const titleCase = str => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
};

export const getCurrentLocation = (locale, callback) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage(locale);
    Geocode.setRegion("fr");

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const res = response.results[0];
                let locality = res.address_components.find(item => item.types.includes("locality"));
                let administrateLevel1 = res.address_components.find(item => item.types.includes("administrative_area_level_1"));
                let city = locality ? locality.long_name : '';
                let state = administrateLevel1 ? administrateLevel1.long_name : '';
                let location = {
                    address: res.formatted_address,
                    city: city,
                    state: state,
                    location: {
                        lat: lat,
                        lng: lng
                    }
                };
                callback(location);
            },
            error => {
                console.error(error);
            }
        ).catch(err => {
            console.log(err);
        });
    },
    err => {
        console.log(err);
    }
    );
};


export const sortCategoryByDoctors = (array) => {
    return array.sort(function (a, b) {
        return (b.doctors ? b.doctors : 0) - (a.doctors ? a.doctors : 0);
    });
};

export const FormatNumberLength = (num, length) => {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
};

export const convertMonthToString = (month) => {
    switch (month) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "January";
    }
};

export const convertDayToString = (day) => {
    switch (day) {
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
        default:
            return "Monday";
    }
};


const stripePromise = loadStripe('pk_test_nP5wwepVRwP9Je5jgbs2fTi200BOHNRRFL');

export const stripeOnetimeCheckout = async (option, callback) => {
    const mode = process.env.NEXT_PUBLIC_MODE;
    const { email, priceId, clientReferenceId } = option;
    const stripe = await stripePromise;
    const successUrl = `${mode === "pro" ? "https://find.doclike.app" : "http://find.doclike.nc:3000"}/payment-success?success={CHECKOUT_SESSION_ID}&session=${clientReferenceId}`;
    const cancelUrl = `${mode === "pro" ? "https://find.doclike.app" : "http://find.doclike.nc:3000"}${window.location.pathname}`;
    console.log("Success URL", successUrl);
    console.log("Cancel URL", cancelUrl);
    stripe.redirectToCheckout({
        lineItems: [{
            price: priceId,
            quantity: 1
        }],
        customerEmail: email,
        clientReferenceId: clientReferenceId,
        mode: 'payment',
        successUrl: `${mode === "pro" ? "https" : "http"}://${window.location.host}/payment-success?success={CHECKOUT_SESSION_ID}&session=${clientReferenceId}`,
        cancelUrl: `${mode === "pro" ? "https://find.doclike.app" : "http://find.doclike.nc:3000"}${window.location.pathname}`
    }).then((res) => {
        if (callback) {
            callback(res);
        }
    }).catch(err => {
        console.log(err);
    });
};


