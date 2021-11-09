
const path=require('path')
const textStory= require('../models/text_schema')
const ImageVideoStory= require('../models/videoImage_schema')

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
    const imageVideo_url=JSON.stringify(req.file.filename) 
    console.log(imageVideo_url)
    const {name}=req.body;
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.file.path}" /><br>`
    const addTextData= new ImageVideoStory({name, imageVideo_url})
    await addTextData.save();
    return res.send({
        message: "File uploaded sucessfully!.", 
        response:response, 
        name:name
    });
}


module.exports={
    addTextStory,
    availableTextStory,
    fileForm,
    uploadStory
}