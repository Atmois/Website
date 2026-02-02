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
                    color: {
                        value: ["#f4dbd6", "#f0c6c6", "#f5bde6",
                            "#c6a0f6", "#ed8796", "#ee99a0",
                            "#f5a97f", "#eed49f", "#a6da95",
                            "#8bd5ca", "#91d7e3", "#7dc4e4",
                            "#8aadf4"]
                    }
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
