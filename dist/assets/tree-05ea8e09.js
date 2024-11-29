const g = {
    id: "id",
    children: "children",
    pid: "pid"
}, m = {
    children: "children",
    label: "name",
    value: "id",
    isLeaf: "leaf",
    emitPath: !1
}, d = n => Object.assign({}, g, n), b = (n, s = {}) => {
    s = d(s);
    const {
        children: e
    } = s, r = [ ...n ];
    for (let i = 0; i < r.length; i++) r[i][e] && r.splice(i + 1, 0, ...r[i][e]);
    return r;
}, y = (n, s, e = {}) => {
    e = d(e);
    const r = [], i = [ ...n ], f = new Set(), {
        children: t
    } = e;
    for (;i.length; ) {
        const l = i[0];
        if (f.has(l)) r.pop(), i.shift(); else if (f.add(l), l[t] && i.unshift(...l[t]), 
        r.push(l), s(l)) return r;
    }
    return null;
}, O = (n, s, e = {}) => {
    const r = (e = d(e)).children;
    return function i(f) {
        return f.map(t => ({
            ...t
        })).filter(t => (t[r] = t[r] && i(t[r]), s(t) || t[r] && t[r].length));
    }(n);
}, S = (n, s, e, r) => {
    if (!Array.isArray(n)) return [];
    const i = s || "id", f = e || "parentId", t = r || "children", l = {}, o = {}, h = [];
    for (const c of n) {
        const a = c[f];
        l[a] == null && (l[a] = []), o[c[i]] = c, l[a].push(c);
    }
    for (const c of n) o[c[f]] == null && h.push(c);
    for (const c of h) u(c);
    function u(c) {
        if (l[c[i]] !== null && (c[t] = l[c[i]]), c[t]) for (const a of c[t]) u(a);
    }
    return h;
}, A = (n, s, e, r, i) => {
    s = s || "id", e = e || "parentId", i = i || Math.min(...n.map(l => l[e])) || 0;
    const f = JSON.parse(JSON.stringify(n)), t = f.filter(l => {
        const o = f.filter(h => l[s] === h[e]);
        return o.length > 0 && (l.children = o), l[e] === i;
    });
    return t !== "" ? t : n;
};

function p(n, s) {
    for (let e = 0; e < n.length; e++) {
        if (n[e].id === s) return n[e];
        if (n[e].children && n[e].children.length > 0) {
            const r = p(n[e].children, s);
            if (r) return r;
        }
    }
    return null;
}

export {
    A as a,
    y as b,
    O as c,
    m as d,
    p as f,
    S as h,
    b as t
};