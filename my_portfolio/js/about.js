document.addEventListener('DOMContentLoaded', ()=> {
    let aboutMe = document.querySelector('.about-me');
    let myImageBorder = document.querySelector('.my-image-border');
    aboutMe.classList.add('about-me-appear');
    myImageBorder.classList.add('my-image-border-appear');
})
// skills scroll

function scrollEffect(){
    let skill = document.querySelector('.skill-text');
    let skills = document.querySelector('.skill-container');
    let introPosition = skill.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 3;
    if(introPosition < screenPosition){
        console.log('test')
        skills.classList.add('skill-container-appear');
    }
}
document.addEventListener('scroll', scrollEffect);