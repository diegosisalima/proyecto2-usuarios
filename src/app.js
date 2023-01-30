const express = require("express");
const app = express();
app.use(express.json());
const DB_USERS = [
    {
        id: 1,
        firstName: "Sahid",
        lastName: "Kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22,
    },
];
let baseId = 2;

app.get("/users", (req, res) => {
    res.status(200).json(DB_USERS);
});

app.post("/users", (req, res) => {
    const data = req.body;
    const newData = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age,
    };
    DB_USERS.push(newData);
    res.status(201).json(newData);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const userById = DB_USERS.find((item) => id === item.id);
    if (userById) {
        res.status(200).json(userById);
    } else {
        res.status(404).json({
            message: "invalid id",
        });
    }
});
app.listen(9000, () => {
    console.log("servidor corriendo en: http://localhost:9000");
});

module.exports = app;
