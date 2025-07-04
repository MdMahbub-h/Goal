function CScoreText(iScore, x, y, oParentContainer) {
  var _oScoreHit;
  var _oParentContainer = oParentContainer;

  this._init = function (iScore, x, y) {
    var szText;
    var szColor = "#fff";
    szText = "+" + iScore;

    _oScoreHit = new createjs.Text(szText, "60px " + GAME_FONT, szColor);
    _oScoreHit.textAlign = "center";
    _oScoreHit.x = x;
    _oScoreHit.y = y;
    _oScoreHit.alpha = 0;
    _oScoreHit.shadow = new createjs.Shadow("#000", 1, 1, 1);
    _oParentContainer.addChild(_oScoreHit);

    var oParent = this;
    createjs.Tween.get(_oScoreHit)
      .to({ alpha: 1 }, 200, createjs.Ease.quadIn)
      .call(function () {
        oParent.moveUp();
      });
  };

  this.moveUp = function () {
    var iNewY = _oScoreHit.y - 400;
    var oParent = this;
    createjs.Tween.get(_oScoreHit)
      .to({ y: iNewY }, 1500, createjs.Ease.sineIn)
      .call(function () {
        oParent.unload();
      });
    createjs.Tween.get(_oScoreHit).wait(800).to({ alpha: 0 }, 500);
  };

  this.unload = function () {
    _oParentContainer.removeChild(_oScoreHit);
  };

  this._init(iScore, x, y);
}
