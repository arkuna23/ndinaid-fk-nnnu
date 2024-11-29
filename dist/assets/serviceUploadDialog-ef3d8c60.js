import {
    p as ue,
    b0 as Pe,
    r as i,
    T as Se,
    a5 as Ve,
    U as Ge,
    e as Re,
    w as ze,
    o as p,
    c as h,
    t as o,
    k as n,
    l as r,
    a as g,
    v as m,
    C as j,
    D as k,
    z as Je,
    B as ce,
    F as re,
    y as Be,
    bo as R,
    n as pe,
    _ as Ke,
    J as Le,
    ch as Oe,
    Y as Me,
    aU as qe,
    P as $e,
    R as He,
    S as Ye,
    __tla as Ae
} from "./index-6c08ea4c.js";

import {
    e as Qe,
    f as We,
    o as Xe,
    s as Ze,
    m as ea,
    d as aa,
    c as la,
    __tla as ta
} from "./project-enjineering-046a4b77.js";

import {
    b as da,
    p as sa,
    q as ve,
    __tla as ia
} from "./file-e038b35d.js";

import {
    g as oa,
    __tla as na
} from "./log-8da79d7b.js";

import ua, {
    __tla as ca
} from "./gitInitDialog-0be58b20.js";

import {
    c as me,
    __tla as ra
} from "./cloud-6a4afb61.js";

