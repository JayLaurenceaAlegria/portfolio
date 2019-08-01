// typing effect
const Typewriter = function(txtElement , words , wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}
// type Method 
Typewriter.prototype.type = function(){
    // current index of word
    const current = this.wordIndex % this.words.length;
    // get fulltext of current
    const fulltxt = this.words[current];


    // check if deleting
    if(this.isDeleting){
        // remove car
        this.txt = fulltxt.substring(0 , this.txt.length - 1);
    } else {
        // add char
        this.txt = fulltxt.substring(0 , this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span style="border-right: solid 3px;">${this.txt}</span>`;

    // type speed
    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    // if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait;
        // set delete to true
        this.isDeleting = true ;

    } else if (this.isDeleting && this.txt ===''){
        this.isDeleting = false ;

        // change word
        this.wordIndex++;
        // pause before start     
        typeSpeed = 500
    }
    setTimeout(() => this.type(), typeSpeed);
}
// init on DOM load 
document.addEventListener('DOMContentLoaded', init);
// init app
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // init typewriter
    new Typewriter(txtElement , words , wait);
} 

// scroll effect paper plane 
// const flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: innerWidth / 4 , y: 0} , 
//         {x: innerWidth/2 , y: -(innerHeight)} ,
//     ]
// };

// const tween = new TimelineLite();
// tween.add(
//     TweenLite.to('.plane', 1,{
//         bezier: flightPath,
//         ease: Power1.easeInOut
//     })
// ); 
// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//     triggerElement: "header", 
//     duration: 3000,
//     triggerHook: 0
// })
// .setTween(tween)
// .setPin('header')
// .addTo(controller);
// hr extend 
document.addEventListener('DOMContentLoaded' , () => {
    document.querySelector('hr').classList.add('hr-extends')
    document.querySelector('.qoute').classList.add('qoute-appear')
})
// section about-me scroll effects
function scrollEffect(){
    let aboutMe = document.querySelector('.about-me');
    let myImageBorder = document.querySelector('.my-image-border');
    let seeMoreButton = document.querySelector('.see-more-btn');
    let introPosition = aboutMe.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1;
    if(introPosition < screenPosition){
        aboutMe.classList.add('about-me-appear');
        myImageBorder.classList.add('my-image-border-appear');
        seeMoreButton.classList.add('see-more-btn-appear');
    }else {
        aboutMe.classList.remove('about-me-appear');
        seeMoreButton.classList.remove('see-more-btn-appear');
        myImageBorder.classList.remove('my-image-border-appear');
    }
}
function scrollEffect2(){
    let service = document.querySelector('.section-services');
    let introPosition2 = service.getBoundingClientRect().top;
    let services = document.querySelector('#services');
    let screenPosition2 = window.innerHeight / 2;
    if(introPosition2 < screenPosition2){
        services.classList.add('services-appear');
        } else{
            services.classList.remove('services-appear');
        }
}

window.addEventListener('scroll' , scrollEffect);
window.addEventListener('scroll' , scrollEffect2);

// section seeprojs scroll effect
function scrollEffect3(){
    let trigger = document.querySelector('.line1');
    let introPosition3 = trigger.getBoundingClientRect().top;
    let line1 = document.querySelector('.line1');
    let line2 = document.querySelector('.line2');
    let buttonProjects = document.querySelector('.button-projects');
    let screenPosition3 = window.innerHeight/ 1.5;
    if(introPosition3 < screenPosition3){
        line1.classList.add('line1-appear');
        line2.classList.add('line2-appear');
        buttonProjects.classList.add('button-projects-appear');
    } else {
        line1.classList.remove('line1-appear');
        line2.classList.remove('line2-appear');
    }
}
window.addEventListener('scroll' , scrollEffect3);

let lastScrollTop = 0;
document.addEventListener('scroll', function(){
    const nav = document.querySelector('nav')
    let st = window.pageYOffset
    if(st>lastScrollTop){
        nav.classList.add('nav-disappear');
        nav.classList.remove('nav-appear');
    }else if(st < 20){
        nav.classList.remove('nav-disappear' , 'nav-appear')
    }
    else{
        nav.classList.add('nav-appear')
    }
    console.log(st)
    lastScrollTop = st;
});

// about page JS

