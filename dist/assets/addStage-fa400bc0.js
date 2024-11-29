import {
    a7 as z,
    f as N,
    U,
    r as m,
    w as k,
    o as n,
    c as r,
    k as j,
    l as A,
    t as d,
    F as g,
    y as b,
    B as h,
    D as F,
    R,
    S as q,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    E as J,
    __tla as K
} from "./el-drawer-fca4d971.js";

import {
    g as L,
    __tla as M
} from "./templateType-4cbca9bc.js";

import {
    a as O
} from "./picSen-0394b184.js";

import {
    _ as Q
} from "./_plugin-vue_export-helper-1b428a4d.js";

let T, W = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})() ]).then(async () => {
    const v = {
        name: "AddStage",
        props: {
            showStatus: {
                type: Boolean,
                default: !1
            },
            showTask: {
                type: Boolean,
                default: !1
            },
            toDo: {
                type: String,
                default: "stageTask"
            }
        },
        setup(l, i) {
            N(() => {
                u();
            });
            const c = U({
                data: [ {
                    label: "代码扫描",
                    link: "kaifa"
                }, {
                    label: "测试",
                    link: "test"
                }, {
                    label: "构建",
                    link: "build"
                }, {
                    label: "测试构建",
                    link: "ceshigou"
                }, {
                    label: "镜像构建",
                    link: "mirror"
                }, {
                    label: "部署",
                    link: "bushu"
                }, {
                    label: "工具",
                    link: "tools"
                } ]
            }), t = m(!1), y = m(), _ = m({
                name: "git-clone",
                resourceType: "git",
                syncType: "init"
            }), p = () => {
                var a;
                z.get({
                    originalData: !0,
                    url: "/env-api/ci-processor/v1beta1/tekton/taskTemplate",
                    params: a
                }).then(s => {
                    s = s.data.items, c.data.forEach(f => {
                        s.forEach(w => {
                            w.metadata.labels["neuedu.com/type"] === f.code && f.items.push(w);
                        });
                    });
                }, s => {});
            }, e = m({
                pageNum: 1,
                pageSize: 10,
                name: "11",
                code: "11",
                type: "1"
            }), u = () => {
                L({
                    type: 1
                }).then(a => {
                    c.data = a.data.records, c.data.forEach(s => {
                        s.link = s.code, s.items = [];
                    }), p();
                }, a => {});
            };
            let o = m(!1);
            return k(() => l.showStatus, a => {
                o.value = a;
            }, {
                deep: !0
            }), k(() => o.value, a => {
                i.emit("update:showStatus", a);
            }, {
                deep: !0
            }), k(() => l.showTask, a => {
                t.value = a;
            }, {
                deep: !0
            }), k(() => t.value, a => {
                i.emit("update:showTask", a);
            }, {
                deep: !0
            }), {
                btnDatas: c,
                taskTempParams: _,
                getTaskTemp: p,
                templateParams: e,
                getTempType: u,
                goTarget: a => {
                    document.getElementById(a).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                },
                drawerVisible: o,
                chooseGroup: a => {
                    l.toDo === "onlystage" && i.emit("addNewStage", a), l.toDo === "stageTask" && i.emit("newCurrent", a), 
                    o.value = !1, t.value = !0;
                },
                curentGroup: y,
                showTaskVisible: t
            };
        }
    }, V = {
        class: "drawerBox"
    }, B = {
        id: "targetBox"
    }, D = {
        class: "btnBox l"
    }, S = [ "onClick" ], x = {
        class: "kindsBox r"
    }, C = [ "id" ], E = {
        class: "title"
    }, G = [ "onClick" ], I = (l => (R("data-v-3e7336a3"), l = l(), q(), l))(() => d("img", {
        src: O,
        alt: "图片"
    }, null, -1)), P = {
        key: 0,
        class: "nothing"
    };
    T = Q(v, [ [ "render", function(l, i, c, t, y, _) {
        const p = J;
        return n(), r("section", V, [ j(p, {
            modelValue: t.drawerVisible,
            "onUpdate:modelValue": i[0] || (i[0] = e => t.drawerVisible = e),
            title: "选择模板",
            size: "600px",
            direction: "rtl",
            "custom-class": "demo-drawer"
        }, {
            default: A(() => [ d("div", B, [ d("section", D, [ (n(!0), r(g, null, b(t.btnDatas.data, e => (n(), 
            r("span", {
                key: e,
                class: "btn",
                onClick: u => t.goTarget(e.link)
            }, h(e.name), 9, S))), 128)) ]), d("ul", x, [ (n(!0), r(g, null, b(t.btnDatas.data, (e, u) => (n(), 
            r("li", {
                id: e.link,
                key: u + "kind",
                class: "kind"
            }, [ d("h1", E, h(e.link), 1), (n(!0), r(g, null, b(e.items, (o, a) => (n(), 
            r("div", {
                key: a,
                class: "item l",
                onClick: s => t.chooseGroup(o)
            }, [ I, d("h2", null, h(o.metadata.name), 1), d("p", null, h(o.apiVersion), 1) ], 8, G))), 128)), e.items.length === 0 ? (n(), 
            r("div", P, "暂无数据")) : F("", !0) ], 8, C))), 128)) ]) ]) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]);
    } ], [ "__scopeId", "data-v-3e7336a3" ] ]);
});

export {
    W as __tla,
    T as default
};