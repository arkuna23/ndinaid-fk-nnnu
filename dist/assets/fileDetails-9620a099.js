import {
    _ as s,
    __tla as i
} from "./index-da0e4c45.js";

import {
    f as o,
    o as _,
    c as n,
    k as c,
    t as f,
    __tla as m
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let a, u = Promise.all([ (() => {
    try {
        return i;
    } catch {}
})(), (() => {
    try {
        return m;
    } catch {}
})() ]).then(async () => {
    let t;
    t = f("div", null, "面包屑路径", -1), a = {
        __name: "fileDetails",
        setup: (d, {
            expose: e
        }) => (e({}), o(() => {}), (l, p) => {
            const r = s;
            return _(), n("div", null, [ t, c(r, {
                ref: "yamlEditorRef",
                "code-string": l.$attrs.fileObj,
                "read-only": !0
            }, null, 8, [ "code-string" ]) ]);
        })
    };
});

export {
    u as __tla,
    a as default
};