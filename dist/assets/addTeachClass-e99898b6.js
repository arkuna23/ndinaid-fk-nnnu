import {
    _ as B,
    __tla as G
} from "./index-33f7224d.js";

import {
    h as K,
    T as W,
    a0 as X,
    r as i,
    U as Y,
    f as Z,
    w as ee,
    e as ae,
    o as k,
    C as U,
    l as h,
    k as p,
    a as n,
    H as te,
    c as re,
    F as le,
    y as se,
    m as ue,
    bo as ne,
    P as de,
    O as ie,
    ab as me,
    ac as oe,
    Q as ce,
    n as _e,
    __tla as he
} from "./index-6c08ea4c.js";

import {
    a5 as pe,
    a6 as fe,
    a7 as ve,
    __tla as Ie
} from "./index-9567cbf6.js";

import {
    j as ge
} from "./validate-b72f006c.js";

import {
    _ as ye
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as be
} from "./el-infinite-scroll-9cd61b58.js";

import {
    __tla as Ce
} from "./throttle-1adeb119.js";

import {
    __tla as Le
} from "./index-13c88727.js";

import {
    __tla as Ne
} from "./dict-c5825220.js";

import "./tree-05ea8e09.js";

import {
    __tla as Oe
} from "./index-7c75bd27.js";

import {
    __tla as ke
} from "./index-d1db0401.js";

import {
    __tla as Se
} from "./DeptTag-1be092ce.js";

