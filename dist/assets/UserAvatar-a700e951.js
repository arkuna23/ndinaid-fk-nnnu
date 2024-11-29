import {
    d as z,
    az as A,
    r as c,
    h as S,
    e as j,
    a5 as P,
    o as $,
    c as C,
    t as n,
    k as u,
    a as b,
    l as D,
    ch as I,
    p as J,
    R as M,
    S as O,
    __tla as R
} from "./index-6c08ea4c.js";

import {
    E as T,
    __tla as q
} from "./el-avatar-76960a98.js";

import {
    b as B,
    __tla as G
} from "./profile-b10d3835.js";

import {
    i as N,
    j as H,
    __tla as K
} from "./file-e038b35d.js";

import {
    a as L
} from "./avatar-c3ebaba1.js";

import {
    _ as Q
} from "./_plugin-vue_export-helper-1b428a4d.js";

let y, V = Promise.all([ (() => {
    try {
        return R;
    } catch {}
})(), (() => {
    try {
        return q;
    } catch {}
})(), (() => {
    try {
        return G;
    } catch {}
})(), (() => {
    try {
        return K;
    } catch {}
})() ]).then(async () => {
    let p, d, v, m, _;
    p = {
        class: "change-avatar"
    }, d = {
        class: "info-value"
    }, v = {
        class: "img"
    }, m = {
        class: "avatar-uploader1 hover"
    }, _ = (o => (M("data-v-42f25a75"), o = o(), O(), o))(() => n("button", {
        class: "update-avatar"
    }, " 修改头像 ", -1)), y = Q(z({
        name: "UserAvatar",
        __name: "UserAvatar",
        props: {
            img: A.string.def("")
        },
        setup(o) {
            const {
                bucketName: W,
                indexName: X,
                source: x
            } = JSON.parse('{"source":"NEUNSE","bucketName":"neunsebucket","indexName":"neunseindex"}'), i = J(), r = c(""), f = S(), h = j(() => {
                var e;
                return (((e = f.getUser) == null ? void 0 : e.avatar) || "") + "";
            });
            h.value ? N(h.value).then(e => {
                r.value = `https://${e}`;
            }) : r.value = L;
            const k = c(0), w = c(), E = P.CancelToken;
            c();
            const g = () => {}, F = () => {}, U = e => {
                if (e.type !== "image/jpeg" && e.type !== "image/png") i.error("图片格式为jpg,png"); else if (e.size > 2097152) i.error("图片大小为2M以内"); else {
                    const s = new FormData();
                    s.append("source", x), s.append("isCheck", "true"), s.append("isSlice", "true"), 
                    s.append("files", e), H(s, t => {
                        const {
                            loaded: a,
                            total: l
                        } = t;
                        k.value = Number((90 * Number(a / l)).toFixed());
                    }, new E(function(t) {
                        w.value = t;
                    })).then(async t => {
                        const {
                            data: a
                        } = t;
                        if (a && a.length > 0) if (Number(a[0].errorFlag) === 0 || Number(a[0].errorFlag) === 2) a[0].filePath ? r.value = `https://${a[0].filePath}` : N(a[0].eid).then(l => {
                            r.value = `https://${l}`;
                        }), await B({
                            avatar: a[0].eid
                        }), f.setUserAvatarAction(a[0].eid); else {
                            const l = [ "", "文档转换失败", "上传文件重复", "上传文件失败" ];
                            i.error(l[a.errorFlag]);
                        }
                    }).catch(() => {});
                }
                return !1;
            };
            return (e, s) => {
                const t = T, a = I;
                return $(), C("div", p, [ n("div", d, [ n("div", v, [ u(t, {
                    shape: "circle",
                    class: "avatar-box default",
                    size: "large",
                    src: b(r),
                    fit: "cover",
                    onError: g
                }, null, 8, [ "src" ]), n("div", m, [ u(a, {
                    class: "avatar-uploader1",
                    action: "#",
                    "show-file-list": !1,
                    "on-success": F,
                    "before-upload": U,
                    style: {
                        position: "relative"
                    }
                }, {
                    default: D(() => [ u(t, {
                        shape: "circle",
                        class: "avatar-box",
                        size: "large",
                        src: b(r),
                        fit: "cover",
                        onError: g
                    }, null, 8, [ "src" ]), _ ]),
                    _: 1
                }) ]) ]) ]) ]);
            };
        }
    }), [ [ "__scopeId", "data-v-42f25a75" ] ]);
});

export {
    V as __tla,
    y as default
};