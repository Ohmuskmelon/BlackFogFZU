
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/checkbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43637vKkEVC/4cLr2mRrRUx', 'checkbutton');
// script/checkbutton.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2hlY2tidXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2REM7UUE1REMsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBcUR2QixpQkFBaUI7SUFDbkIsQ0FBQztJQXBEQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsd0JBQUssR0FBTCxVQUFNLFVBQXNCO1FBQzFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxrQkFBa0IsRUFBRTtZQUN6QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDO29CQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDOztvQkFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDM0I7WUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksaUJBQWlCLEVBQUU7WUFDeEMsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUNyQztZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxtQkFBbUIsRUFBRTtZQUMxQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ2xDO1lBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQW5ERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBUEosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZENUI7SUFBRCxlQUFDO0NBN0RELEFBNkRDLENBN0RxQyxFQUFFLENBQUMsU0FBUyxHQTZEakQ7a0JBN0RvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgYmVsb3dfbm9kZSBmcm9tIFwiLi90ZXN0YnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBjYW9tZWlwYW9mdTogbnVtYmVyID0gMDtcbiAgaGVpc2VubGluOiBudW1iZXIgPSAwO1xuICB0aWFudGlhbnF1YW46IG51bWJlciA9IDA7XG4gIHN1bTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS5vbihcImNoZWNrXCIsIHRoaXMuY2hlY2ssIHRoaXMpO1xuICB9XG5cbiAgY2hlY2soYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLm5hbWUpO1xuICAgIGlmIChiZWxvd19ub2RlLm5hbWUgPT0gXCLojYnojpPms6Hoipk8dGVzdGJ1dHRvbj5cIikge1xuICAgICAgaWYgKGJlbG93X25vZGUuaXNDbGljayA9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNhb21laXBhb2Z1ICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSAxMCkgdGhpcy5jYW9tZWlwYW9mdSA9IDg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSA4KSB0aGlzLmNhb21laXBhb2Z1ID0gNTtcbiAgICAgICAgZWxzZSB0aGlzLmNhb21laXBhb2Z1ID0gMDtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIuiNieiOk+azoeiKmei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5jYW9tZWlwYW9mdSk7XG4gICAgfVxuXG4gICAgaWYgKGJlbG93X25vZGUubmFtZSA9PSBcIueUnOeUnOWciDx0ZXN0YnV0dG9uPlwiKSB7XG4gICAgICBpZiAoYmVsb3dfbm9kZS5pc0NsaWNrID09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGlhbnRpYW5xdWFuICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWFudGlhbnF1YW4gLT0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9XG4gICAgICBjYy5sb2coXCLnlJznlJzlnIjov5nkuYjlpJrlnZfpkrFcIiArIHRoaXMudGlhbnRpYW5xdWFuKTtcbiAgICB9XG5cbiAgICBpZiAoYmVsb3dfbm9kZS5uYW1lID09IFwi6buR5qOu5p6X6JuL57OVPHRlc3RidXR0b24+XCIpIHtcbiAgICAgIGlmIChiZWxvd19ub2RlLmlzQ2xpY2sgPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5oZWlzZW5saW4gKz0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhlaXNlbmxpbiAtPSBiZWxvd19ub2RlLm51bTtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIum7keajruael+ibi+ezlei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5oZWlzZW5saW4pO1xuICAgIH1cblxuICAgIHRoaXMuc3VtID0gdGhpcy5jYW9tZWlwYW9mdSArIHRoaXMudGlhbnRpYW5xdWFuICsgdGhpcy5oZWlzZW5saW47XG4gICAgY2MubG9nKFwi5oC75ZKM5pivXCIgKyB0aGlzLnN1bSk7XG4gIH1cblxuICB0b3VjaHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnN1bSAhPSAzOSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIumUmeivr1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5q2j56GuXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==