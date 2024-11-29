import {
    _ as et,
    __tla as st
} from "./DictTag.vue_vue_type_script_lang-bb90acfe.js";

import {
    T as lt,
    r as _,
    e as m,
    U as rt,
    f as ct,
    o as l,
    c as n,
    t as e,
    k as P,
    a as t,
    B as c,
    F as j,
    y as G,
    z as it,
    C as J,
    R as ot,
    S as nt,
    __tla as pt
} from "./index-6c08ea4c.js";

import {
    E as dt,
    __tla as ut
} from "./el-avatar-76960a98.js";

import {
    _ as _t,
    __tla as mt
} from "./index-1024512a.js";

import {
    a as K,
    b as xt,
    __tla as vt
} from "./attendance-a1fdab58.js";

import {
    a as ht,
    __tla as ft
} from "./file-e038b35d.js";

import {
    b as O,
    D as g,
    __tla as yt
} from "./dict-c5825220.js";

import {
    _ as bt
} from "./_plugin-vue_export-helper-1b428a4d.js";

import "./color-a8b4eb58.js";

import "./tree-05ea8e09.js";

import {
    __tla as Tt
} from "./DeptTag-1be092ce.js";

import {
    __tla as gt
} from "./index-ef4d146e.js";

let Q, It = Promise.all([ (() => {
    try {
        return st;
    } catch {}
})(), (() => {
    try {
        return pt;
    } catch {}
})(), (() => {
    try {
        return ut;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return yt;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return gt;
    } catch {}
})() ]).then(async () => {
    let I, E, S, A, F, k, C, D, N, z, w, R, U, q, H;
    I = {
        class: "top-box clearFix"
    }, E = {
        class: "right flex"
    }, S = {
        class: "lh-40px"
    }, A = {
        key: 0,
        class: "ml-20px bg-#FBECEA pl-10px pr-10px lh-40px color-#E14635",
        style: {
            "border-radius": "5px"
        }
    }, F = (p => (ot("data-v-838194cf"), p = p(), nt(), p))(() => e("span", {
        class: "font-size-12px"
    }, "剩余时间：", -1)), k = {
        class: "font-size-16px"
    }, C = {
        key: 1,
        class: "ml-20px bg-#F5F5F5 pl-20px pr-20px lh-40px color-#999999",
        style: {
            "border-radius": "5px"
        }
    }, D = {
        class: "content"
    }, N = {
        class: "mr-10px"
    }, z = {
        class: "pb-10px pt-10px"
    }, w = {
        class: "mb-6px font-size-14px lh-12px color-#3D3D3D"
    }, R = {
        class: "font-size-12px lh-12px color-#999999"
    }, U = {
        class: "absolute left-0 top-0 w-139px bg-#EEF1F7 font-size-12px lh-24px color-#949DB0",
        style: {
            "border-radius": "5px 0px 5px 0px",
            "text-align": "center"
        }
    }, q = {
        class: "item-menu absolute bottom-0 left-0 h-0 w-100%"
    }, H = [ "onClick" ], Q = bt({
        __name: "courseTeaAttendanceDetail",
        props: {
            detailId: {
                type: String,
                default: () => ""
            }
        },
        setup(p) {
            const x = lt(), u = p, r = _(0), v = _(0), h = _(0), V = m(() => Math.floor(r.value / 6e4)), W = m(() => String(Math.floor(r.value % 6e4 / 1e3)).padStart(2, "0")), X = m(() => String(V.value).padStart(2, "0")), Y = m(() => [ {
                label: "考勤状态",
                key: "status",
                type: "list",
                options: O(g.TEACH_ATTENDANCE_STATUS)
            } ]), f = _([]), y = rt({
                attendanceId: u.detailId,
                teachClassId: x.params.classId,
                searchReq: "",
                status: ""
            }), B = () => {
                let i = {
                    ...y,
                    attendanceId: u.detailId,
                    teachClassId: x.params.classId
                };
                K(i).then(s => {
                    f.value = s.list;
                });
            }, Z = i => {
                y.searchReq = i.searchReq, y.status = i.status, B();
            };
            let b;
            return ct(() => {
                let i = {
                    attendanceId: u.detailId,
                    teachClassId: x.params.classId
                };
                K(i).then(s => {
                    f.value = s.list, s.list && s.list.length > 0 && (r.value = 1e3 * s.list[0].countdown, 
                    v.value = s.list[0].attendanceNum, h.value = s.list[0].attendanceAllNum, 
                    function() {
                        let d = 0;
                        const T = new Date().getTime();
                        r.value > 0 && (b = setTimeout(a, 1e3));
                        function a() {
                            d++;
                            let o = 1e3 - (new Date().getTime() - (T + d * 1e3));
                            o < 0 && (o = 0), r.value = Math.max(0, r.value - 1e3), 
                            r.value <= 0 ? clearTimeout(b) : b = setTimeout(a, o);
                        }
                    }());
                });
            }), (i, s) => {
                const L = _t, d = dt, T = et;
                return l(), n("div", null, [ e("div", I, [ P(L, {
                    searchList: t(Y),
                    onHandleSearch: Z,
                    inDialog: !0,
                    class: "left",
                    keywordsInfo: {
                        key: "searchReq",
                        label: "姓名/学号"
                    }
                }, null, 8, [ "searchList" ]), e("div", E, [ e("div", S, " 已签：" + c(t(v) >= 0 ? t(v) : 0) + "/" + c(t(h) >= 0 ? t(h) : 0), 1), t(r) > 0 ? (l(), 
                n("div", A, [ F, e("span", k, c(t(X)) + ":" + c(t(W)), 1) ])) : (l(), 
                n("div", C, " 已结束 ")) ]) ]), e("div", D, [ (l(!0), n(j, null, G(t(f), (a, M) => (l(), 
                n("div", {
                    key: a.id,
                    class: it([ "left card relative mb-20px w-23.08% flex pb-22px pl-20px pr-20px pt-44px", M % 4 == 3 ? "mr-0" : "mr-20px" ])
                }, [ e("div", N, [ a.avatar ? (l(), J(d, {
                    key: 0,
                    class: "userIcon",
                    fit: "cover",
                    size: 50,
                    src: t(ht)(a.avatar)
                }, null, 8, [ "src" ])) : (l(), J(d, {
                    key: 1,
                    class: "userIcon",
                    fit: "cover",
                    size: 50,
                    src: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                })) ]), e("div", z, [ e("div", w, c(a.studentName), 1), e("div", R, c(a.studentNumber), 1) ]), e("div", U, c(a.signTimeString ? a.signTimeString : ""), 1), P(T, {
                    class: "absolute right-0 top-0 border-0!",
                    style: {
                        "border-radius": "0px 5px 0px 5px"
                    },
                    type: t(g).TEACH_ATTENDANCE_STATUS,
                    value: a.status,
                    effect: "dark"
                }, null, 8, [ "type", "value" ]), e("div", q, [ (l(!0), n(j, null, G(t(O)(t(g).TEACH_ATTENDANCE_STATUS), o => (l(), 
                n("div", {
                    key: o.value,
                    class: "type-card bg-#FFFFFF",
                    onClick: Et => (($, tt) => {
                        let at = {
                            attendanceId: u.detailId,
                            id: $.id,
                            status: tt.value,
                            signRole: 3,
                            signUserId: userStore.user.id
                        };
                        xt(at).then(() => {
                            B();
                        });
                    })(a, o)
                }, c(o.label), 9, H))), 128)) ]) ], 2))), 128)) ]) ]);
            };
        }
    }, [ [ "__scopeId", "data-v-838194cf" ] ]);
});

export {
    It as __tla,
    Q as default
};