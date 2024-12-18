var K = {}, gt = {}, M = {};

let tt;

const Lt = [ 0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706 ];

M.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return 4 * t + 17;
}, M.getSymbolTotalCodewords = function(t) {
    return Lt[t];
}, M.getBCHDigit = function(t) {
    let e = 0;
    for (;t !== 0; ) e++, t >>>= 1;
    return e;
}, M.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    tt = t;
}, M.isKanjiModeEnabled = function() {
    return tt !== void 0;
}, M.toSJIS = function(t) {
    return tt(t);
};

var b, j = {};

function dt() {
    this.buffer = [], this.length = 0;
}

(b = j).L = {
    bit: 1
}, b.M = {
    bit: 0
}, b.Q = {
    bit: 3
}, b.H = {
    bit: 2
}, b.isValid = function(t) {
    return t && t.bit !== void 0 && t.bit >= 0 && t.bit < 4;
}, b.from = function(t, e) {
    if (b.isValid(t)) return t;
    try {
        return function(r) {
            if (typeof r != "string") throw new Error("Param is not a string");
            switch (r.toLowerCase()) {
              case "l":
              case "low":
                return b.L;

              case "m":
              case "medium":
                return b.M;

              case "q":
              case "quartile":
                return b.Q;

              case "h":
              case "high":
                return b.H;

              default:
                throw new Error("Unknown EC Level: " + r);
            }
        }(t);
    } catch {
        return e;
    }
}, dt.prototype = {
    get: function(t) {
        const e = Math.floor(t / 8);
        return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
    },
    put: function(t, e) {
        for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) == 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(t) {
        const e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), 
        this.length++;
    }
};

var Ut = dt;

function Y(t) {
    if (!t || t < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}

Y.prototype.set = function(t, e, r, n) {
    const o = t * this.size + e;
    this.data[o] = r, n && (this.reservedBit[o] = !0);
}, Y.prototype.get = function(t, e) {
    return this.data[t * this.size + e];
}, Y.prototype.xor = function(t, e, r) {
    this.data[t * this.size + e] ^= r;
}, Y.prototype.isReserved = function(t, e) {
    return this.reservedBit[t * this.size + e];
};

var xt = Y, pt = {};

(function(t) {
    const e = M.getSymbolSize;
    t.getRowColCoords = function(r) {
        if (r === 1) return [];
        const n = Math.floor(r / 7) + 2, o = e(r), a = o === 145 ? 26 : 2 * Math.ceil((o - 13) / (2 * n - 2)), i = [ o - 7 ];
        for (let l = 1; l < n - 1; l++) i[l] = i[l - 1] - a;
        return i.push(6), i.reverse();
    }, t.getPositions = function(r) {
        const n = [], o = t.getRowColCoords(r), a = o.length;
        for (let i = 0; i < a; i++) for (let l = 0; l < a; l++) i === 0 && l === 0 || i === 0 && l === a - 1 || i === a - 1 && l === 0 || n.push([ o[i], o[l] ]);
        return n;
    };
})(pt);

var wt = {};

const St = M.getSymbolSize;

wt.getPositions = function(t) {
    const e = St(t);
    return [ [ 0, 0 ], [ e - 7, 0 ], [ 0, e - 7 ] ];
};

var mt = {};

(function(t) {
    t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const e = 3, r = 3, n = 40, o = 10;
    function a(i, l, h) {
        switch (i) {
          case t.Patterns.PATTERN000:
            return (l + h) % 2 == 0;

          case t.Patterns.PATTERN001:
            return l % 2 == 0;

          case t.Patterns.PATTERN010:
            return h % 3 == 0;

          case t.Patterns.PATTERN011:
            return (l + h) % 3 == 0;

          case t.Patterns.PATTERN100:
            return (Math.floor(l / 2) + Math.floor(h / 3)) % 2 == 0;

          case t.Patterns.PATTERN101:
            return l * h % 2 + l * h % 3 == 0;

          case t.Patterns.PATTERN110:
            return (l * h % 2 + l * h % 3) % 2 == 0;

          case t.Patterns.PATTERN111:
            return (l * h % 3 + (l + h) % 2) % 2 == 0;

          default:
            throw new Error("bad maskPattern:" + i);
        }
    }
    t.isValid = function(i) {
        return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7;
    }, t.from = function(i) {
        return t.isValid(i) ? parseInt(i, 10) : void 0;
    }, t.getPenaltyN1 = function(i) {
        const l = i.size;
        let h = 0, s = 0, c = 0, u = null, f = null;
        for (let w = 0; w < l; w++) {
            s = c = 0, u = f = null;
            for (let g = 0; g < l; g++) {
                let p = i.get(w, g);
                p === u ? s++ : (s >= 5 && (h += e + (s - 5)), u = p, s = 1), p = i.get(g, w), 
                p === f ? c++ : (c >= 5 && (h += e + (c - 5)), f = p, c = 1);
            }
            s >= 5 && (h += e + (s - 5)), c >= 5 && (h += e + (c - 5));
        }
        return h;
    }, t.getPenaltyN2 = function(i) {
        const l = i.size;
        let h = 0;
        for (let s = 0; s < l - 1; s++) for (let c = 0; c < l - 1; c++) {
            const u = i.get(s, c) + i.get(s, c + 1) + i.get(s + 1, c) + i.get(s + 1, c + 1);
            u !== 4 && u !== 0 || h++;
        }
        return h * r;
    }, t.getPenaltyN3 = function(i) {
        const l = i.size;
        let h = 0, s = 0, c = 0;
        for (let u = 0; u < l; u++) {
            s = c = 0;
            for (let f = 0; f < l; f++) s = s << 1 & 2047 | i.get(u, f), f >= 10 && (s === 1488 || s === 93) && h++, 
            c = c << 1 & 2047 | i.get(f, u), f >= 10 && (c === 1488 || c === 93) && h++;
        }
        return h * n;
    }, t.getPenaltyN4 = function(i) {
        let l = 0;
        const h = i.data.length;
        for (let s = 0; s < h; s++) l += i.data[s];
        return Math.abs(Math.ceil(100 * l / h / 5) - 10) * o;
    }, t.applyMask = function(i, l) {
        const h = l.size;
        for (let s = 0; s < h; s++) for (let c = 0; c < h; c++) l.isReserved(c, s) || l.xor(c, s, a(i, c, s));
    }, t.getBestMask = function(i, l) {
        const h = Object.keys(t.Patterns).length;
        let s = 0, c = 1 / 0;
        for (let u = 0; u < h; u++) {
            l(u), t.applyMask(u, i);
            const f = t.getPenaltyN1(i) + t.getPenaltyN2(i) + t.getPenaltyN3(i) + t.getPenaltyN4(i);
            t.applyMask(u, i), f < c && (c = f, s = u);
        }
        return s;
    };
})(mt);

var O = {};

const x = j, q = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81 ], Q = [ 7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430 ];

