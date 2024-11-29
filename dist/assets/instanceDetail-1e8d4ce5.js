import {
    dU as ha,
    r as t,
    e as H,
    w as Ca,
    f as ba,
    g as fa,
    aT as ya,
    o,
    c as S,
    t as p,
    k as u,
    l as g,
    v as z,
    B as R,
    x as J,
    F as te,
    y as le,
    C as _,
    H as ne,
    z as ie,
    D as C,
    bo as K,
    n as Ra,
    aQ as _a,
    ad as Na,
    ae as wa,
    M as Sa,
    s as Ia,
    P as Ta,
    R as Fa,
    S as Da,
    __tla as Aa
} from "./index-6c08ea4c.js";

import {
    _ as pe,
    __tla as Oa
} from "./index-da0e4c45.js";

import {
    E as Ba,
    a as La,
    __tla as Va
} from "./el-collapse-item-c8b76a0a.js";

import {
    b as ce,
    c as oe
} from "./array-bottom-4bf24e22.js";

import {
    q as ue,
    r as ge,
    s as re,
    t as me,
    u as de,
    v as ve,
    w as ke,
    x as he,
    y as Ce,
    z as be,
    A as fe,
    B as ye,
    C as Re,
    D as _e,
    E as Ne,
    F as we,
    G as Se
} from "./check-C-7cf0dd88.js";

import {
    _ as Ie,
    a as Te,
    b as Fe,
    c as De,
    d as Ae,
    e as Oe,
    f as Be,
    g as Le,
    h as Ve,
    i as je,
    j as xe,
    k as Ye,
    l as Ee,
    m as Pe
} from "./warning-a30fb85a.js";

import {
    a as ja,
    b as Me,
    c as We
} from "./tenant-9e660cc6.js";

import {
    b as Ue,
    c as $e
} from "./fail-da771b5c.js";

import {
    _ as He
} from "./picSen-0394b184.js";

import {
    C as xa,
    __tla as Ya
} from "./clipboard-0a12866f.js";

import {
    g as Ea,
    a as ze,
    b as Pa,
    c as Ma,
    __tla as Wa
} from "./taskInstance-9258951c.js";

import {
    _ as Ua
} from "./_plugin-vue_export-helper-1b428a4d.js";

