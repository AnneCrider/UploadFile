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

router.post('/uploaddufichier', upload.single('monfichier'), function(req, res, next){
  console.log(req.file);
  if (req.file.size<(3*1024*1024) && req.file.mimetype == 'image/png'){
    //traitement du formulaire
    console.log('c\'est ok');
    //déplacement fichier du tmp à public/images
    fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
     if(err){res.send('pbm durant le déplacement');
    } else {
      res.send('Fichier uploadé avec succès');
    }
  });
  }

});
module.exports = router;
