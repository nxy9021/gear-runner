const imgageAssets = {
    car: {
        neutral: './assets/img/side.png'
    }
};
const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const car = new Car(imgageAssets.car.neutral);



// tick
function tick(){
    car.tick();

    window.requestAnimationFrame(tick);
 };
tick();

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


// car display
// crack display
// background display

// car control
// spawing crack
// track movement
// collision detection
// score counter

// difficulty curve

// car animations
// background animations

// game start
// game end