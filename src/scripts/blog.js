import { gsap } from "gsap";
import { ScrollTrigger }from "gsap/ScrollTrigger";
import {  Elastic, Power2, ScrollToPlugin }from "gsap/all";
 
// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)

// let sections = gsap.utils.toArray(".blogcon");
// gsap.to(sections, {
//   ease: Power2.easeInOut,
//   duration: 0.1,
//   scrollTrigger: {
//   snap:0.05,

//   }
// });

//blog banner timeline
const timeline = gsap.timeline()
timeline.from(".bannerh1", {
    x: -10,
    autoAlpha: 0,
    duration: 0.5,
    ease: Elastic.easeOut.config(1,0.3),
    delay: 0.2,
})
.from(".blogline", {
  width: 0,
  duration: 0.8,
  ease: Power2.easeInOut,
})
.from(".bannertxt", {
  autoAlpha: 0,
  height: 0,
  overflow: "hidden",
  duration: 2,
  ease: Power2.easeInOut,
  stagger: 0.1
})
.from(".bannerimg", {
  autoAlpha: 0,
  y: -100,
  duration: 0.5,
  ease: Elastic.easeOut.config(1,0.3),
})
.from(".blogcontactcon", {
  autoAlpha: 0,
  width: 0,
  duration: 0.5,
  ease: Power2.easeOut,
})
.from([ ".blogemailcon", ".blogsocialscon",], {
  autoAlpha: 0,
  duration: 0.2,
  delay: 0.4,
  ease: Power2.easeOut,
  stagger: 0.5
})

 ScrollTrigger.create({
    trigger:'.bannercon',
    start:"top top+=300",
    end: "+=700px",
    toggleActions:"play reset play reverse",
    animation:timeline,
    
  })


//top articles timeline
const timeline2 = gsap.timeline()
timeline2.from(".toparticles", {
  autoAlpha: 0,
  x: 1500,
  duration: 0.5,
  ease: Elastic.easeOut.config(1,0.3),
})
.from(".topcard", {
  autoAlpha: 0,
  delay: 0.3,
  ease: Power2.easeIn
})
.from(".topcardbody", {
  height: 0,
  autoAlpha: 0,
  stagger: 0.1,
  duration: 0.5
})
.from(".mostread", {
  height: 0,
  autoAlpha: 0,
  stagger: 0.5,
  duration: 0.5
})

 ScrollTrigger.create({
    trigger:'.toparticlescon',
    start:"top top+=100",
    end: "+=700px",
    toggleActions:"play reset play reverse",
    animation:timeline2,
    
  })

  //articles animations
    gsap.from(".articlesh2", {
    autoAlpha: 0,
    scale: 0,
    duration: 0.5,
    ease: Elastic.easeOut.config(1,0.3),
    scrollTrigger: {
      trigger:'.articlesh2',
      start:"top top+=200",
      end: "+=700px",
      toggleActions:"play reverse play reverse",
    }
  })

  gsap.from(".card", {
    autoAlpha: 0,
    y: -50,
    stagger: 0.5,
    duration: 0.5,
    ease: Elastic.easeOut.config(1,0.3),
    scrollTrigger: {
      trigger:'.card',
      start:"top top+=200",
      end: "+=700px",
      toggleActions:"play reverse play reverse",
    }
  })