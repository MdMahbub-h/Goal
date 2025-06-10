function CStakePanel(oParentContainer) {
  var _oButPlay;
  var _oFade;
  var _oBlue;
  var _oPlaceStake;
  var _oContainer;
  var _iStake = 10;
  var _oParentContainer = oParentContainer;
  var _oThis = this;
  var _stakes = [];
  var _stakeTexts = [];
  var _oStakeText;
  var _oStakeText2;
  var _oStakeTextStroke;

  this._init = function () {
    _oContainer = new createjs.Container();
    _oParentContainer.addChild(_oContainer);

    _oFade = new createjs.Shape();
    _oFade.graphics.beginFill("rgba()").drawRoundRect(380, 420, 600, 200, 10);
    _oFade.alpha = 0.7;
    _oFade.on("click", function () {});
    _oContainer.addChild(_oFade);

    var oTextStroke = new CCTLText(
      _oContainer,
      CANVAS_WIDTH / 2 - 220,
      CANVAS_HEIGHT_HALF - 260,
      440,
      200,
      70,
      "center",
      TEXT_COLOR_STROKE,
      FONT_GAME,
      1,
      0,
      0,
      "PLACE A STAKE",
      true,
      true,
      true,
      false
    );

    oTextStroke.setOutline(4);

    var oText = new CCTLText(
      _oContainer,
      CANVAS_WIDTH / 2 - 220,
      CANVAS_HEIGHT_HALF - 260,
      440,
      200,
      70,
      "center",
      TEXT_COLOR,
      FONT_GAME,
      1,
      0,
      0,
      "PLACE A STAKE",
      true,
      true,
      true,
      false
    );

    _oFade = new createjs.Shape();
    _oFade.graphics
      .beginFill("rgba(255,255,255)")
      .drawRoundRect(400, CANVAS_HEIGHT / 2 + 160, 680, 200, 30);
    _oFade.alpha = 0.9;
    _oFade.on("click", function () {});

    _oBlue = new createjs.Shape();
    _oBlue.graphics
      .beginFill("#199bff")
      .drawRoundRect(630, CANVAS_HEIGHT / 2 + 170, 200, 50, 25);
    _oBlue.alpha = 0.9;
    _oBlue.on("click", function () {});
    let _oIncreaseBox = new createjs.Shape();
    _oIncreaseBox.graphics
      .beginFill("#199bff")
      .drawRoundRect(420, CANVAS_HEIGHT / 2 + 210, 200, 50, 25);
    _oIncreaseBox.alpha = 0.9;
    _oIncreaseBox.on("click", function () {});

    let _oIncrease = new createjs.Shape();
    _oIncrease.graphics
      .beginFill("#ffffff")
      .drawRoundRect(575, CANVAS_HEIGHT / 2 + 215, 40, 40, 20);
    _oIncrease.alpha = 0.9;
    _oIncrease.cursor = "pointer";
    _oIncrease.on("click", function () {
      if (_iStake < 10000) {
        _iStake += 1;
        _oThis._refreshText(_iStake);
      }
    });

    let _oDecrease = new createjs.Shape();
    _oDecrease.graphics
      .beginFill("#ffffff")
      .drawRoundRect(425, CANVAS_HEIGHT / 2 + 215, 40, 40, 20);
    _oDecrease.alpha = 0.9;
    _oDecrease.cursor = "pointer";
    _oDecrease.on("click", function () {
      if (_iStake > 0) {
        _iStake -= 1;
        _oThis._refreshText(_iStake);
      }
    });

    _oPlaceStake = new createjs.Shape();
    _oPlaceStake.graphics
      .beginFill("#199bff")
      .drawRoundRect(850, CANVAS_HEIGHT / 2 + 220, 200, 120, 25);
    _oPlaceStake.alpha = 0.9;
    _oPlaceStake.cursor = "pointer";
    _oPlaceStake.on("click", function () {
      _oThis._onContinue(_iStake);
    });

    _oContainer.addChild(_oFade);
    _oContainer.addChild(_oBlue);
    _oContainer.addChild(_oIncreaseBox);
    _oContainer.addChild(_oIncrease);
    _oContainer.addChild(_oDecrease);
    _oContainer.addChild(_oPlaceStake);

    let _oIncreaseText = new CCTLText(
      _oContainer,
      555,
      CANVAS_HEIGHT / 2 + 195,
      80,
      80,
      60,
      "center",
      "#199bff",
      FONT_GAME,
      1,
      0,
      0,
      "+",
      true,
      true,
      true,
      false
    );

    let _oDecreaseText = new CCTLText(
      _oContainer,
      405,
      CANVAS_HEIGHT / 2 + 190,
      80,
      80,
      80,
      "center",
      "#199bff",
      FONT_GAME,
      1,
      0,
      0,
      "-",
      true,
      true,
      true,
      false
    );

    _oStakeTextStroke = new CCTLText(
      _oContainer,
      CANVAS_WIDTH / 2 + 210,
      CANVAS_HEIGHT / 2 + 280,
      120,
      50,
      50,
      "center",
      "#fff",
      FONT_GAME,
      1,
      0,
      0,
      _iStake,
      true,
      true,
      true,
      false
    );
    _oStakeTextStroke.setOutline(4);

    _oStakeText = new CCTLText(
      _oContainer,
      CANVAS_WIDTH / 2 + 210,
      CANVAS_HEIGHT / 2 + 280,
      120,
      50,
      50,
      "center",
      "#000",
      FONT_GAME,
      1,
      0,
      0,
      _iStake,
      true,
      true,
      true,
      false
    );

    _oStakeText2 = new CCTLText(
      _oContainer,
      475,
      CANVAS_HEIGHT / 2 + 210,
      90,
      50,
      50,
      "center",
      "#000",
      FONT_GAME,
      1,
      0,
      0,
      _iStake,
      true,
      true,
      true,
      false
    );

    this.writeText(
      "STAKE",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2 + 165,
      100,
      60,
      30,
      "#000",
      "#199bff"
    );

    this.writeText(
      "STAKE",
      CANVAS_WIDTH / 2 + 220,
      CANVAS_HEIGHT / 2 + 215,
      100,
      80,
      80,
      "#000",
      "#199bff"
    );

    _stakes = [10.0, 20.0, 1000.0, 2000.0, 50.0, 100.0, 5000.0, 10000.0];

    for (let i = 0; i < 8; i++) {
      if (i >= 4) {
        _stakeTexts[i] = this.createTextButton(
          _stakes[i],
          CANVAS_WIDTH / 2 - 250 + 40 * (i - 4) + 50 * (i - 4),
          CANVAS_HEIGHT / 2 + 300,
          50 + 50 * (i - 4) * 0.5,
          50,
          25,
          _stakes[i],
          "#000",
          "#fff"
        );
      } else {
        _stakeTexts[i] = this.createTextButton(
          _stakes[i],
          CANVAS_WIDTH / 2 - 250 + 40 * i + 50 * i,
          CANVAS_HEIGHT / 2 + 260,
          50 + 50 * i * 0.5,
          50,
          25,
          _stakes[i],
          "#000",
          "#fff"
        );
      }
    }
  };

  this.writeText = function (
    text,
    x,
    y,
    width,
    height,
    fontSize,
    color,
    strokeColor
  ) {
    var oTextStroke = new CCTLText(
      _oContainer,
      x,
      y,
      width,
      height,
      fontSize,
      "center",
      strokeColor,
      FONT_GAME,
      1,
      0,
      0,
      text,
      true,
      true,
      true,
      false
    );

    oTextStroke.setOutline(4);

    var oText = new CCTLText(
      _oContainer,
      x,
      y,
      width,
      height,
      fontSize,
      "center",
      color,
      FONT_GAME,
      1,
      0,
      0,
      text,
      true,
      true,
      true,
      false
    );
  };

  this.createTextButton = function (
    text,
    x,
    y,
    width,
    height,
    fontSize,
    stake,
    color,
    strokeColor
  ) {
    var oBtnContainer = new createjs.Container();
    oBtnContainer.x = x;
    oBtnContainer.y = y;
    oBtnContainer.cursor = "pointer";

    var oTextStroke = new CCTLText(
      oBtnContainer,
      0,
      0,
      width,
      height,
      fontSize,
      "center",
      strokeColor,
      FONT_GAME,
      1,
      0,
      0,
      text,
      true,
      true,
      true,
      false
    );
    oTextStroke.setOutline(4);

    // Main white text
    var oText = new CCTLText(
      oBtnContainer,
      0,
      0,
      width,
      height,
      fontSize,
      "center",
      color, // text color
      FONT_GAME,
      1,
      0,
      0,
      text,
      true,
      true,
      true,
      false
    );
    _oContainer.addChild(oBtnContainer);

    oBtnContainer.addEventListener("click", function () {
      _iStake = stake;
      _oThis._refreshText(_iStake);
    });
  };

  this.show = function () {
    _oContainer.alpha = 0;
    _oContainer.visible = true;
    createjs.Tween.get(_oContainer).to(
      { alpha: 1 },
      400,
      createjs.Ease.quartOut
    );
  };

  this.hide = function (stake) {
    createjs.Tween.get(_oContainer)
      .to({ alpha: 0 }, 400, createjs.Ease.quartOut)
      .call(function () {
        _oContainer.visible = false;
        s_oGame.onExitStake(stake);
      });
  };

  this.unload = function () {
    createjs.Tween.get(_oContainer)
      .to({ alpha: 0 }, 150, createjs.Ease.quartOut)
      .call(function () {
        _oParentContainer.removeChild(_oContainer, _oFade);
      });
  };

  this._refreshText = function (stake) {
    _iStake = stake;
    _oStakeText.refreshText(stake);
    _oStakeText2.refreshText(stake);
    _oStakeTextStroke.refreshText(stake);
  };

  this._onContinue = function (stake) {
    _oThis.hide(stake);
  };

  this._init();
}
