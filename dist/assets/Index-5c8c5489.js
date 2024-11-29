import {
    d,
    r as y,
    o as b,
    c as v,
    k as t,
    l as r,
    t as _,
    B as f,
    a,
    m as w,
    aa as x,
    M as I,
    s as P,
    __tla as g
} from "./index-6c08ea4c.js";

import {
    _ as V,
    __tla as j
} from "./BasicInfo.vue_vue_type_script_setup_true_lang-45f5a72d.js";

import k, {
    __tla as B
} from "./ProfileUser-779dc882.js";

import {
    _ as E,
    __tla as M
} from "./ResetPwd.vue_vue_type_script_setup_true_lang-bf7fe3d1.js";

import {
    __tla as U
} from "./UserAvatar-a700e951.js";

import {
    __tla as q
} from "./XTextButton.vue_vue_type_style_index_0_scoped_7561ab3f_lang-7f8f6b92.js";

import {
    E as z,
    __tla as A
} from "./index-ee838148.js";

import {
    _ as C
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    __tla as D
} from "./XButton-1a8b40b5.js";

import {
    __tla as F
} from "./Form-c3087fdd.js";

import {
    __tla as G
} from "./Form.vue_vue_type_style_index_0_scoped_09f6ff61_lang-b4a4372a.js";

import {
    __tla as H
} from "./InputPassword-6b59edce.js";

import {
    __tla as J
} from "./Editor-ef737d2a.js";

import {
    __tla as K
} from "./Editor.vue_vue_type_style_index_1_scoped_83b80ee8_lang-964690b9.js";

import {
    __tla as L
} from "./style.css_vue_type_style_index_0_src_true_lang-90967dd2.js";

import {
    __tla as N
} from "./file-e038b35d.js";

import {
    __tla as O
} from "./EditorPreviewNew.vue_vue_type_style_index_1_scoped_88adfb62_lang-b5c74759.js";

import {
    __tla as Q
} from "./UploadImg-4110c3da.js";

import {
    __tla as R
} from "./el-image-viewer-2c0d56e4.js";

import {
    __tla as S
} from "./throttle-1adeb119.js";

import {
    __tla as T
} from "./useUpload-b38510e8.js";

import {
    __tla as W
} from "./index-e75cf668.js";

import {
    __tla as X
} from "./index-ef4d146e.js";

import {
    __tla as Y
} from "./profile-b10d3835.js";

import {
    __tla as Z
} from "./formatTime-de6f1520.js";

import {
    __tla as $
} from "./el-avatar-76960a98.js";

import "./avatar-c3ebaba1.js";

let u, tt = Promise.all([ (() => {
    try {
        return g;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})(), (() => {
    try {
        return B;
    } catch {}
})(), (() => {
    try {
        return M;
    } catch {}
})(), (() => {
    try {
        return U;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return A;
    } catch {}
})(), (() => {
    try {
        return D;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return H;
    } catch {}
})(), (() => {
    try {
        return J;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return L;
    } catch {}
})(), (() => {
    try {
        return N;
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
        return R;
    } catch {}
})(), (() => {
    try {
        return S;
    } catch {}
})(), (() => {
    try {
        return T;
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
})() ]).then(async () => {
    let o, s, c;
    o = {
        class: "flex"
    }, s = {
        class: "card-header"
    }, c = {
        class: "card-header"
    }, u = C(d({
        name: "Profile",
        __name: "Index",
        setup(at) {
            const {
                t: l
            } = x(), e = y("basicInfo");
            return (rt, m) => {
                const n = z, i = I, p = P;
                return b(), v("div", o, [ t(n, {
                    class: "user w-1/3",
                    shadow: "hover"
                }, {
                    header: r(() => [ _("div", s, [ _("span", null, f(a(l)("profile.user.title")), 1) ]) ]),
                    default: r(() => [ t(a(k)) ]),
                    _: 1
                }), t(n, {
                    class: "user ml-3 w-2/3",
                    shadow: "hover"
                }, {
                    header: r(() => [ _("div", c, [ _("span", null, f(a(l)("profile.info.title")), 1) ]) ]),
                    default: r(() => [ _("div", null, [ t(p, {
                        modelValue: a(e),
                        "onUpdate:modelValue": m[0] || (m[0] = h => w(e) ? e.value = h : null),
                        class: "profile-tabs",
                        style: {
                            height: "400px"
                        },
                        "tab-position": "top"
                    }, {
                        default: r(() => [ t(i, {
                            label: a(l)("profile.info.basicInfo"),
                            name: "basicInfo"
                        }, {
                            default: r(() => [ t(a(V)) ]),
                            _: 1
                        }, 8, [ "label" ]), t(i, {
                            label: a(l)("profile.info.resetPwd"),
                            name: "resetPwd"
                        }, {
                            default: r(() => [ t(a(E)) ]),
                            _: 1
                        }, 8, [ "label" ]) ]),
                        _: 1
                    }, 8, [ "modelValue" ]) ]) ]),
                    _: 1
                }) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-1af4a45d" ] ]);
});

export {
    tt as __tla,
    u as default
};