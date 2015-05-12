var express = require('express');
var router = express.Router();


var LinkController = require('../controllers/LinkController');

router.get('/', LinkController.findAll);
router.post('/', LinkController.create);
router.get('/:id', LinkController.findOne);
router.put('/:id', LinkController.update);
router.delete('/:id', LinkController.delete);

module.exports = router;