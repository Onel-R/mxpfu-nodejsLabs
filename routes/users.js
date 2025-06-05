const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(JSON.stringify({users}, null, 4))//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email;
  res.send(users.filter(user => email === user.email))//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
    users.push({firstName, lastName, email, DOB} = req.query);
    
    // Copy the code here
    res.send(users)//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  let email = req.params.email;
  let {firstName, lastName, DOB} = req.query
  let filtered_users = users.filter(user => user.email === email)
  let user = filtered_users[0]

  if(firstName) {
    user.firstName = firstName;
  }
  if(lastName) {
    user.lastName = lastName;
  }
  if(DOB) {
    user.DOB = DOB;
  }
  
  users = users.filter(user => user.email != email);
  users.push(user);

  res.send(users)//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    let index = users.findIndex(user => req.params.email === user.email);

  // Copy the code here
  users.splice(index, 1)

  res.send(users)//This line is to be replaced with actual return value
});

module.exports=router;
