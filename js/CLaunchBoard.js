function CLaunchBoard(oParentContainer) {
  var _pContainerPos;
  var _oLaunchText;
  var _oLaunch;
  var _oParentContainer = oParentContainer;
  var _oContainer;
  var _oBounds;

  this._init = function () {
    _pContainerPos = { x: CANVAS_WIDTH - 30, y: CANVAS_HEIGHT - 60 };
    _oContainer = new createjs.Container();
    _oContainer.x = _pContainerPos.x;
    _oContainer.y = _pContainerPos.y;
    _oParentContainer.addChild(_oContainer);

    _oLaunchText = new createjs.Text("0" + "/" + NUM_OF_PENALTY, "50px " + SECONDARY_FONT, TEXT_COLOR);
    _oLaunchText.textAlign = "right";
    _oContainer.addChild(_oLaunchText);

    _oContainer.y = _pContainerPos.y;
    _oParentContainer.addChild(_oContainer);

    var oSprite = s_oSpriteLibrary.getSprite("boot_ball");
    _oLaunch = createBitmap(oSprite);
    // _oLaunch.regX = oSprite.width * 0.5;
    // _oLaunch.regY = 10;
    _oLaunch.scale = 1.5;
    _oLaunch.x = -(oSprite.width + 20);
    _oLaunch.y = -(oSprite.height + 50);

    _oContainer.addChild(_oLaunch);

    _oBounds = _oContainer.getBounds();
  };

  this.getStartPos = function () {
    return _pContainerPos;
  };

  this.setPos = function (iX, iY) {
    _oContainer.x = iX;
    _oContainer.y = iY;
  };

  this.refreshTextLaunch = function (iLaunch, iNumLaunch) {
    _oLaunchText.text = iLaunch + "/" + iNumLaunch;
  };
  this._init();

  return this;
}
