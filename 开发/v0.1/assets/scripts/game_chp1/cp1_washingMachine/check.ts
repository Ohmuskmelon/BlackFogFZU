// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Node)
  upper_node: cc.Node = null;

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchstart, this);
  }
  touchstart() {
    this.upper_node.emit("check", this);
  }
}
