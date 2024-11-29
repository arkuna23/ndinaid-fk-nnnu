import {
    _ as fe,
    __tla as _e
} from "./index-1344e56b.js";

import {
    u as me,
    e as Z,
    a as l,
    aa as ye,
    p as ke,
    a0 as ve,
    r as d,
    f as he,
    o as _,
    c as q,
    t as r,
    v as n,
    aI as j,
    C as g,
    l as c,
    k as t,
    D as k,
    I as ge,
    z as be,
    B as A,
    H as xe,
    F as Ce,
    _ as we,
    J as Ie,
    P as Re,
    Z as Fe,
    R as je,
    S as Se,
    __tla as Be
} from "./index-6c08ea4c.js";

import {
    g as Te,
    a as Ve,
    d as ze,
    u as Ee,
    __tla as Oe
} from "./judge-7c842b3d.js";

import {
    __tla as $e
} from "./file-e038b35d.js";

import {
    h as Pe
} from "./tree-05ea8e09.js";

import Ue, {
    __tla as De
} from "./DialogFolder-d3faf259.js";

import He, {
    __tla as Je
} from "./DialogFile-2ada654c.js";

import Ke, {
    __tla as Le
} from "./DialogFileUpload-721cf92c.js";

import {
    _ as Me
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    a as Ne,
    b as Xe,
    E as Ze,
    __tla as qe
} from "./index-5adb716b.js";

