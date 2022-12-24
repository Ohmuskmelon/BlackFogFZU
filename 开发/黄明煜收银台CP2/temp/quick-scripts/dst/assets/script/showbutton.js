
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/showbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adb84ZJ0DhIArG652zwil1I', 'showbutton');
// script/showbutton.ts

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
        // LIFE-CYCLE CALLBACKS:
        _this.below_node = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    NewClass.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.on("show", this.show, this);
    };
    NewClass.prototype.show = function (below_node) {
        if (below_node.node.opacity == 0) {
            this.node.opacity = 255;
            cc.log("show隐藏");
        }
        // else {
        //   this.node.opacity = 0;
        //   cc.log("show显示");
        // }
    };
    NewClass.prototype.touchstart = function (below_node) {
        if (this.node.opacity == 255) {
            cc.log("将" + this.node.name + "取下货架");
            this.node.opacity = 0;
            this.below_node.emit("show", this);
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "below_node", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvc2hvd2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWdDQztRQS9CQyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O1FBNEIzQixpQkFBaUI7SUFDbkIsQ0FBQztJQTNCQyxlQUFlO0lBQ2YseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLFVBQXNCO1FBQ3pCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUN4QixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsU0FBUztRQUNULDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIsSUFBSTtJQUNOLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsVUFBc0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUU7WUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUhSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnQzVCO0lBQUQsZUFBQztDQWhDRCxBQWdDQyxDQWhDcUMsRUFBRSxDQUFDLFNBQVMsR0FnQ2pEO2tCQWhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IGJlbG93X25vZGUgZnJvbSBcIi4vdGVzdGJ1dHRvblwiO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBiZWxvd19ub2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAvLyBvbkxvYWQgKCkge31cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLm5vZGUub24oXCJzaG93XCIsIHRoaXMuc2hvdywgdGhpcyk7XG4gIH1cblxuICBzaG93KGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICBpZiAoYmVsb3dfbm9kZS5ub2RlLm9wYWNpdHkgPT0gMCkge1xuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICBjYy5sb2coXCJzaG936ZqQ6JePXCIpO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAvLyAgIGNjLmxvZyhcInNob3fmmL7npLpcIik7XG4gICAgLy8gfVxuICB9XG5cbiAgdG91Y2hzdGFydChiZWxvd19ub2RlOiBiZWxvd19ub2RlKSB7XG4gICAgaWYgKHRoaXMubm9kZS5vcGFjaXR5ID09IDI1NSkge1xuICAgICAgY2MubG9nKFwi5bCGXCIgKyB0aGlzLm5vZGUubmFtZSArIFwi5Y+W5LiL6LSn5p62XCIpO1xuXG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmJlbG93X25vZGUuZW1pdChcInNob3dcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==