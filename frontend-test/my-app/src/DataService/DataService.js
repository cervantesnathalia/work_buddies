import axios from "axios";

export default class API {
    static getAllUsers(setApiData){

          // Make a request for all users
          axios.get('/allusers')
          .then(setApiData)
          .catch((error) => {
              // handle error
              console.log(error);
          })
    }
    static getAllTeams(setApiData){

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
    console.log(`Searching by location ${office_location} ...`);
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
    axios.get(`/users/name/${name}`)
        .then(setApiData)
        .catch((error) => {
            // handle error
            console.log("Inside error");
            console.log(error);
        })
}
}

// that's the calls that I'm going to have for the MVP

