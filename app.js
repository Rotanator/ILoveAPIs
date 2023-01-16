const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.port || 3000

const favoriteMovies = { allMovies: [
    {name: "The Shawshank Redemption"},
    {name: "The Godfather"},
    {name: "The Dark Knight"},
    {name: "The Lord of the Rings: The Return of the King"},
    {name: "Pulp Fiction"},
    {name: "Shindler's List"},
    {name: "Fight Club"}
]}


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/remove", (req,res) => {
    favoriteMovies.allMovies.pop()
    console.log(favoriteMovies)
})

app.get("/add", (req,res) => {
    favoriteMovies.allMovies.push({name: "Forrest Gump"})

    addFavoriteMovies()
    
    res.send("added new data")
    console.log(favoriteMovies)
})

function addFavoriteMovies() {
    return favoriteMovies.allMovies
}

app.listen(3000, () => {
    console.log("listening to " + PORT)
    console.log(favoriteMovies)
})