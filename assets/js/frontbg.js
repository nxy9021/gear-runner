class FrontBg{
    x = 0;
    y = 96;
    _scrollSpeed = 2;
    _image;
    _imageLocation;
    _currentAnimation;
    _animation;
    _canvasWidth;

    _defaultImage;


    constructor(imageAssets, framerate, canvasWidth){
        this._defaultImage = imageAssets.frontBg;
        this._canvasWidth = canvasWidth;
        this._imageLocation = this._defaultImage;
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

        this._image.src = this._imageLocation;
    }

    _upDate(){
        this.x -= this._scrollSpeed;
        if(this.x % this._canvasWidth == 0){
            this.x = 0; 
        }
    }

    _draw (){
        ctx.beginPath();
        ctx.drawImage(
            this._image,
            this.x,
            this.y,
        );
    }
    
    tick() {
        this._draw();
    }
}
