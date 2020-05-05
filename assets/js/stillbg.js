class StillBg{
    x = 0;
    y = 0;

    _image;
    _imageLocation;

    _defaultImage;

    constructor(imageAssets){
        this._defaultImage = imageAssets.stillBg;
        this._imageLocation = this._defaultImage;
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
            this.x,
            this.y,
            );
    }

    tick() {
        this._draw();
    }
}
