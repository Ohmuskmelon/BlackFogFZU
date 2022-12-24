
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/checkbutton');
require('./assets/script/showbutton');
require('./assets/script/testbutton');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
