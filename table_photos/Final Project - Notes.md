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
List all db  - \l
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
lat double precision NOT NULL,
lng double precision NOT NULL,
slack_name VARCHAR (50) NOT NULL, 
work_email VARCHAR (355) UNIQUE NOT NULL, 
business_title VARCHAR (50)  NOT NULL)
;
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
INSERT INTO user_table(username,password,name,office_location, lat, lng, slack_name,work_email,business_title) VALUES('naty', 321456,'nathalia cervantes','san francisco', 37.791030, -122.394760, 'nathalia', 'araujo.nathalia03@gmail.com', 'software engineer');
  
INSERT INTO   user_table(username,password,name,office_location,lat, lng,slack_name,work_email,business_title) VALUES('nina', 43215678,'nina policastro','brazil', -14.235004, -51.925282, 'nina policastro', 'ninapolicatro@gmail.com', 'manager');

  INSERT INTO user_table(username,password,name,office_location,lat, lng,slack_name,work_email,business_title) VALUES('freddy', 01010101,'freddy cervantes','mexico', 23.634501, -102.552788, 'freddy cervantes', 'freddycervantes@gmail.com', 'product owner');

INSERT INTO user_table(username,password,name,office_location,lat, lng,slack_name,work_email,business_title) VALUES( 'flavia', 01010232,'flavia deplachet','spain',40.463669, -3.749220, 'flavia deplachet', 'flavia@gmail.com', 'manager');


INSERT INTO user_table(username,password,name,office_location,lat, lng,slack_name,work_email,business_title) VALUES('bia', 32145678,'beatriz guerra','texas', 31.968599, -99.901810, 'bia', 'bia@gmail.com', 'software engineer');

INSERT INTO user_table(username,password,name,office_location,lat, lng,slack_name,work_email,business_title) VALUES( 'maria regina', 01010101,'maria regina','canada', 56.130367, -106.346771, 'regina pereira', 'mariaregina@gmail.com', 'software engineer');
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

INSERT INTO user_table(username,password,name,office_location,slack_name,work_email,business_title, team_id) VALUES('romulo', 240304,'romulo araujo','china', 'romulo', 'romulo_araujo@gmail.com', 'software Engineer',team_id);
```





##CREATE NEW TEAM

```sql
INSERT INTO team_table(team_name, slack_channel,team_email, manager_id, product_owner_id) VALUES(' sale gurus', '#gurus_team', 'sales_gurus@gmail.com' , 4,3 );
  
INSERT INTO team_table(team_name, slack_channel,team_email, manager_id, product_owner_id) VALUES(' Ninja', '#ninjas', 'ninjas@gmail.com' , 2,3 );
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







https://frontendmasters.com/courses/testing-javascript/x



# Ajustes Finais

```
   OK.  - Function  - Search All Teams
   OK.  - Function  - Search All individuals  
   OK.  - Change the user table putting lat and long there 
   OK   - Function  - Search by Name - Individual
   OK   - Function  - Search by Location - Individual 
   OK   - Show Each Individual - Name, position , email , Oficce Location , Time Zone
   
 	 OK   - fix the capslock search .... to doesnt matter how is write need to find 
   OK   - Link all the users to the information of each individual
   me   - Function to show the Map - Time Zone 
          
          
          
    + ou -   - OAuth with Postgres - Login Page
       
       - Deploy
  
   ??  -  Maybe implement a button to connect to Gmail to send an email.
```

