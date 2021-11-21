$(function(){
    $("a").click(function(event){
        if (this.hash !== ""){
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function (){
                window.location.hash = gato;

            });
        }
    });
});



var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){

    if(window.pageYOffset>100){
        nav.classList.add('bg-dark', 'shadow');
    }else{
        nav.classList.remove('bg-dark','shadow');
    }

});