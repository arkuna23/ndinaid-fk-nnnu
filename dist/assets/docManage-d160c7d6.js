import {
    _ as i,
    __tla as u
} from "./ContentPage-f6bcc98e.js";

import p, {
    __tla as f
} from "./ComCodeRepositiorySetting-bc8b92e3.js";

import {
    T as d,
    u as h,
    e as t,
    a,
    o as y,
    C as g,
    l as r,
    k as x,
    __tla as b
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as k
} from "./index-1344e56b.js";

import {
    __tla as B
} from "./judge-7c842b3d.js";

import {
    __tla as E
} from "./file-e038b35d.js";

import "./tree-05ea8e09.js";

import {
    __tla as I
} from "./DialogFolder-d3faf259.js";

import {
    __tla as P
} from "./DialogFile-2ada654c.js";

import {
    __tla as R
} from "./DialogFileUpload-721cf92c.js";

import {
    __tla as j
} from "./index-5adb716b.js";

let s, q = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})(), (() => {
    try {
        return f;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return E;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    s = {
        __name: "docManage",
        setup(C) {
            const _ = d(), o = h(), l = t(() => a(o.currentRoute));
            t(() => a(l).path.indexOf("/public/") >= 0);
            const c = t(() => _.params.id), e = t(() => _.query.status !== "4"), n = () => {
                o.back();
            };
            return (M, O) => {
                const m = i;
                return y(), g(m, {
                    class: "cont-box px-10px",
                    title: "代码仓文件管理",
                    onRouterBack: n,
                    noPadding: !0
                }, {
                    default: r(() => [ x(p, {
                        isEdit: a(e),
                        groupId: a(c)
                    }, {
                        leftBtn: r(() => []),
                        rightBtn: r(() => []),
                        _: 1
                    }, 8, [ "isEdit", "groupId" ]) ]),
                    _: 1
                });
            };
        }
    };
});

export {
    q as __tla,
    s as default
};