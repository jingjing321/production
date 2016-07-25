var music_animation_i=1;
document.getElementById("music").play();
function music_animation(){
    if(music_animation_i){
        document.getElementById("music").pause();
        $(".music").removeClass("music_animation");
        music_animation_i=0
    }
    else{
        document.getElementById("music").play();
        $(".music").addClass("music_animation");
        music_animation_i=1
    }
}