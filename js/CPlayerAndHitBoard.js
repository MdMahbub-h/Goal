function CPlayerAndHitBoard(oParentContainer) {
  var _pContainerPos;
  var _oPlayersText;
  var _oPlayersSText;
  var _oHitText;
  var _oHitSText;
  var _oParentContainer = oParentContainer;
  var _oContainer;
  var _oPlayers = 0;
  var _oHits = 0;

  this._init = function () {
    _pContainerPos = { x: 30, y: CANVAS_HEIGHT - 105 };
    _oContainer = new createjs.Container();
    _oContainer.x = _pContainerPos.x;
    _oContainer.y = _pContainerPos.y;
    _oParentContainer.addChild(_oContainer);

    _oPlayers = this.getRandomIntBetween(100, 2_000);
    _oHits = this.getRandomIntBetween(2_001, 5_000_000);

    _oPlayersText = new createjs.Text("PLAYERS", "40px " + GAME_FONT, GAME_COLOR_2);
    _oPlayersText.textAlign = "left";
    _oPlayersText.y = 0;
    _oContainer.addChild(_oPlayersText);

    _oPlayersSText = new createjs.Text(_oPlayers, "40px " + GAME_FONT, GAME_COLOR_2);
    _oPlayersSText.textAlign = "left";
    _oPlayersSText.y = 0;
    _oPlayersSText.x = 400;
    _oContainer.addChild(_oPlayersSText);

    _oHitText = new createjs.Text("HITS", "40px " + GAME_FONT, GAME_COLOR_1);
    _oHitText.y = 50;
    _oHitText.textAlign = "left";
    _oContainer.addChild(_oHitText);

    _oHitSText = new createjs.Text(_oHits, "40px " + GAME_FONT, GAME_COLOR_1);
    _oHitSText.textAlign = "left";
    _oHitSText.y = 50;
    _oHitSText.x = 400;
    _oContainer.addChild(_oHitSText);

    setInterval(() => {
      _oPlayers = this.getRandomIntBetween(100, 500_000);
      do {
        _oHits = this.getRandomIntBetween(2_000, 5_000_000);
      } while (_oHits < _oPlayers);
      this.refreshTextPlayers(_oPlayers);
      this.refresTextHits(_oHits);
    }, 1000);
  };

  this.getRandomIntBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.getStartPosScore = function () {
    return _pContainerPos;
  };

  this.setPosScore = function (iX, iY) {
    _oContainer.x = iX;
    _oContainer.y = iY;
  };

  this.refreshTextPlayers = function (iScore) {
    _oPlayersSText.text = _oPlayers;
  };

  this.refresTextHits = function () {
    _oHitSText.text = _oHits;
  };

  this._init();

  return this;
}
