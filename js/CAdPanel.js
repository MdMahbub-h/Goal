function CAdPanel(x, y, width, height, sprite, url, oParentContainer) {
  var _x = x;
  var _y = y;
  var _url = url;
  var _width = width;
  var _height = height;
  var _oSprite = sprite;
  var _oContainer;
  var _oFade;
  var _oAdImage;
  var _oParentContainer = oParentContainer;

  this._init = function () {
    _oContainer = new createjs.Container();
    _oContainer.x = _x;
    _oContainer.y = _y;
    _oContainer.cursor = "pointer";
    _oParentContainer.addChild(_oContainer);

    // _oFade = new createjs.Shape();
    // _oFade.graphics
    //   .setStrokeStyle(5)
    //   .beginStroke(GAME_COLOR_2)
    //   .drawRect(-(_width / 2), 0, _width, _height);
    // _oContainer.addChild(_oFade);

    var scale = 0.8;

    _oAdImage = createBitmap(_oSprite);
    _oAdImage.x = -((_oSprite.width / 2) * scale);
    _oAdImage.height = _height;
    _oAdImage.scale = scale;
    _oContainer.addChild(_oAdImage);

    _oContainer.addEventListener("click", function () {
      window.open(_url, "_blank");
    });
  };

  this.unload = function () {
    _oParentContainer.removeChild(_oContainer);
  };

  this._init();

  return this;
}
