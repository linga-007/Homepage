const {contactModel} = require('../models/contactSchema')

const getContact = async (req,res)=>{
    try{
        const contact = await contactModel.find({})
        console.log(contact)
        res.status(200).json({error:false,contact:contact})
    }
    catch(error){
        console.log(error.message)
        res.status(400).json({error:true,message:error.message})
    }
}