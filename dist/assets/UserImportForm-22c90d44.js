import {
    p as te,
    r as t,
    U as re,
    e as R,
    b9 as se,
    f as oe,
    o as y,
    c as q,
    k as o,
    l as i,
    v as h,
    A as ie,
    C as M,
    a as l,
    F as S,
    y as ne,
    t as p,
    z as ue,
    B,
    m as pe,
    ab as me,
    ac as ce,
    O as de,
    J as _e,
    ch as fe,
    _ as ve,
    Q as be,
    aU as xe,
    a9 as ye,
    R as he,
    S as ge,
    __tla as Ie
} from "./index-6c08ea4c.js";

import {
    _ as we,
    __tla as Ce
} from "./index-13c88727.js";

import {
    __tla as ke
} from "./dict-c5825220.js";

import {
    C as ze,
    s as Ne,
    __tla as Ve
} from "./file-e038b35d.js";

import {
    b as Fe,
    __tla as Ue
} from "./index-736610b8.js";

import {
    i as Le,
    e as Oe,
    __tla as De
} from "./index-d1db0401.js";

import Ee, {
    __tla as Re
} from "./ErrorDialog-c4a6df45.js";

import {
    _ as qe
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Me
} from "./index-c4ca0ced.js";

import {
    __tla as Se
} from "./index-993301ca.js";

import {
    __tla as Be
} from "./index-8b41572c.js";

