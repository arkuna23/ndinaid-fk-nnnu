import {
    eg as O,
    eh as R,
    ei as z,
    T as G,
    p as H,
    f as J,
    U as y,
    r as d,
    w as K,
    aT as p,
    o as h,
    c as f,
    t as s,
    k as c,
    v as _,
    B as T,
    F as C,
    y as b,
    x as Q,
    R as W,
    S as X,
    __tla as Y
} from "./index-6c08ea4c.js";

import Z, {
    __tla as $
} from "./addStage-fa400bc0.js";

import aa, {
    __tla as ea
} from "./editTask-8523e0be.js";

import {
    _ as sa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ta
} from "./el-drawer-fca4d971.js";

import {
    __tla as la
} from "./templateType-4cbca9bc.js";

import "./picSen-0394b184.js";

let x, oa = Promise.all([ (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})() ]).then(async () => {
    const B = {
        name: "index",
        components: {
            Connection: O,
            DeleteFilled: R,
            CirclePlusFilled: z,
            addStage: Z,
            editTask: aa
        },
        props: {
            flowName: {
                type: String,
                default: ""
            },
            pipeConfig: {
                type: Object,
                default: () => ({})
            }
        },
        setup(n) {
            G().query;
            const t = H();
            J(() => {
                l.stage = n.pipeConfig.spec.storages, k.value = n.pipeConfig.spec.workspaces;
            });
            let l = y({
                stage: []
            });
            const a = d(!1), g = d(!1), v = d({}), S = y({
                name: ""
            }), r = d(0);
            let i = d("onlystage");
            const w = d({});
            let k = d([]);
            return K(() => n.pipeConfig, e => {
                l.stage = e.spec.storages, k.value = e.spec.workspaces;
            }, {
                deep: !0
            }), {
                flowDatas: l,
                drawerVisible: a,
                taskDrawerVisible: g,
                newStage: S,
                showEditTask: e => {
                    g.value = !0, v.value = e, i.value = "editTask";
                },
                showAddStage: (e, o) => {
                    l.stage[o].length > 0 ? t.error("暂未开放并行任务") : (i.value = e, 
                    a.value = !0, r.value = o);
                },
                taskInfo: v,
                todoStr: i,
                onlyStage: (e, o) => {
                    a.value = !0, i.value = e, r.value = o;
                },
                delStage: e => {
                    l.stage.splice(e, 1);
                },
                currentAddIndex: r,
                curentItem: w,
                addNewStage: e => {
                    l.stage.splice(r.value, 0, []), w.value = e;
                },
                addNewTask: async e => {
                    await l.stage[r.value].push(e), g.value = !1;
                },
                editTaskFunc: () => {
                    g.value = !1;
                },
                workVal: k,
                newCurrent: e => {
                    w.value = e;
                }
            };
        }
    }, m = n => (W("data-v-b0443fe9"), n = n(), X(), n), N = {
        id: "flowBox"
    }, D = {
        id: "root",
        class: "stageBox box l"
    }, F = m(() => s("h1", {
        class: "stageTitle"
    }, [ s("b", null, "项目源") ], -1)), I = {
        class: "lineBox"
    }, V = {
        class: "round-root"
    }, A = {
        class: "stageTitle"
    }, U = [ "onClick" ], E = {
        class: "lineBox addLineBox"
    }, P = [ "onClick" ], j = {
        class: "stageBox l addStage"
    }, q = m(() => s("h1", {
        class: "stageTitle"
    }, "添加新阶段", -1)), L = {
        class: "lineBox"
    }, M = {
        id: "drawerMask",
        style: {
            width: "100%",
            heiht: "100%",
            position: "relative"
        }
    };
    x = sa(B, [ [ "render", function(n, t, l, a, g, v) {
        const S = p("Connection"), r = p("DeleteFilled"), i = p("CirclePlusFilled"), w = p("addStage"), k = p("editTask");
        return h(), f("div", N, [ s("div", {
            id: "taskFather",
            style: Q({
                width: 406 * a.flowDatas.stage.length + 811 + "px"
            })
        }, [ s("section", D, [ F, s("ul", null, [ s("li", I, [ s("button", V, [ c(S, {
            class: "iconTag"
        }), _(" " + T(l.flowName), 1) ]) ]) ]) ]), (h(!0), f(C, null, b(a.flowDatas.stage, (e, o) => (h(), 
        f("section", {
            key: e,
            class: "stageBox l"
        }, [ s("h1", A, [ s("span", null, [ _("第" + T(o + 1) + "阶段 ", 1), c(r, {
            class: "delStage",
            onClick: u => a.delStage(o)
        }, null, 8, [ "onClick" ]) ]) ]), c(i, {
            class: "addStageBtn",
            onClick: u => a.onlyStage("onlystage", o)
        }, null, 8, [ "onClick" ]), s("ul", null, [ (h(!0), f(C, null, b(e, u => (h(), 
        f("li", {
            key: u,
            class: "lineBox"
        }, [ s("button", {
            class: "round-blue",
            onClick: na => a.showEditTask(u)
        }, T(u.name), 9, U) ]))), 128)), s("li", E, [ s("button", {
            class: "round-grey addTaskBtn",
            onClick: u => a.showAddStage("stageTask", o)
        }, [ c(i, {
            class: "iconTag"
        }), _(" 并行任务 ") ], 8, P) ]) ]) ]))), 128)), s("section", j, [ q, s("ul", null, [ s("li", L, [ s("button", {
            class: "round-grey",
            onClick: t[0] || (t[0] = e => a.onlyStage("onlystage", a.flowDatas.stage.length))
        }, [ c(i, {
            class: "iconTag"
        }), _(" 新的任务 ") ]) ]) ]) ]) ], 4), s("div", M, [ c(w, {
            "show-status": a.drawerVisible,
            "onUpdate:showStatus": t[1] || (t[1] = e => a.drawerVisible = e),
            "show-task": a.taskDrawerVisible,
            "onUpdate:showTask": t[2] || (t[2] = e => a.taskDrawerVisible = e),
            "to-do": a.todoStr,
            onAddNewStage: a.addNewStage,
            onNewCurrent: a.newCurrent
        }, null, 8, [ "show-status", "show-task", "to-do", "onAddNewStage", "onNewCurrent" ]), c(k, {
            "show-status": a.taskDrawerVisible,
            "onUpdate:showStatus": t[3] || (t[3] = e => a.taskDrawerVisible = e),
            taskInfo: a.taskInfo,
            "onUpdate:taskInfo": t[4] || (t[4] = e => a.taskInfo = e),
            "curent-item": a.curentItem,
            "to-do": a.todoStr,
            "work-val": a.workVal,
            onAddNewTask: a.addNewTask,
            onEditTaskFunc: a.editTaskFunc
        }, null, 8, [ "show-status", "taskInfo", "curent-item", "to-do", "work-val", "onAddNewTask", "onEditTaskFunc" ]) ]) ]);
    } ], [ "__scopeId", "data-v-b0443fe9" ] ]);
});

export {
    oa as __tla,
    x as default
};