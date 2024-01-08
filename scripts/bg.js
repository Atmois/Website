// Code from https://github.com/tsparticles/tsparticles
const particlesScript = document.createElement('script');
particlesScript.src = "https://cdn.jsdelivr.net/npm/@tsparticles/preset-stars@3.0.2/tsparticles.preset.stars.bundle.min.js";
document.body.appendChild(particlesScript);
particlesScript.onload = function() {
   tsParticles.load({
       id: "tsparticles",
       options: {
           preset: "stars",
           particles: {
               color: "#ABC7FF"
           }
       }
   });
};
