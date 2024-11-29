import {
    _ as Ya,
    __tla as Za
} from "./index-71666e05.js";

import {
    a7 as m,
    aO as Xa,
    p as el,
    e as ha,
    r,
    o as c,
    c as g,
    k as n,
    l as u,
    a,
    F as C,
    y as N,
    C as x,
    t as s,
    A as E,
    G as W,
    v as y,
    B as k,
    z as Z,
    x as Va,
    D,
    m as ce,
    I as al,
    d_ as ll,
    n as F,
    bo as tl,
    ab as sl,
    ac as il,
    O as ol,
    ak as nl,
    _ as ul,
    L as rl,
    av as cl,
    aw as dl,
    J as pl,
    bp as ml,
    bq as vl,
    aU as gl,
    aQ as fl,
    P as bl,
    R as yl,
    S as _l,
    bB as hl,
    __tla as Vl
} from "./index-6c08ea4c.js";

import {
    a as wa,
    b as wl,
    f as Cl,
    __tla as kl
} from "./pipelineManage-fe91e90c.js";

import jl, {
    __tla as Nl
} from "./pipelineTab-f3395094.js";

import {
    g as xl,
    __tla as Tl
} from "./databaseConfig-a0b3f7be.js";

import {
    g as M
} from "./configInfo-14ae9782.js";

import {
    a as Sl,
    __tla as Ll
} from "./techDirectionManage-e96d2dc4.js";

import {
    g as Pl
} from "./validate-b72f006c.js";

