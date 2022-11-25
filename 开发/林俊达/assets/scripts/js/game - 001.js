// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let inArr = [0, 0];
let closeItem = {
    door: 0,
    ghost: 1,
}
cc.Class({
    extends: cc.Component,

    properties: {
        mapNodes: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:


    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 0;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -640);
        window.Global = {
            IsShowing: null,
            InArr: null,
            CloseItem: null,
            contact: null,
            id: null,
            currentScene:String,
            doorToScenes:Map,
            itemType:String,
            itemName:String,
            npcsMap: Map,
            itemsMap: Map,
            doorsMap: Map,
        }
    },

    start() {
        Global.IsShowing = false;
        Global.InArr = inArr;
        Global.CloseItem = closeItem;
        Global.contact = ' ';
        Global.id = 0;
        Global.itemType= ' ';
        Global.itemName= ' ';
        Global.currentScene = cc.director.getScene()._name;
        console.log(Global.currentScene);
        this.initScenes();
        this.initAllNodes();
        this.initBag();
        this.initPaths();
        this.initTips();
        // this.initMap(this.mapNodes);
    },

    //加载场景和门之间的对应关系
    initScenes(){
        let scene1doors = {
            "door1" :"scene2",
        };
        let scene2doors = {
            "door1" : "scene1"
        };
        Global.doorToScenes = {
            "scene1" : scene1doors,
            "scene2" :scene2doors
        }

        console.log("Global door to scenes:"+ Global.doorToScenes);
    },

    //重新加载场景，恢复原先的物品状态
    initAllNodes() {

    },

    // 初始化背包系统
    initBag() {

    },

    //记录所有的节点路径，可选
    initPaths() {


    },

    //初始化弹窗的状态
    initTips() {
        let npcs = cc.find("Canvas/bg/npcs").children;
        let items = cc.find("Canvas/bg/items").children;
        let doors = cc.find("Canvas/bg/doors").children;
        for (i = 0; i < npcs.length; i++) {
            Global.npcsMap[npcs[i].name] = i;
            console.log(npcs[i].name, i);
        }
        for (i = 0; i < items.length; i++) {
            Global.itemsMap[items[i].name] = i;
            console.log(items[i].name, i);
        }

        for (i = 0; i < doors.length; i++) {
            Global.doorsMap[doors[i].name] = i;
            console.log(doors[i].name, i);
        }
    },

    initMap() {
        //获得当前map节点下的所有的map子节点
        // console.log(this.mapNodes.name);
        let cnt = 0;
        for (let mapNode of this.mapNodes.children) {
            this.initMapNode(mapNode);
            // console.log(mapNode.name);
            cnt++;
        }
        // console.log("map count: " + cnt);
    },

    initMapNode(mapNode) {
        // 获取map节点，获取节点下的map组件
        // 获取map节点当中对应的wall层
        // 遍历所有的tiledtile小块,给每一个小块,添加上rigidsbody的小节点,添加上碰撞区域
        let tiledMap = mapNode.getComponent(cc.TiledMap);
        let tiledSize = tiledMap.getTileSize();

        let layer = tiledMap.getLayer('wall');
        let layerSize = layer.getLayerSize();

        for (let i = 0; i < layerSize.width; i++) {
            for (let j = 0; j < layerSize.height; j++) {
                let tiled = layer.getTiledTileAt(i, j, true);
                //像面板里的操作一样
                if (tiled.gid != 0) {
                    tiled.node.group = 'wall';
                    // console.log("tile at:" + i + " " + j);
                    //先添加刚体
                    let body = tiled.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    //再添加碰撞检测
                    // if(tiled.node != null){
                    //     console.log("not null");
                    // }
                    let collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
                    collider.friction = 0;
                    collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2);
                    collider.size = tiledSize;
                    collider.apply();
                }
            }
        }
    },

});
