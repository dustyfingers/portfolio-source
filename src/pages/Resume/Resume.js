import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { v4 as uuid } from "uuid";

import ResumeProjectItem from '../../components/ResumeProjectItem';
import ExperienceItem from '../../components/ExperienceItem';
import ContactIcon from '../../components/ContactIcon';
import Skill from '../../components/Skill';
import resumeData from '../../data/data';

import './Resume.scss';

const { contact, projects, skills, experience, education } = resumeData;

const Resume = () => {
  const [sceneState, setScene] = useState(null);
  const [cameraState, setCamera] = useState(null);
  const [rendererState, setRenderer] = useState(null);
  const [frameId, setFrameId] = useState(null);

  const rotateLou = lou => {
    lou.rotation.y += 0.01;
    lou.rotation.x += 0.01;
  }

  const moveCamera = (camera, lou) => {
    const currentTop = document.body.getBoundingClientRect().top;
    camera.position.z = currentTop * -0.01;
    rotateLou(lou);
  }

  // constantly rerender
  const rerender = () => {
    const frame_id = requestAnimationFrame(rerender);
    setFrameId(frame_id);
    rendererState.render(sceneState, cameraState);
  }

  const stop = () => cancelAnimationFrame(frameId)

  // hook into threejs on component mount
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // set state
    setScene(scene);
    setCamera(camera);
    setRenderer(renderer);
  }, []);

  useEffect(() => {
    if (sceneState && cameraState && rendererState) {
      // configfure renderer and camera
      rendererState.setPixelRatio(window.devicePixelRatio);
      rendererState.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(rendererState.domElement);
      cameraState.position.z = 5;
  
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
      sceneState.add(gridHelper);
  
      // add items to scene
      sceneState.add(lou);
      sceneState.add(pointLight, ambientLight);
  
      window.addEventListener('scroll', () => moveCamera(cameraState, lou));
      rerender();
    }
  }, [sceneState, cameraState, rendererState]);

  // get rid of three.js stuff when component unmounts
  // useEffect(() => () => {
  //   // rendererState is already null??
  //   // when is this being rebound??
  //   // cant perform a state update on an unmounted component...
  //   stop();
  // }, []);

  useEffect(() => console.log(rendererState), [rendererState])

  return (
    <>
      <main id="ResumeContainer" className="main-section pb-2">
        <div id="Resume" className="container">
          {/* name/title section */}
          <div className="text-center px-5 pb-5">
              <h1 className="display-1">Louie Williford</h1>
              <p>Jr. Web Application Developer</p>
          </div>

          {/* experience section */}
          <div>
              <p className="display-5 text-center">Experience</p>
              <div>
                  {experience.map((item, idx) => <ExperienceItem {...item} key={`experience-item-${uuid()}`}/>)}
              </div>
          </div>

          {/* projects section */}
          <div>
              <p className="display-5 text-center">Projects</p>
              <div>
                  {projects.map((project, idx) => <ResumeProjectItem {...project} key={`project-item-${uuid()}`}/>)}
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
                  {skills.map((skill, idx) => <Skill skill={skill} key={`skill-item-${uuid()}`} />)}
              </div>
          </div>

          {/* contact section */}
          <div className="d-flex flex-column justify-content-center align-items-center p-5">
              <div className="d-flex py-2">
                  {contact.map(({...props}, idx) => <ContactIcon {...props} key={`contact-item-${uuid()}`} />)}
              </div>
              <a href="https://louies-resume.s3.us-east-2.amazonaws.com/Louie-Williford.pdf" target="_blank" rel="noreferrer" type="button" className="btn btn-lg cta-btn my-2 mx-3">Download my Resume!</a>
          </div>
        </div>

      </main>
    </>
)};

export default Resume;
