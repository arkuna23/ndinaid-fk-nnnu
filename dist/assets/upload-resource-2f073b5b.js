import {
    aO as P,
    a as m,
    a0 as U,
    r as h,
    a5 as M,
    e as T,
    aT as j,
    o as w,
    c as A,
    k as F,
    l as G,
    t as v,
    B as J,
    z as W,
    C as Z,
    D as q,
    bo as i,
    ea as E,
    ch as Y,
    Y as H,
    R as K,
    S as Q,
    v as V,
    __tla as X
} from "./index-6c08ea4c.js";

import {
    b as ee,
    p as ae,
    __tla as le
} from "./file-e038b35d.js";

import {
    _ as te
} from "./_plugin-vue_export-helper-1b428a4d.js";

let z, se = Promise.all([ (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})() ]).then(async () => {
    let x, b;
    x = (d => (K("data-v-941afc33"), d = d(), Q(), d))(() => v("span", {
        class: "title"
    }, [ V("请将成果物文件拖至此框内，或点击"), v("span", {
        style: {
            color: "#245fe6",
            "text-decoration": "underline"
        }
    }, "上传文件") ], -1)), b = {
        class: "tip"
    }, z = te({
        __name: "upload-resource",
        props: {
            accept: {
                type: String,
                default: ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt,.jpg,.jpeg,.png,.bmp,.gif,.mp4,.ogg,.zip,.rar,.mp3,.md"
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
            }
        },
        emits: [ "success", "response", "fileChange", "fileRemove", "error" ],
        setup(d, {
            expose: L,
            emit: C
        }) {
            P(l => ({
                e24277f4: m($)
            }));
            const t = C, r = d, {
                accept: oe,
                tooltip: D,
                size: c,
                autoUpload: B,
                englishName: _
            } = U(r), a = h(null), R = M.CancelToken, g = h(null), u = h(0), I = l => {
                const e = l[0], s = e.name.slice(0, e.name.lastIndexOf(".")), o = s.length > r.nameLength;
                e.name.substring(e.name.lastIndexOf(".")).toLowerCase(), _.value && (/^[0-9A-Za-z-_]+$/.test(s) || i.error("文件名必须为英文")), 
                e.size >= 1024 * c.value * 1024 ? i.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${c.value}MB`) : o ? i.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${r.nameLength}\u4E2A\u5B57\u7B26!`) : (a.value.clearFiles(), 
                e.uid = E(), a.value.handleStart(e));
            }, N = () => {
                t("fileRemove");
            }, O = l => {
                const e = l.name.slice(0, l.name.lastIndexOf(".")), s = e.length > r.nameLength;
                return l.name.substring(l.name.lastIndexOf(".")).toLowerCase(), 
                _.value && !/^[0-9A-Za-z-_]+$/.test(e) ? (i.error("文件名必须为英文"), void a.value.clearFiles()) : l.size >= 1024 * c.value * 1024 ? (i.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${c.value}MB`), 
                void a.value.clearFiles()) : s ? (i.error(`\u4E0A\u4F20\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7${r.nameLength}\u4E2A\u5B57\u7B26!`), 
                void a.value.clearFiles()) : (t("fileChange", l), void (B.value && a.value.submit()));
            }, S = l => {
                const e = l.file, s = new FormData();
                s.append("file", e), s.append("source", ee), ae(s, o => {
                    const {
                        loaded: p,
                        total: n
                    } = o;
                    u.value = Number((100 * Number(p / n)).toFixed());
                }, new R(function(o) {
                    g.value = o;
                })).then(o => {
                    const p = o, n = p.errorFlag ?? "0";
                    n == 1 ? (i.warning("资源服务：文档转换失败"), u.value = 0, a.value && f(), 
                    t("fileRemove"), t("error")) : n == 3 ? (i.warning("资源服务：文件上传失败"), 
                    u.value = 0, a.value && f(), t("fileRemove"), t("error")) : (u.value = 0, 
                    t("success", p), t("response", o));
                }).catch(() => {
                    u.value = 0, a.value && f(), t("fileRemove"), t("error");
                });
            }, f = () => {
                a.value.clearFiles();
            }, $ = T(() => r.bodyWidth);
            return L({
                cancelUpload: () => {
                    typeof g.value == "function" && g.value();
                },
                submitUpload: () => {
                    a.value.submit();
                },
                clearFiles: f
            }), (l, e) => {
                const s = j("svg-icon"), o = Y, p = H;
                return w(), A("div", null, [ F(o, {
                    class: W([ "upload-demo", {
                        uploadSisabled: r.isDisabled
                    } ]),
                    drag: "",
                    action: "#",
                    multiple: "",
                    "on-change": O,
                    "on-exceed": I,
                    "auto-upload": !1,
                    ref_key: "uploadRef",
                    ref: a,
                    limit: 1,
                    "show-file-list": r.showFileList,
                    "http-request": S,
                    "on-remove": N,
                    disabled: d.isDisabled
                }, {
                    default: G(() => [ v("div", {
                        class: "upload-box",
                        onDrop: e[0] || (e[0] = n => (k => {
                            let y = k.dataTransfer.files[0].name;
                            y.substring(y.lastIndexOf(".")).toLowerCase();
                        })(n)),
                        onDragover: e[1] || (e[1] = n => n.preventDefault())
                    }, [ F(s, {
                        class: "icon",
                        "icon-name": "cloud-upload"
                    }), x, v("span", b, J(m(D)), 1) ], 32) ]),
                    _: 1
                }, 8, [ "class", "show-file-list", "disabled" ]), m(u) ? (w(), Z(p, {
                    key: 0,
                    "text-inside": !0,
                    "stroke-width": 20,
                    percentage: m(u),
                    style: {
                        width: "100%",
                        "margin-top": "5px"
                    }
                }, null, 8, [ "percentage" ])) : q("", !0) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-941afc33" ] ]);
});

export {
    se as __tla,
    z as default
};