var it = Object.defineProperty;

var lt = (w, m, y) => m in w ? it(w, m, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: y
}) : w[m] = y;

var x = (w, m, y) => (lt(w, typeof m != "symbol" ? m + "" : m, y), y), at = (w, m, y) => {
    if (!m.has(w)) throw TypeError("Cannot " + y);
};

var G = (w, m, y) => {
    if (m.has(w)) throw TypeError("Cannot add the same private member more than once");
    m instanceof WeakSet ? m.add(w) : m.set(w, y);
};

var j = (w, m, y) => (at(w, m, "access private method"), y);

import {
    aT as v,
    o as z,
    c as ie,
    k as S,
    l as A,
    F as ze,
    y as ot,
    C,
    A as Ie,
    G as Ae,
    D as P,
    z as ct,
    t as J,
    v as le,
    M as ht,
    s as pt,
    J as ut,
    aU as gt,
    __tla as dt
} from "./index-6c08ea4c.js";

import kt, {
    __tla as ft
} from "./patientsList-36f8c78c.js";

import xt, {
    __tla as mt
} from "./addPatients-6dedae81.js";

import bt, {
    __tla as wt
} from "./ctExperiment-e381d146.js";

import yt, {
    __tla as _t
} from "./imageProcess-137eb93b.js";

import $t, {
    __tla as Tt
} from "./labReport-42ee0731.js";

import Lt, {
    __tla as Rt
} from "./patientsInfo-519b2fd7.js";

import zt from "./html2canvas.esm-ad032b91.js";

import {
    f as It,
    u as At,
    __tla as vt
} from "./file-e038b35d.js";

import {
    _ as St
} from "./_plugin-vue_export-helper-1b428a4d.js";

