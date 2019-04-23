var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user')
    Project = require('../models/project'),
    Skill = require('../models/skill');

// root route
router.get('/', function(req, res) {
  Project.find({}, (err, allProjects) => {
    if (err) {
      console.log(err);
    } else {
      Skill.find({}, (err, allSkills) => {
        if (err) {
          console.log(err);
        } else {
          res.render('index', { projects: allProjects, skills: allSkills });
        }
      });
    }
  });
});

module.exports = router;
