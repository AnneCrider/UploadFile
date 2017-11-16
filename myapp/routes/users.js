var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:user([\\D]+)', function(req, res, next){
  res.render('update-user');
} );

router.put('/:user', function(req, res, next){
  console.log(req.body);
  res.send('The new name is '+ req.body.user);
} );

router.get('/:id([\\d]+)', function(req, res, next){
  res.render('delete-user');
} );

router.delete('/:id', function(req, res, next){
  console.log(req.body);
  res.send('No more user with id: ' + req.body.id);
} );


module.exports = router;
