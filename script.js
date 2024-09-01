function loading() {
    var tl = gsap.timeline()


tl.to(".yellow1",{
    top:"-100%",
    
    duration:0.3,
    ease:"expo.out"
})
tl.from(".yellow2",{
    top:"100%",
    delay:1,
    duration:1,
    ease:"expo.out"
},"anim")

tl.to(".loader h1",{
    
    color:"black"
},"anim")

tl.to(".loader",{
    opacity:0,
    display:"none"
})

}
loading();



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
 
var elems = document.querySelectorAll(".ndpage")
var page2 = document.querySelector(".page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        gsap.to('.page2',{
            backgroundImage:`url(${bgimg})`,
            duration:0.01,
            ease:'Power1.in'
        })
    
    })
})

document.querySelector(".top h1").addEventListener("click",() =>{
    scroll.scrollTo(0)
})