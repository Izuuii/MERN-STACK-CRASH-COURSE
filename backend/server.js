const connect = require("./connect");
const express = require("express");
const cors = require("cors");
const posts = require("./postRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(posts);

// Add this route for the root URL
app.get("/", (req, res) => {
    res.send("API is running!");
});

app.listen(PORT, () => {
    connect.connecToServer()
    console.log(`Server is running on port ${PORT}`);
});