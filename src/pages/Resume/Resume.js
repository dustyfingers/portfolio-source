import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

import ResumeProjectItem from '../../components/ResumeProjectItem';
import ExperienceItem from '../../components/ExperienceItem';
import ContactIcon from '../../components/ContactIcon';
import Skill from '../../components/Skill';
import resumeData from '../../data/data';

import './Resume.scss';

const { contact, projects, skills, experience, education } = resumeData;

const Resume = () => {

  // hook into threejs on component mount
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // configfure renderer and camera
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 5;

    // build geometry and material for lou cube
    const louTexture = new THREE.TextureLoader().load('images/headshot.jpg');
    const lou = new THREE.Mesh(
      new THREE.BoxGeometry(3,3,3),
      new THREE.MeshBasicMaterial({ map: louTexture })
    );

    // build and configure point light
    const pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.set(20, 20, 20);

    // build ambient light
    const ambientLight = new THREE.AmbientLight(0xFFFFFF);

    // grid helpers show where the grid is in the scene
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);

    // add items to scene
    scene.add(lou);
    scene.add(pointLight, ambientLight);

    const rotateLou = () => {
      lou.rotation.y += 0.01;
      lou.rotation.x += 0.01;
    }

    const moveCamera = () => {
      console.log('moving camera!!')
      const currentTop = document.body.getBoundingClientRect().top;
    
      rotateLou();
    
      camera.position.z = currentTop * -0.01;
    }

    // constantly rerender
    const rerender = () => {
      requestAnimationFrame(rerender);
      renderer.render(scene, camera);
    }

    window.addEventListener('scroll', moveCamera);
    rerender()
  }, [])

  return (
    <>
      <canvas id="bg"></canvas>

      <div className="content-container">
        <main id="ResumeSection" className="main-section pb-2">
          {/* name/title section */}
          <div className="text-center px-5 pb-5">
              <h1 className="display-1">Louie Williford</h1>
              <p>Jr. Web Application Developer</p>
          </div>

          {/* experience section */}
          <div>
              <p className="display-5 text-center">Experience</p>
              <div>
                  {experience.map((item, idx) => <ExperienceItem {...item} key={`experience-item-${idx}`}/>)}
              </div>
          </div>

          {/* projects section */}
          <div>
              <p className="display-5 text-center">Projects</p>
              <div>
                  {projects.map((project, idx) => <ResumeProjectItem {...project} key={`project-item-${idx}`}/>)}
              </div>
          </div>

          {/* education section */}
          <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="display-5 text-center">Education</p>
              <div>
                  <p className="fs-4 text-center">{education.school} - {education.program}</p>
                  <p className="px-2 text-center">{education.from} - {education.to}</p>
              </div>
          </div>

          {/* skills section */}
          <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="display-5 text-center">Top Skills</p>
              <div className="d-flex flex-wrap justify-content-evenly align-items-center skills w-75">
                  {skills.map((skill, idx) => <Skill skill={skill} key={`skill-item-${idx}`} />)}
              </div>
          </div>

          {/* contact section */}
          <div className="d-flex flex-column justify-content-center align-items-center p-5">
              <div className="d-flex py-2">
                  {contact.map(({...props}, idx) => <ContactIcon {...props} key={`contact-item-${idx}`} />)}
              </div>
              <a href="https://louies-resume.s3.us-east-2.amazonaws.com/Louie-Williford.pdf" target="_blank" rel="noreferrer" type="button" className="btn btn-lg cta-btn my-2 mx-3">Download my Resume!</a>
          </div>
        </main>
      </div>

    </>
)};

export default Resume;
