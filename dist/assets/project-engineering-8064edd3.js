import {
    r as I,
    a0 as de,
    h as ne,
    T as ue,
    u as ce,
    e as J,
    a as l,
    b9 as k,
    U as f,
    f as me,
    A as Ie,
    o as C,
    c as ye,
    t as ge,
    k as N,
    l as G,
    C as Q,
    D as Y,
    m as fe,
    E as _e,
    M as he,
    cn as Pe,
    s as je,
    a9 as ve,
    __tla as Te
} from "./index-6c08ea4c.js";

import {
    i as Se,
    g as Ve,
    a as Ne,
    b as Ge,
    c as be,
    e as O,
    f as Z,
    h as Re,
    j as z,
    k as Fe,
    __tla as we
} from "./project-enjineering-046a4b77.js";

import ee, {
    __tla as De
} from "./tableTree-bfb0c36c.js";

import {
    a as Ue,
    __tla as ke
} from "./project-51c056b9.js";

import {
    _ as Ce
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as Oe
} from "./gitInitDialog-0be58b20.js";

import "./git-init-run-c22497e9.js";

import {
    __tla as xe
} from "./database-info-f5a22a6b.js";

import {
    __tla as Be
} from "./copy-a238bc51.js";

import {
    __tla as Ee
} from "./clipboard-0a12866f.js";

import {
    __tla as Le
} from "./file-e038b35d.js";

import {
    __tla as Ae
} from "./init-log-a1c43284.js";

import {
    __tla as Ke
} from "./log-8da79d7b.js";

import {
    __tla as Xe
} from "./proDialog-9a22c5bf.js";

import {
    __tla as Me
} from "./el-image-0d184777.js";

import {
    __tla as $e
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as qe
} from "./throttle-1adeb119.js";

import {
    __tla as He
} from "./proFileDialog-04d3a80e.js";

import {
    __tla as We
} from "./setDemoUrl.vue_vue_type_script_setup_true_lang-60a7133c.js";

import "./validate-b72f006c.js";

import {
    __tla as Je
} from "./middleWareDialog-afa592a5.js";

import {
    __tla as Qe
} from "./addService-6cba1f65.js";

import {
    __tla as Ye
} from "./cloud-6a4afb61.js";

import {
    __tla as Ze
} from "./addPort-61bffaa8.js";

import {
    __tla as ze
} from "./serviceUploadDialog-ef3d8c60.js";

import "./formatter-7ecf379a.js";

