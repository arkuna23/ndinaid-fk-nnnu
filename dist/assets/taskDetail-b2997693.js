import {
    dU as ua,
    r as t,
    e as O,
    w as ma,
    f as ra,
    g as ga,
    aT as da,
    o as c,
    c as v,
    t as m,
    k as u,
    l as r,
    v as E,
    B as h,
    x as j,
    H as G,
    z as Q,
    F as va,
    y as ka,
    D as C,
    C as b,
    bo as X,
    n as ha,
    aQ as Ca,
    ad as fa,
    ae as ya,
    M as Na,
    s as ba,
    P as Ra,
    __tla as _a
} from "./index-6c08ea4c.js";

import {
    _ as Z,
    __tla as wa
} from "./index-da0e4c45.js";

import {
    E as Da,
    a as Sa,
    __tla as Ia
} from "./el-collapse-item-c8b76a0a.js";

import {
    b as ee,
    c as ae
} from "./array-bottom-4bf24e22.js";

import {
    q as se,
    r as te,
    s as ne,
    t as le,
    u as ie,
    v as pe,
    w as ce,
    x as oe,
    y as ue,
    z as me,
    A as re,
    B as ge,
    C as de,
    D as ve,
    E as ke,
    F as he,
    G as Ce
} from "./check-C-7cf0dd88.js";

import {
    _ as fe,
    a as ye,
    b as Ne,
    c as be,
    d as Re,
    e as _e,
    f as we,
    g as De,
    h as Se,
    i as Ie,
    j as Te,
    k as Fe,
    l as Ae,
    m as Le
} from "./warning-a30fb85a.js";

import {
    a as Be,
    b as Ve,
    c as xe
} from "./tenant-9e660cc6.js";

import {
    b as Pe,
    c as Ye
} from "./fail-da771b5c.js";

import {
    _ as Me
} from "./picSen-0394b184.js";

import {
    C as Ta,
    __tla as Fa
} from "./clipboard-0a12866f.js";

import {
    g as Aa,
    a as Oe,
    b as La,
    c as Ba,
    __tla as Va
} from "./taskInstance-9258951c.js";

