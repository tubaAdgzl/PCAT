const Photo = require("../models/Photo")

exports.getAboutPage = (req,res) =>{
    res.render("about")
}

exports.getAddPage = (req,res) =>{
    res.render("create")
}

exports.getEditPage = async(req,res) =>{
    const photo = await Photo.findById({_id:req.params.id}) 
    res.status(200).render("edit",{
        photo
    })
}