import {
    a0 as _,
    U as y,
    o,
    c as u,
    F as k,
    y as C,
    z as g,
    B,
    a as L,
    E as b,
    __tla as q
} from "./index-6c08ea4c.js";

import {
    _ as A
} from "./_plugin-vue_export-helper-1b428a4d.js";

let c, S = Promise.all([ (() => {
    try {
        return q;
    } catch {}
})() ]).then(async () => {
    let l, d;
    l = {
        class: "chunkContainer"
    }, d = [ "onClick" ], c = A({
        __name: "markCounterByQuestion",
        props: {
            countList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "numListChange", "handleBack" ],
        setup(x, {
            expose: m,
            emit: p
        }) {
            const i = p, h = x, {
                countList: a
            } = _(h), t = y({
                index: {}
            }), f = e => {
                if (!e || typeof e != "object" || typeof e.questionStatus != "string") return "";
                let n = "";
                return (t && t.index && typeof t.index == "object" ? t.index : {})[e.id] === !0 && (n += "haveActive "), 
                e.questionStatus === "1" && (n += "haveRead"), n.trim();
            };
            return m({
                initAction: () => {
                    a.value.length > 0 && a.value[0].id && (t.index = {}, t.index[a.value[0].id] = !0);
                },
                goToNextQuestion: () => {
                    let e = a.value.findIndex(n => n.questionStatus == 0);
                    e >= 0 ? (t.index = {}, t.index[a.value[e].id] = !0, i("numListChange", a.value[e])) : b.alert("当前试题已全部批阅完成", "提示", {
                        confirmButtonText: "返回",
                        callback: n => {
                            i("handleBack");
                        }
                    });
                }
            }), (e, n) => (o(), u("div", l, [ (o(!0), u(k, null, C(L(a), (s, v) => (o(), 
            u("span", {
                key: s.id,
                class: g([ f(s), "chunk" ]),
                onClick: j => (r => {
                    t.index = {}, t.index[r.id] = !0, i("numListChange", r);
                })(s)
            }, B(v + 1), 11, d))), 128)) ]));
        }
    }, [ [ "__scopeId", "data-v-1a6ed6cd" ] ]);
});

export {
    S as __tla,
    c as default
};