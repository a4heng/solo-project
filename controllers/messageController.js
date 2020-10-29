const express = require('express');
const Message = require('../models/messageModel');
const ObjectID = require('mongoose').Types.ObjectId
//create an express router
const router = express.Router();

router.get('/', async (req,res)=>{
  try{
   const messages = await Message.find();
   return res.status(200).json(messages);
  }catch(err){
    return res.status(418).json({message : JSON.stringify(err)});
  }
});

router.post('/', (req,res)=>{
  const {username, message} = req.body;
  const post = new Message({ username, message });
  post.save()
  .then(data => {
    return res.status(200).json(data)
  })
  .catch(err => {
    return res.status(418).json({message : JSON.stringify(err)});
  })
});

router.put('/:id', (req, res)=>{
  if(!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("No message found with the given id: " + req.params.id);

  //grab username and message from the body
  const {username, message} = req.body;
  // find and update the message
  Message.findByIdAndUpdate({_id: req.params.id}, 
    {
      $set : {
        id : req.params.id,
        username,
        message
      }
    },
    {new: true})
  .then(data => {
    return res.status(200).json(data);
  })
  .catch(err => {
    return res.status(400).json({message: "Error while updating..."+ err })
  })
});

router.delete('/:id', (req,res)=>{
  if(!ObjectID.isValid(req.params.id)) 
    return res.status(400).send("No message found with the given id: " + req.params.id);

  Message.findByIdAndDelete({_id: req.params.id})
  .then(data => {
    return res.status(200).json(data);
  })
  .catch(err => {
    return res.status(400).json({message: "Error while deleting..." })
  });
});

module.exports = router;