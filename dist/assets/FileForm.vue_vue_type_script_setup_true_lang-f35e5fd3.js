import {
    d as H,
    aa as P,
    p as z,
    r as o,
    o as A,
    C as B,
    l as s,
    k as p,
    v as _,
    a,
    m as y,
    t as d,
    ch as D,
    J as E,
    aU as G,
    __tla as K
} from "./index-6c08ea4c.js";

import {
    u as M,
    __tla as N
} from "./useUpload-b38510e8.js";

let F, O = Promise.all([ (() => {
    try {
        return K;
    } catch {}
})(), (() => {
    try {
        return N;
    } catch {}
})() ]).then(async () => {
    let m, f, v;
    m = d("i", {
        class: "el-icon-upload"
    }, null, -1), f = d("div", {
        class: "el-upload__text"
    }, [ _(" 将文件拖到此处，或 "), d("em", null, "点击上传") ], -1), v = d("div", {
        class: "el-upload__tip",
        style: {
            color: "red"
        }
    }, " 提示：仅允许导入 jpg、png、gif 格式文件！ ", -1), F = H({
        name: "InfraFileForm",
        __name: "FileForm",
        emits: [ "success" ],
        setup(Q, {
            expose: b,
            emit: k
        }) {
            const {
                t: x
            } = P(), u = z(), l = o(!1), r = o(!1), c = o([]), h = o({
                path: ""
            }), i = o(), {
                uploadUrl: U,
                httpRequest: q
            } = M();
            b({
                open: async () => {
                    l.value = !0, J();
                }
            });
            const C = e => {
                h.value.path = e.name;
            }, V = () => {
                var e;
                c.value.length != 0 ? (e = a(i)) == null || e.submit() : u.error("请上传文件");
            }, j = k, R = () => {
                var e;
                l.value = !1, r.value = !1, (e = a(i)) == null || e.clearFiles(), 
                u.success(x("common.createSuccess")), j("success");
            }, I = () => {
                u.error("上传失败，请您重新上传！"), r.value = !1;
            }, J = () => {
                var e;
                r.value = !1, (e = i.value) == null || e.clearFiles();
            }, L = () => {
                u.error("最多只能上传一个文件！");
            };
            return (e, t) => {
                const S = D, g = E, w = G;
                return A(), B(w, {
                    modelValue: a(l),
                    "onUpdate:modelValue": t[2] || (t[2] = n => y(l) ? l.value = n : null),
                    title: "上传文件"
                }, {
                    footer: s(() => [ p(g, {
                        onClick: t[1] || (t[1] = n => l.value = !1)
                    }, {
                        default: s(() => [ _("取 消") ]),
                        _: 1
                    }), p(g, {
                        disabled: a(r),
                        type: "primary",
                        onClick: V
                    }, {
                        default: s(() => [ _("确 定") ]),
                        _: 1
                    }, 8, [ "disabled" ]) ]),
                    default: s(() => [ p(S, {
                        ref_key: "uploadRef",
                        ref: i,
                        "file-list": a(c),
                        "onUpdate:fileList": t[0] || (t[0] = n => y(c) ? c.value = n : null),
                        action: a(U),
                        "auto-upload": !1,
                        data: a(h),
                        disabled: a(r),
                        limit: 1,
                        "on-change": C,
                        "on-error": I,
                        "on-exceed": L,
                        "on-success": R,
                        "http-request": a(q),
                        accept: ".jpg, .png, .gif",
                        drag: ""
                    }, {
                        tip: s(() => [ v ]),
                        default: s(() => [ m, f ]),
                        _: 1
                    }, 8, [ "file-list", "action", "data", "disabled", "http-request" ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    F as _,
    O as __tla
};