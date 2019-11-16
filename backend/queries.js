const Pool = require("pg").Pool;
const pool = new Pool({
  user: "flavia",
  host: "localhost",
  database: "work_buddies",
  password: "",
  port: 5432
});


//CREATE USER - OK
const createUser = (request, response) => {
  if (
    !request.body &&
    !request.body.username &&
    !request.body.password &&
    !request.body.name &&
    !request.body.office_location &&
    !request.body.slack_name &&
    !request.body.work_email &&
    !request.body.business_title &&
    !request.body.team_id
  )
    return response
      .status(400)
      .send({ error: `Hey i don't have request body!` });

  const {
    username,
    password,
    name,
    office_location,
    slack_name,
    work_email,
    business_title,
    team_id
  } = request.body;

  pool.query(
    "INSERT INTO user_table (username, password, name, office_location, slack_name, work_email, business_title, team_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      username.toLowerCase(),
      password,
      name.toLowerCase(),
      office_location.toLowerCase(),
      slack_name.toLowerCase(),
      work_email.toLowerCase(),
      business_title.toLowerCase(),
      team_id
    ],
    (error, results) => {
      if (error) {
        return response.status(500).send({ error: error.message });
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};


//CREATE TEAM - OK
const createTeam = (request, response) => {
    if (
      !request.body.team_name &&
      !request.body.slack_channel &&
      !request.body.team_email &&
      !request.body.manager_id &&
      !request.body.product_owner_id 
    )
      return response
        .status(400)
        .send({ error: `Hey i don't have request body!` });
  
    const {
        team_name,
        slack_channel,
        team_email,
        manager_id,
        product_owner_id
    } = request.body;
  
    pool.query(
      "INSERT INTO team_table (team_name, slack_channel, team_email, manager_id, product_owner_id) VALUES ($1, $2, $3, $4, $5)",
      [
        team_name.toLowerCase(),
        slack_channel.toLowerCase(),
        team_email.toLowerCase(),
        manager_id,
        product_owner_id
      ],
      (error, results) => {
        if (error) {
          return response.status(500).send({ error: error.message });
        }
        response.status(201).send(`User added with ID: ${results.insertId}`);
      }
    );
  };

  //SEARCH ALL USERS  - OK
const getAllUsers = (request, response) => {
    pool.query('SELECT * FROM user_table', (error, results) => {
        if (error) {
        throw error
    }
        response.status(200).json(results.rows)
    })
}

//SEARCH ALL TEAMS - OK
const getAllTeams = (request, response) => {
    pool.query('SELECT * FROM team_table', (error, results) => {
          if (error) {
            throw error
    }
          response.status(200).json(results.rows)
    })
}
  

  //SEARCH BY ID - OK
  const getUserById = (request, response) => {
    const id = (request.params.id)
    console.log(id)
  
    pool.query('SELECT * FROM user_table WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//SEARCH BY NAME - OK
  const getUserByName = (request, response) => {
    const name = (request.params.name)
    console.log(name)
  
    pool.query("SELECT * FROM user_table WHERE name LIKE '%' || $1 || '%'", [name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //SEARCH BY OFFICE_LOCATION -   Ok
  const getUserByOfficeLocation = (request, response) => {
    const office_location = (request.params.office_location)
    console.log("location: " + office_location)
  
    pool.query("SELECT * FROM user_table WHERE office_location LIKE '%' || $1 || '%' ", [office_location], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } 

  //SEARCH BY BUSINESS_TITLE = OK
  const getUserByBusinessTitle = (request, response) => {
    const business_title = (request.params.business_title.toLowerCase())
    console.log(business_title)
  
    pool.query("SELECT * FROM user_table WHERE business_title LIKE '%' || $1 || '%'", [business_title.toLowerCase()], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
  createUser,
  createTeam,
  getUserById,
  getUserByName,
  getAllUsers,
  getUserByOfficeLocation,
  getUserByBusinessTitle,
  getAllTeams
};

