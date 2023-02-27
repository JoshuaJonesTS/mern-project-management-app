const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');
const port = process.env.PORT || 5000;
const path = require('path');

const app = express();

app.use(cors()); // relax security by allowing server to indicate other origins

// Connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'production'
}));

__dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, console.log(`Server running on port ${port}`));