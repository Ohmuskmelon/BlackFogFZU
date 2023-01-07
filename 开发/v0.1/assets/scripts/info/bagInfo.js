window.TOOLS = [
    {
        name: '晾衣杆',                        // 道具名称，对应resources/tools中的图片名字
        intro: '用来移动移动衣服和背包',                // 道具介绍，当玩家在背包中点击道具后，显示介绍
        picUrl: "tools/晾衣杆" ,               // 动态加载路径
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,
    },
    {
        name: '钥匙',
        intro: '可用来打开舍管的房间',
        picUrl: "tools/钥匙"  ,   
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,         
    },
    {
        name: '蓝色宝石',
        intro: '不知道干什么',
        picUrl: "tools/蓝色宝石"  ,   
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,         
    },
    {
        name: '手机',
        intro: '用来查看大图',
        picUrl: "tools/手机",   
        connect: null,
        numOfCon: 0,
        inBag: false,
        isActive : false,         
    },
];

	
window.toolMap = {
    "晾衣杆"    : 0,
    "钥匙"      : 1,
    "蓝色宝石"  : 2,
    "手机"      : 3,
}
window.Bag = [];
window.InUse = '';
window.ToolUsed = false;
// window.BagBackground = null;
