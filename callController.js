const {callSchema} = require('../models/callModel');

const getCalls = async(req,res)=>{
  try{
    const calls = await callModel.find({});
    console.log(calls)
    return res.status(200).json({error:false,calls:calls})
  }catch(err){
    console.log(err.message);
    return res.status(400).json({error:true,message:err.message})
  }
}
