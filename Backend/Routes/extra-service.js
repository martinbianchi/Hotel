var mongoose = require('mongoose');
var router=require('express').Router();
var ExtraServices = mongoose.model('ExtraServices');


//Get all
router.get('/', (req, res, next) => {
    ExtraServices.find({})
    .then(extraservice => {
        if(!extraservice) {return res.sendStatus(401);}
        return res.json(extraservice)
    })
    .catch(next);
});

router.post('/new', (req, res, err) => {
    let name = req.body.name;
    let description = req.body.description;
    var newExtraService = new ExtraServices({
        name: name,
        description: description
    });
    
    newExtraService.save((err, doc) => {
        if(err){
            res.send('Error al intentar crear el servicio extra.');
         }
         else{
             res.json({ message: 'Servicio extra agregado', data: doc });
         }
    });
});



module.exports=router;