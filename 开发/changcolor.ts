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
  @property(cc.Sprite)
  chang_befor: cc.Sprite = null;

  @property(cc.Sprite)
  chang_after: cc.Sprite = null;

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.changcolor, this);
  }
  changcolor() {
    cc.log("background_changecolor");
    if (this.isClick == true) {
      this.node.color = cc.Color.BLUE;
      // var sprite = this.node.getComponent(cc.Sprite);
      // sprite = this.chang_after;
      this.isClick = false;
    } else {
      this.node.color = cc.Color.WHITE;
      // var sprite = this.node.getComponent(cc.Sprite);
      // sprite = this.chang_befor;

      this.isClick = true;
    }
  }

  // update (dt) {}
}