import {
    _ as pa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./git-init-run-c22497e9.js";

let fe, va = Promise.all([ (() => {
    try {
        return Ae;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return ia;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return ca;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})() ]).then(async () => {
    let D, z, J, B, K, L, O, M, q, $, H, Y, A, Q, W;
    D = w => (He("data-v-a90f2f79"), w = w(), Ye(), w), z = {
        key: 0,
        class: "template_download"
    }, J = D(() => o("span", null, [ o("p", {
        class: "p1"
    }, "文件模板"), o("p", {
        class: "p2"
    }, "根据模板提示完善内容") ], -1)), B = {
        class: "content"
    }, K = {
        class: "upload-box"
    }, L = D(() => o("span", {
        class: "title"
    }, "点击上传文件", -1)), O = {
        class: "tip"
    }, M = {
        class: "file-lists"
    }, q = {
        class: "file-list list-space"
    }, $ = {
        class: "file-name"
    }, H = [ "onClick" ], Y = {
        key: 0,
        class: "dialog-footer"
    }, A = {
        key: 1,
        class: "dialog-footer"
    }, Q = {
        class: "log-content"
    }, W = {
        class: "dialog-footer"
    }, fe = pa({
        __name: "serviceUploadDialog",
        emits: [ "serviceUploadFile", "getGitType", "refresh" ],
        setup(w, {
            expose: ye,
            emit: _e
        }) {
            const he = ue(), X = Pe("authEditDevops"), Z = i(null), b = i(""), ee = i("文件上传"), Ie = Se(), C = i(null), E = i(".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.MP4,.JPG,.JPEG"), N = i("1024"), ae = i("支持文件类型：pdf、doc、docx、ppt、pptx、xls、xlsx、zip、MP4、JPG、JPEG"), f = i(!1), x = i(!1), F = i("2"), ge = Ve.CancelToken, P = i(null), y = i(0), S = i(""), _ = i({}), a = Ge({
                id: "",
                fileId: "",
                eid: "",
                projectId: "",
                demoFileStatus: "1",
                region: "",
                type: "",
                uploadStatus: "",
                demoId: ""
            }), le = i(""), v = _e, ke = () => {
                te(), a.eid = "", a.type == "6" && v("serviceUploadFile", {}), d.value.splice(0, d.value.length);
            }, d = i([]), be = async e => {
                e.delType == 0 ? (await me.delFile(_.value.demoId), a.eid = "", 
                a.id = "", a.uploadStatus = "0", d.value = [], v("serviceUploadFile", {}), 
                v("refresh", {})) : (d.value = [], a.id = "", a.fileId = "", a.eid = "", 
                a.name = "", a.uploadStatus = "0");
            }, te = () => {
                typeof P.value == "function" && P.value();
            }, xe = e => {
                const l = e.name.length > 200, s = e.name.substring(e.name.lastIndexOf("."));
                if (E.value.split(",").includes(s)) {
                    if (e.size >= 1024 * N.value * 1024) return R.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${N.value}MB`), 
                    void C.value.clearFiles();
                    if (l) return R.error("上传图片名称不能超过200个字符!"), void C.value.clearFiles();
                    {
                        const t = new FormData();
                        return t.append("file", e.raw), t.append("source", da), 
                        void sa(t, u => {
                            const {
                                loaded: U,
                                total: I
                            } = u;
                            y.value = Number((90 * Number(U / I)).toFixed());
                        }, new ge(function(u) {
                            P.value = u;
                        })).then(async u => {
                            y.value = 100, setTimeout(() => {
                                y.value = 0;
                            }, 500), d.value.splice(0, d.value.length), d.value.push({
                                name: u.data.objectKey,
                                eid: u.data.eid,
                                fileId: "",
                                delType: 1
                            }), u.data.eid && (a.uploadStatus = "1"), a.eid = u.data.eid, 
                            a.name = u.data.objectKey, y.value = 0;
                        }).catch(() => {
                            y.value = 0;
                        });
                    }
                }
                return R.error("请上传符合规则的资源格式"), void C.value.clearFiles();
            }, V = Re(() => !a.eid), de = async () => {
                a.eid && (v("serviceUploadFile", a), a.eid = ""), f.value = !1;
            }, Ue = () => {
                de(), pe(() => {
                    _.value.demoEid = _.value.demoEid || d.value[0].eid, Z.value.openDialog(_.value);
                });
            }, we = async e => {
                ve(e).then(l => {
                    d.value.splice(0, d.value.length), d.value.push({
                        name: a.name || l.objectKey,
                        eid: e,
                        fileId: "",
                        delType: 0
                    }), a.eid = e;
                });
            }, Ce = () => {
                v("getGitType");
            }, Fe = () => {
                a.eid && We(a).then(() => {
                    (async () => {
                        const e = await la({
                            projectId: a.projectId,
                            region: ""
                        });
                        for (let l = 0; l < e.data.length; l++) e.data[l].eid === _.value.demoEid && ve(e.data[l].eid).then(s => {
                            d.value.splice(0, d.value.length), d.value.push({
                                name: s.objectKey,
                                eid: e.data[l].eid,
                                fileId: e.data[l].fileId
                            }), a.fileId = e.data[l].fileId, a.eid = e.data[l].eid;
                        });
                    })(), v("serviceUploadFile", {}), a.eid = "";
                }), Xe(a.projectId, "6", S.value).then(e => {
                    var l;
                    (l = d.value[0]) != null && l.eid ? (Ze({
                        projectDbId: e.data.proDbId,
                        sqlEid: d.value[0].eid,
                        dbClassify: "6"
                    }).then(s => {
                        ea({
                            projectId: a.projectId,
                            logType: "1",
                            sourceProjectId: S.value
                        }).then(t => {
                            De({
                                envId: t.data[0].envId ?? "",
                                ciName: t.data[0].ciName ?? "",
                                ciNameSpace: t.data[0].ciNameSpace ?? "",
                                ciType: t.data[0].ciType ?? ""
                            });
                        });
                    }), v("serviceUploadFile", {})) : he.error("请先上传Sql文件!");
                });
            }, se = i(null), Te = () => {
                try {
                    window.clearInterval(se.value);
                } catch {}
                v("serviceUploadFile", {});
            }, ie = e => {
                oa({
                    ciName: e.ciName,
                    ciNamespace: e.ciNameSpace,
                    envId: e.envId,
                    ciType: e.ciType
                }).then(l => {
                    let s = b.value;
                    b.value = l.data, pe(() => {
                        s != b.value && setTimeout(() => {
                            const t = document.getElementById("logInput");
                            t && (t.scrollTop = t.scrollHeight);
                        }, 50);
                    });
                });
            }, je = () => {
                f.value = !1, x.value = !1;
            }, De = e => {
                x.value = !0, ie(e), se.value = setInterval(() => {
                    ie();
                }, 3e3);
            }, Ee = () => {
                aa().then(e => {
                    const l = new Blob([ e ]), s = document.createElement("a");
                    s.download = "nginx模板文件.conf", s.style.display = "none", s.href = URL.createObjectURL(l), 
                    document.body.appendChild(s), s.click(), URL.revokeObjectURL(s.href), 
                    document.body.removeChild(s);
                });
            };
            ze(Ie, () => {
                te();
            });
            const Ne = () => {
                x.value = !1;
            };
            return ye({
                openDialog: (e, l, s, t, u, U, I, G, c, oe) => {
                    _.value = e, d.value.splice(0, d.value.length), E.value = s, 
                    N.value = t, a.fileId = e.fileId, a.id = e.fileId, a.name = e.fileName, 
                    a.type = e.type ?? 4, a.region = l, ae.value = u, F.value = I, 
                    ee.value = U, f.value = !0, S.value = G ?? "", a.demoId = e.demoId, 
                    le.value = c, a.projectId = oe, e.demoEid && we(e.demoEid);
                }
            }), (e, l) => {
                const s = Ke, t = Le, u = Oe, U = Me, I = qe, G = $e;
                return p(), h(re, null, [ o("div", null, [ n(I, {
                    modelValue: f.value,
                    "onUpdate:modelValue": l[2] || (l[2] = c => f.value = c),
                    title: ee.value,
                    width: "700px",
                    onClose: ke
                }, {
                    footer: r(() => [ g(X) ? (p(), h("span", Y, [ n(t, {
                        class: "neu",
                        onClick: l[0] || (l[0] = c => f.value = !1)
                    }, {
                        default: r(() => [ m("取消") ]),
                        _: 1
                    }), F.value === "1" ? (p(), j(t, {
                        key: 0,
                        class: "buttonPer neu",
                        type: "primary",
                        onClick: Fe
                    }, {
                        default: r(() => [ m(" 数据库初始化 ") ]),
                        _: 1
                    })) : k("", !0), F.value === "2" ? (p(), j(t, {
                        key: 1,
                        class: "neu",
                        type: "primary",
                        onClick: de,
                        disabled: g(V)
                    }, {
                        default: r(() => [ m(" 确定 ") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : k("", !0), F.value === "3" ? (p(), 
                    j(t, {
                        key: 2,
                        class: "buttonPer neu",
                        type: "primary",
                        onClick: Ue
                    }, {
                        default: r(() => [ m(" 初始化 ") ]),
                        _: 1
                    })) : k("", !0) ])) : (p(), h("span", A, [ n(t, {
                        class: "neu",
                        onClick: l[1] || (l[1] = c => f.value = !1)
                    }, {
                        default: r(() => [ m("关闭") ]),
                        _: 1
                    }) ])) ]),
                    default: r(() => [ g(a).type == "7" ? (p(), h("div", z, [ J, o("span", null, [ n(t, {
                        class: "download",
                        size: "large",
                        onClick: Ee
                    }, {
                        default: r(() => [ n(s, {
                            icon: "svg-icon:templateDownload"
                        }), m(" 下载模板") ]),
                        _: 1
                    }) ]) ])) : k("", !0), o("div", B, [ n(u, {
                        disabled: !g(V),
                        class: Je([ [ g(V) ? "canUpload" : "cantUpload" ], "upload-css" ]),
                        ref_key: "uploadRef",
                        ref: C,
                        "show-file-list": !1,
                        "auto-upload": !1,
                        accept: E.value,
                        action: "#",
                        "on-change": xe,
                        multiple: "",
                        drag: ""
                    }, {
                        default: r(() => [ o("div", K, [ n(s, {
                            class: "icon",
                            icon: "svg-icon:cloud-upload"
                        }), L, o("span", O, ce(ae.value), 1) ]) ]),
                        _: 1
                    }, 8, [ "disabled", "class", "accept" ]), y.value ? (p(), j(U, {
                        key: 0,
                        "text-inside": !0,
                        "stroke-width": 20,
                        percentage: y.value,
                        style: {
                            width: "500px",
                            margin: "5px auto 0"
                        }
                    }, null, 8, [ "percentage" ])) : k("", !0), o("div", M, [ o("ul", q, [ (p(!0), 
                    h(re, null, Be(d.value, c => (p(), h("li", {
                        key: c.url
                    }, [ n(s, {
                        icon: "svg-icon:file"
                    }), o("span", $, ce(c.name), 1), g(X) ? (p(), h("span", {
                        key: 0,
                        class: "del",
                        onClick: oe => (T => {
                            ue().delConfirm(`${le.value || "是否确认删除文件"} `, "提示").then(async () => {
                                T.fileId && (await Qe({
                                    fileId: T.fileId,
                                    delType: "1"
                                }).then(() => {
                                    me.delFile(_.value.demoId);
                                }), v("serviceUploadFile", {})), a.eid = "", a.uploadStatus = "0";
                                const ne = d.value.indexOf(T);
                                ne !== -1 && d.value.splice(ne, 1), a.fileId = "", 
                                be(T);
                            });
                        })(c)
                    }, [ n(s, {
                        icon: "svg-icon:fileDel"
                    }) ], 8, H)) : k("", !0) ]))), 128)) ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), n(I, {
                    modelValue: x.value,
                    "onUpdate:modelValue": l[4] || (l[4] = c => x.value = c),
                    title: "初始化",
                    onClose: Te
                }, {
                    footer: r(() => [ o("span", W, [ n(t, {
                        onClick: Ne,
                        class: "neu"
                    }, {
                        default: r(() => [ m("上一步") ]),
                        _: 1
                    }), n(t, {
                        class: "neu",
                        type: "primary",
                        onClick: je
                    }, {
                        default: r(() => [ m(" 完成 ") ]),
                        _: 1
                    }) ]) ]),
                    default: r(() => [ o("div", Q, [ n(G, {
                        id: "logInput",
                        modelValue: b.value,
                        "onUpdate:modelValue": l[3] || (l[3] = c => b.value = c),
                        type: "textarea",
                        rows: 20,
                        placeholder: "",
                        disabled: ""
                    }, null, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), n(ua, {
                    ref_key: "gitInitDialogRef",
                    ref: Z,
                    onInitGit: Ce
                }, null, 512) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-a90f2f79" ] ]);
});

export {
    va as __tla,
    fe as default
};