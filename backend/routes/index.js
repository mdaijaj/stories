const express=require('express')
const textStory= require('../controller/index')
const router=express()
const multer  = require('multer');
const { text } = require('express');

// middleware
router.use(express.static(__dirname + '/public'));
router.use('/uploads', express.static('uploads'));
const upload = multer({ dest: 'uploads/' })

//routes
router.post('/api/addTextStory', textStory.addTextStory)
router.get('/api/availableTextStory', textStory.availableTextStory)
router.get('/', textStory.fileForm)
router.post('/api/uploadStory', upload.single("imageVideo_url"), textStory.uploadStory)
router.get('/api/storyList', textStory.storyList)


module.exports = router;