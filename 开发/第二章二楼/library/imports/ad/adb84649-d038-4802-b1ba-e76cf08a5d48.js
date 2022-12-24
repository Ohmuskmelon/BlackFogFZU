"use strict";
cc._RF.push(module, 'adb84ZJ0DhIArG652zwil1I', 'showbutton');
// scripts/showbutton.ts

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
        // LIFE-CYCLE CALLBACKS:
        _this.below_node = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.on("show", this.show, this);
    };
    NewClass.prototype.show = function (below_node) {
        if (below_node.node.opacity == 0) {
            this.node.opacity = 255;
            cc.log("show隐藏");
        }
        // else {
        //   this.node.opacity = 0;
        //   cc.log("show显示");
        // }
    };
    NewClass.prototype.touchstart = function (below_node) {
        if (this.node.opacity == 255) {
            cc.log("将" + this.node.name + "取下货架");
            this.node.opacity = 0;
            this.below_node.emit("show", this);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "below_node", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();