//=============================================================================
// VIPArcher_Character_Animations.js
//=============================================================================
/*:
 * @plugindesc Extended character animation setting, including 8-direction walking animation/ (4/8-direction) running animation / standby animation/ character animations with more than 4 frames
 * @author VIPArcher
 *
 * @param Dir8_Flag
 * @desc Symbol used to activate this plugin on the image file
 * @default %
 *
 * @param Frames_Flag
 * @desc Symbol used before numbers to show the frame number of the image file
 * @default #
 *
 * @param Stand_Wait
 * @desc How many frame numbers with no action in the map needed to activate the standby animation
 * @default 60
 *
 * @help Put the first symbol (default symbol: % or what you set) in the front of the image's filename if the image needs to follow this plugin's setting.
 * Image file naming standard (with the default symbol):
 *      %FILENAME.png     -> FILENAME should be replaced with your own character's name
 * eg:  %VIPArcher.png    ->replace 'VIPArcher' with your character's name
 * By default, the image file will be arranged into 2 rows and 4 columns equaling 8 images.
 *      ----------------------------------------------------------------
 *        Normal      |    Normal      |     Normal      |
 *        4-dir       |    4-dir       |     4-dir       |
 *        walking     |    running     |     standby     |     EMPTY
 *        image       |    image       |     image       |
 *      ----------------------------------------------------------------
 *        Extra       |    Extra       |     Extra       |
 *        8-dir       |    8-dir       |     8-dir       |
 *        walking     |    running     |     standby     |    EMPTY
 *        image       |    image       |     image       |
 *      ----------------------------------------------------------------
 * ADDITIONAL:
 * If your character animation image is more than 3 frames in every direction, put the second symbol (default symol: #) with two numbers to customize it.
 * Image file naming standard (with all default symbols):
 *       %FILENAME#NO1,NO2.png      ->replace NO1 with the frame number that your image has in every direction
 *                                                      ->replace NO2 with the frame that the character shows when fixed
 * eg: %VIPArcher#6,3.png    ->it means every image of 8 images in this file has 6 frames in every direction, and the default frame to show the fixed character is the 3rd one
 */
