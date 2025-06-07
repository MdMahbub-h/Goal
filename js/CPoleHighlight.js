function CPoleHighlight(
  bHorizontal,
  bLeft,
  iX,
  iY,
  sztext,
  oSprite,
  oParentContainer
) {
  var _bHorizontal = bHorizontal;
  var _bLeft = bLeft;
  var _iStep = 0;
  var _oHighlight;
  var _oText;
  var _oTextStroke;
  var _oContainer;
  var _oParentContainer = oParentContainer;
  var _szText = sztext;

  setTimeout(() => {
    _szText = 300;
  }, 1000);

  var _oThis = this;

  this._init = function (iX, iY, szText, oSprite) {
    _oContainer = new createjs.Container();
    _oParentContainer.addChild(_oContainer);

    _oHighlight = createBitmap(oSprite);
    _oHighlight.x = iX;
    _oHighlight.y = iY;
    _oContainer.addChild(_oHighlight);

    var oSpriteArrow = s_oSpriteLibrary.getSprite("target_arrow");
    var oArrow = createBitmap(oSpriteArrow);
    oArrow.regX = oSpriteArrow.width / 2;
    oArrow.regY = oSpriteArrow.height;
    if (_bHorizontal) {
      oArrow.x = iX + oSprite.width / 2;
      oArrow.y = iY - 10;
    } else {
      if (_bLeft) {
        oArrow.x = oArrow.x = iX - 10;
        oArrow.rotation = -90;
      } else {
        oArrow.x = iX + oSprite.width + 10;
        oArrow.rotation = 90;
      }

      oArrow.y = iY + oSprite.height / 2;
    }
    _oContainer.addChild(oArrow);

    _oTextStroke = new CCTLText(
      _oContainer,
      oArrow.x - 40,
      oArrow.y - 40,
      80,
      30,
      70,
      "center",
      TEXT_COLOR_STROKE,
      FONT_GAME,
      1,
      0,
      0,
      szText,
      true,
      true,
      false,
      false
    );

    _oTextStroke.setOutline(4);

    _oText = new CCTLText(
      _oContainer,
      oArrow.x - 40,
      oArrow.y - 40,
      80,
      30,
      70,
      "center",
      TEXT_COLOR,
      FONT_GAME,
      1,
      0,
      0,
      szText,
      true,
      true,
      false,
      false
    );
  };

  this.updateText = function (text) {
    _oText.refreshText(text);
    _oTextStroke.refreshText(text);
  };

  this.highlightAnim = function () {
    createjs.Tween.get(_oHighlight)
      .wait(40)
      .call(function () {
        _iStep++;
        if (_iStep < 20) {
          _oHighlight.visible = !_oHighlight.visible;
          _oThis.highlightAnim();
        } else {
          _iStep = 0;
          _oHighlight.visible = true;
        }
      });
  };

  this.getText = function () {
    return _oText.getString();
  };

  this.getTextX = function () {
    return _oText.getX();
  };

  this.getTextY = function () {
    return _oText.getY();
  };

  this._init(iX, iY, _szText, oSprite);
}
