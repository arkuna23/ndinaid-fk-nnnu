import {
    s as S,
    __tla as b
} from "./index-43a52aa3.js";

import {
    V as H,
    __tla as T
} from "./video-1d0dc730.js";

import {
    __tla as k
} from "./file-e038b35d.js";

import {
    u as q,
    T as B,
    a4 as C,
    r as c,
    a0 as E,
    w as i,
    f as R,
    n as V,
    o as W,
    c as j,
    k as D,
    a as t,
    __tla as F
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let y, N = Promise.all([ (() => {
    try {
        return b;
    } catch {}
})(), (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return k;
    } catch {}
})(), (() => {
    try {
        return F;
    } catch {}
})() ]).then(async () => {
    y = {
        __name: "videoRes",
        props: {
            resourceUrl: {
                type: String,
                default: ""
            },
            eid: {
                type: String,
                default: ""
            },
            resInfo: {
                type: Object,
                default: () => {}
            },
            excessiveWidth: {
                type: Number,
                default: 0
            },
            excessiveHeight: {
                type: Number,
                default: 0
            }
        },
        setup(p) {
            q();
            const s = B(), {
                width: l,
                height: n
            } = C(), h = c(), d = c(null), m = p, {
                resourceUrl: _,
                eid: f,
                resInfo: r,
                excessiveWidth: g,
                excessiveHeight: v
            } = E(m), u = e => {
                try {
                    const a = document.getElementById("refPlayerWrap");
                    a && (a.style[e] = l + "px");
                } catch {}
            };
            i(l, () => u("width")), i(n, () => u("height")), R(() => {
                V(() => {
                    var e = document.querySelector(".d-control-progress");
                    r.value.isDrag == 0 && r.value.isFirst == 1 && (e.style.display = "none"), 
                    d.value = document.getElementById("dPlayerVideoMain");
                });
                try {
                    document.body.style.overflow = "hidden";
                } catch {}
            });
            const I = e => {
                e - r.value.playProgress < 1 && (r.value.playProgress = 0);
            }, o = e => {
                S({
                    teachCourseId: s.params.teachCourseId,
                    currentClassId: s.params.classId,
                    resId: s.params.resId,
                    playStatus: e,
                    watchProgress: d.value.currentTime
                }).then(a => {});
            }, P = e => {
                o(1);
            }, w = e => {
                o(2);
            }, x = e => {
                o(3), document.querySelector(".d-control-progress").style.display = "block";
            };
            return (e, a) => (W(), j("div", null, [ D(H, {
                ref_key: "learningVideoRef",
                ref: h,
                "resource-u-r-l": t(_),
                "data-id": t(f),
                width: t(l) - t(g) + "px",
                height: t(n) - t(v) + "px",
                style: {
                    overflow: "hidden"
                },
                autoPlay: !0,
                currentTime: t(r).playProgress,
                controlBtns: [ "audioTrack", "quality", "speedRate", "volume", "pageFullScreen", "fullScreen" ],
                onHandlePlay: P,
                onHandlePause: w,
                onHandleEnded: x,
                onDurationchange: I
            }, null, 8, [ "resource-u-r-l", "data-id", "width", "height", "currentTime" ]) ]));
        }
    };
});

export {
    N as __tla,
    y as default
};