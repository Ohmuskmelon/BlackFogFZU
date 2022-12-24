"use strict";
cc._RF.push(module, 'b0fb1xxAB1JxLApMiumEP3S', 'config');
// scripts/game_chp1/cp1_washingMachine/config.ts

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
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("addSocre", this.addSocre, this);
        this.node.on("decraseScore", this.decraseScore, this);
        this.node.on("check", this.check, this);
    };
    NewClass.prototype.addSocre = function (below_node) {
        this.value = this.value + below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 141)
            cc.log("true");
    };
    NewClass.prototype.decraseScore = function (below_node) {
        this.value = this.value - below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 141)
            cc.log("true");
    };
    NewClass.prototype.check = function () {
        if (this.value == 111) {
            cc.log("true");
        }
        else
            cc.log("false");
    };
    __decorate([
        property
    ], NewClass.prototype, "value", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();