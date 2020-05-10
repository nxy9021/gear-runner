//Image Asset loading, canvas displaying
const imgageAssets = {
    bgImageAssets:{
       stillBg: './assets/img/stillbg.jpg',
       frontBg: './assets/img/frontbg.png'
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

// background animations

const stillBackground = new StillBg(imgageAssets.bgImageAssets);
const frontBackground = new FrontBg(imgageAssets.bgImageAssets, 15, 800);

// crack display;
const crack = new Crack(imgageAssets.crackImageAssets, 60, 10, 800);

// car display; car animations;
const car = new Car(imgageAssets.carImageAssets, 10, 800);


// tick
function tick(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    stillBackground.tick();
    frontBackground.tick();
    crack.tick();
    car.tick();
    console.log(crack.getPosition());
    window.requestAnimationFrame(tick);
 };

// car control
function onKeyDown(event){
    const key = event.key.toLowerCase();
    // console.log(event.key);
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


// game start
// game end