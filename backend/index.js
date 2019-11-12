const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const cors = require ('cors')



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

// define the root  - landing page
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API RUNNING' })
  })

  // just showing one member 
  app.get('/member/:id', (req, res) =>{
    res.send(req.params.id);
  });


//extensions of the root - routes
//teste if working without connect to the database
  app.get('/array', (request, response) => {
    response.send([1,2,3,5]);
  })




  
  app.post('/createuser',  (request, response) => db.createUser(request, response)) //ok

  app.post('/createteam',  (request, response) => db.createTeam(request, response)) //ok

  app.get('/users/id/:id',  (request, response) => db.getUserById(request, response)) //ok

  app.get('/users/name/:name',  (request, response) => db.getUserByName(request, response)) //ok

  app.get('/users/location/:office_location',  (request, response) => db.getUserByOfficeLocation(request, response)) //ok

  app.get('/users/business_title/:business_title',  (request, response) => db.getUserByBusinessTitle(request, response)) //ok

  app.get('/allusers',  (request, response) => db.getAllUsers(request, response)) //ok

  app.get('/teams',  (request, response) => db.getAllTeams(request, response)) //ok



//PORT - uses a hosting PORT or 3005 - to make easier when deploying  in somewhere.
const port = process.env.PORT || 4000;
// listenning for a request
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })




//   const app = express();

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// // Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);