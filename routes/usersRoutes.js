const express = require ('express');
const router = express.Router();
const User = require("../models/User");


 router.get('/', (req, res)=>{
     res.send('tesst : is it working ???? yaaaay ');
 });

// POST :  ADD A NEW USER TO THE DATABASE 
router.post('/', (req, res)=>{
    //console.log(req.body);
    res.send('post user');
    //const newUser = new (req.body};
    const newUser = new User ({...req.body});
    newUser.save().then(() => {
        res.json({ msg: "User added and saved." })
    }).catch((err) =>{ 
        console.log(`Add failed =>  ${err}`)
    });
});


//GET :  RETURN ALL USERS 
router.get("/all", (req, res)=>{
    User.find()
    .then((el) => res.send({response: el, msg: "Display all users"}))
    .catch((err) => console.log(`Display failed => ${err}`))
});


//PUT : EDIT A USER BY ID 
router.get("/edit/:id", (req, res)=>{
    User.findByIdAndUpdate({_id: req.params.id},{ $set:req.body},{new:true}) //add _id to schema
    .then((el) => res.send({response: el, msg: "User by ID and edit"}))
    .catch((err) => console.log(`Edit failed => ${err}`))
})
//DELETE : REMOVE A USER BY ID 

router.delete('/delete/:id', (req, res)=>{
    User.deleteOne({_id: req.params.id})
    .then((el) => res.send({response: el, msg: "User ID deleted succesfully"}))
    .catch((err) => console.log(`Delete failed => ${err}`))
})
module.exports = router;