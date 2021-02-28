const balls=document.querySelectorAll('.hvr-radial-out');
const w=window.innerWidth;
const h=window.innerHeight;

let bottomLength,
    rightLength,
    colors=new Array('#55E6C1','#27ae60','#9b59b6','#2c3e50','#e74c3c','#f78fb3','#f53b57','#B33771');
// var topLength = div.getBoundingClientRect().top; //div离屏幕上边距离（长度）
// var bottomLength = div.getBoundingClientRect().bottom; //div离屏幕下边距离（长度）
//
// var leftLength = div.getBoundingClientRect().left; //div离屏幕左边距离（长度）
// var rightLength = div.getBoundingClientRect().right; //div离屏幕右边距离（长度）

function randomValues() {
    // for (let i=0;i<balls.length;i++){
    //
    // }
    anime({
        targets: 'article .info',
        translateX: function() {
            return anime.random(0, w/3);
        },
        translateY: function() {
            return anime.random(0, h/3);
        },
        round:10,
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: randomValues
    });
}

function pauseBall() {
    for (let i=0;i<balls.length;i++){
        balls[i].addEventListener('mouseover',function () {
            bottomLength=balls[i].getBoundingClientRect().bottom;
            let bh=h-bottomLength;
            rightLength=balls[i].getBoundingClientRect().right;
            let rw=w-rightLength;
            this.classList.remove('info');
            this.style.background=colors[i];
            this.firstChild.style.display='block';
            this.firstChild.style.color=colors[i];
            // this.innerHTML='<a href="../life.html">11</a>';
            // this.innerHTML=rw;
        })
    }
}
function playBall() {
    for (let i=0;i<balls.length;i++){
        balls[i].addEventListener('mouseout',function () {
            this.classList.add('info');
        })
    }
}
randomValues();
pauseBall();
playBall();

