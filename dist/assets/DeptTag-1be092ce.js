import {
    _ as i
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    w as _,
    e as l,
    a as e,
    o as n,
    c as p,
    B as g,
    z as k,
    x as m,
    __tla as u
} from "./index-6c08ea4c.js";

let b, y = Promise.all([ (() => {
    try {
        return u;
    } catch {}
})() ]).then(async () => {
    let r;
    r = {
        key: 1
    }, b = i({
        __name: "DeptTag",
        props: {
            tagCode: {
                type: String,
                default: ""
            },
            codeList: {
                type: Array,
                default: () => []
            }
        },
        setup(o) {
            const t = o;
            _(() => t.codeList, () => {}, {
                deep: !0,
                immediate: !0
            });
            const d = l(() => (t.codeList.find(a => a.code === t.tagCode) || {}).name || ""), s = l(() => {
                let a = "153, 153, 153";
                switch (t.tagCode) {
                  case "000000":
                    a = "36, 95, 230";
                    break;

                  case "000001":
                    a = "38, 188, 199";
                    break;

                  case "000002":
                    a = "254, 166, 69";
                    break;

                  case "000003":
                    a = "52, 206, 114";
                    break;

                  case "000004":
                    a = "235, 114, 80";
                    break;

                  case "000005":
                    a = "110, 65, 199";
                    break;

                  default:
                    a = "153, 153, 153";
                }
                return c => `rgba(${a},${c})`;
            });
            return (a, c) => e(d) ? (n(), p("span", {
                key: 0,
                class: k([ "dept-tag-box", o.tagCode ? "" : "hidden-box" ]),
                style: m(`background: ${e(s)(.1)}; border: 1px solid ${e(s)(.3)}; color: ${e(s)(1)}`)
            }, g(e(d)), 7)) : (n(), p("span", r));
        }
    }, [ [ "__scopeId", "data-v-cbb6581a" ] ]);
});

export {
    y as __tla,
    b as default
};