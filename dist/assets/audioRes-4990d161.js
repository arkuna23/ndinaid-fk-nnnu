import {
    g as P,
    __tla as T
} from "./file-e038b35d.js";

import {
    s as w,
    __tla as x
} from "./index-43a52aa3.js";

import {
    _ as b
} from "./_plugin-vue_export-helper-1b428a4d.js";

import {
    T as k,
    r as l,
    o as n,
    c,
    a as d,
    D as C,
    n as D,
    __tla as j
} from "./index-6c08ea4c.js";

let y, R = Promise.all([ (() => {
    try {
        return T;
    } catch {}
})(), (() => {
    try {
        return x;
    } catch {}
})(), (() => {
    try {
        return j;
    } catch {}
})() ]).then(async () => {
    let i, u, _;
    i = {
        class: "audio-container"
    }, u = [ "src" ], _ = {
        key: 0,
        class: "overlay"
    }, y = b({
        __name: "audioRes",
        setup(U, {
            expose: h
        }) {
            const s = k(), e = l(null), t = l(""), r = l({
                resType: "",
                isDrag: "",
                eid: "",
                playProgress: ""
            }), o = async a => await w({
                teachCourseId: s.params.teachCourseId,
                currentClassId: s.params.classId,
                resId: s.params.resId,
                playStatus: a,
                watchProgress: e.value.currentTime
            }), v = a => {
                o(1);
            }, p = async a => await o(2), f = a => {
                o(3);
            }, g = () => {};
            return h({
                operation: async a => {
                    Object.assign(r.value, a), t.value = await P(a.dataId), D(() => {
                        e.value && (e.value.currentTime = r.value.playProgress);
                    });
                },
                onPause: p
            }), (a, m) => (n(), c("div", i, [ (n(), c("audio", {
                key: d(t),
                ref_key: "audioRef",
                ref: e,
                controls: "",
                style: {
                    width: "100%",
                    height: "45px"
                },
                src: d(t),
                onEnded: f,
                onTimeupdate: m[0] || (m[0] = (...I) => a.onTimeUpdate && a.onTimeUpdate(...I)),
                onPause: p,
                onPlay: v,
                onLoadedmetadata: g
            }, null, 40, u)), d(r).isDrag === 0 ? (n(), c("div", _)) : C("", !0) ]));
        }
    }, [ [ "__scopeId", "data-v-cbb4c564" ] ]);
});

export {
    R as __tla,
    y as default
};