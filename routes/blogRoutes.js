const express =require('express');
const blogContoller=require('../controllers/blogController')
const router=express.Router()
router.get('/',blogContoller.blog_index)
router.get('/create', blogContoller.blog_create_get)
router.post("/",blogContoller.blog_create_post)
router.get('/:id',blogContoller.blog_details)

router.delete('/:id',blogContoller.blog_delete)

module.exports=router;