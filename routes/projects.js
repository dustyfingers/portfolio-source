var express = require('express');
var router = express.Router();
var Project = require('../models/project');


// index project route
router.get('/', (req, res) => {
  Project.find({}, (err, allProjects) => {
    if (err) {
      req.flash('error', 'Something went wrong');
    } else {
      res.render('projects/index', { projects: allProjects });
    }
  })
});

// create project get route
router.get('/new', (req, res) => {
  res.render('projects/new');
});


// show individual project route
router.get('/:project_id', (req, res) => {
  Project.findById(req.params.project_id).exec((err, project) => {
    if (err) {
      console.log(err);
    } else {
      res.render('projects/show', { project: project });
    }
  });
});


//  edit project route
router.get('/:id/edit', (req, res) => {
  Project.findById(req.params.id, (err, foundProject) => {
    res.render('projects/edit', { project: foundProject });
  })
});


// // create project post route
// router.post('/', (req, res) => {
//   // get data from form
//   var title = req.body.title;
//   var text = req.body.text;
//   var image = req.body.image;
//   var link = req.body.link;
//   var newProject = { title: title, text: text, image: image, link: link };
//   // add to project array create a new campground and save to db
//   Project.create(newProject, (err, newlyCreated) => {
//     if(err) {
//       console.log(err);
//     } else {
//       res.redirect('/');
//     }
//   });
// });


module.exports = router;
