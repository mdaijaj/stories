
const path=require('path')
const textStory= require('../models/text_schema')
const ImageVideoStory= require('../models/videoImage_schema')
var http = require('http');
var url = require('url') ;

//add story
const addTextStory= async(req,res)=>{
    try{
        const {name, title, note}=req.body;
        const time= Date.now()
        console.log(req.body)
        const addTextData= new textStory({name, title, note, time})
        await addTextData.save();
        return res.status(200).send({message: "add succesfully!", result: addTextData})
    }
    catch(err){
        console.log(err.message)
    }
}

//all story here
const availableTextStory= async(req,res)=>{
    const allStory= await textStory.find()
    console.log("allStory", allStory)
    return res.status(200).send({message: "show all data sucess", data: allStory})
}

//file upload htmlfile
const fileForm= (req,res)=>{
    console.log("__dirname", __dirname)
    return res.sendFile(path.join(__dirname, '../' + 'public/index.html'))
}

//single image and video uploding 
const uploadStory= async(req,res)=>{
    console.log("req.file", req.file)
    var hostname = req.headers.host; // hostname = 'localhost:8080'
    const types= req.file.mimetype;
    console.log("type", types)
    var imageVideo_url = 'http://'+hostname+'/'+req.file.path;   // pathname = '/MyApp'
    const {name}=req.body;
    // response += `<img src="${req.file.path}" /><br>`
    const addTextData= new ImageVideoStory({name,imageVideo_url, types})
    await addTextData.save();
    return res.send({
        message: "File uploaded sucessfully!.", 
        name: name,
        typesaa: types
    });
}



//show all story
const storyList= async(req,res)=>{
    const allStory= await ImageVideoStory.find()
    console.log("allStory", allStory)
    return res.status(200).send({message: "show all data sucess", data: allStory})
}


module.exports={
    addTextStory,
    availableTextStory,
    fileForm,
    uploadStory,
    storyList
}