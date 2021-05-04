const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
// local host is 3001 // 
const PORT = process.env.PORT || 3001;
//app // 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database,
// then turn on the server
//app listen 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
