import {
    p as E,
    r as u,
    w as L,
    o as R,
    C as T,
    l as s,
    k as c,
    v as f,
    a as V,
    _ as K,
    J as P,
    ch as U,
    __tla as A
} from "./index-6c08ea4c.js";

import {
    a as x,
    b as B,
    p as J,
    __tla as q
} from "./file-e038b35d.js";

import {
    a as G,
    b as H,
    E as N,
    __tla as Q
} from "./index-5adb716b.js";

let b, S = Promise.all([ (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})() ]).then(async () => {
    b = {
        __name: "UploadMdBtns",
        emits: [ "setImportValue" ],
        setup(W, {
            emit: j
        }) {
            const g = j, l = E(), w = u(), F = u({}), i = u([]);
            u(!1);
            const d = u(0), m = u(""), p = u([]);
            function M(a) {
                F.value = a, y();
            }
            function O(a) {
                let e = !0, t = "";
                a.name.lastIndexOf(".") > -1 && (t = a.name.slice(a.name.lastIndexOf(".") + 1).toLowerCase());
                const n = [ "md" ].indexOf(t) >= 0, r = a.size / 1024 / 1024;
                return n || (l.warning("只允许上传 .md 文件!"), e = !1), r >= 1 && (l.warning("文件大小限制 1 Mb!"), 
                e = !1), e && _(a, o => {
                    g("setImportValue", o);
                }), !1;
            }
            async function _(a, e) {
                if (window.FileReader) {
                    const t = new FileReader();
                    t.onload = function(n) {
                        const r = n.target.result;
                        e(r);
                    }, t.onerror = function(n) {
                        l.error("文件导入错误:" + n.target.error);
                    }, t.readAsText(a);
                } else l.error("浏览器不支持读取文件流，建议使用最新版本浏览器");
            }
            L(() => d.value, a => {
                a !== 0 && a === i.value.length - 1 && v();
            });
            const C = async (a, e) => {
                i.value = e;
                let t = i.value.length;
                setTimeout(() => {
                    t === i.value.length && (e.filter(n => n.name.indexOf(".md") === n.name.length - 3).length !== 1 ? l.warning("请上传一个markdown文件！") : i.value.length === 1 ? (h(i.value[0].raw), 
                    setTimeout(() => {
                        v();
                    }, 200)) : I(e));
                }, 500);
            }, I = a => {
                d.value = 0, a.forEach(e => {
                    h(e.raw) && k(e.raw).then(t => {
                        p.value.push(t), d.value += 1;
                    }).catch(() => [ l.error("上传文件失败:" + e.name) ]);
                });
            }, k = a => new Promise((e, t) => {
                let n = new FormData();
                n.append("file", V(a)), n.append("source", B), J(n).then(r => {
                    const o = r.data;
                    o.errorFlag === "0" || o.errorFlag === "2" ? e(o) : t("上传失败，请重新上传");
                }).catch(() => {
                    t("上传失败，请重新上传");
                });
            }), h = async a => {
                let e = a.name.replace(/.+\./, ".");
                return [ ".jpg", ".jpeg", ".png", ".gif" ].indexOf(e.toLowerCase()) > -1 ? !(a.name.length > 200) || (l.warning("资源名称不能超过200个字符"), 
                !1) : [ ".md" ].indexOf(e.toLowerCase()) > -1 ? a.name.length > 200 ? (l.warning("资源名称不能超过200个字符"), 
                !1) : a.size / 1024 / 1024 >= 1 ? (l.warning("Markdown资源大小不能超过1M！"), 
                !1) : (await _(a, t => {
                    m.value = t;
                }), !1) : (l.warning("仅支持上传 '.jpg', '.jpeg', '.png', '.gif', '.md' 文件！"), 
                !1);
            }, v = () => {
                p.value.forEach(a => {
                    if (a) {
                        let e = "](" + a.objectKey, t = "](./" + a.objectKey;
                        m.value = m.value.split(t).join("](" + x(a.eid)).split(e).join("](" + x(a.eid));
                    }
                }), g("setImportValue", m.value), y();
            };
            function y() {
                var a;
                i.value = [], p.value = [], (a = w.value) == null || a.clearFiles();
            }
            return (a, e) => {
                const t = K, n = P, r = G, o = U, z = H, D = N;
                return R(), T(D, {
                    teleported: !1,
                    trigger: "hover",
                    class: "import-btn z-100",
                    onCommand: M
                }, {
                    dropdown: s(() => [ c(z, null, {
                        default: s(() => [ c(o, {
                            class: "upload-box !w-100% !px-0",
                            action: "#",
                            limit: 1,
                            accept: ".md",
                            "show-file-list": !1,
                            beforeUpload: O
                        }, {
                            default: s(() => [ c(r, {
                                style: {
                                    width: "120px"
                                },
                                command: {
                                    type: "manual",
                                    btn: "one"
                                }
                            }, {
                                default: s(() => [ f("导入MD文件") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), c(o, {
                            ref_key: "uploadFilesRef",
                            ref: w,
                            action: "#",
                            multiple: "",
                            "on-change": C,
                            "auto-upload": !1,
                            "show-file-list": !1
                        }, {
                            default: s(() => [ c(r, {
                                style: {
                                    width: "120px"
                                },
                                command: {
                                    type: "manual",
                                    btn: "all"
                                }
                            }, {
                                default: s(() => [ f("导入MD文件及图片") ]),
                                _: 1
                            }) ]),
                            _: 1
                        }, 512) ]),
                        _: 1
                    }) ]),
                    default: s(() => [ c(n, {
                        plain: "",
                        type: "primary",
                        size: "default",
                        class: "!px-10px"
                    }, {
                        default: s(() => [ c(t, {
                            icon: "svg-icon:icon-import",
                            class: "mr-5px"
                        }), f(" 导入 ") ]),
                        _: 1
                    }) ]),
                    _: 1
                });
            };
        }
    };
});

export {
    S as __tla,
    b as default
};