var express = require('express');
var router = express.Router();
var Project = require('../models/project');


// create project post route
router.post('/', (req, res) => {
  // get data from form
  var title = req.body.title;
  var text = req.body.text;
  var image = req.body.image;
  var link = req.body.link
  var newProject = { title: title, text: text, image: image, link: link };
  // add to campgrounds array create a new campground and save to db
  Project.create(newProject, (err, newlyCreated) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// new project get route

// show individual project route

module.exports = router;
