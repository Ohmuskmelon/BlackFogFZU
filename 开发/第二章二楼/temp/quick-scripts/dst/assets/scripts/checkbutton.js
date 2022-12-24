
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/checkbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NoZWNrYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZEQztRQTVEQyxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBSyxHQUFhLElBQUksQ0FBQzs7UUFzRHZCLGlCQUFpQjtJQUNuQixDQUFDO0lBckRDLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCx3QkFBSyxHQUFMLFVBQU0sVUFBc0I7UUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLGtCQUFrQixFQUFFO1lBQ3pDLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUM7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7O29CQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFFO2dCQUMvQixJQUFJLENBQUMsWUFBWSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDckM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO2FBQ3JDO1lBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLG1CQUFtQixFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDbEM7WUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBcEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFOSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkQ1QjtJQUFELGVBQUM7Q0E3REQsQUE2REMsQ0E3RHFDLEVBQUUsQ0FBQyxTQUFTLEdBNkRqRDtrQkE3RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBiZWxvd19ub2RlIGZyb20gXCIuL3Rlc3RidXR0b25cIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIGNhb21laXBhb2Z1OiBudW1iZXIgPSAwO1xuICBoZWlzZW5saW46IG51bWJlciA9IDA7XG4gIHRpYW50aWFucXVhbjogbnVtYmVyID0gMDtcbiAgc3VtOiBudW1iZXIgPSAwO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS5vbihcImNoZWNrXCIsIHRoaXMuY2hlY2ssIHRoaXMpO1xuICB9XG5cbiAgY2hlY2soYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLm5hbWUpO1xuICAgIGlmIChiZWxvd19ub2RlLm5hbWUgPT0gXCLojYnojpPms6Hoipk8dGVzdGJ1dHRvbj5cIikge1xuICAgICAgaWYgKGJlbG93X25vZGUuaXNDbGljayA9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmNhb21laXBhb2Z1ICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSAxMCkgdGhpcy5jYW9tZWlwYW9mdSA9IDg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jYW9tZWlwYW9mdSA9PSA4KSB0aGlzLmNhb21laXBhb2Z1ID0gNTtcbiAgICAgICAgZWxzZSB0aGlzLmNhb21laXBhb2Z1ID0gMDtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIuiNieiOk+azoeiKmei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5jYW9tZWlwYW9mdSk7XG4gICAgfVxuXG4gICAgaWYgKGJlbG93X25vZGUubmFtZSA9PSBcIueUnOeUnOWciDx0ZXN0YnV0dG9uPlwiKSB7XG4gICAgICBpZiAoYmVsb3dfbm9kZS5pc0NsaWNrID09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMudGlhbnRpYW5xdWFuICs9IGJlbG93X25vZGUubnVtO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aWFudGlhbnF1YW4gLT0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9XG4gICAgICBjYy5sb2coXCLnlJznlJzlnIjov5nkuYjlpJrlnZfpkrFcIiArIHRoaXMudGlhbnRpYW5xdWFuKTtcbiAgICB9XG5cbiAgICBpZiAoYmVsb3dfbm9kZS5uYW1lID09IFwi6buR5qOu5p6X6JuL57OVPHRlc3RidXR0b24+XCIpIHtcbiAgICAgIGlmIChiZWxvd19ub2RlLmlzQ2xpY2sgPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5oZWlzZW5saW4gKz0gYmVsb3dfbm9kZS5udW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhlaXNlbmxpbiAtPSBiZWxvd19ub2RlLm51bTtcbiAgICAgIH1cbiAgICAgIGNjLmxvZyhcIum7keajruael+ibi+ezlei/meS5iOWkmuWdl+mSsVwiICsgdGhpcy5oZWlzZW5saW4pO1xuICAgIH1cblxuICAgIHRoaXMuc3VtID0gdGhpcy5jYW9tZWlwYW9mdSArIHRoaXMudGlhbnRpYW5xdWFuICsgdGhpcy5oZWlzZW5saW47XG4gICAgY2MubG9nKFwi5oC75ZKM5pivXCIgKyB0aGlzLnN1bSk7XG4gIH1cblxuICB0b3VjaHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLnN1bSAhPSAzOSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIumUmeivr1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5q2j56GuXCI7XG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2NocDJfYmFrZXJ5Jyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==