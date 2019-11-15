# Final Project - Historico



## Diagram



##MVP

- For the mvp I would focus on the functionality for the user - so what kinds of actions can they take?

- So for that part you don't have to think about the software that you'll need or the technical part

- You can just think about it from the user's perspective - what will the experience be like for them



## Make the tables

.  Create te queries 

```
Connect to postgres - psql postgres
```

```
List all db  - list 
```

```
Connect to the db - \c work_buddies
```

```
List all tables - \dt
```



```sql
CREATE TABLE user_table ( 
id SERIAL PRIMARY KEY, 
username VARCHAR (50) UNIQUE NOT NULL, 
password VARCHAR (50) NOT NULL,
name VARCHAR (50)  NOT NULL, 
office_location VARCHAR (50) NOT NULL, 
slack_name VARCHAR (50) NOT NULL, 
work_email VARCHAR (355) UNIQUE NOT NULL, 
business_title VARCHAR (50)  NOT NULL);
```



```sql
CREATE TABLE team_table (
team_id SERIAL PRIMARY KEY, 
team_Name VARCHAR (50) UNIQUE NOT NULL, 
slack_channel VARCHAR (50) UNIQUE NOT NULL, 
team_email VARCHAR (355) UNIQUE NOT NULL,  
manager_id INTEGER REFERENCES user_table(id), 
product_owner_id INTEGER REFERENCES user_table(id));
```



CREATE USER - INSERT INTO - user_table

```sql
INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title) VALUES('naty', 321456,'Nathalia','San Francisco', 'Nathalia', 'araujo.nathalia03@gmail.com', 'Software Engineer');
  
INSERT INTO   user_table(username,password,name,office_location,slack_name,work_email,business_title) VALUES('nina', 43215678,'Nina Policastro','Brazil', 'Nina Policastro', 'ninapolicatro@gmail.com', 'Manager');

INSERT INTO user_table(id,username,password,name,office_location,slack_name,work_email,business_title) VALUES( 3,'freddy', 01010101,'Freddy Cervantes','Mexico', 'Freddy Cervantes', 'freddycervantes@gmail.com', 'Product Owner');

INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title) VALUES( 'Flavia', 01010232,'Flavia','Spain', 'Flavia Deplachet', 'flavia@gmail.com', 'Manager');



INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title) VALUES('bia', 32145678,'Beatriz Guerra','Texas', 'Bia', 'bia@gmail.com', 'Software Engineer');

INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title) VALUES( 'maria regina', 01010101,'Maria Regina','Canada', 'Maria Regina', 'mariaregina@gmail.com', 'Software Engineer');
```



SQL command to upadte collumns

```sql
UPDATE individual_animal SET id_individual = 'id'

UPDATE team_table 
SET 
team_name = 'ninja'
WHERE team_id = 6;
```



UPDATE- ??????? - idk if i should do it

DELETE USER - ??????? - idk if i should do it



#CREATE USER



you will be doing it with code

so the user will provide "Guru"

and in code, you will run the SQL query to look up the team and get the team id

and then you will run the INSERT query and use the id that you looked up

so you do all of that in code

the user never runs the SQL query directly - you will run it from your code, so you can provide the values in the code

```sql
SELECT team_id FROM team_table WHERE team_name LIKE '%Guru%'

INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title, team_id) VALUES('romulo', 240304,'Romulo Araujo','China', 'romulo', 'romulo_araujo@gmail.com', 'Software Engineer',team_id);
```





##CREATE NEW TEAM

```sql
INSERT INTO team_table(team_name, slack_channel,team_email, manager_id, product_owner_id) VALUES(' Sale Gurus', '#gurus_team', 'sales_gurus@gmail.com' , 2,3 );
  
```

##SEARCH ALL TEAMS

```sql
SELECT team.team_name, team.slack_channel, team.team_email, manager.name as manager_name, product_owner.name as product_owner_name
FROM team_table as team
LEFT JOIN user_table as manager ON team.manager_id = manager.id
LEFT JOIN user_table as product_owner ON team.product_owner_id = product_owner.id;
```



SEARCH TEAMS by team_name and return information of the team

FIRST QUERY GOING TO RETURN ALL THE INFORMATION OF THE TEAM 

SECOND QUERY GOING TO RETURN EVERYONE's NAME AND POSITION THAT WORKS ON THE TEAM

if I want the users to be able to do a partial search, then I can leave the %% in there and make sure I'm using `LIKE` instead of `=`

````sql
SELECT team.team_name, team.slack_channel, team.team_email, manager.name as manager_name, product_owner.name as product_owner_name
FROM team_table as team
LEFT JOIN user_table as manager ON team.manager_id = manager.id
LEFT JOIN user_table as product_owner ON team.product_owner_id = product_owner.id WHERE team.team_name LIKE '%Guru%';
````

##SELECT TEAM by team_name and return all the people on the team and the informations

```sql
SELECT name , business_title FROM user_table WHERE team_name LIKE '%Guru%';
```

![SEARCH_BY_TEAM_ALL_MEMBERS](/Users/naty/techtonica/techtonica-projects/FINAL_PROJECT/table_photos/SEARCH_BY_TEAM_ALL_MEMBERS.png)



##SEARCH BY   USER NAME

```sql
SELECT name, office_location, slack_name, work_email, business_title FROM user_table WHERE name LIKE '%Nina%';
```



##SEARCH BY OFFICE_LOCATION

```sql
SELECT name, office_location, slack_name, work_email, business_title FROM user_table WHERE office_location LIKE '%San%';
```



##SEARCH BY business_title

```sql
SELECT name, office_location, slack_name, work_email, business_title FROM user_table WHERE business_title LIKE '%Software Engineer%';
```





```sql
createuser

```





## EXPRESS

### NODEMON

its a extension to make the restart easier to install nodemon

```javascript
npm i -g nodemon
```

```javascript
node install
```

```javascript
to run - nodemon index.js
```



# Library

https://codesandbox.io/s/semantic-ui-example-uxbe9 example for drop

https://material-ui.com/components/menus/





# Ajustes Finais

```
       - Function  - Search by Location - Individual
       - Function  - Search by Name - Individual
       - Function  - Search by Name - Team
       - Function  - Search by Business Title - Individual
     	 - Function  - Search All Teams
   ok. - Function  - Search All individuals 
       - Link all the users to the information of each individual
       - Show Each Individual - Name, position , email , Oficce Location , Time Zone
         Maybe implement a button to connect to Gmail to send an email.
         
       - Function to show the Map
       
       - OAuth with Postgres - Login Page
       
       - Deploy


       - If i Search a lot individuals the box going to get bigger?
```

