"use strict";
cc._RF.push(module, '481d8hEjRZH94/shqoYwPd8', 'button');
// Script/button.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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