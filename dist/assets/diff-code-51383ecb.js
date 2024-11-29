import {
    r as s,
    a0 as M,
    w as O,
    o as S,
    c as D,
    t as o,
    k as I,
    B as E,
    a as r,
    _ as T,
    __tla as P
} from "./index-6c08ea4c.js";

import {
    c as L,
    __tla as V
} from "./check-a26308bc.js";

import {
    d as F,
    f as w,
    __tla as H
} from "./dialogProblem-fa4d1fd2.js";

import {
    _ as K
} from "./_plugin-vue_export-helper-1b428a4d.js";

let C, U = Promise.all([ (() => {
    try {
        return P;
    } catch {}
})(), (() => {
    try {
        return V;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})() ]).then(async () => {
    let c, i, d, u, m;
    c = {
        class: "diff-code"
    }, i = {
        class: "diff-header"
    }, d = {
        class: "left-box"
    }, u = {
        class: "file-name"
    }, m = [ "innerHTML" ], C = K({
        __name: "diff-code",
        props: {
            fileName: {
                type: String,
                default: ""
            },
            diff: {
                type: String,
                default: ""
            },
            rowComponent: {
                type: String,
                default: ""
            },
            breadList: {
                type: Array,
                default: () => []
            }
        },
        setup(N) {
            const p = s(""), f = s(""), _ = s(), n = N, {
                fileName: $
            } = M(n), b = s([ {
                name: "Bug",
                code: "BUG",
                count: ""
            }, {
                name: "漏洞",
                code: "VULNERABILITY",
                count: ""
            }, {
                name: "异味",
                code: "CODE_SMELL",
                count: ""
            } ]), k = s([ {
                name: "阻断",
                code: "BLOCKER",
                count: ""
            }, {
                name: "严重",
                code: "CRITICAL",
                count: ""
            }, {
                name: "主要",
                code: "MAJOR",
                count: ""
            }, {
                name: "次要",
                code: "MINOR",
                count: ""
            }, {
                name: "提示",
                code: "INFO",
                count: ""
            } ]), y = s([]), A = async () => {
                const e = await L.getProblemsList({
                    projectKey: n.rowComponent,
                    pageNum: 1,
                    pageSize: 100
                });
                y.value = e == null ? void 0 : e.issues;
            }, v = s([]), R = async () => {
                const e = await L.getFileData({
                    key: n.rowComponent,
                    from: 1,
                    to: 501
                });
                v.value = e == null ? void 0 : e.sources;
            };
            O(() => n.rowComponent, e => {
                e && Promise.all([ R(), A() ]).then(() => {
                    (() => {
                        var l;
                        let t = "";
                        (l = v.value) == null || l.map((g, B) => {
                            var h;
                            (h = y.value) == null || h.map(a => {
                                parseInt(a.line) === parseInt(g.line) && (t += `<tr class="line-holder">
                  <td class="line-index line-issue"></td>
                  <td class="collapse-content">
                    <p>
                      <span>
                          ${w({
                                    list: k.value,
                                    attrName: "code",
                                    attrValue: a.severity,
                                    transferAttr: "name"
                                })}

                        <i
                          class="ml-1 icon-severity icon-check-${a.severity}"
                        >
                        </i>
                      </span>
                      <span class="neu-tag-check ${a.type}">
                        ${w({
                                    list: b.value,
                                    attrName: "code",
                                    attrValue: a.type,
                                    transferAttr: "name"
                                })}
                      </span>
                    </p>
                    <p>
                      ${a.message}
                      <span data-rule='${a.rule}'>\u4E3A\u4F55\u662F\u95EE\u9898\uFF1F</span>
                    </p>
                  </td>
                </tr>
                `);
                            }), t += `<tr class="line-holder">
                <td class="line-index">${B + 1}</td>
                <td class="line-content">${g.code}</td>
              </tr>`;
                        }), f.value = t;
                    })();
                });
            }, {
                immediate: !0
            });
            const x = e => {
                const t = e.target.getAttribute("data-rule");
                t && (p.value = t, _.value.openDialog());
            };
            return (e, t) => {
                const l = T;
                return S(), D("div", c, [ o("div", i, [ o("div", d, [ I(l, {
                    icon: "svg-icon:store-file"
                }), o("span", u, E(r($)), 1) ]) ]), o("table", {
                    class: "diff-table-check",
                    innerHTML: r(f),
                    onClick: x
                }, null, 8, m), I(F, {
                    ref_key: "problemDetailsRef",
                    ref: _,
                    rowId: r(p)
                }, null, 8, [ "rowId" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-8c68cdf1" ] ]);
});

export {
    U as __tla,
    C as default
};