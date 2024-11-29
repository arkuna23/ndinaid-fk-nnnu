const a = {
    statusLists: [ {
        label: "未开始",
        value: "0"
    }, {
        label: "进行中",
        value: "1"
    }, {
        label: "已完成",
        value: "2"
    }, {
        label: "已解决",
        value: "3"
    }, {
        label: "已拒绝",
        value: "4"
    }, {
        label: "已关闭",
        value: "5"
    } ],
    typeList: {
        3: "需求",
        4: "设计",
        5: "开发",
        6: "测试",
        99: "缺陷"
    },
    stepList: {
        1: "需求分析阶段",
        2: "系统设计阶段",
        3: "代码实现阶段",
        4: "系统测试阶段"
    },
    stepSelectList: [ {
        label: "需求分析阶段",
        value: "2"
    }, {
        label: "系统设计阶段",
        value: "3"
    }, {
        label: "代码实现阶段",
        value: "4"
    }, {
        label: "系统测试阶段",
        value: "5"
    } ],
    levelList: {
        1: "低",
        2: "中",
        3: "高"
    },
    importanceList: {
        1: "关键",
        2: "重要",
        3: "一般",
        4: "提示"
    },
    trialStautsList: {
        0: "未开始",
        1: "进行中",
        3: "已解决",
        4: "已拒绝",
        5: "已关闭"
    },
    dbConfigList: {
        1: "创建成功",
        2: "创建中",
        3: "创建失败"
    },
    typeResList: {
        WD: "文档",
        TP: "图片",
        YP: "音频",
        LJ: "链接",
        MD: "markdown",
        YS: "压缩包",
        QT: "其他",
        SP: "视频"
    },
    getNameByCode: (l, e) => l[e] || ""
};

export {
    a as l
};