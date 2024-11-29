import {
    u as Oe,
    e as V,
    a as r,
    b0 as Pe,
    a0 as Je,
    r as o,
    p as ue,
    T as Ve,
    a5 as Re,
    U as Ge,
    w as Ee,
    o as v,
    c as h,
    t as d,
    k as u,
    l as p,
    v as f,
    C as T,
    D as m,
    z as ze,
    B as ce,
    F as pe,
    y as Be,
    bo as R,
    _ as Le,
    J as qe,
    ch as Ke,
    Y as Me,
    aU as He,
    P as $e,
    R as Ye,
    S as Ae,
    n as Qe,
    __tla as We
} from "./index-6c08ea4c.js";

import {
    e as Xe,
    f as re,
    c as Ze,
    o as ea,
    s as aa,
    m as la,
    d as ta,
    v as ia,
    __tla as sa
} from "./project-enjineering-046a4b77.js";

import {
    g as oa,
    __tla as na
} from "./log-8da79d7b.js";

import {
    b as da,
    p as ua,
    q as ca,
    __tla as pa
} from "./file-e038b35d.js";

import ra, {
    __tla as va
} from "./gitInitDialog-0be58b20.js";

import {
    _ as fa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./git-init-run-c22497e9.js";

let ve, ma = Promise.all([ (() => {
    try {
        return We;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})(), (() => {
    try {
        return na;
    } catch {}
})(), (() => {
    try {
        return pa;
    } catch {}
})(), (() => {
    try {
        return va;
    } catch {}
})() ]).then(async () => {
    let D, G, E, z, B, L, q, K, M, H, $, Y, A, Q, W;
    D = x => (Ye("data-v-45f40366"), x = x(), Ae(), x), G = {
        key: 0,
        class: "template_download"
    }, E = D(() => d("span", null, [ d("p", {
        class: "p1"
    }, "文件模板"), d("p", {
        class: "p2"
    }, "根据模板提示完善内容") ], -1)), z = {
        class: "content"
    }, B = {
        class: "upload-box"
    }, L = D(() => d("span", {
        class: "title"
    }, "点击上传文件", -1)), q = {
        class: "tip"
    }, K = {
        class: "file-lists"
    }, M = {
        class: "file-list list-space"
    }, H = {
        class: "file-name"
    }, $ = [ "onClick" ], Y = {
        key: 0,
        class: "dialog-footer"
    }, A = {
        key: 1,
        class: "dialog-footer"
    }, Q = {
        class: "log-content"
    }, W = {
        class: "dialog-footer"
    }, ve = fa({
        __name: "proFileDialog",
        props: {
            projectId: {
                type: String,
                default: ""
            }
        },
        emits: [ "uploadFile", "getGitType" ],
        setup(x, {
            expose: fe,
            emit: me
        }) {
            const ye = x, _e = Oe(), X = V(() => r(_e.currentRoute)), ge = V(() => r(X).path.indexOf("/neu/") >= 0 || r(X).path.indexOf("/private/") >= 0), U = Pe("authEditDevops"), {
                projectId: I
            } = Je(ye), Z = o(null), w = o(""), he = ue(), ee = o("文件上传"), Ie = Ve(), F = o(null), O = o(".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.MP4,.JPG,.JPEG"), P = o("1024"), ae = o("支持文件类型：pdf、doc、docx、ppt、pptx、xls、xlsx、zip、MP4、JPG、JPEG"), y = o(!1), C = o(!1), S = o("2"), be = Re.CancelToken, J = o(null), b = o(0), j = o({}), l = Ge({
                id: "",
                fileId: "",
                eid: "",
                projectId: "",
                demoFileStatus: "1",
                region: "",
                type: "",
                uploadStatus: ""
            }), le = o(""), _ = me, ke = () => {
                te(), l.eid = "", l.type == "6" && _("uploadFile", {}), n.value.splice(0, n.value.length);
            }, n = o([]), xe = async e => {
                ue().delConfirm(`${le.value || "是否确认删除文件"} `, "提示").then(async () => {
                    const {
                        gitStoreInfo: a,
                        type: i
                    } = j.value, {
                        eid: t
                    } = a;
                    [ "2", "3" ].includes(i) && t && e.fileId && await (async g => await ia(g))(a), 
                    e.fileId && (await Xe({
                        fileId: e.fileId,
                        delType: "1"
                    }).then(() => {}), _("uploadFile", j.value, l.region)), l.eid = "", 
                    l.uploadStatus = "0";
                    const s = n.value.indexOf(e);
                    s !== -1 && n.value.splice(s, 1), l.fileId = "", l.id = "";
                });
            }, te = () => {
                typeof J.value == "function" && J.value();
            }, we = e => {
                const a = e.name.length > 200, i = e.name.substring(e.name.lastIndexOf("."));
                if (O.value.split(",").includes(i)) {
                    if (e.size >= 1024 * P.value * 1024) return R.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${P.value}MB`), 
                    void F.value.clearFiles();
                    if (a) return R.error("上传图片名称不能超过200个字符!"), void F.value.clearFiles();
                    {
                        const t = new FormData();
                        return t.append("file", e.raw), t.append("source", da), 
                        void ua(t, s => {
                            const {
                                loaded: g,
                                total: k
                            } = s;
                            b.value = Number((90 * Number(g / k)).toFixed());
                        }, new be(function(s) {
                            J.value = s;
                        })).then(async s => {
                            b.value = 100, setTimeout(() => {
                                b.value = 0;
                            }, 500), n.value.splice(0, n.value.length), n.value.push({
                                name: s.data.objectKey,
                                eid: s.data.eid,
                                fileId: ""
                            }), s.data.eid && (l.uploadStatus = "1"), l.eid = s.data.eid, 
                            l.name = s.data.objectKey;
                        }).catch(() => {
                            b.value = 0;
                        });
                    }
                }
                return R.error("请上传符合规则的资源格式"), void F.value.clearFiles();
            }, N = V(() => !l.eid), ie = async () => {
                if (l.eid) {
                    l.projectId = I.value;
                    let e = await re(l);
                    return e && (_("uploadFile", {}), l.eid = ""), y.value = !1, 
                    e;
                }
            }, Ce = async () => {
                j.value.eid = JSON.parse(JSON.stringify(l.eid));
                const e = JSON.parse(JSON.stringify(j.value));
                await ie(), Z.value.openDialog(e), l.eid = "";
            }, se = async () => {
                const e = await Ze({
                    projectId: I.value,
                    region: ""
                });
                for (let a = 0; a < e.length; a++) e[a].type == l.type && e[a].region == l.region && e[a].eid && ca(e[a].eid).then(i => {
                    n.value.splice(0, n.value.length), n.value.push({
                        name: e[a].name ?? i.objectKey,
                        eid: e[a].eid,
                        fileId: e[a].id
                    }), l.fileId = e[a].id, l.name = e[a].name, l.eid = e[a].eid;
                });
            }, je = () => {
                _("getGitType");
            }, Fe = () => {
                l.eid && (l.projectId = I.value, re(l).then(() => {
                    se(), _("uploadFile", {}), l.eid = "";
                })), ea(I.value, "6", ge.value ? "1" : "2").then(e => {
                    var a;
                    (a = n.value[0]) != null && a.eid ? (aa({
                        projectDbId: e.proDbId,
                        sqlEid: n.value[0].eid,
                        dbClassify: "6"
                    }).then(i => {
                        la({
                            projectId: I.value,
                            logType: "1"
                        }).then(t => {
                            Te({
                                envId: t[0].envId ?? "",
                                ciName: t[0].ciName ?? "",
                                ciNameSpace: t[0].ciNameSpace ?? "",
                                ciType: t[0].ciType ?? ""
                            });
                        });
                    }), _("uploadFile", {})) : he.error("请先上传Sql文件!");
                });
            }, oe = o(null), Se = () => {
                try {
                    window.clearInterval(oe.value);
                } catch {}
                _("uploadFile", {});
            }, ne = e => {
                oa({
                    ciName: e.ciName,
                    ciNamespace: e.ciNameSpace,
                    envId: e.envId,
                    ciType: e.ciType
                }).then(a => {
                    let i = w.value;
                    w.value = a, Qe(() => {
                        i != w.value && setTimeout(() => {
                            const t = document.getElementById("logInput");
                            t && (t.scrollTop = t.scrollHeight);
                        }, 50);
                    });
                });
            }, Ne = () => {
                y.value = !1, C.value = !1;
            }, Te = e => {
                C.value = !0, ne(e), oe.value = setInterval(() => {
                    ne();
                }, 3e3);
            }, De = () => {
                ta().then(e => {
                    const a = new Blob([ e ]), i = document.createElement("a");
                    i.download = "nginx模板文件.conf", i.style.display = "none", i.href = URL.createObjectURL(a), 
                    document.body.appendChild(i), i.click(), URL.revokeObjectURL(i.href), 
                    document.body.removeChild(i);
                });
            };
            Ee(Ie, () => {
                te();
            });
            const Ue = () => {
                C.value = !1;
            };
            return fe({
                openDialog: (e, a, i, t, s, g, k, de, c) => {
                    j.value = e, n.value.splice(0, n.value.length), se(), O.value = i, 
                    P.value = t, l.fileId = e.fileId, l.id = e.fileId, l.type = e.type, 
                    l.region = a, ae.value = s, S.value = k, ee.value = g, y.value = !0, 
                    le.value = c;
                }
            }), (e, a) => {
                const i = Le, t = qe, s = Ke, g = Me, k = He, de = $e;
                return v(), h(pe, null, [ d("div", null, [ u(k, {
                    modelValue: y.value,
                    "onUpdate:modelValue": a[2] || (a[2] = c => y.value = c),
                    title: ee.value,
                    width: "700px",
                    onClose: ke
                }, {
                    footer: p(() => [ r(U) ? (v(), h("span", Y, [ u(t, {
                        class: "neu",
                        onClick: a[0] || (a[0] = c => y.value = !1)
                    }, {
                        default: p(() => [ f("取消") ]),
                        _: 1
                    }), S.value === "1" ? (v(), T(t, {
                        key: 0,
                        class: "buttonPer neu",
                        type: "primary",
                        style: {
                            width: "100px"
                        },
                        onClick: Fe
                    }, {
                        default: p(() => [ f(" 数据库初始化 ") ]),
                        _: 1
                    })) : m("", !0), S.value === "2" ? (v(), T(t, {
                        key: 1,
                        class: "neu",
                        type: "primary",
                        onClick: ie,
                        disabled: r(N)
                    }, {
                        default: p(() => [ f(" 确定 ") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : m("", !0), S.value === "3" ? (v(), 
                    T(t, {
                        key: 2,
                        class: "buttonPer neu",
                        type: "primary",
                        onClick: Ce,
                        disabled: r(N)
                    }, {
                        default: p(() => [ f(" 初始化 ") ]),
                        _: 1
                    }, 8, [ "disabled" ])) : m("", !0) ])) : m("", !0), r(U) ? m("", !0) : (v(), 
                    h("span", A, [ u(t, {
                        class: "neu",
                        onClick: a[1] || (a[1] = c => y.value = !1)
                    }, {
                        default: p(() => [ f("关闭") ]),
                        _: 1
                    }) ])) ]),
                    default: p(() => [ r(l).type == "7" ? (v(), h("div", G, [ E, d("span", null, [ u(t, {
                        class: "download",
                        size: "large",
                        onClick: De
                    }, {
                        default: p(() => [ u(i, {
                            icon: "svg-icon:templateDownload"
                        }), f(" 下载模板") ]),
                        _: 1
                    }) ]) ])) : m("", !0), d("div", z, [ u(s, {
                        disabled: !r(N),
                        class: ze([ [ r(N) ? "canUpload" : "cantUpload" ], "upload-css" ]),
                        ref_key: "uploadRef",
                        ref: F,
                        "show-file-list": !1,
                        "auto-upload": !1,
                        accept: O.value,
                        action: "#",
                        "on-change": we,
                        multiple: "",
                        drag: ""
                    }, {
                        default: p(() => [ d("div", B, [ u(i, {
                            class: "icon",
                            icon: "svg-icon:cloud-upload"
                        }), L, d("span", q, ce(ae.value), 1) ]) ]),
                        _: 1
                    }, 8, [ "disabled", "class", "accept" ]), b.value ? (v(), T(g, {
                        key: 0,
                        "text-inside": !0,
                        "stroke-width": 20,
                        percentage: b.value,
                        style: {
                            width: "500px",
                            margin: "5px auto 0"
                        }
                    }, null, 8, [ "percentage" ])) : m("", !0), d("div", K, [ d("ul", M, [ (v(!0), 
                    h(pe, null, Be(n.value, c => (v(), h("li", {
                        key: c.url
                    }, [ u(i, {
                        icon: "svg-icon:file"
                    }), d("span", H, ce(c.name), 1), r(U) ? (v(), h("span", {
                        key: 0,
                        class: "del",
                        onClick: ya => xe(c)
                    }, [ u(i, {
                        icon: "svg-icon:fileDel"
                    }) ], 8, $)) : m("", !0) ]))), 128)) ]) ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]), u(k, {
                    modelValue: C.value,
                    "onUpdate:modelValue": a[4] || (a[4] = c => C.value = c),
                    title: "初始化",
                    onClose: Se
                }, {
                    footer: p(() => [ d("span", W, [ u(t, {
                        onClick: Ue,
                        class: "neu"
                    }, {
                        default: p(() => [ f("上一步") ]),
                        _: 1
                    }), u(t, {
                        class: "neu",
                        type: "primary",
                        onClick: Ne
                    }, {
                        default: p(() => [ f(" 完成 ") ]),
                        _: 1
                    }) ]) ]),
                    default: p(() => [ d("div", Q, [ u(de, {
                        id: "logInput",
                        modelValue: w.value,
                        "onUpdate:modelValue": a[3] || (a[3] = c => w.value = c),
                        type: "textarea",
                        rows: 20,
                        placeholder: "",
                        disabled: ""
                    }, null, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]) ]), u(ra, {
                    ref_key: "gitInitDialogRef",
                    ref: Z,
                    projectId: r(I),
                    onInitGit: je
                }, null, 8, [ "projectId" ]) ], 64);
            };
        }
    }, [ [ "__scopeId", "data-v-45f40366" ] ]);
});

export {
    ma as __tla,
    ve as default
};