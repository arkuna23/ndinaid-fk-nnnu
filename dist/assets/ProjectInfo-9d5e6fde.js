import {
    e as g,
    r as d,
    U as L,
    f as O,
    A as j,
    a as e,
    o as n,
    C as i,
    l as _,
    k as l,
    c as z,
    F as A,
    y as B,
    D as c,
    P as J,
    O as S,
    av as T,
    ab as M,
    ac as N,
    aw as Q,
    Q as X,
    a9 as G,
    __tla as H
} from "./index-6c08ea4c.js";

import {
    _ as K,
    __tla as W
} from "./Editor-ef737d2a.js";

import Y, {
    __tla as Z
} from "./ExpEnvironment-afacdb98.js";

import $, {
    __tla as ee
} from "./CodeRepository-3739494d.js";

import te, {
    __tla as ae
} from "./Container-3e0cfabc.js";

import re, {
    __tla as le
} from "./Flowline-94f98cfc.js";

import oe, {
    __tla as _e
} from "./UploadCover-f16f2b2c.js";

import {
    b as ue,
    D as me,
    __tla as ne
} from "./dict-c5825220.js";

import {
    _ as ie
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as se
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as de
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as ce
} from "./file-e038b35d.js";

import {
    __tla as pe
} from "./index-c31c99eb.js";

import {
    __tla as fe
} from "./index-c4ca0ced.js";

import {
    __tla as ye
} from "./index-993301ca.js";

import {
    __tla as ge
} from "./index-1024512a.js";

import "./tree-05ea8e09.js";

import {
    __tla as he
} from "./DeptTag-1be092ce.js";

import {
    __tla as ve
} from "./index-ef4d146e.js";

import {
    __tla as Ve
} from "./codeRepository-027fddde.js";

import {
    __tla as be
} from "./MountDatasets-93ee84e0.js";

import {
    __tla as qe
} from "./dataset-a3994d32.js";

import {
    __tla as Ee
} from "./index-71666e05.js";

import {
    __tla as Ue
} from "./pipelineManage-fe91e90c.js";

import {
    __tla as ke
} from "./pipelineTab-f3395094.js";

import "./configInfo-14ae9782.js";

import {
    __tla as we
} from "./databaseConfig-a0b3f7be.js";

import {
    __tla as xe
} from "./techDirectionManage-e96d2dc4.js";

import "./validate-b72f006c.js";

import {
    __tla as Ce
} from "./el-image-0d184777.js";

import {
    __tla as Re
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as De
} from "./throttle-1adeb119.js";

