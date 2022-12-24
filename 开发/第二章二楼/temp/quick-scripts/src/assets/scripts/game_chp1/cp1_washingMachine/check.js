"use strict";
cc._RF.push(module, '95848E/ILxPZ4MZH0DS496P', 'check');
// scripts/game_chp1/cp1_washingMachine/check.ts

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
        _this.upper_node = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
    };
    NewClass.prototype.touchstart = function () {
        this.upper_node.emit("check", this);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "upper_node", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();