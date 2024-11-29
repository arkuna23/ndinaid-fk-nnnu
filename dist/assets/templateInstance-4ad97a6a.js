import {
    _ as L,
    __tla as M
} from "./ContentPage-f6bcc98e.js";

import {
    a7 as B,
    dU as Q,
    f as R,
    u as S,
    T as F,
    p as G,
    r as h,
    U as H,
    w as K,
    aT as T,
    o as P,
    C as D,
    l as I,
    t as _,
    k as c,
    v as N,
    D as E,
    aQ as O,
    M as W,
    s as X,
    J as Y,
    R as Z,
    S as $,
    __tla as aa
} from "./index-6c08ea4c.js";

import ea, {
    __tla as ta
} from "./baseInfo-b3296cac.js";

import sa, {
    __tla as la
} from "./index-e6888e70.js";

import ra, {
    __tla as ia
} from "./varAndCache-70db7434.js";

import {
    e as na,
    __tla as oa
} from "./pipelineManage-fe91e90c.js";

import {
    _ as pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as ca
} from "./taskManage-5f71a641.js";

import {
    __tla as ma
} from "./templateType-4cbca9bc.js";

import {
    __tla as da
} from "./addStage-fa400bc0.js";

import {
    __tla as ua
} from "./el-drawer-fca4d971.js";

import "./picSen-0394b184.js";

import {
    __tla as _a
} from "./editTask-8523e0be.js";