let te, et = Promise.all([ (() => {
    try {
        return Te;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Be;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return Ke;
    } catch {}
})(), (() => {
    try {
        return Xe;
    } catch {}
})(), (() => {
    try {
        return Me;
    } catch {}
})(), (() => {
    try {
        return $e;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return He;
    } catch {}
})(), (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return Je;
    } catch {}
})(), (() => {
    try {
        return Qe;
    } catch {}
})(), (() => {
    try {
        return Ye;
    } catch {}
})(), (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return ze;
    } catch {}
})() ]).then(async () => {
    let x, B;
    x = {
        class: "main_content"
    }, B = {
        class: "top_btn"
    }, te = Ce({
        __name: "project-engineering",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        setup(ie, {
            expose: oe
        }) {
            const ae = ie, s = I({}), {
                projectId: P
            } = de(ae);
            ne(), ue();
            const se = ce(), E = J(() => l(se.currentRoute)), c = J(() => l(E).path.indexOf("/neu/") >= 0 || l(E).path.indexOf("/private/") >= 0), b = I("");
            k("isDb", b);
            const d = f({
                redisVersion: "",
                nacosVersion: "",
                dbType: "",
                dbVersion: "",
                sourceProjectId: "",
                source: "",
                dbAndmiddlewareList: [],
                techType: "3"
            }), j = I([]), h = I(""), v = I("1"), L = I([ {
                name: "代码仓库"
            }, {
                name: "项目演示文件"
            } ]), A = I([ {
                name: "代码仓库"
            }, {
                name: "数据字典"
            }, {
                name: "中间件"
            }, {
                name: "项目演示文件"
            } ]), _ = f({
                dbVersion: "",
                dbType: ""
            }), K = I("0"), R = I(!1), F = I("XXXX"), p = f({
                projectId: P.value,
                region: "1",
                source: "",
                techType: "",
                isPipeline: !0
            }), a = f({
                list1: [ {
                    eid: "",
                    fileId: "",
                    resource: "项目初始化工程仓库",
                    description: "项目初始化工程仓库是本项目开发初期创建的项目工程框架项目的仓库，此仓库中的项目为教学过程中，学生实际用到的项目，基于此项目开发及开展教学工作。",
                    type: "2",
                    uploadStatus: "0",
                    gitProjectType: "1",
                    gitType: "0",
                    status: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                }, {
                    eid: "",
                    fileId: "",
                    resource: "项目源工程仓库",
                    description: "项目源工程仓库是项目源文件的仓库，教学过程中，此仓库的项目，可展示并指导学生功能的具体实现过程。",
                    type: "3",
                    uploadStatus: "0",
                    gitProjectType: "3",
                    gitType: "0",
                    status: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                list3: [ {
                    eid: "",
                    fileId: "",
                    resource: "nginx配置文件",
                    description: "前后端分离项目，通过nignx发布时，需要配置文件中指定后端路由，必须上传配置后的nginx.conf文件",
                    type: "7",
                    uploadStatus: "0",
                    region: "1",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                }, {
                    eid: "",
                    fileId: "",
                    resource: "项目演示文件",
                    description: "项目演示文件是指项目编译构建后发布的文件，用来部署系统供选择该项目进行实训的项目组成员实时了解项目开发最终成果物时使用；上传的项目演示文件必须是编译构建好的文件，必须打包成zip(文件类型从数据库获取)文件进行上传。",
                    type: "4",
                    uploadStatus: "0",
                    demoFileStatus: "1",
                    region: "1",
                    deployFrontendStatus: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                demoUrlObject: {}
            }), i = f({
                list1: [ {
                    eid: "",
                    fileId: "",
                    resource: "项目初始化工程仓库",
                    description: "项目初始化工程仓库是本项目开发初期创建的项目工程框架项目的仓库，此仓库中的项目为教学过程中，学生实际用到的项目，基于此项目开发及开展教学工作。",
                    type: "2",
                    uploadStatus: "0",
                    gitProjectType: "2",
                    gitType: "0",
                    status: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                }, {
                    eid: "",
                    fileId: "",
                    resource: "项目源工程仓库",
                    description: "项目源工程仓库是项目源文件的仓库，教学过程中，此仓库的项目，可展示并指导学生功能的具体实现过程。",
                    type: "3",
                    uploadStatus: "0",
                    gitProjectType: "4",
                    gitType: "0",
                    status: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                list2: [ {
                    eid: "",
                    resource: "项目演示数据库",
                    description: "项目数据库创建文件是用来部署项目数据库的文件，供未来项目演示及项目开发使用；项目演示数据库文件和项目开发数据库文件是同一个文件，上传后系统自动识别分别部署。上传文件必须是sql文件进行上传。上传文件系统自动生成数据库配置，请按照生成的数据库配置信息手动修改项目演示文件中的数据库配置文件，然后再部署项目演示文件。",
                    type: "6",
                    schemaStatus: 0,
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                }, {
                    eid: "",
                    fileId: "",
                    resource: "项目教学数据库文件",
                    description: "项目教学数据库文件是用来部署项目教学数据库的文件，供未来项目开发使用",
                    type: "5",
                    uploadStatus: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                list3: [ {
                    eid: "",
                    fileId: "",
                    resource: "项目演示文件",
                    description: "项目演示文件是指项目编译构建后发布的文件，用来部署系统供选择该项目进行实训的项目组成员实时了解项目开发最终成果物时使用；上传的项目演示文件必须是编译构建好的文件，必须打包成zip(文件类型从数据库获取)文件进行上传。",
                    type: "4",
                    uploadStatus: "0",
                    demoFileStatus: "1",
                    region: "2",
                    deployBackendStatus: "0",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                list4: [ {
                    key: !1,
                    resource: "redis",
                    description: "该redis供演示项目使用，项目演示环境关于Redis的配置均基于此配置",
                    status: "0",
                    version: "",
                    dbClassify: "6",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                }, {
                    key: !1,
                    resource: "nacos",
                    description: "该nacos供演示微服务项目注册中心及配置中心使用，创建成功请访问nacos控制台，如：http://ip:端口/nacos，来完成nacos配置创建等其他前置工作。",
                    status: "0",
                    version: "",
                    dbClassify: "6",
                    gitStoreInfo: {
                        evnGitProTempId: "",
                        projectId: "",
                        eid: "",
                        gitGroupId: "",
                        gitProId: "",
                        gitProName: "",
                        gitProjectName: "",
                        gitProjectType: "",
                        gitGroupPath: "",
                        gitGroupFullPath: "",
                        envId: "",
                        ciName: "",
                        ciNameSpace: ""
                    }
                } ],
                demoUrlObject: {}
            }), T = f({
                uploadFailure: !1,
                deployFailure: !1,
                urlFailure: !1
            });
            k("hasFailureData", T);
            const w = () => {
                Ve({
                    projectId: P.value,
                    sourceProjectId: h.value,
                    classify: "6",
                    source: c.value ? "1" : "2"
                }).then(t => {
                    i.list4[0].status = (t == null ? void 0 : t.status) || "0";
                });
            }, D = () => {
                Ne({
                    projectId: P.value,
                    sourceProjectId: h.value,
                    classify: "6",
                    source: c.value ? "1" : "2"
                }).then(t => {
                    i.list4[1].status = (t == null ? void 0 : t.status) || "0";
                });
            }, X = () => {
                M();
            }, S = (t, o, e) => {
                t[o].gitType = "1", t[o].status = e.status ?? "0", Object.keys(t[o].gitStoreInfo).forEach(u => {
                    t[o].gitStoreInfo[u] = (e == null ? void 0 : e[u]) ?? null;
                });
            }, V = I(!1), M = async () => {
                try {
                    V.value = !0;
                    const t = await Ge({
                        projectId: p.projectId,
                        sourceProjectId: h.value ?? ""
                    });
                    for (let o = 0; o < t.length; o++) {
                        const e = t[o];
                        e.gitProjectType === "1" ? S(a.list1, 0, e) : e.gitProjectType === "3" ? S(a.list1, 1, e) : e.gitProjectType === "2" ? S(i.list1, 0, e) : e.gitProjectType === "4" && S(i.list1, 1, e);
                    }
                    V.value = !1;
                } catch {
                    V.value = !1;
                }
            }, le = async () => {
                var m, y, g, H, W;
                j.value = [];
                let t = await Ue(P.value);
                s.value = t, b.value = (m = t == null ? void 0 : t.pipelineInfoRespVo) == null ? void 0 : m.isDb, 
                p.isPipeline = (y = t == null ? void 0 : t.pipelineInfoRespVo) == null ? void 0 : y.isPipeline, 
                (g = t == null ? void 0 : t.pipelineInfoRespVo) != null && g.isDemo && (((H = t == null ? void 0 : t.pipelineInfoRespVo) == null ? void 0 : H.demoType) != "2" || (W = t == null ? void 0 : t.pipelineInfoRespVo) != null && W.isPipeline) || (L.value = [ {
                    name: "代码仓库"
                } ], A.value = [ {
                    name: "代码仓库"
                }, {
                    name: "数据字典"
                }, {
                    name: "中间件"
                } ]);
                let o = {
                    projectId: p.projectId,
                    sourceProjectId: ""
                };
                const e = t.pipelineInfoRespVo.middlewares;
                e == null || e.forEach(r => {
                    j.value.push(r.middlewareName), r.middlewareName === "redis" ? (i.list4[0].version = r.middlewareVersion, 
                    d.redisVersion = r.middlewareVersion) : r.middlewareName === "nacos" && (i.list4[1].version = r.middlewareVersion, 
                    d.nacosVersion = r.middlewareVersion);
                });
                for (let r = 0; r < i.list4.length; r++) i.list4[r].key = j.value.includes(i.list4[r].resource.toLowerCase());
                F.value = t.name || "", _.dbVersion = t.pipelineInfoRespVo.dbVersion || "", 
                _.dbType = t.pipelineInfoRespVo.dbType || "", d.dbVersion = t.pipelineInfoRespVo.dbVersion || "", 
                d.dbType = t.pipelineInfoRespVo.dbType || "", d.source = t.pipelineInfoRespVo.source, 
                R.value = t.pipelineInfoRespVo.isWare || !1, d.dbAndmiddlewareList = [ ...j.value ], 
                b.value === "1" && d.dbAndmiddlewareList.unshift(t.pipelineInfoRespVo.dbType), 
                w(), D(), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 1 && (z({
                    projectId: s.value.id,
                    demoType: "nginx"
                }).then(r => {
                    r && r.length > 0 ? a.demoUrlObject = {
                        demoId: r[0].demoId,
                        projectId: r[0].projectId,
                        demoType: r[0].demoType,
                        demoUrl: r[0].demoUrl,
                        sourceClassify: c != null && c.value ? "1" : "2",
                        deployType: 1
                    } : a.demoUrlObject = {
                        demoId: "",
                        projectId: s.value.id,
                        demoType: "nginx",
                        demoUrl: "",
                        sourceClassify: c != null && c.value ? "1" : "2",
                        deployType: 1
                    };
                }), z({
                    projectId: s.value.id,
                    demoType: "java8"
                }).then(r => {
                    r && r.length > 0 ? i.demoUrlObject = {
                        demoId: r[0].demoId,
                        projectId: r[0].projectId,
                        demoType: r[0].demoType,
                        demoUrl: r[0].demoUrl,
                        sourceClassify: c != null && c.value ? "1" : "2",
                        deployType: 1
                    } : i.demoUrlObject = {
                        demoId: "",
                        projectId: s.value.id,
                        demoType: "java8",
                        demoUrl: "",
                        sourceClassify: c != null && c.value ? "1" : "2",
                        deployType: 1
                    };
                }));
                const u = await Fe(o);
                i.list3[0].deployBackendStatus = u.deployBackendStatus || "0", a.list3[1].deployFrontendStatus = u.deployFrontendStatus || "0", 
                i.list2[0].schemaStatus = u.schemaStatus || "0";
            }, $ = {
                1: (t, o) => {},
                2: (t, o) => {
                    const e = t[o];
                    e.region == "1" ? (a.list1[0].uploadStatus = e.uploadStatus, 
                    a.list1[0].fileId = e.id, a.list1[0].eid = e.eid, a.list1[0].name = e.name) : e.region == "2" && (i.list1[0].uploadStatus = e.uploadStatus, 
                    i.list1[0].fileId = e.id, i.list1[0].eid = e.eid, i.list1[0].name = e.name);
                },
                3: (t, o) => {
                    const e = t[o];
                    e.region == "1" ? (a.list1[1].uploadStatus = e.uploadStatus, 
                    a.list1[1].fileId = e.id, a.list1[1].eid = e.eid, a.list1[1].name = e.name) : e.region == "2" && (i.list1[1].uploadStatus = e.uploadStatus, 
                    i.list1[1].fileId = e.id, i.list1[1].name = e.name, i.list1[1].eid = e.eid);
                },
                4: (t, o) => {
                    const e = t[o];
                    e.region == "1" ? (a.list3[1].uploadStatus = e.uploadStatus ?? "0", 
                    a.list3[1].fileId = e.id, a.list3[1].region = e.region, a.list3[1].eid = e.eid, 
                    a.list3[1].name = e.name, a.list3[1].demoFileStatus = e.demoFileStatus) : e.region == "2" && (i.list3[0].uploadStatus = e.uploadStatus ?? "0", 
                    i.list3[0].fileId = e.id, i.list3[0].region = e.region, i.list3[0].eid = e.eid, 
                    i.list3[0].name = e.name, i.list3[0].demoFileStatus = e.demoFileStatus);
                },
                5: (t, o) => {
                    const e = t[o];
                    e.region == "2" && (i.list2[1].uploadStatus = e.uploadStatus, 
                    i.list2[1].fileId = e.id, i.list2[1].eid = e.eid, i.list2[1].name = e.name);
                },
                6: (t, o) => {
                    const e = t[o];
                    e.region == "1" ? (a.list2[0].uploadStatus = e.uploadStatus, 
                    a.list2[0].fileId = e.id, a.list2[0].eid = e.eid, a.list2[0].name = e.name) : e.region == "2" && (i.list2[0].uploadStatus = e.uploadStatus, 
                    i.list2[0].fileId = e.id, i.list2[0].eid = e.eid, i.list2[0].name = e.name);
                },
                7: (t, o) => {
                    const e = t[o];
                    e.region == "1" && (a.list3[0].uploadStatus = e.uploadStatus ?? "0", 
                    a.list3[0].fileId = e.id, a.list3[0].region = e.region, a.list3[0].eid = e.eid, 
                    a.list3[0].name = e.name);
                },
                default: () => {}
            }, U = async t => {
                (() => {
                    const e = u => {
                        u.forEach(m => {
                            m.uploadStatus = "0", m.fileId = "", m.gitType = "0", 
                            m.status = "0", m.eid = "";
                        });
                    };
                    e(a.list1), e(a.list3), e(i.list1), e(i.list2), e(i.list3), 
                    e(i.list4), a.demoUrlObject = {}, i.demoUrlObject = {};
                })(), await le(), await pe(), await M();
                const o = await be({
                    projectId: t.projectId,
                    region: ""
                });
                for (let e = 0; e < o.length; e++) ($[o[e].type] || $.default)(o, e);
            }, re = t => {
                p.region = t.props.name;
            };
            let n = f([]);
            const pe = async () => {
                const t = await Re({
                    techId: s.value.pipelineInfoRespVo.techDirection
                });
                if (t) return d.techType = t == null ? void 0 : t.type, p.techType = t == null ? void 0 : t.type, 
                t;
            }, q = I(!1);
            return k("authEditDevops", q), me(async () => {
                await U(p), [ "2" ].includes(d.techType) && (v.value = "2", p.region = "2"), 
                Se(p.projectId).then(t => {
                    q.value = t;
                });
            }), oe({
                projectResult: () => new Promise((t, o) => {
                    if (n.length = 0, [ "1", "3", "4" ].includes(d.techType) && (() => {
                        const {
                            list1: e,
                            list3: u
                        } = a, {
                            deployFrontendStatus: m
                        } = u[1], y = d.techType;
                        e[0].status !== "3" && n.push({
                            tips: "前端项目初始化工程仓库未初始化成功"
                        }), e[1].status !== "3" && n.push({
                            tips: "前端项目源仓库未初始化成功"
                        }), !u[0].eid && s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && [ "1", "3", "4" ].includes(y) && p.isPipeline && n.push({
                            tips: "nginx.conf文件未上传"
                        }), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && !u[1].eid && [ "1", "3", "4" ].includes(y) && p.isPipeline ? n.push({
                            tips: "前端项目演示文件未上传"
                        }) : m !== "1" && s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && [ "1", "3", "4" ].includes(y) && p.isPipeline && n.push({
                            tips: "前端项目演示文件未部署成功"
                        }), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 1 && [ "1", "3", "4" ].includes(y) && !a.demoUrlObject.demoUrl && n.push({
                            tips: "前端项目演示地址未配置"
                        });
                    })(), [ "2", "3", "4" ].includes(d.techType) && (i.list1[0].status != "3" && n.push({
                        tips: "后端项目初始化工程仓库未初始化成功"
                    }), i.list1[1].status != "3" && n.push({
                        tips: "后端项目源文件仓库未初始化成功"
                    }), i.list2[0].schemaStatus == "5" || _.dbVersion == "" || s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 1 || n.push({
                        tips: "后端项目演示数据库文件未部署成功"
                    }), i.list2[1].uploadStatus == "0" && _.dbVersion != "" && n.push({
                        tips: "后端项目教学数据库未上传"
                    }), i.list4[0].key == 1 && i.list4[0].status == "0" && n.push({
                        tips: "后端项目中间件Redis未创建成功"
                    }), i.list4[1].key == 1 && i.list4[1].status == "0" && n.push({
                        tips: "后端项目中间件Nacos未创建成功"
                    }), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && !i.list3[0].eid && [ "2", "3" ].includes(d.techType) && p.isPipeline || s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && [ "4" ].includes(d.techType) && p.isPipeline && T.uploadFailure ? n.push({
                        tips: "后端项目演示文件未上传"
                    }) : (i.list3[0].deployBackendStatus != "1" && s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && [ "2", "3" ].includes(d.techType) && p.isPipeline || s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 2 && [ "4" ].includes(d.techType) && p.isPipeline && T.deployFailure) && n.push({
                        tips: "后端项目演示文件未部署成功"
                    }), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 1 && [ "2", "3" ].includes(d.techType) && !i.demoUrlObject.demoUrl && n.push({
                        tips: "后端项目演示地址未配置"
                    }), s.value.pipelineInfoRespVo.isDemo && s.value.pipelineInfoRespVo.demoType == 1 && [ "4" ].includes(d.techType) && T.urlFailure && n.push({
                        tips: "后端项目演示地址未配置"
                    })), n.length > 0) {
                        let e = "";
                        n.forEach(function(u) {
                            e += `<p>${u.tips}</p>`;
                        }), _e.confirm(`${e}`, "提示", {
                            showConfirmButton: !1,
                            cancelButtonText: "关闭",
                            dangerouslyUseHTMLString: !0
                        }), o("有未完成项");
                    } else {
                        if (!s.value.pipelineInfoRespVo.isDemo && a.list3[0].eid && O({
                            fileId: a.list3[0].fileId,
                            delType: "1"
                        }), !s.value.pipelineInfoRespVo.isDemo && a.list3[1].eid) {
                            let e = a.list3[1].demoFileStatus;
                            O({
                                fileId: a.list3[1].fileId,
                                delType: "1"
                            }).then(u => {
                                Z({
                                    projectId: p.projectId,
                                    demoFileStatus: e,
                                    region: "1",
                                    type: "4"
                                });
                            });
                        }
                        if (!s.value.pipelineInfoRespVo.isDemo && i.list3[0].eid) {
                            let e = i.list3[0].demoFileStatus;
                            O({
                                fileId: i.list3[0].fileId,
                                delType: "1"
                            }).then(u => {
                                Z({
                                    projectId: p.projectId,
                                    demoFileStatus: e,
                                    region: "2",
                                    type: "4"
                                });
                            });
                        }
                        t("success");
                    }
                })
            }), (t, o) => {
                const e = he, u = Pe, m = je, y = ve;
                return Ie((C(), ye("div", x, [ ge("div", B, [ N(m, {
                    modelValue: l(v),
                    "onUpdate:modelValue": o[4] || (o[4] = g => fe(v) ? v.value = g : null),
                    class: "demo-tabs",
                    onTabClick: re
                }, {
                    default: G(() => [ N(u, {
                        style: {
                            height: "100%"
                        }
                    }, {
                        default: G(() => [ [ "1", "3", "4" ].includes(l(d).techType) ? (C(), 
                        Q(e, {
                            key: 0,
                            label: "前端项目资源",
                            name: "1"
                        }, {
                            default: G(() => [ N(ee, {
                                projectInfo: l(s),
                                cloumnName: l(L),
                                dbInfo: l(_),
                                isComplete: l(K),
                                middlewareUseKey: l(R),
                                resName: l(F),
                                resourcesParams: l(p),
                                tableData: l(a),
                                sourceProjectId: l(h),
                                onGetNacos: D,
                                onGetRedis: w,
                                onGitType: o[0] || (o[0] = g => X()),
                                onIncrement: o[1] || (o[1] = g => U(l(p)))
                            }, null, 8, [ "projectInfo", "cloumnName", "dbInfo", "isComplete", "middlewareUseKey", "resName", "resourcesParams", "tableData", "sourceProjectId" ]) ]),
                            _: 1
                        })) : Y("", !0), [ "2", "3", "4" ].includes(l(d).techType) ? (C(), 
                        Q(e, {
                            key: 1,
                            label: "后端项目资源",
                            name: "2"
                        }, {
                            default: G(() => [ N(ee, {
                                projectInfo: l(s),
                                cloumnName: l(A),
                                dbInfo: l(_),
                                isComplete: l(K),
                                middlewareUseKey: l(R),
                                resName: l(F),
                                resourcesParams: l(p),
                                tableData: l(i),
                                sourceProjectId: l(h),
                                onGetNacos: D,
                                onGetRedis: w,
                                onGitType: o[2] || (o[2] = g => X()),
                                onIncrement: o[3] || (o[3] = g => U(l(p)))
                            }, null, 8, [ "projectInfo", "cloumnName", "dbInfo", "isComplete", "middlewareUseKey", "resName", "resourcesParams", "tableData", "sourceProjectId" ]) ]),
                            _: 1
                        })) : Y("", !0) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]) ])), [ [ y, l(V) ] ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c79c89fd" ] ]);
});

export {
    et as __tla,
    te as default
};