let $, $e = Promise.all([ (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})() ]).then(async () => {
    let f, C, k, z, N, V, F, U;
    f = v => (he("data-v-590f5d20"), v = v(), ge(), v), C = f(() => p("div", {
        class: "relative"
    }, " 用户角色 ", -1)), k = {
        class: "download-template"
    }, z = {
        class: "import-input"
    }, N = f(() => p("div", {
        class: "import-icon"
    }, null, -1)), V = f(() => p("div", {
        class: "el-upload__text"
    }, " 请将文件拖至此框内，或点击上传文件 ", -1)), F = {
        class: "file-name"
    }, U = {
        class: "file-size"
    }, $ = qe({
        __name: "UserImportForm",
        emits: [ "success" ],
        setup(v, {
            expose: j,
            emit: A
        }) {
            const L = te(), c = t(!1), G = t("导入用户"), g = t(!1), n = t({
                roleIds: [],
                fileName: ""
            }), J = re({
                roleIds: [ {
                    required: !0,
                    message: "请选择用户角色",
                    trigger: [ "blur", "change" ]
                } ],
                fileName: [ {
                    required: !0,
                    message: "请选择导入文件",
                    trigger: [ "blur", "change" ]
                } ]
            }), b = t();
            t(), t([]), t([]);
            const m = t({}), I = t([]), O = t(), D = R(() => [ {
                prop: "number",
                label: "学号/工号"
            }, {
                prop: "nickname",
                label: "用户姓名"
            }, {
                prop: "sex",
                label: "性别"
            }, {
                prop: "mobile",
                label: "手机号"
            }, {
                prop: "email",
                label: "邮箱"
            }, {
                prop: "idCard",
                label: "身份证号"
            }, {
                prop: "joinYear",
                label: "入学年份"
            }, {
                prop: "deptCode",
                label: "组织机构代码"
            }, {
                prop: "deptName",
                label: "组织机构名称"
            }, {
                prop: "inSchoolStatus",
                label: "是否在校/岗"
            }, {
                prop: "remark",
                label: "备注"
            } ]);
            se("tableColumnList", D);
            const E = t([]), w = R(() => {
                var e, a, r;
                if ((e = m.value) != null && e.name) {
                    let s = (a = m.value) == null ? void 0 : a.size, d = "";
                    return d = s / 1024 / 1024 > 1 ? (s / 1024 / 1024).toFixed(1) + "Mb" : s / 1024 > 1 ? (s / 1024).toFixed(1) + "Kb" : s + "B", 
                    {
                        name: (r = m.value) == null ? void 0 : r.name,
                        size: d
                    };
                }
                return {
                    name: "",
                    size: ""
                };
            });
            j({
                open: async () => {
                    c.value = !0, await async function() {
                        let e = await Fe();
                        E.value = e.map(a => ({
                            label: a.name,
                            value: a.id
                        }));
                    }(), W();
                }
            });
            const K = A, P = async () => {
                if (b && await b.value.validate()) {
                    g.value = !0;
                    try {
                        let e = new FormData();
                        e.append("file", m.value), e.append("roleIds", n.value.roleIds);
                        let a = await Le(e);
                        a.data.success ? (L.success("操作成功"), c.value = !1, K("success")) : (I.value = a.data.errorRows, 
                        L.error("导入失败"), O.value.handleOpen());
                    } finally {
                        g.value = !1;
                    }
                }
            }, Q = async () => {
                n.value.tagCode;
                let e = [ {
                    prop: "row",
                    label: "错误行号"
                }, {
                    prop: "errorMsg",
                    label: "错误原因"
                }, ...D.value ], a = [ e.map(r => r.label) ];
                a = a.concat(l(I).map(r => e.map(s => r[s.prop] || ""))), ze(a, "用户导入-错误信息.xlsx");
            };
            function Y() {
                Oe({
                    roleIds: n.value.roleIds
                }).then(e => {
                    Ne(e, "用户导入模板.xls");
                });
            }
            function H(e) {
                let a = !0, r = "";
                e.name.lastIndexOf(".") > -1 && (r = e.name.slice(e.name.lastIndexOf(".") + 1).toLowerCase());
                const s = [ "xls", "xlsx" ].indexOf(r) >= 0, d = e.size / 1024 / 1024;
                return s || (proxy.$modal.msgError("只允许上传 .xls/.xlsx 文件!"), a = !1), 
                d >= 10 && (proxy.$modal.msgError("文件大小限制 10 Mb!"), a = !1), a && function(_, x) {
                    n.value.fileName = _.name, m.value = _;
                }(e), !1;
            }
            function T() {
                n.value.fileName = "", m.value = {};
            }
            const W = () => {
                var e;
                m.value = {}, n.value = {
                    roleIds: [],
                    fileName: ""
                }, (e = b.value) == null || e.resetFields();
            };
            return oe(() => {}), (e, a) => {
                const r = we, s = me, d = ce, _ = de, x = _e, X = fe, Z = ve, ee = be, ae = xe, le = ye;
                return y(), q(S, null, [ o(ae, {
                    modelValue: l(c),
                    "onUpdate:modelValue": a[2] || (a[2] = u => pe(c) ? c.value = u : null),
                    title: l(G),
                    width: "420"
                }, {
                    footer: i(() => [ o(x, {
                        onClick: a[1] || (a[1] = u => c.value = !1)
                    }, {
                        default: i(() => [ h("取 消") ]),
                        _: 1
                    }), o(x, {
                        type: "primary",
                        onClick: P
                    }, {
                        default: i(() => [ h("确 定") ]),
                        _: 1
                    }) ]),
                    default: i(() => [ o(r, {
                        title: "如出现导入失败情况，可下载错误原因信息表，按提示修改后重新导入"
                    }), ie((y(), M(ee, {
                        ref_key: "formRef",
                        ref: b,
                        class: "mt-20px",
                        model: l(n),
                        rules: l(J),
                        size: "large",
                        "label-position": "top",
                        "label-width": "80px",
                        style: {
                            "overflow-x": "hidden"
                        }
                    }, {
                        default: i(() => [ o(_, {
                            label: "用户角色",
                            prop: "roleIds"
                        }, {
                            label: i(() => [ C ]),
                            default: i(() => [ o(d, {
                                modelValue: l(n).roleIds,
                                "onUpdate:modelValue": a[0] || (a[0] = u => l(n).roleIds = u),
                                clearable: "",
                                multiple: "",
                                placeholder: "请选择用户角色（可多选）"
                            }, {
                                default: i(() => [ (y(!0), q(S, null, ne(l(E), u => (y(), 
                                M(s, {
                                    key: u.value,
                                    label: u.label,
                                    value: u.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), o(_, {
                            label: "上传文件",
                            prop: "fileName"
                        }, {
                            default: i(() => [ p("div", k, [ h("请基于系统模板补充信息，单次最多导入10000行 "), o(x, {
                                plain: "",
                                type: "primary",
                                class: "right !px-10px",
                                size: "default",
                                onClick: Y
                            }, {
                                default: i(() => [ h("下载模板") ]),
                                _: 1
                            }) ]), p("div", z, [ o(X, {
                                class: "upload-demo",
                                action: "#",
                                multiple: "",
                                drag: "",
                                limit: 1,
                                accept: ".xls,.xlsx",
                                "before-upload": H
                            }, {
                                default: i(() => [ N, V ]),
                                _: 1
                            }) ]), p("div", {
                                class: ue([ "choose-file-box", l(w).name ? "" : "is-hide" ])
                            }, [ p("div", F, B(l(w).name), 1), p("div", U, B(l(w).size), 1), o(Z, {
                                icon: "ep:close",
                                size: 14,
                                class: "close-btn",
                                onClick: T
                            }) ], 2) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model", "rules" ])), [ [ le, l(g) ] ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), o(Ee, {
                    ref_key: "errorDialogRef",
                    ref: O,
                    tableList: l(I),
                    onDownloadError: Q
                }, null, 8, [ "tableList" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-590f5d20" ] ]);
});

export {
    $e as __tla,
    $ as default
};