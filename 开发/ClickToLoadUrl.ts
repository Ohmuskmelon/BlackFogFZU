const { ccclass, property } = cc._decorator;

/**
 * 点击打开网页
 */
@ccclass
export default class ClickToLoadUrl extends cc.Component {

    @property({ multiline: true })
    public url: string = 'https://gitee.com/ifaswind/eazax-ccc';

    @property({ tooltip: CC_DEV && '是否使用新窗口打开' })
    public openInNewTap: boolean = true;

    /**
     * 生命周期：加载
     */
    protected onLoad() {
        this.registerEvent();
    }

    /**
     * 生命周期：销毁
     */
    protected onDestroy() {
        this.unregisterEvent();
    }

    /**
     * 注册事件
     */
    private registerEvent() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
    }

    /**
     * 反注册事件
     */
    private unregisterEvent() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    }

    /**
     * 点击回调
     */
    private onClick() {
        const url = this.url;
        if (!url || url === '') {
            return;
        }
        // 是否使用新窗口打开
        if (this.openInNewTap) {
            // 新窗口打开
            window.open(url);
        } else {
            // 当前窗口打开
            window.location.href = url;
        }
    }

}
