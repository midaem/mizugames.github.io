window.addEventListener("load", function() {
    let splash = document.getElementById("msg");
    var banner = document.querySelector('.banner');
    
    splash.classList.add("transition");

    banner.addEventListener('mouseenter', function (e) {
        splash.classList.add('splash-show');
    });
    banner.addEventListener('mouseleave', function () {
        splash.classList.remove('splash-show');
    })
});