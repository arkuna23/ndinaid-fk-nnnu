import {
    b0 as O,
    r as j,
    f as q,
    o as d,
    c as p,
    t as n,
    a as e,
    z as N,
    C as D,
    B as c,
    k as a,
    l as s,
    v as o,
    K as U,
    av as S,
    aw as z,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    E as B,
    __tla as K
} from "./el-image-0d184777.js";

import {
    __tla as V
} from "./el-image-viewer-2c0d56e4.js";

import {
    a as $,
    __tla as A
} from "./file-e038b35d.js";

import {
    _ as F
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as G
} from "./throttle-1adeb119.js";

let C, J = Promise.all([ (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})() ]).then(async () => {
    let u, f, _, b, m, x, k, g, y, v, h, w, L, T;
    u = {
        id: "courseIntroduction"
    }, f = {
        class: "content-image"
    }, _ = {
        class: "content"
    }, b = {
        style: {
            "font-size": "18px",
            "font-weight": "bold",
            color: "#333333",
            "margin-bottom": "20px"
        }
    }, m = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 120px)"
        }
    }, x = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 90px)"
        }
    }, k = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, g = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, y = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, v = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, h = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, w = {
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, L = [ "innerHTML" ], T = {
        key: 1,
        class: "ellipsis contentText",
        style: {
            "max-width": "calc(100% - 75px)"
        }
    }, C = F({
        __name: "courseIntroduction",
        setup(Q) {
            const t = O("basicInformation"), i = j("");
            function P() {
                [ "1", "2", "3", "4" ].indexOf(t.value.pkgCover + "") < 0 ? async function(I) {
                    i.value = I;
                }(t.value.pkgCover) : i.value = t.value.pkgCover;
            }
            return q(async () => {
                P();
            }), (I, R) => {
                const E = B, r = U, l = S, H = z;
                return d(), p("div", u, [ n("div", f, [ [ "1", "2", "3", "4" ].indexOf(e(i)) >= 0 ? (d(), 
                p("div", {
                    key: 0,
                    class: N([ "upload-img", `project-default-cover-${e(i)}` ])
                }, null, 2)) : (d(), D(E, {
                    key: 1,
                    fit: "cover",
                    class: "upload-img",
                    src: e($)(e(i))
                }, null, 8, [ "src" ])) ]), n("div", _, [ n("div", b, c(e(t).pkgName), 1), a(H, null, {
                    default: s(() => [ a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("资源包英文名称： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).courseEnglishName,
                            content: e(t).courseEnglishName,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", m, c(e(t).courseEnglishName || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("资源包代码： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).pkgCode,
                            content: e(t).pkgCode,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", x, c(e(t).pkgCode || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("面相对象： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).courseObject,
                            content: e(t).courseObject,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", k, c(e(t).courseObject || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("建设单位： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).courseUnit,
                            content: e(t).courseUnit,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", g, c(e(t).courseUnit || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("专业方向： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).pkgDirection,
                            content: e(t).pkgDirection,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", y, c(e(t).pkgDirection || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("学分： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).courseScore,
                            content: e(t).courseScore,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", v, c(e(t).courseScore || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("学时： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).courseHour,
                            content: e(t).courseHour,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", h, c(e(t).courseHour || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 6,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("先修课程： "), a(r, {
                            effect: "dark",
                            disabled: !e(t).coursePrerequisite,
                            content: e(t).coursePrerequisite,
                            placement: "top",
                            enterable: !1
                        }, {
                            default: s(() => [ n("span", w, c(e(t).coursePrerequisite || "无"), 1) ]),
                            _: 1
                        }, 8, [ "disabled", "content" ]) ]),
                        _: 1
                    }), a(l, {
                        span: 24,
                        class: "contentLabel"
                    }, {
                        default: s(() => [ o("课程简介： "), e(t).pkgIntroduction && e(t).pkgIntroduction != "<p><br></p>" ? (d(), 
                        p("div", {
                            key: 0,
                            innerHTML: e(t).pkgIntroduction,
                            class: "editor-content-view wangEditorLinewrapPreView pkgIntroduction"
                        }, null, 8, L)) : (d(), p("div", T, "无")) ]),
                        _: 1
                    }) ]),
                    _: 1
                }) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-9b6b46f8" ] ]);
});

export {
    J as __tla,
    C as default
};