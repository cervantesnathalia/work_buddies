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

/* INSERT INTO USER_TABLE */
INSERT INTO user_table(
username, 
password , 
name, 
office_location,
slack_name,
work_email,
business_title
) 
VALUES('naty', 321456,'Nathalia', 'San Francisco', 'Nathalia', 'araujo.nathalia03@gmail.com', 'Software Engineer');

/* CREATE TEAM_TABLE */
CREATE TABLE team_table (
team_id SERIAL PRIMARY KEY, 
team_Name VARCHAR (50) UNIQUE NOT NULL, 
slack_channel VARCHAR (50) UNIQUE NOT NULL, 
team_email VARCHAR (355) UNIQUE NOT NULL,  
manager_id INTEGER REFERENCES user_table(id), 
product_owner_id INTEGER REFERENCES user_table(id));

/* INSERT INTO TEAM_TABLE */
INSERT INTO team_table(team_name, slack_channel,team_email, manager_id, product_owner_id) 
VALUES(' Sale Gurus', '#gurus_team', 'sales_gurus@gmail.com' , 2,3 );



 



 


  


