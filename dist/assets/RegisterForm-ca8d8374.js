import {
    _ as F,
    __tla as x
} from "./Form-c3087fdd.js";

import {
    _ as I,
    __tla as U
} from "./XButton-1a8b40b5.js";

import {
    r as p,
    n as C,
    a as r,
    d as E,
    aa as L,
    e as q,
    U as G,
    A as j,
    G as z,
    o as A,
    C as B,
    l as u,
    k as i,
    t as h,
    P as D,
    __tla as M
} from "./index-6c08ea4c.js";

import {
    u as T,
    __tla as H
} from "./useValidator-b39f221e.js";

import {
    u as J,
    L as K,
    _ as N,
    __tla as O
} from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-157278a6.js";

import {
    __tla as Q
} from "./Form.vue_vue_type_style_index_0_scoped_09f6ff61_lang-b4a4372a.js";

import {
    __tla as W
} from "./InputPassword-6b59edce.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as X
} from "./Editor-ef737d2a.js";

import {
    __tla as Y
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as Z
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as $
} from "./file-e038b35d.js";

import {
    __tla as aa
} from "./EditorPreviewNew.vue_vue_type_style_index_1_scoped_88adfb62_lang-b5c74759.js";

import {
    __tla as ta
} from "./UploadImg-4110c3da.js";

import {
    __tla as ra
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as ea
} from "./throttle-1adeb119.js";

import {
    __tla as la
} from "./useUpload-b38510e8.js";

import {
    __tla as oa
} from "./index-e75cf668.js";

import {
    __tla as sa
} from "./index-ef4d146e.js";

let w, ca = Promise.all([ (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return O;
    } catch {}
})(), (() => {
    try {
        return Q;
    } catch {}
})(), (() => {
    try {
        return W;
    } catch {}
})(), (() => {
    try {
        return X;
    } catch {}
})(), (() => {
    try {
        return Y;
    } catch {}
})(), (() => {
    try {
        return Z;
    } catch {}
})(), (() => {
    try {
        return $;
    } catch {}
})(), (() => {
    try {
        return aa;
    } catch {}
})(), (() => {
    try {
        return ta;
    } catch {}
})(), (() => {
    try {
        return ra;
    } catch {}
})(), (() => {
    try {
        return ea;
    } catch {}
})(), (() => {
    try {
        return la;
    } catch {}
})(), (() => {
    try {
        return oa;
    } catch {}
})(), (() => {
    try {
        return sa;
    } catch {}
})() ]).then(async () => {
    let y, f, g;
    y = {
        class: "w-[100%] flex"
    }, f = {
        class: "w-[100%]"
    }, g = {
        class: "mt-15px w-[100%]"
    }, w = E({
        name: "RegisterForm",
        __name: "RegisterForm",
        setup(na) {
            const {
                t: e
            } = L(), {
                required: c
            } = T(), {
                register: P,
                elFormRef: v
            } = (d => {
                const o = p(), n = p(), l = async () => (await C(), r(o)), _ = {
                    setProps: async (t = {}) => {
                        const a = await l();
                        a == null || a.setProps(t), t.model && (a == null || a.setValues(t.model));
                    },
                    setValues: async t => {
                        const a = await l();
                        a == null || a.setValues(t);
                    },
                    setSchema: async t => {
                        const a = await l();
                        a == null || a.setSchema(t);
                    },
                    addSchema: async (t, a) => {
                        const s = await l();
                        s == null || s.addSchema(t, a);
                    },
                    delSchema: async t => {
                        const a = await l();
                        a == null || a.delSchema(t);
                    },
                    getFormData: async () => {
                        const t = await l();
                        return t == null ? void 0 : t.formModel;
                    }
                };
                return d && _.setProps(d), {
                    register: (t, a) => {
                        o.value = t, n.value = a;
                    },
                    elFormRef: n,
                    methods: _
                };
            })(), {
                handleBackLogin: b,
                getLoginState: k
            } = J(), R = q(() => r(k) === K.REGISTER), S = G([ {
                field: "title",
                colProps: {
                    span: 24
                }
            }, {
                field: "username",
                label: e("login.username"),
                value: "",
                component: "Input",
                colProps: {
                    span: 24
                },
                componentProps: {
                    placeholder: e("login.usernamePlaceholder")
                }
            }, {
                field: "password",
                label: e("login.password"),
                value: "",
                component: "InputPassword",
                colProps: {
                    span: 24
                },
                componentProps: {
                    style: {
                        width: "100%"
                    },
                    strength: !0,
                    placeholder: e("login.passwordPlaceholder")
                }
            }, {
                field: "check_password",
                label: e("login.checkPassword"),
                value: "",
                component: "InputPassword",
                colProps: {
                    span: 24
                },
                componentProps: {
                    style: {
                        width: "100%"
                    },
                    strength: !0,
                    placeholder: e("login.passwordPlaceholder")
                }
            }, {
                field: "code",
                label: e("login.code"),
                colProps: {
                    span: 24
                }
            }, {
                field: "register",
                colProps: {
                    span: 24
                }
            } ]), V = {
                username: [ c() ],
                password: [ c() ],
                check_password: [ c() ],
                code: [ c() ]
            }, m = p(!1);
            return (d, o) => {
                const n = D, l = I, _ = F;
                return j((A(), B(_, {
                    rules: V,
                    schema: r(S),
                    class: "dark:(border-1 border-[var(--el-border-color)] border-solid)",
                    "hide-required-asterisk": "",
                    "label-position": "top",
                    size: "large",
                    onRegister: r(P)
                }, {
                    title: u(() => [ i(N, {
                        style: {
                            width: "100%"
                        }
                    }) ]),
                    code: u(t => [ h("div", y, [ i(n, {
                        modelValue: t.code,
                        "onUpdate:modelValue": a => t.code = a,
                        placeholder: r(e)("login.codePlaceholder")
                    }, null, 8, [ "modelValue", "onUpdate:modelValue", "placeholder" ]) ]) ]),
                    register: u(() => [ h("div", f, [ i(l, {
                        loading: r(m),
                        title: r(e)("login.register"),
                        class: "w-[100%]",
                        type: "primary",
                        onClick: o[0] || (o[0] = t => (async () => {
                            const a = r(v);
                            a == null || a.validate(async s => {
                                if (s) try {
                                    m.value = !0;
                                } finally {
                                    m.value = !1;
                                }
                            });
                        })())
                    }, null, 8, [ "loading", "title" ]) ]), h("div", g, [ i(l, {
                        title: r(e)("login.hasUser"),
                        class: "w-[100%]",
                        onClick: o[1] || (o[1] = t => r(b)())
                    }, null, 8, [ "title" ]) ]) ]),
                    _: 1
                }, 8, [ "schema", "onRegister" ])), [ [ z, r(R) ] ]);
            };
        }
    });
});

export {
    ca as __tla,
    w as default
};