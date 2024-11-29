import {
    T as _a,
    h as Va,
    a0 as ya,
    r as V,
    U as xe,
    e as x,
    w as Ca,
    o as c,
    C as I,
    l as u,
    k as r,
    v as p,
    a as l,
    D as f,
    H as Na,
    c as b,
    F as O,
    y as S,
    ai as ka,
    A as xa,
    t as g,
    B as T,
    G as za,
    m as ze,
    bp as Ia,
    bq as Ua,
    O as Ta,
    ab as wa,
    ac as Ea,
    av as qa,
    aw as Oa,
    P as Sa,
    N as Da,
    a8 as ja,
    br as Ya,
    _ as Aa,
    K as Ra,
    cK as La,
    Q as Ha,
    J as Ma,
    aU as $a,
    R as Fa,
    S as Ga,
    n as U,
    __tla as Pa
} from "./index-6c08ea4c.js";

import {
    _ as Ba,
    __tla as Ja
} from "./index-13c88727.js";

import {
    r as Ka,
    __tla as Qa
} from "./index-9567cbf6.js";

import {
    d as Za
} from "./tree-05ea8e09.js";

import {
    _ as Wa
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    E as Xa,
    __tla as el
} from "./index-ef4d146e.js";

let Ie, al = Promise.all([ (() => {
    try {
        return Pa;
    } catch {}
})(), (() => {
    try {
        return Ja;
    } catch {}
})(), (() => {
    try {
        return Qa;
    } catch {}
})(), (() => {
    try {
        return el;
    } catch {}
})() ]).then(async () => {
    let z, $, F, G, P, B, J, K, Q, Z, W, X, ee, ae, le, re, te, ue, se, de, oe, ne, ie, ce, me, pe, ge, ve, he, fe, be;
    z = w => (Fa("data-v-e53a6ef1"), w = w(), Ga(), w), $ = {
        key: 0
    }, F = {
        key: 0
    }, G = {
        class: "selected-course"
    }, P = z(() => g("span", {
        class: "label"
    }, "课程名称：", -1)), B = {
        class: "content"
    }, J = z(() => g("span", {
        class: "label"
    }, "课程代码：", -1)), K = {
        class: "content"
    }, Q = z(() => g("span", {
        class: "label"
    }, "授课对象：", -1)), Z = {
        class: "content"
    }, W = z(() => g("span", {
        class: "label"
    }, "开课单位：", -1)), X = {
        class: "content"
    }, ee = z(() => g("span", {
        class: "label"
    }, "课程类别：", -1)), ae = {
        class: "content"
    }, le = z(() => g("span", {
        class: "label"
    }, "学分：", -1)), re = {
        class: "content"
    }, te = z(() => g("span", {
        class: "label"
    }, "学时：", -1)), ue = {
        class: "content"
    }, se = {
        key: 1
    }, de = {
        key: 1
    }, oe = {
        key: 2
    }, ne = {
        key: 3
    }, ie = z(() => g("div", null, null, -1)), ce = {
        key: 4
    }, me = {
        key: 5
    }, pe = {
        key: 6
    }, ge = {
        key: 7
    }, ve = {
        style: {
            display: "flex",
            "align-items": "center"
        }
    }, he = z(() => g("span", null, "目录层级", -1)), fe = {
        key: 8,
        class: "invite-code"
    }, be = {
        class: "invite-code-list"
    }, Ie = Wa({
        __name: "addTeach",
        props: {
            teachInfo: {
                type: Object,
                default: () => ({})
            },
            semesterYearList: {
                type: Array,
                default: () => []
            },
            termOptionList: {
                type: Array,
                default: () => []
            },
            teacherList: {
                type: Array,
                default: () => []
            },
            courseList: {
                type: Array,
                default: () => []
            },
            treeList: {
                type: Array,
                default: () => []
            }
        },
        emits: [ "refreshList" ],
        setup(w, {
            expose: Ue,
            emit: Te
        }) {
            const we = w;
            _a();
            const Ee = Va(), {
                teachInfo: m,
                semesterYearList: qe,
                termOptionList: Oe,
                courseList: _e,
                teacherList: E,
                treeList: Se
            } = ya(we), q = V(!1), A = V(""), e = xe({
                courseSource: "1",
                courseName: "",
                courseCode: "",
                termId: "",
                id: "",
                courseId: "",
                releaseStatus: "0",
                teachStatus: "1",
                creatorName: Ee.getUser.nickname,
                name: "",
                startYear: "",
                teachDate: [],
                isCurrentTerm: 0,
                isInUse: "",
                teacherId: "",
                teacherName: "",
                teacherNumber: "",
                originalTeacherId: "",
                originalTeacherName: "",
                originalTeacherNumber: "",
                stuName: "",
                stuNumber: "",
                teachCourseId: "",
                addType: [ "0" ],
                needConfirm: "1",
                allowExit: "1",
                maxCount: "",
                teachArrangementId: "",
                cover: "",
                approvalStatus: "",
                approvalRemark: "",
                level: "",
                level1Num: "",
                level2Num: "",
                level3Num: "",
                parentId: "",
                ancestors: "",
                name: "",
                studyType: "",
                classHours: "",
                sort: "",
                confirmCode: ""
            }), N = xe({
                name: "",
                code: "",
                teachingObject: "",
                courseDeptName: "",
                typeName: "",
                credit: "",
                classHours: ""
            });
            V();
            const De = V(), je = V(), Ye = V(), Ae = V(), Re = V(), Le = async o => {
                var s;
                const a = (s = _e.value.filter(i => i.id === o)) == null ? void 0 : s.pop(), n = await oa(a.id);
                Object.keys(N).forEach(i => N[i] = n == null ? void 0 : n[i]), a && (e.courseName = (n == null ? void 0 : n.name) || "", 
                e.courseCode = (n == null ? void 0 : n.code) || "");
            }, y = V(""), He = {
                courseSource: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                courseName: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                } ],
                courseCode: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "blur"
                }, {
                    validator: (o, a, n) => {
                        /^[A-Za-z0-9]+$/.test(a) ? n() : n(new Error("请输入数字或者字母"));
                    },
                    trigger: "blur"
                } ],
                courseId: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                termId: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                originalTeacherName: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                teacherId: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                name: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                startYear: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                teachDate: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                }, {
                    validator: (o, a, n) => {
                        const s = a == null ? void 0 : a[0], i = a == null ? void 0 : a[1];
                        s === i ? n(new Error("开始时间、结束时间不能为同一天")) : n();
                    },
                    trigger: "change"
                } ],
                isCurrentTerm: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                approvalStatus: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                stuName: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                stuNumber: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level1Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level2Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                level3Num: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                maxCount: [ {
                    validator: (o, a, n) => {
                        /^(?:[1-9][0-9]?[0-9]?|500)?$/.test(a) ? n() : n(new Error("请输入1-500整数"));
                    },
                    trigger: "blur"
                } ],
                confirmCode: [ {
                    required: !0,
                    message: "请输入",
                    trigger: "change"
                } ],
                addType: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                needConfirm: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                allowExit: [ {
                    required: !0,
                    message: "请选择",
                    trigger: "change"
                } ],
                classHours: [ {
                    validator: (o, a, n) => {
                        var s;
                        a ? (s = a) >= 0 && s <= 100 && s % .5 == 0 ? n() : n(new Error("请输入0.5倍数，最大值100")) : n();
                    },
                    trigger: "blur"
                } ],
                sort: [ {
                    validator: (o, a, n) => {
                        a ? /^(100|[1-9][0-9]?|[1-9])$/.test(a) ? n() : n(new Error("请输入1-100整数")) : n();
                    },
                    trigger: "blur"
                } ],
                parentId: [ {
                    validator: (o, a, n) => {
                        [ "editCatalog", "editCatalogRes" ].includes(_.value) || (a && la.value === 3 ? n(new Error("父级目录不能超过2级")) : n());
                    },
                    trigger: "change"
                } ]
            }, Me = Te, R = () => {
                var o;
                q.value = !1, A.value = "", aa(), (o = j.value) == null || o.resetFields();
            };
            V(null), V("");
            const _ = V(), $e = x(() => [ "create", "edit", "teaCreate", "teaEdit" ].includes(_.value)), Fe = x(() => [ "handOver" ].includes(_.value)), Ge = x(() => [ "semesterCreate", "semesterEdit" ].includes(_.value)), Pe = x(() => [ "createTeaching", "editTeaching" ].includes(_.value)), D = x(() => [ "teaEdit", "edit" ].includes(_.value)), Be = x(() => [ "stuCreate", "stuEdit" ].includes(_.value)), Je = x(() => [ "review" ].includes(_.value)), Ke = x(() => [ "manualAdd", "editCatalog", "manualAddRes", "editCatalogRes" ].includes(_.value)), Qe = x(() => [ "quickGenerate" ].includes(_.value)), Ze = x(() => [ "joinCourse" ].includes(_.value)), We = x(() => [ "manualAddRes", "editCatalogRes" ].includes(_.value)), Ve = () => {
                y.value = "说明：系统根据模板中填写的内容及层级关系生成目录，生成后可继续编辑", U(() => {
                    Object.keys(e).forEach(o => {
                        var a;
                        return e[o] = (a = m.value) == null ? void 0 : a[o];
                    }), m.value.parentId === "0" && (e.parentId = "", e.ancestors = "");
                });
            }, j = V(null), Xe = () => {
                j.value.validate(async o => {
                    if (!o) return !1;
                    Me("handleData", {
                        type: _.value,
                        params: e
                    });
                });
            }, ea = async o => {
                e.courseCode = "", e.courseName = "", e.courseId = "", o === "1" ? (e.releaseStatus = "0", 
                e.teachStatus = "1") : o === "2" && (e.releaseStatus = "0", e.teachStatus = "0");
            }, aa = () => {
                Object.keys(e).forEach(o => e[o] = ""), e.courseSource = "1", e.isCurrentTerm = 0, 
                e.releaseStatus = "0", e.addType = [ "0" ], e.needConfirm = "1", 
                e.allowExit = "1", Y.value.forEach(o => o.name = "");
            };
            Ca(() => e.teacherId, o => {
                var n, s;
                const a = (s = (n = E.value) == null ? void 0 : n.filter(i => i.id === o)) == null ? void 0 : s.pop();
                e.teacherName = a == null ? void 0 : a.nickname, e.teacherNumber = a == null ? void 0 : a.number;
            });
            const L = x(() => `${e.originalTeacherName}(${e.originalTeacherNumber})`), la = x(() => e.ancestors !== "" && e.ancestors !== null ? e.ancestors.split(",").length : null), ra = o => {
                e.ancestors = o.ancestors;
            }, Y = V([ {
                name: "",
                code: "1"
            }, {
                name: "",
                code: "2"
            }, {
                name: "",
                code: "3"
            }, {
                name: "",
                code: "4"
            }, {
                name: "",
                code: "5"
            }, {
                name: "",
                code: "6"
            } ]), ta = () => {
                j.value.clearValidate("confirmCode");
            }, ua = () => {
                let o = [];
                Y.value.filter(a => a.name === "").length < 1 ? (Y.value.map(a => o.push(a.name)), 
                e.confirmCode = o.join("")) : e.confirmCode = "";
            }, sa = o => {
                if (e.startYear) {
                    const a = o.getFullYear();
                    return +a < +e.startYear || +a > +e.startYear + 1;
                }
                return !1;
            }, H = V([]), da = o => {
                o ? setTimeout(async () => {
                    H.value = E.value.filter(a => a.nickname.includes(o) || a.number.includes(o));
                }, 200) : H.value = E.value;
            }, oa = o => Ka({
                id: o
            }), na = () => {
                e.teachDate = [];
            };
            return Ue({
                handleOpen: async ({
                    title: o,
                    type: a
                }) => {
                    q.value = !0, A.value = o, _.value = a;
                    const n = {
                        create: () => {
                            y.value = "请检查确认开课信息，创建成功后可点击列表后“教学班级管理”按钮进行教学班级、学生、授课教师设置";
                        },
                        edit: () => {
                            y.value = "请检查确认开课信息，创建成功后可点击列表后“教学班级管理”按钮进行教学班级、学生、授课教师设置", 
                            U(() => {
                                var i, d;
                                Object.keys(e).forEach(v => {
                                    var h;
                                    return e[v] = ((h = m.value) == null ? void 0 : h[v]) || "";
                                }), Object.keys(N).forEach(v => {
                                    var h, k;
                                    return N[v] = (k = (h = m.value) == null ? void 0 : h.baseCourseDO) == null ? void 0 : k[v];
                                });
                                const {
                                    courseSource: s
                                } = m.value;
                                s === "2" && (e.courseName = (i = m.value) == null ? void 0 : i.baseCourseDO.name, 
                                e.courseCode = (d = m.value) == null ? void 0 : d.baseCourseDO.code);
                            });
                        },
                        handOver: async () => {
                            y.value = "请检查确认开课信息，创建成功后可点击列表后“班级管理”按钮进行教学班级、学生、授课教师设置", 
                            H.value = E.value, U(() => {
                                var s, i, d, v, h;
                                e.id = (s = m.value) == null ? void 0 : s.id, e.name = (i = m.value) == null ? void 0 : i.name, 
                                e.originalTeacherId = (d = m.value) == null ? void 0 : d.teacherId, 
                                e.originalTeacherName = (v = m.value) == null ? void 0 : v.teacherName, 
                                e.originalTeacherNumber = (h = m.value) == null ? void 0 : h.teacherNumber;
                            });
                        },
                        semesterCreate: () => {
                            y.value = "学期主要用于教学安排的创建和相关教学内容及数据的查询筛选，仅可有一个当前学期";
                        },
                        semesterEdit: () => {
                            y.value = "学期主要用于教学安排的创建和相关教学内容及数据的查询筛选，仅可有一个当前学期", 
                            U(() => Object.keys(e).forEach(s => {
                                var i;
                                return e[s] = (i = m.value) == null ? void 0 : i[s];
                            }));
                        },
                        teaCreate: () => {
                            y.value = "请检查确认开课信息，创建成功后可点击面板上“进入课程”按钮进行教学班级创建、课程内容建设等工作";
                        },
                        teaEdit: () => {
                            y.value = "请检查确认开课信息，创建成功后可点击面板上“进入课程”按钮进行教学班级创建、课程内容建设等工作", 
                            U(() => {
                                var i, d;
                                const {
                                    courseSource: s
                                } = m.value;
                                Object.keys(e).forEach(v => {
                                    var h;
                                    return e[v] = ((h = m.value) == null ? void 0 : h[v]) || "";
                                }), s === "1" ? Object.keys(N).forEach(v => {
                                    var h, k;
                                    return N[v] = (k = (h = m.value) == null ? void 0 : h.baseCourseDO) == null ? void 0 : k[v];
                                }) : (e.courseName = (i = m.value) == null ? void 0 : i.baseCourseDO.name, 
                                e.courseCode = (d = m.value) == null ? void 0 : d.baseCourseDO.code);
                            });
                        },
                        createTeaching: () => {},
                        editTeaching: () => {
                            U(() => {
                                Object.keys(e).forEach(s => {
                                    var i;
                                    return e[s] = ((i = m.value) == null ? void 0 : i[s]) || "";
                                }), e.addType = m.value.addType.split(",");
                            });
                        },
                        stuCreate: () => {},
                        stuEdit: () => {
                            U(() => Object.keys(e).forEach(s => {
                                var i;
                                return e[s] = (i = m.value) == null ? void 0 : i[s];
                            }));
                        },
                        review: () => {},
                        catalog: () => {},
                        quickGenerate: () => {
                            y.value = "系统根据设置的层级及数量要求自动生成目录，生成后可继续编辑，目录状态为开放则学生端可见";
                        },
                        manualAdd: () => {
                            y.value = "说明：系统根据模板中填写的内容及层级关系生成目录，生成后可继续编辑";
                        },
                        editCatalog: () => {
                            Ve();
                        },
                        joinCourse: () => {
                            y.value = "说明：部分课程教师已开启入班审核，审核通过后方可加入课程及班级，请注意查收系统消息哦！", 
                            U(() => {});
                        },
                        manualAddRes: () => {
                            y.value = "说明：系统根据模板中填写的内容及层级关系生成目录，生成后可继续编辑";
                        },
                        editCatalogRes: () => {
                            Ve();
                        },
                        default: () => {}
                    };
                    (n[a] || n.default)();
                },
                handleClose: R
            }), (o, a) => {
                const n = Ba, s = Ia, i = Ua, d = Ta, v = wa, h = Ea, k = qa, ia = Oa, C = Sa, ca = Da, ye = ja, ma = Ya, pa = Xa, ga = Aa, va = Ra, M = La, ha = Ha, Ce = Ma, fa = $a;
                return c(), I(fa, {
                    modelValue: l(q),
                    "onUpdate:modelValue": a[33] || (a[33] = t => ze(q) ? q.value = t : null),
                    width: "420px",
                    "close-on-click-modal": !1,
                    onClose: R,
                    appendToBody: !0,
                    title: l(A)
                }, {
                    footer: u(() => [ r(Ce, {
                        size: "large",
                        onClick: R
                    }, {
                        default: u(() => [ p("取 消 ") ]),
                        _: 1
                    }), r(Ce, {
                        size: "large",
                        type: "primary",
                        onClick: Xe
                    }, {
                        default: u(() => [ p("确 定 ") ]),
                        _: 1
                    }) ]),
                    default: u(() => [ l(y) ? (c(), I(n, {
                        key: 0,
                        title: l(y),
                        class: "mb-5"
                    }, null, 8, [ "title" ])) : f("", !0), r(ha, {
                        ref_key: "dialogFormRef",
                        ref: j,
                        model: l(e),
                        onSubmit: a[32] || (a[32] = Na(() => {}, [ "prevent" ])),
                        rules: He,
                        class: "dialog-form",
                        "label-position": "top"
                    }, {
                        default: u(() => [ l($e) ? (c(), b("div", $, [ r(d, {
                            label: "课程来源",
                            prop: "courseSource"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).courseSource,
                                "onUpdate:modelValue": a[0] || (a[0] = t => l(e).courseSource = t),
                                class: "ml-4",
                                disabled: l(D),
                                onChange: ea
                            }, {
                                default: u(() => [ r(s, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("课程信息库") ]),
                                    _: 1
                                }), r(s, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("快速新建") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), l(e).courseSource === "1" ? (c(), b("div", F, [ r(d, {
                            label: "选择课程",
                            prop: "courseId"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: l(e).courseId,
                                "onUpdate:modelValue": a[1] || (a[1] = t => l(e).courseId = t),
                                filterable: "",
                                size: "large",
                                placeholder: "请输入课程名称/代码",
                                style: {
                                    width: "360px"
                                },
                                onChange: Le,
                                disabled: l(D)
                            }, {
                                default: u(() => [ (c(!0), b(O, null, S(l(_e), t => (c(), 
                                I(v, {
                                    key: t.id,
                                    label: t.name,
                                    value: t.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), r(ka, {
                            name: "course-info"
                        }, {
                            default: u(() => [ xa(g("div", G, [ r(ia, null, {
                                default: u(() => [ r(k, {
                                    span: 24
                                }, {
                                    default: u(() => [ P, g("span", B, T(l(N).name), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ J, g("span", K, T(l(N).code), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ Q, g("span", Z, T(l(N).teachingObject), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ W, g("span", X, T(l(N).courseDeptName), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ ee, g("span", ae, T(l(N).typeName), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ le, g("span", re, T(l(N).credit), 1) ]),
                                    _: 1
                                }), r(k, {
                                    span: 12
                                }, {
                                    default: u(() => [ te, g("span", ue, T(l(N).classHours), 1) ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }) ], 512), [ [ za, l(e).courseId ] ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(e).courseSource === "2" ? (c(), b("div", se, [ r(d, {
                            label: "课程名称",
                            prop: "courseName"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).courseName,
                                "onUpdate:modelValue": a[2] || (a[2] = t => l(e).courseName = t),
                                modelModifiers: {
                                    trim: !0
                                },
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "50",
                                placeholder: "请输入课程名称",
                                disabled: l(D)
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "课程代码",
                            prop: "courseCode"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).courseCode,
                                "onUpdate:modelValue": a[3] || (a[3] = t => l(e).courseCode = t),
                                modelModifiers: {
                                    trim: !0
                                },
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "30",
                                placeholder: "请输入课程代码",
                                disabled: l(D)
                            }, null, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }) ])) : f("", !0), r(d, {
                            label: "开课学期",
                            prop: "termId"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: l(e).termId,
                                "onUpdate:modelValue": a[4] || (a[4] = t => l(e).termId = t),
                                size: "large",
                                placeholder: "请选择开课学期",
                                style: {
                                    width: "360px"
                                },
                                clearable: ""
                            }, {
                                default: u(() => [ (c(!0), b(O, null, S(l(Oe), t => (c(), 
                                I(v, {
                                    key: t.value,
                                    label: t.label,
                                    value: t.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Fe) ? (c(), b("div", de, [ r(d, {
                            label: "移交教学班级",
                            prop: "name"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[5] || (a[5] = t => l(e).name = t),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                disabled: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "原授课教师",
                            prop: "originalTeacherName"
                        }, {
                            default: u(() => [ f("", !0), r(C, {
                                modelValue: l(L),
                                "onUpdate:modelValue": a[7] || (a[7] = t => ze(L) ? L.value = t : null),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                disabled: ""
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "新授课教师",
                            prop: "teacherId"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: l(e).teacherId,
                                "onUpdate:modelValue": a[8] || (a[8] = t => l(e).teacherId = t),
                                placeholder: "请输入教师姓名/工号",
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                filterable: "",
                                remote: "",
                                "remote-method": da
                            }, {
                                default: u(() => [ (c(!0), b(O, null, S(l(E), t => (c(), 
                                I(v, {
                                    key: t.id,
                                    label: `${t.nickname}(${t.number})`,
                                    value: t.id
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Ge) ? (c(), b("div", oe, [ r(d, {
                            label: "学期名称",
                            prop: "name"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[9] || (a[9] = t => l(e).name = t),
                                modelModifiers: {
                                    trim: !0
                                },
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "10",
                                placeholder: "请输入学期名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "所属学年",
                            prop: "startYear"
                        }, {
                            default: u(() => [ r(h, {
                                modelValue: l(e).startYear,
                                "onUpdate:modelValue": a[10] || (a[10] = t => l(e).startYear = t),
                                placeholder: "请选择所属学年",
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                disabled: l(e).isInUse === "1",
                                onChange: na
                            }, {
                                default: u(() => [ (c(!0), b(O, null, S(l(qe), t => (c(), 
                                I(v, {
                                    key: t.value,
                                    label: t.label,
                                    value: t.value
                                }, null, 8, [ "label", "value" ]))), 128)) ]),
                                _: 1
                            }, 8, [ "modelValue", "disabled" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "学期时间",
                            prop: "teachDate"
                        }, {
                            default: u(() => [ r(ca, {
                                modelValue: l(e).teachDate,
                                "onUpdate:modelValue": a[11] || (a[11] = t => l(e).teachDate = t),
                                type: "daterange",
                                "unlink-panels": "",
                                "range-separator": "——",
                                "start-placeholder": "开始时间",
                                "end-placeholder": "结束时间",
                                style: {
                                    width: "360px"
                                },
                                size: "large",
                                "value-format": "YYYY-MM-DD",
                                "disabled-date": sa
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "是否为当前学期",
                            prop: "isCurrentTerm"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).isCurrentTerm,
                                "onUpdate:modelValue": a[12] || (a[12] = t => l(e).isCurrentTerm = t),
                                class: "ml-4"
                            }, {
                                default: u(() => [ r(s, {
                                    value: 0,
                                    size: "large"
                                }, {
                                    default: u(() => [ p("是") ]),
                                    _: 1
                                }), r(s, {
                                    value: 1,
                                    size: "large"
                                }, {
                                    default: u(() => [ p("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Pe) ? (c(), b("div", ne, [ r(d, {
                            label: "教学班名称",
                            prop: "name"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[13] || (a[13] = t => l(e).name = t),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                maxlength: "30",
                                placeholder: "请输入教学班名称"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "学生入班方式",
                            prop: "addType"
                        }, {
                            default: u(() => [ r(ma, {
                                modelValue: l(e).addType,
                                "onUpdate:modelValue": a[14] || (a[14] = t => l(e).addType = t)
                            }, {
                                default: u(() => [ g("div", null, [ r(ye, {
                                    value: "0",
                                    label: "教师手动添加/导入",
                                    size: "large",
                                    disabled: !0
                                }) ]), ie, g("div", null, [ r(ye, {
                                    value: "2",
                                    label: "输入邀请码加入",
                                    size: "large"
                                }) ]) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "学生自主入班是否需要审核",
                            prop: "needConfirm"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).needConfirm,
                                "onUpdate:modelValue": a[15] || (a[15] = t => l(e).needConfirm = t),
                                class: "ml-4"
                            }, {
                                default: u(() => [ r(s, {
                                    value: "0",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("是") ]),
                                    _: 1
                                }), r(s, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "是否允许学生退选课程",
                            prop: "allowExit"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).allowExit,
                                "onUpdate:modelValue": a[16] || (a[16] = t => l(e).allowExit = t),
                                class: "ml-4"
                            }, {
                                default: u(() => [ r(s, {
                                    value: "0",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("是") ]),
                                    _: 1
                                }), r(s, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("否") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "班级人数上限",
                            prop: "maxCount"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).maxCount,
                                "onUpdate:modelValue": a[17] || (a[17] = t => l(e).maxCount = t),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                placeholder: "请输入班级人数上限"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Be) ? (c(), b("div", ce, [ r(d, {
                            label: "学生姓名",
                            prop: "stuName"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).stuName,
                                "onUpdate:modelValue": a[18] || (a[18] = t => l(e).stuName = t),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                placeholder: "请输入学生姓名"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "学生学号/工号",
                            prop: "stuNumber"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).stuNumber,
                                "onUpdate:modelValue": a[19] || (a[19] = t => l(e).stuNumber = t),
                                size: "large",
                                style: {
                                    width: "360px"
                                },
                                placeholder: "请输入学生学号/工号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Je) ? (c(), b("div", me, [ r(d, {
                            label: "审核结果",
                            prop: "approvalStatus"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).approvalStatus,
                                "onUpdate:modelValue": a[20] || (a[20] = t => l(e).approvalStatus = t),
                                class: "ml-4"
                            }, {
                                default: u(() => [ r(s, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("通过") ]),
                                    _: 1
                                }), r(s, {
                                    value: "3",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("不通过") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "审核意见",
                            prop: "approvalRemark"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).approvalRemark,
                                "onUpdate:modelValue": a[21] || (a[21] = t => l(e).approvalRemark = t),
                                size: "large",
                                textarea: "",
                                placeholder: "请输入学生学号/工号",
                                maxlength: "50"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }) ])) : f("", !0), l(Ke) ? (c(), b("div", pe, [ r(d, {
                            label: "父级目录",
                            prop: "parentId"
                        }, {
                            default: u(() => [ r(pa, {
                                modelValue: l(e).parentId,
                                "onUpdate:modelValue": a[22] || (a[22] = t => l(e).parentId = t),
                                data: l(Se),
                                "check-strictly": "",
                                "render-after-expand": !1,
                                placeholder: "请选择所属目录",
                                filterable: "",
                                props: l(Za),
                                size: "large",
                                onCurrentChange: ra,
                                disabled: l(_) === "editCatalog"
                            }, null, 8, [ "modelValue", "data", "props", "disabled" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "目录名称",
                            prop: "name"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).name,
                                "onUpdate:modelValue": a[23] || (a[23] = t => l(e).name = t),
                                size: "large",
                                placeholder: "请输入目录名称",
                                maxlength: "50"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "学习模式",
                            prop: "studyType"
                        }, {
                            default: u(() => [ r(i, {
                                modelValue: l(e).studyType,
                                "onUpdate:modelValue": a[24] || (a[24] = t => l(e).studyType = t),
                                class: "ml-4"
                            }, {
                                default: u(() => [ r(s, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("混合") ]),
                                    _: 1
                                }), r(s, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("线上") ]),
                                    _: 1
                                }), r(s, {
                                    value: "3",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("线下") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "课时安排",
                            prop: "classHours"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).classHours,
                                "onUpdate:modelValue": a[25] || (a[25] = t => l(e).classHours = t),
                                modelModifiers: {
                                    trim: !0
                                },
                                size: "large",
                                placeholder: "请输入教学课时数"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), l(We) ? f("", !0) : (c(), I(d, {
                            key: 0,
                            label: "同级排序",
                            prop: "sort"
                        }, {
                            default: u(() => [ r(C, {
                                modelValue: l(e).sort,
                                "onUpdate:modelValue": a[26] || (a[26] = t => l(e).sort = t),
                                modelModifiers: {
                                    trim: !0
                                },
                                size: "large",
                                placeholder: "请输入序号"
                            }, null, 8, [ "modelValue" ]) ]),
                            _: 1
                        })) ])) : f("", !0), l(Qe) ? (c(), b("div", ge, [ r(d, {
                            prop: "level"
                        }, {
                            label: u(() => [ g("div", ve, [ he, r(va, {
                                content: "目录将按照“1—1.1—1.1.1”结构顺序自动生成",
                                placement: "right",
                                effect: "light"
                            }, {
                                default: u(() => [ r(ga, {
                                    icon: "svg-icon:icon-tooltip",
                                    class: "pointer ml-6px"
                                }) ]),
                                _: 1
                            }) ]) ]),
                            default: u(() => [ r(i, {
                                modelValue: l(e).level,
                                "onUpdate:modelValue": a[27] || (a[27] = t => l(e).level = t),
                                class: ""
                            }, {
                                default: u(() => [ r(s, {
                                    value: "1",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("一级") ]),
                                    _: 1
                                }), r(s, {
                                    value: "2",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("二级") ]),
                                    _: 1
                                }), r(s, {
                                    value: "3",
                                    size: "large"
                                }, {
                                    default: u(() => [ p("三级") ]),
                                    _: 1
                                }) ]),
                                _: 1
                            }, 8, [ "modelValue" ]) ]),
                            _: 1
                        }), r(d, {
                            label: "一级目录",
                            prop: "level1Num"
                        }, {
                            default: u(() => [ r(M, {
                                modelValue: l(e).level1Num,
                                "onUpdate:modelValue": a[28] || (a[28] = t => l(e).level1Num = t),
                                size: "large",
                                min: "1",
                                max: "100",
                                "controls-position": "right"
                            }, null, 8, [ "modelValue" ]), p(" 个 ") ]),
                            _: 1
                        }), [ "2", "3" ].includes(l(e).level) ? (c(), I(d, {
                            key: 0,
                            label: "每一级目录下二级目录",
                            prop: "level2Num"
                        }, {
                            default: u(() => [ r(M, {
                                modelValue: l(e).level2Num,
                                "onUpdate:modelValue": a[29] || (a[29] = t => l(e).level2Num = t),
                                size: "large",
                                min: "1",
                                max: "100",
                                "controls-position": "right"
                            }, null, 8, [ "modelValue" ]), p(" 个 ") ]),
                            _: 1
                        })) : f("", !0), [ "3" ].includes(l(e).level) ? (c(), I(d, {
                            key: 1,
                            label: "每二级目录下三级目录",
                            prop: "level3Num"
                        }, {
                            default: u(() => [ r(M, {
                                modelValue: l(e).level3Num,
                                "onUpdate:modelValue": a[30] || (a[30] = t => l(e).level3Num = t),
                                size: "large",
                                min: "1",
                                max: "100",
                                "controls-position": "right"
                            }, null, 8, [ "modelValue" ]), p(" 个 ") ]),
                            _: 1
                        })) : f("", !0) ])) : f("", !0), l(Ze) ? (c(), b("div", fe, [ r(d, {
                            label: "请输入6位课程（班级）邀请码",
                            class: "inviteCodeLabel"
                        }), g("div", be, [ (c(!0), b(O, null, S(l(Y), (t, Ne) => (c(), 
                        I(C, {
                            key: t.code,
                            ref_for: !0,
                            ref: "handleInviteCode" + Ne,
                            onChange: ua,
                            onFocus: ta,
                            onInput: ke => (ba => {
                                switch (ba) {
                                  case 0:
                                    De.value[0].focus();
                                    break;

                                  case 1:
                                    je.value[0].focus();
                                    break;

                                  case 2:
                                    Ye.value[0].focus();
                                    break;

                                  case 3:
                                    Ae.value[0].focus();
                                    break;

                                  case 4:
                                    Re.value[0].focus();
                                }
                            })(Ne),
                            modelValue: t.name,
                            "onUpdate:modelValue": ke => t.name = ke,
                            maxlength: "1",
                            size: "large",
                            style: {
                                width: "54px",
                                height: "62px"
                            }
                        }, null, 8, [ "onInput", "modelValue", "onUpdate:modelValue" ]))), 128)) ]), r(d, {
                            label: "",
                            prop: "confirmCode"
                        }, {
                            default: u(() => [ f("", !0) ]),
                            _: 1
                        }) ])) : f("", !0) ]),
                        _: 1
                    }, 8, [ "model" ]) ]),
                    _: 1
                }, 8, [ "modelValue", "title" ]);
            };
        }
    }, [ [ "__scopeId", "data-v-e53a6ef1" ] ]);
});

export {
    al as __tla,
    Ie as default
};