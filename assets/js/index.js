// car display
const imgageAssets = {
    bgImageAssets:{
       stillBg: './assets/img/stillbg.jpg'
    },
    carImageAssets: {
        neutral: './assets/img/side.png',
        down: './assets/img/down.png'
    }
};
const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const stillBackground = new StillBg(imgageAssets.bgImageAssets);
const carDown = new Car(imgageAssets.carImageAssets);


// car animations: done in carside.js


// tick
function tick(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // car.tick();
    stillBackground.tick();
    carDown.tick();

    window.requestAnimationFrame(tick);
 };
tick();

// car control

document.addEventListener('key', onKeyPress);

    // determine time interval for ticks in ms; print out time (framerate) times per second


    // let frameRate = 60;
    // let frameTimeInterval = 1000/frameRate;
    // function printTime () {
    //  console.log(Date.now());
    // };
    // setInterval(printTime, frameTimeInterval);

// image loader
    // Loads all images
    // let assetLoader = (function() {
    //     // images dictionary
    //     this.imgs        = {
    //       'bg'            : 'imgs/bg.png',
    //       'car'           : 'imgs/car.gif',
    //       'crack1'        : 'imgs/slime.png',
    //       'crack2'        : 'imgs/slime.png'
    //     };
    //     var assetsLoaded = 0;                                // how many assets have been loaded
    //     var numImgs      = Object.keys(this.imgs).length;    // total number of image assets
    //     this.totalAssest = numImgs;                          // total number of assets



// crack display
// background display


// spawing crack
// track movement
// collision detection
// score counter

// difficulty curve

// background animations

// game start
// game end