class Crack {
    x = 800;
    y = 216;

    _scrollSpeed;
    _image;
    _imageLocation;
    _currentAnimation;
    _animation;
    _canvasWidth;

    constructor(imageAssets, framerate, scrollSpeed, canvasWidth){
        this._currentAnimation = imageAssets.style1;
        this._scrollSpeed = scrollSpeed;
        this._canvasWidth = canvasWidth;
        this._imageLocation = this._currentAnimation;
        this._setupAnimation(framerate);
        this._loadImage();
    }

    getPosition(){
        return {
            xInitial: this.x,
            yInitial: this.y,
            xFinal: this.x + this._image.width,
            yFinal: this.y + this._image.height
        }
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

    _upDate(){
        this.x -= this._scrollSpeed;
        if(this.x < 0){
            this.x = this._canvasWidth; 
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
