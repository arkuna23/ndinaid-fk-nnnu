import {
    r as d,
    w as c,
    f as n,
    a as e,
    o as s,
    c as f,
    z as i,
    C as m,
    __tla as p
} from "./index-6c08ea4c.js";

import {
    E as y,
    __tla as v
} from "./el-image-0d184777.js";

import {
    __tla as I
} from "./el-image-viewer-2c0d56e4.js";

import {
    a as h,
    __tla as b
} from "./file-e038b35d.js";

import {
    _ as x
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as g
} from "./throttle-1adeb119.js";

let _, w = Promise.all([ (() => {
    try {
        return p;
    } catch {}
})(), (() => {
    try {
        return v;
    } catch {}
})(), (() => {
    try {
        return I;
    } catch {}
})(), (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return g;
    } catch {}
})() ]).then(async () => {
    _ = x({
        __name: "PreviewCover",
        props: {
            defaultId: {
                type: [ String, Number ],
                default: ""
            }
        },
        setup(o) {
            const a = o, t = d("");
            function l() {
                [ "1", "2", "3", "4" ].indexOf(a.defaultId + "") >= 0 ? t.value = a.defaultId + "" : a.defaultId && [ "1", "2", "3", "4" ].indexOf(a.defaultId + "") < 0 && async function(r) {
                    t.value = await h(r);
                }(a.defaultId);
            }
            return c(() => a.defaultId, r => {
                l();
            }), n(() => {
                l();
            }), (r, O) => {
                const u = y;
                return [ "1", "2", "3", "4" ].indexOf(e(t)) >= 0 ? (s(), f("div", {
                    key: 0,
                    class: i([ "upload-img", `project-default-cover-${e(t)}` ])
                }, null, 2)) : (s(), m(u, {
                    key: 1,
                    src: e(t),
                    class: "upload-img",
                    fit: "cover"
                }, null, 8, [ "src" ]));
            };
        }
    }, [ [ "__scopeId", "data-v-51b01bba" ] ]);
});

export {
    w as __tla,
    _ as default
};