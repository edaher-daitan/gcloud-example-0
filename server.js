const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/view/index.html"));
});

app.get("/healthcheck", (req, res) => {
    res.status(200).json({
        status: "It's alive!"
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server application running on port ${PORT}!`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server application had been gracefully stopped...');
    })
});