import {
    _ as xa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Ee, Pa = Promise.all([ (() => {
    try {
        return _a;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return Ia;
    } catch {}
})(), (() => {
    try {
        return Fa;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})() ]).then(async () => {
    const je = {
        class: "detail"
    }, We = {
        class: "header"
    }, Ue = {
        class: "title"
    }, $e = {
        class: "status"
    }, He = {
        class: "center"
    }, ze = [ "data-clipboard-text" ], Je = {
        class: "content"
    }, Ke = {
        key: 0,
        src: Be,
        alt: "",
        class: "name-icon"
    }, qe = [ "src" ], Ge = [ "onClick" ], Qe = {
        key: 0,
        src: Be,
        alt: "",
        class: "name-icon"
    }, Xe = [ "src" ], Ze = {
        class: "cardBasic r rightContent pa-5"
    }, ea = {
        class: "headerDes"
    }, aa = {
        class: "time"
    }, sa = {
        key: 0
    }, ta = {
        key: 1
    };
    Ee = xa({
        name: "taskDetail",
        components: {
            Back: ua,
            YamlEditor: Z
        },
        props: {
            detailContent: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "close" ],
        setup(s, o) {
            const A = t("level1First"), e = t("first"), W = t(""), L = t("0"), I = t("0"), B = t([]), V = t([]), _ = t(1), k = t(""), w = t(s.detailContent.status.podName), d = t({
                podName: w.value,
                namespace: s.detailContent.namespace,
                containerName: s.detailContent.status.steps[0].container
            }), R = t({
                podName: w.value,
                namespace: s.detailContent.namespace
            }), x = t(s.detailContent), T = t(null), i = t(null), y = t([]), F = t([]), U = t(null), $ = t(null), na = t(null), l = t(null), H = t({
                Succeeded: {
                    name: "成功",
                    color: "#1AD3AB"
                },
                Failed: {
                    name: "失败",
                    color: "#da1e28"
                },
                PipelineRunPending: {
                    name: "挂起",
                    color: "#F6C131"
                },
                Running: {
                    name: "运行",
                    color: "#354EF5"
                },
                PipelineRunCancelled: {
                    name: "取消",
                    color: "#999"
                }
            }), la = t({
                Succeeded: "成功",
                Failed: "失败",
                Pending: "挂起",
                Running: "运行",
                TaskRunCancelled: "取消"
            }), ia = t({
                Completed: "成功",
                Failed: "失败",
                Running: "运行",
                Waiting: "等待",
                Warning: "警告",
                NotRun: "未运行"
            }), g = t({}), p = t({
                name: "",
                statusName: ""
            }), f = (a, n) => a ? Date.parse(a) / 1e3 - Date.parse(n) / 1e3 + "秒" : "--", P = t(!1), z = t(!1);
            let Y = () => {
                Aa(d.value).then(a => {
                    if (a.code === 200) {
                        const n = a.data;
                        U.value = n, P.value = !0, J();
                    }
                });
            }, J = () => {
                ha(() => {
                    setTimeout(() => {
                        const a = document.getElementById("logInput");
                        a && (a.scrollTop = a.scrollHeight);
                    }, 13);
                });
            }, K = a => {
                Oe({
                    namespace: s.detailContent.namespace,
                    taskRunName: s.detailContent.metadata.name,
                    stepName: p.value.name
                }).then(n => {
                    p.value.statusName = n.data, p.value.statusName === "Running" ? (M(), 
                    k.value = f(new Date(), a.running.startedAt)) : k.value = f(a.terminated.finishedAt, a.terminated.startedAt);
                }).catch(n => {
                    p.value.statusName = " ";
                });
            };
            const q = () => {
                La({
                    namespace: s.detailContent.namespace,
                    taskRunName: s.detailContent.metadata.name
                }).then(a => {
                    F.value = [], g.value.statusName = a.data.taskRunStatus;
                    const n = a.data.stepStatus;
                    for (const N in n) F.value.push(n[N]);
                }).catch(a => {
                    p.value.statusName = " ";
                });
            };
            let M = () => {
                e.value == "first" ? l.value = setInterval(() => {
                    Oe({
                        namespace: s.detailContent.namespace,
                        taskRunName: s.detailContent.metadata.name,
                        stepName: p.value.name
                    }).then(a => {
                        a.data == "Running" ? Y() : a.data == "Completed" ? (p.value.statusName = a.data, 
                        F[I] = "Completed", window.clearInterval(l.value), l.value = null) : (p.value.statusName = a.data, 
                        window.clearInterval(l.value), l.value = null);
                    }).catch(a => {
                        window.clearInterval(l.value), l.value = null;
                    });
                }, 3e3) : (window.clearInterval(l.value), l.value = null, P.value = !1);
            }, pa = () => {
                Ba(R.value).then(a => {
                    if (a.code === 200) {
                        const n = a.data;
                        $.value = n, z.value = !0;
                    }
                });
            }, D = O(() => s.detailContent.taskStatus);
            const ca = O(() => `color:${H.value[s.detailContent.taskStatus].color}`), oa = O(() => _.value === 1 ? f(s.detailContent.status.completionTime, s.detailContent.status.startTime) : f(s.detailContent.status.steps[0].terminated.finishedAt, s.detailContent.status.steps[0].terminated.startedAt));
            return ma(() => e.value, a => {
                a !== "first" && (window.clearInterval(l.value), l.value = null, 
                P.value = !1);
            }), ra(() => {
                g.value = {
                    name: s.detailContent.spec.taskRef.name
                }, y.value = s.detailContent.status.taskSpec.steps, p.value.name = s.detailContent.status.steps[0].name, 
                q(), B.value = s.detailContent.spec.params || [], V.value = s.detailContent.status.taskResults || [], 
                T.value = s.detailContent.status, i.value = s.detailContent.status.taskSpec.steps[0], 
                pa();
            }), ga(() => {
                window.clearInterval(l.value), l.value = null;
            }), {
                goBack: () => {
                    o.emit("close");
                },
                copy: () => {
                    const a = new Ta("#copy");
                    a.on("success", () => {
                        X.success("复制成功"), a.destroy();
                    }), a.on("error", () => {
                        X.success("复制失败"), a.destroy();
                    });
                },
                activeName1: A,
                activeName2: e,
                activeMenu: W,
                detail: x,
                fomatterMes: a => a.length > 50 ? `${a.substring(0, 50)}...` : a,
                formatterDuration: f,
                statusYaml: T,
                detailYaml: i,
                getLog: Y,
                updateLog: M,
                logYaml: U,
                logFlag: P,
                menuChange: () => {
                    A.value = "level1First", e.value = "first";
                },
                menuClick: (a, n, N, S) => {
                    window.clearInterval(l.value), l.value = null, _.value = a, 
                    A.value = "level1First", e.value = "first", T.value = a === 1 ? s.detailContent.status : n, 
                    L.value = "1", a === 2 && (p.value.name = n.name, L.value = `${N}${S}`, 
                    I.value = S, window.clearInterval(l.value), l.value = null, 
                    i.value = y.value[S], d.value.containerName = n.container, Y(), 
                    K(n));
                },
                currentLevel: _,
                pamasTableData: B,
                resultTableData: V,
                logParams: d,
                timer: l,
                tabChange: () => {
                    e.value == "first" ? (Y(), p.value.statusName === "Running" && M()) : (window.clearInterval(l.value), 
                    l.value = null);
                },
                logYamlRef: na,
                podParams: R,
                podName: w,
                podYaml: $,
                podFlag: z,
                statusDictionary: H,
                statusDictionaryTask: la,
                statusDictionaryStep: ia,
                instanceStatus: D,
                instanceColor: ca,
                getInstanceColor: () => D.value === "Succeeded" ? "color:#1AD3AB" : D.value === "Failed" ? "color:#da1e28" : D.value === "PipelineRunPending" ? "color:#F6C131" : D.value === "Running" ? "color:#354EF5" : D.value === "PipelineRunCancelled" ? "color:#999" : void 0,
                getColor: () => g.value.statusName === "Succeeded" ? "color:#1AD3AB" : g.value.statusName === "Failed" ? "color:#da1e28" : g.value.statusName === "Pending" ? "color:#F6C131" : g.value.statusName === "Running" ? "color:#354EF5" : g.value.statusName === "TaskRunCancelled" ? "color:#999" : void 0,
                getStepColor: () => p.value.statusName === "Completed" ? "color:#1AD3AB" : p.value.statusName === "Failed" ? "color:#da1e28" : p.value.statusName === "Running" ? "color:#354EF5" : p.value.statusName === "Waiting" || p.value.statusName === "Warning" || p.value.statusName === "NotRun" ? "color:#999" : void 0,
                getIcon: () => {
                    var N;
                    let a = "";
                    const n = Object.assign({
                        "../../../../assets/imgs/pipeline/array-bottom.png": ee,
                        "../../../../assets/imgs/pipeline/array-top.png": ae,
                        "../../../../assets/imgs/pipeline/check-A.png": se,
                        "../../../../assets/imgs/pipeline/check-B.png": te,
                        "../../../../assets/imgs/pipeline/check-C.png": ne,
                        "../../../../assets/imgs/pipeline/check-abnormal.png": le,
                        "../../../../assets/imgs/pipeline/check-bg-complex.png": fe,
                        "../../../../assets/imgs/pipeline/check-bg-error.png": ye,
                        "../../../../assets/imgs/pipeline/check-bg-normal.png": Ne,
                        "../../../../assets/imgs/pipeline/check-coverage.png": ie,
                        "../../../../assets/imgs/pipeline/check-debt.png": pe,
                        "../../../../assets/imgs/pipeline/check-error.png": ce,
                        "../../../../assets/imgs/pipeline/check-normal.png": oe,
                        "../../../../assets/imgs/pipeline/check-repeat.png": ue,
                        "../../../../assets/imgs/pipeline/cirle-success-icon.png": be,
                        "../../../../assets/imgs/pipeline/class.png": me,
                        "../../../../assets/imgs/pipeline/codeLines.png": re,
                        "../../../../assets/imgs/pipeline/comment.png": ge,
                        "../../../../assets/imgs/pipeline/commentLines.png": de,
                        "../../../../assets/imgs/pipeline/doing.png": Ve,
                        "../../../../assets/imgs/pipeline/fail.png": Pe,
                        "../../../../assets/imgs/pipeline/files.png": ve,
                        "../../../../assets/imgs/pipeline/icon-check-BLOCKER.png": Re,
                        "../../../../assets/imgs/pipeline/icon-check-CRITICAL.png": _e,
                        "../../../../assets/imgs/pipeline/icon-check-INFO.png": we,
                        "../../../../assets/imgs/pipeline/icon-check-MAJOR.png": De,
                        "../../../../assets/imgs/pipeline/icon-check-MINOR.png": Se,
                        "../../../../assets/imgs/pipeline/icon-check-warning.png": Ie,
                        "../../../../assets/imgs/pipeline/lines.png": ke,
                        "../../../../assets/imgs/pipeline/methods.png": he,
                        "../../../../assets/imgs/pipeline/picSen.png": Me,
                        "../../../../assets/imgs/pipeline/pro-dialog-img1.png": Te,
                        "../../../../assets/imgs/pipeline/pro-dialog-img2.png": Fe,
                        "../../../../assets/imgs/pipeline/sentence.png": Ce,
                        "../../../../assets/imgs/pipeline/succeed.png": Ae,
                        "../../../../assets/imgs/pipeline/success.png": Ye,
                        "../../../../assets/imgs/pipeline/tenant.png": xe,
                        "../../../../assets/imgs/pipeline/warning.png": Le
                    });
                    return g.value.statusName === "Succeeded" && (a = "../../../../assets/imgs/pipeline/cirle-success-icon.png"), 
                    g.value.statusName === "Failed" && (a = "../../../../assets/imgs/pipeline/warning.png"), 
                    g.value.statusName === "Pending" && (a = "../../../../assets/imgs/pipeline/warning.png"), 
                    g.value.statusName === "Running" && (a = "../../../../assets/imgs/pipeline/tenant_act2.png"), 
                    g.value.statusName === "TaskRunCancelled" && (a = "../../../../assets/imgs/pipeline/warning.png"), 
                    (N = n[a]) == null ? void 0 : N.default;
                },
                getStepIcon: a => {
                    var S;
                    let n = "";
                    const N = Object.assign({
                        "../../../../assets/imgs/pipeline/array-bottom.png": ee,
                        "../../../../assets/imgs/pipeline/array-top.png": ae,
                        "../../../../assets/imgs/pipeline/check-A.png": se,
                        "../../../../assets/imgs/pipeline/check-B.png": te,
                        "../../../../assets/imgs/pipeline/check-C.png": ne,
                        "../../../../assets/imgs/pipeline/check-abnormal.png": le,
                        "../../../../assets/imgs/pipeline/check-bg-complex.png": fe,
                        "../../../../assets/imgs/pipeline/check-bg-error.png": ye,
                        "../../../../assets/imgs/pipeline/check-bg-normal.png": Ne,
                        "../../../../assets/imgs/pipeline/check-coverage.png": ie,
                        "../../../../assets/imgs/pipeline/check-debt.png": pe,
                        "../../../../assets/imgs/pipeline/check-error.png": ce,
                        "../../../../assets/imgs/pipeline/check-normal.png": oe,
                        "../../../../assets/imgs/pipeline/check-repeat.png": ue,
                        "../../../../assets/imgs/pipeline/cirle-success-icon.png": be,
                        "../../../../assets/imgs/pipeline/class.png": me,
                        "../../../../assets/imgs/pipeline/codeLines.png": re,
                        "../../../../assets/imgs/pipeline/comment.png": ge,
                        "../../../../assets/imgs/pipeline/commentLines.png": de,
                        "../../../../assets/imgs/pipeline/doing.png": Ve,
                        "../../../../assets/imgs/pipeline/fail.png": Pe,
                        "../../../../assets/imgs/pipeline/files.png": ve,
                        "../../../../assets/imgs/pipeline/icon-check-BLOCKER.png": Re,
                        "../../../../assets/imgs/pipeline/icon-check-CRITICAL.png": _e,
                        "../../../../assets/imgs/pipeline/icon-check-INFO.png": we,
                        "../../../../assets/imgs/pipeline/icon-check-MAJOR.png": De,
                        "../../../../assets/imgs/pipeline/icon-check-MINOR.png": Se,
                        "../../../../assets/imgs/pipeline/icon-check-warning.png": Ie,
                        "../../../../assets/imgs/pipeline/lines.png": ke,
                        "../../../../assets/imgs/pipeline/methods.png": he,
                        "../../../../assets/imgs/pipeline/picSen.png": Me,
                        "../../../../assets/imgs/pipeline/pro-dialog-img1.png": Te,
                        "../../../../assets/imgs/pipeline/pro-dialog-img2.png": Fe,
                        "../../../../assets/imgs/pipeline/sentence.png": Ce,
                        "../../../../assets/imgs/pipeline/succeed.png": Ae,
                        "../../../../assets/imgs/pipeline/success.png": Ye,
                        "../../../../assets/imgs/pipeline/tenant.png": xe,
                        "../../../../assets/imgs/pipeline/warning.png": Le
                    });
                    return a == "Completed" && (n = "../../../../assets/imgs/pipeline/succeed.png"), 
                    a == "Failed" && (n = "../../../../assets/imgs/pipeline/warning.png"), 
                    a == "Running" && (n = "../../../../assets/imgs/pipeline/tenant_act2.png"), 
                    a == "Waiting" && (n = "../../../../assets/imgs/pipeline/succeed.png"), 
                    a == "Warning" && (n = "../../../../assets/imgs/pipeline/succeed.png"), 
                    a == "NotRun" && (n = "../../../../assets/imgs/pipeline/succeed.png"), 
                    (S = N[n]) == null ? void 0 : S.default;
                },
                setLogScrollHeight: J,
                taskRunData: g,
                taskRunStepData: p,
                durningTime: oa,
                hanldeClick: a => {
                    a.preventDefault();
                },
                getDurningTime: () => _.value === 1 ? g.value.statusName === "Running" ? f(new Date(), s.detailContent.status.startTime) : f(s.detailContent.status.completionTime, s.detailContent.status.startTime) : p.value.statusName === "Running" ? f(new Date(), s.detailContent.status.steps[0].running.startedAt) : f(s.detailContent.status.steps[0].terminated.finishedAt, s.detailContent.status.steps[0].terminated.startedAt),
                getStepsStatusValue: K,
                getAllStepsStatusValue: q,
                activeIndex: L,
                arrStatus: F,
                activeSubIndex: I,
                detailYamlArray: y,
                duringTime: k
            };
        }
    }, [ [ "render", function(s, o, A, e, W, L) {
        const I = da("Back"), B = Ca, V = Da, _ = Sa, k = fa, w = ya, d = Na, R = Z, x = ba, T = Ra;
        return c(), v("div", je, [ m("div", We, [ m("span", {
            style: {
                cursor: "pointer"
            },
            onClick: o[0] || (o[0] = (...i) => e.goBack && e.goBack(...i))
        }, [ u(B, null, {
            default: r(() => [ u(I) ]),
            _: 1
        }), E(" 返回 ") ]), m("span", Ue, h(e.detail.name), 1), m("div", $e, [ m("span", {
            style: j(e.getInstanceColor())
        }, h(e.statusDictionary[e.instanceStatus].name), 5), m("span", He, h(e.fomatterMes(e.detail.message)), 1), m("i", {
            id: "copy",
            class: "el-icon-copy-document",
            "data-clipboard-text": e.detail.message,
            onClick: o[1] || (o[1] = i => e.copy())
        }, null, 8, ze) ]) ]), m("div", Je, [ u(_, {
            modelValue: e.activeMenu,
            "onUpdate:modelValue": o[4] || (o[4] = i => e.activeMenu = i),
            accordion: "",
            class: "leftNav"
        }, {
            default: r(() => [ u(V, {
                name: "0",
                onClick: o[3] || (o[3] = G(i => e.menuClick(1), [ "stop" ]))
            }, {
                title: r(() => [ m("div", {
                    class: Q([ {
                        "active-btn": e.currentLevel === 1
                    }, "flex items-center justify-start pl-2" ]),
                    style: {
                        width: "100%"
                    },
                    onClick: o[2] || (o[2] = (...i) => e.hanldeClick && e.hanldeClick(...i))
                }, [ m("span", null, [ e.taskRunData.statusName == "notRun" ? (c(), 
                v("img", Ke)) : (c(), v("img", {
                    key: 1,
                    src: e.getIcon(),
                    alt: "",
                    class: "name-icon"
                }, null, 8, qe)) ]), m("span", null, h(e.taskRunData.name), 1) ], 2) ]),
                default: r(() => [ (c(!0), v(va, null, ka(e.detail.status.steps, (i, y) => (c(), 
                v("div", {
                    key: y,
                    class: Q([ "secondMenu pl-4", {
                        "active-btn": e.activeIndex === "1" + y
                    } ]),
                    onClick: G(F => e.menuClick(2, i, 1, y), [ "stop" ])
                }, [ m("span", null, [ e.taskRunData.statusName == "notRun" ? (c(), 
                v("img", Qe)) : (c(), v("img", {
                    key: 1,
                    src: e.getStepIcon(e.arrStatus[y]),
                    alt: "",
                    class: "name-icon"
                }, null, 8, Xe)) ]), E(" " + h(e.taskRunStepData.name), 1) ], 10, Ge))), 128)) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ]), m("section", Ze, [ m("div", null, [ m("div", ea, [ m("div", null, [ E(h(e.currentLevel === 1 ? e.taskRunData.name : e.taskRunStepData.name) + " ", 1), e.currentLevel == 1 ? (c(), 
        v("span", {
            key: 0,
            style: j(e.getColor())
        }, h(e.statusDictionaryTask[e.taskRunData.statusName]), 5)) : C("", !0), e.currentLevel == 2 ? (c(), 
        v("span", {
            key: 1,
            style: j(e.getStepColor())
        }, h(e.statusDictionaryStep[e.taskRunStepData.statusName]), 5)) : C("", !0) ]), m("div", aa, [ e.currentLevel === 1 ? (c(), 
        v("span", sa, " 持续时间：" + h(e.getDurningTime()), 1)) : (c(), v("span", ta, " 持续时间：" + h(e.duringTime), 1)) ]) ]), e.currentLevel === 1 ? (c(), 
        b(x, {
            key: 0,
            modelValue: e.activeName1,
            "onUpdate:modelValue": o[5] || (o[5] = i => e.activeName1 = i),
            class: "demo-tabs"
        }, {
            default: r(() => [ e.pamasTableData.length > 0 ? (c(), b(d, {
                key: 0,
                label: "参数",
                name: "level1First"
            }, {
                default: r(() => [ u(w, {
                    data: e.pamasTableData,
                    style: {
                        width: "100%"
                    }
                }, {
                    default: r(() => [ u(k, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), u(k, {
                        prop: "type",
                        label: "值",
                        width: "180"
                    }), u(k, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : C("", !0), e.resultTableData.length > 0 ? (c(), b(d, {
                key: 1,
                label: "结果",
                name: "level1Second"
            }, {
                default: r(() => [ u(w, {
                    data: e.resultTableData,
                    style: {
                        width: "100%"
                    }
                }, {
                    default: r(() => [ u(k, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), u(k, {
                        prop: "value",
                        label: "值",
                        width: "180"
                    }), u(k, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : C("", !0), u(d, {
                label: "状态",
                name: "level1Third"
            }, {
                default: r(() => [ e.activeName1 == "level1Third" ? (c(), b(R, {
                    key: 0,
                    "code-string": e.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }), u(d, {
                label: "pod",
                name: "level1Four"
            }, {
                default: r(() => [ e.activeName1 == "level1Four" && e.podFlag ? (c(), 
                b(R, {
                    key: 0,
                    "code-string": e.podYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ])) : C("", !0), e.currentLevel === 2 ? (c(), b(x, {
            key: 1,
            modelValue: e.activeName2,
            "onUpdate:modelValue": o[7] || (o[7] = i => e.activeName2 = i),
            class: "demo-tabs",
            onTabClick: e.tabChange
        }, {
            default: r(() => [ u(d, {
                label: "日志",
                name: "first"
            }, {
                default: r(() => [ u(T, {
                    id: "logInput",
                    modelValue: e.logYaml,
                    "onUpdate:modelValue": o[6] || (o[6] = i => e.logYaml = i),
                    type: "textarea",
                    rows: 24,
                    placeholder: "",
                    disabled: ""
                }, null, 8, [ "modelValue" ]) ]),
                _: 1
            }), u(d, {
                label: "状态",
                name: "second"
            }, {
                default: r(() => [ e.activeName2 == "second" ? (c(), b(R, {
                    key: 0,
                    "code-string": e.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }), u(d, {
                label: "详情",
                name: "third"
            }, {
                default: r(() => [ e.activeName2 == "third" ? (c(), b(R, {
                    key: 0,
                    "code-string": e.detailYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue", "onTabClick" ])) : C("", !0) ]) ]) ]) ]);
    } ], [ "__scopeId", "data-v-3f3a7651" ] ]);
});

export {
    Pa as __tla,
    Ee as default
};