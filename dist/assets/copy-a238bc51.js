import {
    C as n,
    __tla as e
} from "./clipboard-0a12866f.js";

import {
    bo as a,
    __tla as s
} from "./index-6c08ea4c.js";

let o, c = Promise.all([ (() => {
    try {
        return e;
    } catch {}
})(), (() => {
    try {
        return s;
    } catch {}
})() ]).then(async () => {
    o = function({
        id: r
    }) {
        let t = new n(`#${r}`);
        t.on("success", function() {
            t.destroy(), t = new n(`#${r}`), a.success("复制成功");
        }), t.on("error", function() {
            a.warning("复制失败，请手动复制");
        });
    };
});

export {
    c as __tla,
    o as c
};