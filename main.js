
const btn_up = document.querySelector(".btn-up");

btn_up.addEventListener("click", function(){
    
    window.scroll(0, 0)
});

window.addEventListener("scroll", function(){
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight)
        btn_up.style.display="block";
    else
        btn_up.style.display="none";
});


const baner = document.querySelector("img.toggle_img")
const baner_img = [
    {
    img: "img/pexels-photo-303383.jpeg"
    },
    {
    img: "img/pexels-photo-747964.jpeg"
    },
{
    img: "img/pexels-photo-2047905.jpeg"
}];

const time = 5000;

let active = 0;

const change_baner = () =>{
    active++;
    if(active === baner_img.length){
        active = 0;
    }
    baner.src = baner_img[active].img;
    
    console.log("heja");
}

setInterval(change_baner, time)





