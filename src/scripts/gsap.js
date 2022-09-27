import { gsap } from "gsap";
import { ScrollTrigger }from "gsap/ScrollTrigger";
import {  Elastic, Power1, ScrollToPlugin }from "gsap/all";
 
// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)

// handle click event
// let show = false

// const handleClick = () => {

// }

// document.querySelector('.hamburgermenu').addEventListener('click', () => {
//     show != show
//     console.log(show)
// })

let sections = gsap.utils.toArray(".con");
gsap.to(sections, {
  ease: "none",
  scrollTrigger: {
  snap:0.514,

  }
});

//nav 
gsap.from(".navlgcon", {
    height: 0,
    autoAlpha: 0,
    duration: 0.5,
    delay: 0.8,
    ease: Elastic.easeOut.config(1,0.3),
})

//handle navitems
// document.querySelector('.worksnav').addEventListener("click", () => {
//     gsap.to(window, {scrollTo: 300, duration: 0.5})
// })
// document.querySelector('.abtnav').addEventListener("click", () => {
//     gsap.to(window, {scrollTo:1080})
// })
// document.querySelector('.homenav').addEventListener("click", () => {
//     gsap.to(window, {scrollTo:0})
//     timeline.play(0)
// })



//banner timeline animation
const timeline = gsap.timeline()

timeline.from("#bannermoon", {
    x: 10,
    autoAlpha: 0,
    height: 0,
    delay: 0.5,
    ease: Elastic.easeOut.config(1,0.3),
}, 
)
timeline.from(".bannerh1", {
    x: -300,
    duration: 1,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3)
})
timeline.from(".bannerh2", {
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3),
})
timeline.from('.bannerh3', {
    y: -50,
    duration: 0.2,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3),
    yoyo: true,
})
timeline.from('.projectbtn', {
    autoAlpha: 0,
    width: 0,
    duration: 0.4,
    ease: Elastic.easeOut.config(1,0.3),
})
timeline.from(".hireme", {
    autoAlpha: 0,
    width: 0,
    duration: 0.5,
    ease: Elastic.easeOut.config(1,0.3),
})

 ScrollTrigger.create({
    trigger:'.bannercon',
    start:"top top+=300",
    end: "+=500px",
    toggleActions:"play reset play reverse",
    animation:timeline,
    
  })


// projects timeline animation

const timeline2 = gsap.timeline()
timeline2.from(".workmoon", {
    x: -10,
    autoAlpha: 0,
    height: 0,
    ease: Elastic.easeOut.config(1,0.3),
    delay: 0.5,
}, 
)
timeline2.from(".projectscon", {
    y: 150,
    autoAlpha: 0,
    ease: Power1.easeOut,
    duration: 1,
})
timeline2.from(".workh2", {
    x: -300,
    duration: 0.5,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3)
})
timeline2.from(".worksvg", {
    width: 0,
    duration: 1,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3)
})
timeline2.from(".workp", {
    y: -50,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3),
})


 ScrollTrigger.create({
    trigger:'.workcon',
    start: self => self.previous().end,
    end: "80%",
    toggleActions:"play reset play reset",
    animation:timeline2,
    
  })

// projects timeline animation

const timeline3 = gsap.timeline()


timeline3.from(".abth2", {
    delay: 0.5,
    x: -300,
    duration: 0.5,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3)
})
timeline3.from(".abtsvg", {
    width: 0,
    duration: 1,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3)
})
timeline3.from(".abtp", {
    y: -50,
    autoAlpha: 0,
    ease: Elastic.easeOut.config(1,0.3),
})
timeline3.from(".abtmoon", {
    x: -10,
    autoAlpha: 0,
    height: 0,
    ease: Elastic.easeOut.config(1,0.3),
})


 ScrollTrigger.create({
    trigger:'.abtcon',
    start: self => self.previous().end,
    end: "+=2080px",
    toggleActions:"play reset play reset",
    animation:timeline3,
  })




console.log("hello world")