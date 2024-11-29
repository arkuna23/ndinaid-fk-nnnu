import {
    a6 as u,
    __tla as c
} from "./index-6c08ea4c.js";

let f, l, s, n, M = Promise.all([ (() => {
    try {
        return c;
    } catch {}
})() ]).then(async () => {
    n = function(a, r) {
        return a && a ? u(a).format(r ?? "YYYY-MM-DD HH:mm:ss") : "";
    }, f = function(a) {
        const r = Math.floor(a / 864e5), t = Math.floor(a / 36e5 - 24 * r), o = Math.floor(a / 6e4 - 24 * r * 60 - 60 * t), e = Math.floor(a / 1e3 - 24 * r * 60 * 60 - 60 * t * 60 - 60 * o);
        return r > 0 ? r + "天" + t + "小时" + o + "分钟" : t > 0 ? t + "小时" + o + "分钟" : o > 0 ? o + "分钟" : e > 0 ? e + "秒" : "0秒";
    }, s = function(a, r, t) {
        return t ? n(t) : "--";
    }, l = function(a, r, t) {
        return t ? n(t, "YYYY-MM-DD") : "";
    };
});

export {
    M as __tla,
    f as a,
    l as b,
    s as d,
    n as f
};