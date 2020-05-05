class Car{
    x = 300;
    y = 220;

    _image;
    _currentAnimation;
    _animation;
    
    _neutralImage;
    _upImage;
    _downImage;

    _moveY = 80;

    _spriteWidth = 162;
    _spriteHeight = 49;
    _spriteFrames = 4;
    _currentFrame = 0;
    // _spriteX = this._spriteFrames;
    _spriteY = 0;


    constructor(carImageAssets, framerate){
        this._neutralImage = carImageAssets.neutral;
        // this._upImage = carImageAssets.up;
        this._downImage = carImageAssets.down;
        this._currentAnimation = this._neutralImage;

        this._setupAnimation(framerate);
        this._loadImage();
    }

    _setupAnimation(framerate){
        this._animation = new AnimationFrame(framerate, () => this._upDate());
        this._animation.start();
    }
    _loadImage(){
        this._image = new Image();
    
        this._image.onload = () => {
            this._draw();
        }

        this._image.src = this._currentAnimation;
    }

    _draw (){

        const _spriteX = this._spriteWidth * this._currentFrame;

        ctx.beginPath();
        ctx.drawImage(
            this._image, 
            _spriteX, 
            this._spriteY,
            this._spriteWidth,
            this._spriteHeight,
            this.x,
            this.y,
            this._spriteWidth,
            this._spriteHeight,
            );
    }

    _upDate(){
        this._currentFrame ++;

        // if (this._currentFrame >= this._spriteFrames - 1 ) {
        //     this._currentFrame = 0;
        // }
        // else {
        //     this._currentFrame++
        // }

        // this._currentFrame = ++this._currentFrame % this._spriteFrames;

        if (this._currentFrame % this._spriteFrames ==0 ) {
            this._currentFrame = 0;
        };
    }


    tick(){
        this._draw();
    }

    moveUp(){
        this.y -= this._moveY;
        if (this.y <= 220 ){
            this.y = 220;
        };
    }

    moveDown(){
        this.y += this._moveY;
        if (this.y >= 380 ){
            this.y = 380;
        };
    }
}