
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/showbutton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adb84ZJ0DhIArG652zwil1I', 'showbutton');
// scripts/showbutton.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Nob3didXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7O0FBRWhGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ0NDO1FBL0JDLHdCQUF3QjtRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7UUE0QjNCLGlCQUFpQjtJQUNuQixDQUFDO0lBM0JDLGVBQWU7SUFDZix5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssVUFBc0I7UUFDekIsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEI7UUFDRCxTQUFTO1FBQ1QsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixJQUFJO0lBQ04sQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxVQUFzQjtRQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTtZQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBSFIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdDNUI7SUFBRCxlQUFDO0NBaENELEFBZ0NDLENBaENxQyxFQUFFLENBQUMsU0FBUyxHQWdDakQ7a0JBaENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5pbXBvcnQgYmVsb3dfbm9kZSBmcm9tIFwiLi90ZXN0YnV0dG9uXCI7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJlbG93X25vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIC8vIG9uTG9hZCAoKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9kZS5vbihcInNob3dcIiwgdGhpcy5zaG93LCB0aGlzKTtcbiAgfVxuXG4gIHNob3coYmVsb3dfbm9kZTogYmVsb3dfbm9kZSkge1xuICAgIGlmIChiZWxvd19ub2RlLm5vZGUub3BhY2l0eSA9PSAwKSB7XG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIGNjLmxvZyhcInNob3fpmpDol49cIik7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIC8vICAgY2MubG9nKFwic2hvd+aYvuekulwiKTtcbiAgICAvLyB9XG4gIH1cblxuICB0b3VjaHN0YXJ0KGJlbG93X25vZGU6IGJlbG93X25vZGUpIHtcbiAgICBpZiAodGhpcy5ub2RlLm9wYWNpdHkgPT0gMjU1KSB7XG4gICAgICBjYy5sb2coXCLlsIZcIiArIHRoaXMubm9kZS5uYW1lICsgXCLlj5bkuIvotKfmnrZcIik7XG5cbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuYmVsb3dfbm9kZS5lbWl0KFwic2hvd1wiLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19