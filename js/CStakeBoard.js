function CStakeBoard(oParentContainer) {
  var _pContainerPos;
  var _iStartSubY;
  var _oStakeText;
  var _oPointText;
  var _oAddScoreText;
  var _oRollingScore;
  var _oParentContainer = oParentContainer;
  var _oContainer;
  var _oContainerAdd;

  this._init = function () {
    _pContainerPos = { x: 30, y: CANVAS_HEIGHT - 170 };

    _oContainer = new createjs.Container();
    _oContainer.x = _pContainerPos.x;
    _oContainer.y = _pContainerPos.y;
    _oParentContainer.addChild(_oContainer);

    _oStakeText = new createjs.Text("STAKE", "40px " + GAME_FONT, GAME_COLOR_2);
    _oStakeText.textAlign = "left";
    _oContainer.addChild(_oStakeText);

    _oPointText = new createjs.Text(0, "40px " + GAME_FONT, GAME_COLOR_2);
    _oPointText.textAlign = "left";
    _oPointText.x = 400;
    _oContainer.addChild(_oPointText);

    _oContainerAdd = new createjs.Container();
    _oContainerAdd.x = 50;

    _oAddScoreText = new createjs.Text("+5555 " + TEXT_MULTIPLIER + 1, "36px " + GAME_FONT, TEXT_COLOR);
    _oAddScoreText.textAlign = "left";

    _oContainerAdd.addChild(_oAddScoreText);

    _oContainerAdd.y = _iStartSubY = -_oAddScoreText.getBounds().height;
    _oContainerAdd.visible = false;

    _oContainer.addChild(_oContainerAdd);
    _oRollingScore = new CRollingScore();

    _oContainer.regY = _oContainer.getBounds().height;
  };

  this.getStartPosScore = function () {
    return _pContainerPos;
  };

  this.setPosScore = function (iX, iY) {
    _oContainer.x = iX;
    _oContainer.y = iY;
  };

  this.refreshTextStake = function (iScore) {
    _oRollingScore.rolling(_oPointText, null, iScore);
  };

  this.effectAddScore = function (iScore, fMultiplier) {
    _oContainerAdd.visible = true;
    _oAddScoreText.text = "+" + iScore + " " + TEXT_MULTIPLIER + fMultiplier;
    createjs.Tween.get(_oContainerAdd)
      .to({ y: _iStartSubY - 50, alpha: 0 }, MS_EFFECT_ADD, createjs.Ease.cubicOut)
      .call(function () {
        _oContainerAdd.visible = false;
        _oContainerAdd.alpha = 1;
        _oContainerAdd.y = _iStartSubY;
      });
  };

  this._init();

  return this;
}
