export const center = {lat: 13.149396, lng: 10.000353};
export const geoCords = {};

const keys = Object.values(geoCords)
export const markersData = keys.map((value, index) =>({
    id:index,
    lat: value.lat,
    lng: value.lng
}));