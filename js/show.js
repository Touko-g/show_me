const showMe=anime({
    targets:'.me img',
    rotate:180,
    keyframes:[
        {translateY:-385,duration: 0},
        {translateY: -280,duration: 800}
    ],
    autoplay:false,
    duration:0
})
const hideMe=anime({
    targets:'.me img',
    rotate:180,
    keyframes:[
        {translateY:-280,duration: 0},
        {translateY: -385,duration: 800}
    ],
    autoplay:false,
    duration:0
})
showMe.pause();
hideMe.pause();

let nav=document.querySelector('nav');
let img=document.querySelector('img');

const mes=document.querySelector('.showMes');
let str='I\'m Molly, an old pimp';
//我是MOLLY,一个老色批

for (let i=1;i<str.length+1;i++){
    setTimeout(function () {
        mes.innerHTML=str.substr(0,i)
    },(i-1)*300);
}


nav.addEventListener('mouseover',function () {
    img.style.display='block';
    showMe.play();
})
nav.addEventListener('mouseout',function () {
    // img.style.display='block';
    hideMe.play();
})
