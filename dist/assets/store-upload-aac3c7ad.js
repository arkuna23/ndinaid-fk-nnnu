import {
    aO as Y,
    a as r,
    a0 as A,
    r as y,
    a5 as H,
    w as Q,
    e as V,
    o as x,
    c as C,
    k as b,
    l as X,
    t as p,
    B as q,
    z as Z,
    m as ee,
    C as ae,
    D as te,
    F as le,
    y as se,
    bo as o,
    ea as oe,
    p as ne,
    _ as ie,
    ch as re,
    Y as ue,
    R as de,
    S as pe,
    __tla as ce
} from "./index-6c08ea4c.js";

import {
    q as ve,
    b as me,
    p as fe,
    __tla as ge
} from "./file-e038b35d.js";

import {
    q as he,
    __tla as _e
} from "./code-a0d24f62.js";

import {
    _ as ye
} from "./_plugin-vue_export-helper-1b428a4d.js";

let F, xe = Promise.all([ (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})() ]).then(async () => {
    let I, L, k, P, z, B;
    I = (m => (de("data-v-18ed3929"), m = m(), pe(), m))(() => p("span", {
        class: "title"
    }, "点击上传或拖拽文件到这", -1)), L = {
        class: "tip"
    }, k = {
        class: "file-lists"
    }, P = {
        class: "file-list list-space"
    }, z = {
        class: "file-name"
    }, B = [ "onClick" ], F = ye({
        __name: "store-upload",
        props: {
            accept: {
                type: String,
                default: ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.mp4,.jpg,.jpeg"
            },
            tooltip: {
                type: String,
                default: "支持文件类型：pdf、doc、docx、ppt、pptx、xls、xlsx、zip、MP4、JPG、JPEG"
            },
            size: {
                type: Number,
                default: 1024
            },
            autoUpload: {
                type: Boolean,
                default: !0
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            showFileList: {
                type: Boolean,
                default: !0
            },
            nameLength: {
                type: Number,
                default: 200
            },
            bodyWidth: {
                type: String,
                default: "500px"
            },
            englishName: {
                type: Boolean,
                default: !1
            },
            eid: {
                type: String,
                required: !0
            },
            item: {
                type: Object,
                required: !0
            }
        },
        emits: [ "success", "response", "fileChange", "fileRemove", "error" ],
        setup(m, {
            expose: N,
            emit: S
        }) {
            Y(t => ({
                "58d2778a": r(K)
            }));
            const i = S, c = m, {
                accept: f,
                tooltip: j,
                size: g,
                autoUpload: G,
                englishName: D,
                eid: $,
                item: O
            } = A(c), d = y(null), M = H.CancelToken, w = y(null), v = y(0), a = y([]);
            Q($, t => {
                t && ve(t).then(e => {
                    a.value.push({
                        name: e.objectKey,
                        eid: e.eid
                    });
                });
            }, {
                immediate: !0
            });
            const T = t => {
                const e = t[0], l = e.name.slice(0, e.name.lastIndexOf(".")), s = l.length > c.nameLength, u = e.name.substring(e.name.lastIndexOf(".")).toLowerCase();
                D.value && /[\u4e00-\u9fa5]/g.test(l) && o.error("文件名必须为英文"), f.value.split(",").includes(u) ? e.size >= 1024 * g.value * 1024 ? o.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${g.value}MB`) : s ? o.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${c.nameLength}\u4E2A\u5B57\u7B26!`) : (a.value = [], 
                e.uid = oe(), d.value.handleStart(e)) : o.error("请上传符合规则的资源格式");
            }, J = () => {
                i("fileRemove");
            }, W = t => {
                const e = t.name.slice(0, t.name.lastIndexOf(".")), l = e.length > c.nameLength, s = t.name.substring(t.name.lastIndexOf(".")).toLowerCase();
                return D.value && /[\u4e00-\u9fa5]/g.test(e) ? (o.error("文件名必须为英文"), 
                void (a.value = [])) : f.value.split(",").includes(s) ? t.size >= 1024 * g.value * 1024 ? (o.error(`\u4E0A\u4F20\u8D44\u6E90\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${g.value}MB`), 
                void (a.value = [])) : l ? (o.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${c.nameLength}\u4E2A\u5B57\u7B26!`), 
                void (a.value = [])) : (i("fileChange", t), void (G.value && d.value.submit())) : (o.error("请上传符合规则的资源格式"), 
                void (a.value = []));
            }, E = t => {
                const e = t.file, l = new FormData();
                l.append("file", e), l.append("source", me), fe(l, s => {
                    const {
                        loaded: u,
                        total: n
                    } = s;
                    v.value = Number((90 * Number(u / n)).toFixed());
                }, new M(function(s) {
                    w.value = s;
                })).then(s => {
                    v.value = 100, setTimeout(() => {
                        v.value = 0;
                    }, 500);
                    const u = s.errorFlag ?? "0";
                    u == 1 ? (o.warning("资源服务：文档转换失败"), d.value && h(), i("fileRemove"), 
                    i("error")) : u == 3 ? (o.warning("资源服务：文件上传失败"), d.value && h(), 
                    i("fileRemove"), i("error")) : (i("success", s[0]), i("response", res));
                }).catch(() => {
                    v.value = 0, d.value && h(), i("fileRemove"), i("error");
                });
            }, h = () => {
                a.value = [];
            }, K = V(() => c.bodyWidth);
            return N({
                cancelUpload: () => {
                    typeof w.value == "function" && w.value();
                },
                submitUpload: () => {
                    d.value.submit();
                },
                clearFiles: h
            }), (t, e) => {
                const l = ie, s = re, u = ue;
                return x(), C("div", null, [ b(s, {
                    class: Z([ "upload-demo", [ r(a).length > 0 ? "cantUpload" : "canUpload" ] ]),
                    drag: "",
                    action: "#",
                    multiple: "",
                    "file-list": r(a),
                    "onUpdate:fileList": e[2] || (e[2] = n => ee(a) ? a.value = n : null),
                    accept: r(f),
                    "on-change": W,
                    "on-exceed": T,
                    "auto-upload": !1,
                    ref_key: "uploadRef",
                    ref: d,
                    limit: 1,
                    "show-file-list": !1,
                    "http-request": E,
                    "on-remove": J,
                    disabled: r(a).length > 0
                }, {
                    default: X(() => [ p("div", {
                        class: "upload-box",
                        onDrop: e[0] || (e[0] = n => (R => {
                            let _ = R.dataTransfer.files[0].name, U = _.substring(_.lastIndexOf(".")).toLowerCase();
                            if (!f.value.split(",").includes(U)) return o.error("请上传符合规则的资源格式");
                        })(n)),
                        onDragover: e[1] || (e[1] = n => n.preventDefault())
                    }, [ b(l, {
                        class: "icon",
                        icon: "svg-icon:cloud-upload"
                    }), I, p("span", L, q(r(j)), 1) ], 32) ]),
                    _: 1
                }, 8, [ "class", "file-list", "accept", "disabled" ]), r(v) ? (x(), 
                ae(u, {
                    key: 0,
                    "text-inside": !0,
                    "stroke-width": 20,
                    percentage: r(v),
                    style: {
                        width: "100%",
                        "margin-top": "5px"
                    }
                }, null, 8, [ "percentage" ])) : te("", !0), p("div", k, [ p("ul", P, [ (x(!0), 
                C(le, null, se(r(a), n => (x(), C("li", {
                    key: n.url
                }, [ b(l, {
                    icon: "svg-icon:file"
                }), p("span", z, q(n.name), 1), p("span", {
                    class: "del",
                    onClick: R => (_ => {
                        _.eid ? ne().delConfirm("是否确认删除文件", "提示").then(() => {
                            he({
                                evnGitProId: O.value.evnGitProId,
                                gitProId: O.value.gitProId
                            }).then(U => {
                                o.success("删除成功"), a.value = [];
                            });
                        }) : a.value = [];
                    })(n)
                }, [ b(l, {
                    icon: "svg-icon:fileDel"
                }) ], 8, B) ]))), 128)) ]) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-18ed3929" ] ]);
});

export {
    xe as __tla,
    F as default
};