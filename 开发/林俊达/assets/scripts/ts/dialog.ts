// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// const {ccclass, property} = cc._decorator;

// // type role = {
// //     role_name:string;
// //     context: string;
// //     resource:string;
// // };
// type roleMap = {
//     [roleType:string]:string;
// }
// // type player = {
// //     [roleName:string]:string;
// //     // role name : content
// // }

// interface person{
//     name:String;
//     content:Array<string>;
// }

// @ccclass
// export default class NewClass extends cc.Component {

//     @property(cc.Label)
//     label: cc.Label = null;

//     @property
//     text: string = 'hello';

//     @property(cc.Sprite)
//     picSprite : cc.Sprite;

//     @property(cc.Label)
//     textLable : cc.Label;

//     @property(cc.Label)  
//     nameLabel : cc.Label;

//     private roleSourse:roleMap ={
//         "player":"role/hero",
//         "npc":"role/npc"
//     };

//     private dataArray:Array<person>;

//     // LIFE-CYCLE CALLBACKS:

//     private index:number;

//     onLoad () {
//         this.initContext();
//         this.initDialog(this.dataArray);
//         //添加键盘的绑定事件 完成交互
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
//     }
//     onDestroy(){
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
//     }

//     start () {

//     }

//     initDialog(textDataArray:Array<person>){        // 修改当前的显示状态
//         this.index = -1;
//         this.dataArray = textDataArray;
//         this.node.active = true;
//         //显示对话
//         this.showNextText(textDataArray);
//     }

//     initContext(){
//         let player:person = {
//             name:"player",
//             content:[],
//         };
//         let npc:person = {
//             name:"npc",
//             content:[],
//         }
//         this.dataArray = [player,npc];
//     }
    
//     showNextText(textDataArray){
//         if(this.index < textDataArray.length){
//             this.setTextData(textData);
//         }
//         else{
//             this.closeDialog();
//         }

//     }
//     setTextData(textData){
//         // 设置对话内容
//         this.nameLabel.string = this.roleSourse[textData.role];
//         this.textData.string = textData.content;

//         // 修改头像 动态加载头像资源
//         cc.loader.loadRes(,cc.SpriteFrame,(err,texture)=>{
            
//         });

//     }


//     //键盘处理事件
//     onKeyDown(){

//     }

//     onKeyUp(){

//     }
//     closeDialog(){

//     }
//     // update (dt) {}
// }
