// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class NewClass extends cc.Component {

//     @property(cc.Label)
//     label: cc.Label = null;

//     @property
//     text: string = 'hello';

//     @property(cc.Node)
//     mapNode:cc.Node = null;
//     // @property
//     // collider :cc.Collider = null;

//     // LIFE-CYCLE CALLBACKS:

//     onLoad () {
//          //2.4版本需要启动物理组件
//          let p = cc.director.getPhysicsManager();
//          let Bits = cc.PhysicsManager.DrawBits;
//          p.enabled = true;
//         //  p.debugDrawFlags = Bits.e_aabbBit | Bits.e_jointBit | Bits.e_shapeBit;
//          //设置重力  
//          p.gravity = cc.v2(0, -640);
//          this.initMapNode();
//     }

//     start () {

//     }

//     initMapNode(){
//         // 获取map节点，获取节点下的map组件
//         // 获取map节点当中对应的wall层
//         // 遍历所有的tiledtile小块,给每一个小块,添加上rigidsbody的小节点,添加上碰撞区域
//         let tiledMap:cc.TiledMap = this.mapNode.getComponent(cc.TiledMap);


//         let tiledSize:cc.Size = tiledMap.getTileSize();

//         let layer:cc.TiledLayer = tiledMap.getLayer('wall');
//         let layerSize:cc.Size = layer.getLayerSize();

//         for(let i = 0; i < layerSize.width; i++)
//         {
//             for(let j = 0; j < layerSize.height; j++)
//             {
//                 let tiled = layer.getTiledTileAt(i,j,true);
//                 //像面板里的操作一样
//                 if(tiled.gid != 0){
//                     tiled.node.group = 'wall';
//                     // console.log("tile at:" + i + " " + j);
//                     //先添加刚体
//                     let body:cc.RigidBody = tiled.node.addComponent(cc.RigidBody);
//                     body.type = cc.RigidBodyType.Static;
//                     //再添加碰撞检测
//                     if(tiled.node != null){
//                         console.log("not null");
//                     }
//                     let collider = tiled.node.addComponent(cc.PhysicsBoxCollider);

//                     collider.offset = cc.v2(tiledSize.width/2,tiledSize.height/2);
//                     collider.size = tiledSize;
//                     collider.apply();
//                 }
//             }
//         }
//     }

//     // update (dt) {}
// }