(function() {
    var parameters = PluginManager.parameters('VIPArcher_Character_Animations');
    var dir8_flag  = String(parameters['Dir8_Flag']   || '%' );
    var stand_wait = String(parameters['Stand_Wait']  || '60');
    var frame_flag = String(parameters['Frames_Flag'] || '#' );
    ImageManager.isDir8Character = function(filename) {
        var reg = new RegExp("^\[\\!\\$\\" + dir8_flag + ']+');
        var sign = filename.match(reg);
        return sign && sign[0].contains(dir8_flag);
    };
    var _Game_CharacterBaseinitMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function() {
        _Game_CharacterBaseinitMembers.call(this);
        this._standWait = 0;
        this._isStand = false;
        this._isDir8Character = false;
    };
    var _Game_CharacterBasesetImage = Game_CharacterBase.prototype.setImage;
    Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
        _Game_CharacterBasesetImage.call(this, characterName, characterIndex);
        this.getCharacterMaxFrame(characterName);
        if (ImageManager.isDir8Character(characterName)) {
            this._characterIndex  = 0;
            this._isDir8Character = true;
        }
    };
    var _Game_CharacterBaseupdate = Game_CharacterBase.prototype.update;
    Game_CharacterBase.prototype.update = function() {
        _Game_CharacterBaseupdate.call(this);
        if (this.isMoving()) {
            this._standWait = 0;
            this._isStand = false;
            if (this._isDir8Character) { this._stepAnime = false };
        } else {
            this._standWait += 1;
            if (this._standWait > parseInt(stand_wait)) {
                this._isStand = true;
                if (this._isDir8Character) { this._stepAnime = true };
            }
        }
    };
    var _Game_CharacterBasemoveDiagonally = Game_CharacterBase.prototype.moveDiagonally;
    Game_CharacterBase.prototype.moveDiagonally = function(horz, vert) {
        _Game_CharacterBasemoveDiagonally.call(this, horz, vert);
        if (horz > 5) {
            vert > 5 ? this.setDirection(9) : this.setDirection(7);
        } else {
            vert > 5 ? this.setDirection(3) : this.setDirection(1);
        }
    };
    Game_CharacterBase.prototype.getCharacterMaxFrame = function(characterName) {
        var framedate = characterName.match(new RegExp(frame_flag + "(\\d+),(\\d+)"));
        if (framedate) {
            this._maxFrame = parseInt(framedate[1]);
            this._formerPattern = parseInt(framedate[2]);
        } else{
            this._maxFrame = 3;
            this._formerPattern = 1;
        }
    };
    Game_CharacterBase.prototype.pattern = function() {
        return this._pattern < this.maxFrame() ? this._pattern : 1;
    };
    Game_CharacterBase.prototype.maxFrame = function() {
        return this._maxFrame;
    };
    Game_CharacterBase.prototype.maxPattern = function() {
        if (this._maxFrame === 3) {
            return 4;
        } else {
            return this._maxFrame;
        }
    };
    Game_CharacterBase.prototype.isOriginalPattern = function() {
        return this.pattern() === this._formerPattern;
    };
    Game_CharacterBase.prototype.resetPattern = function() {
        this.setPattern(this._formerPattern);
    };
    Game_CharacterBase.prototype.isFast = function() {
        return this._standWait < 2 && (this.isDashing() || this._moveSpeed > 4);
    };
    Game_CharacterBase.prototype.isStand = function() {
        return this._isStand;
    };
    Game_CharacterBase.prototype.setCharacterIndex = function(index) {
        this._characterIndex = index;
    };
    Game_Player.prototype.moveByInput = function() {
        if (!this.isMoving() && this.canMove()) {
            var direction = Input.dir8;
            if (direction > 0) {
                $gameTemp.clearDestination();
            } else if ($gameTemp.isDestinationValid()){
                var x = $gameTemp.destinationX();
                var y = $gameTemp.destinationY();
                direction = this.findDirectionTo(x, y);
            }
            if (direction > 0) {
                if (direction % 2 == 0){
                    this.moveStraight(direction);
                    return;
                }
                if (direction < 5){
                    this.moveDiagonally(direction + 3 , 2);
                } else {
                    this.moveDiagonally(direction - 3 , 8);
                }
            }
        }
    };
    var _Game_PlayermoveDiagonally = Game_Player.prototype.moveDiagonally;
    Game_Player.prototype.moveDiagonally = function(horz, vert) {
        if (!this.canPass(this._x, this._y, horz) && !this.canPass(this._x, this._y, vert)){
            this.setMovementSuccess(false);
            return;
        }
        if (this.canPass(this._x, this._y, horz) && !this.canPass(this._x, this._y, vert)){
            this.moveStraight(horz);
            return;
        }
        if (this.canPass(this._x, this._y, vert) && !this.canPass(this._x, this._y, horz)){
            this.moveStraight(vert);
            return;
        }
        if (!this.canPassDiagonally(this._x, this._y, horz, vert)) {
            if (Math.random() > 0.5){
                this.setDirection(vert); this.moveStraight(vert);
            } else {
                this.setDirection(horz); this.moveStraight(horz);
            }
            return;
        }
        _Game_PlayermoveDiagonally.call(this, horz, vert);
    };
    Sprite_Character.prototype.characterPatternY = function() {
        if (this._character.direction() % 2 == 0){
            if (this._character._isDir8Character){
                this._character.setCharacterIndex(this._character.isFast() ? 1 : this._character.isStand() ? 2 : 0);
            }
            return (this._character.direction() - 2) / 2;
        } else {
            if (this._character._isDir8Character){
                this._character.setCharacterIndex(this._character.isFast() ? 5 : this._character.isStand() ? 6 : 4);
            }
            return parseInt((this._character.direction() + 1) / 3);
        }
    };
    Sprite_Character.prototype.patternWidth = function() {
        if (this._tileId > 0) {
            return $gameMap.tileWidth();
        } else if (this._isBigCharacter) {
            return this.bitmap.width / this._character.maxFrame();
        } else {
            return this.bitmap.width / (this._character.maxFrame() * 4);
        }
    };
    Sprite_Character.prototype.characterBlockX = function() {
        if (this._isBigCharacter) {
            return 0;
        } else {
            var index = this._character.characterIndex();
            return (index % 4) * this._character.maxFrame();
        }
    };
})();