O.getBlocksCount = function(t, e) {
    switch (e) {
      case x.L:
        return q[4 * (t - 1) + 0];

      case x.M:
        return q[4 * (t - 1) + 1];

      case x.Q:
        return q[4 * (t - 1) + 2];

      case x.H:
        return q[4 * (t - 1) + 3];

      default:
        return;
    }
}, O.getTotalCodewordsCount = function(t, e) {
    switch (e) {
      case x.L:
        return Q[4 * (t - 1) + 0];

      case x.M:
        return Q[4 * (t - 1) + 1];

      case x.Q:
        return Q[4 * (t - 1) + 2];

      case x.H:
        return Q[4 * (t - 1) + 3];

      default:
        return;
    }
};

var Et = {}, $ = {};

const _ = new Uint8Array(512), Z = new Uint8Array(256);

(function() {
    let t = 1;
    for (let e = 0; e < 255; e++) _[e] = t, Z[t] = e, t <<= 1, 256 & t && (t ^= 285);
    for (let e = 255; e < 512; e++) _[e] = _[e - 255];
})(), $.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return Z[t];
}, $.exp = function(t) {
    return _[t];
}, $.mul = function(t, e) {
    return t === 0 || e === 0 ? 0 : _[Z[t] + Z[e]];
}, function(t) {
    const e = $;
    t.mul = function(r, n) {
        const o = new Uint8Array(r.length + n.length - 1);
        for (let a = 0; a < r.length; a++) for (let i = 0; i < n.length; i++) o[a + i] ^= e.mul(r[a], n[i]);
        return o;
    }, t.mod = function(r, n) {
        let o = new Uint8Array(r);
        for (;o.length - n.length >= 0; ) {
            const a = o[0];
            for (let l = 0; l < n.length; l++) o[l] ^= e.mul(n[l], a);
            let i = 0;
            for (;i < o.length && o[i] === 0; ) i++;
            o = o.slice(i);
        }
        return o;
    }, t.generateECPolynomial = function(r) {
        let n = new Uint8Array([ 1 ]);
        for (let o = 0; o < r; o++) n = t.mul(n, new Uint8Array([ 1, e.exp(o) ]));
        return n;
    };
}(Et);

const yt = Et;

function et(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}

