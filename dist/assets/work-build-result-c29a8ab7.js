import {
    a6 as ze,
    dU as Le,
    r as t,
    e as le,
    w as _e,
    f as He,
    g as We,
    aT as Me,
    o as s,
    c as p,
    t as n,
    k as o,
    l as d,
    B as h,
    D as m,
    C as f,
    v as H,
    F as ne,
    y as se,
    H as ie,
    z as oe,
    x as ue,
    bo as V,
    n as $e,
    aQ as ea,
    aC as aa,
    _ as ta,
    J as la,
    ad as na,
    ae as sa,
    M as ia,
    s as oa,
    P as ua,
    R as ca,
    S as ra,
    __tla as da
} from "./index-6c08ea4c.js";

import {
    _ as ce,
    __tla as ma
} from "./index-da0e4c45.js";

import {
    E as Aa,
    a as va,
    __tla as ga
} from "./el-collapse-item-c8b76a0a.js";

import {
    C as pa,
    __tla as Ca
} from "./clipboard-0a12866f.js";

import {
    g as ha,
    a as re,
    b as Ra,
    c as ka,
    __tla as Sa
} from "./taskInstance-9258951c.js";

import {
    k as fa,
    __tla as wa
} from "./build-0e7c99ca.js";

import {
    q as Na,
    h as ya,
    __tla as ba
} from "./file-e038b35d.js";

import {
    _ as Fa,
    a as Oa
} from "./fail-da771b5c.js";

import {
    _ as Da,
    a as Ba
} from "./tenant-9e660cc6.js";

import {
    _ as Qa
} from "./_plugin-vue_export-helper-1b428a4d.js";

