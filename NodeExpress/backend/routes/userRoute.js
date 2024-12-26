const express=require('express');
const router=express.Router();
const User=require('../model/userModel');
//const {}
router.post('/users', async (req, res) => 
  {
    try 
    {
      const { username,password } = req.body;

      const newUser = new User({ username, password });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      res.status(201).json({
        message: 'User created successfully',
        user: savedUser
      });
      console.log(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // For Finding All Users

  router.get('/user',async (req,res)=>{
    try
    {
      const users=await User.find();
      res.status(200).json(users);


    }
    catch(error)
    {
      res.status(500).json({message:error.message});

    }
  })
  //For finding a Single USer
  router.get('/users/:id', async (req,res)=>{
    try
    {
      const user=await User.findById(req.params.id);
      if(user){
        res.status(200).json(user);
      }
      else
      {
        res.status(400).json({message:'User Not foumd'})

      }

    }
    catch (error){
      res.status(500).json({message:error.message});
    }
  });
  //For Updating a Single User

  router.put('/users/:id', async (req,res)=>{
    try
    {
      const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
      if(updatedUser)
        {
          res.status(200).json(updatedUser);

      }
      else{
        res.status(404).json({message:'User Not Found'});
      }

    }
    catch(error){
      res.status(500).json({message:error.message});
    }
  });
  //For Deleting a single User
  router.delete('/users/:id',async(req,res)=>{
    try{
      const user=await User.findByIdAndDelete(req.params.id);
      if(user){
        res.status(200).json({message:'User Deleted SuccessFully'});
      }
      else{
        res.sendStatus(404).json({message:'User Not Found'});
      }
    }
    catch(error)
    {
      res.status(500).json({message:error.message});

    }
  })
module.exports=router;