let T, Ue = Promise.all([ (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return Ie;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Le;
    } catch {}
})(), (() => {
    try {
        return Ne;
    } catch {}
})(), (() => {
    try {
        return Oe;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return Se;
    } catch {}
})() ]).then(async () => {
    T = ye({
        __name: "addTeachClass",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            },
            teacherList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(V, {
            expose: w,
            emit: D
        }) {
            const j = V, x = K(), c = W(), {
                teachInfo: _,
                teacherList: f
            } = X(j), A = i(!1), b = i(""), a = Y({
                id: "",
                name: "",
                teachArrangementId: "",
                courseId: "",
                termId: "",
                teacherId: "",
                teacherName: "",
                teacherNumber: "",
                studentCount: "",
                originalTeacherId: "",
                originalTeacherName: "",
                originalTeacherNumber: "",
                creatorName: "",
                teachClassStudentDOList: []
            }), q = {
                name: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                }, {
                    validator: ge,
                    trigger: "blur"
                } ],
                teacherId: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                semester: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ]
            }, F = D;
            Z(() => {});
            const P = async () => {
                await fe({
                    ...a,
                    teachCourseId: c.params.courseId,
                    termId: c.params.termId,
                    teachArrangementId: c.params.teachArrangementId,
                    creatorName: x.getUser.nickname
                });
            }, z = async () => {
                await ve({
                    id: _.value.id,
                    ...a
                });
            }, C = i(""), v = i(""), L = i(null), I = i(null), E = (t, e, r) => {
                I.value.validate(async s => {
                    if (!s) return !1;
                    J(e), await L.value(), ne.success("操作成功"), r(!0), F("refreshList"), 
                    S(), o.value = !1;
                });
            }, S = () => {
                Object.keys(a).forEach(t => {
                    a[t] = "";
                }), a.teachClassStudentDOList = [], v.value = "", O.value = "";
            }, J = t => {
                const e = [], r = [];
                let s = {};
                t.map(l => {
                    var d, y;
                    (y = (d = _.value) == null ? void 0 : d.studentList) != null && y.some(u => (s = u, 
                    u.stuId === l.id)) ? e.push(s) : r.push(l);
                });
                const m = r.map(l => {
                    let d = {};
                    return d.stuId = l.id, d.stuName = l.nickname, d.stuNumber = l.number, 
                    d.stuDeptId = l.deptId, d;
                });
                a.teachClassStudentDOList = [ ...e, ...m ];
            }, R = t => {
                a.teachClassStudentDOList = t.map(e => {
                    let r = {};
                    return r.id = e.stuId, r.nickname = e.stuName, r.number = e.stuNumber, 
                    r.deptId = e.stuDeptId, r;
                });
            }, o = i(!1), N = i(null);
            ee(() => o.value, t => {
                var e;
                t ? (e = N.value) == null || e.initCom() : (I.value.resetFields(), 
                a.teachClassStudentDOList = [], S());
            });
            const $ = t => {
                var r, s, m;
                const e = (s = (r = f.value) == null ? void 0 : r.filter(l => l.id === t)) == null ? void 0 : s.pop();
                a.teacherName = e == null ? void 0 : e.nickname, a.teacherNumber = e == null ? void 0 : e.number, 
                H(), (m = N.value) == null || m.initCom();
            }, O = i(""), H = async () => {
                const t = await pe({
                    arrangementId: c.params.teachArrangementId,
                    teacherId: a.teacherId,
                    classId: C.value
                });
                O.value = t.join(",");
            }, g = i([]), M = t => {
                t ? setTimeout(async () => {
                    g.value = f.value.filter(e => e.nickname.includes(t) || e.number.includes(t));
                }, 200) : g.value = f.value;
            }, Q = ae(() => c.query.releaseStatus === "1" && v.value === "edit");
            return w({
                handleOpen: async ({
                    title: t,
                    type: e
                }) => {
                    o.value = !0, b.value = t, g.value = f.value;
                    const r = {
                        create: () => {
                            L.value = P, v.value = "create", C.value = "";
                        },
                        edit: () => {
                            L.value = z, v.value = "edit", _e(() => {
                                var s;
                                Object.keys(a).forEach(m => {
                                    var l;
                                    a[m] = ((l = _.value) == null ? void 0 : l[m]) || "";
                                }), R(JSON.parse(JSON.stringify((s = _.value) == null ? void 0 : s.studentList))), 
                                C.value = _.value.id;
                            });
                        },
                        default: () => {}
                    };
                    (r[e] || r.default)();
                },
                handleClose: () => {
                    A.value = !1, b.value = "", I.value.resetFields();
                }
            }), (t, e) => {
                const r = de, s = ie, m = me, l = oe, d = ce, y = B;
                return k(), U(y, {
                    ref_key: "comChooseUserRef",
                    ref: N,
                    modelValue: n(o),
                    "onUpdate:modelValue": e[3] || (e[3] = u => ue(o) ? o.value = u : null),
                    onSubmitIds: E,
                    defaultUserParams: {
                        notInUserIds: n(O),
                        identities: "5"
                    },
                    defaultUserList: n(a).teachClassStudentDOList,
                    dialogTitle: n(b),
                    alertTitle: "说明：被添加对象需为系统中角色为“学生”且账号状态为启用的用户"
                }, {
                    append: h(() => [ p(d, {
                        ref_key: "dialogFormRef",
                        ref: I,
                        model: n(a),
                        onSubmit: e[2] || (e[2] = te(() => {}, [ "prevent" ])),
                        rules: q,
                        class: "dialog-form",
                        "label-position": "top",
                        inline: ""
                    }, {
                        default: h(() => [ p(s, {
                            label: "教学班名称",
                            prop: "name"
                        }, {
                            default: h(() => [ p(r, {
                                modelValue: n(a).name,
                                "onUpdate:modelValue": e[0] || (e[0] = u => n(a).name = u),
                                modelModifiers: {
                                    trim: !0
                                },
                                placeholder: "请输入教学班名称",
                                maxlength: "30",
                                size: "large",
                                style: {
                                    width: "360px"
                                }
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), p(s, {
                            label: "授课教师",
                            prop: "teacherId"
                        }, {
                            default: h(() => [ p(l, {
                                modelValue: n(a).teacherId,
                                "onUpdate:modelValue": e[1] || (e[1] = u => n(a).teacherId = u),
                                filterable: "",
                                remote: "",
                                "remote-method": M,
                                size: "large",
                                placeholder: "请输入授课教师姓名/工号",
                                style: {
                                    width: "360px"
                                },
                                disabled: n(Q),
                                onChange: $
                            }, {
                                default: h(() => [ (k(!0), re(le, null, se(n(g), u => (k(), 
                                U(m, {
                                    key: u.id,
                                    label: `${u.nickname}(${u.number})`,
                                    value: u.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "defaultUserParams", "defaultUserList", "dialogTitle" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-af2c8e17" ] ]);
});

export {
    Ue as __tla,
    T as default
};