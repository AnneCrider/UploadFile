var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/'});
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Upload de fichier' });
});

//route du formulaire upload
router.get('/uploaddufichier', function(req,res,next) {
  console.log('ok')
  res.render('form');
});

router.post('/uploaddufichier', upload.array('monfichier', 4), function(req, res, next){
  
  req.files.forEach(function(image){
    console.log(image);
  if (image.size<(3*1024*1024) && image.mimetype == 'image/png'){
    //traitement du formulaire
    console.log('c\'est ok');
    //déplacement fichier du tmp à public/images
    fs.rename(image.path, 'public/images/' + image.originalname);
    } else {
      res.send('erreur dans le téléchargement du fichier');
  }
});
res.send('fichier téléchargé avec succès');
  });
  
  

router.get('/maroute', function(req, res) {
  res.render('sup-form');
})
router.delete('/maroute', function(req, res) {
    // suppression de la ressource
});
module.exports = router;