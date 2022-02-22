var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Ruta creada para probar el funcionamiento del router
 * @author Diego Becerra <diegofer1110@gmail.com>
 */
router.get('/cool', function(req, res){
  res.send('Eres genial');
});

module.exports = router;
