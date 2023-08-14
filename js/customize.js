
function isMobile() {
  return window.screen.width <= 768; // Adjust the threshold as per your needs
}
console.log("============isMobile:", isMobile());

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

let sections = gsap.utils.toArray(".slider-item");
let sliderEle = document.querySelector(".slider-item");
let guideboxs = document.querySelector(".guide-box");
let earthBackground = document.querySelector(".earth-background");

let fadeInUps = gsap.utils.toArray(".fade-in-up");


/*
// Just now modify
// (--------refer to----------)
let animationExecuted = false;
function loadAnimation(){
  if(!animationExecuted){
    gsap.from('.title-fade-in', {
      opacity: 0,
      y: 100,
      duration: 1,
      // ease: "power2.out",
    }).then(function () {
      gsap.timeline().to('.subtitle-fade-in', {
        opacity: 1,
        y: 0, // Move the element down by 10 units from its initial position
        duration: 1,
        // ease: "power2.out",
      })
    }).then(function() {
      gsap.timeline().to('.earth-section', {
        y: -100,
        opacity: 1,
        duration: 1,
        delay:1,
      }).to('.title-image', {
        opacity: 1,
        duration: 1,
      })
    }).then(function(){
      gsap.to('.chip-introduction', {
        delay:3,
        opacity: 1,
        y: 0, // Move the element down by 10 units from its initial position
        duration: 1,
        // ease: "power2.out",
      })
    })
    animationExecuted = true;
  }
}

loadAnimation();
// 
*/
// ----------------------------**********Mobile**********--------------------------
if (isMobile()) {
  tl.to('.title-fade-in', {
    x: 0,
    opacity: 1,
    duration: 0.5,
  })
  gsap.timeline().to('.subtitle-fade-in', {
    x: 0,
    opacity: 1,
    duration: 0.5,
  })
  
  gsap.timeline().to('.earth-section', {
    // y: 0,
    opacity: 1,
    duration: 1
  }).to('.title-image', {
    opacity: 1,
    duration: 1
  })
  
  ScrollTrigger.matchMedia({
    "all": function () {
      //Mouse Scroll
      const scrollTrigger = {
        trigger: ".chip-horizontal-slider",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: () => {
          const guideLineHeight = (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2;
          document.querySelector(".earth-slider-pos-container.top").style.height = guideLineHeight + "px";
          document.querySelector(".earth-slider-pos-container.down").style.height = guideLineHeight + "px";
          return "0";
        },
        end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth * (sections.length - 1)
      }
  
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        // ease: "none",
        scrollTrigger
      });
  
      tl.to(".guide-box", {
        y: () => (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2 - 15,
        scrollTrigger
      })
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.whatdo-section',
          scrub: 1,
          end: "+=" + document.querySelector(".whatdo-section").offsetWidth,
          pin: false
        }
      }).to('.whatdo-section', { opacity: 1 })
  
      timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
      timeline3.to('.application-section', { opacity: 1 });
  
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.search-exploration', { opacity: 0 }, { opacity: 1 })
        .fromTo('.launches', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.earth-orbit-title', { opacity: 0 }, { opacity: 1 })
        .fromTo('.earth-orbit-description1', { opacity: 0 }, { opacity: 1 })
        .fromTo('.earth-orbit-image', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.xiphos-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.xiphos-left-section', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.xiphos-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.xiphos-right-section', {  opacity: 0 }, { opacity: 1 })
        .fromTo('.xiphos-down-section', { opacity: 0 }, { opacity: 1 });
      gsap.timeline({
        scrollTrigger: {
          trigger: '.first-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".first-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.first-section', { opacity: 0 }, { opacity: 1 });
  
      var imgtl = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-section',
          scrub: 1,
          start: "top 150",
          end: "+=" + document.querySelector(".second-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.second-sectiontext', { opacity: 0 }, { opacity: 1 });
      imgeffect(imgtl);
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.third-section',
          scrub: 1,
          start: "top 150",
          end: "+=" + document.querySelector(".third-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.third-left', {  opacity: 0 }, { opacity: 1 })
        .fromTo('.third-right', { opacity: 0 }, { opacity: 1 })
        .fromTo('.third-text', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.four-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".four-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.four-section', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.five-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".five-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.five-left', {  opacity: 0 }, { opacity: 1 })
        .fromTo('.five-right', { opacity: 0 }, { opacity: 1 })
    }
  });
}

// ----------------------------**********Pc**********--------------------------
else{
  tl.to('.title-fade-in', {
    x: 0,
    opacity: 1,
    duration: 0.5,
  })
  gsap.timeline().to('.subtitle-fade-in', {
    x: 0,
    opacity: 1,
    duration: 0.5,
  })
  
  gsap.timeline().to('.earth-section', {
    // y: 0,
    opacity: 1,
    duration: 1
  }).to('.title-image', {
    opacity: 1,
    duration: 1
  })
  
  ScrollTrigger.matchMedia({
    "(maxn-width: 768px)": function () {
      //Mouse Scroll
      tl.to(sections, {
        xPercent: -100 * 3.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".chip-horizontal-slider",
          pin: true,
          scrub: 1,
          snap: 0,
          end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth
        }
      });
    },
    "all": function () {
      //Mouse Scroll
      const scrollTrigger = {
        trigger: ".chip-horizontal-slider",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: () => {
          const guideLineHeight = (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2;
          document.querySelector(".earth-slider-pos-container.top").style.height = guideLineHeight + "px";
          document.querySelector(".earth-slider-pos-container.down").style.height = guideLineHeight + "px";
          return "0";
        },
        end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth * (sections.length - 1)
      }
  
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        // ease: "none",
        scrollTrigger
      });
  
      tl.to(".guide-box", {
        y: () => (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2 - 15,
        scrollTrigger
      })
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.whatdo-section',
          scrub: 1,
          end: "+=" + document.querySelector(".whatdo-section").offsetWidth,
          pin: false
        }
      }).to('.whatdo-section', { opacity: 1 })
  
      timeline3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
      timeline3.to('.application-section', { opacity: 1 });
  
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.search-exploration', { x: 200, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.launches', { x: 300, opacity: 0 }, { x: 0, opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.application-section',
          scrub: 1,
          end: "+=" + document.querySelector(".application-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.earth-orbit-title', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.earth-orbit-description2', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.earth-orbit-image', { x: -300, opacity: 0 }, { x: 0, opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.xiphos-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.xiphos-left-section', { x: -300, opacity: 0 }, { x: 0, opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.xiphos-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.xiphos-right-section', { x: 600, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.xiphos-down-section', { opacity: 0 }, { opacity: 1 });
      gsap.timeline({
        scrollTrigger: {
          trigger: '.first-section',
          scrub: 1,
          start: "top 200",
          end: "+=" + document.querySelector(".first-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.first-section', { opacity: 0 }, { opacity: 1 });
  
      var imgtl = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".second-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.second-sectiontext', { opacity: 0 }, { opacity: 1 });
      imgeffect(imgtl);
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.third-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".third-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.third-left', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.third-right', { x: 300, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.third-text', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.four-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".four-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.four-section', { opacity: 0 }, { opacity: 1 });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: '.five-section',
          scrub: 1,
          start: "top 100",
          end: "+=" + document.querySelector(".five-section").offsetWidth,
          pin: true
        }
      })
        .fromTo('.five-left', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo('.five-right', { x: 300, opacity: 0 }, { x: 0, opacity: 1 })
    }
  });

  star();
}



function imgeffect(imgtl) {
  // gsap.set(".container", { perspective: 800 });
  const images = gsap.utils.toArray(".image");
  images.forEach((image, index) => {
    const row = Math.floor(index / 2); // Determine the row
    imgtl.fromTo(
      image,
      { opacity: 0, rotation: 0, x: -100, y: -100 },
      {
        duration: 1.5,
        opacity: 1,
        rotation: (row % 2 === 0) ? -5 : 10, // Alternate between clockwise and counterclockwise rotations per row
        x: ((index % 2) * 250) + (row % 2 === 0 ? 100 : 120), // Arrange in two columns with slight offsets
        y: row * 200, // Arrange in rows
        ease: "power2.out", // Optional easing function for animation
      },
      index * 0.5 // Stagger each animation by 0.5 seconds
    );
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const animButtons = document.querySelectorAll('.btn-anim');
  animButtons.forEach((button, index) => {
    // const dot = button.querySelector('.dot');
    // const buttonRect = button.getBoundingClientRect();
    button.addEventListener('mousemove', (event) => {
      const buttonContainer = event.target;
      const buttonRect = buttonContainer.getBoundingClientRect();
      const dot = buttonContainer.querySelector('.dot');
      const mouseX = event.clientX - buttonRect.left;
      const dotPosition = Math.min(Math.max(mouseX, 15), buttonRect.width - 15);
      dot.style.left = dotPosition + 'px';
    });
    // button.addEventListener('mouseleave', (event) => {
    //   const dot = event.target.querySelector('.dot');
    //   dot.style.left = '20%';
    // })
  })
})


function star() {
  setInterval(() => {
    let t1 = gsap.timeline();

    t1.to(".star1", {
      duration: 1,
      x: -500,
      y: 0
    });
    t1.to(".star1", {
      duration: 1,
      x: -500,
      y: 350
    });
    t1.to(".star1", {
      duration: 1,
      x: 650,
      y: 350
    });
    t1.to(".star1", {
      duration: 1,
      x: 650,
      y: 650
    });
    t1.to(".star1", {
      duration: 1,
      x: 170,
      y: 650
    });
    t1.to(".star1", {
      duration: 0.1,
      opacity: 0,

    });
    t1.to(".star1", {
      duration: 0.1,
      x: 0,
      y: 0
    });
    t1.to(".star1", {
      duration: 1,
      opacity: 1,
      x: 0,
      y: 0
    });

    let t2 = gsap.timeline();

    t2.to(".top-line", {
      duration: 1,
      width: 520,
      marginLeft: "0px"
    });

    t2.to(".top-left", {
      duration: 1,
      height: 350,
      marginLeft: "0px"
    });


    t2.to(".top-bottom", {
      duration: 1,
      width: 1150,
      marginRight: 0,
      marginLeft: "45px",
      marginTop: 131
    });


    t2.to(".top-right", {
      duration: 1,
      height: 300,
    });


    t2.to(".top-line1", {
      duration: 1,
      width: 480,
      marginLeft: 670
    });
    //init
    t2.to(".top-line", {
      duration: 0.01,
      width: 0,
      marginLeft: 520
    })

    t2.to(".top-left", {
      duration: 0.01,
      height: 0,
      marginLeft: "0px"
    });
    t2.to(".top-bottom", {
      duration: 0.01,
      width: 0,
      marginRight: 1150,
      marginLeft: "45px",
      marginTop: 131
    });
    t2.to(".top-right", {
      duration: 0.01,
      height: 0,
    });
    t2.to(".top-line1", {
      duration: 0.01,
      width: 0,
      marginLeft: 1150
    });
  }, 6000)
}

star();