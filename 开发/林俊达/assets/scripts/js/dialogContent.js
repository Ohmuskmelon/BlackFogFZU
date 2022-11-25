// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.Dialog = {
            contents:Map,
        }
    },

    start () { 
        //scene 1 contents
        let scene1_npc1_content =[
            {role:2, content:"你好，我是NPC.欢迎来到场景1"},
            {role:1, content:"dadadadada"},  //当前的testData
        ];
        let scene1_npc2_content =[
            {role:2, content:"This is scene1"},
            {role:1, content:"hhhhhhhhh"},  //当前的testData
        ];

        let scene1_npc3_content =[
            {role:2, content:"scene1 npc3"},
            {role:1, content:"jjjjjjjj"},  //当前的testData
        ];
        

        //scene2 contents

        let scene2_npc1_content =[
            {role:2, content:"scene 2 npc1"},
            {role:1, content:"aaaaaaaa"},  //当前的testData
        ];


        
        let scene2_npc2_content =[
            {role:2, content:"scene 2 npc1"},
            {role:1, content:"bbbbbbbbbbbbbbbb"},  //当前的testData
        ];

        let contentsScene1 = new Map();
        contentsScene1['npc1'] = scene1_npc1_content ;
        contentsScene1['npc2'] = scene1_npc2_content ;
        contentsScene1['npc3'] = scene1_npc3_content ;

        Dialog.contents['scene1'] = contentsScene1;

        let contentsScene2 = new Map();
        contentsScene2['npc1'] = scene2_npc1_content ;
        contentsScene2['npc2'] = scene2_npc2_content ;

        Dialog.contents['scene2'] = contentsScene2;
    },

    // update (dt) {},
});
