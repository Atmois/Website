// Code from https://github.com/tsparticles/tsparticles

function backgroundLayer() {
    const particlesScript = document.createElement('script');
    particlesScript.src = "https://cdn.jsdelivr.net/npm/@tsparticles/preset-stars@3.0.2/tsparticles.preset.stars.bundle.min.js";
    document.body.appendChild(particlesScript);
    particlesScript.onload = function () {
        tsParticles.load({
            id: "backgroundLayer",
            options: {
                preset: "stars",
                particles: {
                    color: "#ABC7FF"
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                }
            }
        });
        document.getElementById('loadingBackground').style.display = 'none'
    };
}
backgroundLayer()
document.addEventListener('astro:before-swap', () => {
    backgroundLayer()
});