et.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = yt.generateECPolynomial(this.degree);
}, et.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const e = new Uint8Array(t.length + this.degree);
    e.set(t);
    const r = yt.mod(e, this.genPoly), n = this.degree - r.length;
    if (n > 0) {
        const o = new Uint8Array(this.degree);
        return o.set(r, n), o;
    }
    return r;
};

var kt = et, vt = {}, S = {}, At = {
    isValid: function(t) {
        return !isNaN(t) && t >= 1 && t <= 40;
    }
}, R = {};

const Ct = "[0-9]+";

let V = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";

V = V.replace(/u/g, "\\u");

const Ft = "(?:(?![A-Z0-9 $%*+\\-./:]|" + V + `)(?:.|[\r
]))+`;

R.KANJI = new RegExp(V, "g"), R.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), 
R.BYTE = new RegExp(Ft, "g"), R.NUMERIC = new RegExp(Ct, "g"), R.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");

const zt = new RegExp("^" + V + "$"), Dt = new RegExp("^" + Ct + "$"), Ht = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");

R.testKanji = function(t) {
    return zt.test(t);
}, R.testNumeric = function(t) {
    return Dt.test(t);
}, R.testAlphanumeric = function(t) {
    return Ht.test(t);
}, function(t) {
    const e = At, r = R;
    t.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [ 10, 12, 14 ]
    }, t.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [ 9, 11, 13 ]
    }, t.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [ 8, 16, 16 ]
    }, t.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [ 8, 10, 12 ]
    }, t.MIXED = {
        bit: -1
    }, t.getCharCountIndicator = function(n, o) {
        if (!n.ccBits) throw new Error("Invalid mode: " + n);
        if (!e.isValid(o)) throw new Error("Invalid version: " + o);
        return o >= 1 && o < 10 ? n.ccBits[0] : o < 27 ? n.ccBits[1] : n.ccBits[2];
    }, t.getBestModeForData = function(n) {
        return r.testNumeric(n) ? t.NUMERIC : r.testAlphanumeric(n) ? t.ALPHANUMERIC : r.testKanji(n) ? t.KANJI : t.BYTE;
    }, t.toString = function(n) {
        if (n && n.id) return n.id;
        throw new Error("Invalid mode");
    }, t.isValid = function(n) {
        return n && n.bit && n.ccBits;
    }, t.from = function(n, o) {
        if (t.isValid(n)) return n;
        try {
            return function(a) {
                if (typeof a != "string") throw new Error("Param is not a string");
                switch (a.toLowerCase()) {
                  case "numeric":
                    return t.NUMERIC;

                  case "alphanumeric":
                    return t.ALPHANUMERIC;

                  case "kanji":
                    return t.KANJI;

                  case "byte":
                    return t.BYTE;

                  default:
                    throw new Error("Unknown mode: " + a);
                }
            }(n);
        } catch {
            return o;
        }
    };
}(S), function(t) {
    const e = M, r = O, n = j, o = S, a = At, i = e.getBCHDigit(7973);
    function l(s, c) {
        return o.getCharCountIndicator(s, c) + 4;
    }
    function h(s, c) {
        let u = 0;
        return s.forEach(function(f) {
            const w = l(f.mode, c);
            u += w + f.getBitsLength();
        }), u;
    }
    t.from = function(s, c) {
        return a.isValid(s) ? parseInt(s, 10) : c;
    }, t.getCapacity = function(s, c, u) {
        if (!a.isValid(s)) throw new Error("Invalid QR Code version");
        u === void 0 && (u = o.BYTE);
        const f = 8 * (e.getSymbolTotalCodewords(s) - r.getTotalCodewordsCount(s, c));
        if (u === o.MIXED) return f;
        const w = f - l(u, s);
        switch (u) {
          case o.NUMERIC:
            return Math.floor(w / 10 * 3);

          case o.ALPHANUMERIC:
            return Math.floor(w / 11 * 2);

          case o.KANJI:
            return Math.floor(w / 13);

          case o.BYTE:
          default:
            return Math.floor(w / 8);
        }
    }, t.getBestVersionForData = function(s, c) {
        let u;
        const f = n.from(c, n.M);
        if (Array.isArray(s)) {
            if (s.length > 1) return function(w, g) {
                for (let p = 1; p <= 40; p++) if (h(w, p) <= t.getCapacity(p, g, o.MIXED)) return p;
            }(s, f);
            if (s.length === 0) return 1;
            u = s[0];
        } else u = s;
        return function(w, g, p) {
            for (let d = 1; d <= 40; d++) if (g <= t.getCapacity(d, p, w)) return d;
        }(u.mode, u.getLength(), f);
    }, t.getEncodedBits = function(s) {
        if (!a.isValid(s) || s < 7) throw new Error("Invalid QR Code version");
        let c = s << 12;
        for (;e.getBCHDigit(c) - i >= 0; ) c ^= 7973 << e.getBCHDigit(c) - i;
        return s << 12 | c;
    };
}(vt);

