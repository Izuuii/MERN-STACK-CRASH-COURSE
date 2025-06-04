const express = require('express');
const database = require("./connect")
const ObjectId = require('mongodb').ObjectId; // Create a new router object   
const bcrypt = require("bcrypt");


let userRoutes = express.Router()
const saltRounds = 10;

//#1 Retrieve All
//http://localhost:3000/users
userRoutes.route("/users").get(async(request, response) =>  {
    let db = database.getDb()
    let data = await db.collection("users").find({}).toArray()
    if(data.length > 0) {
        response.json(data)//send back the data
    } else {
        response.status(404).json({ error: "Data was not found :" })
    }
})

//#2 Retrieve One
//http://localhost:3000/users/:id
userRoutes.route("/users/:id").get(async(request, response) =>  {
    let db = database.getDb()
    let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})
    if(data && Object.keys(data).length > 0) {
        response.json(data)//send back the data
    } else {
        response.status(404).json({ error: "Data was not found :" })
    }
})

//#3 Create One
userRoutes.route("/users").post(async(request, response) =>  {
    let db = database.getDb()

    const takenEmail = await db.collection("users").findOne({email: request.body.email})

    if (takenEmail) {
        // Return a 400 Bad Request status for duplicate email
        return response.status(400).json({ error: "Email already exists" })
    } else {
        const hash = await bcrypt.hash(request.body.password, saltRounds)

        let mongoObject = {
            name: request.body.name,
            email:request.body.email,
            password:hash,
            joinDate:new Date(),
            posts: []
        }
        let data = await db.collection("users").insertOne(mongoObject)
        response.json(data)//send back the data
    }
})


//#4 Update One
userRoutes.route("/users/:id").put(async(request, response) =>  {
    let db = database.getDb()
    let mongoObject = {
        $set: {
        name: request.body.name,
        email:request.body.email,
        password:request.body.password,
        joinDate:request.body.joinDate,
        posts:request.body.posts
    }
    }
    let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
    response.json(data)//send back the data
})

//#5 Delete One
userRoutes.route("/users/:id").delete(async(request, response) =>  {
    let db = database.getDb()
    let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)//send back the data
})

module.exports = userRoutes
// Export the router object