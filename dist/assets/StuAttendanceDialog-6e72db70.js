import {
    h as B,
    T as q,
    p as z,
    r as _,
    e as d,
    o as E,
    c as P,
    k as F,
    l as G,
    t as e,
    B as f,
    a as o,
    m as H,
    n as J,
    aU as K,
    R as L,
    S as N,
    __tla as Q
} from "./index-6c08ea4c.js";

import {
    b as W,
    __tla as X
} from "./attendance-a1fdab58.js";

import {
    _ as Y
} from "./_plugin-vue_export-helper-1b428a4d.js";

let x, Z = Promise.all([ (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})() ]).then(async () => {
    let n, h, g, S, T, y, M, b;
    n = s => (L("data-v-c25d3d34"), s = s(), N(), s), h = {
        class: "StuAttendanceDialog"
    }, g = {
        class: "main-body"
    }, S = {
        class: "attendance-potion"
    }, T = n(() => e("div", {
        class: "title"
    }, "签到", -1)), y = {
        class: "title-time"
    }, M = n(() => e("div", {
        class: "attendance-potion2"
    }, null, -1)), b = n(() => e("div", {
        class: "message"
    }, "点击签到按钮，即可完成签到", -1)), x = Y({
        __name: "StuAttendanceDialog",
        props: {
            form: {
                type: Object,
                default: () => {}
            }
        },
        emits: [ "refresh" ],
        setup(s, {
            expose: D,
            emit: I
        }) {
            const k = B(), U = I;
            q();
            const V = z(), t = _(!1), c = s, w = _(""), a = _(0), i = d(() => Math.floor(a.value / 1e3)), A = d(() => String(Math.floor(i.value / 3600)).padStart(2, "0")), C = d(() => String(Math.floor(i.value % 3600 / 60)).padStart(2, "0")), O = d(() => String(i.value % 60).padStart(2, "0")), R = () => {
                let u = {
                    attendanceId: c.form.attendanceId,
                    id: c.form.id,
                    status: 1,
                    signRole: 4,
                    signUserId: k.user.id
                };
                W(u).then(l => {
                    V.success("签到成功"), t.value = !1, U("refresh");
                }).catch(() => {
                    t.value = !1;
                });
            };
            let r;
            const j = () => {
                t.value = !1;
            };
            return D({
                handleOpen: () => {
                    t.value = !0, J(() => {
                        w.value = c.form.title, a.value = 1e3 * c.form.countdown, 
                        function() {
                            let l = 0;
                            const m = new Date().getTime();
                            a.value > 0 && (r = setTimeout(function v() {
                                l++;
                                let p = 1e3 - (new Date().getTime() - (m + l * 1e3));
                                p < 0 && (p = 0), a.value = Math.max(0, a.value - 1e3), 
                                a.value <= 0 ? clearTimeout(r) : r = setTimeout(v, p);
                            }, 1e3));
                        }();
                    });
                }
            }), (u, l) => {
                const m = K;
                return E(), P("div", h, [ F(m, {
                    modelValue: o(t),
                    "onUpdate:modelValue": l[0] || (l[0] = v => H(t) ? t.value = v : null),
                    title: o(w),
                    width: "530px",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    draggable: !1,
                    onClose: j
                }, {
                    default: G(() => [ e("div", g, [ e("div", {
                        class: "attendance",
                        onClick: R
                    }, [ e("div", S, [ e("div", null, [ T, e("div", y, f(o(A)) + ":" + f(o(C)) + ":" + f(o(O)), 1) ]) ]), M ]), b ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-c25d3d34" ] ]);
});

export {
    Z as __tla,
    x as default
};