var Bt = {};

const nt = M, It = nt.getBCHDigit(1335);

Bt.getEncodedBits = function(t, e) {
    const r = t.bit << 3 | e;
    let n = r << 10;
    for (;nt.getBCHDigit(n) - It >= 0; ) n ^= 1335 << nt.getBCHDigit(n) - It;
    return 21522 ^ (r << 10 | n);
};

var Mt = {};

const Jt = S;

function z(t) {
    this.mode = Jt.NUMERIC, this.data = t.toString();
}

z.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
}, z.prototype.getLength = function() {
    return this.data.length;
}, z.prototype.getBitsLength = function() {
    return z.getBitsLength(this.data.length);
}, z.prototype.write = function(t) {
    let e, r, n;
    for (e = 0; e + 3 <= this.data.length; e += 3) r = this.data.substr(e, 3), n = parseInt(r, 10), 
    t.put(n, 10);
    const o = this.data.length - e;
    o > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, 3 * o + 1));
};

var Kt = z;

const Yt = S, rt = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":" ];

function D(t) {
    this.mode = Yt.ALPHANUMERIC, this.data = t;
}

D.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + t % 2 * 6;
}, D.prototype.getLength = function() {
    return this.data.length;
}, D.prototype.getBitsLength = function() {
    return D.getBitsLength(this.data.length);
}, D.prototype.write = function(t) {
    let e;
    for (e = 0; e + 2 <= this.data.length; e += 2) {
        let r = 45 * rt.indexOf(this.data[e]);
        r += rt.indexOf(this.data[e + 1]), t.put(r, 11);
    }
    this.data.length % 2 && t.put(rt.indexOf(this.data[e]), 6);
};

var _t = D;

const Vt = function(t) {
    for (var e = [], r = t.length, n = 0; n < r; n++) {
        var o = t.charCodeAt(n);
        if (o >= 55296 && o <= 56319 && r > n + 1) {
            var a = t.charCodeAt(n + 1);
            a >= 56320 && a <= 57343 && (o = 1024 * (o - 55296) + a - 56320 + 65536, 
            n += 1);
        }
        o < 128 ? e.push(o) : o < 2048 ? (e.push(o >> 6 | 192), e.push(63 & o | 128)) : o < 55296 || o >= 57344 && o < 65536 ? (e.push(o >> 12 | 224), 
        e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)) : o >= 65536 && o <= 1114111 ? (e.push(o >> 18 | 240), 
        e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(63 & o | 128)) : e.push(239, 191, 189);
    }
    return new Uint8Array(e).buffer;
}, jt = S;

function H(t) {
    this.mode = jt.BYTE, typeof t == "string" && (t = Vt(t)), this.data = new Uint8Array(t);
}

H.getBitsLength = function(t) {
    return 8 * t;
}, H.prototype.getLength = function() {
    return this.data.length;
}, H.prototype.getBitsLength = function() {
    return H.getBitsLength(this.data.length);
}, H.prototype.write = function(t) {
    for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
};

var Ot = H;

const qt = S, Qt = M;

function J(t) {
    this.mode = qt.KANJI, this.data = t;
}

