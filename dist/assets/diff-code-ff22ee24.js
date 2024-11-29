import {
    r as p,
    a0 as M,
    o as T,
    c as A,
    t as i,
    k as B,
    a as o,
    B as f,
    _ as P,
    __tla as j
} from "./index-6c08ea4c.js";

import {
    H as q,
    __tla as z
} from "./index-234b0463.js";

import {
    _ as D
} from "./_plugin-vue_export-helper-1b428a4d.js";

let N, F = Promise.all([ (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return z;
    } catch {}
})() ]).then(async () => {
    let m, _, L, b, g, k, v, w;
    m = {
        class: "diff-code"
    }, _ = {
        class: "diff-header"
    }, L = {
        class: "left-box"
    }, b = [ "title" ], g = {
        class: "right-box"
    }, k = {
        class: "add-num"
    }, v = {
        class: "del-num"
    }, w = [ "innerHTML" ], N = D({
        __name: "diff-code",
        props: {
            fileName: {
                type: String,
                default: ""
            },
            diff: {
                type: String,
                default: ""
            }
        },
        setup(C) {
            const y = p(""), S = p(""), x = p(""), W = C, {
                fileName: I,
                diff: $
            } = M(W);
            return (() => {
                const u = (d => {
                    const s = d.split(`
`);
                    let a = 0, e = 0, t = {
                        hunks: [],
                        addNum: 0,
                        delNum: 0
                    };
                    const E = /^\s*@@ -(\d+),(\d+) \+(\d+),(\d+) @@/, H = /^\s*@@ -(\d+),(\d+) \+(\d+) @@/;
                    return s.forEach(n => {
                        const r = n.match(E), c = n.match(H);
                        if (r) {
                            const l = {
                                oldStart: parseInt(r[1], 10),
                                oldLines: parseInt(r[2], 10),
                                newStart: parseInt(r[3], 10),
                                newLines: parseInt(r[4], 10),
                                lines: []
                            };
                            a = l.oldStart, e = l.newStart, t.hunks.push(l);
                        } else if (c) {
                            const l = {
                                oldStart: parseInt(c[1], 10),
                                oldLines: parseInt("1", 10),
                                newStart: parseInt(c[2], 10),
                                newLines: parseInt(c[3], 10),
                                lines: []
                            };
                            a = l.oldStart, e = l.newStart, t.hunks.push(l);
                        }
                        n.startsWith("+") ? (t.hunks[t.hunks.length - 1].lines.push({
                            type: "add",
                            sourceContent: n,
                            content: n.substring(1),
                            newLine: e,
                            oldLine: ""
                        }), e++, t.addNum++) : n.startsWith("-") ? (t.hunks[t.hunks.length - 1].lines.push({
                            type: "delete",
                            sourceContent: n,
                            content: n.substring(1),
                            newLine: "",
                            oldLine: a
                        }), a++, t.delNum++) : n.startsWith(" ") ? (t.hunks[t.hunks.length - 1].lines.push({
                            type: "normal",
                            sourceContent: n,
                            content: n.substring(1),
                            newLine: e,
                            oldLine: a
                        }), a++, e++) : n.startsWith("@@") && t.hunks[t.hunks.length - 1].lines.push({
                            type: "match",
                            sourceContent: n,
                            content: n.substring(1),
                            newLine: "···",
                            oldLine: "···"
                        });
                    }), t;
                })($.value);
                let h = "";
                S.value = u.addNum, x.value = u.delNum, u.hunks.forEach(d => {
                    d.lines.forEach(s => {
                        let a = q.highlightAuto(s.content).value, e = "";
                        s.type == "add" ? e = "add" : s.type == "delete" ? e = "delete" : s.type == "match" && (e = "match", 
                        a = s.sourceContent);
                        let t = `<tr class="line-holder ${e}">
        <td class="line-nums old-line">${s.newLine}</td>
        <td class="line-nums new-line">${s.oldLine}</td>
        <td class="line-content">${a}</td>
        </tr>`;
                        h += t;
                    });
                }), y.value = h;
            })(), (u, h) => {
                const d = P;
                return T(), A("div", m, [ i("div", _, [ i("div", L, [ B(d, {
                    icon: "svg-icon:store-file"
                }), i("span", {
                    class: "file-name overSpan",
                    title: o(I),
                    style: {
                        "max-width": "100%"
                    }
                }, f(o(I)), 9, b) ]), i("div", g, [ i("span", k, "+" + f(o(S)), 1), i("span", v, "-" + f(o(x)), 1) ]) ]), i("table", {
                    class: "diff-table",
                    innerHTML: o(y)
                }, null, 8, w) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-31649f9f" ] ]);
});

export {
    F as __tla,
    N as default
};