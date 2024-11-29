import {
    _ as F,
    __tla as S
} from "./ContentPage-f6bcc98e.js";

import {
    p as N,
    r as $,
    f as j,
    o as q,
    C as z,
    l as s,
    t as r,
    k as e,
    a as k,
    v as _,
    bB as A,
    bp as B,
    bq as I,
    R as P,
    S as R,
    __tla as D
} from "./index-6c08ea4c.js";

import {
    _ as E,
    __tla as G
} from "./index-13c88727.js";

import {
    az as H,
    aA as J,
    __tla as K
} from "./index-9567cbf6.js";

import {
    _ as L
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, M = Promise.all([ (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let n, v, C, g, f, h, w, p;
    n = o => (P("data-v-45b707ba"), o = o(), R(), o), v = n(() => r("div", {
        class: "setting-title pt-10px"
    }, " 教师权限设置 ", -1)), C = {
        class: "setting-item"
    }, g = n(() => r("div", {
        class: "setting-item-label"
    }, "是否允许教师自建教学安排", -1)), f = {
        class: "setting-item-value"
    }, h = {
        class: "setting-item"
    }, w = n(() => r("div", {
        class: "setting-item-label"
    }, "是否允许教师新建课程信息", -1)), p = {
        class: "setting-item-value"
    }, x = L({
        __name: "index",
        setup(o) {
            const y = N(), t = $({
                id: "",
                allowCreateTeacharrangement: 0,
                allowCreateCourse: 0
            }), u = async (l, a) => {
                if (t.value[l === "1" ? "allowCreateTeacharrangement" : "allowCreateCourse"] !== a) try {
                    let c = l === "1" ? "新建教学安排" : "新建课程", i = a === 1 ? "启用" : "禁用";
                    await y.confirm(`\u662F\u5426${i}\u6559\u5E08\u7684${c}\u6743\u9650\uFF1F`);
                    let d = {
                        id: t.value.id,
                        allowCreateCourse: l === "2" ? Number(a) : t.value.allowCreateCourse,
                        allowCreateTeacharrangement: l === "1" ? Number(a) : t.value.allowCreateTeacharrangement
                    };
                    await H(d), y.success("操作成功！"), b();
                } catch {}
            }, b = () => {
                J({
                    id: A()
                }).then(l => {
                    t.value = {
                        ...l
                    };
                });
            };
            return j(() => {
                b();
            }), (l, a) => {
                const c = E, i = B, d = I, T = F;
                return q(), z(T, {
                    class: "teaching-setting"
                }, {
                    default: s(() => [ v, r("div", C, [ g, e(c, {
                        isStudentFlag: "1",
                        title: "开启后租户下所有拥有教师权限的用户可自主创建教学安排（否则教师开展授课必须依赖于管理者创建并发布的教学安排），创建完毕后管理端教学管理-教学安排菜单下同步可见",
                        width: "620px"
                    }), r("div", f, [ e(d, {
                        "model-value": k(t).allowCreateTeacharrangement,
                        readonly: ""
                    }, {
                        default: s(() => [ e(i, {
                            value: 1,
                            readonly: "",
                            onClick: a[0] || (a[0] = m => u("1", 1))
                        }, {
                            default: s(() => [ _("允许") ]),
                            _: 1
                        }), e(i, {
                            value: 0,
                            readonly: "",
                            onClick: a[1] || (a[1] = m => u("1", 0))
                        }, {
                            default: s(() => [ _("不允许") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model-value" ]) ]) ]), r("div", h, [ w, e(c, {
                        isStudentFlag: "1",
                        title: "开启后租户下所有拥有教师权限的用户在自主创建教学安排时可快速新建课程信息（否则教师新建教学安排时必须从管理者维护的课程信息库内选择课程），创建完毕后管理端教学管理-课程信息菜单下同步可见",
                        width: "620px"
                    }), r("div", p, [ e(d, {
                        "model-value": k(t).allowCreateCourse,
                        readonly: ""
                    }, {
                        default: s(() => [ e(i, {
                            value: 1,
                            readonly: "",
                            onClick: a[2] || (a[2] = m => u("2", 1))
                        }, {
                            default: s(() => [ _("允许") ]),
                            _: 1
                        }), e(i, {
                            value: 0,
                            readonly: "",
                            onClick: a[3] || (a[3] = m => u("2", 0))
                        }, {
                            default: s(() => [ _("不允许") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model-value" ]) ]) ]) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-45b707ba" ] ]);
});

export {
    M as __tla,
    x as default
};