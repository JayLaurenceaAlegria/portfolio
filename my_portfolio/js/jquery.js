
$(document).ready(function(){
    // scrollspy
    $('.button-collapse').sideNav({
        edge: 'right'
    });
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('.construction').click(function(e){
        Materialize.toast('This feature is under construction',3000,'rounded');
        e.preventDefault();
      });
});
