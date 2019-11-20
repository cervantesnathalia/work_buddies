import axios from "axios";
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBAVa1tMJT6RuCDAiyYZGCVTFTE7VZXuaM");

export default class API {
    static getAllUsers(setApiData) {

        // Make a request for all users
        axios.get('/allusers')
            .then(setApiData)
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    static getAllTeams(setApiData) {

        // Make a request for all teams
        axios.get('/teams')
            .then(setApiData)
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    /* Search user by location */
    static getUserByLocation(office_location, setApiData) {
        console.log(`Searching by location ${office_location.toLowerCase()} ...`);
        axios.get(`/users/location/${office_location}`)
            .then(setApiData)
            .catch((error) => {
                // handle error
                console.log("Inside error");
                console.log(error);
            })
    }

    /* Search user by name */
    static getUserByName(name, setApiData) {
        console.log(`Searching by name ${name} ...`);
        axios.get(`/users/name/${name.toLowerCase()}`)
            .then(setApiData)
            .catch((error) => {
                // handle error
                console.log("Inside error");
                console.log(error);
            })
    }

      /* Search team by name */
      static getTeamByName(team_name, setApiData) {
        console.log(`Searching by name ${team_name} ...`);
        axios.get(`/teams/name/${team_name.toLowerCase()}`)
            .then(setApiData)
            .catch((error) => {
                // handle error
                console.log("Inside error");
                console.log(error);
            })
    }

    static getGeoCoordinates(user, func) {
        Geocode.fromAddress(user.office_location).then(
            response => {
                const {lat, lng } = response.results[0].geometry.location;
                return {id: user.id, lat: lat, lng: lng, name: user.name}
            },
            error => {
                console.error(error);
            }
        );

    }

    static getUsersTimeDifference(lat, lng, handleTimeDiffernece) {
        axios.get(`https://api.timezonedb.com/v2.1/get-time-zone?key=Z5R5TNS6X9F9&format=json&by=position&lat=${lat}&lng=${lng}`)
            .then(handleTimeDiffernece);
    }


}

// that's the calls that I'm going to have for the MVP