let Je, $a = Promise.all([ (() => {
    try {
        return Aa;
    } catch {}
})(), (() => {
    try {
        return Oa;
    } catch {}
})(), (() => {
    try {
        return Va;
    } catch {}
})(), (() => {
    try {
        return Ya;
    } catch {}
})(), (() => {
    try {
        return Wa;
    } catch {}
})() ]).then(async () => {
    const Ke = {
        name: "instanceDetail",
        components: {
            Back: ha,
            YamlEditor: pe
        },
        props: {
            detailContent: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "close" ],
        setup(c, r) {
            const b = t([]), a = t("0"), M = t("0"), V = t("level1First"), N = t("first"), W = t(null), D = t(""), m = t(""), l = t(""), A = t([]), v = t([]), I = t({}), B = t(1), f = t(""), n = t(""), j = t([]), k = t(!1), w = H(() => c.detailContent.status.taskRuns ? Object.values(c.detailContent.status.taskRuns)[0].status.podName : ""), h = t({
                podName: w.value,
                namespace: c.detailContent.metadata.namespace,
                containerName: ""
            }), L = t({
                podName: w.value,
                namespace: c.detailContent.metadata.namespace
            }), ga = t(c.detailContent), x = t(null), q = t(null), Y = t([]), G = t(null), Q = t(null), ra = t(null), i = t(null), X = t({
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
            }), ma = t({
                Succeeded: "成功",
                Failed: "失败",
                Pending: "挂起",
                Running: "运行",
                TaskRunCancelled: "取消",
                notRun: "未运行"
            }), da = t({
                Completed: "成功",
                Failed: "失败",
                Running: "运行",
                Waiting: "等待",
                Warning: "警告",
                notRun: "未运行",
                Error: "错误"
            }), T = t(""), F = (e, s) => e ? Date.parse(e) / 1e3 - Date.parse(s) / 1e3 + "秒" : "--", E = t(!1), Z = t(!1);
            let P = () => {
                Ea(h.value).then(e => {
                    if (e.code === 200) {
                        const s = e.data;
                        G.value = s, E.value = !0, ee();
                    }
                });
            }, ee = () => {
                Ra(() => {
                    setTimeout(() => {
                        const e = document.getElementById("logInput");
                        e && (e.scrollTop = e.scrollHeight);
                    }, 13);
                });
            }, ae = e => {
                ze({
                    namespace: c.detailContent.metadata.namespace,
                    taskRunName: f.value,
                    stepName: n.value
                }).then(s => {
                    l.value = s.data, l.value === "Running" ? ($(), T.value = F(new Date(), e.running.startedAt)) : T.value = F(e.terminated.finishedAt, e.terminated.startedAt);
                }).catch(s => {
                    l.value = " ";
                });
            };
            const se = t("");
            let U = e => {
                Pa({
                    namespace: c.detailContent.namespace,
                    taskRunName: e
                }).then(s => {
                    j.value = [], k.value = s.data.taskRunStatus === "notRun", se.value = s.data.taskRunStatus;
                    const y = s.data.stepStatus;
                    for (const d in y) j.value.push(y[d]);
                }).catch(s => {});
            }, $ = () => {
                N.value == "first" ? i.value = setInterval(() => {
                    ze({
                        namespace: c.detailContent.metadata.namespace,
                        taskRunName: f.value,
                        stepName: n.value
                    }).then(e => {
                        e.data == "Running" ? P() : (l.value = e.data, window.clearInterval(i.value), 
                        i.value = null);
                    }).catch(e => {
                        window.clearInterval(i.value), i.value = null;
                    });
                }, 3e3) : (window.clearInterval(i.value), i.value = null, E.value = !1);
            }, va = () => {
                L.value.podName && Ma(L.value).then(e => {
                    if (e.code === 200) {
                        const s = e.data;
                        Q.value = s, Z.value = !0;
                    }
                });
            }, O = H(() => c.detailContent.pipelineStatus);
            const ka = H(() => `color:${X.value[c.detailContent.pipelineStatus].color}`);
            return Ca(() => N.value, e => {
                e !== "first" && (window.clearInterval(i.value), i.value = null, 
                E.value = !1);
            }), ba(() => {
                (() => {
                    if (b.value = c.detailContent.status.taskRuns, b.value) {
                        D.value = Object.values(b.value)[0].pipelineTaskName, f.value = Object.keys(b.value)[0];
                        const e = Object.values(b.value)[0].status;
                        m.value = e.conditions[0].reason, m.value === "Running" ? T.value = F(new Date(), e.startTime) : T.value = F(e.completionTime, e.startTime), 
                        U(f.value, c.detailContent), A.value = e.taskSpec.params, 
                        v.value = e.taskResults || [], x.value = Object.values(b.value)[0].status, 
                        h.value.podName = e.podName, Y.value = e.taskSpec.steps, 
                        va();
                    }
                })();
            }), fa(() => {
                window.clearInterval(i.value), i.value = null;
            }), {
                goBack: () => {
                    r.emit("close");
                },
                copy: () => {
                    const e = new xa("#copy");
                    e.on("success", () => {
                        K.success("复制成功"), e.destroy();
                    }), e.on("error", () => {
                        K.success("复制失败"), e.destroy();
                    });
                },
                btns: b,
                hanldeClick: e => {
                    a.value = `${e}`;
                },
                activeIndex: a,
                activeSubIndex: M,
                activeName1: V,
                activeName2: N,
                activeMenu: W,
                detail: ga,
                fomatterMes: e => e.length > 50 ? `${e.substring(0, 50)}...` : e,
                time: T,
                formatterDuration: F,
                statusYaml: x,
                detailYaml: q,
                getLog: P,
                updateLog: $,
                logYaml: G,
                logFlag: E,
                rightContentTitle: D,
                menuChange: () => {
                    V.value = "level1First", N.value = "first";
                },
                menuClick: (e, s, y, d) => {
                    if (e === 2 && [ "notRun", "Waiting" ].includes(se.value)) K.warning("日志生成中，请稍后查看"); else switch (B.value = e, 
                    I.value = s, V.value = "level1First", N.value = "first", e) {
                      case 1:
                        window.clearInterval(i.value), i.value = null, D.value = s.pipelineTaskName, 
                        f.value = Object.keys(b.value)[y], U(f.value), m.value = s.status.conditions[0].reason, 
                        m.value === "Running" ? T.value = F(new Date(), s.status.startTime) : T.value = F(s.status.completionTime, s.status.startTime), 
                        A.value = s.status.taskSpec.params, x.value = s.status, 
                        h.value.podName = s.status.podName, L.value.podName = s.status.podName, 
                        Y.value = s.status.taskSpec.steps;
                        break;

                      case 2:
                        window.clearInterval(i.value), i.value = null, M.value = d, 
                        D.value = s.name, n.value = s.name, ae(s), a.value = `${y}${d}`, 
                        x.value = s, h.value.containerName = s.container, q.value = Y.value[d], 
                        P();
                    }
                },
                currentLevel: B,
                rightContentObject: I,
                level1Status: m,
                level2Status: l,
                pamasTableData: A,
                resultTableData: v,
                logParams: h,
                timer: i,
                tabChange: () => {
                    N.value == "first" ? (P(), l.value === "Running" && $()) : (window.clearInterval(i.value), 
                    i.value = null);
                },
                logYamlRef: ra,
                podParams: L,
                podName: w,
                podYaml: Q,
                podFlag: Z,
                detailYamlArray: Y,
                statusDictionary: X,
                statusDictionaryTask: ma,
                statusDictionaryStep: da,
                instanceStatus: O,
                instanceColor: ka,
                getColor: () => m.value === "Succeeded" ? "color:#1AD3AB" : m.value === "Failed" ? "color:#da1e28" : m.value === "Pending" ? "color:#F6C131" : m.value === "Running" ? "color:#354EF5" : m.value === "TaskRunCancelled" ? "color:#999" : void 0,
                getStepColor: () => l.value === "Completed" ? "color:#1AD3AB" : l.value === "Failed" || l.value === "Error" ? "color:#da1e28" : l.value === "Running" ? "color:#354EF5" : l.value === "Waiting" || l.value === "Warning" || l.value === "NotRun" ? "color:#999" : void 0,
                getInstanceColor: () => O.value === "Succeeded" ? "color:#1AD3AB" : O.value === "Failed" ? "color:#da1e28" : O.value === "PipelineRunPending" ? "color:#F6C131" : O.value === "Running" ? "color:#354EF5" : O.value === "PipelineRunCancelled" ? "color:#999" : void 0,
                getIcon: e => {
                    var d;
                    let s = "";
                    const y = Object.assign({
                        "../../../../assets/imgs/pipeline/array-bottom.png": ce,
                        "../../../../assets/imgs/pipeline/array-top.png": oe,
                        "../../../../assets/imgs/pipeline/check-A.png": ue,
                        "../../../../assets/imgs/pipeline/check-B.png": ge,
                        "../../../../assets/imgs/pipeline/check-C.png": re,
                        "../../../../assets/imgs/pipeline/check-abnormal.png": me,
                        "../../../../assets/imgs/pipeline/check-bg-complex.png": Ie,
                        "../../../../assets/imgs/pipeline/check-bg-error.png": Te,
                        "../../../../assets/imgs/pipeline/check-bg-normal.png": Fe,
                        "../../../../assets/imgs/pipeline/check-coverage.png": de,
                        "../../../../assets/imgs/pipeline/check-debt.png": ve,
                        "../../../../assets/imgs/pipeline/check-error.png": ke,
                        "../../../../assets/imgs/pipeline/check-normal.png": he,
                        "../../../../assets/imgs/pipeline/check-repeat.png": Ce,
                        "../../../../assets/imgs/pipeline/cirle-success-icon.png": De,
                        "../../../../assets/imgs/pipeline/class.png": be,
                        "../../../../assets/imgs/pipeline/codeLines.png": fe,
                        "../../../../assets/imgs/pipeline/comment.png": ye,
                        "../../../../assets/imgs/pipeline/commentLines.png": Re,
                        "../../../../assets/imgs/pipeline/doing.png": Me,
                        "../../../../assets/imgs/pipeline/fail.png": Ue,
                        "../../../../assets/imgs/pipeline/files.png": _e,
                        "../../../../assets/imgs/pipeline/icon-check-BLOCKER.png": Ae,
                        "../../../../assets/imgs/pipeline/icon-check-CRITICAL.png": Oe,
                        "../../../../assets/imgs/pipeline/icon-check-INFO.png": Be,
                        "../../../../assets/imgs/pipeline/icon-check-MAJOR.png": Le,
                        "../../../../assets/imgs/pipeline/icon-check-MINOR.png": Ve,
                        "../../../../assets/imgs/pipeline/icon-check-warning.png": je,
                        "../../../../assets/imgs/pipeline/lines.png": Ne,
                        "../../../../assets/imgs/pipeline/methods.png": we,
                        "../../../../assets/imgs/pipeline/picSen.png": He,
                        "../../../../assets/imgs/pipeline/pro-dialog-img1.png": xe,
                        "../../../../assets/imgs/pipeline/pro-dialog-img2.png": Ye,
                        "../../../../assets/imgs/pipeline/sentence.png": Se,
                        "../../../../assets/imgs/pipeline/succeed.png": Ee,
                        "../../../../assets/imgs/pipeline/success.png": $e,
                        "../../../../assets/imgs/pipeline/tenant.png": We,
                        "../../../../assets/imgs/pipeline/warning.png": Pe
                    });
                    return e === "Succeeded" && (s = "../../../../assets/imgs/pipeline/cirle-success-icon.png"), 
                    e === "Failed" && (s = "../../../../assets/imgs/pipeline/warning.png"), 
                    e === "Pending" && (s = "../../../../assets/imgs/pipeline/warning.png"), 
                    e === "Running" && (s = "../../../../assets/imgs/pipeline/warning.png"), 
                    e === "TaskRunCancelled" && (s = "../../../../assets/imgs/pipeline/warning.png"), 
                    (d = y[s]) == null ? void 0 : d.default;
                },
                setLogScrollHeight: ee,
                stepName: n,
                taskRunName: f,
                getStepsStatusValue: ae,
                arrStatus: j,
                getStepIcon: e => {
                    var d;
                    let s = "";
                    const y = Object.assign({
                        "../../../../assets/imgs/pipeline/array-bottom.png": ce,
                        "../../../../assets/imgs/pipeline/array-top.png": oe,
                        "../../../../assets/imgs/pipeline/check-A.png": ue,
                        "../../../../assets/imgs/pipeline/check-B.png": ge,
                        "../../../../assets/imgs/pipeline/check-C.png": re,
                        "../../../../assets/imgs/pipeline/check-abnormal.png": me,
                        "../../../../assets/imgs/pipeline/check-bg-complex.png": Ie,
                        "../../../../assets/imgs/pipeline/check-bg-error.png": Te,
                        "../../../../assets/imgs/pipeline/check-bg-normal.png": Fe,
                        "../../../../assets/imgs/pipeline/check-coverage.png": de,
                        "../../../../assets/imgs/pipeline/check-debt.png": ve,
                        "../../../../assets/imgs/pipeline/check-error.png": ke,
                        "../../../../assets/imgs/pipeline/check-normal.png": he,
                        "../../../../assets/imgs/pipeline/check-repeat.png": Ce,
                        "../../../../assets/imgs/pipeline/cirle-success-icon.png": De,
                        "../../../../assets/imgs/pipeline/class.png": be,
                        "../../../../assets/imgs/pipeline/codeLines.png": fe,
                        "../../../../assets/imgs/pipeline/comment.png": ye,
                        "../../../../assets/imgs/pipeline/commentLines.png": Re,
                        "../../../../assets/imgs/pipeline/doing.png": Me,
                        "../../../../assets/imgs/pipeline/fail.png": Ue,
                        "../../../../assets/imgs/pipeline/files.png": _e,
                        "../../../../assets/imgs/pipeline/icon-check-BLOCKER.png": Ae,
                        "../../../../assets/imgs/pipeline/icon-check-CRITICAL.png": Oe,
                        "../../../../assets/imgs/pipeline/icon-check-INFO.png": Be,
                        "../../../../assets/imgs/pipeline/icon-check-MAJOR.png": Le,
                        "../../../../assets/imgs/pipeline/icon-check-MINOR.png": Ve,
                        "../../../../assets/imgs/pipeline/icon-check-warning.png": je,
                        "../../../../assets/imgs/pipeline/lines.png": Ne,
                        "../../../../assets/imgs/pipeline/methods.png": we,
                        "../../../../assets/imgs/pipeline/picSen.png": He,
                        "../../../../assets/imgs/pipeline/pro-dialog-img1.png": xe,
                        "../../../../assets/imgs/pipeline/pro-dialog-img2.png": Ye,
                        "../../../../assets/imgs/pipeline/sentence.png": Se,
                        "../../../../assets/imgs/pipeline/succeed.png": Ee,
                        "../../../../assets/imgs/pipeline/success.png": $e,
                        "../../../../assets/imgs/pipeline/tenant.png": We,
                        "../../../../assets/imgs/pipeline/warning.png": Pe
                    });
                    return e == "Completed" && (s = "../../../../assets/imgs/pipeline/succeed.png"), 
                    e == "Failed" && (s = "../../../../assets/imgs/pipeline/warning.png"), 
                    e == "Running" && (s = "../../../../assets/imgs/pipeline/succeed.png"), 
                    e == "Waiting" && (s = "../../../../assets/imgs/pipeline/succeed.png"), 
                    e == "Warning" && (s = "../../../../assets/imgs/pipeline/succeed.png"), 
                    e == "NotRun" && (s = "../../../../assets/imgs/pipeline/succeed.png"), 
                    (d = y[s]) == null ? void 0 : d.default;
                },
                getAllStepsStatusValue: U,
                isNotRun: k
            };
        }
    }, qe = {
        class: "detail"
    }, Ge = {
        class: "header"
    }, Qe = {
        class: "title"
    }, Xe = {
        class: "status"
    }, Ze = {
        class: "center"
    }, ea = [ "data-clipboard-text" ], aa = {
        class: "content"
    }, sa = [ "onClick" ], ta = [ "src" ], la = [ "onClick" ], na = {
        key: 0,
        src: ja,
        alt: "",
        class: "name-icon"
    }, ia = [ "src" ], pa = {
        class: "cardBasic r rightContent pa-5"
    }, ca = {
        class: "headerDes"
    }, oa = {
        class: "time"
    }, ua = (c => (Fa("data-v-e025d447"), c = c(), Da(), c))(() => p("div", null, "pod", -1));
    Je = Ua(Ke, [ [ "render", function(c, r, b, a, M, V) {
        const N = ya("Back"), W = _a, D = Ba, m = La, l = Na, A = wa, v = Sa, I = pe, B = Ia, f = Ta;
        return o(), S("div", qe, [ p("div", Ge, [ p("span", {
            style: {
                cursor: "pointer"
            },
            onClick: r[0] || (r[0] = (...n) => a.goBack && a.goBack(...n))
        }, [ u(W, null, {
            default: g(() => [ u(N) ]),
            _: 1
        }), z(" 返回 ") ]), p("span", Qe, R(a.detail.name), 1), p("div", Xe, [ p("span", {
            style: J(a.getInstanceColor())
        }, R(a.statusDictionary[a.instanceStatus].name), 5), p("span", Ze, R(a.fomatterMes(a.detail.message)), 1), p("i", {
            id: "copy",
            class: "el-icon-copy-document",
            "data-clipboard-text": a.detail.message,
            onClick: r[1] || (r[1] = n => a.copy())
        }, null, 8, ea) ]) ]), p("div", aa, [ u(m, {
            modelValue: a.activeMenu,
            "onUpdate:modelValue": r[2] || (r[2] = n => a.activeMenu = n),
            accordion: "",
            class: "leftNav",
            onChange: a.menuChange
        }, {
            default: g(() => [ (o(!0), S(te, null, le(a.btns, (n, j, k) => (o(), 
            _(D, {
                key: k,
                name: k,
                onClick: ne(w => a.menuClick(1, n, k, null), [ "stop" ])
            }, {
                title: g(() => [ p("div", {
                    class: ie([ {
                        "active-btn": a.activeIndex === k + ""
                    }, "flex items-center justify-start pl-2" ]),
                    style: {
                        width: "100%"
                    },
                    onClick: w => a.hanldeClick(k)
                }, [ p("span", null, [ p("img", {
                    src: a.getIcon(n.status.conditions[0].reason),
                    alt: "",
                    class: "name-icon"
                }, null, 8, ta) ]), p("span", null, R(n.pipelineTaskName), 1) ], 10, sa) ]),
                default: g(() => [ (o(!0), S(te, null, le(n.status.steps, (w, h) => (o(), 
                S("div", {
                    key: h,
                    class: ie([ "secondMenu pl-4", {
                        "active-btn": a.activeIndex === k + "" + h
                    } ]),
                    onClick: ne(L => a.menuClick(2, w, k, h), [ "stop" ])
                }, [ a.isNotRun ? (o(), S("img", na)) : (o(), S("img", {
                    key: 1,
                    src: a.getStepIcon(a.arrStatus[h]),
                    alt: "",
                    class: "name-icon"
                }, null, 8, ia)), z(" " + R(w.name), 1) ], 10, la))), 128)) ]),
                _: 2
            }, 1032, [ "name", "onClick" ]))), 128)) ]),
            _: 1
        }, 8, [ "modelValue", "onChange" ]), p("section", pa, [ p("div", null, [ p("div", ca, [ p("div", null, [ z(R(a.rightContentTitle) + " ", 1), a.currentLevel == 1 ? (o(), 
        S("span", {
            key: 0,
            style: J(a.getColor())
        }, R(a.statusDictionaryTask[a.level1Status]), 5)) : C("", !0), a.currentLevel == 2 ? (o(), 
        S("span", {
            key: 1,
            style: J(a.getStepColor())
        }, R(a.statusDictionaryStep[a.level2Status]), 5)) : C("", !0) ]), p("div", oa, "持续时间：" + R(a.time), 1) ]), a.currentLevel === 1 ? (o(), 
        _(B, {
            key: 0,
            modelValue: a.activeName1,
            "onUpdate:modelValue": r[3] || (r[3] = n => a.activeName1 = n),
            class: "demo-tabs"
        }, {
            default: g(() => [ a.pamasTableData.length > 0 ? (o(), _(v, {
                key: 0,
                label: "参数",
                name: "level1First"
            }, {
                default: g(() => [ u(A, {
                    data: a.pamasTableData,
                    style: {
                        width: "100%"
                    }
                }, {
                    default: g(() => [ u(l, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), u(l, {
                        prop: "type",
                        label: "值",
                        width: "180"
                    }), u(l, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : C("", !0), a.resultTableData.length > 0 ? (o(), _(v, {
                key: 1,
                label: "结果",
                name: "level1Second"
            }, {
                default: g(() => [ u(A, {
                    data: a.resultTableData,
                    style: {
                        width: "100%"
                    }
                }, {
                    default: g(() => [ u(l, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), u(l, {
                        prop: "value",
                        label: "值",
                        width: "180"
                    }), u(l, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : C("", !0), u(v, {
                label: "状态",
                name: "level1Third"
            }, {
                default: g(() => [ a.activeName1 == "level1Third" ? (o(), _(I, {
                    key: 0,
                    "code-string": a.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }), u(v, {
                label: "pod",
                name: "level1Four"
            }, {
                default: g(() => [ a.activeName1 == "level1Four" && a.podFlag ? (o(), 
                _(I, {
                    key: 0,
                    "code-string": a.podYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0), ua ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ])) : C("", !0), a.currentLevel === 2 ? (o(), _(B, {
            key: 1,
            modelValue: a.activeName2,
            "onUpdate:modelValue": r[5] || (r[5] = n => a.activeName2 = n),
            class: "demo-tabs",
            onTabClick: a.tabChange
        }, {
            default: g(() => [ u(v, {
                label: "日志",
                name: "first"
            }, {
                default: g(() => [ u(f, {
                    id: "logInput",
                    modelValue: a.logYaml,
                    "onUpdate:modelValue": r[4] || (r[4] = n => a.logYaml = n),
                    type: "textarea",
                    rows: 24,
                    placeholder: "",
                    disabled: ""
                }, null, 8, [ "modelValue" ]) ]),
                _: 1
            }), u(v, {
                label: "状态",
                name: "second"
            }, {
                default: g(() => [ a.activeName2 == "second" ? (o(), _(I, {
                    key: 0,
                    "code-string": a.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }), u(v, {
                label: "详情",
                name: "third"
            }, {
                default: g(() => [ a.activeName2 == "third" ? (o(), _(I, {
                    key: 0,
                    "code-string": a.detailYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : C("", !0) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue", "onTabClick" ])) : C("", !0) ]) ]) ]) ]);
    } ], [ "__scopeId", "data-v-e025d447" ] ]);
});

export {
    $a as __tla,
    Je as default
};