import {
    _ as Dl
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Ca, ql = Promise.all([ (() => {
    try {
        return Za;
    } catch {}
})(), (() => {
    try {
        return Vl;
    } catch {}
})(), (() => {
    try {
        return kl;
    } catch {}
})(), (() => {
    try {
        return Nl;
    } catch {}
})(), (() => {
    try {
        return Tl;
    } catch {}
})(), (() => {
    try {
        return Ll;
    } catch {}
})() ]).then(async () => {
    let X, V, de, pe, me, ve, ge, fe, be, ye, _e, he, Ve, we, Ce, ke, je, Ne, xe, Te, Se, Le, Pe, De, qe, Ie, Re, Ue, ze, Oe, Be, Je, $e, Ae, Ee, We, Fe, Me, Ge, He, Qe, Ke, Ye, Ze, Xe, ea, aa, la, ta, sa, ia;
    X = {
        getProjectList: o => m({}).post("/resource/admin-project/project-List", o),
        getTechList: () => m({
            showLoading: !1
        }).get("/resource/project-sync/get-tech-List"),
        saveAddProject: o => m({}).post("/resource/admin-project/create-project-info", o),
        updateProject: o => m({}).post("/resource/admin-project/update-project-info", o),
        viewProjectInfo: o => m.get({
            url: `/resource/admin-project/get-project-info?projectId=${o}`
        }),
        deleteProject: o => m({}).get(`/resource/admin-project/delete-project?projectId=${o}`),
        copyProject: o => m({}).get(`/resource/admin-project/copy-project?projectId=${o}`),
        getTaProjectList: o => m({}).post("/resource/tenant-project/project-List", o),
        getTaPeopleList: o => m({}).get(`/resource/tenant-project/get-create-by?tenantId=${o}`),
        saveTaAddProject: o => m({}).post("/resource/tenant-project/create-project-info", o),
        updateTaProject: o => m({}).post("/resource/tenant-project/update-project-info", o),
        updateTaAvaliableStatus: o => m({}).post("/resource/tenant-project/update-project-status", o),
        deleteTaProject: o => m({}).get("/resource/tenant-project/delete-project", {
            params: o
        }),
        copyTaProject: o => m({
            timeout: 18e5
        }).get("/resource/tenant-project/copy-project", {
            params: o
        }),
        viewTaProjectInfo: o => m({}).get(`/resource/tenant-project/get-project-info?projectId=${o}`),
        getTeaProjectList: o => m({}).post("/resource/tenant-project/teacher-project-List", o),
        checkBeforeDelete: o => m({}).get(`/training/group/groupRelProject?projectId=${o}`),
        getTemplateTypeList: o => m({}).get("/env-api/ci-processor/v1beta1/templatetype", {
            params: o
        }),
        getPipVoList: o => m.get({
            url: "/env-api/ci-processor/v1beta1/pipeline/pipVoList",
            params: o
        }),
        getMiddleware: o => m({}).get("/env-api/ci-processor/cim/component/message", {
            params: o
        }),
        importProject: (o, ee) => m({
            showLoading: !1,
            timeout: 36e5,
            isUpload: !0,
            noSystemHeader: !0,
            onUploadProgress: ee
        }).post("/resource/project-import/importProject", o)
    }, V = o => (yl("data-v-9f89fe7c"), o = o(), _l(), o), de = {
        class: "flow-line"
    }, pe = {
        class: "flow-line-content"
    }, me = V(() => s("div", {
        class: "flow-line-title"
    }, "配置信息", -1)), ve = {
        class: "flow-line-item"
    }, ge = {
        class: "item-label"
    }, fe = V(() => s("span", {
        class: "item-label__title"
    }, "流水线", -1)), be = V(() => s("span", {
        class: "item-label__desc"
    }, "流水线为学生训练该项目提供检查、构建、部署等插件，完成代码从持续集成到持续部署，请根据语言和需求选择对应流水线", -1)), ye = V(() => s("span", {
        style: {
            "margin-left": "10px"
        }
    }, "请选择前端流水线", -1)), _e = {
        class: "data-pip"
    }, he = {
        class: "box"
    }, Ve = {
        class: "info"
    }, we = {
        class: "content-text"
    }, Ce = {
        class: "buttonImg"
    }, ke = V(() => s("span", {
        style: {
            "margin-left": "10px"
        }
    }, "请选择后端流水线", -1)), je = {
        class: "data-pip"
    }, Ne = {
        class: "box"
    }, xe = {
        class: "info"
    }, Te = {
        class: "content-text"
    }, Se = {
        class: "buttonImg"
    }, Le = {
        class: "flow-line-item"
    }, Pe = {
        class: "item-label"
    }, De = V(() => s("span", {
        class: "item-label__title"
    }, "数据库", -1)), qe = V(() => s("span", {
        class: "item-label__desc"
    }, "数据库为教学过程学生训练该项目工程数据库方案，若选择文件部署演示环境则同时为演示项目工程提供数据库服务", -1)), Ie = {
        class: "flow-line-item"
    }, Re = {
        class: "item-label"
    }, Ue = V(() => s("span", {
        class: "item-label__title"
    }, "中间件", -1)), ze = V(() => s("span", {
        class: "item-label__desc"
    }, "中间件为教学过程学生训练该项目工程中间件方案，若选择文件部署演示环境则同时为演示项目工程提供中间件服务", -1)), Oe = {
        class: "box"
    }, Be = {
        class: "info"
    }, Je = {
        class: "middleware-text"
    }, $e = {
        class: "middleware-version"
    }, Ae = {
        class: "flow-line-item"
    }, Ee = {
        class: "item-label"
    }, We = V(() => s("span", {
        class: "item-label__title"
    }, "演示环境", -1)), Fe = V(() => s("span", {
        class: "item-label__desc"
    }, "演示环境为选择该项目进行实训的项目组实时了解项目开发最终成果物，可选择录入部署成功的项目链接地址，也可选择通过平台部署功能进行部署", -1)), 
    Me = {
        class: "content"
    }, Ge = {
        class: "middlewareBox"
    }, He = {
        class: "middlewareBox tab"
    }, Qe = {
        class: "middlewareBox_left"
    }, Ke = {
        class: "input"
    }, Ye = {
        class: "tab_container"
    }, Ze = [ "onClick" ], Xe = {
        class: "middlewareBox_right"
    }, ea = {
        key: 0,
        class: "data-empty"
    }, aa = {
        class: "middlewareBox_right_main"
    }, la = [ "onClick" ], ta = {
        class: "info"
    }, sa = {
        class: "middlewareBox-text"
    }, ia = {
        class: "middlewareBox-version"
    }, Ca = Dl({
        __name: "Flowline",
        props: {
            formData: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "changeValue", "validateValue" ],
        setup(o, {
            emit: ee
        }) {
            Xa(t => ({
                "088a8690": t.bodyHeight
            }));
            const ka = el(), G = ee, ja = o, e = ha({
                get: () => ja.formData,
                set: t => {
                    G("update:formData", t);
                }
            }), Na = () => {
                L.value = !0, F(() => {
                    ra(), H({
                        item: [ {
                            code: "全部"
                        } ]
                    }), ae.value = "0";
                });
            }, xa = () => {
                L.value = !0, F(() => {
                    H({
                        item: [ {
                            code: "全部"
                        } ]
                    }), ra(), ae.value = "1";
                });
            }, oa = r(), ae = r("0"), Ta = r([ {
                code: "全部"
            } ]), L = r(!1), Sa = r("选择流水线"), q = r({}), na = r([]), le = r([]), f = r({}), b = r({}), La = () => {
                q.value = {}, oa.value.clearSearch();
            }, H = t => {
                wa({
                    resourceType: t.item.code == "全部" ? "" : t.item.code
                }).then(l => {
                    le.value = l.data ?? [];
                });
            }, Pa = t => {
                q.value = t ?? {};
            }, Da = (t, l) => {
                wa("").then(p => {
                    var _;
                    le.value = (_ = p.data) == null ? void 0 : _.filter(v => v.ciName.toLowerCase().includes(t.toLowerCase()));
                }), [ null, "" ].includes(t) && H(l);
            }, Q = (t, l) => {
                const p = [ "neuedu.com/compile", "neuedu.com/basicEnv" ], _ = [];
                for (const v in t) p.includes(v) && _.push(`${v}=${t[v]}`);
                return l ? _.find(v => v.includes(l)) : null;
            }, qa = () => !!e.value.techDirection || (ka.warning("请先选择技术方向"), !1), ua = () => {
                b.value = {}, e.value.backCiName = "", e.value.backCiNameSpace = "", 
                e.value.backLanguageTag = "", e.value.backCompileTag = "", f.value = {}, 
                e.value.frontCiName = "", e.value.frontCiNameSpace = "", e.value.frontLanguageTag = "", 
                e.value.frontCompileTag = "";
            }, Ia = () => {
                e.value.middlewares = [];
            }, Ra = () => {
                e.value.dbType = "", e.value.dbVersion = "";
            }, Ua = () => {
                e.value.demoType = "";
            }, za = () => {
                ae.value == "1" ? JSON.stringify(q.value) != "{}" && (b.value = q.value ?? {}, 
                e.value.backCiName = b.value.ciName, e.value.backCiNameSpace = b.value.ciNamespace, 
                e.value.backLanguageTag = Q(b.value.labels, "neuedu.com/basicEnv"), 
                e.value.backCompileTag = Q(b.value.labels, "neuedu.com/compile"), 
                G("validateValue", "pipelineSaveReqVo.backCiName")) : JSON.stringify(q.value) != "{}" && (f.value = q.value ?? {}, 
                e.value.frontCiName = f.value.ciName, e.value.frontCiNameSpace = f.value.ciNamespace, 
                e.value.frontLanguageTag = Q(f.value.labels, "neuedu.com/basicEnv"), 
                e.value.frontCompileTag = Q(f.value.labels, "neuedu.com/compile"), 
                G("validateValue", "pipelineSaveReqVo.frontCiName")), L.value = !1;
            }, ra = () => {
                wl({
                    name: "",
                    type: "2",
                    code: ""
                }).then(t => {
                    na.value = Ta.value.concat(t.data.records);
                });
            }, ca = t => {
                switch (t) {
                  case "java8":
                  case "node":
                    return "";

                  default:
                    return "tag-success";
                }
            }, da = (t, l) => t === l.length - 1 ? "0px" : (876 - 120 * l.length) / (l.length + 1) + "px", pa = t => {
                t === 1 ? (b.value = {}, e.value.backCiName = "", e.value.backCiNameSpace = "", 
                e.value.backLanguageTag = "", e.value.backCompileTag = "") : t === 0 && (f.value = {}, 
                e.value.frontCiName = "", e.value.frontCiNameSpace = "", e.value.frontLanguageTag = "", 
                e.value.frontCompileTag = "");
            }, te = r([]), se = r([]), ma = r([]), Oa = () => {
                e.value.dbVersion = "", te.value = se.value.filter(t => t.dbType === e.value.dbType);
            }, Ba = t => {
                const l = t.reduce((p, _) => {
                    const v = _.dbType;
                    return p[v] || (p[v] = []), p[v].push(_), p;
                }, {});
                for (const p in l) ma.value.push({
                    label: p,
                    value: p
                });
            }, I = r({}), va = r({}), O = r({}), R = r(""), U = r(!1), Ja = r("选择中间件"), B = r("全部"), z = r(null), J = r(!1), ie = r([]), oe = r(0), T = r([]), ne = r(!0), $ = r({}), $a = () => {
                U.value = !0, F(() => {
                    Ea();
                });
            }, Aa = () => {
                z.value = null, oe.value = 0, ie.value = [], R.value = "", B.value = "全部", 
                J.value = !1;
            }, Ea = () => {
                Cl({
                    noType: "database"
                }).then(t => {
                    let l = [];
                    for (const p in t.data) if (Array.isArray(t.data[p])) for (const _ of t.data[p]) l.push(_);
                    I.value = {
                        "全部": l,
                        ...t.data
                    }, va.value = I.value, ue();
                });
            }, Wa = () => {
                J.value ? tl({
                    type: "warning",
                    message: "不能添加重复的中间件!"
                }) : (JSON.stringify($.value) != "{}" && (ie.value.push($.value), 
                T.value = T.value.concat(ie.value)), U.value = !1, ne.value = !0, 
                $.value = {}, e.value.middlewares = [], T.value.forEach(t => {
                    let l = {};
                    l.middlewareName = t.componentName, l.middlewareVersion = t.componentVersion, 
                    e.value.middlewares.push(l);
                }), G("validateValue", "pipelineSaveReqVo.middlewares"));
            }, ue = () => {
                if (R.value.trim()) {
                    const t = {};
                    for (const l in I.value) l.toLowerCase().includes(R.value.toLowerCase()) && (B.value == "全部" ? t.全部 = I.value[l] : t[l] = I.value[l]);
                    O.value = t;
                } else O.value = I.value;
            }, re = r([]), ga = ha(() => {
                var t;
                return (t = re.value.find(l => {
                    var p;
                    return l.techId === ((p = e.value) == null ? void 0 : p.techDirection);
                })) == null ? void 0 : t.type;
            });
            return (async () => {
                const t = await xl({
                    tenantId: hl(),
                    dbType: "",
                    status: "",
                    dbVersion: ""
                });
                t && (Ba(t || []), se.value = t, await F(() => {
                    e.value.dbType && (te.value = se.value.filter(l => l.dbType === e.value.dbType));
                }));
            })(), Sl({
                techName: ""
            }).then(t => {
                re.value = t || [];
            }), F(() => {
                e.value.middlewares && e.value.middlewares.length > 0 && e.value.middlewares.forEach(t => {
                    T.value.push({
                        componentName: t.middlewareName,
                        componentVersion: t.middlewareVersion
                    });
                }), e.value.frontCiName && X.getPipVoList({
                    name: e.value.frontCiName,
                    namespace: e.value.frontCiNameSpace
                }).then(t => {
                    f.value = t[0];
                }), e.value.backCiName && X.getPipVoList({
                    name: e.value.backCiName,
                    namespace: e.value.backCiNameSpace
                }).then(t => {
                    b.value = t[0];
                });
            }), (t, l) => {
                const p = sl, _ = il, v = ol, K = nl, w = ul, fa = rl, ba = cl, Fa = dl, A = pl, ya = ml, Ma = vl, _a = gl, Ga = fl, Ha = bl, Qa = Ya;
                return c(), g("div", de, [ n(v, {
                    prop: "pipelineSaveReqVo.techDirection",
                    rules: [ {
                        required: !0,
                        message: "请选择技术方向",
                        trigger: [ "blur", "change" ]
                    } ],
                    style: {
                        padding: "0"
                    }
                }, {
                    default: u(() => [ n(_, {
                        modelValue: a(e).techDirection,
                        "onUpdate:modelValue": l[0] || (l[0] = i => a(e).techDirection = i),
                        placeholder: "请选择技术方向",
                        onChange: ua
                    }, {
                        default: u(() => [ (c(!0), g(C, null, N(a(re), i => (c(), 
                        x(p, {
                            key: i.techId,
                            label: i.techName,
                            value: i.techId
                        }, null, 8, [ "label", "value" ]))), 128)) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                }), s("div", pe, [ me, s("div", ve, [ s("div", ge, [ fe, n(K, {
                    modelValue: a(e).isPipeline,
                    "onUpdate:modelValue": l[1] || (l[1] = i => a(e).isPipeline = i),
                    onChange: ua,
                    "before-change": qa,
                    "active-value": !0,
                    "inactive-value": !1,
                    size: "small"
                }, null, 8, [ "modelValue" ]), be ]), a(e).isPipeline ? (c(), g(C, {
                    key: 0
                }, [ [ "1", "3", "4" ].includes(a(ga)) ? (c(), x(v, {
                    key: 0,
                    prop: "pipelineSaveReqVo.frontCiName",
                    rules: [ {
                        required: !0,
                        message: "请选择前端流水线",
                        trigger: [ "blur", "change" ]
                    } ],
                    style: {
                        padding: "0"
                    }
                }, {
                    default: u(() => {
                        var i;
                        return [ E(s("div", {
                            class: "flow-line-select",
                            onClick: Na
                        }, [ n(w, {
                            icon: "ep:plus"
                        }), ye ], 512), [ [ W, [ "[]", "{}" ].includes(JSON.stringify(a(f))) ] ]), E(s("div", _e, [ s("div", he, [ s("div", Ve, [ s("span", we, [ n(w, {
                            icon: a(M)((i = a(f).type) == null ? void 0 : i.toLowerCase()),
                            style: {
                                "margin-right": "10px"
                            }
                        }, null, 8, [ "icon" ]), y(" " + k(a(f).ciName), 1) ]), s("span", null, [ (c(!0), 
                        g(C, null, N(a(f).labels, d => (c(), x(fa, {
                            class: Z([ ca(d), "tag-info" ]),
                            size: "small",
                            key: d
                        }, {
                            default: u(() => [ y(k(d), 1) ]),
                            _: 2
                        }, 1032, [ "class" ]))), 128)) ]) ]), s("div", Ce, [ (c(!0), 
                        g(C, null, N(a(f).storage, (d, h) => (c(), g("div", {
                            class: "buttonVal",
                            key: d[0].name
                        }, [ y(k(d[0].name) + " ", 1), s("span", {
                            class: "line",
                            style: Va({
                                width: da(h, a(f).storage),
                                borderWidth: h == a(f).storage.length - 1 ? "0" : "1px"
                            })
                        }, null, 4) ]))), 128)) ]) ]), n(w, {
                            icon: "svg-icon:red-del",
                            style: {
                                transform: "translate(60px, 60px) scale(2)"
                            },
                            onClick: l[2] || (l[2] = d => pa(0))
                        }) ], 512), [ [ W, ![ "[]", "{}" ].includes(JSON.stringify(a(f))) ] ]) ];
                    }),
                    _: 1
                })) : D("", !0), [ "2", "3", "4" ].includes(a(ga)) ? (c(), x(v, {
                    key: 1,
                    prop: "pipelineSaveReqVo.backCiName",
                    rules: [ {
                        required: !0,
                        message: "请选择后端流水线",
                        trigger: [ "blur", "change" ]
                    } ],
                    style: {
                        padding: "0"
                    }
                }, {
                    default: u(() => {
                        var i;
                        return [ E(s("div", {
                            class: "flow-line-select",
                            onClick: xa
                        }, [ n(w, {
                            icon: "ep:plus"
                        }), ke ], 512), [ [ W, [ "[]", "{}" ].includes(JSON.stringify(a(b))) ] ]), E(s("div", je, [ s("div", Ne, [ s("div", xe, [ s("span", Te, [ n(w, {
                            icon: a(M)((i = a(b).type) == null ? void 0 : i.toLowerCase()),
                            style: {
                                "margin-right": "10px"
                            }
                        }, null, 8, [ "icon" ]), y(" " + k(a(b).ciName), 1) ]), s("span", null, [ (c(!0), 
                        g(C, null, N(a(b).labels, d => (c(), x(fa, {
                            class: Z([ ca(d), "tag-info" ]),
                            size: "small",
                            key: d
                        }, {
                            default: u(() => [ y(k(d), 1) ]),
                            _: 2
                        }, 1032, [ "class" ]))), 128)) ]) ]), s("div", Se, [ (c(!0), 
                        g(C, null, N(a(b).storage, (d, h) => (c(), g("div", {
                            class: "buttonVal",
                            key: d[0].name
                        }, [ y(k(d[0].name) + " ", 1), s("span", {
                            class: "line",
                            style: Va({
                                width: da(h, a(b).storage),
                                borderWidth: h == a(b).storage.length - 1 ? "0" : "1px"
                            })
                        }, null, 4) ]))), 128)) ]) ]), n(w, {
                            icon: "svg-icon:red-del",
                            style: {
                                transform: "translate(60px, 60px) scale(2)"
                            },
                            onClick: l[3] || (l[3] = d => pa(1))
                        }) ], 512), [ [ W, ![ "[]", "{}" ].includes(JSON.stringify(a(b))) ] ]) ];
                    }),
                    _: 1
                })) : D("", !0) ], 64)) : D("", !0) ]), s("div", Le, [ s("div", Pe, [ De, n(K, {
                    modelValue: a(e).isDb,
                    "onUpdate:modelValue": l[4] || (l[4] = i => a(e).isDb = i),
                    "active-value": !0,
                    "inactive-value": !1,
                    size: "small",
                    onChange: Ra
                }, null, 8, [ "modelValue" ]), qe ]), a(e).isDb ? (c(), x(Fa, {
                    key: 0,
                    style: {
                        width: "782px"
                    }
                }, {
                    default: u(() => [ n(ba, {
                        span: 12
                    }, {
                        default: u(() => [ n(v, {
                            label: "数据库类型",
                            prop: "pipelineSaveReqVo.dbType",
                            rules: [ {
                                required: !0,
                                message: "请选择数据库类型",
                                trigger: [ "blur", "change" ]
                            } ],
                            "label-width": "120px",
                            class: "db-form-item"
                        }, {
                            default: u(() => [ n(_, {
                                modelValue: a(e).dbType,
                                "onUpdate:modelValue": l[5] || (l[5] = i => a(e).dbType = i),
                                placeholder: "数据库类型",
                                class: "neu",
                                clearable: "",
                                ref: "dbSelectRef",
                                onChange: Oa
                            }, {
                                default: u(() => [ (c(!0), g(C, null, N(a(ma), i => (c(), 
                                x(p, {
                                    key: i.value,
                                    label: i.label,
                                    value: i.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), n(ba, {
                        span: 12
                    }, {
                        default: u(() => [ n(v, {
                            label: "数据库版本号",
                            prop: "pipelineSaveReqVo.dbVersion",
                            rules: [ {
                                required: !0,
                                message: "请选择数据库版本号",
                                trigger: [ "blur", "change" ]
                            } ],
                            "label-width": "120px",
                            class: "db-form-item"
                        }, {
                            default: u(() => [ n(_, {
                                modelValue: a(e).dbVersion,
                                "onUpdate:modelValue": l[6] || (l[6] = i => a(e).dbVersion = i),
                                placeholder: "数据库版本号",
                                clearable: "",
                                ref: "dbSelectRef"
                            }, {
                                default: u(() => [ (c(!0), g(C, null, N(a(te), i => (c(), 
                                x(p, {
                                    key: i.dbVersion,
                                    label: i.dbVersion,
                                    value: i.dbVersion
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }) ]),
                    _: 1
                })) : D("", !0) ]), s("div", Ie, [ s("div", Re, [ Ue, n(K, {
                    modelValue: a(e).isWare,
                    "onUpdate:modelValue": l[7] || (l[7] = i => a(e).isWare = i),
                    "active-value": !0,
                    "inactive-value": !1,
                    size: "small",
                    onChange: Ia
                }, null, 8, [ "modelValue" ]), ze ]), (c(!0), g(C, null, N(a(T), i => {
                    var d;
                    return E((c(), g("div", {
                        key: i.id,
                        class: "data-middleware"
                    }, [ s("div", Oe, [ s("div", Be, [ s("span", Je, [ n(w, {
                        icon: a(M)((d = i.componentName) == null ? void 0 : d.toLowerCase())
                    }, null, 8, [ "icon" ]), y(" " + k(i.componentName), 1) ]), s("span", $e, " 版本号：" + k(i.componentVersion), 1) ]) ]), n(w, {
                        icon: "svg-icon:red-del",
                        style: {
                            transform: "translate(-85px, 40px) scale(2)"
                        },
                        onClick: h => (P => {
                            const Y = T.value.findIndex(j => j.id === P.id);
                            Y !== -1 && T.value.splice(Y, 1), e.value.middlewares = [], 
                            T.value.forEach(j => {
                                let S = {};
                                S.middlewareName = j.componentName, S.middlewareVersion = j.componentVersion, 
                                e.value.middlewares.push(S);
                            });
                        })(i)
                    }, null, 8, [ "onClick" ]) ])), [ [ W, a(e).isWare ] ]);
                }), 128)), a(e).isWare ? (c(), x(v, {
                    key: 0,
                    prop: "pipelineSaveReqVo.middlewares",
                    rules: [ {
                        validator: a(Pl),
                        message: "请选择中间件",
                        trigger: [ "blur", "change" ]
                    } ],
                    style: {
                        padding: "0"
                    }
                }, {
                    default: u(() => [ n(A, {
                        type: "primary",
                        plain: "",
                        size: "default",
                        style: {
                            "margin-left": "10px",
                            "margin-top": "10px"
                        },
                        onClick: $a
                    }, {
                        default: u(() => [ n(w, {
                            icon: "ep:plus",
                            style: {
                                "margin-right": "5px"
                            }
                        }), y("添加中间件 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "rules" ])) : D("", !0) ]), s("div", Ae, [ s("div", Ee, [ We, n(K, {
                    modelValue: a(e).isDemo,
                    "onUpdate:modelValue": l[8] || (l[8] = i => a(e).isDemo = i),
                    "active-value": !0,
                    "inactive-value": !1,
                    size: "small",
                    onChange: Ua
                }, null, 8, [ "modelValue" ]), Fe ]), a(e).isDemo ? (c(), x(v, {
                    key: 0,
                    prop: "pipelineSaveReqVo.demoType",
                    rules: [ {
                        required: !0,
                        message: "请选择演示环境类型",
                        trigger: [ "blur", "change" ]
                    } ],
                    style: {
                        padding: "0"
                    }
                }, {
                    default: u(() => [ n(Ma, {
                        modelValue: a(e).demoType,
                        "onUpdate:modelValue": l[9] || (l[9] = i => a(e).demoType = i),
                        style: {
                            "margin-left": "10px"
                        }
                    }, {
                        default: u(() => [ n(ya, {
                            value: 1
                        }, {
                            default: u(() => [ y("链接地址") ]),
                            _: 1
                        }), n(ya, {
                            value: 2
                        }, {
                            default: u(() => [ y("文件部署") ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]),
                    _: 1
                })) : D("", !0) ]) ]), n(_a, {
                    class: "pipelineDialog",
                    modelValue: a(L),
                    "onUpdate:modelValue": l[11] || (l[11] = i => ce(L) ? L.value = i : null),
                    title: a(Sa),
                    width: "950px",
                    onClose: La
                }, {
                    footer: u(() => [ n(A, {
                        type: "default",
                        size: "default",
                        onClick: l[10] || (l[10] = i => L.value = !1)
                    }, {
                        default: u(() => [ y("取消") ]),
                        _: 1
                    }), n(A, {
                        type: "primary",
                        size: "default",
                        onClick: za
                    }, {
                        default: u(() => [ y("保存") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ s("div", Me, [ n(jl, {
                        ref_key: "pipelineTabRef",
                        ref: oa,
                        "menu-list": a(na),
                        "info-list": a(le),
                        onChangeMenu: H,
                        onSubmitPipelineData: Pa,
                        onSearch: Da
                    }, null, 8, [ "menu-list", "info-list" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), n(_a, {
                    class: "middlewareDialog",
                    modelValue: a(U),
                    "onUpdate:modelValue": l[14] || (l[14] = i => ce(U) ? U.value = i : null),
                    title: a(Ja),
                    width: "950px",
                    onClose: Aa
                }, {
                    footer: u(() => [ n(A, {
                        type: "default",
                        size: "default",
                        onClick: l[13] || (l[13] = i => U.value = !1)
                    }, {
                        default: u(() => [ y("取消") ]),
                        _: 1
                    }), n(A, {
                        type: "primary",
                        size: "default",
                        onClick: Wa
                    }, {
                        default: u(() => [ y("保存") ]),
                        _: 1
                    }) ]),
                    default: u(() => {
                        var i;
                        return [ s("div", Ge, [ s("div", He, [ s("div", Qe, [ s("div", Ke, [ n(Ha, {
                            modelValue: a(R),
                            "onUpdate:modelValue": l[12] || (l[12] = d => ce(R) ? R.value = d : null),
                            placeholder: "搜索名称",
                            class: "neu-search",
                            onKeyup: al(ue, [ "enter" ])
                        }, {
                            suffix: u(() => [ n(Ga, {
                                class: "el-input__icon",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: ue
                            }, {
                                default: u(() => [ n(a(ll)) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]), s("ul", Ye, [ (c(!0), g(C, null, N(a(va), (d, h, P) => (c(), 
                        g("li", {
                            key: h,
                            class: Z({
                                active: a(oe) == P
                            }),
                            onClick: Y => ((j, S) => {
                                B.value = j, oe.value = S, z.value = null, J.value = !1;
                            })(h, P)
                        }, [ n(w, {
                            icon: a(M)(h)
                        }, null, 8, [ "icon" ]), y(" " + k(h), 1) ], 10, Ze))), 128)) ]) ]), s("div", Xe, [ JSON.stringify(a(O)) === "{}" || ((i = a(O)[a(B)]) == null ? void 0 : i.length) == 0 ? (c(), 
                        g("div", ea, [ n(Qa, {
                            msg: "暂无数据",
                            type: "resource"
                        }) ])) : D("", !0), s("div", aa, [ (c(!0), g(C, null, N(a(O)[a(B)], (d, h) => {
                            var P;
                            return c(), g("div", {
                                key: d.id
                            }, [ s("div", {
                                class: Z([ "box", {
                                    selected: h == a(z)
                                } ]),
                                onClick: Y => ((j, S) => {
                                    ne.value = T.value.some(Ka => Ka.id === S.id), 
                                    z.value = z.value == j ? null : j, ne.value ? J.value = !0 : (J.value = !1, 
                                    z.value == j ? $.value = S : $.value = {});
                                })(h, d)
                            }, [ s("div", ta, [ s("span", sa, [ n(w, {
                                icon: a(M)((P = d.componentName) == null ? void 0 : P.toLowerCase())
                            }, null, 8, [ "icon" ]), y(" " + k(d.componentName), 1) ]), s("span", ia, " 版本号：" + k(d.componentVersion), 1) ]) ], 10, la) ]);
                        }), 128)) ]) ]) ]) ]) ];
                    }),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9f89fe7c" ] ]);
});

export {
    ql as __tla,
    Ca as default
};