let ae, ve, u, Ct = Promise.all([ (() => {
    try {
        return dt;
    } catch {}
})(), (() => {
    try {
        return ft;
    } catch {}
})(), (() => {
    try {
        return mt;
    } catch {}
})(), (() => {
    try {
        return wt;
    } catch {}
})(), (() => {
    try {
        return _t;
    } catch {}
})(), (() => {
    try {
        return Tt;
    } catch {}
})(), (() => {
    try {
        return Rt;
    } catch {}
})(), (() => {
    try {
        return vt;
    } catch {}
})() ]).then(async () => {
    var H, Se, O, oe, X, Ce, $e;
    function w() {
        return {
            async: !1,
            breaks: !1,
            extensions: null,
            gfm: !0,
            hooks: null,
            pedantic: !1,
            renderer: null,
            silent: !1,
            tokenizer: null,
            walkTokens: null
        };
    }
    let m = {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    };
    function y(a) {
        m = a;
    }
    const ce = /[&<>"']/, Pe = new RegExp(ce.source, "g"), he = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Ee = new RegExp(he.source, "g"), qe = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, pe = a => qe[a];
    function $(a, e) {
        if (e) {
            if (ce.test(a)) return a.replace(Pe, pe);
        } else if (he.test(a)) return a.replace(Ee, pe);
        return a;
    }
    const Be = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, Ze = /(^|[^\[])\^/g;
    function k(a, e) {
        let t = typeof a == "string" ? a : a.source;
        e = e || "";
        const s = {
            replace: (n, r) => {
                let i = typeof r == "string" ? r : r.source;
                return i = i.replace(Ze, "$1"), t = t.replace(n, i), s;
            },
            getRegex: () => new RegExp(t, e)
        };
        return s;
    }
    function ue(a) {
        try {
            a = encodeURI(a).replace(/%25/g, "%");
        } catch {
            return null;
        }
        return a;
    }
    const E = {
        exec: () => null
    };
    function ge(a, e) {
        const t = a.replace(/\|/g, (n, r, i) => {
            let l = !1, c = r;
            for (;--c >= 0 && i[c] === "\\"; ) l = !l;
            return l ? "|" : " |";
        }).split(/ \|/);
        let s = 0;
        if (t[0].trim() || t.shift(), t.length > 0 && !t[t.length - 1].trim() && t.pop(), 
        e) if (t.length > e) t.splice(e); else for (;t.length < e; ) t.push("");
        for (;s < t.length; s++) t[s] = t[s].trim().replace(/\\\|/g, "|");
        return t;
    }
    function q(a, e, t) {
        const s = a.length;
        if (s === 0) return "";
        let n = 0;
        for (;n < s; ) {
            const r = a.charAt(s - n - 1);
            if (r !== e || t) {
                if (r === e || !t) break;
                n++;
            } else n++;
        }
        return a.slice(0, s - n);
    }
    function de(a, e, t, s) {
        const n = e.href, r = e.title ? $(e.title) : null, i = a[1].replace(/\\([\[\]])/g, "$1");
        if (a[0].charAt(0) !== "!") {
            s.state.inLink = !0;
            const l = {
                type: "link",
                raw: t,
                href: n,
                title: r,
                text: i,
                tokens: s.inlineTokens(i)
            };
            return s.state.inLink = !1, l;
        }
        return {
            type: "image",
            raw: t,
            href: n,
            title: r,
            text: $(i)
        };
    }
    class F {
        constructor(e) {
            x(this, "options");
            x(this, "rules");
            x(this, "lexer");
            this.options = e || m;
        }
        space(e) {
            const t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return {
                type: "space",
                raw: t[0]
            };
        }
        code(e) {
            const t = this.rules.block.code.exec(e);
            if (t) {
                const s = t[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? s : q(s, `
`)
                };
            }
        }
        fences(e) {
            const t = this.rules.block.fences.exec(e);
            if (t) {
                const s = t[0], n = function(r, i) {
                    const l = r.match(/^(\s+)(?:```)/);
                    if (l === null) return i;
                    const c = l[1];
                    return i.split(`
`).map(o => {
                        const h = o.match(/^\s+/);
                        if (h === null) return o;
                        const [ f ] = h;
                        return f.length >= c.length ? o.slice(c.length) : o;
                    }).join(`
`);
                }(s, t[3] || "");
                return {
                    type: "code",
                    raw: s,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: n
                };
            }
        }
        heading(e) {
            const t = this.rules.block.heading.exec(e);
            if (t) {
                let s = t[2].trim();
                if (/#$/.test(s)) {
                    const n = q(s, "#");
                    this.options.pedantic ? s = n.trim() : n && !/ $/.test(n) || (s = n.trim());
                }
                return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: s,
                    tokens: this.lexer.inline(s)
                };
            }
        }
        hr(e) {
            const t = this.rules.block.hr.exec(e);
            if (t) return {
                type: "hr",
                raw: q(t[0], `
`)
            };
        }
        blockquote(e) {
            const t = this.rules.block.blockquote.exec(e);
            if (t) {
                let s = q(t[0], `
`).split(`
`), n = "", r = "";
                const i = [];
                for (;s.length > 0; ) {
                    let l = !1;
                    const c = [];
                    let o;
                    for (o = 0; o < s.length; o++) if (/^ {0,3}>/.test(s[o])) c.push(s[o]), 
                    l = !0; else {
                        if (l) break;
                        c.push(s[o]);
                    }
                    s = s.slice(o);
                    const h = c.join(`
`), f = h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
                    n = n ? `${n}
${h}` : h, r = r ? `${r}
${f}` : f;
                    const p = this.lexer.state.top;
                    if (this.lexer.state.top = !0, this.lexer.blockTokens(f, i, !0), 
                    this.lexer.state.top = p, s.length === 0) break;
                    const g = i[i.length - 1];
                    if ((g == null ? void 0 : g.type) === "code") break;
                    if ((g == null ? void 0 : g.type) === "blockquote") {
                        const d = g, R = d.raw + `
` + s.join(`
`), b = this.blockquote(R);
                        i[i.length - 1] = b, n = n.substring(0, n.length - d.raw.length) + b.raw, 
                        r = r.substring(0, r.length - d.text.length) + b.text;
                        break;
                    }
                    if ((g == null ? void 0 : g.type) === "list") {
                        const d = g, R = d.raw + `
` + s.join(`
`), b = this.list(R);
                        i[i.length - 1] = b, n = n.substring(0, n.length - g.raw.length) + b.raw, 
                        r = r.substring(0, r.length - d.raw.length) + b.raw, s = R.substring(i[i.length - 1].raw.length).split(`
`);
                    }
                }
                return {
                    type: "blockquote",
                    raw: n,
                    tokens: i,
                    text: r
                };
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let s = t[1].trim();
                const n = s.length > 1, r = {
                    type: "list",
                    raw: "",
                    ordered: n,
                    start: n ? +s.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
                s = n ? `\\d{1,9}\\${s.slice(-1)}` : `\\${s}`, this.options.pedantic && (s = n ? s : "[*+-]");
                const i = new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);
                let l = !1;
                for (;e; ) {
                    let c = !1, o = "", h = "";
                    if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
                    o = t[0], e = e.substring(o.length);
                    let f = t[2].split(`
`, 1)[0].replace(/^\t+/, _ => " ".repeat(3 * _.length)), p = e.split(`
`, 1)[0], g = !f.trim(), d = 0;
                    if (this.options.pedantic ? (d = 2, h = f.trimStart()) : g ? d = t[1].length + 1 : (d = t[2].search(/[^ ]/), 
                    d = d > 4 ? 1 : d, h = f.slice(d), d += t[1].length), g && /^ *$/.test(p) && (o += p + `
`, e = e.substring(p.length + 1), c = !0), !c) {
                        const _ = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), Te = new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Le = new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`), Re = new RegExp(`^ {0,${Math.min(3, d - 1)}}#`);
                        for (;e; ) {
                            const re = e.split(`
`, 1)[0];
                            if (p = re, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), 
                            Le.test(p) || Re.test(p) || _.test(p) || Te.test(e)) break;
                            if (p.search(/[^ ]/) >= d || !p.trim()) h += `
` + p.slice(d); else {
                                if (g || f.search(/[^ ]/) >= 4 || Le.test(f) || Re.test(f) || Te.test(f)) break;
                                h += `
` + p;
                            }
                            g || p.trim() || (g = !0), o += re + `
`, e = e.substring(re.length + 1), f = p.slice(d);
                        }
                    }
                    r.loose || (l ? r.loose = !0 : /\n *\n *$/.test(o) && (l = !0));
                    let R, b = null;
                    this.options.gfm && (b = /^\[[ xX]\] /.exec(h), b && (R = b[0] !== "[ ] ", 
                    h = h.replace(/^\[[ xX]\] +/, ""))), r.items.push({
                        type: "list_item",
                        raw: o,
                        task: !!b,
                        checked: R,
                        loose: !1,
                        text: h,
                        tokens: []
                    }), r.raw += o;
                }
                r.items[r.items.length - 1].raw = r.items[r.items.length - 1].raw.trimEnd(), 
                r.items[r.items.length - 1].text = r.items[r.items.length - 1].text.trimEnd(), 
                r.raw = r.raw.trimEnd();
                for (let c = 0; c < r.items.length; c++) if (this.lexer.state.top = !1, 
                r.items[c].tokens = this.lexer.blockTokens(r.items[c].text, []), 
                !r.loose) {
                    const o = r.items[c].tokens.filter(f => f.type === "space"), h = o.length > 0 && o.some(f => /\n.*\n/.test(f.raw));
                    r.loose = h;
                }
                if (r.loose) for (let c = 0; c < r.items.length; c++) r.items[c].loose = !0;
                return r;
            }
        }
        html(e) {
            const t = this.rules.block.html.exec(e);
            if (t) return {
                type: "html",
                block: !0,
                raw: t[0],
                pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                text: t[0]
            };
        }
        def(e) {
            const t = this.rules.block.def.exec(e);
            if (t) {
                const s = t[1].toLowerCase().replace(/\s+/g, " "), n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                return {
                    type: "def",
                    tag: s,
                    raw: t[0],
                    href: n,
                    title: r
                };
            }
        }
        table(e) {
            const t = this.rules.block.table.exec(e);
            if (!t || !/[:|]/.test(t[2])) return;
            const s = ge(t[1]), n = t[2].replace(/^\||\| *$/g, "").split("|"), r = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [], i = {
                type: "table",
                raw: t[0],
                header: [],
                align: [],
                rows: []
            };
            if (s.length === n.length) {
                for (const l of n) /^ *-+: *$/.test(l) ? i.align.push("right") : /^ *:-+: *$/.test(l) ? i.align.push("center") : /^ *:-+ *$/.test(l) ? i.align.push("left") : i.align.push(null);
                for (let l = 0; l < s.length; l++) i.header.push({
                    text: s[l],
                    tokens: this.lexer.inline(s[l]),
                    header: !0,
                    align: i.align[l]
                });
                for (const l of r) i.rows.push(ge(l, i.header.length).map((c, o) => ({
                    text: c,
                    tokens: this.lexer.inline(c),
                    header: !1,
                    align: i.align[o]
                })));
                return i;
            }
        }
        lheading(e) {
            const t = this.rules.block.lheading.exec(e);
            if (t) return {
                type: "heading",
                raw: t[0],
                depth: t[2].charAt(0) === "=" ? 1 : 2,
                text: t[1],
                tokens: this.lexer.inline(t[1])
            };
        }
        paragraph(e) {
            const t = this.rules.block.paragraph.exec(e);
            if (t) {
                const s = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
                return {
                    type: "paragraph",
                    raw: t[0],
                    text: s,
                    tokens: this.lexer.inline(s)
                };
            }
        }
        text(e) {
            const t = this.rules.block.text.exec(e);
            if (t) return {
                type: "text",
                raw: t[0],
                text: t[0],
                tokens: this.lexer.inline(t[0])
            };
        }
        escape(e) {
            const t = this.rules.inline.escape.exec(e);
            if (t) return {
                type: "escape",
                raw: t[0],
                text: $(t[1])
            };
        }
        tag(e) {
            const t = this.rules.inline.tag.exec(e);
            if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), 
            !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), 
            {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0]
            };
        }
        link(e) {
            const t = this.rules.inline.link.exec(e);
            if (t) {
                const s = t[2].trim();
                if (!this.options.pedantic && /^</.test(s)) {
                    if (!/>$/.test(s)) return;
                    const i = q(s.slice(0, -1), "\\");
                    if ((s.length - i.length) % 2 == 0) return;
                } else {
                    const i = function(l, c) {
                        if (l.indexOf(c[1]) === -1) return -1;
                        let o = 0;
                        for (let h = 0; h < l.length; h++) if (l[h] === "\\") h++; else if (l[h] === c[0]) o++; else if (l[h] === c[1] && (o--, 
                        o < 0)) return h;
                        return -1;
                    }(t[2], "()");
                    if (i > -1) {
                        const l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
                        t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, l).trim(), 
                        t[3] = "";
                    }
                }
                let n = t[2], r = "";
                if (this.options.pedantic) {
                    const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                    i && (n = i[1], r = i[3]);
                } else r = t[3] ? t[3].slice(1, -1) : "";
                return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(s) ? n.slice(1) : n.slice(1, -1)), 
                de(t, {
                    href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
                    title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
                }, t[0], this.lexer);
            }
        }
        reflink(e, t) {
            let s;
            if ((s = this.rules.inline.reflink.exec(e)) || (s = this.rules.inline.nolink.exec(e))) {
                const n = t[(s[2] || s[1]).replace(/\s+/g, " ").toLowerCase()];
                if (!n) {
                    const r = s[0].charAt(0);
                    return {
                        type: "text",
                        raw: r,
                        text: r
                    };
                }
                return de(s, n, s[0], this.lexer);
            }
        }
        emStrong(e, t, s = "") {
            let n = this.rules.inline.emStrongLDelim.exec(e);
            if (n && !(n[3] && s.match(/[\p{L}\p{N}]/u)) && (!(n[1] || n[2]) || !s || this.rules.inline.punctuation.exec(s))) {
                const r = [ ...n[0] ].length - 1;
                let i, l, c = r, o = 0;
                const h = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (h.lastIndex = 0, t = t.slice(-1 * e.length + r); (n = h.exec(t)) != null; ) {
                    if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i) continue;
                    if (l = [ ...i ].length, n[3] || n[4]) {
                        c += l;
                        continue;
                    }
                    if ((n[5] || n[6]) && r % 3 && !((r + l) % 3)) {
                        o += l;
                        continue;
                    }
                    if (c -= l, c > 0) continue;
                    l = Math.min(l, l + c + o);
                    const f = [ ...n[0] ][0].length, p = e.slice(0, r + n.index + f + l);
                    if (Math.min(r, l) % 2) {
                        const d = p.slice(1, -1);
                        return {
                            type: "em",
                            raw: p,
                            text: d,
                            tokens: this.lexer.inlineTokens(d)
                        };
                    }
                    const g = p.slice(2, -2);
                    return {
                        type: "strong",
                        raw: p,
                        text: g,
                        tokens: this.lexer.inlineTokens(g)
                    };
                }
            }
        }
        codespan(e) {
            const t = this.rules.inline.code.exec(e);
            if (t) {
                let s = t[2].replace(/\n/g, " ");
                const n = /[^ ]/.test(s), r = /^ /.test(s) && / $/.test(s);
                return n && r && (s = s.substring(1, s.length - 1)), s = $(s, !0), 
                {
                    type: "codespan",
                    raw: t[0],
                    text: s
                };
            }
        }
        br(e) {
            const t = this.rules.inline.br.exec(e);
            if (t) return {
                type: "br",
                raw: t[0]
            };
        }
        del(e) {
            const t = this.rules.inline.del.exec(e);
            if (t) return {
                type: "del",
                raw: t[0],
                text: t[2],
                tokens: this.lexer.inlineTokens(t[2])
            };
        }
        autolink(e) {
            const t = this.rules.inline.autolink.exec(e);
            if (t) {
                let s, n;
                return t[2] === "@" ? (s = $(t[1]), n = "mailto:" + s) : (s = $(t[1]), 
                n = s), {
                    type: "link",
                    raw: t[0],
                    text: s,
                    href: n,
                    tokens: [ {
                        type: "text",
                        raw: s,
                        text: s
                    } ]
                };
            }
        }
        url(e) {
            var s;
            let t;
            if (t = this.rules.inline.url.exec(e)) {
                let n, r;
                if (t[2] === "@") n = $(t[0]), r = "mailto:" + n; else {
                    let i;
                    do {
                        i = t[0], t[0] = ((s = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : s[0]) ?? "";
                    } while (i !== t[0]);
                    n = $(t[0]), r = t[1] === "www." ? "http://" + t[0] : t[0];
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: n,
                    href: r,
                    tokens: [ {
                        type: "text",
                        raw: n,
                        text: n
                    } ]
                };
            }
        }
        inlineText(e) {
            const t = this.rules.inline.text.exec(e);
            if (t) {
                let s;
                return s = this.lexer.state.inRawBlock ? t[0] : $(t[0]), {
                    type: "text",
                    raw: t[0],
                    text: s
                };
            }
        }
    }
    const B = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ke = /(?:[*+-]|\d{1,9}[.)])/, fe = k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ke).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), W = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, K = /(?!\s*\])(?:\\.|[^\[\]\\])+/, De = k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", K).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Qe = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ke).getRegex(), U = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Y = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Oe = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Y).replace("tag", U).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), xe = k(W).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", U).getRegex(), ee = {
        blockquote: k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", xe).getRegex(),
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        def: De,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        hr: B,
        html: Oe,
        lheading: fe,
        list: Qe,
        newline: /^(?: *(?:\n|$))+/,
        paragraph: xe,
        table: E,
        text: /^[^\n]+/
    }, me = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", U).getRegex(), je = {
        ...ee,
        table: me,
        paragraph: k(W).replace("hr", B).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", me).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", U).getRegex()
    }, Fe = {
        ...ee,
        html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Y).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: E,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: k(W).replace("hr", B).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", fe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    }, be = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, we = /^( {2,}|\\)\n(?!\s*$)/, Z = "\\p{P}\\p{S}", Ue = k(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Z).getRegex(), Ne = k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Z).getRegex(), Ve = k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Z).getRegex(), Me = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Z).getRegex(), He = k(/\\([punct])/, "gu").replace(/punct/g, Z).getRegex(), Xe = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ge = k(Y).replace("(?:--\x3e|$)", "--\x3e").getRegex(), Je = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ge).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), N = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, We = k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", N).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ye = k(/^!?\[(label)\]\[(ref)\]/).replace("label", N).replace("ref", K).getRegex(), _e = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", K).getRegex(), te = {
        _backpedal: E,
        anyPunctuation: He,
        autolink: Xe,
        blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
        br: we,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        del: E,
        emStrongLDelim: Ne,
        emStrongRDelimAst: Ve,
        emStrongRDelimUnd: Me,
        escape: be,
        link: We,
        nolink: _e,
        punctuation: Ue,
        reflink: ye,
        reflinkSearch: k("reflink|nolink(?!\\()", "g").replace("reflink", ye).replace("nolink", _e).getRegex(),
        tag: Je,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        url: E
    }, Ke = {
        ...te,
        link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", N).getRegex(),
        reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N).getRegex()
    }, se = {
        ...te,
        escape: k(be).replace("])", "~|])").getRegex(),
        url: k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    }, Ye = {
        ...se,
        br: k(we).replace("{2,}", "*").getRegex(),
        text: k(se.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    }, V = {
        normal: ee,
        gfm: je,
        pedantic: Fe
    }, D = {
        normal: te,
        gfm: se,
        breaks: Ye,
        pedantic: Ke
    };
    class T {
        constructor(e) {
            x(this, "tokens");
            x(this, "options");
            x(this, "state");
            x(this, "tokenizer");
            x(this, "inlineQueue");
            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || m, 
            this.options.tokenizer = this.options.tokenizer || new F(), this.tokenizer = this.options.tokenizer, 
            this.tokenizer.options = this.options, this.tokenizer.lexer = this, 
            this.inlineQueue = [], this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0
            };
            const t = {
                block: V.normal,
                inline: D.normal
            };
            this.options.pedantic ? (t.block = V.pedantic, t.inline = D.pedantic) : this.options.gfm && (t.block = V.gfm, 
            this.options.breaks ? t.inline = D.breaks : t.inline = D.gfm), this.tokenizer.rules = t;
        }
        static get rules() {
            return {
                block: V,
                inline: D
            };
        }
        static lex(e, t) {
            return new T(t).lex(e);
        }
        static lexInline(e, t) {
            return new T(t).inlineTokens(e);
        }
        lex(e) {
            e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
            for (let t = 0; t < this.inlineQueue.length; t++) {
                const s = this.inlineQueue[t];
                this.inlineTokens(s.src, s.tokens);
            }
            return this.inlineQueue = [], this.tokens;
        }
        blockTokens(e, t = [], s = !1) {
            let n, r, i;
            for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (l, c, o) => c + "    ".repeat(o.length)); e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(l => !!(n = l.call({
                lexer: this
            }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0)))) if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), 
            n.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(n); else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), 
            r = t[t.length - 1], !r || r.type !== "paragraph" && r.type !== "text" ? t.push(n) : (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text); else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), 
            r = t[t.length - 1], !r || r.type !== "paragraph" && r.type !== "text" ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                href: n.href,
                title: n.title
            }) : (r.raw += `
` + n.raw, r.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text); else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), 
            t.push(n); else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), 
            t.push(n); else {
                if (i = e, this.options.extensions && this.options.extensions.startBlock) {
                    let l = 1 / 0;
                    const c = e.slice(1);
                    let o;
                    this.options.extensions.startBlock.forEach(h => {
                        o = h.call({
                            lexer: this
                        }, c), typeof o == "number" && o >= 0 && (l = Math.min(l, o));
                    }), l < 1 / 0 && l >= 0 && (i = e.substring(0, l + 1));
                }
                if (this.state.top && (n = this.tokenizer.paragraph(i))) r = t[t.length - 1], 
                s && (r == null ? void 0 : r.type) === "paragraph" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), 
                s = i.length !== e.length, e = e.substring(n.raw.length); else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), 
                r = t[t.length - 1], r && r.type === "text" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n); else if (e) {
                    const l = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) break;
                    throw new Error(l);
                }
            }
            return this.state.top = !0, t;
        }
        inline(e, t = []) {
            return this.inlineQueue.push({
                src: e,
                tokens: t
            }), t;
        }
        inlineTokens(e, t = []) {
            let s, n, r, i, l, c, o = e;
            if (this.tokens.links) {
                const h = Object.keys(this.tokens.links);
                if (h.length > 0) for (;(i = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) h.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (;(i = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (;(i = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, i.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (;e; ) if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(h => !!(s = h.call({
                lexer: this
            }, e, t)) && (e = e.substring(s.raw.length), t.push(s), !0)))) if (s = this.tokenizer.escape(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.tag(e)) e = e.substring(s.raw.length), 
            n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, 
            n.text += s.text) : t.push(s); else if (s = this.tokenizer.link(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(s.raw.length), 
            n = t[t.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, 
            n.text += s.text) : t.push(s); else if (s = this.tokenizer.emStrong(e, o, c)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.codespan(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.br(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.del(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (s = this.tokenizer.autolink(e)) e = e.substring(s.raw.length), 
            t.push(s); else if (this.state.inLink || !(s = this.tokenizer.url(e))) {
                if (r = e, this.options.extensions && this.options.extensions.startInline) {
                    let h = 1 / 0;
                    const f = e.slice(1);
                    let p;
                    this.options.extensions.startInline.forEach(g => {
                        p = g.call({
                            lexer: this
                        }, f), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
                    }), h < 1 / 0 && h >= 0 && (r = e.substring(0, h + 1));
                }
                if (s = this.tokenizer.inlineText(r)) e = e.substring(s.raw.length), 
                s.raw.slice(-1) !== "_" && (c = s.raw.slice(-1)), l = !0, n = t[t.length - 1], 
                n && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : t.push(s); else if (e) {
                    const h = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) break;
                    throw new Error(h);
                }
            } else e = e.substring(s.raw.length), t.push(s);
            return t;
        }
    }
    class M {
        constructor(e) {
            x(this, "options");
            x(this, "parser");
            this.options = e || m;
        }
        space(e) {
            return "";
        }
        code({
            text: e,
            lang: t,
            escaped: s
        }) {
            var i;
            const n = (i = (t || "").match(/^\S*/)) == null ? void 0 : i[0], r = e.replace(/\n$/, "") + `
`;
            return n ? '<pre><code class="language-' + $(n) + '">' + (s ? r : $(r, !0)) + `</code></pre>
` : "<pre><code>" + (s ? r : $(r, !0)) + `</code></pre>
`;
        }
        blockquote({
            tokens: e
        }) {
            return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
        }
        html({
            text: e
        }) {
            return e;
        }
        heading({
            tokens: e,
            depth: t
        }) {
            return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
        }
        hr(e) {
            return `<hr>
`;
        }
        list(e) {
            const t = e.ordered, s = e.start;
            let n = "";
            for (let i = 0; i < e.items.length; i++) {
                const l = e.items[i];
                n += this.listitem(l);
            }
            const r = t ? "ol" : "ul";
            return "<" + r + (t && s !== 1 ? ' start="' + s + '"' : "") + `>
` + n + "</" + r + `>
`;
        }
        listitem(e) {
            let t = "";
            if (e.task) {
                const s = this.checkbox({
                    checked: !!e.checked
                });
                e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, 
                e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({
                    type: "text",
                    raw: s + " ",
                    text: s + " "
                }) : t += s + " ";
            }
            return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
        }
        checkbox({
            checked: e
        }) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
        }
        paragraph({
            tokens: e
        }) {
            return `<p>${this.parser.parseInline(e)}</p>
`;
        }
        table(e) {
            let t = "", s = "";
            for (let r = 0; r < e.header.length; r++) s += this.tablecell(e.header[r]);
            t += this.tablerow({
                text: s
            });
            let n = "";
            for (let r = 0; r < e.rows.length; r++) {
                const i = e.rows[r];
                s = "";
                for (let l = 0; l < i.length; l++) s += this.tablecell(i[l]);
                n += this.tablerow({
                    text: s
                });
            }
            return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
        }
        tablerow({
            text: e
        }) {
            return `<tr>
${e}</tr>
`;
        }
        tablecell(e) {
            const t = this.parser.parseInline(e.tokens), s = e.header ? "th" : "td";
            return (e.align ? `<${s} align="${e.align}">` : `<${s}>`) + t + `</${s}>
`;
        }
        strong({
            tokens: e
        }) {
            return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({
            tokens: e
        }) {
            return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({
            text: e
        }) {
            return `<code>${e}</code>`;
        }
        br(e) {
            return "<br>";
        }
        del({
            tokens: e
        }) {
            return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({
            href: e,
            title: t,
            tokens: s
        }) {
            const n = this.parser.parseInline(s), r = ue(e);
            if (r === null) return n;
            let i = '<a href="' + (e = r) + '"';
            return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i;
        }
        image({
            href: e,
            title: t,
            text: s
        }) {
            const n = ue(e);
            if (n === null) return s;
            let r = `<img src="${e = n}" alt="${s}"`;
            return t && (r += ` title="${t}"`), r += ">", r;
        }
        text(e) {
            return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
        }
    }
    class ne {
        strong({
            text: e
        }) {
            return e;
        }
        em({
            text: e
        }) {
            return e;
        }
        codespan({
            text: e
        }) {
            return e;
        }
        del({
            text: e
        }) {
            return e;
        }
        html({
            text: e
        }) {
            return e;
        }
        text({
            text: e
        }) {
            return e;
        }
        link({
            text: e
        }) {
            return "" + e;
        }
        image({
            text: e
        }) {
            return "" + e;
        }
        br() {
            return "";
        }
    }
    class L {
        constructor(e) {
            x(this, "options");
            x(this, "renderer");
            x(this, "textRenderer");
            this.options = e || m, this.options.renderer = this.options.renderer || new M(), 
            this.renderer = this.options.renderer, this.renderer.options = this.options, 
            this.renderer.parser = this, this.textRenderer = new ne();
        }
        static parse(e, t) {
            return new L(t).parse(e);
        }
        static parseInline(e, t) {
            return new L(t).parseInline(e);
        }
        parse(e, t = !0) {
            let s = "";
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const l = r, c = this.options.extensions.renderers[l.type].call({
                        parser: this
                    }, l);
                    if (c !== !1 || ![ "space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text" ].includes(l.type)) {
                        s += c || "";
                        continue;
                    }
                }
                const i = r;
                switch (i.type) {
                  case "space":
                    s += this.renderer.space(i);
                    continue;

                  case "hr":
                    s += this.renderer.hr(i);
                    continue;

                  case "heading":
                    s += this.renderer.heading(i);
                    continue;

                  case "code":
                    s += this.renderer.code(i);
                    continue;

                  case "table":
                    s += this.renderer.table(i);
                    continue;

                  case "blockquote":
                    s += this.renderer.blockquote(i);
                    continue;

                  case "list":
                    s += this.renderer.list(i);
                    continue;

                  case "html":
                    s += this.renderer.html(i);
                    continue;

                  case "paragraph":
                    s += this.renderer.paragraph(i);
                    continue;

                  case "text":
                    {
                        let l = i, c = this.renderer.text(l);
                        for (;n + 1 < e.length && e[n + 1].type === "text"; ) l = e[++n], 
                        c += `
` + this.renderer.text(l);
                        s += t ? this.renderer.paragraph({
                            type: "paragraph",
                            raw: c,
                            text: c,
                            tokens: [ {
                                type: "text",
                                raw: c,
                                text: c
                            } ]
                        }) : c;
                        continue;
                    }

                  default:
                    {
                        const l = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return "";
                        throw new Error(l);
                    }
                }
            }
            return s;
        }
        parseInline(e, t) {
            t = t || this.renderer;
            let s = "";
            for (let n = 0; n < e.length; n++) {
                const r = e[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const l = this.options.extensions.renderers[r.type].call({
                        parser: this
                    }, r);
                    if (l !== !1 || ![ "escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text" ].includes(r.type)) {
                        s += l || "";
                        continue;
                    }
                }
                const i = r;
                switch (i.type) {
                  case "escape":
                  case "text":
                    s += t.text(i);
                    break;

                  case "html":
                    s += t.html(i);
                    break;

                  case "link":
                    s += t.link(i);
                    break;

                  case "image":
                    s += t.image(i);
                    break;

                  case "strong":
                    s += t.strong(i);
                    break;

                  case "em":
                    s += t.em(i);
                    break;

                  case "codespan":
                    s += t.codespan(i);
                    break;

                  case "br":
                    s += t.br(i);
                    break;

                  case "del":
                    s += t.del(i);
                    break;

                  default:
                    {
                        const l = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return "";
                        throw new Error(l);
                    }
                }
            }
            return s;
        }
    }
    class Q {
        constructor(e) {
            x(this, "options");
            this.options = e || m;
        }
        preprocess(e) {
            return e;
        }
        postprocess(e) {
            return e;
        }
        processAllTokens(e) {
            return e;
        }
    }
    x(Q, "passThroughHooks", new Set([ "preprocess", "postprocess", "processAllTokens" ]));
    const I = new ($e = class {
        constructor(...a) {
            G(this, H);
            G(this, O);
            G(this, X);
            x(this, "defaults", {
                async: !1,
                breaks: !1,
                extensions: null,
                gfm: !0,
                hooks: null,
                pedantic: !1,
                renderer: null,
                silent: !1,
                tokenizer: null,
                walkTokens: null
            });
            x(this, "options", this.setOptions);
            x(this, "parse", j(this, O, oe).call(this, T.lex, L.parse));
            x(this, "parseInline", j(this, O, oe).call(this, T.lexInline, L.parseInline));
            x(this, "Parser", L);
            x(this, "Renderer", M);
            x(this, "TextRenderer", ne);
            x(this, "Lexer", T);
            x(this, "Tokenizer", F);
            x(this, "Hooks", Q);
            this.use(...a);
        }
        walkTokens(a, e) {
            var s, n;
            let t = [];
            for (const r of a) switch (t = t.concat(e.call(this, r)), r.type) {
              case "table":
                {
                    const i = r;
                    for (const l of i.header) t = t.concat(this.walkTokens(l.tokens, e));
                    for (const l of i.rows) for (const c of l) t = t.concat(this.walkTokens(c.tokens, e));
                    break;
                }

              case "list":
                {
                    const i = r;
                    t = t.concat(this.walkTokens(i.items, e));
                    break;
                }

              default:
                {
                    const i = r;
                    (n = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && n[i.type] ? this.defaults.extensions.childTokens[i.type].forEach(l => {
                        const c = i[l].flat(1 / 0);
                        t = t.concat(this.walkTokens(c, e));
                    }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
                }
            }
            return t;
        }
        use(...a) {
            const e = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            return a.forEach(t => {
                const s = {
                    ...t
                };
                if (s.async = this.defaults.async || s.async || !1, t.extensions && (t.extensions.forEach(n => {
                    if (!n.name) throw new Error("extension name required");
                    if ("renderer" in n) {
                        const r = e.renderers[n.name];
                        e.renderers[n.name] = r ? function(...i) {
                            let l = n.renderer.apply(this, i);
                            return l === !1 && (l = r.apply(this, i)), l;
                        } : n.renderer;
                    }
                    if ("tokenizer" in n) {
                        if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                        const r = e[n.level];
                        r ? r.unshift(n.tokenizer) : e[n.level] = [ n.tokenizer ], 
                        n.start && (n.level === "block" ? e.startBlock ? e.startBlock.push(n.start) : e.startBlock = [ n.start ] : n.level === "inline" && (e.startInline ? e.startInline.push(n.start) : e.startInline = [ n.start ]));
                    }
                    "childTokens" in n && n.childTokens && (e.childTokens[n.name] = n.childTokens);
                }), s.extensions = e), t.renderer) {
                    const n = this.defaults.renderer || new M(this.defaults);
                    for (const r in t.renderer) {
                        if (!(r in n)) throw new Error(`renderer '${r}' does not exist`);
                        if ([ "options", "parser" ].includes(r)) continue;
                        const i = r;
                        let l = t.renderer[i];
                        const c = n[i];
                        n[i] = (...o) => {
                            t.useNewRenderer || (l = j(this, H, Se).call(this, l, i, n));
                            let h = l.apply(n, o);
                            return h === !1 && (h = c.apply(n, o)), h || "";
                        };
                    }
                    s.renderer = n;
                }
                if (t.tokenizer) {
                    const n = this.defaults.tokenizer || new F(this.defaults);
                    for (const r in t.tokenizer) {
                        if (!(r in n)) throw new Error(`tokenizer '${r}' does not exist`);
                        if ([ "options", "rules", "lexer" ].includes(r)) continue;
                        const i = r, l = t.tokenizer[i], c = n[i];
                        n[i] = (...o) => {
                            let h = l.apply(n, o);
                            return h === !1 && (h = c.apply(n, o)), h;
                        };
                    }
                    s.tokenizer = n;
                }
                if (t.hooks) {
                    const n = this.defaults.hooks || new Q();
                    for (const r in t.hooks) {
                        if (!(r in n)) throw new Error(`hook '${r}' does not exist`);
                        if (r === "options") continue;
                        const i = r, l = t.hooks[i], c = n[i];
                        Q.passThroughHooks.has(r) ? n[i] = o => {
                            if (this.defaults.async) return Promise.resolve(l.call(n, o)).then(f => c.call(n, f));
                            const h = l.call(n, o);
                            return c.call(n, h);
                        } : n[i] = (...o) => {
                            let h = l.apply(n, o);
                            return h === !1 && (h = c.apply(n, o)), h;
                        };
                    }
                    s.hooks = n;
                }
                if (t.walkTokens) {
                    const n = this.defaults.walkTokens, r = t.walkTokens;
                    s.walkTokens = function(i) {
                        let l = [];
                        return l.push(r.call(this, i)), n && (l = l.concat(n.call(this, i))), 
                        l;
                    };
                }
                this.defaults = {
                    ...this.defaults,
                    ...s
                };
            }), this;
        }
        setOptions(a) {
            return this.defaults = {
                ...this.defaults,
                ...a
            }, this;
        }
        lexer(a, e) {
            return T.lex(a, e ?? this.defaults);
        }
        parser(a, e) {
            return L.parse(a, e ?? this.defaults);
        }
    }, H = new WeakSet(), Se = function(a, e, t) {
        switch (e) {
          case "heading":
            return function(s) {
                return s.type && s.type === e ? a.call(this, t.parser.parseInline(s.tokens), s.depth, function(n) {
                    return n.replace(Be, (r, i) => (i = i.toLowerCase()) === "colon" ? ":" : i.charAt(0) === "#" ? i.charAt(1) === "x" ? String.fromCharCode(parseInt(i.substring(2), 16)) : String.fromCharCode(+i.substring(1)) : "");
                }(t.parser.parseInline(s.tokens, t.parser.textRenderer))) : a.apply(this, arguments);
            };

          case "code":
            return function(s) {
                return s.type && s.type === e ? a.call(this, s.text, s.lang, !!s.escaped) : a.apply(this, arguments);
            };

          case "table":
            return function(s) {
                if (!s.type || s.type !== e) return a.apply(this, arguments);
                let n = "", r = "";
                for (let l = 0; l < s.header.length; l++) r += this.tablecell({
                    text: s.header[l].text,
                    tokens: s.header[l].tokens,
                    header: !0,
                    align: s.align[l]
                });
                n += this.tablerow({
                    text: r
                });
                let i = "";
                for (let l = 0; l < s.rows.length; l++) {
                    const c = s.rows[l];
                    r = "";
                    for (let o = 0; o < c.length; o++) r += this.tablecell({
                        text: c[o].text,
                        tokens: c[o].tokens,
                        header: !1,
                        align: s.align[o]
                    });
                    i += this.tablerow({
                        text: r
                    });
                }
                return a.call(this, n, i);
            };

          case "blockquote":
            return function(s) {
                if (!s.type || s.type !== e) return a.apply(this, arguments);
                const n = this.parser.parse(s.tokens);
                return a.call(this, n);
            };

          case "list":
            return function(s) {
                if (!s.type || s.type !== e) return a.apply(this, arguments);
                const n = s.ordered, r = s.start, i = s.loose;
                let l = "";
                for (let c = 0; c < s.items.length; c++) {
                    const o = s.items[c], h = o.checked, f = o.task;
                    let p = "";
                    if (o.task) {
                        const g = this.checkbox({
                            checked: !!h
                        });
                        i ? o.tokens.length > 0 && o.tokens[0].type === "paragraph" ? (o.tokens[0].text = g + " " + o.tokens[0].text, 
                        o.tokens[0].tokens && o.tokens[0].tokens.length > 0 && o.tokens[0].tokens[0].type === "text" && (o.tokens[0].tokens[0].text = g + " " + o.tokens[0].tokens[0].text)) : o.tokens.unshift({
                            type: "text",
                            text: g + " "
                        }) : p += g + " ";
                    }
                    p += this.parser.parse(o.tokens, i), l += this.listitem({
                        type: "list_item",
                        raw: p,
                        text: p,
                        task: f,
                        checked: !!h,
                        loose: i,
                        tokens: o.tokens
                    });
                }
                return a.call(this, l, n, r);
            };

          case "html":
            return function(s) {
                return s.type && s.type === e ? a.call(this, s.text, s.block) : a.apply(this, arguments);
            };

          case "paragraph":
          case "strong":
          case "em":
          case "del":
            return function(s) {
                return s.type && s.type === e ? a.call(this, this.parser.parseInline(s.tokens)) : a.apply(this, arguments);
            };

          case "escape":
          case "codespan":
          case "text":
            return function(s) {
                return s.type && s.type === e ? a.call(this, s.text) : a.apply(this, arguments);
            };

          case "link":
            return function(s) {
                return s.type && s.type === e ? a.call(this, s.href, s.title, this.parser.parseInline(s.tokens)) : a.apply(this, arguments);
            };

          case "image":
            return function(s) {
                return s.type && s.type === e ? a.call(this, s.href, s.title, s.text) : a.apply(this, arguments);
            };
        }
        return a;
    }, O = new WeakSet(), oe = function(a, e) {
        return (t, s) => {
            const n = {
                ...s
            }, r = {
                ...this.defaults,
                ...n
            };
            this.defaults.async === !0 && n.async === !1 && (r.silent, r.async = !0);
            const i = j(this, X, Ce).call(this, !!r.silent, !!r.async);
            if (t == null) return i(new Error("marked(): input parameter is undefined or null"));
            if (typeof t != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
            if (r.hooks && (r.hooks.options = r), r.async) return Promise.resolve(r.hooks ? r.hooks.preprocess(t) : t).then(l => a(l, r)).then(l => r.hooks ? r.hooks.processAllTokens(l) : l).then(l => r.walkTokens ? Promise.all(this.walkTokens(l, r.walkTokens)).then(() => l) : l).then(l => e(l, r)).then(l => r.hooks ? r.hooks.postprocess(l) : l).catch(i);
            try {
                r.hooks && (t = r.hooks.preprocess(t));
                let l = a(t, r);
                r.hooks && (l = r.hooks.processAllTokens(l)), r.walkTokens && this.walkTokens(l, r.walkTokens);
                let c = e(l, r);
                return r.hooks && (c = r.hooks.postprocess(c)), c;
            } catch (l) {
                return i(l);
            }
        };
    }, X = new WeakSet(), Ce = function(a, e) {
        return t => {
            if (t.message += `
Please report this to https://github.com/markedjs/marked.`, a) {
                const s = "<p>An error occurred:</p><pre>" + $(t.message + "", !0) + "</pre>";
                return e ? Promise.resolve(s) : s;
            }
            if (e) return Promise.reject(t);
            throw t;
        };
    }, $e)();
    u = function(a, e) {
        return I.parse(a, e);
    }, u.options = u.setOptions = function(a) {
        return I.setOptions(a), u.defaults = I.defaults, y(u.defaults), u;
    }, u.getDefaults = w, u.defaults = m, u.use = function(...a) {
        return I.use(...a), u.defaults = I.defaults, y(u.defaults), u;
    }, u.walkTokens = function(a, e) {
        return I.walkTokens(a, e);
    }, u.parseInline = I.parseInline, u.Parser = L, u.parser = L.parse, u.Renderer = M, 
    u.TextRenderer = ne, u.Lexer = T, u.lexer = T.lex, u.Tokenizer = F, u.Hooks = Q, 
    u.parse = u, u.options, u.setOptions, u.use, u.walkTokens, u.parseInline, L.parse, 
    T.lex;
    const et = "" + new URL("screenshots-599392ec.png", import.meta.url).href, tt = {
        class: "ct-body-center"
    }, st = {
        class: "cutscreen-btn"
    }, nt = [ "src" ], rt = {
        class: "dialog-footer align-center"
    };
    ae = St({
        defineEmits: [ "submitResult" ],
        components: {
            PatientsList: kt,
            AddPatients: xt,
            CtExperiment: bt,
            ImageProcess: yt,
            LabReport: $t,
            PatientsInfo: Lt
        },
        data: () => ({
            activeIndex: "0",
            patientInfo: {},
            drawer: !1,
            showLeft: !0,
            showAddList: !1,
            rightActiveIndex: "0",
            rightTabsList: [ "患者列表", "患者信息", "CT实验", "图像处理", "实验报告", "患者列表" ],
            rightTabsLength: 1,
            projectId: "",
            imgListCt: {},
            imgListCtResult: {},
            dialogVisibleResult: !1,
            saveBtnLoading: !1,
            saveType: "",
            dataURL: "",
            saveResultImg: !1
        }),
        computed: {
            rightTabs() {
                return this.rightTabsList.slice(0, this.rightTabsLength);
            },
            isStudent() {
                return this.$route.query.isTeaching !== "1" && this.$route.query.module !== "1";
            }
        },
        mounted() {
            this.rightTabsLength = 1, this.initPage();
        },
        methods: {
            downloadBase64File: It,
            async initPage() {},
            saveLocalHandler() {
                this.downloadBase64File(this.dataURL, `${this.rightTabsList[this.rightActiveIndex]}\u622A\u56FE.png\u622A\u56FE.png`);
            },
            getFilesContList(a, e) {
                a && this.fileObject.getFileContent(a).then(t => {
                    let s;
                    if (t.data) {
                        let n = u.lexer(t.data, {
                            type: "heading"
                        });
                        s = this.fileObject.getMDHeadings(n).map(r => {
                            let i = "";
                            return r.detail.forEach(l => {
                                i += l.raw;
                            }), {
                                ...r,
                                htmls: u.parser(r.detail),
                                texts: i
                            };
                        });
                    }
                    e && e(s);
                });
            },
            handleSelectLeave(a, e) {
                return !(e > a && this.rightActiveIndex !== a + "") || this.mmsgBox({
                    title: "提示信息",
                    text: "切换到该卡片将删除该卡片后面的卡片，请确认是否继续：",
                    showClose: !1,
                    theme: "dark"
                }).then(t => {
                    if (!t) return this.rightActiveIndex = this.rightTabs.length - 1 + "", 
                    Promise.reject();
                    this.rightTabsLength = parseInt(a) + 1, this.rightActiveIndex = a;
                });
            },
            handleTabsDelete(a) {
                this.rightTabsLength = parseInt(a), this.rightActiveIndex = this.rightTabsLength - 1 + "";
            },
            choosePatient(a) {
                this.patientInfo = {
                    ...a
                }, this.addRightTabsLength();
            },
            startExpNow(a) {
                this.patientParams = {
                    ...a
                }, this.addRightTabsLength();
            },
            nextStep(a) {
                this.imgListCt = a, this.addRightTabsLength();
            },
            saveNewImgList(a) {
                this.imgListCtResult = a, this.addRightTabsLength();
            },
            addRightTabsLength() {
                this.rightTabsList.length > this.rightTabsLength && (this.rightTabsLength += 1, 
                this.rightActiveIndex = this.rightTabsLength - 1 + "");
            },
            handleScreenClick() {
                this.dialogVisibleResult = !0;
                const a = document.createElement("canvas");
                let e = document.getElementById(`screenCanvas${this.rightActiveIndex}`);
                const t = e.offsetWidth, s = e.offsetHeight;
                a.width = t, a.height = s, zt(e, {
                    backgroundColor: "#000000",
                    canvas: a,
                    useCORS: !0
                }).then(n => {
                    this.dataURL = n.toDataURL("image/png");
                });
            },
            backToList() {
                this.showAddList = !1;
            },
            addPatient() {
                this.showAddList = !0;
                let a = this.$refs.addPatientsRef[0] ? this.$refs.addPatientsRef[0] : this.$refs.addPatientsRef;
                a && a.resetForm && a.resetForm();
            },
            addPatientNow(a, e) {
                let t = this.$refs.patientsListRef[0] ? this.$refs.patientsListRef[0] : this.$refs.patientsListRef;
                t && t.addItem && t.addItem(a), this.showAddList = !1;
            },
            closeDialog() {
                this.dialogVisibleResult = !1, this.saveResultImg = !1;
            },
            saveImg(a) {
                this.saveResultImg = !0, this.dialogVisibleResult = !0, this.dataURL = a;
            },
            base64ToFile(a, e) {
                let t = a.split(","), s = t[0].match(/:(.*?);/)[1], n = atob(t[1]), r = n.length, i = new Uint8Array(r);
                for (;r--; ) i[r] = n.charCodeAt(r);
                return new File([ i ], e, {
                    type: s
                });
            },
            async submitResultForm(a) {
                this.saveType = a, this.saveBtnLoading = !0;
                let e = this.base64ToFile(this.dataURL, this.saveResultImg ? "任务结果截图.png" : `${this.rightTabsList[this.rightActiveIndex]}\u622A\u56FE.png`);
                const t = await At(e);
                this.$emit("submitResult", t, (s = !0) => {
                    this.saveBtnLoading = !1, s && (this.dialogVisibleResult = !1);
                });
            }
        }
    }, [ [ "render", function(a, e, t, s, n, r) {
        const i = v("AddPatients"), l = v("PatientsList"), c = v("PatientsInfo"), o = v("CtExperiment"), h = v("ImageProcess"), f = v("LabReport"), p = ht, g = pt, d = ut, R = gt;
        return z(), ie("div", tt, [ S(g, {
            modelValue: n.rightActiveIndex,
            "onUpdate:modelValue": e[0] || (e[0] = b => n.rightActiveIndex = b),
            "before-leave": r.handleSelectLeave,
            onTabRemove: r.handleTabsDelete,
            type: "card",
            class: ct([ "body-center-tabs" ])
        }, {
            default: A(() => [ (z(!0), ie(ze, null, ot(r.rightTabs, (b, _) => (z(), 
            C(p, {
                key: "right-tab" + _,
                name: _ + "",
                label: b,
                id: `screenCanvas${_}`,
                closable: _ !== 0 && _ === n.rightTabsLength - 1
            }, {
                default: A(() => [ _ === 0 ? (z(), ie(ze, {
                    key: 0
                }, [ Ie(S(i, {
                    ref_for: !0,
                    ref: "addPatientsRef",
                    onBackToList: r.backToList,
                    onAddPatient: r.addPatientNow
                }, null, 8, [ "onBackToList", "onAddPatient" ]), [ [ Ae, n.showAddList ] ]), Ie(S(l, {
                    ref_for: !0,
                    ref: "patientsListRef",
                    onChoosePatient: r.choosePatient
                }, null, 8, [ "onChoosePatient" ]), [ [ Ae, !n.showAddList ] ]) ], 64)) : P("", !0), _ === 1 && n.rightTabsLength === 2 ? (z(), 
                C(c, {
                    key: 1,
                    patientInfo: n.patientInfo,
                    onStartExpNow: r.startExpNow
                }, null, 8, [ "patientInfo", "onStartExpNow" ])) : P("", !0), _ === 2 ? (z(), 
                C(o, {
                    key: 2,
                    patientParams: a.patientParams,
                    patientInfo: n.patientInfo,
                    onNextStep: r.nextStep
                }, null, 8, [ "patientParams", "patientInfo", "onNextStep" ])) : P("", !0), _ === 3 ? (z(), 
                C(h, {
                    key: 3,
                    "img-list-ct": n.imgListCt,
                    onSaveNewImgList: r.saveNewImgList
                }, null, 8, [ "img-list-ct", "onSaveNewImgList" ])) : P("", !0), _ === 4 ? (z(), 
                C(f, {
                    key: 4,
                    showLeft: n.showLeft,
                    imgListCt: n.imgListCtResult,
                    onSaveImg: r.saveImg
                }, null, 8, [ "showLeft", "imgListCt", "onSaveImg" ])) : P("", !0) ]),
                _: 2
            }, 1032, [ "name", "label", "id", "closable" ]))), 128)) ]),
            _: 1
        }, 8, [ "modelValue", "before-leave", "onTabRemove" ]), J("div", st, [ J("img", {
            src: et,
            alt: "",
            onClick: e[1] || (e[1] = (...b) => r.handleScreenClick && r.handleScreenClick(...b))
        }) ]), S(R, {
            modelValue: n.dialogVisibleResult,
            "onUpdate:modelValue": e[3] || (e[3] = b => n.dialogVisibleResult = b),
            title: "上传任务结果",
            width: "1000",
            scroll: "",
            maxHeight: 500
        }, {
            footer: A(() => [ J("div", rt, [ S(d, {
                type: "primary",
                size: "default",
                loading: n.saveBtnLoading,
                onClick: r.saveLocalHandler
            }, {
                default: A(() => [ le("下载本地 ") ]),
                _: 1
            }, 8, [ "loading", "onClick" ]), r.isStudent ? (z(), C(d, {
                key: 0,
                type: "primary",
                size: "default",
                loading: n.saveBtnLoading,
                onClick: e[2] || (e[2] = b => r.submitResultForm("0"))
            }, {
                default: A(() => [ le("保 存") ]),
                _: 1
            }, 8, [ "loading" ])) : P("", !0), S(d, {
                size: "default",
                class: "dark-btn",
                onClick: r.closeDialog,
                loading: n.saveBtnLoading
            }, {
                default: A(() => [ le("取 消 ") ]),
                _: 1
            }, 8, [ "onClick", "loading" ]) ]) ]),
            default: A(() => [ J("img", {
                src: n.dataURL,
                alt: "",
                class: "resultImg"
            }, null, 8, nt) ]),
            _: 1
        }, 8, [ "modelValue" ]) ]);
    } ], [ "__scopeId", "data-v-e8b42c08" ] ]), ve = Object.defineProperty({
        __proto__: null,
        default: ae
    }, Symbol.toStringTag, {
        value: "Module"
    });
});

export {
    ae as C,
    Ct as __tla,
    ve as a,
    u as m
};