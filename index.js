const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

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




  
  app.post('/createuser',  (request, response) => db.createUser(request, response))

  app.post('/createteam',  (request, response) => db.createTeam(request, response))

  app.get('/users/id/:id',  (request, response) => db.getUserById(request, response))

  app.get('/users/name/:name',  (request, response) => db.getUserByName(request, response))

  app.get('/users/location/:office_location',  (request, response) => db.getUserByOfficeLocation(request, response))

  app.get('/users/business_title/:business_title',  (request, response) => db.getUserByBusinessTitle(request, response))

  app.get('/allusers',  (request, response) => db.getAllUsers(request, response))

  app.get('/teams',  (request, response) => db.getAllTeams(request, response))



//PORT - uses a hosting PORT or 3005 - to make easier when deploying  in somewhere.
const port = process.env.PORT || 3007;
// listenning for a request
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })


