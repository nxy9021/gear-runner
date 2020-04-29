class Car{
    x = 300;
    y = 280;

    _image;
    _imageLocation;

    _neutralImage;
    _leftImage;
    _rightImage;

    _spriteWidth = 162;
    _spriteHeight = 49;
    _spriteFrames = 4;
    _currentFrame = 0;
    // _spriteX = this._spriteFrames;
    _spriteY = 0;


    constructor(neutralImage, rightImage, leftImage){
        this._neutralImage = neutralImage;
        this._rightImage = rightImage;
        this._leftImage = leftImage;
        this._imageLocation = this._neutralImage;
        this._loadImage();
    }

    _loadImage(){
        this._image = new Image();

        this._image.onload = () => {
            this._draw();
        }

        this._image.src = this._imageLocation;
    }

    _draw (){
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

    tick(){
        this._draw();
    }
}