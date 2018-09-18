var router=require('express').Router();

//router.use('/api/category', require('./category'));
router.use('/api/extraservices', require('./extra-service'));

module.exports=router;