let U, fa = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ua;
    } catch {}
})(), (() => {
    try {
        return _a;
    } catch {}
})() ]).then(async () => {
    const q = {
        name: "TemplateInstance",
        components: {
            Back: Q,
            baseInfo: ea,
            workflowConfig: sa,
            varAndCache: ra
        },
        setup() {
            R(() => {
                i !== "edit" && i !== "lineEdit" || d();
            });
            const n = S(), l = F(), f = G(), e = h("first"), {
                purpose: i
            } = l.query;
            let g = {};
            const k = () => {
                g = t.value.spec.storages;
                const s = t.value.spec.storages;
                let a = [], b = null;
                s.forEach((p, w) => {
                    p.length > 0 && w == 0 ? p[0].runAfter = null : p.length > 0 && w > 0 && (p[0].runAfter = [ b ]), 
                    a = a.concat(p[0]), p.length > 0 && (b = p[0].name);
                }), delete t.value.spec.storages, t.value.spec.tasks = a;
            }, C = () => {
                var s;
                (s = t.value, B.post({
                    originalData: !0,
                    url: "/env-api/ci-processor/v1beta1/tekton/pipelineTemplate",
                    data: s
                })).then(a => {
                    o.name = t.value.metadata.name, o.namespace = t.value.metadata.namespace, 
                    a.code == 200 && (f.success("新增成功"), n.push({
                        name: "PipelineTemplate"
                    })), d();
                }, a => {});
            }, m = () => {
                var s;
                (s = t.value, B.patch({
                    originalData: !0,
                    url: "/env-api/ci-processor/v1beta1/tekton/pipelineTemplate",
                    data: s
                })).then(a => {
                    o.name = t.value.metadata.name, o.namespace = t.value.metadata.namespace, 
                    a.code == 200 && (f.success("修改成功"), n.push("/system/pipelineConfig?activeIndex=4")), 
                    d();
                }, a => {});
            }, y = () => {
                alert("目前还不能编辑流水线");
            };
            let o = H({
                name: l.query.name,
                namespace: l.query.namespace
            });
            const d = () => {
                var s;
                i === "edit" ? (s = o, B.get({
                    originalData: !0,
                    url: "/env-api/ci-processor/v1beta1/tekton/pipelineTemplateVo",
                    params: s
                })).then(a => {
                    a = a.data, t.value = a, v.value = [ ...a.spec.workspaces ];
                }, a => {}) : i === "lineEdit" && na(o).then(a => {
                    a = a.data, t.value = a, v.value = [ ...a.spec.workspaces ];
                }, a => {});
            };
            let v = h({}), t = h({
                metadata: {
                    name: "",
                    namespace: "",
                    labels: {
                        "neuedu.com/syncType": "",
                        "neuedu.com/type": ""
                    }
                },
                spec: {
                    params: [],
                    storages: [],
                    workspaces: []
                }
            });
            const u = h(!0), r = h(!0);
            return K(() => t.value, s => {
                const {
                    name: a
                } = s.metadata, b = s.metadata.labels["neuedu.com/type"], p = s.metadata.labels["neuedu.com/syncType"];
                u.value = a === "" || b === "" || p === "";
                const {
                    params: w
                } = s.spec, {
                    workspaces: J
                } = s.spec;
                w.length == 0 || J.length == 0 ? r.value = !0 : r.value = !1;
            }, {
                deep: !0
            }), {
                purpose: i,
                activeName: e,
                goBack: () => {
                    i === "create" || i === "edit" ? n.push({
                        path: "/flowline",
                        query: {
                            activeIndex: 4
                        }
                    }) : i === "lineEdit" && n.push({
                        name: "PipelineTemplate"
                    });
                },
                handleClick: s => {
                    const a = s.props;
                    u.value === !0 && (a.name != "second" && a.name != "third" || f.error("请完善基本信息!")), 
                    u.value === !1 && r.value === !0 && a.name == "second" && f.error("流水线至少有一个变量和缓存！");
                },
                saveData: () => {
                    k(), i === "create" ? C() : i === "edit" ? m() : i === "lineEdit" && y(), 
                    delete t.value.spec.task, t.value.spec.storages = g;
                },
                addPipe: C,
                editPipe: m,
                editPutPipeLine: y,
                formateData: k,
                pipeConfig: t,
                detailParams: o,
                innitDetail: d,
                tempDta: g,
                variableCathe: v,
                checkBaseInfo: u,
                checkParams: r
            };
        }
    }, A = {
        class: "template"
    }, x = {
        class: "header"
    }, V = {
        class: "header-back"
    }, j = (n => (Z("data-v-7caad2cd"), n = n(), $(), n))(() => _("span", {
        class: "title"
    }, " 新增流水线模板 ", -1)), z = {
        class: "content"
    };
    U = pa(q, [ [ "render", function(n, l, f, e, i, g) {
        const k = T("Back"), C = O, m = W, y = X, o = Y, d = T("baseInfo"), v = T("workflowConfig"), t = T("varAndCache"), u = L;
        return P(), D(u, null, {
            default: I(() => [ _("div", A, [ _("div", x, [ _("div", V, [ _("span", {
                style: {
                    cursor: "pointer"
                },
                onClick: l[0] || (l[0] = (...r) => e.goBack && e.goBack(...r))
            }, [ c(C, null, {
                default: I(() => [ c(k) ]),
                _: 1
            }), N(" 返回 ") ]), j ]), c(y, {
                modelValue: e.activeName,
                "onUpdate:modelValue": l[1] || (l[1] = r => e.activeName = r),
                class: "demo-tabs",
                onTabClick: e.handleClick
            }, {
                default: I(() => [ c(m, {
                    label: "基本信息",
                    name: "first"
                }), c(m, {
                    label: "变量和缓存",
                    name: "third"
                }), c(m, {
                    label: "流程配置",
                    name: "second"
                }) ]),
                _: 1
            }, 8, [ "modelValue", "onTabClick" ]), c(o, {
                type: "primary",
                size: "large",
                disabled: e.checkParams === !0 && e.checkBaseInfo === !0,
                onClick: l[2] || (l[2] = r => e.saveData("create"))
            }, {
                default: I(() => [ N(" 保存并运行 ") ]),
                _: 1
            }, 8, [ "disabled" ]) ]), _("div", z, [ e.activeName === "first" ? (P(), 
            D(d, {
                key: 0,
                pipeConfig: e.pipeConfig,
                "onUpdate:pipeConfig": l[3] || (l[3] = r => e.pipeConfig = r),
                "form-disabled": e.purpose === "edit" || e.purpose === "lineEdit"
            }, null, 8, [ "pipeConfig", "form-disabled" ])) : E("", !0), e.activeName === "second" ? (P(), 
            D(v, {
                key: 1,
                pipeConfig: e.pipeConfig,
                "onUpdate:pipeConfig": l[4] || (l[4] = r => e.pipeConfig = r),
                "flow-name": e.pipeConfig.metadata.name
            }, null, 8, [ "pipeConfig", "flow-name" ])) : E("", !0), e.activeName === "third" ? (P(), 
            D(t, {
                key: 2,
                pipeConfig: e.pipeConfig,
                "onUpdate:pipeConfig": l[5] || (l[5] = r => e.pipeConfig = r),
                "variable-cathe": e.variableCathe
            }, null, 8, [ "pipeConfig", "variable-cathe" ])) : E("", !0) ]) ]) ]),
            _: 1
        });
    } ], [ "__scopeId", "data-v-7caad2cd" ] ]);
});

export {
    fa as __tla,
    U as default
};