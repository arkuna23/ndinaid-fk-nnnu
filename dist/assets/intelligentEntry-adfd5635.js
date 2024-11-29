import {
    p as j,
    b8 as Q,
    r as v,
    o as G,
    c as H,
    k as c,
    l as u,
    v as m,
    t as a,
    a as K,
    m as W,
    _ as X,
    ch as Y,
    J as Z,
    aU as $,
    R as aa,
    S as la,
    __tla as ea
} from "./index-6c08ea4c.js";

import {
    M as P,
    __tla as sa
} from "./myQuestionBank-a9dcc9db.js";

import {
    s as ta,
    __tla as na
} from "./file-e038b35d.js";

import {
    _ as oa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let V, ia = Promise.all([ (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})() ]).then(async () => {
    let n, h, f, x, C, w, y, B, b, g, E, F, T, k, D;
    n = p => (aa("data-v-27118b96"), p = p(), la(), p), h = {
        class: "importPopupContent"
    }, f = {
        class: "stencil"
    }, x = n(() => a("div", {
        class: "stencilText"
    }, "文件模版", -1)), C = {
        class: "stencilContent"
    }, w = {
        class: "stencilContentExcel"
    }, y = n(() => a("span", {
        class: "excel"
    }, null, -1)), B = {
        class: "uploadBusiness"
    }, b = n(() => a("div", {
        class: "uploadBusinessText"
    }, "上传文件", -1)), g = {
        class: "uploadBusinessContent"
    }, E = {
        class: "tipContent"
    }, F = {
        class: "svg"
    }, T = n(() => a("span", {
        class: "tipText1"
    }, "点击上传或拖拽文件到这", -1)), k = n(() => a("span", {
        class: "tipText2"
    }, "支持文件类型：xls", -1)), D = n(() => a("div", {
        class: "uploadBusinessTips"
    }, [ a("p", null, "批量导入说明："), a("p", null, "1.支持批量导入试题类型：单选题、多选题、填空题、判断题、问答题"), a("p", null, "2.建议按多次、少量导入，方便检查试题"), a("p", null, "3.导入后试题如果有误，可以直接在输入区编辑，也可以重新上传附件"), a("p", null, "4.模板中的sheet页请勿修改或删除") ], -1)), 
    V = oa({
        __name: "intelligentEntry",
        emits: [ "inputData" ],
        setup(p, {
            expose: A,
            emit: L
        }) {
            const _ = j();
            Q();
            const i = v(!1), o = v(null), N = v([ "xls" ]), d = v(), R = L;
            function S(l, e) {
                if (d.value) {
                    const s = new FormData();
                    s.append("file", d.value.raw), P.intelligentEntryApi(s).then(t => {
                        R("inputData", t.data), l && l();
                    }).catch(() => {
                        e && e(), o.value.clearFiles(), d.value = "";
                    });
                } else e && e(), _.error("请上传文件"), o.value.clearFiles();
            }
            const U = l => {
                let e = l[0];
                z(e).then(s => {
                    var t, r;
                    (t = o.value) == null || t.clearFiles(), (r = o.value) == null || r.handleStart(s);
                }).catch(() => {});
            }, q = () => {
                P.questionsTemplateApi().then(l => {
                    l.code && l.code === 500 || ta(l, l.fileName || "试题模版.xls");
                });
            }, z = l => new Promise((e, s) => {
                const t = l.name.toLowerCase().split(".").pop();
                N.value.includes(t) || (_.error("支持文件类型：xls"), s(new Error("支持文件类型：xls"))), 
                l.size > 2097152 ? (_.error("文件大小不能超过2MB"), s(new Error("文件大小不能超过2MB"))) : e(l);
            }), J = l => {
                z(l).then(e => (d.value = l, !0)).catch(() => (o.value.clearFiles(), 
                !1));
            }, I = () => {
                o.value.clearFiles();
            };
            return A({
                handleOpenBatchImport: () => {
                    i.value = !0;
                },
                handleCloseBatchImport: () => {
                    i.value = !1;
                }
            }), (l, e) => {
                const s = X, t = Y, r = Z, O = $;
                return G(), H("div", null, [ c(O, {
                    modelValue: K(i),
                    "onUpdate:modelValue": [ e[1] || (e[1] = M => W(i) ? i.value = M : null), I ],
                    width: "500px",
                    onClose: I,
                    onSubmitNow: S,
                    title: "批量导入"
                }, {
                    footer: u(() => [ c(r, {
                        type: "primary",
                        onClick: S
                    }, {
                        default: u(() => [ m(" 确认 ") ]),
                        _: 1
                    }), c(r, {
                        onClick: e[0] || (e[0] = M => i.value = !1)
                    }, {
                        default: u(() => [ m("取消") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ a("div", h, [ a("div", f, [ x, a("div", C, [ a("div", w, [ y, a("span", {
                        class: "btn",
                        onClick: q
                    }, [ c(s, {
                        size: 16,
                        icon: "svg-icon:btnDownLoad"
                    }), m(" 下载Excel模板") ]) ]) ]) ]), a("div", B, [ b, a("div", g, [ c(t, {
                        ref_key: "uploadBusinessRef",
                        ref: o,
                        onChange: J,
                        "on-exceed": U,
                        "auto-upload": !1,
                        accept: ".xls",
                        "show-file-list": !0,
                        limit: 1,
                        drag: "",
                        action: "#",
                        multiple: ""
                    }, {
                        default: u(() => [ a("div", E, [ a("span", F, [ c(s, {
                            size: 16,
                            icon: "svg-icon:upload"
                        }) ]), T, k ]) ]),
                        _: 1
                    }, 512) ]), D ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-27118b96" ] ]);
});

export {
    ia as __tla,
    V as default
};