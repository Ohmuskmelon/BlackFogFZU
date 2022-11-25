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

    // LIFE-CYCLE CALLBACKS:
    onload(){
        this.map = cc.find("Canvas/bg/maps/map/body");
    },

    start () {
        var mapWidth = this.map.width;
        console.log("mapwidth:"+this.map.width);
        var canvasWidth = cc.find("Canvas").width;
        console.log("canvaswidth:"+canvasWidth);
        this.max_x = mapWidth - canvasWidth; 
        // this.target = cc.find("Canvas/bg/player/body");
    },


    cameraFollow(){

        if(!this.target) {
            console.log("null target");
            return;
        }
        // console.log(this.max_x);

        // 实际上移动的东西是body
        let worldPos = this.target.convertToWorldSpaceAR(cc.v2(0,0));//获取到player的世界坐标的位置
        // let worldPos = this.target.position.;
        // console.log("player: "+ worldPos);
        let nodePos = this.node.parent.convertToNodeSpaceAR(worldPos);//获取到player的世界坐标的位置
        // console.log("cameraPos: "+nodePos);
        // 将一个点转换到节点 (局部) 空间坐标系 
        // // 转换到camera所在的父节点的相机所在的位置，让摄像机当前的位置，变成玩家的当前的位置
        // let nodePos = this.node.parent.convertToNodeSpaceAR(worldPos);

        console.log(nodePos.x);

        if(nodePos.x <=0 ||nodePos.x >=this.max_x){

            // console.log("x: "+nodePos.x+"y: "+nodePos.y);
            return;
        }
        this.node.x = nodePos.x;
        // console.log("x: "+nodePos.x);
    },

    update (dt) {
        if(this.target == null){
            console.log("don't get the node");
            return;
        }
        this.cameraFollow();
    },
});
