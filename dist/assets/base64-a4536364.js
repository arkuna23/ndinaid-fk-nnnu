const f = typeof Buffer == "function", A = typeof TextDecoder == "function" ? new TextDecoder() : void 0;

typeof TextEncoder == "function" && new TextEncoder();

const p = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="), n = (r => {
    let t = {};
    return p.forEach((a, c) => t[a] = c), t;
})(), x = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, e = String.fromCharCode.bind(String), i = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : r => new Uint8Array(Array.prototype.slice.call(r, 0)), h = r => r.replace(/[^A-Za-z0-9\+\/]/g, ""), s = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, u = r => {
    switch (r.length) {
      case 4:
        var t = ((7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3)) - 65536;
        return e(55296 + (t >>> 10)) + e(56320 + (1023 & t));

      case 3:
        return e((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));

      default:
        return e((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
    }
}, l = typeof atob == "function" ? r => atob(h(r)) : f ? r => Buffer.from(r, "base64").toString("binary") : r => {
    if (r = r.replace(/\s+/g, ""), !x.test(r)) throw new TypeError("malformed base64.");
    r += "==".slice(2 - (3 & r.length));
    let t, a, c, d = "";
    for (let o = 0; o < r.length; ) t = n[r.charAt(o++)] << 18 | n[r.charAt(o++)] << 12 | (a = n[r.charAt(o++)]) << 6 | (c = n[r.charAt(o++)]), 
    d += a === 64 ? e(t >> 16 & 255) : c === 64 ? e(t >> 16 & 255, t >> 8 & 255) : e(t >> 16 & 255, t >> 8 & 255, 255 & t);
    return d;
}, y = f ? r => i(Buffer.from(r, "base64")) : r => i(l(r).split("").map(t => t.charCodeAt(0))), C = f ? r => Buffer.from(r, "base64").toString("utf8") : A ? r => A.decode(y(r)) : r => l(r).replace(s, u), g = r => C(h(r.replace(/[-_]/g, t => t == "-" ? "+" : "/")));

export {
    g as d
};