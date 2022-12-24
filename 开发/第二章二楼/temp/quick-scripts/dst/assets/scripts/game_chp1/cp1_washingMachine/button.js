
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '481d8hEjRZH94/shqoYwPd8', 'button');
// scripts/game_chp1/cp1_washingMachine/button.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.upper_node = null;
        _this.isClick = true;
        _this.button_name = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        cc.log(this.button_name.string);
        if (this.button_name.string == "button_1")
            this.value = 1;
        if (this.button_name.string == "button_2")
            this.value = 3;
        if (this.button_name.string == "button_3")
            this.value = 11;
        if (this.button_name.string == "button_4")
            this.value = 29;
        if (this.button_name.string == "button_5")
            this.value = 97;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
    };
    NewClass.prototype.touchstart = function () {
        cc.log("start");
        if (this.isClick == true) {
            this.upper_node.emit("addSocre", this);
            this.isClick = false;
        }
        else {
            this.upper_node.emit("decraseScore", this);
            this.isClick = true;
        }
    };
    NewClass.prototype.changcolor = function () {
        cc.log("changcolor");
        if (this.isClick == true) {
            this.node.color = cc.Color.YELLOW;
        }
        else {
            this.node.color = cc.Color.BLUE;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "upper_node", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "button_name", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBDQztRQXpDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsaUJBQVcsR0FBYSxJQUFJLENBQUM7O1FBZ0M3QixpQkFBaUI7SUFDbkIsQ0FBQztJQS9CQyx5QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRTNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCw2QkFBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1U7SUFUVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEM1QjtJQUFELGVBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBMENqRDtrQkExQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHVwcGVyX25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIGlzQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYnV0dG9uX25hbWU6IGNjLkxhYmVsID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgY2MubG9nKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nKTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fMVwiKSB0aGlzLnZhbHVlID0gMTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fMlwiKSB0aGlzLnZhbHVlID0gMztcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fM1wiKSB0aGlzLnZhbHVlID0gMTE7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwiYnV0dG9uXzRcIikgdGhpcy52YWx1ZSA9IDI5O1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcImJ1dHRvbl81XCIpIHRoaXMudmFsdWUgPSA5NztcblxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaHN0YXJ0LCB0aGlzKTtcbiAgfVxuXG4gIHRvdWNoc3RhcnQoKSB7XG4gICAgY2MubG9nKFwic3RhcnRcIik7XG4gICAgaWYgKHRoaXMuaXNDbGljayA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnVwcGVyX25vZGUuZW1pdChcImFkZFNvY3JlXCIsIHRoaXMpO1xuICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBwZXJfbm9kZS5lbWl0KFwiZGVjcmFzZVNjb3JlXCIsIHRoaXMpO1xuICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2NvbG9yKCkge1xuICAgIGNjLmxvZyhcImNoYW5nY29sb3JcIik7XG4gICAgaWYgKHRoaXMuaXNDbGljayA9PSB0cnVlKSB7XG4gICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMVUU7XG4gICAgfVxuICB9XG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=