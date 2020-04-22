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
    _spriteX = this._spriteFrames;


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
        ctx.beginPath();
        ctx.drawImage(
            this._image, 
            this._spriteX, 
            0,
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