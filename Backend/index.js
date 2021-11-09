const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Connect to the DataBase
var db = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'',
    database:'',
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// DONE: Get all the players
app.get("/api/get", (require, response) => {
    const sqlSelect = "SELECT * FROM players";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// TODO: Add a new player (pID) to the user (userID) team
app.put("/api/update/add_player", (require, response) => {
    // TODO
    db.query(sqlUpdate, [movieReview,movieName ], (err, result) => {
        if (err) 
        console.log(error);
    })
});

// DONE: Get all the players for a specific user with (userID)
app.get("/api/get/user/:userID", (require, response) => {
    const sqlSelect = "SELECT * FROM players WHERE teamID = (SELECT teamID FROM users WHERE userID = '" + require.params.userID + "');";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// DONE: Get the team name for a specific user with (userID)
app.get("/api/get/username/:userID", (require, response) => {
    const sqlSelect = "SELECT teamName FROM teams WHERE teamID = (SELECT teamID FROM users WHERE userID = '" + require.params.userID + "');";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// TODO: Remove a player from the team
app.put("/api/update/remove_player", (require, response) => {
    // TODO
    db.query(sqlUpdate, [movieReview,movieName ], (err, result) => {
        if (err) 
        console.log(error);
    })
});

// TODO: Generate a set of potential players for the user's team
app.get("/api/get/investigator/:userID", (require, response) => {
    const sqlSelect = "TODO;";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// TODO: Delete a player from the DataBase
app.delete("/api/delete/:pID", (require, response) => {
    const movieName = require.params.pID;

    const sqlDelete = "TODO";
    db.query(sqlDelete, movieName, (err, result) => {
        if (err) 
        console.log(error);
    })
});

// TODO: Insert/Update a player's information
app.post("/api/insert/player", (require, response) => {
    // TODO 
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(error);
    })
});


// DONE: Get the MCProvider for a specific user with (userID)
app.get("/api/get/mcprovider/:userID", (require, response) => {
    const sqlSelect = "SELECT * FROM mcproviders WHERE mcID = (SELECT mcID FROM teams WHERE teamID = (SELECT teamID FROM users WHERE userID = '" + require.params.userID + "'));";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// DONE: Get all the MCProvider
app.get("/api/get/mcprovider/", (require, response) => {
    const sqlSelect = "SELECT * FROM mcproviders;";
    db.query(sqlSelect, (err, result) => {
        response.send(result);
    });
});

// TODO: Change MCProvider for a user
app.put("/api/update/mcprovider", (require, response) => {
    // TODO
    db.query(sqlUpdate, [movieReview,movieName ], (err, result) => {
        if (err) 
        console.log(error);
    })
});


app.listen(3002, () => {
    console.log("running on port 3002");
})