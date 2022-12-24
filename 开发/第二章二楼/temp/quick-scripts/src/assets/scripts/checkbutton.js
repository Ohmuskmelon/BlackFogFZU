"use strict";
cc._RF.push(module, '43637vKkEVC/4cLr2mRrRUx', 'checkbutton');
// scripts/checkbutton.ts

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
        _this.caomeipaofu = 0;
        _this.heisenlin = 0;
        _this.tiantianquan = 0;
        _this.sum = 0;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("check", this.check, this);
    };
    NewClass.prototype.check = function (below_node) {
        cc.log(below_node.name);
        if (below_node.name == "草莓泡芙<testbutton>") {
            if (below_node.isClick == false) {
                this.caomeipaofu += below_node.num;
                if (this.caomeipaofu == 10)
                    this.caomeipaofu = 8;
            }
            else {
                if (this.caomeipaofu == 8)
                    this.caomeipaofu = 5;
                else
                    this.caomeipaofu = 0;
            }
            cc.log("草莓泡芙这么多块钱" + this.caomeipaofu);
        }
        if (below_node.name == "甜甜圈<testbutton>") {
            if (below_node.isClick == false) {
                this.tiantianquan += below_node.num;
            }
            else {
                this.tiantianquan -= below_node.num;
            }
            cc.log("甜甜圈这么多块钱" + this.tiantianquan);
        }
        if (below_node.name == "黑森林蛋糕<testbutton>") {
            if (below_node.isClick == false) {
                this.heisenlin += below_node.num;
            }
            else {
                this.heisenlin -= below_node.num;
            }
            cc.log("黑森林蛋糕这么多块钱" + this.heisenlin);
        }
        this.sum = this.caomeipaofu + this.tiantianquan + this.heisenlin;
        cc.log("总和是" + this.sum);
    };
    NewClass.prototype.touchstart = function () {
        if (this.sum != 39) {
            this.label.string = "错误";
        }
        else {
            this.label.string = "正确";
            cc.director.loadScene('chp2_bakery');
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();