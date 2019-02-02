# Class Project

## Installation
Clone this project into your machine with:
```bash
  git clone https://github.com/JahlHernandez/class_project.git
```

Then to install the project dependencies open that directory inside your terminal and run:
```bash
  npm install
```

If you haven't done it yet, create your own .env file, you can use the .testenv as a reference

If you do not have the Database created yet, or have previously deleted it, please run the following script:
```bash
  npm run db:create
```

Lastly, you can simply run the following script to start the project:
```bash
  npm start
```

If you want to fill up you database with test data, you can run the seeder files with:
```bash
  npm run sequelize db:seed:all
```

Common use commands:

To rollback all your migrations (In case the DB structure needs to be corrected)
**This will delete all entries on your database**
```bash
  npm run sequelize db:migrate:undo:all
```

To re-create the DB simply run the migrations again:
```bash
  npm run sequelize db:migrate
```