// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import config from "./config";
@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property(config)
  config: config = null;

  protected onLoad(): void {
    this.node.on("check_out", this.check_out, this);
  }
  check_out() {
    cc.log("check_out");
    if (this.config.value == 111) {
      this.label.string = "答案正确";
    } else {
      this.label.string = "答案错误";
    }
  }

  // update (dt) {}
}
