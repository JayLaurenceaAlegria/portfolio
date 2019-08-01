document.addEventListener('DOMContentLoaded' , function(){
    const cards = document.querySelectorAll('.project-container .card')
    cards.forEach((card , index)=>{
        card.style.animation = `cardShow 1s ease forwards ${index/2 + 0.5}s`
    })
})