let G, Ae = Promise.all([ (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    let S, B, T, V, z, E, O, $, P, U, D;
    S = {
        class: "left-box"
    }, B = {
        class: "left-title"
    }, T = {
        class: "add-btn"
    }, V = {
        class: "left-search"
    }, z = (m => (je("data-v-0b9ac887"), m = m(), Se(), m))(() => r("div", {
        class: "left-alert mb-10px"
    }, [ n(" 提示： "), r("br"), n(" 如果评测文件与学员文件一致，则根据不同语言类型文件名必须为：main.c、main.cppmain.cpp、Main.java、main.go、script.py、script.js； "), r("br"), n(" 如果测评文件与学员文件不一致，则无此要求，但不支持包结构，并且使用过程中评测文件于学员文件必须属于同一文件夹。 ") ], -1)), 
    E = {
        class: "custom-tree-node"
    }, O = {
        class: "right-box"
    }, $ = {
        class: "save-btn"
    }, P = {
        class: "code-page"
    }, U = {
        class: "code-title"
    }, D = {
        class: "folder"
    }, G = Me({
        __name: "ComCodeRepositiorySetting",
        props: {
            groupId: {
                type: String,
                default: ""
            },
            isEdit: {
                type: Boolean,
                default: !1
            }
        },
        setup(m, {
            expose: Q
        }) {
            const W = me(), Y = Z(() => l(W.currentRoute));
            Z(() => l(Y).path.indexOf("/public/") >= 0), ye();
            const b = ke(), p = m, {
                isEdit: v
            } = ve(p), x = d(!1), H = d([]), J = d(), K = d(), L = d(), h = d(), M = d(), C = d({}), w = d({
                keywords: ""
            }), u = d({
                id: "",
                code: "",
                name: ""
            }), ee = d({
                children: "children",
                label: "name",
                isLeaf: (e, a) => e.fileType === "0",
                class: (e, a) => (e.fileType === "1" ? "code-folder" : "code-file") + (e.id === l(C).id ? " is-active-node" : "") + ` level-${a.level}`
            }), ae = e => {
                var a, s, o;
                switch (e) {
                  case 0:
                    (a = L.value) == null || a.open("create", p.groupId);
                    break;

                  case 1:
                    (s = K.value) == null || s.open("create", p.groupId);
                    break;

                  case 2:
                    (o = h.value) == null || o.open("create", p.groupId);
                }
            };
            function te() {
                x.value = !0;
            }
            function le() {
                x.value = !1;
            }
            const se = async (e, a) => {
                var s, o;
                if (C.value = e, e.fileType === "0") {
                    const i = await Te(e.id);
                    u.value = {
                        id: ((s = i.judgeFile) == null ? void 0 : s.id) || "",
                        code: i.content || "",
                        name: ((o = i.judgeFile) == null ? void 0 : o.name) || "",
                        info: {
                            ...i.judgeFile || {}
                        }
                    };
                } else u.value = {
                    id: "",
                    code: "",
                    name: ""
                };
            }, I = () => {
                var e;
                (e = J.value) == null || e.filter(l(w));
            }, f = () => {
                Ve(p.groupId).then(e => {
                    H.value = Pe(e);
                });
            }, oe = (e = {
                keywords: ""
            }, a) => !e.keywords || a.name.includes(e.keywords), R = (e, a) => {
                var s, o;
                switch (e) {
                  case "create":
                    C.value = a, (s = h.value) == null || s.open("create", p.groupId, a.id);
                    break;

                  case "update":
                    (o = h.value) == null || o.open("update", p.groupId, a.id, a.name);
                    break;

                  case "delete":
                    re(a.id);
                }
            }, re = async e => {
                try {
                    await b.delConfirm(), await ze(e), b.success("操作成功"), f();
                } catch {}
            }, N = () => {
                var e;
                return ((e = l(M)) == null ? void 0 : e.getValue()) || "";
            }, ce = async () => {
                try {
                    const e = N();
                    await Ee({
                        judgeFile: u.value.info,
                        content: e
                    }), b.success("操作成功"), f();
                } catch {}
            };
            return Q({
                getValue: N
            }), he(() => {
                f();
            }), (e, a) => {
                const s = we, o = Ie, i = Ne, de = Xe, ne = Ze, ie = Re, pe = Fe, ue = fe;
                return _(), q(Ce, null, [ r("div", S, [ r("div", B, [ n(" 文件列表 "), r("div", T, [ j(e.$slots, "leftBtn", {}, () => [ l(v) ? (_(), 
                g(ne, {
                    key: 0,
                    teleported: !1,
                    trigger: "hover",
                    class: "add-btn",
                    onCommand: ae
                }, {
                    dropdown: c(() => [ t(de, null, {
                        default: c(() => [ t(i, {
                            command: 0
                        }, {
                            default: c(() => [ n("上传文件") ]),
                            _: 1
                        }), t(i, {
                            command: 2
                        }, {
                            default: c(() => [ n("新建文件") ]),
                            _: 1
                        }), t(i, {
                            command: 1
                        }, {
                            default: c(() => [ n("新建文件夹") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    default: c(() => [ t(o, {
                        type: "primary",
                        size: "default",
                        class: "!px-10px"
                    }, {
                        default: c(() => [ t(s, {
                            icon: "ep:plus",
                            class: "mr-5px"
                        }), n(" 新建 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : k("", !0) ], !0) ]) ]), r("div", V, [ t(ie, {
                    size: "large",
                    modelValue: l(w).keywords,
                    "onUpdate:modelValue": a[0] || (a[0] = F => l(w).keywords = F),
                    placeholder: "请输入关键字",
                    onKeyup: ge(I, [ "enter" ]),
                    onClear: I,
                    onFocus: te,
                    onBlur: le,
                    class: be([ "left search-keywords", l(x) ? "is-focus" : "" ]),
                    clearable: ""
                }, {
                    append: c(() => [ t(s, {
                        icon: "ep:search",
                        class: "pointer",
                        onClick: I
                    }) ]),
                    _: 1
                }, 8, [ "modelValue", "class" ]) ]), z, t(pe, {
                    data: l(H),
                    props: l(ee),
                    onNodeClick: se,
                    ref_key: "treeRef",
                    ref: J,
                    class: "task-tree",
                    "default-expand-all": "",
                    "filter-node-method": oe,
                    "node-key": "id",
                    indent: 12
                }, {
                    default: c(({
                        node: F,
                        data: y
                    }) => [ r("div", E, [ n(A(F.label) + " ", 1), l(v) ? (_(), q("div", {
                        key: 0,
                        class: "tree-btns-box",
                        onClick: a[1] || (a[1] = xe(() => {}, [ "stop" ]))
                    }, [ y.fileType === "1" ? (_(), g(o, {
                        key: 0,
                        link: "",
                        type: "primary",
                        onClick: X => R("create", y)
                    }, {
                        default: c(() => [ t(s, {
                            icon: "ep:plus"
                        }) ]),
                        _: 2
                    }, 1032, [ "onClick" ])) : k("", !0), y.fileType !== "1" ? (_(), 
                    g(o, {
                        key: 1,
                        link: "",
                        type: "primary",
                        class: "!ml-4px",
                        onClick: X => R("update", y)
                    }, {
                        default: c(() => [ t(s, {
                            icon: "ep:edit"
                        }) ]),
                        _: 2
                    }, 1032, [ "onClick" ])) : k("", !0), t(o, {
                        link: "",
                        type: "danger",
                        class: "!ml-4px",
                        onClick: X => R("delete", y)
                    }, {
                        default: c(() => [ t(s, {
                            icon: "ep:delete"
                        }) ]),
                        _: 2
                    }, 1032, [ "onClick" ]) ])) : k("", !0) ]) ]),
                    _: 1
                }, 8, [ "data", "props" ]) ]), r("div", O, [ r("div", $, [ j(e.$slots, "rightBtn", {}, () => [ l(v) && l(u).id ? (_(), 
                g(o, {
                    key: 0,
                    type: "primary",
                    size: "default",
                    class: "!px-10px",
                    onClick: ce
                }, {
                    default: c(() => [ n("保存") ]),
                    _: 1
                })) : k("", !0) ], !0) ]), r("div", P, [ r("div", U, [ j(e.$slots, "header", {}, () => [ r("div", D, [ t(s, {
                    icon: "fa:code",
                    class: "icon"
                }), r("span", null, A(l(u).name || "代码文件"), 1) ]) ], !0) ]), t(ue, {
                    ref_key: "codeEditorRef",
                    ref: M,
                    code: l(u).code,
                    readOnly: !l(v)
                }, null, 8, [ "code", "readOnly" ]) ]) ]), t(Ue, {
                    ref_key: "formFolderRef",
                    ref: K,
                    onSuccess: f
                }, null, 512), t(Ke, {
                    ref_key: "formUploadRef",
                    ref: L,
                    onSuccess: f
                }, null, 512), t(He, {
                    ref_key: "formFileRef",
                    ref: h,
                    onSuccess: f
                }, null, 512) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-0b9ac887" ] ]);
});

export {
    Ae as __tla,
    G as default
};