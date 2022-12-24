
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/testbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aebeZdgUVJLoOSrodl9hte', 'testbutton');
// script/testbutton.ts

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
        _this.isClick = true;
        _this.check_button = null;
        _this.show_button = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.on("show", this.show, this);
    };
    NewClass.prototype.touchart = function () {
        cc.log(this.num);
        if (this.isClick == true) {
            this.node.opacity = 0;
            this.isClick = false;
            this.show_button.emit("show", this);
            this.check_button.emit("check", this);
            cc.log("隐藏");
        }
        // else {
        //   this.node.opacity = 255;
        //   this.isClick = true;
        //   this.show_button.emit("show", this);
        //   this.check_button.emit("check", this);
        //   cc.log("显示");
        // }
    };
    NewClass.prototype.show = function (show_node) {
        this.node.opacity = 255;
        this.isClick = true;
        this.show_button.emit("show", this);
        this.check_button.emit("check", this);
        cc.log("显示");
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "check_button", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "show_button", void 0);
    __decorate([
        property(Number)
    ], NewClass.prototype, "num", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvdGVzdGJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRDQztRQTNDQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGlCQUFXLEdBQVksSUFBSSxDQUFDOztRQXFDNUIsaUJBQWlCO0lBQ25CLENBQUM7SUFsQ0Msd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELDJCQUFRLEdBQVI7UUFDRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDZDtRQUNELFNBQVM7UUFDVCw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLHlDQUF5QztRQUN6QywyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCLElBQUk7SUFDTixDQUFDO0lBQ0QsdUJBQUksR0FBSixVQUFLLFNBQW9CO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxNQUFNLENBQUM7eUNBQ2I7SUFUZSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEM1QjtJQUFELGVBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNENqRDtrQkE1Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBzaG93X25vZGUgZnJvbSBcIi4vc2hvd2J1dHRvblwiO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgaXNDbGljazogYm9vbGVhbiA9IHRydWU7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBjaGVja19idXR0b246IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzaG93X2J1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KE51bWJlcilcbiAgbnVtO1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge31cblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9uKFwic2hvd1wiLCB0aGlzLnNob3csIHRoaXMpO1xuICB9XG4gIHRvdWNoYXJ0KCkge1xuICAgIGNjLmxvZyh0aGlzLm51bSk7XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrID09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93X2J1dHRvbi5lbWl0KFwic2hvd1wiLCB0aGlzKTtcbiAgICAgIHRoaXMuY2hlY2tfYnV0dG9uLmVtaXQoXCJjaGVja1wiLCB0aGlzKTtcbiAgICAgIGNjLmxvZyhcIumakOiXj1wiKTtcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAvLyAgIHRoaXMuaXNDbGljayA9IHRydWU7XG4gICAgLy8gICB0aGlzLnNob3dfYnV0dG9uLmVtaXQoXCJzaG93XCIsIHRoaXMpO1xuICAgIC8vICAgdGhpcy5jaGVja19idXR0b24uZW1pdChcImNoZWNrXCIsIHRoaXMpO1xuICAgIC8vICAgY2MubG9nKFwi5pi+56S6XCIpO1xuICAgIC8vIH1cbiAgfVxuICBzaG93KHNob3dfbm9kZTogc2hvd19ub2RlKSB7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dfYnV0dG9uLmVtaXQoXCJzaG93XCIsIHRoaXMpO1xuICAgIHRoaXMuY2hlY2tfYnV0dG9uLmVtaXQoXCJjaGVja1wiLCB0aGlzKTtcbiAgICBjYy5sb2coXCLmmL7npLpcIik7XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19