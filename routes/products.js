var express = require('express');
var router = express.Router();


var ProductController = require('../controllers/ProductController');

router.get('/', ProductController.findAll);
router.post('/', ProductController.create);
router.get('/:id', ProductController.findOne);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;