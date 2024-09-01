const todomodel = require('../models/todom')

module.exports.gettodo = async (req,res)=>{
    const todo =await todomodel.find()
    res.send(todo)
}

module.exports.save =async (req,res)=>{
    const { text }= req.body
    todomodel.create({ text}).then((data)=> {console.log("added");
        console.log(data);
        res.send(data)
    })
}
module.exports.edit =async (req,res)=>{
    const { _id,text}=req.body
    todomodel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("udated"))
    .catch((err)=> console.log(err))}

module.exports.deletetodo=async (req,res)=>{
    const { _id}=req.body
    todomodel.findByIdAndDelete(_id)
    .then(()=>res.send("DELETE"))
    .catch((err)=> console.log(err))}