
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtDQztRQWhDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztRQStCbEIsaUJBQWlCO0lBQ25CLENBQUM7SUE5QkMsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO1lBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLFVBQXNCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUc7WUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hCOztZQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTdCRDtRQURDLFFBQVE7MkNBQ1M7SUFGQyxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0M1QjtJQUFELGVBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBa0NqRDtrQkFsQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBiZWxvd19ub2RlIGZyb20gXCIuL2J1dHRvblwiO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5XG4gIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwiYWRkU29jcmVcIiwgdGhpcy5hZGRTb2NyZSwgdGhpcyk7XG4gICAgdGhpcy5ub2RlLm9uKFwiZGVjcmFzZVNjb3JlXCIsIHRoaXMuZGVjcmFzZVNjb3JlLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja1wiLCB0aGlzLmNoZWNrLCB0aGlzKTtcbiAgfVxuXG4gIGFkZFNvY3JlKGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIGJlbG93X25vZGUudmFsdWU7XG4gICAgY2MubG9nKHRoaXMudmFsdWUpO1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLmJ1dHRvbl9uYW1lLnN0cmluZyArIFwi5oyJ5LiLXCIpO1xuXG4gICAgaWYgKHRoaXMudmFsdWUgPT0gMTQxKSBjYy5sb2coXCJ0cnVlXCIpO1xuICB9XG4gIGRlY3Jhc2VTY29yZShiZWxvd19ub2RlOiBiZWxvd19ub2RlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgLSBiZWxvd19ub2RlLnZhbHVlO1xuICAgIGNjLmxvZyh0aGlzLnZhbHVlKTtcbiAgICBjYy5sb2coYmVsb3dfbm9kZS5idXR0b25fbmFtZS5zdHJpbmcgKyBcIuaMieS4i1wiKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxNDEpIGNjLmxvZyhcInRydWVcIik7XG4gIH1cblxuICBjaGVjaygpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxMTEpIHtcbiAgICAgIGNjLmxvZyhcInRydWVcIik7XG4gICAgfSBlbHNlIGNjLmxvZyhcImZhbHNlXCIpO1xuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==