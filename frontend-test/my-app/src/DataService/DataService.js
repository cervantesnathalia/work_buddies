import axios from "axios";

export default class API {
    static getAllUsers(setApiData){

          // Make a request for a user with a given ID
          axios.get('/allusers')
          .then(setApiData)
          .catch((error) => {
              // handle error
              console.log(error);
          })
    }
}