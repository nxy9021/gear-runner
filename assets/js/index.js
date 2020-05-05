// background display; car display; crack display;
const imgageAssets = {
    bgImageAssets:{
       stillBg: './assets/img/stillbg.jpg'
    },
    carImageAssets: {
        neutral: './assets/img/side.png',
        down: './assets/img/down.png'
    },
    crackImageAssets:{
        style1:'./assets/img/crack1.png',
        style2:'./assets/img/crack2.png',
        style3:'./assets/img/crack3.png'
    },
};
const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const stillBackground = new StillBg(imgageAssets.bgImageAssets);
const car = new Car(imgageAssets.carImageAssets, 10);


// car animations: done in car.js


// tick
function tick(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    stillBackground.tick();
    car.tick();
    window.requestAnimationFrame(tick);
 };

// car control
function onKeyDown(event){
    const key = event.key.toLowerCase();
    console.log(event.key);
    if (key === 's' || key === 'arrowdown'){
        car.moveDown();

    } else if (key === 'w' || key === 'arrowup') {
        car.moveUp();
    }
};
document.addEventListener('keydown', onKeyDown);

tick();

// spawing crack
// track movement
// collision detection
// score counter

// difficulty curve

// background animations

// game start
// game end