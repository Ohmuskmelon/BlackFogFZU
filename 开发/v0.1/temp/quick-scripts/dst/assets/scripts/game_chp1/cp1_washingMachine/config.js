
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
        if (this.value == 111)
            cc.log("true");
    };
    NewClass.prototype.decraseScore = function (below_node) {
        this.value = this.value - below_node.value;
        cc.log(this.value);
        cc.log(below_node.button_name.string + "按下");
        if (this.value == 111)
            cc.log("true");
    };
    NewClass.prototype.check = function () {
        if (this.value == 111) {
            cc.log("true");
            window.lockOfWashingMachineInCp1 = 1;
        }
        else {
            cc.log("false");
            window.lockOfWashingMachineInCp1 = 0;
        }
        cc.log(window.lockOfWashingMachineInCp1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVDQztRQXJDQyxXQUFLLEdBQVcsQ0FBQyxDQUFDOztRQW9DbEIsaUJBQWlCO0lBQ25CLENBQUM7SUFuQ0Msd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxVQUFzQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUMzQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHO1lBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsK0JBQVksR0FBWixVQUFhLFVBQXNCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUc7WUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2YsTUFBTSxDQUFDLHlCQUF5QixHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBbENEO1FBREMsUUFBUTsyQ0FDUztJQUZDLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QzVCO0lBQUQsZUFBQztDQXZDRCxBQXVDQyxDQXZDcUMsRUFBRSxDQUFDLFNBQVMsR0F1Q2pEO2tCQXZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGJlbG93X25vZGUgZnJvbSBcIi4vYnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHlcbiAgdmFsdWU6IG51bWJlciA9IDA7XG5cbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgLy8gb25Mb2FkICgpIHt9XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUub24oXCJhZGRTb2NyZVwiLCB0aGlzLmFkZFNvY3JlLCB0aGlzKTtcbiAgICB0aGlzLm5vZGUub24oXCJkZWNyYXNlU2NvcmVcIiwgdGhpcy5kZWNyYXNlU2NvcmUsIHRoaXMpO1xuICAgIHRoaXMubm9kZS5vbihcImNoZWNrXCIsIHRoaXMuY2hlY2ssIHRoaXMpO1xuICB9XG5cbiAgYWRkU29jcmUoYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgYmVsb3dfbm9kZS52YWx1ZTtcbiAgICBjYy5sb2codGhpcy52YWx1ZSk7XG4gICAgY2MubG9nKGJlbG93X25vZGUuYnV0dG9uX25hbWUuc3RyaW5nICsgXCLmjInkuItcIik7XG5cbiAgICBpZiAodGhpcy52YWx1ZSA9PSAxMTEpIGNjLmxvZyhcInRydWVcIik7XG4gIH1cbiAgZGVjcmFzZVNjb3JlKGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSAtIGJlbG93X25vZGUudmFsdWU7XG4gICAgY2MubG9nKHRoaXMudmFsdWUpO1xuICAgIGNjLmxvZyhiZWxvd19ub2RlLmJ1dHRvbl9uYW1lLnN0cmluZyArIFwi5oyJ5LiLXCIpO1xuICAgIGlmICh0aGlzLnZhbHVlID09IDExMSkgY2MubG9nKFwidHJ1ZVwiKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09IDExMSkge1xuICAgICAgY2MubG9nKFwidHJ1ZVwiKTtcbiAgICAgIHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2MubG9nKFwiZmFsc2VcIik7XG4gICAgICB3aW5kb3cubG9ja09mV2FzaGluZ01hY2hpbmVJbkNwMSA9IDA7XG4gICAgfVxuICAgIGNjLmxvZyh3aW5kb3cubG9ja09mV2FzaGluZ01hY2hpbmVJbkNwMSk7XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19