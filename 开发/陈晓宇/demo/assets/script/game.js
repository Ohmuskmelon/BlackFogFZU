// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let inArr = [0, 0, 0, 0];
let closeItem = {
    door: 0,
    ghost : 1,
    computer : 2,
    picture : 3,
}


cc.Class({
    extends: cc.Component,

    properties: {
        //tiledMap: cc.TiledMap,
        Map : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 0;
        cc.director.getPhysicsManager().gravity = cc.v2();
        window.Global = {
            IsIn : null,
            InArr : null,
            CloseItem : null,
        }
        window.Bag = [];
    },

    start() {
        Global.IsIn = false;
        Global.InArr = inArr;
        Global.CloseItem = closeItem;
        this.tiledMap = this.Map.getChildByName("map").getComponent(cc.TiledMap);
        let tiledSize = this.tiledMap.getTileSize();
        let layer = this.tiledMap.getLayer('wall');
        let layerSize = layer.getLayerSize();

        for (let i = 0; i < layerSize.width; i++) {
            for (let j = 0; j < layerSize.height; j++) {
                let tiled = layer.getTiledTileAt(i, j, true);
                if (tiled.gid != 0) {
                    tiled.node.group = 'wall';
                    let body = tiled.node.addComponent(cc.RigidBody);
                    body.type = cc.RigidBodyType.Static;
                    let collider = tiled.node.addComponent(cc.PhysicsBoxCollider);
                    collider.offset = cc.v2(tiledSize.width / 2, tiledSize.height / 2);
                    collider.size = tiledSize;
                    collider.apply();
                }
            }
        }
    },

    // update (dt) {},
});
