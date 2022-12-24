
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/testbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5aebeZdgUVJLoOSrodl9hte', 'testbutton');
// scripts/testbutton.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Rlc3RidXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNENDO1FBM0NDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7O1FBcUM1QixpQkFBaUI7SUFDbkIsQ0FBQztJQWxDQyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO1FBQ0QsU0FBUztRQUNULDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxrQkFBa0I7UUFDbEIsSUFBSTtJQUNOLENBQUM7SUFDRCx1QkFBSSxHQUFKLFVBQUssU0FBb0I7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLENBQUM7SUF0Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt5Q0FDYjtJQVRlLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsRUFBRSxDQUFDLFNBQVMsR0E0Q2pEO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHNob3dfbm9kZSBmcm9tIFwiLi9zaG93YnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBpc0NsaWNrOiBib29sZWFuID0gdHJ1ZTtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNoZWNrX2J1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNob3dfYnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoTnVtYmVyKVxuICBudW07XG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIC8vIG9uTG9hZCAoKSB7fVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vZGUub24oXCJzaG93XCIsIHRoaXMuc2hvdywgdGhpcyk7XG4gIH1cbiAgdG91Y2hhcnQoKSB7XG4gICAgY2MubG9nKHRoaXMubnVtKTtcblxuICAgIGlmICh0aGlzLmlzQ2xpY2sgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dfYnV0dG9uLmVtaXQoXCJzaG93XCIsIHRoaXMpO1xuICAgICAgdGhpcy5jaGVja19idXR0b24uZW1pdChcImNoZWNrXCIsIHRoaXMpO1xuICAgICAgY2MubG9nKFwi6ZqQ6JePXCIpO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIC8vICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAvLyAgIHRoaXMuc2hvd19idXR0b24uZW1pdChcInNob3dcIiwgdGhpcyk7XG4gICAgLy8gICB0aGlzLmNoZWNrX2J1dHRvbi5lbWl0KFwiY2hlY2tcIiwgdGhpcyk7XG4gICAgLy8gICBjYy5sb2coXCLmmL7npLpcIik7XG4gICAgLy8gfVxuICB9XG4gIHNob3coc2hvd19ub2RlOiBzaG93X25vZGUpIHtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB0aGlzLmlzQ2xpY2sgPSB0cnVlO1xuICAgIHRoaXMuc2hvd19idXR0b24uZW1pdChcInNob3dcIiwgdGhpcyk7XG4gICAgdGhpcy5jaGVja19idXR0b24uZW1pdChcImNoZWNrXCIsIHRoaXMpO1xuICAgIGNjLmxvZyhcIuaYvuekulwiKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=