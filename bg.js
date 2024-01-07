(function (c, l, a, r, i, t, y) {
    c[a] =
        c[a] ||
        function () {
            (c[a].q = c[a].q || []).push(arguments);
        };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
 })(window, document, "clarity", "script", "8q4bxin4tm");
 
 const carbonAdsScript = document.createElement('script');
 carbonAdsScript.src = "//cdn.carbonads.com/carbon.js?serve=CEAI6KJL&placement=particlesjsorg";
 carbonAdsScript.id = "_carbonads_js";
 carbonAdsScript.async = true;
 carbonAdsScript.defer = true;
 document.body.appendChild(carbonAdsScript);
 
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
 