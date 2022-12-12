// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        target:cc.Node,
        map:cc.Node,
    },


    start () {
        var mapWidth = cc.find("Canvas/bg/maps").width;
        var canvasWidth = cc.find("Canvas").width;
        console.log("canvaswidth:"+canvasWidth);
        this.max_x = mapWidth - canvasWidth;
    },


    cameraFollow(){

        if(!this.target) {
            console.log("null target");
            return;
        }
        // 实际上移动的东西是body
        let worldPos = this.target.convertToWorldSpaceAR(cc.v2(0,0));//获取到player的世界坐标的位置
      
        let nodePos = this.node.parent.convertToNodeSpaceAR(worldPos);//获取到player的世界坐标的位置

        if(nodePos.x <=0 ||nodePos.x >=this.max_x){
            return;
        }
        this.node.x = nodePos.x;
    },

    update (dt) {
        if(this.target == null){
            console.log("don't get the node");
            return;
        }
        this.cameraFollow();
    },
});
