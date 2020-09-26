let router = require('express').Router()
const authorController = require('../controllers/authorController');


router.route('/author')
    .get(authorController.get)
    .post(authorController.post);



module.exports= router;