let h, Ie = Promise.all([ (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return ee;
    } catch {}
})(), (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return le;
    } catch {}
})(), (() => {
    try {
        return _e;
    } catch {}
})(), (() => {
    try {
        return ne;
    } catch {}
})(), (() => {
    try {
        return se;
    } catch {}
})(), (() => {
    try {
        return de;
    } catch {}
})(), (() => {
    try {
        return ce;
    } catch {}
})(), (() => {
    try {
        return pe;
    } catch {}
})(), (() => {
    try {
        return fe;
    } catch {}
})(), (() => {
    try {
        return ye;
    } catch {}
})(), (() => {
    try {
        return ge;
    } catch {}
})(), (() => {
    try {
        return he;
    } catch {}
})(), (() => {
    try {
        return ve;
    } catch {}
})(), (() => {
    try {
        return Ve;
    } catch {}
})(), (() => {
    try {
        return be;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})(), (() => {
    try {
        return Ee;
    } catch {}
})(), (() => {
    try {
        return Ue;
    } catch {}
})(), (() => {
    try {
        return ke;
    } catch {}
})(), (() => {
    try {
        return we;
    } catch {}
})(), (() => {
    try {
        return xe;
    } catch {}
})(), (() => {
    try {
        return Ce;
    } catch {}
})(), (() => {
    try {
        return Re;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})() ]).then(async () => {
    h = ie({
        __name: "ProjectInfo",
        props: {
            modelValue: {
                type: Object,
                default: () => ({})
            },
            isCreate: {
                type: Boolean,
                default: !0
            }
        },
        emits: [ "update:modelValue" ],
        setup(v, {
            expose: V,
            emit: b
        }) {
            const p = v, q = b, E = g(() => ue(me.EXP_PROJECT_LEVEL)), U = d(!1), a = g({
                get: () => p.modelValue,
                set: o => {
                    q("update:modelValue", o);
                }
            }), k = L({
                name: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请输入项目名称"
                }, {
                    min: 1,
                    max: 50,
                    message: "长度必须介于 1 和 50 之间",
                    trigger: "blur"
                } ],
                direction: [ {
                    required: !1,
                    message: "请输入项目技术方向/所属专业",
                    trigger: "blur"
                }, {
                    min: 0,
                    max: 50,
                    message: "长度必须介于 0 和 50 之间",
                    trigger: "blur"
                } ],
                level: [ {
                    required: !1,
                    message: "请选择项目等级",
                    trigger: [ "change", "blur" ]
                } ],
                environment: [ {
                    required: !0,
                    message: "请选择实验环境",
                    trigger: "blur"
                } ],
                introduction: [ {
                    required: !1,
                    trigger: "blur",
                    message: "请输入项目简介"
                } ],
                editor: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请选择代码仓"
                }, {
                    validator: (o, t, m) => {
                        t && t.codeRepositoryId ? m() : m(new Error("请选择代码仓"));
                    },
                    trigger: [ "blur", "change" ]
                } ],
                containers: [ {
                    required: !0,
                    trigger: "blur",
                    message: "请选择实验模板镜像"
                }, {
                    validator: (o, t, m) => {
                        (t || []).length === 0 ? m(new Error("请选择实验模板镜像")) : m();
                    },
                    trigger: [ "blur", "change" ]
                } ]
            }), f = d(), s = d(), w = o => {
                x(o);
            }, x = o => {
                var t;
                (t = s.value) == null || t.validateField(o);
            };
            return V({
                resetForm: () => {
                    var o;
                    (o = s.value) == null || o.resetFields();
                },
                getCoverEid: async function() {
                    return await e(f).uploadNow();
                },
                validate: () => {
                    var o;
                    return (o = s.value) == null ? void 0 : o.validate();
                }
            }), O(() => {}), (o, t) => {
                const m = J, u = S, y = T, C = M, R = N, D = Q, I = K, P = X, F = G;
                return j((n(), i(P, {
                    ref_key: "formRef",
                    ref: s,
                    model: e(a),
                    rules: e(k),
                    size: "large",
                    class: "cont-form pt-12px",
                    "label-position": "top",
                    "label-width": "80px",
                    style: {
                        "overflow-x": "hidden"
                    }
                }, {
                    default: _(() => [ l(u, {
                        label: "项目名称",
                        prop: "name"
                    }, {
                        default: _(() => [ l(m, {
                            modelValue: e(a).name,
                            "onUpdate:modelValue": t[0] || (t[0] = r => e(a).name = r),
                            placeholder: "请输入项目名称"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }), l(D, {
                        gutter: 20
                    }, {
                        default: _(() => [ l(y, {
                            span: 12
                        }, {
                            default: _(() => [ l(u, {
                                label: "项目方向",
                                prop: "direction"
                            }, {
                                default: _(() => [ l(m, {
                                    modelValue: e(a).direction,
                                    "onUpdate:modelValue": t[1] || (t[1] = r => e(a).direction = r),
                                    placeholder: "请输入项目技术方向/所属专业"
                                }, null, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }), l(y, {
                            span: 12
                        }, {
                            default: _(() => [ l(u, {
                                label: "项目等级",
                                prop: "level"
                            }, {
                                default: _(() => [ l(R, {
                                    modelValue: e(a).level,
                                    "onUpdate:modelValue": t[2] || (t[2] = r => e(a).level = r),
                                    clearable: "",
                                    placeholder: "请选择项目等级"
                                }, {
                                    default: _(() => [ (n(!0), z(A, null, B(e(E), r => (n(), 
                                    i(C, {
                                        key: r.value,
                                        label: r.label,
                                        value: r.value
                                    }, null, 8, [ "label", "value" ]))), 128)) ]),
                                    _: 1
                                }, 8, [ "modelValue" ]) ]),
                                _: 1
                            }) ]),
                            _: 1
                        }) ]),
                        _: 1
                    }), l(u, {
                        label: "实验环境",
                        prop: "environment"
                    }, {
                        default: _(() => [ l(Y, {
                            modelValue: e(a).environment,
                            "onUpdate:modelValue": t[3] || (t[3] = r => e(a).environment = r),
                            isCreate: p.isCreate && !e(a).id
                        }, null, 8, [ "modelValue", "isCreate" ]) ]),
                        _: 1
                    }), e(a).environment === 5 ? (n(), i(u, {
                        key: 0,
                        label: "代码仓",
                        prop: "editor"
                    }, {
                        default: _(() => [ l($, {
                            modelValue: e(a).editor,
                            "onUpdate:modelValue": t[4] || (t[4] = r => e(a).editor = r)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : c("", !0), e(a).environment === 10 ? (n(), i(u, {
                        key: 1,
                        label: "实验模板",
                        prop: "containers"
                    }, {
                        default: _(() => [ l(te, {
                            modelValue: e(a).containers,
                            "onUpdate:modelValue": t[5] || (t[5] = r => e(a).containers = r)
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    })) : c("", !0), e(a).environment === 15 ? (n(), i(u, {
                        key: 2,
                        label: "技术方向",
                        required: ""
                    }, {
                        default: _(() => [ l(re, {
                            formData: e(a).pipelineSaveReqVo,
                            "onUpdate:formData": t[6] || (t[6] = r => e(a).pipelineSaveReqVo = r),
                            onValidateValue: w
                        }, null, 8, [ "formData" ]) ]),
                        _: 1
                    })) : c("", !0), l(u, {
                        label: "项目封面",
                        prop: "coverEid"
                    }, {
                        default: _(() => [ l(oe, {
                            ref_key: "uploadCoverRef",
                            ref: f,
                            "is-small": !1,
                            defaultId: e(a).coverEid
                        }, null, 8, [ "defaultId" ]) ]),
                        _: 1
                    }), l(u, {
                        label: "项目简介",
                        prop: "introduction"
                    }, {
                        default: _(() => [ l(I, {
                            modelValue: e(a).introduction,
                            "onUpdate:modelValue": t[7] || (t[7] = r => e(a).introduction = r),
                            height: "200px"
                        }, null, 8, [ "modelValue" ]) ]),
                        _: 1
                    }) ]),
                    _: 1
                }, 8, [ "model", "rules" ])), [ [ F, e(U) ] ]);
            };
        }
    }, [ [ "__scopeId", "data-v-04f7cf1d" ] ]);
});

export {
    Ie as __tla,
    h as default
};