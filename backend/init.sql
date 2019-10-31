/* CREATE USER_TABLE */
CREATE TABLE user_table ( 
id SERIAL PRIMARY KEY, 
username VARCHAR (50) UNIQUE NOT NULL, 
password VARCHAR (50) NOT NULL,
name VARCHAR (50)  NOT NULL, 
office_location VARCHAR (50) NOT NULL, 
slack_name VARCHAR (50) NOT NULL, 
work_email VARCHAR (355) UNIQUE NOT NULL, 
business_title VARCHAR (50)  NOT NULL
);


/* CREATE TEAM_TABLE */
CREATE TABLE team_table (
team_id SERIAL PRIMARY KEY, 
team_Name VARCHAR (50)  NOT NULL, 
slack_channel VARCHAR (50)  NOT NULL, 
team_email VARCHAR (355)  NOT NULL,  
manager_id INTEGER REFERENCES user_table(id), 
product_owner_id INTEGER REFERENCES user_table(id));





 



 


  


