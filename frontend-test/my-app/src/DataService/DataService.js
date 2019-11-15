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
    static getUserByName (setApiData){

    // Make a request for a user with a given name
          axios.get('/users/name/:name')
          .then(setApiData)
          .catch((error) => {
          // handle error
          console.log(error);
        })
    }
    static getUserByLocation (setApiData){

    // Make a request for a user with a given name
          axios.get('/users/name/:location')
          .then(setApiData)
          .catch((error) => {
          // handle error
          console.log(error);
        })
    }
}

// that's the calls that I'm going to have for the MVP

