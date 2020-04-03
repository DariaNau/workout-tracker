const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.get("/stats", function(req, res){
    // fs.readFile(path.join(__dirname, '../../public/stats.html'), 'utf8', function(err, html){
    //     if(err) throw err;

    //     res.send(html)
    // })

    res.sendFile(path.join(__dirname, '../../public/stats.html'))
});

router.get("/exercise", function (req, res){
    res.sendFile(path.join(__dirname, '../../public/exercise.html'))
});

module.exports = router;