J.getBitsLength = function(t) {
    return 13 * t;
}, J.prototype.getLength = function() {
    return this.data.length;
}, J.prototype.getBitsLength = function() {
    return J.getBitsLength(this.data.length);
}, J.prototype.write = function(t) {
    let e;
    for (e = 0; e < this.data.length; e++) {
        let r = Qt.toSJIS(this.data[e]);
        if (r >= 33088 && r <= 40956) r -= 33088; else {
            if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`);
            r -= 49472;
        }
        r = 192 * (r >>> 8 & 255) + (255 & r), t.put(r, 13);
    }
};

var $t = J, Tt = {
    exports: {}
};

(function(t) {
    var e = {
        single_source_shortest_paths: function(r, n, o) {
            var a = {}, i = {};
            i[n] = 0;
            var l, h, s, c, u, f, w, g = e.PriorityQueue.make();
            for (g.push(n, 0); !g.empty(); ) for (s in h = (l = g.pop()).value, 
            c = l.cost, u = r[h] || {}) u.hasOwnProperty(s) && (f = c + u[s], w = i[s], 
            (i[s] === void 0 || w > f) && (i[s] = f, g.push(s, f), a[s] = h));
            if (o !== void 0 && i[o] === void 0) {
                var p = [ "Could not find a path from ", n, " to ", o, "." ].join("");
                throw new Error(p);
            }
            return a;
        },
        extract_shortest_path_from_predecessor_list: function(r, n) {
            for (var o = [], a = n; a; ) o.push(a), r[a], a = r[a];
            return o.reverse(), o;
        },
        find_path: function(r, n, o) {
            var a = e.single_source_shortest_paths(r, n, o);
            return e.extract_shortest_path_from_predecessor_list(a, o);
        },
        PriorityQueue: {
            make: function(r) {
                var n, o = e.PriorityQueue, a = {};
                for (n in r = r || {}, o) o.hasOwnProperty(n) && (a[n] = o[n]);
                return a.queue = [], a.sorter = r.sorter || o.default_sorter, a;
            },
            default_sorter: function(r, n) {
                return r.cost - n.cost;
            },
            push: function(r, n) {
                var o = {
                    value: r,
                    cost: n
                };
                this.queue.push(o), this.queue.sort(this.sorter);
            },
            pop: function() {
                return this.queue.shift();
            },
            empty: function() {
                return this.queue.length === 0;
            }
        }
    };
    t.exports = e;
})(Tt);

var Zt = Tt.exports;

(function(t) {
    const e = S, r = Kt, n = _t, o = Ot, a = $t, i = R, l = M, h = Zt;
    function s(g) {
        return unescape(encodeURIComponent(g)).length;
    }
    function c(g, p, d) {
        const m = [];
        let y;
        for (;(y = g.exec(d)) !== null; ) m.push({
            data: y[0],
            index: y.index,
            mode: p,
            length: y[0].length
        });
        return m;
    }
    function u(g) {
        const p = c(i.NUMERIC, e.NUMERIC, g), d = c(i.ALPHANUMERIC, e.ALPHANUMERIC, g);
        let m, y;
        return l.isKanjiModeEnabled() ? (m = c(i.BYTE, e.BYTE, g), y = c(i.KANJI, e.KANJI, g)) : (m = c(i.BYTE_KANJI, e.BYTE, g), 
        y = []), p.concat(d, m, y).sort(function(I, C) {
            return I.index - C.index;
        }).map(function(I) {
            return {
                data: I.data,
                mode: I.mode,
                length: I.length
            };
        });
    }
    function f(g, p) {
        switch (p) {
          case e.NUMERIC:
            return r.getBitsLength(g);

          case e.ALPHANUMERIC:
            return n.getBitsLength(g);

          case e.KANJI:
            return a.getBitsLength(g);

          case e.BYTE:
            return o.getBitsLength(g);
        }
    }
    function w(g, p) {
        let d;
        const m = e.getBestModeForData(g);
        if (d = e.from(p, m), d !== e.BYTE && d.bit < m.bit) throw new Error('"' + g + '" cannot be encoded with mode ' + e.toString(d) + `.
 Suggested mode is: ` + e.toString(m));
        switch (d !== e.KANJI || l.isKanjiModeEnabled() || (d = e.BYTE), d) {
          case e.NUMERIC:
            return new r(g);

          case e.ALPHANUMERIC:
            return new n(g);

          case e.KANJI:
            return new a(g);

          case e.BYTE:
            return new o(g);
        }
    }
    t.fromArray = function(g) {
        return g.reduce(function(p, d) {
            return typeof d == "string" ? p.push(w(d, null)) : d.data && p.push(w(d.data, d.mode)), 
            p;
        }, []);
    }, t.fromString = function(g, p) {
        const d = function(C) {
            const v = [];
            for (let A = 0; A < C.length; A++) {
                const E = C[A];
                switch (E.mode) {
                  case e.NUMERIC:
                    v.push([ E, {
                        data: E.data,
                        mode: e.ALPHANUMERIC,
                        length: E.length
                    }, {
                        data: E.data,
                        mode: e.BYTE,
                        length: E.length
                    } ]);
                    break;

                  case e.ALPHANUMERIC:
                    v.push([ E, {
                        data: E.data,
                        mode: e.BYTE,
                        length: E.length
                    } ]);
                    break;

                  case e.KANJI:
                    v.push([ E, {
                        data: E.data,
                        mode: e.BYTE,
                        length: s(E.data)
                    } ]);
                    break;

                  case e.BYTE:
                    v.push([ {
                        data: E.data,
                        mode: e.BYTE,
                        length: s(E.data)
                    } ]);
                }
            }
            return v;
        }(u(g, l.isKanjiModeEnabled())), m = function(C, v) {
            const A = {}, E = {
                start: {}
            };
            let k = [ "start" ];
            for (let T = 0; T < C.length; T++) {
                const N = C[T], P = [];
                for (let F = 0; F < N.length; F++) {
                    const B = N[F], L = "" + T + F;
                    P.push(L), A[L] = {
                        node: B,
                        lastCount: 0
                    }, E[L] = {};
                    for (let G = 0; G < k.length; G++) {
                        const U = k[G];
                        A[U] && A[U].node.mode === B.mode ? (E[U][L] = f(A[U].lastCount + B.length, B.mode) - f(A[U].lastCount, B.mode), 
                        A[U].lastCount += B.length) : (A[U] && (A[U].lastCount = B.length), 
                        E[U][L] = f(B.length, B.mode) + 4 + e.getCharCountIndicator(B.mode, v));
                    }
                }
                k = P;
            }
            for (let T = 0; T < k.length; T++) E[k[T]].end = 0;
            return {
                map: E,
                table: A
            };
        }(d, p), y = h.find_path(m.map, "start", "end"), I = [];
        for (let C = 1; C < y.length - 1; C++) I.push(m.table[y[C]].node);
        return t.fromArray(function(C) {
            return C.reduce(function(v, A) {
                const E = v.length - 1 >= 0 ? v[v.length - 1] : null;
                return E && E.mode === A.mode ? (v[v.length - 1].data += A.data, 
                v) : (v.push(A), v);
            }, []);
        }(I));
    }, t.rawSplit = function(g) {
        return t.fromArray(u(g, l.isKanjiModeEnabled()));
    };
})(Mt);

const X = M, ot = j, Xt = Ut, Wt = xt, Gt = pt, te = wt, it = mt, st = O, ee = kt, W = vt, ne = Bt, re = S, at = Mt;

function ut(t, e, r) {
    const n = t.size, o = ne.getEncodedBits(e, r);
    let a, i;
    for (a = 0; a < 15; a++) i = (o >> a & 1) == 1, a < 6 ? t.set(a, 8, i, !0) : a < 8 ? t.set(a + 1, 8, i, !0) : t.set(n - 15 + a, 8, i, !0), 
    a < 8 ? t.set(8, n - a - 1, i, !0) : a < 9 ? t.set(8, 15 - a - 1 + 1, i, !0) : t.set(8, 15 - a - 1, i, !0);
    t.set(n - 8, 8, 1, !0);
}

function oe(t, e, r) {
    const n = new Xt();
    r.forEach(function(i) {
        n.put(i.mode.bit, 4), n.put(i.getLength(), re.getCharCountIndicator(i.mode, t)), 
        i.write(n);
    });
    const o = 8 * (X.getSymbolTotalCodewords(t) - st.getTotalCodewordsCount(t, e));
    for (n.getLengthInBits() + 4 <= o && n.put(0, 4); n.getLengthInBits() % 8 != 0; ) n.putBit(0);
    const a = (o - n.getLengthInBits()) / 8;
    for (let i = 0; i < a; i++) n.put(i % 2 ? 17 : 236, 8);
    return function(i, l, h) {
        const s = X.getSymbolTotalCodewords(l), c = st.getTotalCodewordsCount(l, h), u = s - c, f = st.getBlocksCount(l, h), w = s % f, g = f - w, p = Math.floor(s / f), d = Math.floor(u / f), m = d + 1, y = p - d, I = new ee(y);
        let C = 0;
        const v = new Array(f), A = new Array(f);
        let E = 0;
        const k = new Uint8Array(i.buffer);
        for (let B = 0; B < f; B++) {
            const L = B < g ? d : m;
            v[B] = k.slice(C, C + L), A[B] = I.encode(v[B]), C += L, E = Math.max(E, L);
        }
        const T = new Uint8Array(s);
        let N, P, F = 0;
        for (N = 0; N < E; N++) for (P = 0; P < f; P++) N < v[P].length && (T[F++] = v[P][N]);
        for (N = 0; N < y; N++) for (P = 0; P < f; P++) T[F++] = A[P][N];
        return T;
    }(n, t, e);
}

function ie(t, e, r, n) {
    let o;
    if (Array.isArray(t)) o = at.fromArray(t); else {
        if (typeof t != "string") throw new Error("Invalid data");
        {
            let s = e;
            if (!s) {
                const c = at.rawSplit(t);
                s = W.getBestVersionForData(c, r);
            }
            o = at.fromString(t, s || 40);
        }
    }
    const a = W.getBestVersionForData(o, r);
    if (!a) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (e) {
        if (e < a) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + a + `.
`);
    } else e = a;
    const i = oe(e, r, o), l = X.getSymbolSize(e), h = new Wt(l);
    return function(s, c) {
        const u = s.size, f = te.getPositions(c);
        for (let w = 0; w < f.length; w++) {
            const g = f[w][0], p = f[w][1];
            for (let d = -1; d <= 7; d++) if (!(g + d <= -1 || u <= g + d)) for (let m = -1; m <= 7; m++) p + m <= -1 || u <= p + m || (d >= 0 && d <= 6 && (m === 0 || m === 6) || m >= 0 && m <= 6 && (d === 0 || d === 6) || d >= 2 && d <= 4 && m >= 2 && m <= 4 ? s.set(g + d, p + m, !0, !0) : s.set(g + d, p + m, !1, !0));
        }
    }(h, e), function(s) {
        const c = s.size;
        for (let u = 8; u < c - 8; u++) {
            const f = u % 2 == 0;
            s.set(u, 6, f, !0), s.set(6, u, f, !0);
        }
    }(h), function(s, c) {
        const u = Gt.getPositions(c);
        for (let f = 0; f < u.length; f++) {
            const w = u[f][0], g = u[f][1];
            for (let p = -2; p <= 2; p++) for (let d = -2; d <= 2; d++) p === -2 || p === 2 || d === -2 || d === 2 || p === 0 && d === 0 ? s.set(w + p, g + d, !0, !0) : s.set(w + p, g + d, !1, !0);
        }
    }(h, e), ut(h, r, 0), e >= 7 && function(s, c) {
        const u = s.size, f = W.getEncodedBits(c);
        let w, g, p;
        for (let d = 0; d < 18; d++) w = Math.floor(d / 3), g = d % 3 + u - 8 - 3, 
        p = (f >> d & 1) == 1, s.set(w, g, p, !0), s.set(g, w, p, !0);
    }(h, e), function(s, c) {
        const u = s.size;
        let f = -1, w = u - 1, g = 7, p = 0;
        for (let d = u - 1; d > 0; d -= 2) for (d === 6 && d--; ;) {
            for (let m = 0; m < 2; m++) if (!s.isReserved(w, d - m)) {
                let y = !1;
                p < c.length && (y = (c[p] >>> g & 1) == 1), s.set(w, d - m, y), 
                g--, g === -1 && (p++, g = 7);
            }
            if (w += f, w < 0 || u <= w) {
                w -= f, f = -f;
                break;
            }
        }
    }(h, i), isNaN(n) && (n = it.getBestMask(h, ut.bind(null, h, r))), it.applyMask(n, h), 
    ut(h, r, n), {
        modules: h,
        version: e,
        errorCorrectionLevel: r,
        maskPattern: n,
        segments: o
    };
}

gt.create = function(t, e) {
    if (t === void 0 || t === "") throw new Error("No input text");
    let r, n, o = ot.M;
    return e !== void 0 && (o = ot.from(e.errorCorrectionLevel, ot.M), r = W.from(e.version), 
    n = it.from(e.maskPattern), e.toSJISFunc && X.setToSJISFunction(e.toSJISFunc)), 
    ie(t, r, o, n);
};

var Nt = {}, ct = {};

(function(t) {
    function e(r) {
        if (typeof r == "number" && (r = r.toString()), typeof r != "string") throw new Error("Color should be defined as hex string");
        let n = r.slice().replace("#", "").split("");
        if (n.length < 3 || n.length === 5 || n.length > 8) throw new Error("Invalid hex color: " + r);
        n.length !== 3 && n.length !== 4 || (n = Array.prototype.concat.apply([], n.map(function(a) {
            return [ a, a ];
        }))), n.length === 6 && n.push("F", "F");
        const o = parseInt(n.join(""), 16);
        return {
            r: o >> 24 & 255,
            g: o >> 16 & 255,
            b: o >> 8 & 255,
            a: 255 & o,
            hex: "#" + n.slice(0, 6).join("")
        };
    }
    t.getOptions = function(r) {
        r || (r = {}), r.color || (r.color = {});
        const n = r.margin === void 0 || r.margin === null || r.margin < 0 ? 4 : r.margin, o = r.width && r.width >= 21 ? r.width : void 0, a = r.scale || 4;
        return {
            width: o,
            scale: o ? 4 : a,
            margin: n,
            color: {
                dark: e(r.color.dark || "#000000ff"),
                light: e(r.color.light || "#ffffffff")
            },
            type: r.type,
            rendererOpts: r.rendererOpts || {}
        };
    }, t.getScale = function(r, n) {
        return n.width && n.width >= r + 2 * n.margin ? n.width / (r + 2 * n.margin) : n.scale;
    }, t.getImageWidth = function(r, n) {
        const o = t.getScale(r, n);
        return Math.floor((r + 2 * n.margin) * o);
    }, t.qrToImageData = function(r, n, o) {
        const a = n.modules.size, i = n.modules.data, l = t.getScale(a, o), h = Math.floor((a + 2 * o.margin) * l), s = o.margin * l, c = [ o.color.light, o.color.dark ];
        for (let u = 0; u < h; u++) for (let f = 0; f < h; f++) {
            let w = 4 * (u * h + f), g = o.color.light;
            u >= s && f >= s && u < h - s && f < h - s && (g = c[i[Math.floor((u - s) / l) * a + Math.floor((f - s) / l)] ? 1 : 0]), 
            r[w++] = g.r, r[w++] = g.g, r[w++] = g.b, r[w] = g.a;
        }
    };
})(ct), function(t) {
    const e = ct;
    t.render = function(r, n, o) {
        let a = o, i = n;
        a !== void 0 || n && n.getContext || (a = n, n = void 0), n || (i = function() {
            try {
                return document.createElement("canvas");
            } catch {
                throw new Error("You need to specify a canvas element");
            }
        }()), a = e.getOptions(a);
        const l = e.getImageWidth(r.modules.size, a), h = i.getContext("2d"), s = h.createImageData(l, l);
        return e.qrToImageData(s.data, r, a), function(c, u, f) {
            c.clearRect(0, 0, u.width, u.height), u.style || (u.style = {}), u.height = f, 
            u.width = f, u.style.height = f + "px", u.style.width = f + "px";
        }(h, i, l), h.putImageData(s, 0, 0), i;
    }, t.renderToDataURL = function(r, n, o) {
        let a = o;
        a !== void 0 || n && n.getContext || (a = n, n = void 0), a || (a = {});
        const i = t.render(r, n, a), l = a.type || "image/png", h = a.rendererOpts || {};
        return i.toDataURL(l, h.quality);
    };
}(Nt);

var Pt = {};

const se = ct;

function bt(t, e) {
    const r = t.a / 255, n = e + '="' + t.hex + '"';
    return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}

function lt(t, e, r) {
    let n = t + e;
    return r !== void 0 && (n += " " + r), n;
}

Pt.render = function(t, e, r) {
    const n = se.getOptions(e), o = t.modules.size, a = t.modules.data, i = o + 2 * n.margin, l = n.color.light.a ? "<path " + bt(n.color.light, "fill") + ' d="M0 0h' + i + "v" + i + 'H0z"/>' : "", h = "<path " + bt(n.color.dark, "stroke") + ' d="' + function(u, f, w) {
        let g = "", p = 0, d = !1, m = 0;
        for (let y = 0; y < u.length; y++) {
            const I = Math.floor(y % f), C = Math.floor(y / f);
            I || d || (d = !0), u[y] ? (m++, y > 0 && I > 0 && u[y - 1] || (g += d ? lt("M", I + w, .5 + C + w) : lt("m", p, 0), 
            p = 0, d = !1), I + 1 < f && u[y + 1] || (g += lt("h", m), m = 0)) : p++;
        }
        return g;
    }(a, o, n.margin) + '"/>', s = 'viewBox="0 0 ' + i + " " + i + '"', c = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + s + ' shape-rendering="crispEdges">' + l + h + `</svg>
`;
    return typeof r == "function" && r(null, c), c;
};

const ae = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, ft = gt, Rt = Nt, ue = Pt;

function ht(t, e, r, n, o) {
    const a = [].slice.call(arguments, 1), i = a.length, l = typeof a[i - 1] == "function";
    if (!l && !ae()) throw new Error("Callback required as last argument");
    if (!l) {
        if (i < 1) throw new Error("Too few arguments provided");
        return i === 1 ? (r = e, e = n = void 0) : i !== 2 || e.getContext || (n = r, 
        r = e, e = void 0), new Promise(function(h, s) {
            try {
                const c = ft.create(r, n);
                h(t(c, e, n));
            } catch (c) {
                s(c);
            }
        });
    }
    if (i < 2) throw new Error("Too few arguments provided");
    i === 2 ? (o = r, r = e, e = n = void 0) : i === 3 && (e.getContext && o === void 0 ? (o = n, 
    n = void 0) : (o = n, n = r, r = e, e = void 0));
    try {
        const h = ft.create(r, n);
        o(null, t(h, e, n));
    } catch (h) {
        o(h);
    }
}

K.create = ft.create, K.toCanvas = ht.bind(null, Rt.render), K.toDataURL = ht.bind(null, Rt.renderToDataURL), 
K.toString = ht.bind(null, function(t, e, r) {
    return ue.render(t, r);
});

export {
    K as b
};