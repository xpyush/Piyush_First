const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function skewer() {
    var dim = document.querySelector(".slide").getBoundingClientRect();
var prev = dim.left;

document.querySelector("#box").addEventListener("scroll",function(dets){
    var dim2 = document.querySelector(".slide").getBoundingClientRect();
    diff = prev-dim2.left;
    document.querySelectorAll(".slide").forEach(function(allSlide) {
        allSlide.style.transform = `skewX(${diff*0.5}deg)`
        prev = dim2.left;
    })
} )
}
function Circle() {
    document.querySelectorAll(".slide").forEach(function (slide) {
        slide.addEventListener("mousemove", function (dets) {
            var dim = slide.getBoundingClientRect();
        slide.children[1].style.clipPath = `circle(20% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })   
        slide.addEventListener("mouseleave", function (dets) {
            var dim = slide.getBoundingClientRect();
            slide.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px)`
        })   
    })
}
Circle();
skewer();