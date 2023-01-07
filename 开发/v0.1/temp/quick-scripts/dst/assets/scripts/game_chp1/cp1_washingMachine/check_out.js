
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/check_out.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5c1bdqmphENrIC/h/OMPV+', 'check_out');
// scripts/game_chp1/cp1_washingMachine/check_out.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var config_1 = require("./config");
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.config = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.node.on("check_out", this.check_out, this);
    };
    NewClass.prototype.check_out = function () {
        cc.log("check_out");
        if (this.config.value == 111) {
            this.label.string = "洗衣机发动了！";
            window.lockOfWashingMachineInCp1 = 1;
            cc.log(window.lockOfWashingMachineInCp1);
        }
        else {
            this.label.string = "洗衣机还没发动！";
            window.lockOfWashingMachineInCp1 = 0;
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property(config_1.default)
    ], NewClass.prototype, "config", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hlY2tfb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxtQ0FBOEI7QUFTOUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1QkM7UUFyQkMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQWlCdEIsaUJBQWlCO0lBQ25CLENBQUM7SUFoQlcseUJBQU0sR0FBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBbEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzs0Q0FDSztJQUxILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QjVCO0lBQUQsZUFBQztDQXZCRCxBQXVCQyxDQXZCcUMsRUFBRSxDQUFDLFNBQVMsR0F1QmpEO2tCQXZCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy/orr7nva7lhajlsYDlsZ7mgKdcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLy93aW5kb3flr7nosaHlsZ7mgKdcbiAgICBsb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxOiBudW1iZXI7IC8v5Yqg5YWl5a+56LGhXG4gIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY29uZmlnKVxuICBjb25maWc6IGNvbmZpZyA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja19vdXRcIiwgdGhpcy5jaGVja19vdXQsIHRoaXMpO1xuICB9XG4gIGNoZWNrX291dCgpIHtcbiAgICBjYy5sb2coXCJjaGVja19vdXRcIik7XG4gICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlID09IDExMSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua0l+iho+acuuWPkeWKqOS6hu+8gVwiO1xuICAgICAgd2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEgPSAxO1xuICAgICAgY2MubG9nKHdpbmRvdy5sb2NrT2ZXYXNoaW5nTWFjaGluZUluQ3AxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua0l+iho+acuui/mOayoeWPkeWKqO+8gVwiO1xuICAgICAgd2luZG93LmxvY2tPZldhc2hpbmdNYWNoaW5lSW5DcDEgPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=