let de, Xa = Promise.all([ (() => {
    try {
        return da;
    } catch {}
})(), (() => {
    try {
        return ma;
    } catch {}
})(), (() => {
    try {
        return ga;
    } catch {}
})(), (() => {
    try {
        return Ca;
    } catch {}
})(), (() => {
    try {
        return Sa;
    } catch {}
})(), (() => {
    try {
        return wa;
    } catch {}
})(), (() => {
    try {
        return ba;
    } catch {}
})() ]).then(async () => {
    const me = {
        name: "instanceDetail",
        methods: {
            dayjs: ze
        },
        components: {
            Back: Le,
            YamlEditor: ce
        },
        props: {
            detailContent: {
                type: Object,
                default: () => ({})
            },
            buildObject: {
                type: Object,
                default: () => ({})
            }
        },
        emits: [ "close", "goPage" ],
        setup(c, A) {
            const v = t([]), a = t("0"), x = t("0"), Y = t("level1First"), b = t("first"), Z = t(null), D = t(""), C = t(""), r = t(""), q = t([]), J = t([]), w = t({}), I = t(1), g = t(""), N = t(""), B = t([]), G = t(!1), i = t(Object.values(c.detailContent.status.taskRuns)[0].status.podName), Q = t({
                podName: i.value,
                namespace: c.detailContent.metadata.namespace,
                containerName: ""
            }), R = t({
                podName: i.value,
                namespace: c.detailContent.metadata.namespace
            }), X = t(c.detailContent), y = t(null), z = t(null), K = t([]), W = t(null), M = t(null), Pe = t(null), u = t(null), $ = t({
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
            }), Te = t({
                Succeeded: "成功",
                Failed: "失败",
                Pending: "挂起",
                Running: "运行",
                TaskRunCancelled: "取消",
                notRun: "未运行"
            }), je = t({
                Completed: "成功",
                Failed: "失败",
                Running: "运行",
                Waiting: "等待",
                Warning: "警告",
                notRun: "未运行",
                Error: "错误"
            }), F = t(""), O = (e, l) => e ? Date.parse(e) / 1e3 - Date.parse(l) / 1e3 + "秒" : "--", E = t(!1), ee = t(!1);
            let P = () => {
                ha(Q.value).then(e => {
                    if (e.code === 200) {
                        const l = e.data;
                        W.value = l, E.value = !0, ae();
                    }
                });
            }, ae = () => {
                $e(() => {
                    setTimeout(() => {
                        const e = document.getElementById("logInput");
                        e && (e.scrollTop = e.scrollHeight);
                    }, 13);
                });
            }, te = e => re({
                namespace: c.detailContent.metadata.namespace,
                taskRunName: g.value,
                stepName: N.value
            }).then(l => {
                var k, S, T;
                return r.value = l.data, r.value === "Running" ? (_(), F.value = O(new Date(), (k = e.running) == null ? void 0 : k.startedAt)) : F.value = O((S = e.terminated) == null ? void 0 : S.finishedAt, (T = e.terminated) == null ? void 0 : T.startedAt), 
                l;
            }).catch(l => {
                r.value = " ";
            }), L = e => {
                Ra({
                    namespace: c.detailContent.namespace,
                    taskRunName: e
                }).then(l => {
                    B.value = [], G.value = l.data.taskRunStatus === "notRun";
                    const k = l.data.stepStatus;
                    for (const S in k) B.value.push(k[S]);
                }).catch(l => {});
            }, _ = () => {
                b.value == "first" ? u.value = setInterval(() => {
                    re({
                        namespace: c.detailContent.metadata.namespace,
                        taskRunName: g.value,
                        stepName: N.value
                    }).then(e => {
                        e.data == "Running" ? P() : (r.value = e.data, window.clearInterval(u.value), 
                        u.value = null);
                    }).catch(e => {
                        window.clearInterval(u.value), u.value = null;
                    });
                }, 3e3) : (window.clearInterval(u.value), u.value = null, E.value = !1);
            }, xe = () => {
                ka(R.value).then(e => {
                    if (e.code === 200) {
                        const l = e.data;
                        M.value = l, ee.value = !0;
                    }
                });
            }, U = le(() => c.detailContent.pipelineStatus);
            const Ze = le(() => `color:${$.value[c.detailContent.pipelineStatus].color}`);
            return _e(() => b.value, e => {
                e !== "first" && (window.clearInterval(u.value), u.value = null, 
                E.value = !1);
            }), He(() => {
                (() => {
                    v.value = c.detailContent.status.taskRuns, D.value = Object.values(v.value)[0].pipelineTaskName, 
                    g.value = Object.keys(v.value)[0];
                    const {
                        status: e
                    } = Object.values(v.value)[0];
                    C.value = e.conditions[0].reason, C.value === "Running" ? F.value = O(new Date(), e == null ? void 0 : e.startTime) : F.value = O(e == null ? void 0 : e.completionTime, e == null ? void 0 : e.startTime), 
                    L(g.value, c.detailContent), q.value = e.taskSpec.params, J.value = e.taskResults || [], 
                    y.value = Object.values(v.value)[0].status, Q.value.podName = e.podName, 
                    K.value = e.taskSpec.steps, xe();
                })();
            }), We(() => {
                window.clearInterval(u.value), u.value = null;
            }), {
                handleGoPage: () => {
                    A.emit("goPage", "list");
                },
                goBack: () => {
                    A.emit("close");
                },
                copy: () => {
                    const e = new pa("#copy");
                    e.on("success", () => {
                        V.success("复制成功"), e.destroy();
                    }), e.on("error", () => {
                        V.success("复制失败"), e.destroy();
                    });
                },
                btns: v,
                downloadBuildBag: e => {
                    fa(e).then(l => {
                        const k = l;
                        l ? (Na(k).then(S => {
                            ya(k, S.objectKey);
                        }), V.success("开始下载构建包")) : V.warning("暂时无法下载构架包");
                    });
                },
                hanldeClick: e => {
                    a.value = `${e}`;
                },
                activeIndex: a,
                activeSubIndex: x,
                activeName1: Y,
                activeName2: b,
                activeMenu: Z,
                detail: X,
                fomatterMes: e => e.length > 50 ? `${e.substring(0, 50)}...` : e,
                time: F,
                formatterDuration: O,
                statusYaml: y,
                detailYaml: z,
                getLog: P,
                updateLog: _,
                logYaml: W,
                logFlag: E,
                rightContentTitle: D,
                menuChange: () => {
                    Y.value = "level1First", b.value = "first";
                },
                menuClick: async (e, l, k, S) => {
                    I.value = e, w.value = l, Y.value = "level1First", b.value = "first";
                    const T = [ "notRun", "Waiting", "Running" ];
                    switch (e) {
                      case 1:
                        window.clearInterval(u.value), u.value = null, D.value = l.pipelineTaskName, 
                        g.value = Object.keys(v.value)[k], L(g.value), C.value = l.status.conditions[0].reason, 
                        C.value === "Running" ? F.value = O(new Date(), l.status.startTime) : F.value = O(l.status.completionTime, l.status.startTime), 
                        q.value = l.status.taskSpec.params, y.value = l.status, 
                        Q.value.podName = l.status.podName, R.value.podName = l.status.podName, 
                        K.value = l.status.taskSpec.steps;
                        break;

                      case 2:
                        if (window.clearInterval(u.value), u.value = null, x.value = S, 
                        D.value = l.name, N.value = l.name, await te(l), T.includes(r.value)) return void V.warning("日志生成中，请稍后查看");
                        a.value = `${k}${S}`, y.value = l, Q.value.containerName = l.container, 
                        z.value = K.value[S], P();
                    }
                },
                currentLevel: I,
                rightContentObject: w,
                level1Status: C,
                level2Status: r,
                pamasTableData: q,
                resultTableData: J,
                logParams: Q,
                timer: u,
                tabChange: () => {
                    b.value == "first" ? (P(), r.value === "Running" && _()) : (window.clearInterval(u.value), 
                    u.value = null);
                },
                logYamlRef: Pe,
                podParams: R,
                podName: i,
                podYaml: M,
                podFlag: ee,
                detailYamlArray: K,
                statusDictionary: $,
                statusDictionaryTask: Te,
                statusDictionaryStep: je,
                instanceStatus: U,
                instanceColor: Ze,
                getColor: () => C.value === "Succeeded" ? "color:#1AD3AB" : C.value === "Failed" ? "color:#da1e28" : C.value === "Pending" ? "color:#F6C131" : C.value === "Running" ? "color:#354EF5" : C.value === "TaskRunCancelled" ? "color:#999" : void 0,
                getStepColor: () => r.value === "Completed" ? "color:#1AD3AB" : r.value === "Failed" || r.value === "Error" ? "color:#da1e28" : r.value === "Running" ? "color:#354EF5" : r.value === "Waiting" || r.value === "Warning" || r.value === "NotRun" ? "color:#999" : void 0,
                getInstanceColor: () => U.value === "Succeeded" ? "color:#1AD3AB" : U.value === "Failed" ? "color:#da1e28" : U.value === "PipelineRunPending" ? "color:#F6C131" : U.value === "Running" ? "color:#354EF5" : U.value === "PipelineRunCancelled" ? "color:#999" : void 0,
                getIcon: e => e === "Succeeded" ? new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFASURBVCiRnZIxTwJBEIXfjHeGwoJCkqOzwAqDFvwBOxJJlEQgoZLCShL+io2VlZ05KTCRWFL5A4whUlBYmAsJFJTi4T4L7+RQQOKrZifvmzebXUFEiY7rWJQzGB6JyFbQ7lFwNxFeDNKlfuiVsHAe3WNVuQQQx3yNQFP1MuXmNxhANwuAWdEUvEy5KYmO69hGnpck/U4e+9tqGdRWgN4idZwxu64KPfxjt4f1iZWE4DrsCJBXglsR1ysoBQDdEPIVuXfxd0Dkp7OQ0h/TYwC6vnIfxJWvyNk+9rAm9wA2ok4VyMv0KJsUtu0PjXuZ4skiCIKeGpjb2R4cCtvJp0Z9LgSAZOv/zzFIl/rG8HRFCKCpetnKUAGgv1tqGMMigNHSpODXBFeaKtFxHcugJiIHIFL4cvRItmQ8OfeylWHo/QTZl4DOrvEoDgAAAABJRU5ErkJggg==", self.location) : e === "Failed" || e === "Pending" || e === "Running" || e === "TaskRunCancelled" ? new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAABHNCSVQICAgIfAhkiAAAAwlJREFUWIXtlzFoFGkUx39vZnZnkeVYIYVFShvB4uSusLBY4YRYaDKB7S1WMbmdJXAnKgguqERQC2djUmhhKYiOsUkK4bawSHNwReCuSGfKOwRZ4m52Zp7FbiQXZpKsO0kh+y/fe9///XjD9z4GhvpOJGmY6HQpH5jBTwBWaP0p8y+bg3oagxpsVsfLHTP4oNBQaHTM4MNmdbw8qO9AE2tXJiZExO85/QWA8iOAqjr23Js33+r9zRPTmYmCIbLQheBm1vNPZT3/lCo3AQyRBZ2ZKBw6WCc07igcE3hvz/n3t+L2nH9f4L3CsSA0bh8q2Gbl4s+gV4EgEqZ25nuxQNFKt/aQwBCzDligj23PX92Ztj1/FeUJYPVqDx6sVXGuAqcF1jNhppZUl4msWwLrwOnP1cm+b2lfYJ+uXBgxhFmASLi2276S+ZfNSLgGYKo++HTlwsiBgeVsaxYoCCzbnv9ie67tOktt11naHrM9/4Wg74BC72z6YJ+rzhmgDLTCMHR35gXGBMZ2xsMwmgJaQLnnkR6Y1oqWqWztrEe5+bdr+22Qm3+7psojAFNZ0FrRSg2s/e/RGeAkyFq2+fHufqG21D0ja8DJ9n+FSipgG+7kqCHcBhBRV543Wv2CyfNGS0TdbkO5s+FOjg4MZqk+APKq+irj+ctJdQrLCon5jOcvKywC+Z7nrtr1EW9NO2OGyRLQDJATR+qv1/cy3E0b7uSohf4N5COic7n64ruk2sSJ6aVizjClDqDKvUGhAI7UX6+rcq/b2FzQS8Vc32DBD0d/Az0OrGZHPj7cq2ncHotTz+sf0OPdHn2A6XQpr8oNABGmpNYI9mq4X0mtEYhwGUCV33W6lI+tiwu2qs6YoSwJNDJ1/2xaUNvVcZ0/FIqRcD4Xc6niP6VKb0Ka2qQS9bXX/xW7he3QXOmYQVORXzquc90KrSdp/GDA1x+XXxWKQNMOzZW4usR1sVkdL6PG0zRgEiXR5ay3+CwulXgrs97iMyUqASt0H+G01AJWlKiUBDXUUEMNNdQB6gu+4S1av7IhRwAAAABJRU5ErkJggg==", self.location) : void 0,
                setLogScrollHeight: ae,
                stepName: N,
                taskRunName: g,
                getStepsStatusValue: te,
                arrStatus: B,
                getStepIcon: e => e == "Completed" ? new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGrSURBVCiRfZKxaxNxFMc/75e76uCQJXA2Dje0IMS2FDq6iB2EFkwwJtpNUChY8C8RXAShf4GXk5xgsZ38E2JoDpcMmc5COnRw8HrXew6XK2do+50e7/c+P7689xVKqoWeY6m8JdOmiLiz9liFb6nox2mjc1LMSlE4Q69tjOznXQnQizCvKw1UmwBo9ipa7QaX4AzqgX5eSO3dyXrrrOzEHfSr51byCaSLZq1otRtILfQcO5NfoEfRSucFN6h+7PmKPCZOlo2VsQewkNq71wG10LsDYKf2awC9bb8zBvMUkWDeXqHFn95DO5Pf9aHXnqy3zhAJBLaNom6xiPrwy73FY79fCz2ngKjId9DhucVhvqCLEGXJ5MsyKYAm8V/Q+3YmP+6O/GcFlBieTBudP2UnRpCJVGQNINrYOU2MPgIQVf8qSDFrCGOTkX1FtekO+lWAaaNzMoPfz0PuoF8V2FbVg9I5OIxWnr+88RyjXk+VTeJk+b8AqODfSqw3VwUgttN9UdqXASge5yMnqiMAFXlwbeRKh3asjD0R2UJZyj9hrKoHEqcfoo2d02L2HyJg0YaaYQD3AAAAAElFTkSuQmCC", self.location) : e == "Failed" ? new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAABHNCSVQICAgIfAhkiAAAAwlJREFUWIXtlzFoFGkUx39vZnZnkeVYIYVFShvB4uSusLBY4YRYaDKB7S1WMbmdJXAnKgguqERQC2djUmhhKYiOsUkK4bawSHNwReCuSGfKOwRZ4m52Zp7FbiQXZpKsO0kh+y/fe9///XjD9z4GhvpOJGmY6HQpH5jBTwBWaP0p8y+bg3oagxpsVsfLHTP4oNBQaHTM4MNmdbw8qO9AE2tXJiZExO85/QWA8iOAqjr23Js33+r9zRPTmYmCIbLQheBm1vNPZT3/lCo3AQyRBZ2ZKBw6WCc07igcE3hvz/n3t+L2nH9f4L3CsSA0bh8q2Gbl4s+gV4EgEqZ25nuxQNFKt/aQwBCzDligj23PX92Ztj1/FeUJYPVqDx6sVXGuAqcF1jNhppZUl4msWwLrwOnP1cm+b2lfYJ+uXBgxhFmASLi2276S+ZfNSLgGYKo++HTlwsiBgeVsaxYoCCzbnv9ie67tOktt11naHrM9/4Wg74BC72z6YJ+rzhmgDLTCMHR35gXGBMZ2xsMwmgJaQLnnkR6Y1oqWqWztrEe5+bdr+22Qm3+7psojAFNZ0FrRSg2s/e/RGeAkyFq2+fHufqG21D0ja8DJ9n+FSipgG+7kqCHcBhBRV543Wv2CyfNGS0TdbkO5s+FOjg4MZqk+APKq+irj+ctJdQrLCon5jOcvKywC+Z7nrtr1EW9NO2OGyRLQDJATR+qv1/cy3E0b7uSohf4N5COic7n64ruk2sSJ6aVizjClDqDKvUGhAI7UX6+rcq/b2FzQS8Vc32DBD0d/Az0OrGZHPj7cq2ncHotTz+sf0OPdHn2A6XQpr8oNABGmpNYI9mq4X0mtEYhwGUCV33W6lI+tiwu2qs6YoSwJNDJ1/2xaUNvVcZ0/FIqRcD4Xc6niP6VKb0Ka2qQS9bXX/xW7he3QXOmYQVORXzquc90KrSdp/GDA1x+XXxWKQNMOzZW4usR1sVkdL6PG0zRgEiXR5ay3+CwulXgrs97iMyUqASt0H+G01AJWlKiUBDXUUEMNNdQB6gu+4S1av7IhRwAAAABJRU5ErkJggg==", self.location) : e == "Running" || e == "Waiting" || e == "Warning" || e == "NotRun" ? new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGrSURBVCiRfZKxaxNxFMc/75e76uCQJXA2Dje0IMS2FDq6iB2EFkwwJtpNUChY8C8RXAShf4GXk5xgsZ38E2JoDpcMmc5COnRw8HrXew6XK2do+50e7/c+P7689xVKqoWeY6m8JdOmiLiz9liFb6nox2mjc1LMSlE4Q69tjOznXQnQizCvKw1UmwBo9ipa7QaX4AzqgX5eSO3dyXrrrOzEHfSr51byCaSLZq1otRtILfQcO5NfoEfRSucFN6h+7PmKPCZOlo2VsQewkNq71wG10LsDYKf2awC9bb8zBvMUkWDeXqHFn95DO5Pf9aHXnqy3zhAJBLaNom6xiPrwy73FY79fCz2ngKjId9DhucVhvqCLEGXJ5MsyKYAm8V/Q+3YmP+6O/GcFlBieTBudP2UnRpCJVGQNINrYOU2MPgIQVf8qSDFrCGOTkX1FtekO+lWAaaNzMoPfz0PuoF8V2FbVg9I5OIxWnr+88RyjXk+VTeJk+b8AqODfSqw3VwUgttN9UdqXASge5yMnqiMAFXlwbeRKh3asjD0R2UJZyj9hrKoHEqcfoo2d02L2HyJg0YaaYQD3AAAAAElFTkSuQmCC", self.location) : void 0,
                getAllStepsStatusValue: L,
                isNotRun: G
            };
        }
    }, j = c => (ca("data-v-05c4ef18"), c = c(), ra(), c), Ae = {
        class: "detail"
    }, ve = {
        class: "page-header"
    }, ge = j(() => n("span", null, "返回", -1)), pe = j(() => n("span", null, "构建任务结果", -1)), Ce = {
        class: "content"
    }, he = {
        class: "content-header"
    }, Re = {
        class: "header-left"
    }, ke = {
        class: "task-title"
    }, Se = {
        class: "title"
    }, fe = {
        key: 0,
        class: "error-message"
    }, we = [ "title" ], Ne = {
        key: 1,
        class: "success-message"
    }, ye = [ j(() => n("span", null, "构建成功", -1)) ], be = {
        class: "task-info"
    }, Fe = {
        class: "header-right"
    }, Oe = {
        key: 1,
        class: "success-img",
        src: Fa,
        alt: ""
    }, De = {
        key: 2,
        class: "error-img",
        src: Oa,
        alt: ""
    }, Be = {
        key: 3,
        class: "doing-img",
        src: Da,
        alt: ""
    }, Qe = {
        class: "log-container"
    }, Xe = [ "onClick" ], Ue = {
        class: "ml-2"
    }, qe = [ "src" ], Ie = [ "onClick" ], Ve = {
        key: 0,
        src: Ba,
        alt: "",
        class: "name-icon"
    }, Ye = [ "src" ], Je = {
        class: "cardBasic r rightContent"
    }, Ge = {
        style: {
            height: "100%"
        }
    }, Ke = {
        class: "headerDes"
    }, Ee = {
        class: "time"
    };
    de = Qa(me, [ [ "render", function(c, A, v, a, x, Y) {
        const b = Me("Back"), Z = ea, D = aa, C = ta, r = la, q = Aa, J = va, w = na, I = sa, g = ia, N = ce, B = oa, G = ua;
        return s(), p("div", Ae, [ n("div", ve, [ n("div", {
            class: "back",
            onClick: A[0] || (A[0] = (...i) => a.handleGoPage && a.handleGoPage(...i))
        }, [ o(Z, null, {
            default: d(() => [ o(b) ]),
            _: 1
        }), ge ]), o(D, {
            direction: "vertical"
        }), pe ]), n("div", Ce, [ n("div", he, [ n("div", Re, [ n("div", ke, [ n("span", Se, h(v.buildObject.structureTaskName), 1), a.instanceStatus === "Failed" ? (s(), 
        p("div", fe, [ o(C, {
            icon: "svg-icon:info2"
        }), n("span", {
            class: "overSpan",
            style: {
                "max-width": "500px"
            },
            title: a.detail.message
        }, h(a.detail.message), 9, we) ])) : m("", !0), a.instanceStatus === "Succeeded" ? (s(), 
        p("div", Ne, ye)) : m("", !0) ]), n("div", be, [ n("span", null, "代码源：" + h(v.buildObject.evnGitProUrl), 1), n("span", null, "构建时间&时长：" + h(v.detailContent.createTime) + " " + h(`${v.detailContent.time}s`), 1), n("span", null, "发起人：" + h(`${v.buildObject.executeUserRealName}`), 1) ]) ]), n("div", Fe, [ v.buildObject.envId ? (s(), 
        f(r, {
            key: 0,
            type: "primary",
            size: "large",
            style: {
                "margin-right": "150px",
                "margin-left": "15px"
            },
            onClick: A[1] || (A[1] = i => a.downloadBuildBag(v.buildObject.envId))
        }, {
            default: d(() => [ H("下载构建包") ]),
            _: 1
        })) : m("", !0), a.instanceStatus === "Succeeded" ? (s(), p("img", Oe)) : m("", !0), a.instanceStatus === "Failed" ? (s(), 
        p("img", De)) : m("", !0), a.instanceStatus === "Running" ? (s(), p("img", Be)) : m("", !0) ]) ]), n("div", Qe, [ o(J, {
            modelValue: a.activeMenu,
            "onUpdate:modelValue": A[2] || (A[2] = i => a.activeMenu = i),
            accordion: "",
            class: "leftNav",
            onChange: a.menuChange
        }, {
            default: d(() => [ (s(!0), p(ne, null, se(a.btns, (i, Q, R) => (s(), 
            f(q, {
                key: R,
                name: R,
                onClick: ie(X => a.menuClick(1, i, R, null), [ "stop" ])
            }, {
                title: d(() => [ n("div", {
                    class: oe([ {
                        "active-btn": a.activeIndex === R + ""
                    }, "flex items-center justify-start" ]),
                    style: {
                        width: "100%"
                    },
                    onClick: X => a.hanldeClick(R)
                }, [ n("span", Ue, [ n("img", {
                    src: a.getIcon(i.status.conditions[0].reason),
                    alt: "",
                    class: "name-icon"
                }, null, 8, qe) ]), n("span", null, h(i.pipelineTaskName), 1) ], 10, Xe) ]),
                default: d(() => [ (s(!0), p(ne, null, se(i.status.steps, (X, y) => (s(), 
                p("div", {
                    key: y,
                    class: oe([ "secondMenu pl-4", {
                        "active-btn": a.activeIndex === R + "" + y
                    } ]),
                    onClick: ie(z => a.menuClick(2, X, R, y), [ "stop" ])
                }, [ a.isNotRun ? (s(), p("img", Ve)) : (s(), p("img", {
                    key: 1,
                    src: a.getStepIcon(a.arrStatus[y]),
                    alt: "",
                    class: "name-icon"
                }, null, 8, Ye)), H(" " + h(X.name), 1) ], 10, Ie))), 128)) ]),
                _: 2
            }, 1032, [ "name", "onClick" ]))), 128)) ]),
            _: 1
        }, 8, [ "modelValue", "onChange" ]), n("section", Je, [ n("div", Ge, [ n("div", Ke, [ n("div", null, [ H(h(a.rightContentTitle) + " ", 1), a.currentLevel == 1 ? (s(), 
        p("span", {
            key: 0,
            style: ue(a.getColor())
        }, h(a.statusDictionaryTask[a.level1Status]), 5)) : m("", !0), a.currentLevel == 2 ? (s(), 
        p("span", {
            key: 1,
            style: ue(a.getStepColor())
        }, h(a.statusDictionaryStep[a.level2Status]), 5)) : m("", !0) ]), n("div", Ee, "持续时间：" + h(a.time), 1) ]), a.currentLevel === 1 ? (s(), 
        f(B, {
            key: 0,
            modelValue: a.activeName1,
            "onUpdate:modelValue": A[3] || (A[3] = i => a.activeName1 = i),
            class: "demo-tabs"
        }, {
            default: d(() => [ a.pamasTableData.length > 0 ? (s(), f(g, {
                key: 0,
                label: "参数",
                name: "level1First",
                style: {
                    height: "100%"
                }
            }, {
                default: d(() => [ o(I, {
                    data: a.pamasTableData,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, {
                    default: d(() => [ o(w, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), o(w, {
                        prop: "type",
                        label: "值",
                        width: "180"
                    }), o(w, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : m("", !0), a.resultTableData.length > 0 ? (s(), f(g, {
                key: 1,
                label: "结果",
                name: "level1Second",
                style: {
                    height: "100%"
                }
            }, {
                default: d(() => [ o(I, {
                    data: a.resultTableData,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, {
                    default: d(() => [ o(w, {
                        prop: "name",
                        label: "名称",
                        width: "180"
                    }), o(w, {
                        prop: "value",
                        label: "值",
                        width: "180"
                    }), o(w, {
                        prop: "description",
                        label: "描述"
                    }) ]),
                    _: 1
                }, 8, [ "data" ]) ]),
                _: 1
            })) : m("", !0), o(g, {
                label: "状态",
                name: "level1Third"
            }, {
                default: d(() => [ a.activeName1 == "level1Third" ? (s(), f(N, {
                    key: 0,
                    "code-string": a.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : m("", !0) ]),
                _: 1
            }), o(g, {
                label: "pod",
                name: "level1Four"
            }, {
                default: d(() => [ a.activeName1 == "level1Four" && a.podFlag ? (s(), 
                f(N, {
                    key: 0,
                    "code-string": a.podYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : m("", !0) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue" ])) : m("", !0), a.currentLevel === 2 ? (s(), f(B, {
            key: 1,
            modelValue: a.activeName2,
            "onUpdate:modelValue": A[5] || (A[5] = i => a.activeName2 = i),
            class: "demo-tabs",
            onTabClick: a.tabChange
        }, {
            default: d(() => [ o(g, {
                label: "日志",
                name: "first",
                style: {
                    height: "100%"
                }
            }, {
                default: d(() => [ o(G, {
                    id: "logInput",
                    modelValue: a.logYaml,
                    "onUpdate:modelValue": A[4] || (A[4] = i => a.logYaml = i),
                    type: "textarea",
                    rows: 24,
                    placeholder: "",
                    disabled: "",
                    style: {
                        height: "100%"
                    }
                }, null, 8, [ "modelValue" ]) ]),
                _: 1
            }), o(g, {
                label: "状态",
                name: "second"
            }, {
                default: d(() => [ a.activeName2 == "second" ? (s(), f(N, {
                    key: 0,
                    "code-string": a.statusYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : m("", !0) ]),
                _: 1
            }), o(g, {
                label: "详情",
                name: "third"
            }, {
                default: d(() => [ a.activeName2 == "third" ? (s(), f(N, {
                    key: 0,
                    "code-string": a.detailYaml,
                    "read-only": !0
                }, null, 8, [ "code-string" ])) : m("", !0) ]),
                _: 1
            }) ]),
            _: 1
        }, 8, [ "modelValue", "onTabClick" ])) : m("", !0) ]) ]) ]) ]) ]);
    } ], [ "__scopeId", "data-v-05c4ef18" ] ]);
});

export {
    Xa as __tla,
    de as default
};