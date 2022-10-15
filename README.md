# NodeJS-Basic-Setup

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-test">About The Code</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE CODE -->
## About The Code

I want to create a basic setup that can support myself when working with nodejs using database(MySQL or PostgreSQL).

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/tools in the project.

* NodeJS
* ExpressJS 
* PostgreSQL or MySQL
* Sequelize
* Nodemon

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is how you can set up the code that works for you.

### Prerequisites

If you use PostgreSQL, you have to set it up before, if you haven't, you can follow my project at the link (https://github.com/Weslife2002/NodeJS-practice-.git) to set up PostgreSQL using Docker.
If you use MySQL, you also have to set it up before, currently, I didn't had any tutorial on that yet, but I might do so in the future.

### Installation

_Below is an example of how you can install and set it up._

1. Clone the repo
   ```sh
   git clone https://github.com/Weslife2002/NodeJS-Basic-Setup.git
   ```
2. Clone the .env.example file, change its name to .env and redefine the config.
_For example, I will configurate the .env file like this for PostgreSQL database:_ 

   ```sh
    PORT = 8080
    ENV = DEVELOPMENT

    PGUSER = postgres
    PGPASSWORD = localhost
    PGDATABASE = yourpassword
    PGPORT = nodedemo
    PORT = 5432
   ```

3. Install all the dependency.
   ```sh
   npm install
   ```

4. So there is a basic model which is user created before, you can make a clone, make some adjustment, add some attribute and run the following command to migrate the model to some table in the database.
   ```sh
    npx sequelize-cli db:migrate
   ```
5. Also there is a basic seeder file which will push some user data to the database, you can make a clone, make some adjustment and run the following command to push some data to the database.
   ```sh
    npx sequelize-cli db:seed:all
   ```

6. Run the project
   ```sh
    npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>