
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
            this.label.string = "答案正确";
        }
        else {
            this.label.string = "答案错误";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2dhbWVfY2hwMS9jcDFfd2FzaGluZ01hY2hpbmUvY2hlY2tfb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxtQ0FBOEI7QUFFOUI7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvQkM7UUFsQkMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsSUFBSSxDQUFDOztRQWN0QixpQkFBaUI7SUFDbkIsQ0FBQztJQWJXLHlCQUFNLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzs0Q0FDSztJQUxILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQjVCO0lBQUQsZUFBQztDQXBCRCxBQW9CQyxDQXBCcUMsRUFBRSxDQUFDLFNBQVMsR0FvQmpEO2tCQXBCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY29uZmlnKVxuICBjb25maWc6IGNvbmZpZyA9IG51bGw7XG5cbiAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUub24oXCJjaGVja19vdXRcIiwgdGhpcy5jaGVja19vdXQsIHRoaXMpO1xuICB9XG4gIGNoZWNrX291dCgpIHtcbiAgICBjYy5sb2coXCJjaGVja19vdXRcIik7XG4gICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlID09IDExMSkge1xuICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIuetlOahiOato+ehrlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi562U5qGI6ZSZ6K+vXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==