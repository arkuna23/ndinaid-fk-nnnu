const s = {
    ENABLE: 0,
    DISABLE: 1
}, t = {
    DIR: 1,
    MENU: 2,
    BUTTON: 3
}, E = {
    ALL: 1,
    DEPT_CUSTOM: 2,
    DEPT_ONLY: 3,
    DEPT_AND_CHILD: 4,
    DEPT_SELF: 5
}, T = {
    DINGTALK: {
        title: "钉钉",
        type: 20,
        source: "dingtalk",
        img: "https://s1.ax1x.com/2022/05/22/OzMDRs.png"
    },
    WECHAT_ENTERPRISE: {
        title: "企业微信",
        type: 30,
        source: "wechat_enterprise",
        img: "https://s1.ax1x.com/2022/05/22/OzMrzn.png"
    }
}, N = {
    INIT: 0,
    NORMAL: 1,
    STOP: 2
}, a = {
    INIT: 0,
    DONE: 1,
    IGNORE: 2
};

export {
    s as C,
    a as I,
    T as S,
    N as a,
    t as b,
    E as c
};