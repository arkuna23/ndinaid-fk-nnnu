import {
    r as m,
    u as q,
    T as A,
    j as D,
    o as e,
    c as i,
    a as R,
    t,
    k as o,
    v as a,
    A as L,
    _ as G,
    R as H,
    S as J,
    __tla as K
} from "./index-6c08ea4c.js";

import M, {
    __tla as N
} from "./groupPlan-c8a1e2cb.js";

import Q, {
    __tla as U
} from "./groupPlanStudent-b231b56a.js";

import {
    _ as V
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as X
} from "./el-drawer-fca4d971.js";

import {
    __tla as Y
} from "./el-avatar-76960a98.js";

import {
    __tla as Z
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as $
} from "./DeptTag-1be092ce.js";

import {
    __tla as tt
} from "./index-ef4d146e.js";

import {
    __tla as ot
} from "./index-c834085f.js";

import "./deleteIcon2-388bb348.js";

import {
    __tla as at
} from "./file-e038b35d.js";

import {
    __tla as nt
} from "./planManage-f219d891.js";

import "./planTeacher-e2d2fd81.js";

import "./planStudent-ede44d3c.js";

import {
    __tla as st
} from "./index-d7ee4e02.js";

import {
    __tla as ct
} from "./memberManagement-d6bbbe23.js";

import {
    __tla as lt
} from "./addOneGroupDialog-bb871a2b.js";

import {
    __tla as et
} from "./index-5adb716b.js";

let S, it = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return tt;
    } catch {}
})(), (() => {
    try {
        return ot;
    } catch {}
})(), (() => {
    try {
        return at;
    } catch {}
})(), (() => {
    try {
        return nt;
    } catch {}
})(), (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return ct;
    } catch {}
})(), (() => {
    try {
        return lt;
    } catch {}
})(), (() => {
    try {
        return et;
    } catch {}
})() ]).then(async () => {
    let l, v, d, p, u, f, g, h, y, x, C, I, k, z, B, b, w, P, E;
    l = r => (H("data-v-7d17e051"), r = r(), J(), r), v = {
        id: "loatingWindow"
    }, d = {
        key: 0,
        style: {
            "background-color": "#fff",
            "text-align": "center",
            padding: "5px 3px"
        }
    }, p = l(() => t("div", {
        style: {
            "font-size": "14px",
            "font-weight": "bold",
            "margin-bottom": "5px"
        }
    }, "课堂工具", -1)), u = {
        class: "contentItem"
    }, f = {
        class: "contentItem"
    }, g = {
        class: "contentItem"
    }, h = {
        class: "contentItem"
    }, y = {
        key: 1,
        style: {
            "background-color": "#fff",
            "text-align": "center",
            padding: "5px 3px"
        }
    }, x = l(() => t("div", {
        style: {
            "font-size": "14px",
            "font-weight": "bold",
            "margin-bottom": "5px"
        }
    }, "教学互动", -1)), C = {
        class: "contentItem"
    }, I = {
        class: "contentItem"
    }, k = {
        class: "contentItem"
    }, z = {
        class: "contentItem"
    }, B = {
        class: "contentItem"
    }, b = {
        key: 2,
        class: "content0Box"
    }, w = l(() => t("div", {
        class: "content0BoxIcon content0BoxIcon1"
    }, null, -1)), P = l(() => t("div", {
        style: {
            height: "2px",
            "background-color": "#EFEFEF",
            margin: "5px 0"
        }
    }, null, -1)), E = l(() => t("div", {
        class: "content0BoxIcon content0BoxIcon2"
    }, null, -1)), S = V({
        __name: "loatingWindow",
        setup(r) {
            const F = m(), O = m(), c = m(0);
            q();
            const W = A(), j = () => {
                W.name == "StudentLearnCourse" ? O.value.handleOpen() : F.value.handleOpen(), 
                c.value = 0;
            };
            return (rt, s) => {
                const n = G, T = D("hasPermi");
                return e(), i("div", v, [ R(c) == 1 ? (e(), i("div", d, [ p, t("div", u, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool1",
                    class: "iconClass"
                }), a("投屏") ]), t("div", f, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool2",
                    class: "iconClass"
                }), a("白板") ]), t("div", g, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool3",
                    class: "iconClass"
                }), a("直播") ]), t("div", h, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool4",
                    class: "iconClass"
                }), a("环境") ]), t("div", {
                    class: "contentItem",
                    onClick: s[0] || (s[0] = _ => c.value = 0)
                }, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool0",
                    class: "iconClass"
                }), a("返回") ]) ])) : R(c) == 2 ? (e(), i("div", y, [ x, t("div", C, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool5",
                    class: "iconClass"
                }), a("考勤") ]), t("div", I, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool6",
                    class: "iconClass"
                }), a("提问") ]), t("div", k, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool7",
                    class: "iconClass"
                }), a("抢答") ]), L((e(), i("div", {
                    class: "contentItem",
                    onClick: j
                }, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool8",
                    class: "iconClass"
                }), a("分组") ])), [ [ T, [ "teachmanager:teach-class-group-plan:query", "teachmanager:teach-class-group-plan:create" ] ] ]), t("div", z, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool9",
                    class: "iconClass"
                }), a("讨论") ]), t("div", B, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool10",
                    class: "iconClass"
                }), a("投票") ]), t("div", {
                    class: "contentItem",
                    onClick: s[1] || (s[1] = _ => c.value = 0)
                }, [ o(n, {
                    size: 14,
                    icon: "svg-icon:tool0",
                    class: "iconClass"
                }), a("返回") ]) ])) : (e(), i("div", b, [ t("div", {
                    class: "content0Box_0 content0Box_1",
                    onClick: s[2] || (s[2] = _ => c.value = 1)
                }, [ w, a(" 课堂工具 ") ]), P, t("div", {
                    class: "content0Box_0 content0Box_2",
                    onClick: s[3] || (s[3] = _ => c.value = 2)
                }, [ E, a(" 教学互动 ") ]) ])), o(M, {
                    ref_key: "groupPlanRef",
                    ref: F
                }, null, 512), o(Q, {
                    ref_key: "groupPlanStudentRef",
                    ref: O
                }, null, 512) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-7d17e051" ] ]);
});

export {
    it as __tla,
    S as default
};