// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
  isClick: boolean = true;

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.changcolor, this);
  }
  changcolor() {
    cc.log("background_changecolor");
    if (this.isClick == true) {
      this.node.color = cc.Color.BLUE;

      this.isClick = false;
    } else {
      this.node.color = cc.Color.GREEN;
      this.isClick = true;
      this.node.addChild = this.isClick.valueOf;
    }
  }

  // update (dt) {}
}
