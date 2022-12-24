
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICB2YWx1ZTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgdXBwZXJfbm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgaXNDbGljazogYm9vbGVhbiA9IHRydWU7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBidXR0b25fbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICBjYy5sb2codGhpcy5idXR0b25fbmFtZS5zdHJpbmcpO1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcImJ1dHRvbl8xXCIpIHRoaXMudmFsdWUgPSAxO1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcImJ1dHRvbl8yXCIpIHRoaXMudmFsdWUgPSAzO1xuICAgIGlmICh0aGlzLmJ1dHRvbl9uYW1lLnN0cmluZyA9PSBcImJ1dHRvbl8zXCIpIHRoaXMudmFsdWUgPSAxMTtcbiAgICBpZiAodGhpcy5idXR0b25fbmFtZS5zdHJpbmcgPT0gXCJidXR0b25fNFwiKSB0aGlzLnZhbHVlID0gMjk7XG4gICAgaWYgKHRoaXMuYnV0dG9uX25hbWUuc3RyaW5nID09IFwiYnV0dG9uXzVcIikgdGhpcy52YWx1ZSA9IDk3O1xuXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoc3RhcnQsIHRoaXMpO1xuICB9XG5cbiAgdG91Y2hzdGFydCgpIHtcbiAgICBjYy5sb2coXCJzdGFydFwiKTtcbiAgICBpZiAodGhpcy5pc0NsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMudXBwZXJfbm9kZS5lbWl0KFwiYWRkU29jcmVcIiwgdGhpcyk7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cHBlcl9ub2RlLmVtaXQoXCJkZWNyYXNlU2NvcmVcIiwgdGhpcyk7XG4gICAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nY29sb3IoKSB7XG4gICAgY2MubG9nKFwiY2hhbmdjb2xvclwiKTtcbiAgICBpZiAodGhpcy5pc0NsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuQkxVRTtcbiAgICB9XG4gIH1cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==