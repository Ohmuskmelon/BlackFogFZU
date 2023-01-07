"use strict";
cc._RF.push(module, '68274LbEfNJnJMBn7VM8RoK', 'changcolor');
// scripts/game_chp1/cp1_washingMachine/changcolor.ts

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
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.isClick = true;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.changcolor, this);
    };
    NewClass.prototype.changcolor = function () {
        cc.log("background_changecolor");
        if (this.isClick == true) {
            this.node.color = cc.Color.RED;
            this.isClick = false;
        }
        else {
            this.node.color = cc.Color.BLACK;
            this.isClick = true;
            this.node.addChild = this.isClick.valueOf;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();