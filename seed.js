var mongoose = require('mongoose');
var Project = require('./models/project');
var Skill = require('./models/skill');

var seedProjects = [
  {
    title: 'Project 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/preview.jpg',
    link: 'https://www.google.com'
  },
  {
    title: 'Project 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/preview.jpg',
    link: 'https://www.google.com'
  },
  {
    title: 'Project 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/preview.jpg',
    link: 'https://www.google.com'
  }
];


var seedSkills = [
  {
    title: 'Skill 1',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },
  {
    title: 'Skill 2',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },
  {
    title: 'Skill 3',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },
  {
    title: 'Skill 4',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },
  {
    title: 'Skill 5',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },
  {
    title: 'Skill 6',
    text: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor ut labore et dolore magna.',
    icon: 'bootstrap-plain.svg',
    link: 'https://www.google.com'
  },

];


function seedDB() {
  Project.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Removed Projects!');
    // add a few projects
    seedProjects.forEach((seed) => {
      Project.create(seed, (err, project) => {
        if (err) {
          console.log(err);
        } else {
          console.log('added a project');
        }
      });
    });
  });
  Skill.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Removed Skills!');
    // add a few skills
    seedSkills.forEach((seed) => {
      Skill.create(seed, (err, skill) => {
        if (err) {
          console.log(err);
        } else {
          console.log('added a skill');
        }
      });
    });
  });
}

module.exports = seedDB;
