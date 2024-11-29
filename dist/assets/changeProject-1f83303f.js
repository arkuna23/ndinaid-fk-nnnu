import {
    h as P,
    e as _,
    u as S,
    T as x,
    r as U,
    f as $,
    o as n,
    C as i,
    l as t,
    k as g,
    c as C,
    F as q,
    y as B,
    a as D,
    v as I,
    B as E,
    t as f,
    _ as F,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    w as T,
    __tla as z
} from "./workItem-20fa3e3c.js";

import {
    _ as A
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as G,
    b as H,
    E as J,
    __tla as K
} from "./index-5adb716b.js";

let j, O = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let d, c;
    d = {
        class: "dropdown-link neu-pointer",
        style: {
            border: "0"
        }
    }, c = {
        class: "select-box left neu-color-blue flex items-center justify-between"
    }, j = A({
        __name: "changeProject",
        props: {
            routeName: {
                type: String,
                default: ""
            }
        },
        setup(h) {
            const r = h, u = P(), y = _(() => u.isStudent), v = _(() => u.getUser.id), l = S(), m = x(), p = U([]), w = e => {
                const {
                    info: a
                } = e, {
                    href: o
                } = l.resolve({
                    name: r.routeName ?? m.name,
                    params: {
                        arrangementId: a.arrangementId,
                        groupId: a.groupId,
                        projectId: a.projectId,
                        teamLeadId: a.groupLeaderUserId
                    }
                });
                y.value ? l.push({
                    name: "Stu_workPanel",
                    query: {
                        arrangementId: a.arrangementId,
                        groupId: a.groupId,
                        projectId: a.projectId,
                        teamLeadId: a.groupLeaderUserId,
                        routeName: r.routeName ? r.routeName : m.name
                    }
                }) : window.open(o, "_blank");
            }, N = e => {
                switch (e.arrangementStatus) {
                  case "5":
                    return `${e.projectName}-\u8FDB\u884C\u4E2D`;

                  case "6":
                    return `${e.projectName}-\u5DF2\u7ED3\u675F`;

                  case "7":
                    return `${e.projectName}-\u5DF2\u5F52\u6863`;

                  default:
                    return e.projectName;
                }
            };
            return $(() => {
                T.getStudentProjectList(v.value).then(e => {
                    p.value = e.data || [];
                });
            }), (e, a) => {
                const o = F, b = G, k = H, L = J;
                return n(), i(L, {
                    trigger: "click",
                    onCommand: w,
                    class: "changeProjectDropdown",
                    teleported: !1
                }, {
                    dropdown: t(() => [ g(k, {
                        class: "typeMenu"
                    }, {
                        default: t(() => [ (n(!0), C(q, null, B(D(p), s => (n(), 
                        i(b, {
                            key: s.projectId,
                            command: {
                                info: s
                            }
                        }, {
                            default: t(() => [ I(E(N(s)), 1) ]),
                            _: 2
                        }, 1032, [ "command" ]))), 128)) ]),
                        _: 1
                    }) ]),
                    default: t(() => [ f("div", d, [ f("div", c, [ g(o, {
                        icon: "svg-icon:change",
                        class: "mr-2"
                    }), I("切换项目 ") ]) ]) ]),
                    _: 1
                });
            };
        }
    }, [ [ "__scopeId", "data-v-1614b2ba" ] ]);
});

export {
    O as __tla,
    j as default
};