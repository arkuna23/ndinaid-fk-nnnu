import {
    a2 as hn,
    a7 as Ct,
    a5 as un,
    aZ as Ii,
    __tla as Mf
} from "./index-6c08ea4c.js";

let Di, Pi, Li, Zn, kt, Mi, Fi, Ui, Bi, Hi, Wi, qn, Gi, ji, Vi, zi, $i, Xi, Yi, Qn, Ki, Ji, Zi, qi, Qi, eo, to, ro, no, Ff = Promise.all([ (() => {
    try {
        return Mf;
    } catch {}
})() ]).then(async () => {
    var pn = {
        version: "0.18.5"
    }, ea = 1252, ao = [ 874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4 ], ta = function(e) {
        ao.indexOf(e) != -1 && (ea = e);
    }, vr = function(e) {
        ta(e);
    };
    function so() {
        vr(1200), ta(1252);
    }
    var ra, Fr = function(e) {
        return String.fromCharCode(e);
    }, na = function(e) {
        return String.fromCharCode(e);
    }, Ut = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Tr(e) {
        for (var r = "", t = 0, n = 0, a = 0, s = 0, l = 0, i = 0, o = 0, f = 0; f < e.length; ) s = (t = e.charCodeAt(f++)) >> 2, 
        l = (3 & t) << 4 | (n = e.charCodeAt(f++)) >> 4, i = (15 & n) << 2 | (a = e.charCodeAt(f++)) >> 6, 
        o = 63 & a, isNaN(n) ? i = o = 64 : isNaN(a) && (o = 64), r += Ut.charAt(s) + Ut.charAt(l) + Ut.charAt(i) + Ut.charAt(o);
        return r;
    }
    function Nt(e) {
        var r = "", t = 0, n = 0, a = 0, s = 0, l = 0, i = 0;
        e = e.replace(/[^\w\+\/\=]/g, "");
        for (var o = 0; o < e.length; ) t = Ut.indexOf(e.charAt(o++)) << 2 | (s = Ut.indexOf(e.charAt(o++))) >> 4, 
        r += String.fromCharCode(t), n = (15 & s) << 4 | (l = Ut.indexOf(e.charAt(o++))) >> 2, 
        l !== 64 && (r += String.fromCharCode(n)), a = (3 & l) << 6 | (i = Ut.indexOf(e.charAt(o++))), 
        i !== 64 && (r += String.fromCharCode(a));
        return r;
    }
    var be = function() {
        return typeof Buffer < "u" && typeof process < "u" && process.versions !== void 0 && !!process.versions.node;
    }(), It = function() {
        if (typeof Buffer < "u") {
            var e = !Buffer.from;
            if (!e) try {
                Buffer.from("foo", "utf8");
            } catch {
                e = !0;
            }
            return e ? function(r, t) {
                return t ? new Buffer(r, t) : new Buffer(r);
            } : Buffer.from.bind(Buffer);
        }
        return function() {};
    }();
    function $t(e) {
        return be ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
    }
    function aa(e) {
        return be ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
    }
    var Et = function(e) {
        return be ? It(e, "binary") : e.split("").map(function(r) {
            return 255 & r.charCodeAt(0);
        });
    };
    function Ur(e) {
        if (typeof ArrayBuffer > "u") return Et(e);
        for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), n = 0; n != e.length; ++n) t[n] = 255 & e.charCodeAt(n);
        return r;
    }
    function wr(e) {
        if (Array.isArray(e)) return e.map(function(n) {
            return String.fromCharCode(n);
        }).join("");
        for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
        return r.join("");
    }
    var Ke = be ? function(e) {
        return Buffer.concat(e.map(function(r) {
            return Buffer.isBuffer(r) ? r : It(r);
        }));
    } : function(e) {
        if (typeof Uint8Array < "u") {
            var r = 0, t = 0;
            for (r = 0; r < e.length; ++r) t += e[r].length;
            var n = new Uint8Array(t), a = 0;
            for (r = 0, t = 0; r < e.length; t += a, ++r) if (a = e[r].length, e[r] instanceof Uint8Array) n.set(e[r], t); else {
                if (typeof e[r] == "string") throw "wtf";
                n.set(new Uint8Array(e[r]), t);
            }
            return n;
        }
        return [].concat.apply([], e.map(function(s) {
            return Array.isArray(s) ? s : [].slice.call(s);
        }));
    }, br = /\u0000/g, Br = /[\u0001-\u0006]/g;
    function rr(e) {
        for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
        return r;
    }
    function St(e, r) {
        var t = "" + e;
        return t.length >= r ? t : Me("0", r - t.length) + t;
    }
    function dn(e, r) {
        var t = "" + e;
        return t.length >= r ? t : Me(" ", r - t.length) + t;
    }
    function Hr(e, r) {
        var t = "" + e;
        return t.length >= r ? t : t + Me(" ", r - t.length);
    }
    var sa = Math.pow(2, 32);
    function nr(e, r) {
        return e > sa || e < -sa ? function(t, n) {
            var a = "" + Math.round(t);
            return a.length >= n ? a : Me("0", n - a.length) + a;
        }(e, r) : function(t, n) {
            var a = "" + t;
            return a.length >= n ? a : Me("0", n - a.length) + a;
        }(Math.round(e), r);
    }
    function Wr(e, r) {
        return r = r || 0, e.length >= 7 + r && (32 | e.charCodeAt(r)) == 103 && (32 | e.charCodeAt(r + 1)) == 101 && (32 | e.charCodeAt(r + 2)) == 110 && (32 | e.charCodeAt(r + 3)) == 101 && (32 | e.charCodeAt(r + 4)) == 114 && (32 | e.charCodeAt(r + 5)) == 97 && (32 | e.charCodeAt(r + 6)) == 108;
    }
    var ia = [ [ "Sun", "Sunday" ], [ "Mon", "Monday" ], [ "Tue", "Tuesday" ], [ "Wed", "Wednesday" ], [ "Thu", "Thursday" ], [ "Fri", "Friday" ], [ "Sat", "Saturday" ] ], mn = [ [ "J", "Jan", "January" ], [ "F", "Feb", "February" ], [ "M", "Mar", "March" ], [ "A", "Apr", "April" ], [ "M", "May", "May" ], [ "J", "Jun", "June" ], [ "J", "Jul", "July" ], [ "A", "Aug", "August" ], [ "S", "Sep", "September" ], [ "O", "Oct", "October" ], [ "N", "Nov", "November" ], [ "D", "Dec", "December" ] ], Le = {
        0: "General",
        1: "0",
        2: "0.00",
        3: "#,##0",
        4: "#,##0.00",
        9: "0%",
        10: "0.00%",
        11: "0.00E+00",
        12: "# ?/?",
        13: "# ??/??",
        14: "m/d/yy",
        15: "d-mmm-yy",
        16: "d-mmm",
        17: "mmm-yy",
        18: "h:mm AM/PM",
        19: "h:mm:ss AM/PM",
        20: "h:mm",
        21: "h:mm:ss",
        22: "m/d/yy h:mm",
        37: "#,##0 ;(#,##0)",
        38: "#,##0 ;[Red](#,##0)",
        39: "#,##0.00;(#,##0.00)",
        40: "#,##0.00;[Red](#,##0.00)",
        45: "mm:ss",
        46: "[h]:mm:ss",
        47: "mmss.0",
        48: "##0.0E+0",
        49: "@",
        56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
    }, oa = {
        5: 37,
        6: 38,
        7: 39,
        8: 40,
        23: 0,
        24: 0,
        25: 0,
        26: 0,
        27: 14,
        28: 14,
        29: 14,
        30: 14,
        31: 14,
        50: 14,
        51: 14,
        52: 14,
        53: 14,
        54: 14,
        55: 14,
        56: 14,
        57: 14,
        58: 14,
        59: 1,
        60: 2,
        61: 3,
        62: 4,
        67: 9,
        68: 10,
        69: 12,
        70: 13,
        71: 14,
        72: 14,
        73: 15,
        74: 16,
        75: 17,
        76: 20,
        77: 21,
        78: 22,
        79: 45,
        80: 46,
        81: 47,
        82: 0
    }, io = {
        5: '"$"#,##0_);\\("$"#,##0\\)',
        63: '"$"#,##0_);\\("$"#,##0\\)',
        6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
        7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
        8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
        41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
        42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
        43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
        44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
    };
    function Gr(e, r, t) {
        for (var n = e < 0 ? -1 : 1, a = e * n, s = 0, l = 1, i = 0, o = 1, f = 0, u = 0, c = Math.floor(a); f < r && (i = (c = Math.floor(a)) * l + s, 
        u = c * f + o, !(a - c < 5e-8)); ) a = 1 / (a - c), s = l, l = i, o = f, 
        f = u;
        if (u > r && (f > r ? (u = o, i = s) : (u = f, i = l)), !t) return [ 0, n * i, u ];
        var h = Math.floor(n * i / u);
        return [ h, n * i - h * u, u ];
    }
    function jr(e, r, t) {
        if (e > 2958465 || e < 0) return null;
        var n = 0 | e, a = Math.floor(86400 * (e - n)), s = 0, l = [], i = {
            D: n,
            T: a,
            u: 86400 * (e - n) - a,
            y: 0,
            m: 0,
            d: 0,
            H: 0,
            M: 0,
            S: 0,
            q: 0
        };
        if (Math.abs(i.u) < 1e-6 && (i.u = 0), r && r.date1904 && (n += 1462), i.u > .9999 && (i.u = 0, 
        ++a == 86400 && (i.T = a = 0, ++n, ++i.D)), n === 60) l = t ? [ 1317, 10, 29 ] : [ 1900, 2, 29 ], 
        s = 3; else if (n === 0) l = t ? [ 1317, 8, 29 ] : [ 1900, 1, 0 ], s = 6; else {
            n > 60 && --n;
            var o = new Date(1900, 0, 1);
            o.setDate(o.getDate() + n - 1), l = [ o.getFullYear(), o.getMonth() + 1, o.getDate() ], 
            s = o.getDay(), n < 60 && (s = (s + 6) % 7), t && (s = function(f, u) {
                u[0] -= 581;
                var c = f.getDay();
                return f < 60 && (c = (c + 6) % 7), c;
            }(o, l));
        }
        return i.y = l[0], i.m = l[1], i.d = l[2], i.S = a % 60, a = Math.floor(a / 60), 
        i.M = a % 60, a = Math.floor(a / 60), i.H = a, i.q = s, i;
    }
    var la = new Date(1899, 11, 31, 0, 0, 0), oo = la.getTime(), lo = new Date(1900, 2, 1, 0, 0, 0);
    function fa(e, r) {
        var t = e.getTime();
        return r ? t -= 1262304e5 : e >= lo && (t += 864e5), (t - (oo + 6e4 * (e.getTimezoneOffset() - la.getTimezoneOffset()))) / 864e5;
    }
    function gn(e) {
        return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
    }
    function fo(e) {
        var r, t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
        return r = t >= -4 && t <= -1 ? e.toPrecision(10 + t) : Math.abs(t) <= 9 ? function(n) {
            var a = n < 0 ? 12 : 11, s = gn(n.toFixed(12));
            return s.length <= a || (s = n.toPrecision(10)).length <= a ? s : n.toExponential(5);
        }(e) : t === 10 ? e.toFixed(10).substr(0, 12) : function(n) {
            var a = gn(n.toFixed(11));
            return a.length > (n < 0 ? 12 : 11) || a === "0" || a === "-0" ? n.toPrecision(6) : a;
        }(e), gn(function(n) {
            return n.indexOf("E") == -1 ? n : n.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
        }(r.toUpperCase()));
    }
    function vn(e, r) {
        switch (typeof e) {
          case "string":
            return e;

          case "boolean":
            return e ? "TRUE" : "FALSE";

          case "number":
            return (0 | e) === e ? e.toString(10) : fo(e);

          case "undefined":
            return "";

          case "object":
            if (e == null) return "";
            if (e instanceof Date) return Ht(14, fa(e, r && r.date1904), r);
        }
        throw new Error("unsupported value in General format: " + e);
    }
    function co(e, r, t, n) {
        var a, s = "", l = 0, i = 0, o = t.y, f = 0;
        switch (e) {
          case 98:
            o = t.y + 543;

          case 121:
            switch (r.length) {
              case 1:
              case 2:
                a = o % 100, f = 2;
                break;

              default:
                a = o % 1e4, f = 4;
            }
            break;

          case 109:
            switch (r.length) {
              case 1:
              case 2:
                a = t.m, f = r.length;
                break;

              case 3:
                return mn[t.m - 1][1];

              case 5:
                return mn[t.m - 1][0];

              default:
                return mn[t.m - 1][2];
            }
            break;

          case 100:
            switch (r.length) {
              case 1:
              case 2:
                a = t.d, f = r.length;
                break;

              case 3:
                return ia[t.q][0];

              default:
                return ia[t.q][1];
            }
            break;

          case 104:
            switch (r.length) {
              case 1:
              case 2:
                a = 1 + (t.H + 11) % 12, f = r.length;
                break;

              default:
                throw "bad hour format: " + r;
            }
            break;

          case 72:
            switch (r.length) {
              case 1:
              case 2:
                a = t.H, f = r.length;
                break;

              default:
                throw "bad hour format: " + r;
            }
            break;

          case 77:
            switch (r.length) {
              case 1:
              case 2:
                a = t.M, f = r.length;
                break;

              default:
                throw "bad minute format: " + r;
            }
            break;

          case 115:
            if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
            return t.u !== 0 || r != "s" && r != "ss" ? (i = n >= 2 ? n === 3 ? 1e3 : 100 : n === 1 ? 10 : 1, 
            (l = Math.round(i * (t.S + t.u))) >= 60 * i && (l = 0), r === "s" ? l === 0 ? "0" : "" + l / i : (s = St(l, 2 + n), 
            r === "ss" ? s.substr(0, 2) : "." + s.substr(2, r.length - 1))) : St(t.S, r.length);

          case 90:
            switch (r) {
              case "[h]":
              case "[hh]":
                a = 24 * t.D + t.H;
                break;

              case "[m]":
              case "[mm]":
                a = 60 * (24 * t.D + t.H) + t.M;
                break;

              case "[s]":
              case "[ss]":
                a = 60 * (60 * (24 * t.D + t.H) + t.M) + Math.round(t.S + t.u);
                break;

              default:
                throw "bad abstime format: " + r;
            }
            f = r.length === 3 ? 1 : 2;
            break;

          case 101:
            a = o, f = 1;
        }
        return f > 0 ? St(a, f) : "";
    }
    function Bt(e) {
        if (e.length <= 3) return e;
        for (var r = e.length % 3, t = e.substr(0, r); r != e.length; r += 3) t += (t.length > 0 ? "," : "") + e.substr(r, 3);
        return t;
    }
    var ca = /%/g;
    function ha(e, r) {
        var t, n = e.indexOf("E") - e.indexOf(".") - 1;
        if (e.match(/^#+0.0E\+0$/)) {
            if (r == 0) return "0.0E+0";
            if (r < 0) return "-" + ha(e, -r);
            var a = e.indexOf(".");
            a === -1 && (a = e.indexOf("E"));
            var s = Math.floor(Math.log(r) * Math.LOG10E) % a;
            if (s < 0 && (s += a), (t = (r / Math.pow(10, s)).toPrecision(n + 1 + (a + s) % a)).indexOf("e") === -1) {
                var l = Math.floor(Math.log(r) * Math.LOG10E);
                for (t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (l - t.length + s) : t += "E+" + (l - s); t.substr(0, 2) === "0."; ) t = (t = t.charAt(0) + t.substr(2, a) + "." + t.substr(2 + a)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                t = t.replace(/\+-/, "-");
            }
            t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(i, o, f, u) {
                return o + f + u.substr(0, (a + s) % a) + "." + u.substr(s) + "E";
            });
        } else t = r.toExponential(n);
        return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), 
        e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
    }
    var ua = /# (\?+)( ?)\/( ?)(\d+)/, pa = /^#*0*\.([0#]+)/, da = /\).*[0#]/, ma = /\(###\) ###\\?-####/;
    function st(e) {
        for (var r, t = "", n = 0; n != e.length; ++n) switch (r = e.charCodeAt(n)) {
          case 35:
            break;

          case 63:
            t += " ";
            break;

          case 48:
            t += "0";
            break;

          default:
            t += String.fromCharCode(r);
        }
        return t;
    }
    function ga(e, r) {
        var t = Math.pow(10, r);
        return "" + Math.round(e * t) / t;
    }
    function va(e, r) {
        var t = e - Math.floor(e), n = Math.pow(10, r);
        return r < ("" + Math.round(t * n)).length ? 0 : Math.round(t * n);
    }
    function gt(e, r, t) {
        if (e.charCodeAt(0) === 40 && !r.match(da)) {
            var n = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
            return t >= 0 ? gt("n", n, t) : "(" + gt("n", n, -t) + ")";
        }
        if (r.charCodeAt(r.length - 1) === 44) return function(p, g, E) {
            for (var x = g.length - 1; g.charCodeAt(x - 1) === 44; ) --x;
            return Dt(p, g.substr(0, x), E / Math.pow(10, 3 * (g.length - x)));
        }(e, r, t);
        if (r.indexOf("%") !== -1) return function(p, g, E) {
            var x = g.replace(ca, ""), S = g.length - x.length;
            return Dt(p, x, E * Math.pow(10, 2 * S)) + Me("%", S);
        }(e, r, t);
        if (r.indexOf("E") !== -1) return ha(r, t);
        if (r.charCodeAt(0) === 36) return "$" + gt(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
        var a, s, l, i, o = Math.abs(t), f = t < 0 ? "-" : "";
        if (r.match(/^00+$/)) return f + nr(o, r.length);
        if (r.match(/^[#?]+$/)) return (a = nr(t, 0)) === "0" && (a = ""), a.length > r.length ? a : st(r.substr(0, r.length - a.length)) + a;
        if (s = r.match(ua)) return function(p, g, E) {
            var x = parseInt(p[4], 10), S = Math.round(g * x), m = Math.floor(S / x), w = S - m * x, v = x;
            return E + (m === 0 ? "" : "" + m) + " " + (w === 0 ? Me(" ", p[1].length + 1 + p[4].length) : dn(w, p[1].length) + p[2] + "/" + p[3] + St(v, p[4].length));
        }(s, o, f);
        if (r.match(/^#+0+$/)) return f + nr(o, r.length - r.indexOf("0"));
        if (s = r.match(pa)) return a = ga(t, s[1].length).replace(/^([^\.]+)$/, "$1." + st(s[1])).replace(/\.$/, "." + st(s[1])).replace(/\.(\d*)$/, function(p, g) {
            return "." + g + Me("0", st(s[1]).length - g.length);
        }), r.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
        if (r = r.replace(/^#+([0.])/, "$1"), s = r.match(/^(0*)\.(#*)$/)) return f + ga(o, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
        if (s = r.match(/^#{1,3},##0(\.?)$/)) return f + Bt(nr(o, 0));
        if (s = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + gt(e, r, -t) : Bt("" + (Math.floor(t) + function(p, g) {
            return g < ("" + Math.round((p - Math.floor(p)) * Math.pow(10, g))).length ? 1 : 0;
        }(t, s[1].length))) + "." + St(va(t, s[1].length), s[1].length);
        if (s = r.match(/^#,#*,#0/)) return gt(e, r.replace(/^#,#*,/, ""), t);
        if (s = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return a = rr(gt(e, r.replace(/[\\-]/g, ""), t)), 
        l = 0, rr(rr(r.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
            return l < a.length ? a.charAt(l++) : p === "0" ? "0" : "";
        }));
        if (r.match(ma)) return "(" + (a = gt(e, "##########", t)).substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
        var u = "";
        if (s = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return l = Math.min(s[4].length, 7), 
        i = Gr(o, Math.pow(10, l) - 1, !1), a = "" + f, (u = Dt("n", s[1], i[1])).charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"), 
        a += u + s[2] + "/" + s[3], (u = Hr(i[2], l)).length < s[4].length && (u = st(s[4].substr(s[4].length - u.length)) + u), 
        a += u;
        if (s = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return l = Math.min(Math.max(s[1].length, s[4].length), 7), 
        f + ((i = Gr(o, Math.pow(10, l) - 1, !0))[0] || (i[1] ? "" : "0")) + " " + (i[1] ? dn(i[1], l) + s[2] + "/" + s[3] + Hr(i[2], l) : Me(" ", 2 * l + 1 + s[2].length + s[3].length));
        if (s = r.match(/^[#0?]+$/)) return a = nr(t, 0), r.length <= a.length ? a : st(r.substr(0, r.length - a.length)) + a;
        if (s = r.match(/^([#0?]+)\.([#0]+)$/)) {
            a = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), 
            l = a.indexOf(".");
            var c = r.indexOf(".") - l, h = r.length - a.length - c;
            return st(r.substr(0, c) + a + r.substr(r.length - h));
        }
        if (s = r.match(/^00,000\.([#0]*0)$/)) return l = va(t, s[1].length), t < 0 ? "-" + gt(e, r, -t) : Bt(function(p) {
            return p < 2147483647 && p > -2147483648 ? "" + (p >= 0 ? 0 | p : p - 1 | 0) : "" + Math.floor(p);
        }(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
            return "00," + (p.length < 3 ? St(0, 3 - p.length) : "") + p;
        }) + "." + St(l, s[1].length);
        switch (r) {
          case "###,##0.00":
            return gt(e, "#,##0.00", t);

          case "###,###":
          case "##,###":
          case "#,###":
            var d = Bt(nr(o, 0));
            return d !== "0" ? f + d : "";

          case "###,###.00":
            return gt(e, "###,##0.00", t).replace(/^0\./, ".");

          case "#,###.00":
            return gt(e, "#,##0.00", t).replace(/^0\./, ".");
        }
        throw new Error("unsupported format |" + r + "|");
    }
    function Ta(e, r) {
        var t, n = e.indexOf("E") - e.indexOf(".") - 1;
        if (e.match(/^#+0.0E\+0$/)) {
            if (r == 0) return "0.0E+0";
            if (r < 0) return "-" + Ta(e, -r);
            var a = e.indexOf(".");
            a === -1 && (a = e.indexOf("E"));
            var s = Math.floor(Math.log(r) * Math.LOG10E) % a;
            if (s < 0 && (s += a), !(t = (r / Math.pow(10, s)).toPrecision(n + 1 + (a + s) % a)).match(/[Ee]/)) {
                var l = Math.floor(Math.log(r) * Math.LOG10E);
                t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (l - t.length + s) : t += "E+" + (l - s), 
                t = t.replace(/\+-/, "-");
            }
            t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(i, o, f, u) {
                return o + f + u.substr(0, (a + s) % a) + "." + u.substr(s) + "E";
            });
        } else t = r.toExponential(n);
        return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), 
        e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
    }
    function yt(e, r, t) {
        if (e.charCodeAt(0) === 40 && !r.match(da)) {
            var n = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
            return t >= 0 ? yt("n", n, t) : "(" + yt("n", n, -t) + ")";
        }
        if (r.charCodeAt(r.length - 1) === 44) return function(p, g, E) {
            for (var x = g.length - 1; g.charCodeAt(x - 1) === 44; ) --x;
            return Dt(p, g.substr(0, x), E / Math.pow(10, 3 * (g.length - x)));
        }(e, r, t);
        if (r.indexOf("%") !== -1) return function(p, g, E) {
            var x = g.replace(ca, ""), S = g.length - x.length;
            return Dt(p, x, E * Math.pow(10, 2 * S)) + Me("%", S);
        }(e, r, t);
        if (r.indexOf("E") !== -1) return Ta(r, t);
        if (r.charCodeAt(0) === 36) return "$" + yt(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
        var a, s, l, i, o = Math.abs(t), f = t < 0 ? "-" : "";
        if (r.match(/^00+$/)) return f + St(o, r.length);
        if (r.match(/^[#?]+$/)) return a = "" + t, t === 0 && (a = ""), a.length > r.length ? a : st(r.substr(0, r.length - a.length)) + a;
        if (s = r.match(ua)) return function(p, g, E) {
            return E + (g === 0 ? "" : "" + g) + Me(" ", p[1].length + 2 + p[4].length);
        }(s, o, f);
        if (r.match(/^#+0+$/)) return f + St(o, r.length - r.indexOf("0"));
        if (s = r.match(pa)) return a = (a = ("" + t).replace(/^([^\.]+)$/, "$1." + st(s[1])).replace(/\.$/, "." + st(s[1]))).replace(/\.(\d*)$/, function(p, g) {
            return "." + g + Me("0", st(s[1]).length - g.length);
        }), r.indexOf("0.") !== -1 ? a : a.replace(/^0\./, ".");
        if (r = r.replace(/^#+([0.])/, "$1"), s = r.match(/^(0*)\.(#*)$/)) return f + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
        if (s = r.match(/^#{1,3},##0(\.?)$/)) return f + Bt("" + o);
        if (s = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + yt(e, r, -t) : Bt("" + t) + "." + Me("0", s[1].length);
        if (s = r.match(/^#,#*,#0/)) return yt(e, r.replace(/^#,#*,/, ""), t);
        if (s = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return a = rr(yt(e, r.replace(/[\\-]/g, ""), t)), 
        l = 0, rr(rr(r.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
            return l < a.length ? a.charAt(l++) : p === "0" ? "0" : "";
        }));
        if (r.match(ma)) return "(" + (a = yt(e, "##########", t)).substr(0, 3) + ") " + a.substr(3, 3) + "-" + a.substr(6);
        var u = "";
        if (s = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return l = Math.min(s[4].length, 7), 
        i = Gr(o, Math.pow(10, l) - 1, !1), a = "" + f, (u = Dt("n", s[1], i[1])).charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"), 
        a += u + s[2] + "/" + s[3], (u = Hr(i[2], l)).length < s[4].length && (u = st(s[4].substr(s[4].length - u.length)) + u), 
        a += u;
        if (s = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return l = Math.min(Math.max(s[1].length, s[4].length), 7), 
        f + ((i = Gr(o, Math.pow(10, l) - 1, !0))[0] || (i[1] ? "" : "0")) + " " + (i[1] ? dn(i[1], l) + s[2] + "/" + s[3] + Hr(i[2], l) : Me(" ", 2 * l + 1 + s[2].length + s[3].length));
        if (s = r.match(/^[#0?]+$/)) return a = "" + t, r.length <= a.length ? a : st(r.substr(0, r.length - a.length)) + a;
        if (s = r.match(/^([#0]+)\.([#0]+)$/)) {
            a = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), 
            l = a.indexOf(".");
            var c = r.indexOf(".") - l, h = r.length - a.length - c;
            return st(r.substr(0, c) + a + r.substr(r.length - h));
        }
        if (s = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + yt(e, r, -t) : Bt("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
            return "00," + (p.length < 3 ? St(0, 3 - p.length) : "") + p;
        }) + "." + St(0, s[1].length);
        switch (r) {
          case "###,###":
          case "##,###":
          case "#,###":
            var d = Bt("" + o);
            return d !== "0" ? f + d : "";

          default:
            if (r.match(/\.[0#?]*$/)) return yt(e, r.slice(0, r.lastIndexOf(".")), t) + st(r.slice(r.lastIndexOf(".")));
        }
        throw new Error("unsupported format |" + r + "|");
    }
    function Dt(e, r, t) {
        return (0 | t) === t ? yt(e, r, t) : gt(e, r, t);
    }
    var wa = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
    function ba(e) {
        for (var r = 0, t = "", n = ""; r < e.length; ) switch (t = e.charAt(r)) {
          case "G":
            Wr(e, r) && (r += 6), r++;
            break;

          case '"':
            for (;e.charCodeAt(++r) !== 34 && r < e.length; );
            ++r;
            break;

          case "\\":
          case "_":
            r += 2;
            break;

          case "@":
            ++r;
            break;

          case "B":
          case "b":
            if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return !0;

          case "M":
          case "D":
          case "Y":
          case "H":
          case "S":
          case "E":
          case "m":
          case "d":
          case "y":
          case "h":
          case "s":
          case "e":
          case "g":
            return !0;

          case "A":
          case "a":
          case "上":
            if (e.substr(r, 3).toUpperCase() === "A/P" || e.substr(r, 5).toUpperCase() === "AM/PM" || e.substr(r, 5).toUpperCase() === "上午/下午") return !0;
            ++r;
            break;

          case "[":
            for (n = t; e.charAt(r++) !== "]" && r < e.length; ) n += e.charAt(r);
            if (n.match(wa)) return !0;
            break;

          case ".":
          case "0":
          case "#":
            for (;r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || t == "\\" && e.charAt(r + 1) == "-" && "0#".indexOf(e.charAt(r + 2)) > -1); );
            break;

          case "?":
            for (;e.charAt(++r) === t; );
            break;

          case "*":
            ++r, e.charAt(r) != " " && e.charAt(r) != "*" || ++r;
            break;

          case "(":
          case ")":
            ++r;
            break;

          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            for (;r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1; );
            break;

          default:
            ++r;
        }
        return !1;
    }
    var Ea = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
    function Sa(e, r) {
        if (r == null) return !1;
        var t = parseFloat(r[2]);
        switch (r[1]) {
          case "=":
            if (e == t) return !0;
            break;

          case ">":
            if (e > t) return !0;
            break;

          case "<":
            if (e < t) return !0;
            break;

          case "<>":
            if (e != t) return !0;
            break;

          case ">=":
            if (e >= t) return !0;
            break;

          case "<=":
            if (e <= t) return !0;
        }
        return !1;
    }
    function ho(e, r) {
        var t = function(o) {
            for (var f = [], u = !1, c = 0, h = 0; c < o.length; ++c) switch (o.charCodeAt(c)) {
              case 34:
                u = !u;
                break;

              case 95:
              case 42:
              case 92:
                ++c;
                break;

              case 59:
                f[f.length] = o.substr(h, c - h), h = c + 1;
            }
            if (f[f.length] = o.substr(h), u === !0) throw new Error("Format |" + o + "| unterminated string ");
            return f;
        }(e), n = t.length, a = t[n - 1].indexOf("@");
        if (n < 4 && a > -1 && --n, t.length > 4) throw new Error("cannot find right format for |" + t.join("|") + "|");
        if (typeof r != "number") return [ 4, t.length === 4 || a > -1 ? t[t.length - 1] : "@" ];
        switch (t.length) {
          case 1:
            t = a > -1 ? [ "General", "General", "General", t[0] ] : [ t[0], t[0], t[0], "@" ];
            break;

          case 2:
            t = a > -1 ? [ t[0], t[0], t[0], t[1] ] : [ t[0], t[1], t[0], "@" ];
            break;

          case 3:
            t = a > -1 ? [ t[0], t[1], t[0], t[2] ] : [ t[0], t[1], t[2], "@" ];
        }
        var s = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
        if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [ n, s ];
        if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
            var l = t[0].match(Ea), i = t[1].match(Ea);
            return Sa(r, l) ? [ n, t[0] ] : Sa(r, i) ? [ n, t[1] ] : [ n, t[l != null && i != null ? 2 : 1] ];
        }
        return [ n, s ];
    }
    function Ht(e, r, t) {
        t == null && (t = {});
        var n = "";
        switch (typeof e) {
          case "string":
            n = e == "m/d/yy" && t.dateNF ? t.dateNF : e;
            break;

          case "number":
            (n = e == 14 && t.dateNF ? t.dateNF : (t.table != null ? t.table : Le)[e]) == null && (n = t.table && t.table[oa[e]] || Le[oa[e]]), 
            n == null && (n = io[e] || "General");
        }
        if (Wr(n, 0)) return vn(r, t);
        r instanceof Date && (r = fa(r, t.date1904));
        var a = ho(n, r);
        if (Wr(a[1])) return vn(r, t);
        if (r === !0) r = "TRUE"; else if (r === !1) r = "FALSE"; else if (r === "" || r == null) return "";
        return function(s, l, i, o) {
            for (var f, u, c, h = [], d = "", p = 0, g = "", E = "t", x = "H"; p < s.length; ) switch (g = s.charAt(p)) {
              case "G":
                if (!Wr(s, p)) throw new Error("unrecognized character " + g + " in " + s);
                h[h.length] = {
                    t: "G",
                    v: "General"
                }, p += 7;
                break;

              case '"':
                for (d = ""; (c = s.charCodeAt(++p)) !== 34 && p < s.length; ) d += String.fromCharCode(c);
                h[h.length] = {
                    t: "t",
                    v: d
                }, ++p;
                break;

              case "\\":
                var S = s.charAt(++p), m = S === "(" || S === ")" ? S : "t";
                h[h.length] = {
                    t: m,
                    v: S
                }, ++p;
                break;

              case "_":
                h[h.length] = {
                    t: "t",
                    v: " "
                }, p += 2;
                break;

              case "@":
                h[h.length] = {
                    t: "T",
                    v: l
                }, ++p;
                break;

              case "B":
              case "b":
                if (s.charAt(p + 1) === "1" || s.charAt(p + 1) === "2") {
                    if (f == null && (f = jr(l, i, s.charAt(p + 1) === "2")) == null) return "";
                    h[h.length] = {
                        t: "X",
                        v: s.substr(p, 2)
                    }, E = g, p += 2;
                    break;
                }

              case "M":
              case "D":
              case "Y":
              case "H":
              case "S":
              case "E":
                g = g.toLowerCase();

              case "m":
              case "d":
              case "y":
              case "h":
              case "s":
              case "e":
              case "g":
                if (l < 0 || f == null && (f = jr(l, i)) == null) return "";
                for (d = g; ++p < s.length && s.charAt(p).toLowerCase() === g; ) d += g;
                g === "m" && E.toLowerCase() === "h" && (g = "M"), g === "h" && (g = x), 
                h[h.length] = {
                    t: g,
                    v: d
                }, E = g;
                break;

              case "A":
              case "a":
              case "上":
                var w = {
                    t: g,
                    v: g
                };
                if (f == null && (f = jr(l, i)), s.substr(p, 3).toUpperCase() === "A/P" ? (f != null && (w.v = f.H >= 12 ? "P" : "A"), 
                w.t = "T", x = "h", p += 3) : s.substr(p, 5).toUpperCase() === "AM/PM" ? (f != null && (w.v = f.H >= 12 ? "PM" : "AM"), 
                w.t = "T", p += 5, x = "h") : s.substr(p, 5).toUpperCase() === "上午/下午" ? (f != null && (w.v = f.H >= 12 ? "下午" : "上午"), 
                w.t = "T", p += 5, x = "h") : (w.t = "t", ++p), f == null && w.t === "T") return "";
                h[h.length] = w, E = g;
                break;

              case "[":
                for (d = g; s.charAt(p++) !== "]" && p < s.length; ) d += s.charAt(p);
                if (d.slice(-1) !== "]") throw 'unterminated "[" block: |' + d + "|";
                if (d.match(wa)) {
                    if (f == null && (f = jr(l, i)) == null) return "";
                    h[h.length] = {
                        t: "Z",
                        v: d.toLowerCase()
                    }, E = d.charAt(1);
                } else d.indexOf("$") > -1 && (d = (d.match(/\$([^-\[\]]*)/) || [])[1] || "$", 
                ba(s) || (h[h.length] = {
                    t: "t",
                    v: d
                }));
                break;

              case ".":
                if (f != null) {
                    for (d = g; ++p < s.length && (g = s.charAt(p)) === "0"; ) d += g;
                    h[h.length] = {
                        t: "s",
                        v: d
                    };
                    break;
                }

              case "0":
              case "#":
                for (d = g; ++p < s.length && "0#?.,E+-%".indexOf(g = s.charAt(p)) > -1; ) d += g;
                h[h.length] = {
                    t: "n",
                    v: d
                };
                break;

              case "?":
                for (d = g; s.charAt(++p) === g; ) d += g;
                h[h.length] = {
                    t: g,
                    v: d
                }, E = g;
                break;

              case "*":
                ++p, s.charAt(p) != " " && s.charAt(p) != "*" || ++p;
                break;

              case "(":
              case ")":
                h[h.length] = {
                    t: o === 1 ? "t" : g,
                    v: g
                }, ++p;
                break;

              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                for (d = g; p < s.length && "0123456789".indexOf(s.charAt(++p)) > -1; ) d += s.charAt(p);
                h[h.length] = {
                    t: "D",
                    v: d
                };
                break;

              case " ":
                h[h.length] = {
                    t: g,
                    v: g
                }, ++p;
                break;

              case "$":
                h[h.length] = {
                    t: "t",
                    v: "$"
                }, ++p;
                break;

              default:
                if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(g) === -1) throw new Error("unrecognized character " + g + " in " + s);
                h[h.length] = {
                    t: "t",
                    v: g
                }, ++p;
            }
            var v, T = 0, A = 0;
            for (p = h.length - 1, E = "t"; p >= 0; --p) switch (h[p].t) {
              case "h":
              case "H":
                h[p].t = x, E = "h", T < 1 && (T = 1);
                break;

              case "s":
                (v = h[p].v.match(/\.0+$/)) && (A = Math.max(A, v[0].length - 1)), 
                T < 3 && (T = 3);

              case "d":
              case "y":
              case "M":
              case "e":
                E = h[p].t;
                break;

              case "m":
                E === "s" && (h[p].t = "M", T < 2 && (T = 2));
                break;

              case "X":
                break;

              case "Z":
                T < 1 && h[p].v.match(/[Hh]/) && (T = 1), T < 2 && h[p].v.match(/[Mm]/) && (T = 2), 
                T < 3 && h[p].v.match(/[Ss]/) && (T = 3);
            }
            switch (T) {
              case 0:
                break;

              case 1:
                f.u >= .5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M), f.M >= 60 && (f.M = 0, 
                ++f.H);
                break;

              case 2:
                f.u >= .5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M);
            }
            var C, I = "";
            for (p = 0; p < h.length; ++p) switch (h[p].t) {
              case "t":
              case "T":
              case " ":
              case "D":
                break;

              case "X":
                h[p].v = "", h[p].t = ";";
                break;

              case "d":
              case "m":
              case "y":
              case "h":
              case "H":
              case "M":
              case "s":
              case "e":
              case "b":
              case "Z":
                h[p].v = co(h[p].t.charCodeAt(0), h[p].v, f, A), h[p].t = "t";
                break;

              case "n":
              case "?":
                for (C = p + 1; h[C] != null && ((g = h[C].t) === "?" || g === "D" || (g === " " || g === "t") && h[C + 1] != null && (h[C + 1].t === "?" || h[C + 1].t === "t" && h[C + 1].v === "/") || h[p].t === "(" && (g === " " || g === "n" || g === ")") || g === "t" && (h[C].v === "/" || h[C].v === " " && h[C + 1] != null && h[C + 1].t == "?")); ) h[p].v += h[C].v, 
                h[C] = {
                    v: "",
                    t: ";"
                }, ++C;
                I += h[p].v, p = C - 1;
                break;

              case "G":
                h[p].t = "t", h[p].v = vn(l, i);
            }
            var D, N, G = "";
            if (I.length > 0) {
                I.charCodeAt(0) == 40 ? (D = l < 0 && I.charCodeAt(0) === 45 ? -l : l, 
                N = Dt("n", I, D)) : (N = Dt("n", I, D = l < 0 && o > 1 ? -l : l), 
                D < 0 && h[0] && h[0].t == "t" && (N = N.substr(1), h[0].v = "-" + h[0].v)), 
                C = N.length - 1;
                var B = h.length;
                for (p = 0; p < h.length; ++p) if (h[p] != null && h[p].t != "t" && h[p].v.indexOf(".") > -1) {
                    B = p;
                    break;
                }
                var J = h.length;
                if (B === h.length && N.indexOf("E") === -1) {
                    for (p = h.length - 1; p >= 0; --p) h[p] != null && "n?".indexOf(h[p].t) !== -1 && (C >= h[p].v.length - 1 ? (C -= h[p].v.length, 
                    h[p].v = N.substr(C + 1, h[p].v.length)) : C < 0 ? h[p].v = "" : (h[p].v = N.substr(0, C + 1), 
                    C = -1), h[p].t = "t", J = p);
                    C >= 0 && J < h.length && (h[J].v = N.substr(0, C + 1) + h[J].v);
                } else if (B !== h.length && N.indexOf("E") === -1) {
                    for (C = N.indexOf(".") - 1, p = B; p >= 0; --p) if (h[p] != null && "n?".indexOf(h[p].t) !== -1) {
                        for (u = h[p].v.indexOf(".") > -1 && p === B ? h[p].v.indexOf(".") - 1 : h[p].v.length - 1, 
                        G = h[p].v.substr(u + 1); u >= 0; --u) C >= 0 && (h[p].v.charAt(u) === "0" || h[p].v.charAt(u) === "#") && (G = N.charAt(C--) + G);
                        h[p].v = G, h[p].t = "t", J = p;
                    }
                    for (C >= 0 && J < h.length && (h[J].v = N.substr(0, C + 1) + h[J].v), 
                    C = N.indexOf(".") + 1, p = B; p < h.length; ++p) if (h[p] != null && ("n?(".indexOf(h[p].t) !== -1 || p === B)) {
                        for (u = h[p].v.indexOf(".") > -1 && p === B ? h[p].v.indexOf(".") + 1 : 0, 
                        G = h[p].v.substr(0, u); u < h[p].v.length; ++u) C < N.length && (G += N.charAt(C++));
                        h[p].v = G, h[p].t = "t", J = p;
                    }
                }
            }
            for (p = 0; p < h.length; ++p) h[p] != null && "n?".indexOf(h[p].t) > -1 && (D = o > 1 && l < 0 && p > 0 && h[p - 1].v === "-" ? -l : l, 
            h[p].v = Dt(h[p].t, h[p].v, D), h[p].t = "t");
            var ne = "";
            for (p = 0; p !== h.length; ++p) h[p] != null && (ne += h[p].v);
            return ne;
        }(a[1], r, t, a[0]);
    }
    function Aa(e, r) {
        if (typeof r != "number") {
            r = +r || -1;
            for (var t = 0; t < 392; ++t) if (Le[t] != null) {
                if (Le[t] == e) {
                    r = t;
                    break;
                }
            } else r < 0 && (r = t);
            r < 0 && (r = 391);
        }
        return Le[r] = e, r;
    }
    function Vr(e) {
        for (var r = 0; r != 392; ++r) e[r] !== void 0 && Aa(e[r], r);
    }
    function zr() {
        var e;
        e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", 
        e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", 
        e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", 
        e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", 
        e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", 
        e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", 
        e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", 
        e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', Le = e;
    }
    var xa = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g, uo = function() {
        var e = {};
        e.version = "1.2.0";
        var r = function() {
            for (var S = 0, m = new Array(256), w = 0; w != 256; ++w) S = 1 & (S = 1 & (S = 1 & (S = 1 & (S = 1 & (S = 1 & (S = 1 & (S = 1 & (S = w) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1) ? -306674912 ^ S >>> 1 : S >>> 1, 
            m[w] = S;
            return typeof Int32Array < "u" ? new Int32Array(m) : m;
        }(), t = function(S) {
            var m = 0, w = 0, v = 0, T = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
            for (v = 0; v != 256; ++v) T[v] = S[v];
            for (v = 0; v != 256; ++v) for (w = S[v], m = 256 + v; m < 4096; m += 256) w = T[m] = w >>> 8 ^ S[255 & w];
            var A = [];
            for (v = 1; v != 16; ++v) A[v - 1] = typeof Int32Array < "u" ? T.subarray(256 * v, 256 * v + 256) : T.slice(256 * v, 256 * v + 256);
            return A;
        }(r), n = t[0], a = t[1], s = t[2], l = t[3], i = t[4], o = t[5], f = t[6], u = t[7], c = t[8], h = t[9], d = t[10], p = t[11], g = t[12], E = t[13], x = t[14];
        return e.table = r, e.bstr = function(S, m) {
            for (var w = ~m, v = 0, T = S.length; v < T; ) w = w >>> 8 ^ r[255 & (w ^ S.charCodeAt(v++))];
            return ~w;
        }, e.buf = function(S, m) {
            for (var w = ~m, v = S.length - 15, T = 0; T < v; ) w = x[S[T++] ^ 255 & w] ^ E[S[T++] ^ w >> 8 & 255] ^ g[S[T++] ^ w >> 16 & 255] ^ p[S[T++] ^ w >>> 24] ^ d[S[T++]] ^ h[S[T++]] ^ c[S[T++]] ^ u[S[T++]] ^ f[S[T++]] ^ o[S[T++]] ^ i[S[T++]] ^ l[S[T++]] ^ s[S[T++]] ^ a[S[T++]] ^ n[S[T++]] ^ r[S[T++]];
            for (v += 15; T < v; ) w = w >>> 8 ^ r[255 & (w ^ S[T++])];
            return ~w;
        }, e.str = function(S, m) {
            for (var w = ~m, v = 0, T = S.length, A = 0, C = 0; v < T; ) (A = S.charCodeAt(v++)) < 128 ? w = w >>> 8 ^ r[255 & (w ^ A)] : A < 2048 ? w = (w = w >>> 8 ^ r[255 & (w ^ (192 | A >> 6 & 31))]) >>> 8 ^ r[255 & (w ^ (128 | 63 & A))] : A >= 55296 && A < 57344 ? (A = 64 + (1023 & A), 
            C = 1023 & S.charCodeAt(v++), w = (w = (w = (w = w >>> 8 ^ r[255 & (w ^ (240 | A >> 8 & 7))]) >>> 8 ^ r[255 & (w ^ (128 | A >> 2 & 63))]) >>> 8 ^ r[255 & (w ^ (128 | C >> 6 & 15 | (3 & A) << 4))]) >>> 8 ^ r[255 & (w ^ (128 | 63 & C))]) : w = (w = (w = w >>> 8 ^ r[255 & (w ^ (224 | A >> 12 & 15))]) >>> 8 ^ r[255 & (w ^ (128 | A >> 6 & 63))]) >>> 8 ^ r[255 & (w ^ (128 | 63 & A))];
            return ~w;
        }, e;
    }(), Oe = function() {
        var e, r = {};
        function t(b) {
            if (b.charAt(b.length - 1) == "/") return b.slice(0, -1).indexOf("/") === -1 ? b : t(b.slice(0, -1));
            var y = b.lastIndexOf("/");
            return y === -1 ? b : b.slice(0, y + 1);
        }
        function n(b) {
            if (b.charAt(b.length - 1) == "/") return n(b.slice(0, -1));
            var y = b.lastIndexOf("/");
            return y === -1 ? b : b.slice(y + 1);
        }
        function a(b, y) {
            typeof y == "string" && (y = new Date(y));
            var _ = y.getHours();
            _ = (_ = _ << 6 | y.getMinutes()) << 5 | y.getSeconds() >>> 1, b.write_shift(2, _);
            var k = y.getFullYear() - 1980;
            k = (k = k << 4 | y.getMonth() + 1) << 5 | y.getDate(), b.write_shift(2, k);
        }
        function s(b) {
            dt(b, 0);
            for (var y = {}, _ = 0; b.l <= b.length - 4; ) {
                var k = b.read_shift(2), O = b.read_shift(2), R = b.l + O, L = {};
                k === 21589 && (1 & (_ = b.read_shift(1)) && (L.mtime = b.read_shift(4)), 
                O > 5 && (2 & _ && (L.atime = b.read_shift(4)), 4 & _ && (L.ctime = b.read_shift(4))), 
                L.mtime && (L.mt = new Date(1e3 * L.mtime))), b.l = R, y[k] = L;
            }
            return y;
        }
        function l() {
            return e || (e = {});
        }
        function i(b, y) {
            if (b[0] == 80 && b[1] == 75) return Ni(b, y);
            if ((32 | b[0]) == 109 && (32 | b[1]) == 105) return function(ee, re) {
                if (T(ee.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
                var te = re && re.root || "", Z = (be && Buffer.isBuffer(ee) ? ee.toString("binary") : T(ee)).split(`\r
`), oe = 0, ue = "";
                for (oe = 0; oe < Z.length; ++oe) if (ue = Z[oe], /^Content-Location:/i.test(ue) && (ue = ue.slice(ue.indexOf("file")), 
                te || (te = ue.slice(0, ue.lastIndexOf("/") + 1)), ue.slice(0, te.length) != te)) for (;te.length > 0 && (te = (te = te.slice(0, te.length - 1)).slice(0, te.lastIndexOf("/") + 1), 
                ue.slice(0, te.length) != te); );
                var Ye = (Z[1] || "").match(/boundary="(.*?)"/);
                if (!Ye) throw new Error("MAD cannot find boundary");
                var we = "--" + (Ye[1] || ""), tt = [], ae = [], De = {
                    FileIndex: tt,
                    FullPaths: ae
                };
                h(De);
                var at, bt = 0;
                for (oe = 0; oe < Z.length; ++oe) {
                    var zt = Z[oe];
                    zt !== we && zt !== we + "--" || (bt++ && Lf(De, Z.slice(at, oe), te), 
                    at = oe);
                }
                return De;
            }(b, y);
            if (b.length < 512) throw new Error("CFB file size " + b.length + " < 512");
            var _, k, O, R, L, U, P = 512, H = [], j = b.slice(0, 512);
            dt(j, 0);
            var Q = function(ee) {
                if (ee[ee.l] == 80 && ee[ee.l + 1] == 75) return [ 0, 0 ];
                ee.chk(S, "Header Signature: "), ee.l += 16;
                var re = ee.read_shift(2, "u");
                return [ ee.read_shift(2, "u"), re ];
            }(j);
            switch (_ = Q[0]) {
              case 3:
                P = 512;
                break;

              case 4:
                P = 4096;
                break;

              case 0:
                if (Q[1] == 0) return Ni(b, y);

              default:
                throw new Error("Major Version: Expected 3 or 4 saw " + _);
            }
            P !== 512 && dt(j = b.slice(0, P), 28);
            var q = b.slice(0, P);
            (function(ee, re) {
                var te = 9;
                switch (ee.l += 2, te = ee.read_shift(2)) {
                  case 9:
                    if (re != 3) throw new Error("Sector Shift: Expected 9 saw " + te);
                    break;

                  case 12:
                    if (re != 4) throw new Error("Sector Shift: Expected 12 saw " + te);
                    break;

                  default:
                    throw new Error("Sector Shift: Expected 9 or 12 saw " + te);
                }
                ee.chk("0600", "Mini Sector Shift: "), ee.chk("000000000000", "Reserved: ");
            })(j, _);
            var X = j.read_shift(4, "i");
            if (_ === 3 && X !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + X);
            j.l += 4, R = j.read_shift(4, "i"), j.l += 4, j.chk("00100000", "Mini Stream Cutoff Size: "), 
            L = j.read_shift(4, "i"), k = j.read_shift(4, "i"), U = j.read_shift(4, "i"), 
            O = j.read_shift(4, "i");
            for (var se = -1, he = 0; he < 109 && !((se = j.read_shift(4, "i")) < 0); ++he) H[he] = se;
            var fe = function(ee, re) {
                for (var te = Math.ceil(ee.length / re) - 1, Z = [], oe = 1; oe < te; ++oe) Z[oe - 1] = ee.slice(oe * re, (oe + 1) * re);
                return Z[te - 1] = ee.slice(te * re), Z;
            }(b, P);
            f(U, O, fe, P, H);
            var ie = function(ee, re, te, Z) {
                var oe = ee.length, ue = [], Ye = [], we = [], tt = [], ae = Z - 1, De = 0, at = 0, bt = 0, zt = 0;
                for (De = 0; De < oe; ++De) if (we = [], (bt = De + re) >= oe && (bt -= oe), 
                !Ye[bt]) {
                    tt = [];
                    var Ce = [];
                    for (at = bt; at >= 0; ) {
                        Ce[at] = !0, Ye[at] = !0, we[we.length] = at, tt.push(ee[at]);
                        var me = te[Math.floor(4 * at / Z)];
                        if (Z < 4 + (zt = 4 * at & ae)) throw new Error("FAT boundary crossed: " + at + " 4 " + Z);
                        if (!ee[me] || Ce[at = Xt(ee[me], zt)]) break;
                    }
                    ue[bt] = {
                        nodes: we,
                        data: Fa([ tt ])
                    };
                }
                return ue;
            }(fe, R, H, P);
            ie[R].name = "!Directory", k > 0 && L !== x && (ie[L].name = "!MiniFAT"), 
            ie[H[0]].name = "!FAT", ie.fat_addrs = H, ie.ssz = P;
            var Y = [], de = [], Ae = [];
            (function(ee, re, te, Z, oe, ue, Ye, we) {
                for (var tt, ae = 0, De = Z.length ? 2 : 0, at = re[ee].data, bt = 0, zt = 0; bt < at.length; bt += 128) {
                    var Ce = at.slice(bt, bt + 128);
                    dt(Ce, 64), zt = Ce.read_shift(2), tt = xn(Ce, 0, zt - De), 
                    Z.push(tt);
                    var me = {
                        name: tt,
                        type: Ce.read_shift(1),
                        color: Ce.read_shift(1),
                        L: Ce.read_shift(4, "i"),
                        R: Ce.read_shift(4, "i"),
                        C: Ce.read_shift(4, "i"),
                        clsid: Ce.read_shift(16),
                        state: Ce.read_shift(4, "i"),
                        start: 0,
                        size: 0
                    };
                    Ce.read_shift(2) + Ce.read_shift(2) + Ce.read_shift(2) + Ce.read_shift(2) !== 0 && (me.ct = c(Ce, Ce.l - 8)), 
                    Ce.read_shift(2) + Ce.read_shift(2) + Ce.read_shift(2) + Ce.read_shift(2) !== 0 && (me.mt = c(Ce, Ce.l - 8)), 
                    me.start = Ce.read_shift(4, "i"), me.size = Ce.read_shift(4, "i"), 
                    me.size < 0 && me.start < 0 && (me.size = me.type = 0, me.start = x, 
                    me.name = ""), me.type === 5 ? (ae = me.start, oe > 0 && ae !== x && (re[ae].name = "!StreamData")) : me.size >= 4096 ? (me.storage = "fat", 
                    re[me.start] === void 0 && (re[me.start] = u(te, me.start, re.fat_addrs, re.ssz)), 
                    re[me.start].name = me.name, me.content = re[me.start].data.slice(0, me.size)) : (me.storage = "minifat", 
                    me.size < 0 ? me.size = 0 : ae !== x && me.start !== x && re[ae] && (me.content = o(me, re[ae].data, (re[we] || {}).data))), 
                    me.content && dt(me.content, 0), ue[tt] = me, Ye.push(me);
                }
            })(R, ie, fe, Y, k, {}, de, L), function(ee, re, te) {
                for (var Z = 0, oe = 0, ue = 0, Ye = 0, we = 0, tt = te.length, ae = [], De = []; Z < tt; ++Z) ae[Z] = De[Z] = Z, 
                re[Z] = te[Z];
                for (;we < De.length; ++we) oe = ee[Z = De[we]].L, ue = ee[Z].R, 
                Ye = ee[Z].C, ae[Z] === Z && (oe !== -1 && ae[oe] !== oe && (ae[Z] = ae[oe]), 
                ue !== -1 && ae[ue] !== ue && (ae[Z] = ae[ue])), Ye !== -1 && (ae[Ye] = Z), 
                oe !== -1 && Z != ae[Z] && (ae[oe] = ae[Z], De.lastIndexOf(oe) < we && De.push(oe)), 
                ue !== -1 && Z != ae[Z] && (ae[ue] = ae[Z], De.lastIndexOf(ue) < we && De.push(ue));
                for (Z = 1; Z < tt; ++Z) ae[Z] === Z && (ue !== -1 && ae[ue] !== ue ? ae[Z] = ae[ue] : oe !== -1 && ae[oe] !== oe && (ae[Z] = ae[oe]));
                for (Z = 1; Z < tt; ++Z) if (ee[Z].type !== 0) {
                    if ((we = Z) != ae[we]) do {
                        we = ae[we], re[Z] = re[we] + "/" + re[Z];
                    } while (we !== 0 && ae[we] !== -1 && we != ae[we]);
                    ae[Z] = -1;
                }
                for (re[0] += "/", Z = 1; Z < tt; ++Z) ee[Z].type !== 2 && (re[Z] += "/");
            }(de, Ae, Y), Y.shift();
            var Pe = {
                FileIndex: de,
                FullPaths: Ae
            };
            return y && y.raw && (Pe.raw = {
                header: q,
                sectors: fe
            }), Pe;
        }
        function o(b, y, _) {
            for (var k = b.start, O = b.size, R = [], L = k; _ && O > 0 && L >= 0; ) R.push(y.slice(L * E, L * E + E)), 
            O -= E, L = Xt(_, 4 * L);
            return R.length === 0 ? M(0) : Ke(R).slice(0, b.size);
        }
        function f(b, y, _, k, O) {
            var R = x;
            if (b === x) {
                if (y !== 0) throw new Error("DIFAT chain shorter than expected");
            } else if (b !== -1) {
                var L = _[b], U = (k >>> 2) - 1;
                if (!L) return;
                for (var P = 0; P < U && (R = Xt(L, 4 * P)) !== x; ++P) O.push(R);
                f(Xt(L, k - 4), y - 1, _, k, O);
            }
        }
        function u(b, y, _, k, O) {
            var R = [], L = [];
            O || (O = []);
            var U = k - 1, P = 0, H = 0;
            for (P = y; P >= 0; ) {
                O[P] = !0, R[R.length] = P, L.push(b[P]);
                var j = _[Math.floor(4 * P / k)];
                if (k < 4 + (H = 4 * P & U)) throw new Error("FAT boundary crossed: " + P + " 4 " + k);
                if (!b[j]) break;
                P = Xt(b[j], H);
            }
            return {
                nodes: R,
                data: Fa([ L ])
            };
        }
        function c(b, y) {
            return new Date(1e3 * (pt(b, y + 4) / 1e7 * Math.pow(2, 32) + pt(b, y) / 1e7 - 11644473600));
        }
        function h(b, y) {
            var _ = y || {}, k = _.root || "Root Entry";
            if (b.FullPaths || (b.FullPaths = []), b.FileIndex || (b.FileIndex = []), 
            b.FullPaths.length !== b.FileIndex.length) throw new Error("inconsistent CFB structure");
            b.FullPaths.length === 0 && (b.FullPaths[0] = k + "/", b.FileIndex[0] = {
                name: k,
                type: 5
            }), _.CLSID && (b.FileIndex[0].clsid = _.CLSID), function(O) {
                var R = "Sh33tJ5";
                if (!Oe.find(O, "/" + R)) {
                    var L = M(4);
                    L[0] = 55, L[1] = L[3] = 50, L[2] = 54, O.FileIndex.push({
                        name: R,
                        type: 2,
                        content: L,
                        size: 4,
                        L: 69,
                        R: 69,
                        C: 69
                    }), O.FullPaths.push(O.FullPaths[0] + R), d(O);
                }
            }(b);
        }
        function d(b, y) {
            h(b);
            for (var _ = !1, k = !1, O = b.FullPaths.length - 1; O >= 0; --O) {
                var R = b.FileIndex[O];
                switch (R.type) {
                  case 0:
                    k ? _ = !0 : (b.FileIndex.pop(), b.FullPaths.pop());
                    break;

                  case 1:
                  case 2:
                  case 5:
                    k = !0, isNaN(R.R * R.L * R.C) && (_ = !0), R.R > -1 && R.L > -1 && R.R == R.L && (_ = !0);
                    break;

                  default:
                    _ = !0;
                }
            }
            if (_ || y) {
                var L = new Date(1987, 1, 19), U = 0, P = Object.create ? Object.create(null) : {}, H = [];
                for (O = 0; O < b.FullPaths.length; ++O) P[b.FullPaths[O]] = !0, 
                b.FileIndex[O].type !== 0 && H.push([ b.FullPaths[O], b.FileIndex[O] ]);
                for (O = 0; O < H.length; ++O) {
                    var j = t(H[O][0]);
                    (k = P[j]) || (H.push([ j, {
                        name: n(j).replace("/", ""),
                        type: 1,
                        clsid: w,
                        ct: L,
                        mt: L,
                        content: null
                    } ]), P[j] = !0);
                }
                for (H.sort(function(X, se) {
                    return function(he, fe) {
                        for (var ie = he.split("/"), Y = fe.split("/"), de = 0, Ae = 0, Pe = Math.min(ie.length, Y.length); de < Pe; ++de) {
                            if (Ae = ie[de].length - Y[de].length) return Ae;
                            if (ie[de] != Y[de]) return ie[de] < Y[de] ? -1 : 1;
                        }
                        return ie.length - Y.length;
                    }(X[0], se[0]);
                }), b.FullPaths = [], b.FileIndex = [], O = 0; O < H.length; ++O) b.FullPaths[O] = H[O][0], 
                b.FileIndex[O] = H[O][1];
                for (O = 0; O < H.length; ++O) {
                    var Q = b.FileIndex[O], q = b.FullPaths[O];
                    if (Q.name = n(q).replace("/", ""), Q.L = Q.R = Q.C = -(Q.color = 1), 
                    Q.size = Q.content ? Q.content.length : 0, Q.start = 0, Q.clsid = Q.clsid || w, 
                    O === 0) Q.C = H.length > 1 ? 1 : -1, Q.size = 0, Q.type = 5; else if (q.slice(-1) == "/") {
                        for (U = O + 1; U < H.length && t(b.FullPaths[U]) != q; ++U);
                        for (Q.C = U >= H.length ? -1 : U, U = O + 1; U < H.length && t(b.FullPaths[U]) != t(q); ++U);
                        Q.R = U >= H.length ? -1 : U, Q.type = 1;
                    } else t(b.FullPaths[O + 1] || "") == t(q) && (Q.R = O + 1), 
                    Q.type = 2;
                }
            }
        }
        function p(b, y) {
            var _ = y || {};
            if (_.fileType == "mad") return function(X, se) {
                for (var he = se || {}, fe = he.boundary || "SheetJS", ie = [ "MIME-Version: 1.0", 'Content-Type: multipart/related; boundary="' + (fe = "------=" + fe).slice(2) + '"', "", "", "" ], Y = X.FullPaths[0], de = Y, Ae = X.FileIndex[0], Pe = 1; Pe < X.FullPaths.length; ++Pe) if (de = X.FullPaths[Pe].slice(Y.length), 
                (Ae = X.FileIndex[Pe]).size && Ae.content && de != "Sh33tJ5") {
                    de = de.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(we) {
                        return "_x" + we.charCodeAt(0).toString(16) + "_";
                    }).replace(/[\u0080-\uFFFF]/g, function(we) {
                        return "_u" + we.charCodeAt(0).toString(16) + "_";
                    });
                    for (var ee = Ae.content, re = be && Buffer.isBuffer(ee) ? ee.toString("binary") : T(ee), te = 0, Z = Math.min(1024, re.length), oe = 0, ue = 0; ue <= Z; ++ue) (oe = re.charCodeAt(ue)) >= 32 && oe < 128 && ++te;
                    var Ye = te >= 4 * Z / 5;
                    ie.push(fe), ie.push("Content-Location: " + (he.root || "file:///C:/SheetJS/") + de), 
                    ie.push("Content-Transfer-Encoding: " + (Ye ? "quoted-printable" : "base64")), 
                    ie.push("Content-Type: " + If(Ae, de)), ie.push(""), ie.push(Ye ? Pf(re) : Df(re));
                }
                return ie.push(fe + `--\r
`), ie.join(`\r
`);
            }(b, _);
            if (d(b), _.fileType === "zip") return function(X, se) {
                var he = se || {}, fe = [], ie = [], Y = M(1), de = he.compression ? 8 : 0, Ae = 0, Pe = 0, ee = 0, re = 0, te = 0, Z = X.FullPaths[0], oe = Z, ue = X.FileIndex[0], Ye = [], we = 0;
                for (Pe = 1; Pe < X.FullPaths.length; ++Pe) if (oe = X.FullPaths[Pe].slice(Z.length), 
                (ue = X.FileIndex[Pe]).size && ue.content && oe != "Sh33tJ5") {
                    var tt = re, ae = M(oe.length);
                    for (ee = 0; ee < oe.length; ++ee) ae.write_shift(1, 127 & oe.charCodeAt(ee));
                    ae = ae.slice(0, ae.l), Ye[te] = uo.buf(ue.content, 0);
                    var De = ue.content;
                    de == 8 && (De = A(De)), (Y = M(30)).write_shift(4, 67324752), 
                    Y.write_shift(2, 20), Y.write_shift(2, Ae), Y.write_shift(2, de), 
                    ue.mt ? a(Y, ue.mt) : Y.write_shift(4, 0), Y.write_shift(-4, Ye[te]), 
                    Y.write_shift(4, De.length), Y.write_shift(4, ue.content.length), 
                    Y.write_shift(2, ae.length), Y.write_shift(2, 0), re += Y.length, 
                    fe.push(Y), re += ae.length, fe.push(ae), re += De.length, fe.push(De), 
                    (Y = M(46)).write_shift(4, 33639248), Y.write_shift(2, 0), Y.write_shift(2, 20), 
                    Y.write_shift(2, Ae), Y.write_shift(2, de), Y.write_shift(4, 0), 
                    Y.write_shift(-4, Ye[te]), Y.write_shift(4, De.length), Y.write_shift(4, ue.content.length), 
                    Y.write_shift(2, ae.length), Y.write_shift(2, 0), Y.write_shift(2, 0), 
                    Y.write_shift(2, 0), Y.write_shift(2, 0), Y.write_shift(4, 0), 
                    Y.write_shift(4, tt), we += Y.l, ie.push(Y), we += ae.length, 
                    ie.push(ae), ++te;
                }
                return Y = M(22), Y.write_shift(4, 101010256), Y.write_shift(2, 0), 
                Y.write_shift(2, 0), Y.write_shift(2, te), Y.write_shift(2, te), 
                Y.write_shift(4, we), Y.write_shift(4, re), Y.write_shift(2, 0), 
                Ke([ Ke(fe), Ke(ie), Y ]);
            }(b, _);
            var k = function(X) {
                for (var se = 0, he = 0, fe = 0; fe < X.FileIndex.length; ++fe) {
                    var ie = X.FileIndex[fe];
                    if (ie.content) {
                        var Y = ie.content.length;
                        Y > 0 && (Y < 4096 ? se += Y + 63 >> 6 : he += Y + 511 >> 9);
                    }
                }
                for (var de = X.FullPaths.length + 3 >> 2, Ae = se + 127 >> 7, Pe = (se + 7 >> 3) + he + de + Ae, ee = Pe + 127 >> 7, re = ee <= 109 ? 0 : Math.ceil((ee - 109) / 127); Pe + ee + re + 127 >> 7 > ee; ) re = ++ee <= 109 ? 0 : Math.ceil((ee - 109) / 127);
                var te = [ 1, re, ee, Ae, de, he, se, 0 ];
                return X.FileIndex[0].size = se << 6, te[7] = (X.FileIndex[0].start = te[0] + te[1] + te[2] + te[3] + te[4] + te[5]) + (te[6] + 7 >> 3), 
                te;
            }(b), O = M(k[7] << 9), R = 0, L = 0;
            for (R = 0; R < 8; ++R) O.write_shift(1, m[R]);
            for (R = 0; R < 8; ++R) O.write_shift(2, 0);
            for (O.write_shift(2, 62), O.write_shift(2, 3), O.write_shift(2, 65534), 
            O.write_shift(2, 9), O.write_shift(2, 6), R = 0; R < 3; ++R) O.write_shift(2, 0);
            for (O.write_shift(4, 0), O.write_shift(4, k[2]), O.write_shift(4, k[0] + k[1] + k[2] + k[3] - 1), 
            O.write_shift(4, 0), O.write_shift(4, 4096), O.write_shift(4, k[3] ? k[0] + k[1] + k[2] - 1 : x), 
            O.write_shift(4, k[3]), O.write_shift(-4, k[1] ? k[0] - 1 : x), O.write_shift(4, k[1]), 
            R = 0; R < 109; ++R) O.write_shift(-4, R < k[2] ? k[1] + R : -1);
            if (k[1]) for (L = 0; L < k[1]; ++L) {
                for (;R < 236 + 127 * L; ++R) O.write_shift(-4, R < k[2] ? k[1] + R : -1);
                O.write_shift(-4, L === k[1] - 1 ? x : L + 1);
            }
            var U = function(X) {
                for (L += X; R < L - 1; ++R) O.write_shift(-4, R + 1);
                X && (++R, O.write_shift(-4, x));
            };
            for (L = R = 0, L += k[1]; R < L; ++R) O.write_shift(-4, v.DIFSECT);
            for (L += k[2]; R < L; ++R) O.write_shift(-4, v.FATSECT);
            U(k[3]), U(k[4]);
            for (var P = 0, H = 0, j = b.FileIndex[0]; P < b.FileIndex.length; ++P) (j = b.FileIndex[P]).content && ((H = j.content.length) < 4096 || (j.start = L, 
            U(H + 511 >> 9)));
            for (U(k[6] + 7 >> 3); 511 & O.l; ) O.write_shift(-4, v.ENDOFCHAIN);
            for (L = R = 0, P = 0; P < b.FileIndex.length; ++P) (j = b.FileIndex[P]).content && (!(H = j.content.length) || H >= 4096 || (j.start = L, 
            U(H + 63 >> 6)));
            for (;511 & O.l; ) O.write_shift(-4, v.ENDOFCHAIN);
            for (R = 0; R < k[4] << 2; ++R) {
                var Q = b.FullPaths[R];
                if (Q && Q.length !== 0) {
                    j = b.FileIndex[R], R === 0 && (j.start = j.size ? j.start - 1 : x);
                    var q = R === 0 && _.root || j.name;
                    if (H = 2 * (q.length + 1), O.write_shift(64, q, "utf16le"), 
                    O.write_shift(2, H), O.write_shift(1, j.type), O.write_shift(1, j.color), 
                    O.write_shift(-4, j.L), O.write_shift(-4, j.R), O.write_shift(-4, j.C), 
                    j.clsid) O.write_shift(16, j.clsid, "hex"); else for (P = 0; P < 4; ++P) O.write_shift(4, 0);
                    O.write_shift(4, j.state || 0), O.write_shift(4, 0), O.write_shift(4, 0), 
                    O.write_shift(4, 0), O.write_shift(4, 0), O.write_shift(4, j.start), 
                    O.write_shift(4, j.size), O.write_shift(4, 0);
                } else {
                    for (P = 0; P < 17; ++P) O.write_shift(4, 0);
                    for (P = 0; P < 3; ++P) O.write_shift(4, -1);
                    for (P = 0; P < 12; ++P) O.write_shift(4, 0);
                }
            }
            for (R = 1; R < b.FileIndex.length; ++R) if ((j = b.FileIndex[R]).size >= 4096) if (O.l = j.start + 1 << 9, 
            be && Buffer.isBuffer(j.content)) j.content.copy(O, O.l, 0, j.size), 
            O.l += j.size + 511 & -512; else {
                for (P = 0; P < j.size; ++P) O.write_shift(1, j.content[P]);
                for (;511 & P; ++P) O.write_shift(1, 0);
            }
            for (R = 1; R < b.FileIndex.length; ++R) if ((j = b.FileIndex[R]).size > 0 && j.size < 4096) if (be && Buffer.isBuffer(j.content)) j.content.copy(O, O.l, 0, j.size), 
            O.l += j.size + 63 & -64; else {
                for (P = 0; P < j.size; ++P) O.write_shift(1, j.content[P]);
                for (;63 & P; ++P) O.write_shift(1, 0);
            }
            if (be) O.l = O.length; else for (;O.l < O.length; ) O.write_shift(1, 0);
            return O;
        }
        r.version = "1.2.1";
        var g, E = 64, x = -2, S = "d0cf11e0a1b11ae1", m = [ 208, 207, 17, 224, 161, 177, 26, 225 ], w = "00000000000000000000000000000000", v = {
            MAXREGSECT: -6,
            DIFSECT: -4,
            FATSECT: -3,
            ENDOFCHAIN: x,
            FREESECT: -1,
            HEADER_SIGNATURE: S,
            HEADER_MINOR_VERSION: "3e00",
            MAXREGSID: -6,
            NOSTREAM: -1,
            HEADER_CLSID: w,
            EntryTypes: [ "unknown", "storage", "stream", "lockbytes", "property", "root" ]
        };
        function T(b) {
            for (var y = new Array(b.length), _ = 0; _ < b.length; ++_) y[_] = String.fromCharCode(b[_]);
            return y.join("");
        }
        function A(b) {
            return g ? g.deflateRawSync(b) : Ai(b);
        }
        for (var C = [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ], I = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258 ], D = [ 1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ], N, G, B = typeof Uint8Array < "u", J = B ? new Uint8Array(256) : [], ne = 0; ne < 256; ++ne) J[ne] = (G = void 0, 
        255 & ((G = 139536 & ((N = ne) << 1 | N << 11) | 558144 & (N << 5 | N << 15)) >> 16 | G >> 8 | G));
        function ce(b, y) {
            var _ = J[255 & b];
            return y <= 8 ? _ >>> 8 - y : (_ = _ << 8 | J[b >> 8 & 255], y <= 16 ? _ >>> 16 - y : (_ = _ << 8 | J[b >> 16 & 255]) >>> 24 - y);
        }
        function K(b, y) {
            var _ = 7 & y, k = y >>> 3;
            return (b[k] | (_ <= 6 ? 0 : b[k + 1] << 8)) >>> _ & 3;
        }
        function W(b, y) {
            var _ = 7 & y, k = y >>> 3;
            return (b[k] | (_ <= 5 ? 0 : b[k + 1] << 8)) >>> _ & 7;
        }
        function Se(b, y) {
            var _ = 7 & y, k = y >>> 3;
            return (b[k] | (_ <= 3 ? 0 : b[k + 1] << 8)) >>> _ & 31;
        }
        function ke(b, y) {
            var _ = 7 & y, k = y >>> 3;
            return (b[k] | (_ <= 1 ? 0 : b[k + 1] << 8)) >>> _ & 127;
        }
        function ge(b, y, _) {
            var k = 7 & y, O = y >>> 3, R = (1 << _) - 1, L = b[O] >>> k;
            return _ < 8 - k ? L & R : (L |= b[O + 1] << 8 - k, _ < 16 - k ? L & R : (L |= b[O + 2] << 16 - k, 
            _ < 24 - k ? L & R : (L |= b[O + 3] << 24 - k) & R));
        }
        function le(b, y, _) {
            var k = 7 & y, O = y >>> 3;
            return k <= 5 ? b[O] |= (7 & _) << k : (b[O] |= _ << k & 255, b[O + 1] = (7 & _) >> 8 - k), 
            y + 3;
        }
        function ve(b, y, _) {
            return _ = (1 & _) << (7 & y), b[y >>> 3] |= _, y + 1;
        }
        function Ie(b, y, _) {
            var k = y >>> 3;
            return _ <<= 7 & y, b[k] |= 255 & _, _ >>>= 8, b[k + 1] = _, y + 8;
        }
        function Fe(b, y, _) {
            var k = y >>> 3;
            return _ <<= 7 & y, b[k] |= 255 & _, _ >>>= 8, b[k + 1] = 255 & _, b[k + 2] = _ >>> 8, 
            y + 16;
        }
        function Ue(b, y) {
            var _ = b.length, k = 2 * _ > y ? 2 * _ : y + 5, O = 0;
            if (_ >= y) return b;
            if (be) {
                var R = aa(k);
                if (b.copy) b.copy(R); else for (;O < b.length; ++O) R[O] = b[O];
                return R;
            }
            if (B) {
                var L = new Uint8Array(k);
                if (L.set) L.set(b); else for (;O < _; ++O) L[O] = b[O];
                return L;
            }
            return b.length = k, b;
        }
        function Ee(b) {
            for (var y = new Array(b), _ = 0; _ < b; ++_) y[_] = 0;
            return y;
        }
        function je(b, y, _) {
            var k = 1, O = 0, R = 0, L = 0, U = 0, P = b.length, H = B ? new Uint16Array(32) : Ee(32);
            for (R = 0; R < 32; ++R) H[R] = 0;
            for (R = P; R < _; ++R) b[R] = 0;
            P = b.length;
            var j = B ? new Uint16Array(P) : Ee(P);
            for (R = 0; R < P; ++R) H[O = b[R]]++, k < O && (k = O), j[R] = 0;
            for (H[0] = 0, R = 1; R <= k; ++R) H[R + 16] = U = U + H[R - 1] << 1;
            for (R = 0; R < P; ++R) (U = b[R]) != 0 && (j[R] = H[U + 16]++);
            var Q = 0;
            for (R = 0; R < P; ++R) if ((Q = b[R]) != 0) for (U = ce(j[R], k) >> k - Q, 
            L = (1 << k + 4 - Q) - 1; L >= 0; --L) y[U | L << Q] = 15 & Q | R << 4;
            return k;
        }
        var wt = B ? new Uint16Array(512) : Ee(512), ht = B ? new Uint16Array(32) : Ee(32);
        if (!B) {
            for (var Xe = 0; Xe < 512; ++Xe) wt[Xe] = 0;
            for (Xe = 0; Xe < 32; ++Xe) ht[Xe] = 0;
        }
        (function() {
            for (var b = [], y = 0; y < 32; y++) b.push(5);
            je(b, ht, 32);
            var _ = [];
            for (y = 0; y <= 143; y++) _.push(8);
            for (;y <= 255; y++) _.push(9);
            for (;y <= 279; y++) _.push(7);
            for (;y <= 287; y++) _.push(8);
            je(_, wt, 288);
        })();
        var Yn = function() {
            for (var b = B ? new Uint8Array(32768) : [], y = 0, _ = 0; y < D.length - 1; ++y) for (;_ < D[y + 1]; ++_) b[_] = y;
            for (;_ < 32768; ++_) b[_] = 29;
            var k = B ? new Uint8Array(259) : [];
            for (y = 0, _ = 0; y < I.length - 1; ++y) for (;_ < I[y + 1]; ++_) k[_] = y;
            return function(O, R) {
                return O.length < 8 ? function(L, U) {
                    for (var P = 0; P < L.length; ) {
                        var H = Math.min(65535, L.length - P), j = P + H == L.length;
                        for (U.write_shift(1, +j), U.write_shift(2, H), U.write_shift(2, 65535 & ~H); H-- > 0; ) U[U.l++] = L[P++];
                    }
                    return U.l;
                }(O, R) : function(L, U) {
                    for (var P = 0, H = 0, j = B ? new Uint16Array(32768) : []; H < L.length; ) {
                        var Q = Math.min(65535, L.length - H);
                        if (Q < 10) {
                            for (7 & (P = le(U, P, +(H + Q == L.length))) && (P += 8 - (7 & P)), 
                            U.l = P / 8 | 0, U.write_shift(2, Q), U.write_shift(2, 65535 & ~Q); Q-- > 0; ) U[U.l++] = L[H++];
                            P = 8 * U.l;
                        } else {
                            P = le(U, P, +(H + Q == L.length) + 2);
                            for (var q = 0; Q-- > 0; ) {
                                var X = L[H], se = -1, he = 0;
                                if ((se = j[q = 32767 & (q << 5 ^ X)]) && ((se |= -32768 & H) > H && (se -= 32768), 
                                se < H)) for (;L[se + he] == L[H + he] && he < 250; ) ++he;
                                if (he > 2) {
                                    (X = k[he]) <= 22 ? P = Ie(U, P, J[X + 1] >> 1) - 1 : (Ie(U, P, 3), 
                                    Ie(U, P += 5, J[X - 23] >> 5), P += 3);
                                    var fe = X < 8 ? 0 : X - 4 >> 2;
                                    fe > 0 && (Fe(U, P, he - I[X]), P += fe), X = b[H - se], 
                                    P = Ie(U, P, J[X] >> 3), P -= 3;
                                    var ie = X < 4 ? 0 : X - 2 >> 1;
                                    ie > 0 && (Fe(U, P, H - se - D[X]), P += ie);
                                    for (var Y = 0; Y < he; ++Y) j[q] = 32767 & H, 
                                    q = 32767 & (q << 5 ^ L[H]), ++H;
                                    Q -= he - 1;
                                } else X <= 143 ? X += 48 : P = ve(U, P, 1), P = Ie(U, P, J[X]), 
                                j[q] = 32767 & H, ++H;
                            }
                            P = Ie(U, P, 0) - 1;
                        }
                    }
                    return U.l = (P + 7) / 8 | 0, U.l;
                }(O, R);
            };
        }();
        function Ai(b) {
            var y = M(50 + Math.floor(1.1 * b.length)), _ = Yn(b, y);
            return y.slice(0, _);
        }
        var xi = B ? new Uint16Array(32768) : Ee(32768), _i = B ? new Uint16Array(32768) : Ee(32768), yi = B ? new Uint16Array(128) : Ee(128), Oi = 1, Ri = 1;
        function kf(b, y) {
            var _ = Se(b, y) + 257, k = Se(b, y += 5) + 1, O = function(de, Ae) {
                var Pe = 7 & Ae, ee = Ae >>> 3;
                return (de[ee] | (Pe <= 4 ? 0 : de[ee + 1] << 8)) >>> Pe & 15;
            }(b, y += 5) + 4;
            y += 4;
            for (var R = 0, L = B ? new Uint8Array(19) : Ee(19), U = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], P = 1, H = B ? new Uint8Array(8) : Ee(8), j = B ? new Uint8Array(8) : Ee(8), Q = L.length, q = 0; q < O; ++q) L[C[q]] = R = W(b, y), 
            P < R && (P = R), H[R]++, y += 3;
            var X = 0;
            for (H[0] = 0, q = 1; q <= P; ++q) j[q] = X = X + H[q - 1] << 1;
            for (q = 0; q < Q; ++q) (X = L[q]) != 0 && (U[q] = j[X]++);
            var se = 0;
            for (q = 0; q < Q; ++q) if ((se = L[q]) != 0) {
                X = J[U[q]] >> 8 - se;
                for (var he = (1 << 7 - se) - 1; he >= 0; --he) yi[X | he << se] = 7 & se | q << 3;
            }
            var fe = [];
            for (P = 1; fe.length < _ + k; ) switch (y += 7 & (X = yi[ke(b, y)]), 
            X >>>= 3) {
              case 16:
                for (R = 3 + K(b, y), y += 2, X = fe[fe.length - 1]; R-- > 0; ) fe.push(X);
                break;

              case 17:
                for (R = 3 + W(b, y), y += 3; R-- > 0; ) fe.push(0);
                break;

              case 18:
                for (R = 11 + ke(b, y), y += 7; R-- > 0; ) fe.push(0);
                break;

              default:
                fe.push(X), P < X && (P = X);
            }
            var ie = fe.slice(0, _), Y = fe.slice(_);
            for (q = _; q < 286; ++q) ie[q] = 0;
            for (q = k; q < 30; ++q) Y[q] = 0;
            return Oi = je(ie, xi, 286), Ri = je(Y, _i, 30), y;
        }
        function Ci(b, y) {
            var _ = function(k, O) {
                if (k[0] == 3 && !(3 & k[1])) return [ $t(O), 2 ];
                for (var R = 0, L = 0, U = aa(O || 262144), P = 0, H = U.length >>> 0, j = 0, Q = 0; !(1 & L); ) if (L = W(k, R), 
                R += 3, L >>> 1 != 0) for (L >> 1 == 1 ? (j = 9, Q = 5) : (R = kf(k, R), 
                j = Oi, Q = Ri); ;) {
                    !O && H < P + 32767 && (H = (U = Ue(U, P + 32767)).length);
                    var q = ge(k, R, j), X = L >>> 1 == 1 ? wt[q] : xi[q];
                    if (R += 15 & X, (X >>>= 4) >>> 8 & 255) {
                        if (X == 256) break;
                        var se = (X -= 257) < 8 ? 0 : X - 4 >> 2;
                        se > 5 && (se = 0);
                        var he = P + I[X];
                        se > 0 && (he += ge(k, R, se), R += se), q = ge(k, R, Q), 
                        R += 15 & (X = L >>> 1 == 1 ? ht[q] : _i[q]);
                        var fe = (X >>>= 4) < 4 ? 0 : X - 2 >> 1, ie = D[X];
                        for (fe > 0 && (ie += ge(k, R, fe), R += fe), !O && H < he && (H = (U = Ue(U, he + 100)).length); P < he; ) U[P] = U[P - ie], 
                        ++P;
                    } else U[P++] = X;
                } else {
                    7 & R && (R += 8 - (7 & R));
                    var Y = k[R >>> 3] | k[1 + (R >>> 3)] << 8;
                    if (R += 32, Y > 0) for (!O && H < P + Y && (H = (U = Ue(U, P + Y)).length); Y-- > 0; ) U[P++] = k[R >>> 3], 
                    R += 8;
                }
                return O ? [ U, R + 7 >>> 3 ] : [ U.slice(0, P), R + 7 >>> 3 ];
            }(b.slice(b.l || 0), y);
            return b.l += _[1], _[0];
        }
        function ki(b, y) {
            if (!b) throw new Error(y);
        }
        function Ni(b, y) {
            var _ = b;
            dt(_, 0);
            var k = {
                FileIndex: [],
                FullPaths: []
            };
            h(k, {
                root: y.root
            });
            for (var O = _.length - 4; (_[O] != 80 || _[O + 1] != 75 || _[O + 2] != 5 || _[O + 3] != 6) && O >= 0; ) --O;
            _.l = O + 4, _.l += 4;
            var R = _.read_shift(2);
            _.l += 6;
            var L = _.read_shift(4);
            for (_.l = L, O = 0; O < R; ++O) {
                _.l += 20;
                var U = _.read_shift(4), P = _.read_shift(4), H = _.read_shift(2), j = _.read_shift(2), Q = _.read_shift(2);
                _.l += 8;
                var q = _.read_shift(4), X = s(_.slice(_.l + H, _.l + H + j));
                _.l += H + j + Q;
                var se = _.l;
                _.l = q + 4, Nf(_, U, P, k, X), _.l = se;
            }
            return k;
        }
        function Nf(b, y, _, k, O) {
            b.l += 2;
            var R = b.read_shift(2), L = b.read_shift(2), U = function(ie) {
                var Y = 65535 & ie.read_shift(2), de = 65535 & ie.read_shift(2), Ae = new Date(), Pe = 31 & de, ee = 15 & (de >>>= 5);
                de >>>= 4, Ae.setMilliseconds(0), Ae.setFullYear(de + 1980), Ae.setMonth(ee - 1), 
                Ae.setDate(Pe);
                var re = 31 & Y, te = 63 & (Y >>>= 5);
                return Y >>>= 6, Ae.setHours(Y), Ae.setMinutes(te), Ae.setSeconds(re << 1), 
                Ae;
            }(b);
            if (8257 & R) throw new Error("Unsupported ZIP encryption");
            b.read_shift(4);
            for (var P = b.read_shift(4), H = b.read_shift(4), j = b.read_shift(2), Q = b.read_shift(2), q = "", X = 0; X < j; ++X) q += String.fromCharCode(b[b.l++]);
            if (Q) {
                var se = s(b.slice(b.l, b.l + Q));
                (se[21589] || {}).mt && (U = se[21589].mt), ((O || {})[21589] || {}).mt && (U = O[21589].mt);
            }
            b.l += Q;
            var he = b.slice(b.l, b.l + P);
            switch (L) {
              case 8:
                he = function(ie, Y) {
                    if (!g) return Ci(ie, Y);
                    var de = new g.InflateRaw(), Ae = de._processChunk(ie.slice(ie.l), de._finishFlushFlag);
                    return ie.l += de.bytesRead, Ae;
                }(b, H);
                break;

              case 0:
                break;

              default:
                throw new Error("Unsupported ZIP Compression method " + L);
            }
            var fe = !1;
            8 & R && (b.read_shift(4) == 134695760 && (b.read_shift(4), fe = !0), 
            P = b.read_shift(4), H = b.read_shift(4)), P != y && ki(fe, "Bad compressed size: " + y + " != " + P), 
            H != _ && ki(fe, "Bad uncompressed size: " + _ + " != " + H), Jn(k, q, he, {
                unsafe: !0,
                mt: U
            });
        }
        var Kn = {
            htm: "text/html",
            xml: "text/xml",
            gif: "image/gif",
            jpg: "image/jpeg",
            png: "image/png",
            mso: "application/x-mso",
            thmx: "application/vnd.ms-officetheme",
            sh33tj5: "application/octet-stream"
        };
        function If(b, y) {
            if (b.ctype) return b.ctype;
            var _ = b.name || "", k = _.match(/\.([^\.]+)$/);
            return k && Kn[k[1]] || y && (k = (_ = y).match(/[\.\\]([^\.\\])+$/)) && Kn[k[1]] ? Kn[k[1]] : "application/octet-stream";
        }
        function Df(b) {
            for (var y = Tr(b), _ = [], k = 0; k < y.length; k += 76) _.push(y.slice(k, k + 76));
            return _.join(`\r
`) + `\r
`;
        }
        function Pf(b) {
            var y = b.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(H) {
                var j = H.charCodeAt(0).toString(16).toUpperCase();
                return "=" + (j.length == 1 ? "0" + j : j);
            });
            (y = y.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) == `
` && (y = "=0D" + y.slice(1));
            for (var _ = [], k = (y = y.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, `
=0A`).replace(/([^\r\n])\n/gm, "$1=0A")).split(`\r
`), O = 0; O < k.length; ++O) {
                var R = k[O];
                if (R.length != 0) for (var L = 0; L < R.length; ) {
                    var U = 76, P = R.slice(L, L + U);
                    P.charAt(U - 1) == "=" ? U-- : P.charAt(U - 2) == "=" ? U -= 2 : P.charAt(U - 3) == "=" && (U -= 3), 
                    P = R.slice(L, L + U), (L += U) < R.length && (P += "="), _.push(P);
                } else _.push("");
            }
            return _.join(`\r
`);
        }
        function Lf(b, y, _) {
            for (var k, O = "", R = "", L = "", U = 0; U < 10; ++U) {
                var P = y[U];
                if (!P || P.match(/^\s*$/)) break;
                var H = P.match(/^(.*?):\s*([^\s].*)$/);
                if (H) switch (H[1].toLowerCase()) {
                  case "content-location":
                    O = H[2].trim();
                    break;

                  case "content-type":
                    L = H[2].trim();
                    break;

                  case "content-transfer-encoding":
                    R = H[2].trim();
                }
            }
            switch (++U, R.toLowerCase()) {
              case "base64":
                k = Et(Nt(y.slice(U).join("")));
                break;

              case "quoted-printable":
                k = function(Q) {
                    for (var q = [], X = 0; X < Q.length; ++X) {
                        for (var se = Q[X]; X <= Q.length && se.charAt(se.length - 1) == "="; ) se = se.slice(0, se.length - 1) + Q[++X];
                        q.push(se);
                    }
                    for (var he = 0; he < q.length; ++he) q[he] = q[he].replace(/[=][0-9A-Fa-f]{2}/g, function(fe) {
                        return String.fromCharCode(parseInt(fe.slice(1), 16));
                    });
                    return Et(q.join(`\r
`));
                }(y.slice(U));
                break;

              default:
                throw new Error("Unsupported Content-Transfer-Encoding " + R);
            }
            var j = Jn(b, O.slice(_.length), k, {
                unsafe: !0
            });
            L && (j.ctype = L);
        }
        function Jn(b, y, _, k) {
            var O = k && k.unsafe;
            O || h(b);
            var R = !O && Oe.find(b, y);
            if (!R) {
                var L = b.FullPaths[0];
                y.slice(0, L.length) == L ? L = y : (L.slice(-1) != "/" && (L += "/"), 
                L = (L + y).replace("//", "/")), R = {
                    name: n(y),
                    type: 2
                }, b.FileIndex.push(R), b.FullPaths.push(L), O || Oe.utils.cfb_gc(b);
            }
            return R.content = _, R.size = _ ? _.length : 0, k && (k.CLSID && (R.clsid = k.CLSID), 
            k.mt && (R.mt = k.mt), k.ct && (R.ct = k.ct)), R;
        }
        return r.find = function(b, y) {
            var _ = b.FullPaths.map(function(P) {
                return P.toUpperCase();
            }), k = _.map(function(P) {
                var H = P.split("/");
                return H[H.length - (P.slice(-1) == "/" ? 2 : 1)];
            }), O = !1;
            y.charCodeAt(0) === 47 ? (O = !0, y = _[0].slice(0, -1) + y) : O = y.indexOf("/") !== -1;
            var R = y.toUpperCase(), L = O === !0 ? _.indexOf(R) : k.indexOf(R);
            if (L !== -1) return b.FileIndex[L];
            var U = !R.match(Br);
            for (R = R.replace(br, ""), U && (R = R.replace(Br, "!")), L = 0; L < _.length; ++L) if ((U ? _[L].replace(Br, "!") : _[L]).replace(br, "") == R || (U ? k[L].replace(Br, "!") : k[L]).replace(br, "") == R) return b.FileIndex[L];
            return null;
        }, r.read = function(b, y) {
            var _ = y && y.type;
            switch (_ || be && Buffer.isBuffer(b) && (_ = "buffer"), _ || "base64") {
              case "file":
                return function(k, O) {
                    return l(), i(e.readFileSync(k), O);
                }(b, y);

              case "base64":
                return i(Et(Nt(b)), y);

              case "binary":
                return i(Et(b), y);
            }
            return i(b, y);
        }, r.parse = i, r.write = function(b, y) {
            var _ = p(b, y);
            switch (y && y.type || "buffer") {
              case "file":
                return l(), e.writeFileSync(y.filename, _), _;

              case "binary":
                return typeof _ == "string" ? _ : T(_);

              case "base64":
                return Tr(typeof _ == "string" ? _ : T(_));

              case "buffer":
                if (be) return Buffer.isBuffer(_) ? _ : It(_);

              case "array":
                return typeof _ == "string" ? Et(_) : _;
            }
            return _;
        }, r.writeFile = function(b, y, _) {
            l();
            var k = p(b, _);
            e.writeFileSync(y, k);
        }, r.utils = {
            cfb_new: function(b) {
                var y = {};
                return h(y, b), y;
            },
            cfb_add: Jn,
            cfb_del: function(b, y) {
                h(b);
                var _ = Oe.find(b, y);
                if (_) {
                    for (var k = 0; k < b.FileIndex.length; ++k) if (b.FileIndex[k] == _) return b.FileIndex.splice(k, 1), 
                    b.FullPaths.splice(k, 1), !0;
                }
                return !1;
            },
            cfb_mov: function(b, y, _) {
                h(b);
                var k = Oe.find(b, y);
                if (k) {
                    for (var O = 0; O < b.FileIndex.length; ++O) if (b.FileIndex[O] == k) return b.FileIndex[O].name = n(_), 
                    b.FullPaths[O] = _, !0;
                }
                return !1;
            },
            cfb_gc: function(b) {
                d(b, !0);
            },
            ReadShift: Or,
            CheckField: Qa,
            prep_blob: dt,
            bconcat: Ke,
            use_zlib: function(b) {
                try {
                    var y = new b.InflateRaw();
                    if (y._processChunk(new Uint8Array([ 3, 0 ]), y._finishFlushFlag), 
                    !y.bytesRead) throw new Error("zlib does not expose bytesRead");
                    g = b;
                } catch {}
            },
            _deflateRaw: Ai,
            _inflateRaw: Ci,
            consts: v
        }, r;
    }();
    function po(e) {
        return typeof e == "string" ? Ur(e) : Array.isArray(e) ? function(r) {
            if (typeof Uint8Array > "u") throw new Error("Unsupported");
            return new Uint8Array(r);
        }(e) : e;
    }
    function Er(e, r, t) {
        if (typeof Deno < "u") {
            if (t && typeof r == "string") switch (t) {
              case "utf8":
                r = new TextEncoder(t).encode(r);
                break;

              case "binary":
                r = Ur(r);
                break;

              default:
                throw new Error("Unsupported encoding " + t);
            }
            return Deno.writeFileSync(e, r);
        }
        var n = t == "utf8" ? Lt(r) : r;
        if (typeof IE_SaveFile < "u") return IE_SaveFile(n, e);
        if (typeof Blob < "u") {
            var a = new Blob([ po(n) ], {
                type: "application/octet-stream"
            });
            if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(a, e);
            if (typeof saveAs < "u") return saveAs(a, e);
            if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
                var s = URL.createObjectURL(a);
                if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function") return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
                    URL.revokeObjectURL(s);
                }, 6e4), chrome.downloads.download({
                    url: s,
                    filename: e,
                    saveAs: !0
                });
                var l = document.createElement("a");
                if (l.download != null) return l.download = e, l.href = s, document.body.appendChild(l), 
                l.click(), document.body.removeChild(l), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
                    URL.revokeObjectURL(s);
                }, 6e4), s;
            }
        }
        if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
            var i = File(e);
            return i.open("w"), i.encoding = "binary", Array.isArray(r) && (r = wr(r)), 
            i.write(r), i.close(), r;
        } catch (o) {
            if (!o.message || !o.message.match(/onstruct/)) throw o;
        }
        throw new Error("cannot save file " + e);
    }
    function Je(e) {
        for (var r = Object.keys(e), t = [], n = 0; n < r.length; ++n) Object.prototype.hasOwnProperty.call(e, r[n]) && t.push(r[n]);
        return t;
    }
    function _a(e, r) {
        for (var t = [], n = Je(e), a = 0; a !== n.length; ++a) t[e[n[a]][r]] == null && (t[e[n[a]][r]] = n[a]);
        return t;
    }
    function Tn(e) {
        for (var r = [], t = Je(e), n = 0; n !== t.length; ++n) r[e[t[n]]] = t[n];
        return r;
    }
    function $r(e) {
        for (var r = [], t = Je(e), n = 0; n !== t.length; ++n) r[e[t[n]]] = parseInt(t[n], 10);
        return r;
    }
    var Xr = new Date(1899, 11, 30, 0, 0, 0);
    function lt(e, r) {
        var t = e.getTime();
        return r && (t -= 1263168e5), (t - (Xr.getTime() + 6e4 * (e.getTimezoneOffset() - Xr.getTimezoneOffset()))) / 864e5;
    }
    var ya = new Date(), mo = Xr.getTime() + 6e4 * (ya.getTimezoneOffset() - Xr.getTimezoneOffset()), Oa = ya.getTimezoneOffset();
    function Ra(e) {
        var r = new Date();
        return r.setTime(24 * e * 60 * 60 * 1e3 + mo), r.getTimezoneOffset() !== Oa && r.setTime(r.getTime() + 6e4 * (r.getTimezoneOffset() - Oa)), 
        r;
    }
    var Ca = new Date("2017-02-19T19:06:09.000Z"), ka = isNaN(Ca.getFullYear()) ? new Date("2/19/17") : Ca, go = ka.getFullYear() == 2017;
    function it(e, r) {
        var t = new Date(e);
        if (go) return r > 0 ? t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3) : r < 0 && t.setTime(t.getTime() - 60 * t.getTimezoneOffset() * 1e3), 
        t;
        if (e instanceof Date) return e;
        if (ka.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
            var n = t.getFullYear();
            return e.indexOf("" + n) > -1 || t.setFullYear(t.getFullYear() + 100), 
            t;
        }
        var a = e.match(/\d+/g) || [ "2017", "2", "19", "0", "0", "0" ], s = new Date(+a[0], +a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
        return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - 60 * s.getTimezoneOffset() * 1e3)), 
        s;
    }
    function Yr(e, r) {
        if (be && Buffer.isBuffer(e)) {
            if (r) {
                if (e[0] == 255 && e[1] == 254) return Lt(e.slice(2).toString("utf16le"));
                if (e[1] == 254 && e[2] == 255) return Lt(function(s) {
                    for (var l = [], i = 0; i < s.length >> 1; ++i) l[i] = String.fromCharCode(s.charCodeAt(2 * i + 1) + (s.charCodeAt(2 * i) << 8));
                    return l.join("");
                }(e.slice(2).toString("binary")));
            }
            return e.toString("binary");
        }
        if (typeof TextDecoder < "u") try {
            if (r) {
                if (e[0] == 255 && e[1] == 254) return Lt(new TextDecoder("utf-16le").decode(e.slice(2)));
                if (e[0] == 254 && e[1] == 255) return Lt(new TextDecoder("utf-16be").decode(e.slice(2)));
            }
            var t = {
                "€": "",
                "‚": "",
                "ƒ": "",
                "„": "",
                "…": "",
                "†": "",
                "‡": "",
                "ˆ": "",
                "‰": "",
                "Š": "",
                "‹": "",
                "Œ": "",
                "Ž": "",
                "‘": "",
                "’": "",
                "“": "",
                "”": "",
                "•": "",
                "–": "",
                "—": "",
                "˜": "",
                "™": "",
                "š": "",
                "›": "",
                "œ": "",
                "ž": "",
                "Ÿ": ""
            };
            return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(s) {
                return t[s] || s;
            });
        } catch {}
        for (var n = [], a = 0; a != e.length; ++a) n.push(String.fromCharCode(e[a]));
        return n.join("");
    }
    function ft(e) {
        if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
        if (typeof e != "object" || e == null) return e;
        if (e instanceof Date) return new Date(e.getTime());
        var r = {};
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = ft(e[t]));
        return r;
    }
    function Me(e, r) {
        for (var t = ""; t.length < r; ) t += e;
        return t;
    }
    function Pt(e) {
        var r = Number(e);
        if (!isNaN(r)) return isFinite(r) ? r : NaN;
        if (!/\d/.test(e)) return r;
        var t = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
            return t *= 100, "";
        });
        return isNaN(r = Number(n)) ? (n = n.replace(/[(](.*)[)]/, function(a, s) {
            return t = -t, s;
        }), isNaN(r = Number(n)) ? r : r / t) : r / t;
    }
    var vo = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december" ];
    function Sr(e) {
        var r = new Date(e), t = new Date(NaN), n = r.getYear(), a = r.getMonth(), s = r.getDate();
        if (isNaN(s)) return t;
        var l = e.toLowerCase();
        if (l.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
            if ((l = l.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && vo.indexOf(l) == -1) return t;
        } else if (l.match(/[a-z]/)) return t;
        return n < 0 || n > 8099 ? t : (a > 0 || s > 1) && n != 101 ? r : e.match(/[^-0-9:,\/\\]/) ? t : r;
    }
    function pe(e, r, t) {
        if (e.FullPaths) {
            var n;
            if (typeof t == "string") return n = be ? It(t) : function(a) {
                for (var s = [], l = 0, i = a.length + 250, o = $t(a.length + 255), f = 0; f < a.length; ++f) {
                    var u = a.charCodeAt(f);
                    if (u < 128) o[l++] = u; else if (u < 2048) o[l++] = 192 | u >> 6 & 31, 
                    o[l++] = 128 | 63 & u; else if (u >= 55296 && u < 57344) {
                        u = 64 + (1023 & u);
                        var c = 1023 & a.charCodeAt(++f);
                        o[l++] = 240 | u >> 8 & 7, o[l++] = 128 | u >> 2 & 63, o[l++] = 128 | c >> 6 & 15 | (3 & u) << 4, 
                        o[l++] = 128 | 63 & c;
                    } else o[l++] = 224 | u >> 12 & 15, o[l++] = 128 | u >> 6 & 63, 
                    o[l++] = 128 | 63 & u;
                    l > i && (s.push(o.slice(0, l)), l = 0, o = $t(65535), i = 65530);
                }
                return s.push(o.slice(0, l)), Ke(s);
            }(t), Oe.utils.cfb_add(e, r, n);
            Oe.utils.cfb_add(e, r, t);
        } else e.file(r, t);
    }
    function wn() {
        return Oe.utils.cfb_new();
    }
    var Be = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, bn = Tn({
        "&quot;": '"',
        "&apos;": "'",
        "&gt;": ">",
        "&lt;": "<",
        "&amp;": "&"
    }), En = /[&<>'"]/g, To = /[\u0000-\u0008\u000b-\u001f]/g;
    function xe(e) {
        return (e + "").replace(En, function(r) {
            return bn[r];
        }).replace(To, function(r) {
            return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
        });
    }
    function Na(e) {
        return xe(e).replace(/ /g, "_x0020_");
    }
    var Ia = /[\u0000-\u001f]/g;
    function Sn(e) {
        for (var r = "", t = 0, n = 0, a = 0, s = 0, l = 0, i = 0; t < e.length; ) (n = e.charCodeAt(t++)) < 128 ? r += String.fromCharCode(n) : (a = e.charCodeAt(t++), 
        n > 191 && n < 224 ? (l = (31 & n) << 6, l |= 63 & a, r += String.fromCharCode(l)) : (s = e.charCodeAt(t++), 
        n < 240 ? r += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & s) : (i = ((7 & n) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & (l = e.charCodeAt(t++))) - 65536, 
        r += String.fromCharCode(55296 + (i >>> 10 & 1023)), r += String.fromCharCode(56320 + (1023 & i)))));
        return r;
    }
    function Da(e) {
        var r, t, n, a = $t(2 * e.length), s = 1, l = 0, i = 0;
        for (t = 0; t < e.length; t += s) s = 1, (n = e.charCodeAt(t)) < 128 ? r = n : n < 224 ? (r = 64 * (31 & n) + (63 & e.charCodeAt(t + 1)), 
        s = 2) : n < 240 ? (r = 4096 * (15 & n) + 64 * (63 & e.charCodeAt(t + 1)) + (63 & e.charCodeAt(t + 2)), 
        s = 3) : (s = 4, r = 262144 * (7 & n) + 4096 * (63 & e.charCodeAt(t + 1)) + 64 * (63 & e.charCodeAt(t + 2)) + (63 & e.charCodeAt(t + 3)), 
        i = 55296 + ((r -= 65536) >>> 10 & 1023), r = 56320 + (1023 & r)), i !== 0 && (a[l++] = 255 & i, 
        a[l++] = i >>> 8, i = 0), a[l++] = r % 256, a[l++] = r >>> 8;
        return a.slice(0, l).toString("ucs2");
    }
    function Pa(e) {
        return It(e, "binary").toString("utf8");
    }
    var Kr = "foo bar bazâð£", Ar = be && (Pa(Kr) == Sn(Kr) && Pa || Da(Kr) == Sn(Kr) && Da) || Sn, Lt = be ? function(e) {
        return It(e, "utf8").toString("binary");
    } : function(e) {
        for (var r = [], t = 0, n = 0, a = 0; t < e.length; ) switch (n = e.charCodeAt(t++), 
        !0) {
          case n < 128:
            r.push(String.fromCharCode(n));
            break;

          case n < 2048:
            r.push(String.fromCharCode(192 + (n >> 6))), r.push(String.fromCharCode(128 + (63 & n)));
            break;

          case n >= 55296 && n < 57344:
            n -= 55296, a = e.charCodeAt(t++) - 56320 + (n << 10), r.push(String.fromCharCode(240 + (a >> 18 & 7))), 
            r.push(String.fromCharCode(144 + (a >> 12 & 63))), r.push(String.fromCharCode(128 + (a >> 6 & 63))), 
            r.push(String.fromCharCode(128 + (63 & a)));
            break;

          default:
            r.push(String.fromCharCode(224 + (n >> 12))), r.push(String.fromCharCode(128 + (n >> 6 & 63))), 
            r.push(String.fromCharCode(128 + (63 & n)));
        }
        return r.join("");
    }, wo = function() {
        var e = [ [ "nbsp", " " ], [ "middot", "·" ], [ "quot", '"' ], [ "apos", "'" ], [ "gt", ">" ], [ "lt", "<" ], [ "amp", "&" ] ].map(function(r) {
            return [ new RegExp("&" + r[0] + ";", "ig"), r[1] ];
        });
        return function(r) {
            for (var t = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n) t = t.replace(e[n][0], e[n][1]);
            return t;
        };
    }(), La = /(^\s|\s$|\n)/;
    function Ze(e, r) {
        return "<" + e + (r.match(La) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
    }
    function xr(e) {
        return Je(e).map(function(r) {
            return " " + r + '="' + e[r] + '"';
        }).join("");
    }
    function V(e, r, t) {
        return "<" + e + (t != null ? xr(t) : "") + (r != null ? (r.match(La) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
    }
    function An(e, r) {
        try {
            return e.toISOString().replace(/\.\d*/, "");
        } catch (t) {
            if (r) throw t;
        }
        return "";
    }
    var Ve = {
        CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
        CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
        EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
        CT: "http://schemas.openxmlformats.org/package/2006/content-types",
        RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
        TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
        dc: "http://purl.org/dc/elements/1.1/",
        dcterms: "http://purl.org/dc/terms/",
        dcmitype: "http://purl.org/dc/dcmitype/",
        mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
        r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
        vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
        xsi: "http://www.w3.org/2001/XMLSchema-instance",
        xsd: "http://www.w3.org/2001/XMLSchema"
    }, ar = [ "http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2" ], ut = {
        o: "urn:schemas-microsoft-com:office:office",
        x: "urn:schemas-microsoft-com:office:excel",
        ss: "urn:schemas-microsoft-com:office:spreadsheet",
        dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
        mv: "http://macVmlSchemaUri",
        v: "urn:schemas-microsoft-com:vml",
        html: "http://www.w3.org/TR/REC-html40"
    }, Ma = function(e) {
        for (var r = [], t = 0; t < e[0].length; ++t) if (e[0][t]) for (var n = 0, a = e[0][t].length; n < a; n += 10240) r.push.apply(r, e[0][t].slice(n, n + 10240));
        return r;
    }, Fa = be ? function(e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
            return Buffer.isBuffer(r) ? r : It(r);
        })) : Ma(e);
    } : Ma, Ua = function(e, r, t) {
        for (var n = [], a = r; a < t; a += 2) n.push(String.fromCharCode(yr(e, a)));
        return n.join("").replace(br, "");
    }, xn = be ? function(e, r, t) {
        return Buffer.isBuffer(e) ? e.toString("utf16le", r, t).replace(br, "") : Ua(e, r, t);
    } : Ua, Ba = function(e, r, t) {
        for (var n = [], a = r; a < r + t; ++a) n.push(("0" + e[a].toString(16)).slice(-2));
        return n.join("");
    }, Ha = be ? function(e, r, t) {
        return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Ba(e, r, t);
    } : Ba, Wa = function(e, r, t) {
        for (var n = [], a = r; a < t; a++) n.push(String.fromCharCode(sr(e, a)));
        return n.join("");
    }, _r = be ? function(e, r, t) {
        return Buffer.isBuffer(e) ? e.toString("utf8", r, t) : Wa(e, r, t);
    } : Wa, Ga = function(e, r) {
        var t = pt(e, r);
        return t > 0 ? _r(e, r + 4, r + 4 + t - 1) : "";
    }, ja = Ga, Va = function(e, r) {
        var t = pt(e, r);
        return t > 0 ? _r(e, r + 4, r + 4 + t - 1) : "";
    }, za = Va, $a = function(e, r) {
        var t = 2 * pt(e, r);
        return t > 0 ? _r(e, r + 4, r + 4 + t - 1) : "";
    }, Xa = $a, Ya = function(e, r) {
        var t = pt(e, r);
        return t > 0 ? xn(e, r + 4, r + 4 + t) : "";
    }, Ka = Ya, Ja = function(e, r) {
        var t = pt(e, r);
        return t > 0 ? _r(e, r + 4, r + 4 + t) : "";
    }, Za = Ja, qa = function(e, r) {
        return function(t, n) {
            for (var a = 1 - 2 * (t[n + 7] >>> 7), s = ((127 & t[n + 7]) << 4) + (t[n + 6] >>> 4 & 15), l = 15 & t[n + 6], i = 5; i >= 0; --i) l = 256 * l + t[n + i];
            return s == 2047 ? l == 0 ? a * (1 / 0) : NaN : (s == 0 ? s = -1022 : (s -= 1023, 
            l += Math.pow(2, 52)), a * Math.pow(2, s - 52) * l);
        }(e, r);
    }, Jr = qa, _n = function(e) {
        return Array.isArray(e) || typeof Uint8Array < "u" && e instanceof Uint8Array;
    };
    be && (ja = function(e, r) {
        if (!Buffer.isBuffer(e)) return Ga(e, r);
        var t = e.readUInt32LE(r);
        return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
    }, za = function(e, r) {
        if (!Buffer.isBuffer(e)) return Va(e, r);
        var t = e.readUInt32LE(r);
        return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
    }, Xa = function(e, r) {
        if (!Buffer.isBuffer(e)) return $a(e, r);
        var t = 2 * e.readUInt32LE(r);
        return e.toString("utf16le", r + 4, r + 4 + t - 1);
    }, Ka = function(e, r) {
        if (!Buffer.isBuffer(e)) return Ya(e, r);
        var t = e.readUInt32LE(r);
        return e.toString("utf16le", r + 4, r + 4 + t);
    }, Za = function(e, r) {
        if (!Buffer.isBuffer(e)) return Ja(e, r);
        var t = e.readUInt32LE(r);
        return e.toString("utf8", r + 4, r + 4 + t);
    }, Jr = function(e, r) {
        return Buffer.isBuffer(e) ? e.readDoubleLE(r) : qa(e, r);
    }, _n = function(e) {
        return Buffer.isBuffer(e) || Array.isArray(e) || typeof Uint8Array < "u" && e instanceof Uint8Array;
    });
    var sr = function(e, r) {
        return e[r];
    }, yr = function(e, r) {
        return 256 * e[r + 1] + e[r];
    }, bo = function(e, r) {
        var t = 256 * e[r + 1] + e[r];
        return t < 32768 ? t : -1 * (65535 - t + 1);
    }, pt = function(e, r) {
        return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
    }, Xt = function(e, r) {
        return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
    }, Eo = function(e, r) {
        return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
    };
    function Or(e, r) {
        var t, n, a, s, l, i, o = "", f = [];
        switch (r) {
          case "dbcs":
            if (i = this.l, be && Buffer.isBuffer(this)) o = this.slice(this.l, this.l + 2 * e).toString("utf16le"); else for (l = 0; l < e; ++l) o += String.fromCharCode(yr(this, i)), 
            i += 2;
            e *= 2;
            break;

          case "utf8":
            o = _r(this, this.l, this.l + e);
            break;

          case "utf16le":
            e *= 2, o = xn(this, this.l, this.l + e);
            break;

          case "wstr":
            return Or.call(this, e, "dbcs");

          case "lpstr-ansi":
            o = ja(this, this.l), e = 4 + pt(this, this.l);
            break;

          case "lpstr-cp":
            o = za(this, this.l), e = 4 + pt(this, this.l);
            break;

          case "lpwstr":
            o = Xa(this, this.l), e = 4 + 2 * pt(this, this.l);
            break;

          case "lpp4":
            e = 4 + pt(this, this.l), o = Ka(this, this.l), 2 & e && (e += 2);
            break;

          case "8lpp4":
            e = 4 + pt(this, this.l), o = Za(this, this.l), 3 & e && (e += 4 - (3 & e));
            break;

          case "cstr":
            for (e = 0, o = ""; (a = sr(this, this.l + e++)) !== 0; ) f.push(Fr(a));
            o = f.join("");
            break;

          case "_wstr":
            for (e = 0, o = ""; (a = yr(this, this.l + e)) !== 0; ) f.push(Fr(a)), 
            e += 2;
            e += 2, o = f.join("");
            break;

          case "dbcs-cont":
            for (o = "", i = this.l, l = 0; l < e; ++l) {
                if (this.lens && this.lens.indexOf(i) !== -1) return a = sr(this, i), 
                this.l = i + 1, s = Or.call(this, e - l, a ? "dbcs-cont" : "sbcs-cont"), 
                f.join("") + s;
                f.push(Fr(yr(this, i))), i += 2;
            }
            o = f.join(""), e *= 2;
            break;

          case "cpstr":
          case "sbcs-cont":
            for (o = "", i = this.l, l = 0; l != e; ++l) {
                if (this.lens && this.lens.indexOf(i) !== -1) return a = sr(this, i), 
                this.l = i + 1, s = Or.call(this, e - l, a ? "dbcs-cont" : "sbcs-cont"), 
                f.join("") + s;
                f.push(Fr(sr(this, i))), i += 1;
            }
            o = f.join("");
            break;

          default:
            switch (e) {
              case 1:
                return t = sr(this, this.l), this.l++, t;

              case 2:
                return t = (r === "i" ? bo : yr)(this, this.l), this.l += 2, t;

              case 4:
              case -4:
                return r !== "i" && 128 & this[this.l + 3] ? (n = pt(this, this.l), 
                this.l += 4, n) : (t = (e > 0 ? Xt : Eo)(this, this.l), this.l += 4, 
                t);

              case 8:
              case -8:
                if (r === "f") return n = e == 8 ? Jr(this, this.l) : Jr([ this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0] ], 0), 
                this.l += 8, n;
                e = 8;

              case 16:
                o = Ha(this, this.l, e);
            }
        }
        return this.l += e, o;
    }
    var So = function(e, r, t) {
        e[t] = 255 & r, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
    }, Ao = function(e, r, t) {
        e[t] = 255 & r, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
    }, xo = function(e, r, t) {
        e[t] = 255 & r, e[t + 1] = r >>> 8 & 255;
    };
    function _o(e, r, t) {
        var n = 0, a = 0;
        if (t === "dbcs") {
            for (a = 0; a != r.length; ++a) xo(this, r.charCodeAt(a), this.l + 2 * a);
            n = 2 * r.length;
        } else if (t === "sbcs") {
            for (r = r.replace(/[^\x00-\x7F]/g, "_"), a = 0; a != r.length; ++a) this[this.l + a] = 255 & r.charCodeAt(a);
            n = r.length;
        } else {
            if (t === "hex") {
                for (;a < e; ++a) this[this.l++] = parseInt(r.slice(2 * a, 2 * a + 2), 16) || 0;
                return this;
            }
            if (t === "utf16le") {
                var s = Math.min(this.l + e, this.length);
                for (a = 0; a < Math.min(r.length, e); ++a) {
                    var l = r.charCodeAt(a);
                    this[this.l++] = 255 & l, this[this.l++] = l >> 8;
                }
                for (;this.l < s; ) this[this.l++] = 0;
                return this;
            }
            switch (e) {
              case 1:
                n = 1, this[this.l] = 255 & r;
                break;

              case 2:
                n = 2, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r;
                break;

              case 3:
                n = 3, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r, 
                r >>>= 8, this[this.l + 2] = 255 & r;
                break;

              case 4:
                n = 4, So(this, r, this.l);
                break;

              case 8:
                if (n = 8, t === "f") {
                    (function(i, o, f) {
                        var u = (o < 0 || 1 / o == -1 / 0 ? 1 : 0) << 7, c = 0, h = 0, d = u ? -o : o;
                        isFinite(d) ? d == 0 ? c = h = 0 : (c = Math.floor(Math.log(d) / Math.LN2), 
                        h = d * Math.pow(2, 52 - c), c <= -1023 && (!isFinite(h) || h < Math.pow(2, 52)) ? c = -1022 : (h -= Math.pow(2, 52), 
                        c += 1023)) : (c = 2047, h = isNaN(o) ? 26985 : 0);
                        for (var p = 0; p <= 5; ++p, h /= 256) i[f + p] = 255 & h;
                        i[f + 6] = (15 & c) << 4 | 15 & h, i[f + 7] = c >> 4 | u;
                    })(this, r, this.l);
                    break;
                }

              case 16:
                break;

              case -4:
                n = 4, Ao(this, r, this.l);
            }
        }
        return this.l += n, this;
    }
    function Qa(e, r) {
        var t = Ha(this, this.l, e.length >> 1);
        if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
        this.l += e.length >> 1;
    }
    function dt(e, r) {
        e.l = r, e.read_shift = Or, e.chk = Qa, e.write_shift = _o;
    }
    function Ot(e, r) {
        e.l += r;
    }
    function M(e) {
        var r = $t(e);
        return dt(r, 0), r;
    }
    function ct() {
        var e = [], r = be ? 256 : 2048, t = function(l) {
            var i = M(l);
            return dt(i, 0), i;
        }, n = t(r), a = function() {
            n && (n.length > n.l && ((n = n.slice(0, n.l)).l = n.length), n.length > 0 && e.push(n), 
            n = null);
        }, s = function(l) {
            return n && l < n.length - n.l ? n : (a(), n = t(Math.max(l + 1, r)));
        };
        return {
            next: s,
            push: function(l) {
                a(), (n = l).l == null && (n.l = n.length), s(r);
            },
            end: function() {
                return a(), Ke(e);
            },
            _bufs: e
        };
    }
    function F(e, r, t, n) {
        var a, s = +r;
        if (!isNaN(s)) {
            n || (n = sf[s].p || (t || []).length || 0), a = 1 + (s >= 128 ? 1 : 0) + 1, 
            n >= 128 && ++a, n >= 16384 && ++a, n >= 2097152 && ++a;
            var l = e.next(a);
            s <= 127 ? l.write_shift(1, s) : (l.write_shift(1, 128 + (127 & s)), 
            l.write_shift(1, s >> 7));
            for (var i = 0; i != 4; ++i) {
                if (!(n >= 128)) {
                    l.write_shift(1, n);
                    break;
                }
                l.write_shift(1, 128 + (127 & n)), n >>= 7;
            }
            n > 0 && _n(t) && e.push(t);
        }
    }
    function Rr(e, r, t) {
        var n = ft(e);
        if (r.s ? (n.cRel && (n.c += r.s.c), n.rRel && (n.r += r.s.r)) : (n.cRel && (n.c += r.c), 
        n.rRel && (n.r += r.r)), !t || t.biff < 12) {
            for (;n.c >= 256; ) n.c -= 256;
            for (;n.r >= 65536; ) n.r -= 65536;
        }
        return n;
    }
    function es(e, r, t) {
        var n = ft(e);
        return n.s = Rr(n.s, r.s, t), n.e = Rr(n.e, r.s, t), n;
    }
    function Cr(e, r) {
        if (e.cRel && e.c < 0) for (e = ft(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
        if (e.rRel && e.r < 0) for (e = ft(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
        var t = Re(e);
        return e.cRel || e.cRel == null || (t = t.replace(/^([A-Z])/, "$$$1")), 
        e.rRel || e.rRel == null || (t = function(n) {
            return n.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
        }(t)), t;
    }
    function yn(e, r) {
        return e.s.r != 0 || e.s.rRel || e.e.r != (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) || e.e.rRel ? e.s.c != 0 || e.s.cRel || e.e.c != (r.biff >= 12 ? 16383 : 255) || e.e.cRel ? Cr(e.s, r.biff) + ":" + Cr(e.e, r.biff) : (e.s.rRel ? "" : "$") + qe(e.s.r) + ":" + (e.e.rRel ? "" : "$") + qe(e.e.r) : (e.s.cRel ? "" : "$") + rt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + rt(e.e.c);
    }
    function On(e) {
        return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1;
    }
    function qe(e) {
        return "" + (e + 1);
    }
    function Rn(e) {
        for (var r = e.replace(/^\$([A-Z])/, "$1"), t = 0, n = 0; n !== r.length; ++n) t = 26 * t + r.charCodeAt(n) - 64;
        return t - 1;
    }
    function rt(e) {
        if (e < 0) throw new Error("invalid column " + e);
        var r = "";
        for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
        return r;
    }
    function ze(e) {
        for (var r = 0, t = 0, n = 0; n < e.length; ++n) {
            var a = e.charCodeAt(n);
            a >= 48 && a <= 57 ? r = 10 * r + (a - 48) : a >= 65 && a <= 90 && (t = 26 * t + (a - 64));
        }
        return {
            c: t - 1,
            r: r - 1
        };
    }
    function Re(e) {
        for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
        return t + (e.r + 1);
    }
    function mt(e) {
        var r = e.indexOf(":");
        return r == -1 ? {
            s: ze(e),
            e: ze(e)
        } : {
            s: ze(e.slice(0, r)),
            e: ze(e.slice(r + 1))
        };
    }
    function We(e, r) {
        return r === void 0 || typeof r == "number" ? We(e.s, e.e) : (typeof e != "string" && (e = Re(e)), 
        typeof r != "string" && (r = Re(r)), e == r ? e : e + ":" + r);
    }
    function Ne(e) {
        var r = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        }, t = 0, n = 0, a = 0, s = e.length;
        for (t = 0; n < s && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) t = 26 * t + a;
        for (r.s.c = --t, t = 0; n < s && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) t = 10 * t + a;
        if (r.s.r = --t, n === s || a != 10) return r.e.c = r.s.c, r.e.r = r.s.r, 
        r;
        for (++n, t = 0; n != s && !((a = e.charCodeAt(n) - 64) < 1 || a > 26); ++n) t = 26 * t + a;
        for (r.e.c = --t, t = 0; n != s && !((a = e.charCodeAt(n) - 48) < 0 || a > 9); ++n) t = 10 * t + a;
        return r.e.r = --t, r;
    }
    function yo(e, r) {
        var t = e.t == "d" && r instanceof Date;
        if (e.z != null) try {
            return e.w = Ht(e.z, t ? lt(r) : r);
        } catch {}
        try {
            return e.w = Ht((e.XF || {}).numFmtId || (t ? 14 : 0), t ? lt(r) : r);
        } catch {
            return "" + r;
        }
    }
    function Mt(e, r, t) {
        return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), 
        e.t == "e" ? kr[e.v] || e.v : yo(e, r ?? e.v));
    }
    function Yt(e, r) {
        var t = r && r.sheet ? r.sheet : "Sheet1", n = {};
        return n[t] = e, {
            SheetNames: [ t ],
            Sheets: n
        };
    }
    function ts(e, r, t) {
        var n = t || {}, a = e ? Array.isArray(e) : n.dense, s = e || (a ? [] : {}), l = 0, i = 0;
        if (s && n.origin != null) {
            if (typeof n.origin == "number") l = n.origin; else {
                var o = typeof n.origin == "string" ? ze(n.origin) : n.origin;
                l = o.r, i = o.c;
            }
            s["!ref"] || (s["!ref"] = "A1:A1");
        }
        var f = {
            s: {
                c: 1e7,
                r: 1e7
            },
            e: {
                c: 0,
                r: 0
            }
        };
        if (s["!ref"]) {
            var u = Ne(s["!ref"]);
            f.s.c = u.s.c, f.s.r = u.s.r, f.e.c = Math.max(f.e.c, u.e.c), f.e.r = Math.max(f.e.r, u.e.r), 
            l == -1 && (f.e.r = l = u.e.r + 1);
        }
        for (var c = 0; c != r.length; ++c) if (r[c]) {
            if (!Array.isArray(r[c])) throw new Error("aoa_to_sheet expects an array of arrays");
            for (var h = 0; h != r[c].length; ++h) if (r[c][h] !== void 0) {
                var d = {
                    v: r[c][h]
                }, p = l + c, g = i + h;
                if (f.s.r > p && (f.s.r = p), f.s.c > g && (f.s.c = g), f.e.r < p && (f.e.r = p), 
                f.e.c < g && (f.e.c = g), !r[c][h] || typeof r[c][h] != "object" || Array.isArray(r[c][h]) || r[c][h] instanceof Date) if (Array.isArray(d.v) && (d.f = r[c][h][1], 
                d.v = d.v[0]), d.v === null) if (d.f) d.t = "n"; else if (n.nullError) d.t = "e", 
                d.v = 0; else {
                    if (!n.sheetStubs) continue;
                    d.t = "z";
                } else typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || Le[14], 
                n.cellDates ? (d.t = "d", d.w = Ht(d.z, lt(d.v))) : (d.t = "n", 
                d.v = lt(d.v), d.w = Ht(d.z, d.v))) : d.t = "s"; else d = r[c][h];
                if (a) s[p] || (s[p] = []), s[p][g] && s[p][g].z && (d.z = s[p][g].z), 
                s[p][g] = d; else {
                    var E = Re({
                        c: g,
                        r: p
                    });
                    s[E] && s[E].z && (d.z = s[E].z), s[E] = d;
                }
            }
        }
        return f.s.c < 1e7 && (s["!ref"] = We(f)), s;
    }
    function ir(e, r) {
        return ts(null, e, r);
    }
    function At(e, r) {
        return r || (r = M(4)), r.write_shift(4, e), r;
    }
    function nt(e) {
        var r = e.read_shift(4);
        return r === 0 ? "" : e.read_shift(r, "dbcs");
    }
    function $e(e, r) {
        var t = !1;
        return r == null && (t = !0, r = M(4 + 2 * e.length)), r.write_shift(4, e.length), 
        e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
    }
    function Oo(e) {
        return {
            ich: e.read_shift(2),
            ifnt: e.read_shift(2)
        };
    }
    function Cn(e, r) {
        var t = e.l, n = e.read_shift(1), a = nt(e), s = [], l = {
            t: a,
            h: a
        };
        if (1 & n) {
            for (var i = e.read_shift(4), o = 0; o != i; ++o) s.push(Oo(e));
            l.r = s;
        } else l.r = [ {
            ich: 0,
            ifnt: 0
        } ];
        return e.l = t + r, l;
    }
    var Ro = Cn;
    function Co(e, r) {
        var t = !1;
        return r == null && (t = !0, r = M(23 + 4 * e.t.length)), r.write_shift(1, 1), 
        $e(e.t, r), r.write_shift(4, 1), function(n, a) {
            a || (a = M(4)), a.write_shift(2, n.ich || 0), a.write_shift(2, n.ifnt || 0);
        }({
            ich: 0,
            ifnt: 0
        }, r), t ? r.slice(0, r.l) : r;
    }
    function vt(e) {
        var r = e.read_shift(4), t = e.read_shift(2);
        return t += e.read_shift(1) << 16, e.l++, {
            c: r,
            iStyleRef: t
        };
    }
    function Kt(e, r) {
        return r == null && (r = M(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), 
        r.write_shift(1, 0), r;
    }
    function Jt(e) {
        var r = e.read_shift(2);
        return r += e.read_shift(1) << 16, e.l++, {
            c: -1,
            iStyleRef: r
        };
    }
    function Zt(e, r) {
        return r == null && (r = M(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), 
        r;
    }
    var ko = nt, rs = $e;
    function kn(e) {
        var r = e.read_shift(4);
        return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
    }
    function Zr(e, r) {
        var t = !1;
        return r == null && (t = !0, r = M(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), 
        e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
    }
    var No = nt, Nn = kn, In = Zr;
    function ns(e) {
        var r = e.slice(e.l, e.l + 4), t = 1 & r[0], n = 2 & r[0];
        e.l += 4;
        var a = n === 0 ? Jr([ 0, 0, 0, 0, 252 & r[0], r[1], r[2], r[3] ], 0) : Xt(r, 0) >> 2;
        return t ? a / 100 : a;
    }
    function as(e, r) {
        r == null && (r = M(4));
        var t = 0, n = 0, a = 100 * e;
        if (e == (0 | e) && e >= -(1 << 29) && e < 1 << 29 ? n = 1 : a == (0 | a) && a >= -(1 << 29) && a < 1 << 29 && (n = 1, 
        t = 1), !n) throw new Error("unsupported RkNumber " + e);
        r.write_shift(-4, ((t ? a : e) << 2) + (t + 2));
    }
    function ss(e) {
        var r = {
            s: {},
            e: {}
        };
        return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), 
        r.e.c = e.read_shift(4), r;
    }
    var qt = ss, or = function(e, r) {
        return r || (r = M(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), 
        r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
    };
    function lr(e) {
        if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
        return e.read_shift(8, "f");
    }
    function fr(e, r) {
        return (r || M(8)).write_shift(8, e, "f");
    }
    function qr(e, r) {
        if (r || (r = M(8)), !e || e.auto) return r.write_shift(4, 0), r.write_shift(4, 0), 
        r;
        e.index != null ? (r.write_shift(1, 2), r.write_shift(1, e.index)) : e.theme != null ? (r.write_shift(1, 6), 
        r.write_shift(1, e.theme)) : (r.write_shift(1, 5), r.write_shift(1, 0));
        var t = e.tint || 0;
        if (t > 0 ? t *= 32767 : t < 0 && (t *= 32768), r.write_shift(2, t), e.rgb && e.theme == null) {
            var n = e.rgb || "FFFFFF";
            typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), 
            r.write_shift(1, parseInt(n.slice(0, 2), 16)), r.write_shift(1, parseInt(n.slice(2, 4), 16)), 
            r.write_shift(1, parseInt(n.slice(4, 6), 16)), r.write_shift(1, 255);
        } else r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
        return r;
    }
    var Qe = 80, is = {
        1: {
            n: "CodePage",
            t: 2
        },
        2: {
            n: "Category",
            t: Qe
        },
        3: {
            n: "PresentationFormat",
            t: Qe
        },
        4: {
            n: "ByteCount",
            t: 3
        },
        5: {
            n: "LineCount",
            t: 3
        },
        6: {
            n: "ParagraphCount",
            t: 3
        },
        7: {
            n: "SlideCount",
            t: 3
        },
        8: {
            n: "NoteCount",
            t: 3
        },
        9: {
            n: "HiddenCount",
            t: 3
        },
        10: {
            n: "MultimediaClipCount",
            t: 3
        },
        11: {
            n: "ScaleCrop",
            t: 11
        },
        12: {
            n: "HeadingPairs",
            t: 4108
        },
        13: {
            n: "TitlesOfParts",
            t: 4126
        },
        14: {
            n: "Manager",
            t: Qe
        },
        15: {
            n: "Company",
            t: Qe
        },
        16: {
            n: "LinksUpToDate",
            t: 11
        },
        17: {
            n: "CharacterCount",
            t: 3
        },
        19: {
            n: "SharedDoc",
            t: 11
        },
        22: {
            n: "HyperlinksChanged",
            t: 11
        },
        23: {
            n: "AppVersion",
            t: 3,
            p: "version"
        },
        24: {
            n: "DigSig",
            t: 65
        },
        26: {
            n: "ContentType",
            t: Qe
        },
        27: {
            n: "ContentStatus",
            t: Qe
        },
        28: {
            n: "Language",
            t: Qe
        },
        29: {
            n: "Version",
            t: Qe
        },
        255: {},
        2147483648: {
            n: "Locale",
            t: 19
        },
        2147483651: {
            n: "Behavior",
            t: 19
        },
        1919054434: {}
    }, os = {
        1: {
            n: "CodePage",
            t: 2
        },
        2: {
            n: "Title",
            t: Qe
        },
        3: {
            n: "Subject",
            t: Qe
        },
        4: {
            n: "Author",
            t: Qe
        },
        5: {
            n: "Keywords",
            t: Qe
        },
        6: {
            n: "Comments",
            t: Qe
        },
        7: {
            n: "Template",
            t: Qe
        },
        8: {
            n: "LastAuthor",
            t: Qe
        },
        9: {
            n: "RevNumber",
            t: Qe
        },
        10: {
            n: "EditTime",
            t: 64
        },
        11: {
            n: "LastPrinted",
            t: 64
        },
        12: {
            n: "CreatedDate",
            t: 64
        },
        13: {
            n: "ModifiedDate",
            t: 64
        },
        14: {
            n: "PageCount",
            t: 3
        },
        15: {
            n: "WordCount",
            t: 3
        },
        16: {
            n: "CharCount",
            t: 3
        },
        17: {
            n: "Thumbnail",
            t: 71
        },
        18: {
            n: "Application",
            t: Qe
        },
        19: {
            n: "DocSecurity",
            t: 3
        },
        255: {},
        2147483648: {
            n: "Locale",
            t: 19
        },
        2147483651: {
            n: "Behavior",
            t: 19
        },
        1919054434: {}
    };
    function Io(e) {
        return e.map(function(r) {
            return [ r >> 16 & 255, r >> 8 & 255, 255 & r ];
        });
    }
    var Do = ft(Io([ 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])), kr = {
        0: "#NULL!",
        7: "#DIV/0!",
        15: "#VALUE!",
        23: "#REF!",
        29: "#NAME?",
        36: "#NUM!",
        42: "#N/A",
        43: "#GETTING_DATA",
        255: "#WTF?"
    }, Po = {
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
        "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
        "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
        "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
        "application/vnd.ms-excel.worksheet": "sheets",
        "application/vnd.ms-excel.binIndexWs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
        "application/vnd.ms-excel.chartsheet": "charts",
        "application/vnd.ms-excel.macrosheet+xml": "macros",
        "application/vnd.ms-excel.macrosheet": "macros",
        "application/vnd.ms-excel.intlmacrosheet": "TODO",
        "application/vnd.ms-excel.binIndexMs": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
        "application/vnd.ms-excel.dialogsheet": "dialogs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
        "application/vnd.ms-excel.sharedStrings": "strs",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
        "application/vnd.ms-excel.styles": "styles",
        "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
        "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
        "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
        "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
        "application/vnd.ms-excel.comments": "comments",
        "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
        "application/vnd.ms-excel.person+xml": "people",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
        "application/vnd.ms-excel.sheetMetadata": "metadata",
        "application/vnd.ms-excel.pivotTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
        "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
        "application/vnd.ms-office.chartstyle+xml": "TODO",
        "application/vnd.ms-office.chartex+xml": "TODO",
        "application/vnd.ms-excel.calcChain": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
        "application/vnd.ms-office.activeX": "TODO",
        "application/vnd.ms-office.activeX+xml": "TODO",
        "application/vnd.ms-excel.attachedToolbars": "TODO",
        "application/vnd.ms-excel.connections": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
        "application/vnd.ms-excel.externalLink": "links",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
        "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
        "application/vnd.ms-excel.pivotCacheRecords": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
        "application/vnd.ms-excel.queryTable": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
        "application/vnd.ms-excel.userNames": "TODO",
        "application/vnd.ms-excel.revisionHeaders": "TODO",
        "application/vnd.ms-excel.revisionLog": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
        "application/vnd.ms-excel.tableSingleCells": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
        "application/vnd.ms-excel.slicer": "TODO",
        "application/vnd.ms-excel.slicerCache": "TODO",
        "application/vnd.ms-excel.slicer+xml": "TODO",
        "application/vnd.ms-excel.slicerCache+xml": "TODO",
        "application/vnd.ms-excel.wsSortMap": "TODO",
        "application/vnd.ms-excel.table": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
        "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
        "application/vnd.ms-excel.Timeline+xml": "TODO",
        "application/vnd.ms-excel.TimelineCache+xml": "TODO",
        "application/vnd.ms-office.vbaProject": "vba",
        "application/vnd.ms-office.vbaProjectSignature": "TODO",
        "application/vnd.ms-office.volatileDependencies": "TODO",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
        "application/vnd.ms-excel.controlproperties+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.model+data": "TODO",
        "application/vnd.ms-excel.Survey+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
        "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
        "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
        "application/vnd.openxmlformats-package.relationships+xml": "rels",
        "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
        "image/png": "TODO",
        sheet: "js"
    }, Qr = {
        workbooks: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
            xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
            xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
            xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
        },
        strs: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            xlsb: "application/vnd.ms-excel.sharedStrings"
        },
        comments: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            xlsb: "application/vnd.ms-excel.comments"
        },
        sheets: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            xlsb: "application/vnd.ms-excel.worksheet"
        },
        charts: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            xlsb: "application/vnd.ms-excel.chartsheet"
        },
        dialogs: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            xlsb: "application/vnd.ms-excel.dialogsheet"
        },
        macros: {
            xlsx: "application/vnd.ms-excel.macrosheet+xml",
            xlsb: "application/vnd.ms-excel.macrosheet"
        },
        metadata: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
            xlsb: "application/vnd.ms-excel.sheetMetadata"
        },
        styles: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            xlsb: "application/vnd.ms-excel.styles"
        }
    };
    function ls(e, r) {
        var t, n = function(o) {
            for (var f = [], u = Je(o), c = 0; c !== u.length; ++c) f[o[u[c]]] == null && (f[o[u[c]]] = []), 
            f[o[u[c]]].push(u[c]);
            return f;
        }(Po), a = [];
        a[a.length] = Be, a[a.length] = V("Types", null, {
            xmlns: Ve.CT,
            "xmlns:xsd": Ve.xsd,
            "xmlns:xsi": Ve.xsi
        }), a = a.concat([ [ "xml", "application/xml" ], [ "bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main" ], [ "vml", "application/vnd.openxmlformats-officedocument.vmlDrawing" ], [ "data", "application/vnd.openxmlformats-officedocument.model+data" ], [ "bmp", "image/bmp" ], [ "png", "image/png" ], [ "gif", "image/gif" ], [ "emf", "image/x-emf" ], [ "wmf", "image/x-wmf" ], [ "jpg", "image/jpeg" ], [ "jpeg", "image/jpeg" ], [ "tif", "image/tiff" ], [ "tiff", "image/tiff" ], [ "pdf", "application/pdf" ], [ "rels", "application/vnd.openxmlformats-package.relationships+xml" ] ].map(function(o) {
            return V("Default", null, {
                Extension: o[0],
                ContentType: o[1]
            });
        }));
        var s = function(o) {
            e[o] && e[o].length > 0 && (t = e[o][0], a[a.length] = V("Override", null, {
                PartName: (t[0] == "/" ? "" : "/") + t,
                ContentType: Qr[o][r.bookType] || Qr[o].xlsx
            }));
        }, l = function(o) {
            (e[o] || []).forEach(function(f) {
                a[a.length] = V("Override", null, {
                    PartName: (f[0] == "/" ? "" : "/") + f,
                    ContentType: Qr[o][r.bookType] || Qr[o].xlsx
                });
            });
        }, i = function(o) {
            (e[o] || []).forEach(function(f) {
                a[a.length] = V("Override", null, {
                    PartName: (f[0] == "/" ? "" : "/") + f,
                    ContentType: n[o][0]
                });
            });
        };
        return s("workbooks"), l("sheets"), l("charts"), i("themes"), [ "strs", "styles" ].forEach(s), 
        [ "coreprops", "extprops", "custprops" ].forEach(i), i("vba"), i("comments"), 
        i("threadedcomments"), i("drawings"), l("metadata"), i("people"), a.length > 2 && (a[a.length] = "</Types>", 
        a[1] = a[1].replace("/>", ">")), a.join("");
    }
    var Te = {
        WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
        HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
        XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
        XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
        XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
        CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
        CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
        CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
        CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
        EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
        CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
        SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
        STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
        THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
        CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
        CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
        CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
        WS: [ "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet" ],
        DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
        MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
        IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
        DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
        XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
        TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
        PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
        VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
    };
    function fs(e) {
        var r = e.lastIndexOf("/");
        return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
    }
    function cr(e) {
        var r = [ Be, V("Relationships", null, {
            xmlns: Ve.RELS
        }) ];
        return Je(e["!id"]).forEach(function(t) {
            r[r.length] = V("Relationship", null, e["!id"][t]);
        }), r.length > 2 && (r[r.length] = "</Relationships>", r[1] = r[1].replace("/>", ">")), 
        r.join("");
    }
    function _e(e, r, t, n, a, s) {
        if (a || (a = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), 
        r < 0) for (r = e["!idx"]; e["!id"]["rId" + r]; ++r);
        if (e["!idx"] = r + 1, a.Id = "rId" + r, a.Type = n, a.Target = t, s ? a.TargetMode = s : [ Te.HLINK, Te.XPATH, Te.XMISS ].indexOf(a.Type) > -1 && (a.TargetMode = "External"), 
        e["!id"][a.Id]) throw new Error("Cannot rewrite rId " + r);
        return e["!id"][a.Id] = a, e[("/" + a.Target).replace("//", "/")] = a, r;
    }
    function cs(e, r, t) {
        return [ '  <rdf:Description rdf:about="' + e + `">
`, '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + `"/>
`, `  </rdf:Description>
` ].join("");
    }
    function hs() {
        return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + pn.version + "</meta:generator></office:meta></office:document-meta>";
    }
    var Qt = [ [ "cp:category", "Category" ], [ "cp:contentStatus", "ContentStatus" ], [ "cp:keywords", "Keywords" ], [ "cp:lastModifiedBy", "LastAuthor" ], [ "cp:lastPrinted", "LastPrinted" ], [ "cp:revision", "RevNumber" ], [ "cp:version", "Version" ], [ "dc:creator", "Author" ], [ "dc:description", "Comments" ], [ "dc:identifier", "Identifier" ], [ "dc:language", "Language" ], [ "dc:subject", "Subject" ], [ "dc:title", "Title" ], [ "dcterms:created", "CreatedDate", "date" ], [ "dcterms:modified", "ModifiedDate", "date" ] ];
    function Dn(e, r, t, n, a) {
        a[e] == null && r != null && r !== "" && (a[e] = r, r = xe(r), n[n.length] = t ? V(e, r, t) : Ze(e, r));
    }
    function us(e, r) {
        var t = r || {}, n = [ Be, V("cp:coreProperties", null, {
            "xmlns:cp": Ve.CORE_PROPS,
            "xmlns:dc": Ve.dc,
            "xmlns:dcterms": Ve.dcterms,
            "xmlns:dcmitype": Ve.dcmitype,
            "xmlns:xsi": Ve.xsi
        }) ], a = {};
        if (!e && !t.Props) return n.join("");
        e && (e.CreatedDate != null && Dn("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : An(e.CreatedDate, t.WTF), {
            "xsi:type": "dcterms:W3CDTF"
        }, n, a), e.ModifiedDate != null && Dn("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : An(e.ModifiedDate, t.WTF), {
            "xsi:type": "dcterms:W3CDTF"
        }, n, a));
        for (var s = 0; s != Qt.length; ++s) {
            var l = Qt[s], i = t.Props && t.Props[l[1]] != null ? t.Props[l[1]] : e ? e[l[1]] : null;
            i === !0 ? i = "1" : i === !1 ? i = "0" : typeof i == "number" && (i = String(i)), 
            i != null && Dn(l[0], i, null, n, a);
        }
        return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), 
        n.join("");
    }
    var hr = [ [ "Application", "Application", "string" ], [ "AppVersion", "AppVersion", "string" ], [ "Company", "Company", "string" ], [ "DocSecurity", "DocSecurity", "string" ], [ "Manager", "Manager", "string" ], [ "HyperlinksChanged", "HyperlinksChanged", "bool" ], [ "SharedDoc", "SharedDoc", "bool" ], [ "LinksUpToDate", "LinksUpToDate", "bool" ], [ "ScaleCrop", "ScaleCrop", "bool" ], [ "HeadingPairs", "HeadingPairs", "raw" ], [ "TitlesOfParts", "TitlesOfParts", "raw" ] ], ps = [ "Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames" ];
    function ds(e) {
        var r = [], t = V;
        return e || (e = {}), e.Application = "SheetJS", r[r.length] = Be, r[r.length] = V("Properties", null, {
            xmlns: Ve.EXT_PROPS,
            "xmlns:vt": Ve.vt
        }), hr.forEach(function(n) {
            if (e[n[1]] !== void 0) {
                var a;
                switch (n[2]) {
                  case "string":
                    a = xe(String(e[n[1]]));
                    break;

                  case "bool":
                    a = e[n[1]] ? "true" : "false";
                }
                a !== void 0 && (r[r.length] = t(n[0], a));
            }
        }), r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), {
            size: 2,
            baseType: "variant"
        })), r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function(n) {
            return "<vt:lpstr>" + xe(n) + "</vt:lpstr>";
        }).join(""), {
            size: e.Worksheets,
            baseType: "lpstr"
        })), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), 
        r.join("");
    }
    function ms(e) {
        var r = [ Be, V("Properties", null, {
            xmlns: Ve.CUST_PROPS,
            "xmlns:vt": Ve.vt
        }) ];
        if (!e) return r.join("");
        var t = 1;
        return Je(e).forEach(function(n) {
            ++t, r[r.length] = V("property", function(a, s) {
                switch (typeof a) {
                  case "string":
                    var l = V("vt:lpwstr", xe(a));
                    return s && (l = l.replace(/&quot;/g, "_x0022_")), l;

                  case "number":
                    return V((0 | a) == a ? "vt:i4" : "vt:r8", xe(String(a)));

                  case "boolean":
                    return V("vt:bool", a ? "true" : "false");
                }
                if (a instanceof Date) return V("vt:filetime", An(a));
                throw new Error("Unable to serialize " + a);
            }(e[n], !0), {
                fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                pid: t,
                name: xe(n)
            });
        }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), 
        r.join("");
    }
    var gs = {
        Title: "Title",
        Subject: "Subject",
        Author: "Author",
        Keywords: "Keywords",
        Comments: "Description",
        LastAuthor: "LastAuthor",
        RevNumber: "Revision",
        Application: "AppName",
        LastPrinted: "LastPrinted",
        CreatedDate: "Created",
        ModifiedDate: "LastSaved",
        Category: "Category",
        Manager: "Manager",
        Company: "Company",
        AppVersion: "Version",
        ContentStatus: "ContentStatus",
        Identifier: "Identifier",
        Language: "Language"
    };
    function vs(e, r) {
        var t = M(4), n = M(4);
        switch (t.write_shift(4, e == 80 ? 31 : e), e) {
          case 3:
            n.write_shift(-4, r);
            break;

          case 5:
            (n = M(8)).write_shift(8, r, "f");
            break;

          case 11:
            n.write_shift(4, r ? 1 : 0);
            break;

          case 64:
            n = function(a) {
                var s = (typeof a == "string" ? new Date(Date.parse(a)) : a).getTime() / 1e3 + 11644473600, l = s % Math.pow(2, 32), i = (s - l) / Math.pow(2, 32);
                i *= 1e7;
                var o = (l *= 1e7) / Math.pow(2, 32) | 0;
                o > 0 && (l %= Math.pow(2, 32), i += o);
                var f = M(8);
                return f.write_shift(4, l), f.write_shift(4, i), f;
            }(r);
            break;

          case 31:
          case 80:
            for ((n = M(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2))).write_shift(4, r.length + 1), 
            n.write_shift(0, r, "dbcs"); n.l != n.length; ) n.write_shift(1, 0);
            break;

          default:
            throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
        }
        return Ke([ t, n ]);
    }
    var Ts = [ "CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID" ];
    function Lo(e) {
        switch (typeof e) {
          case "boolean":
            return 11;

          case "number":
            return (0 | e) == e ? 3 : 5;

          case "string":
            return 31;

          case "object":
            if (e instanceof Date) return 64;
        }
        return -1;
    }
    function ws(e, r, t) {
        var n = M(8), a = [], s = [], l = 8, i = 0, o = M(8), f = M(8);
        if (o.write_shift(4, 2), o.write_shift(4, 1200), f.write_shift(4, 1), s.push(o), 
        a.push(f), l += 8 + o.length, !r) {
            (f = M(8)).write_shift(4, 0), a.unshift(f);
            var u = [ M(4) ];
            for (u[0].write_shift(4, e.length), i = 0; i < e.length; ++i) {
                var c = e[i][0];
                for ((o = M(8 + 2 * (c.length + 1) + (c.length % 2 ? 0 : 2))).write_shift(4, i + 2), 
                o.write_shift(4, c.length + 1), o.write_shift(0, c, "dbcs"); o.l != o.length; ) o.write_shift(1, 0);
                u.push(o);
            }
            o = Ke(u), s.unshift(o), l += 8 + o.length;
        }
        for (i = 0; i < e.length; ++i) if ((!r || r[e[i][0]]) && !(Ts.indexOf(e[i][0]) > -1 || ps.indexOf(e[i][0]) > -1) && e[i][1] != null) {
            var h = e[i][1], d = 0;
            if (r) {
                var p = t[d = +r[e[i][0]]];
                if (p.p == "version" && typeof h == "string") {
                    var g = h.split(".");
                    h = (+g[0] << 16) + (+g[1] || 0);
                }
                o = vs(p.t, h);
            } else {
                var E = Lo(h);
                E == -1 && (E = 31, h = String(h)), o = vs(E, h);
            }
            s.push(o), (f = M(8)).write_shift(4, r ? d : 2 + i), a.push(f), l += 8 + o.length;
        }
        var x = 8 * (s.length + 1);
        for (i = 0; i < s.length; ++i) a[i].write_shift(4, x), x += s[i].length;
        return n.write_shift(4, l), n.write_shift(4, s.length), Ke([ n ].concat(a).concat(s));
    }
    function bs(e, r, t, n, a, s) {
        var l = M(a ? 68 : 48), i = [ l ];
        l.write_shift(2, 65534), l.write_shift(2, 0), l.write_shift(4, 842412599), 
        l.write_shift(16, Oe.utils.consts.HEADER_CLSID, "hex"), l.write_shift(4, a ? 2 : 1), 
        l.write_shift(16, r, "hex"), l.write_shift(4, a ? 68 : 48);
        var o = ws(e, t, n);
        if (i.push(o), a) {
            var f = ws(a, null, null);
            l.write_shift(16, s, "hex"), l.write_shift(4, 68 + o.length), i.push(f);
        }
        return Ke(i);
    }
    function ot(e, r) {
        return r || (r = M(2)), r.write_shift(2, +!!e), r;
    }
    function Es(e) {
        return e.read_shift(2, "u");
    }
    function Tt(e, r) {
        return r || (r = M(2)), r.write_shift(2, e), r;
    }
    function Ss(e, r, t) {
        return t || (t = M(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), 
        t;
    }
    function As(e, r, t) {
        var n = e.read_shift(t && t.biff >= 12 ? 2 : 1), a = "sbcs-cont";
        return t && t.biff, t && t.biff != 8 ? t.biff == 12 && (a = "wstr") : e.read_shift(1) && (a = "dbcs-cont"), 
        t.biff >= 2 && t.biff <= 5 && (a = "cpstr"), n ? e.read_shift(n, a) : "";
    }
    function Mo(e) {
        var r = e.t || "", t = M(3);
        t.write_shift(2, r.length), t.write_shift(1, 1);
        var n = M(2 * r.length);
        return n.write_shift(2 * r.length, r, "utf16le"), Ke([ t, n ]);
    }
    function xs(e, r, t) {
        return t || (t = M(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), 
        t.write_shift(31, e, "utf16le"), t;
    }
    function _s(e, r) {
        r || (r = M(6 + 2 * e.length)), r.write_shift(4, 1 + e.length);
        for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
        return r.write_shift(2, 0), r;
    }
    function Fo(e) {
        var r = M(512), t = 0, n = e.Target;
        n.slice(0, 7) == "file://" && (n = n.slice(7));
        var a = n.indexOf("#"), s = a > -1 ? 31 : 23;
        switch (n.charAt(0)) {
          case "#":
            s = 28;
            break;

          case ".":
            s &= -3;
        }
        r.write_shift(4, 2), r.write_shift(4, s);
        var l = [ 8, 6815827, 6619237, 4849780, 83 ];
        for (t = 0; t < l.length; ++t) r.write_shift(4, l[t]);
        if (s == 28) _s(n = n.slice(1), r); else if (2 & s) {
            for (l = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), 
            t = 0; t < l.length; ++t) r.write_shift(1, parseInt(l[t], 16));
            var i = a > -1 ? n.slice(0, a) : n;
            for (r.write_shift(4, 2 * (i.length + 1)), t = 0; t < i.length; ++t) r.write_shift(2, i.charCodeAt(t));
            r.write_shift(2, 0), 8 & s && _s(a > -1 ? n.slice(a + 1) : "", r);
        } else {
            for (l = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), 
            t = 0; t < l.length; ++t) r.write_shift(1, parseInt(l[t], 16));
            for (var o = 0; n.slice(3 * o, 3 * o + 3) == "../" || n.slice(3 * o, 3 * o + 3) == "..\\"; ) ++o;
            for (r.write_shift(2, o), r.write_shift(4, n.length - 3 * o + 1), t = 0; t < n.length - 3 * o; ++t) r.write_shift(1, 255 & n.charCodeAt(t + 3 * o));
            for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), 
            t = 0; t < 6; ++t) r.write_shift(4, 0);
        }
        return r.slice(0, r.l);
    }
    function er(e, r, t, n) {
        return n || (n = M(6)), n.write_shift(2, e), n.write_shift(2, r), n.write_shift(2, t || 0), 
        n;
    }
    function Uo(e, r, t) {
        var n = t.biff > 8 ? 4 : 2;
        return [ e.read_shift(n), e.read_shift(n, "i"), e.read_shift(n, "i") ];
    }
    function Bo(e) {
        var r = e.read_shift(2), t = e.read_shift(2);
        return {
            s: {
                c: e.read_shift(2),
                r: r
            },
            e: {
                c: e.read_shift(2),
                r: t
            }
        };
    }
    function ys(e, r) {
        return r || (r = M(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), 
        r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
    }
    function Pn(e, r, t) {
        var n = 1536, a = 16;
        switch (t.bookType) {
          case "biff8":
          case "xla":
            break;

          case "biff5":
            n = 1280, a = 8;
            break;

          case "biff4":
            n = 4, a = 6;
            break;

          case "biff3":
            n = 3, a = 6;
            break;

          case "biff2":
            n = 2, a = 4;
            break;

          default:
            throw new Error("unsupported BIFF version");
        }
        var s = M(a);
        return s.write_shift(2, n), s.write_shift(2, r), a > 4 && s.write_shift(2, 29282), 
        a > 6 && s.write_shift(2, 1997), a > 8 && (s.write_shift(2, 49161), s.write_shift(2, 1), 
        s.write_shift(2, 1798), s.write_shift(2, 0)), s;
    }
    function Ho(e, r) {
        var t = !r || r.biff >= 8 ? 2 : 1, n = M(8 + t * e.name.length);
        n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), 
        n.write_shift(1, e.name.length), r.biff >= 8 && n.write_shift(1, 1), n.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
        var a = n.slice(0, n.l);
        return a.l = n.l, a;
    }
    function Wo(e, r, t, n) {
        var a = t && t.biff == 5;
        n || (n = M(a ? 3 + r.length : 5 + 2 * r.length)), n.write_shift(2, e), 
        n.write_shift(a ? 1 : 2, r.length), a || n.write_shift(1, 1), n.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le");
        var s = n.length > n.l ? n.slice(0, n.l) : n;
        return s.l == null && (s.l = s.length), s;
    }
    function Os(e, r, t, n) {
        var a = t && t.biff == 5;
        n || (n = M(a ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), 
        n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, r << 4));
        var s = 0;
        return e.numFmtId > 0 && a && (s |= 1024), n.write_shift(4, s), n.write_shift(4, 0), 
        a || n.write_shift(4, 0), n.write_shift(2, 0), n;
    }
    function Go(e) {
        var r = M(24), t = ze(e[0]);
        r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
        for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), a = 0; a < 16; ++a) r.write_shift(1, parseInt(n[a], 16));
        return Ke([ r, Fo(e[1]) ]);
    }
    function jo(e) {
        var r = e[1].Tooltip, t = M(10 + 2 * (r.length + 1));
        t.write_shift(2, 2048);
        var n = ze(e[0]);
        t.write_shift(2, n.r), t.write_shift(2, n.r), t.write_shift(2, n.c), t.write_shift(2, n.c);
        for (var a = 0; a < r.length; ++a) t.write_shift(2, r.charCodeAt(a));
        return t.write_shift(2, 0), t;
    }
    var Vo = function() {
        var e = {
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127,
            8: 865,
            9: 437,
            10: 850,
            11: 437,
            13: 437,
            14: 850,
            15: 437,
            16: 850,
            17: 437,
            18: 850,
            19: 932,
            20: 850,
            21: 437,
            22: 850,
            23: 865,
            24: 437,
            25: 437,
            26: 850,
            27: 437,
            28: 863,
            29: 850,
            31: 852,
            34: 852,
            35: 852,
            36: 860,
            37: 850,
            38: 866,
            55: 850,
            64: 852,
            77: 936,
            78: 949,
            79: 950,
            80: 874,
            87: 1252,
            88: 1252,
            89: 1252,
            108: 863,
            134: 737,
            135: 852,
            136: 857,
            204: 1257,
            255: 16969
        }, r = Tn({
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127
        });
        function t(a, s) {
            var l = s || {};
            l.dateNF || (l.dateNF = "yyyymmdd");
            var i = ir(function(o, f) {
                var u = [], c = $t(1);
                switch (f.type) {
                  case "base64":
                    c = Et(Nt(o));
                    break;

                  case "binary":
                    c = Et(o);
                    break;

                  case "buffer":
                  case "array":
                    c = o;
                }
                dt(c, 0);
                var h = c.read_shift(1), d = !!(136 & h), p = !1, g = !1;
                switch (h) {
                  case 2:
                  case 3:
                  case 131:
                  case 139:
                  case 245:
                    break;

                  case 48:
                  case 49:
                    p = !0, d = !0;
                    break;

                  case 140:
                    g = !0;
                    break;

                  default:
                    throw new Error("DBF Unsupported Version: " + h.toString(16));
                }
                var E = 0, x = 521;
                h == 2 && (E = c.read_shift(2)), c.l += 3, h != 2 && (E = c.read_shift(4)), 
                E > 1048576 && (E = 1e6), h != 2 && (x = c.read_shift(2));
                var S = c.read_shift(2), m = f.codepage || 1252;
                h != 2 && (c.l += 16, c.read_shift(1), c[c.l] !== 0 && (m = e[c[c.l]]), 
                c.l += 1, c.l += 2), g && (c.l += 36);
                for (var w = [], v = {}, T = Math.min(c.length, h == 2 ? 521 : x - 10 - (p ? 264 : 0)), A = g ? 32 : 11; c.l < T && c[c.l] != 13; ) switch ((v = {}).name = ra.utils.decode(m, c.slice(c.l, c.l + A)).replace(/[\u0000\r\n].*$/g, ""), 
                c.l += A, v.type = String.fromCharCode(c.read_shift(1)), h == 2 || g || (v.offset = c.read_shift(4)), 
                v.len = c.read_shift(1), h == 2 && (v.offset = c.read_shift(2)), 
                v.dec = c.read_shift(1), v.name.length && w.push(v), h != 2 && (c.l += g ? 13 : 14), 
                v.type) {
                  case "B":
                    (!p || v.len != 8) && f.WTF;
                    break;

                  case "G":
                  case "P":
                    f.WTF;
                    break;

                  case "+":
                  case "0":
                  case "@":
                  case "C":
                  case "D":
                  case "F":
                  case "I":
                  case "L":
                  case "M":
                  case "N":
                  case "O":
                  case "T":
                  case "Y":
                    break;

                  default:
                    throw new Error("Unknown Field Type: " + v.type);
                }
                if (c[c.l] !== 13 && (c.l = x - 1), c.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + c.l + " " + c[c.l]);
                c.l = x;
                var C = 0, I = 0;
                for (u[0] = [], I = 0; I != w.length; ++I) u[0][I] = w[I].name;
                for (;E-- > 0; ) if (c[c.l] !== 42) for (++c.l, u[++C] = [], I = 0, 
                I = 0; I != w.length; ++I) {
                    var D = c.slice(c.l, c.l + w[I].len);
                    c.l += w[I].len, dt(D, 0);
                    var N = ra.utils.decode(m, D);
                    switch (w[I].type) {
                      case "C":
                        N.trim().length && (u[C][I] = N.replace(/\s+$/, ""));
                        break;

                      case "D":
                        N.length === 8 ? u[C][I] = new Date(+N.slice(0, 4), +N.slice(4, 6) - 1, +N.slice(6, 8)) : u[C][I] = N;
                        break;

                      case "F":
                        u[C][I] = parseFloat(N.trim());
                        break;

                      case "+":
                      case "I":
                        u[C][I] = g ? 2147483648 ^ D.read_shift(-4, "i") : D.read_shift(4, "i");
                        break;

                      case "L":
                        switch (N.trim().toUpperCase()) {
                          case "Y":
                          case "T":
                            u[C][I] = !0;
                            break;

                          case "N":
                          case "F":
                            u[C][I] = !1;
                            break;

                          case "":
                          case "?":
                            break;

                          default:
                            throw new Error("DBF Unrecognized L:|" + N + "|");
                        }
                        break;

                      case "M":
                        if (!d) throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
                        u[C][I] = "##MEMO##" + (g ? parseInt(N.trim(), 10) : D.read_shift(4));
                        break;

                      case "N":
                        (N = N.replace(/\u0000/g, "").trim()) && N != "." && (u[C][I] = +N || 0);
                        break;

                      case "@":
                        u[C][I] = new Date(D.read_shift(-8, "f") - 621356832e5);
                        break;

                      case "T":
                        u[C][I] = new Date(864e5 * (D.read_shift(4) - 2440588) + D.read_shift(4));
                        break;

                      case "Y":
                        u[C][I] = D.read_shift(4, "i") / 1e4 + D.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
                        break;

                      case "O":
                        u[C][I] = -D.read_shift(-8, "f");
                        break;

                      case "B":
                        if (p && w[I].len == 8) {
                            u[C][I] = D.read_shift(8, "f");
                            break;
                        }

                      case "G":
                      case "P":
                        D.l += w[I].len;
                        break;

                      case "0":
                        if (w[I].name === "_NullFlags") break;

                      default:
                        throw new Error("DBF Unsupported data type " + w[I].type);
                    }
                } else c.l += S;
                if (h != 2 && c.l < c.length && c[c.l++] != 26) throw new Error("DBF EOF Marker missing " + (c.l - 1) + " of " + c.length + " " + c[c.l - 1].toString(16));
                return f && f.sheetRows && (u = u.slice(0, f.sheetRows)), f.DBF = w, 
                u;
            }(a, l), l);
            return i["!cols"] = l.DBF.map(function(o) {
                return {
                    wch: o.len,
                    DBF: o
                };
            }), delete l.DBF, i;
        }
        var n = {
            B: 8,
            C: 250,
            L: 1,
            D: 8,
            "?": 0,
            "": 0
        };
        return {
            to_workbook: function(a, s) {
                try {
                    return Yt(t(a, s), s);
                } catch (l) {
                    if (s && s.WTF) throw l;
                }
                return {
                    SheetNames: [],
                    Sheets: {}
                };
            },
            to_sheet: t,
            from_sheet: function(a, s) {
                var l = s || {};
                if (+l.codepage >= 0 && vr(+l.codepage), l.type == "string") throw new Error("Cannot write DBF to JS string");
                var i = ct(), o = fn(a, {
                    header: 1,
                    raw: !0,
                    cellDates: !0
                }), f = o[0], u = o.slice(1), c = a["!cols"] || [], h = 0, d = 0, p = 0, g = 1;
                for (h = 0; h < f.length; ++h) if (((c[h] || {}).DBF || {}).name) f[h] = c[h].DBF.name, 
                ++p; else if (f[h] != null) {
                    if (++p, typeof f[h] == "number" && (f[h] = f[h].toString(10)), 
                    typeof f[h] != "string") throw new Error("DBF Invalid column name " + f[h] + " |" + typeof f[h] + "|");
                    if (f.indexOf(f[h]) !== h) {
                        for (d = 0; d < 1024; ++d) if (f.indexOf(f[h] + "_" + d) == -1) {
                            f[h] += "_" + d;
                            break;
                        }
                    }
                }
                var E = Ne(a["!ref"]), x = [], S = [], m = [];
                for (h = 0; h <= E.e.c - E.s.c; ++h) {
                    var w = "", v = "", T = 0, A = [];
                    for (d = 0; d < u.length; ++d) u[d][h] != null && A.push(u[d][h]);
                    if (A.length != 0 && f[h] != null) {
                        for (d = 0; d < A.length; ++d) {
                            switch (typeof A[d]) {
                              case "number":
                                v = "B";
                                break;

                              case "string":
                              default:
                                v = "C";
                                break;

                              case "boolean":
                                v = "L";
                                break;

                              case "object":
                                v = A[d] instanceof Date ? "D" : "C";
                            }
                            T = Math.max(T, String(A[d]).length), w = w && w != v ? "C" : v;
                        }
                        T > 250 && (T = 250), (v = ((c[h] || {}).DBF || {}).type) == "C" && c[h].DBF.len > T && (T = c[h].DBF.len), 
                        w == "B" && v == "N" && (w = "N", m[h] = c[h].DBF.dec, T = c[h].DBF.len), 
                        S[h] = w == "C" || v == "N" ? T : n[w] || 0, g += S[h], 
                        x[h] = w;
                    } else x[h] = "?";
                }
                var C = i.next(32);
                for (C.write_shift(4, 318902576), C.write_shift(4, u.length), C.write_shift(2, 296 + 32 * p), 
                C.write_shift(2, g), h = 0; h < 4; ++h) C.write_shift(4, 0);
                for (C.write_shift(4, (+r[ea] || 3) << 8), h = 0, d = 0; h < f.length; ++h) if (f[h] != null) {
                    var I = i.next(32), D = (f[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
                    I.write_shift(1, D, "sbcs"), I.write_shift(1, x[h] == "?" ? "C" : x[h], "sbcs"), 
                    I.write_shift(4, d), I.write_shift(1, S[h] || n[x[h]] || 0), 
                    I.write_shift(1, m[h] || 0), I.write_shift(1, 2), I.write_shift(4, 0), 
                    I.write_shift(1, 0), I.write_shift(4, 0), I.write_shift(4, 0), 
                    d += S[h] || n[x[h]] || 0;
                }
                var N = i.next(264);
                for (N.write_shift(4, 13), h = 0; h < 65; ++h) N.write_shift(4, 0);
                for (h = 0; h < u.length; ++h) {
                    var G = i.next(g);
                    for (G.write_shift(1, 0), d = 0; d < f.length; ++d) if (f[d] != null) switch (x[d]) {
                      case "L":
                        G.write_shift(1, u[h][d] == null ? 63 : u[h][d] ? 84 : 70);
                        break;

                      case "B":
                        G.write_shift(8, u[h][d] || 0, "f");
                        break;

                      case "N":
                        var B = "0";
                        for (typeof u[h][d] == "number" && (B = u[h][d].toFixed(m[d] || 0)), 
                        p = 0; p < S[d] - B.length; ++p) G.write_shift(1, 32);
                        G.write_shift(1, B, "sbcs");
                        break;

                      case "D":
                        u[h][d] ? (G.write_shift(4, ("0000" + u[h][d].getFullYear()).slice(-4), "sbcs"), 
                        G.write_shift(2, ("00" + (u[h][d].getMonth() + 1)).slice(-2), "sbcs"), 
                        G.write_shift(2, ("00" + u[h][d].getDate()).slice(-2), "sbcs")) : G.write_shift(8, "00000000", "sbcs");
                        break;

                      case "C":
                        var J = String(u[h][d] != null ? u[h][d] : "").slice(0, S[d]);
                        for (G.write_shift(1, J, "sbcs"), p = 0; p < S[d] - J.length; ++p) G.write_shift(1, 32);
                    }
                }
                return i.next(1).write_shift(1, 26), i.end();
            }
        };
    }(), zo = function() {
        var e = {
            AA: "À",
            BA: "Á",
            CA: "Â",
            DA: 195,
            HA: "Ä",
            JA: 197,
            AE: "È",
            BE: "É",
            CE: "Ê",
            HE: "Ë",
            AI: "Ì",
            BI: "Í",
            CI: "Î",
            HI: "Ï",
            AO: "Ò",
            BO: "Ó",
            CO: "Ô",
            DO: 213,
            HO: "Ö",
            AU: "Ù",
            BU: "Ú",
            CU: "Û",
            HU: "Ü",
            Aa: "à",
            Ba: "á",
            Ca: "â",
            Da: 227,
            Ha: "ä",
            Ja: 229,
            Ae: "è",
            Be: "é",
            Ce: "ê",
            He: "ë",
            Ai: "ì",
            Bi: "í",
            Ci: "î",
            Hi: "ï",
            Ao: "ò",
            Bo: "ó",
            Co: "ô",
            Do: 245,
            Ho: "ö",
            Au: "ù",
            Bu: "ú",
            Cu: "û",
            Hu: "ü",
            KC: "Ç",
            Kc: "ç",
            q: "æ",
            z: "œ",
            a: "Æ",
            j: "Œ",
            DN: 209,
            Dn: 241,
            Hy: 255,
            S: 169,
            c: 170,
            R: 174,
            "B ": 180,
            0: 176,
            1: 177,
            2: 178,
            3: 179,
            5: 181,
            6: 182,
            7: 183,
            Q: 185,
            k: 186,
            b: 208,
            i: 216,
            l: 222,
            s: 240,
            y: 248,
            "!": 161,
            '"': 162,
            "#": 163,
            "(": 164,
            "%": 165,
            "'": 167,
            "H ": 168,
            "+": 171,
            ";": 187,
            "<": 188,
            "=": 189,
            ">": 190,
            "?": 191,
            "{": 223
        }, r = new RegExp("N(" + Je(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), t = function(i, o) {
            var f = e[o];
            return typeof f == "number" ? na(f) : f;
        }, n = function(i, o, f) {
            var u = o.charCodeAt(0) - 32 << 4 | f.charCodeAt(0) - 48;
            return u == 59 ? i : na(u);
        };
        function a(i, o) {
            var f, u = i.split(/[\n\r]+/), c = -1, h = -1, d = 0, p = 0, g = [], E = [], x = null, S = {}, m = [], w = [], v = [], T = 0;
            for (+o.codepage >= 0 && vr(+o.codepage); d !== u.length; ++d) {
                T = 0;
                var A, C = u[d].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(r, t), I = C.replace(/;;/g, "\0").split(";").map(function(ke) {
                    return ke.replace(/\u0000/g, ";");
                }), D = I[0];
                if (C.length > 0) switch (D) {
                  case "ID":
                  case "E":
                  case "B":
                  case "O":
                  case "W":
                    break;

                  case "P":
                    I[1].charAt(0) == "P" && E.push(C.slice(3).replace(/;;/g, ";"));
                    break;

                  case "C":
                    var N = !1, G = !1, B = !1, J = !1, ne = -1, ce = -1;
                    for (p = 1; p < I.length; ++p) switch (I[p].charAt(0)) {
                      case "A":
                      case "G":
                        break;

                      case "X":
                        h = parseInt(I[p].slice(1)) - 1, G = !0;
                        break;

                      case "Y":
                        for (c = parseInt(I[p].slice(1)) - 1, G || (h = 0), f = g.length; f <= c; ++f) g[f] = [];
                        break;

                      case "K":
                        (A = I[p].slice(1)).charAt(0) === '"' ? A = A.slice(1, A.length - 1) : A === "TRUE" ? A = !0 : A === "FALSE" ? A = !1 : isNaN(Pt(A)) ? isNaN(Sr(A).getDate()) || (A = it(A)) : (A = Pt(A), 
                        x !== null && ba(x) && (A = Ra(A))), N = !0;
                        break;

                      case "E":
                        J = !0;
                        var K = hl(I[p].slice(1), {
                            r: c,
                            c: h
                        });
                        g[c][h] = [ g[c][h], K ];
                        break;

                      case "S":
                        B = !0, g[c][h] = [ g[c][h], "S5S" ];
                        break;

                      case "R":
                        ne = parseInt(I[p].slice(1)) - 1;
                        break;

                      case "C":
                        ce = parseInt(I[p].slice(1)) - 1;
                        break;

                      default:
                        if (o && o.WTF) throw new Error("SYLK bad record " + C);
                    }
                    if (N && (g[c][h] && g[c][h].length == 2 ? g[c][h][0] = A : g[c][h] = A, 
                    x = null), B) {
                        if (J) throw new Error("SYLK shared formula cannot have own formula");
                        var W = ne > -1 && g[ne][ce];
                        if (!W || !W[1]) throw new Error("SYLK shared formula cannot find base");
                        g[c][h][1] = ul(W[1], {
                            r: c - ne,
                            c: h - ce
                        });
                    }
                    break;

                  case "F":
                    var Se = 0;
                    for (p = 1; p < I.length; ++p) switch (I[p].charAt(0)) {
                      case "X":
                        h = parseInt(I[p].slice(1)) - 1, ++Se;
                        break;

                      case "Y":
                        for (c = parseInt(I[p].slice(1)) - 1, f = g.length; f <= c; ++f) g[f] = [];
                        break;

                      case "M":
                        T = parseInt(I[p].slice(1)) / 20;
                        break;

                      case "F":
                      case "G":
                      case "S":
                      case "D":
                      case "N":
                        break;

                      case "P":
                        x = E[parseInt(I[p].slice(1))];
                        break;

                      case "W":
                        for (v = I[p].slice(1).split(" "), f = parseInt(v[0], 10); f <= parseInt(v[1], 10); ++f) T = parseInt(v[2], 10), 
                        w[f - 1] = T === 0 ? {
                            hidden: !0
                        } : {
                            wch: T
                        }, Mn(w[f - 1]);
                        break;

                      case "C":
                        w[h = parseInt(I[p].slice(1)) - 1] || (w[h] = {});
                        break;

                      case "R":
                        m[c = parseInt(I[p].slice(1)) - 1] || (m[c] = {}), T > 0 ? (m[c].hpt = T, 
                        m[c].hpx = Ps(T)) : T === 0 && (m[c].hidden = !0);
                        break;

                      default:
                        if (o && o.WTF) throw new Error("SYLK bad record " + C);
                    }
                    Se < 1 && (x = null);
                    break;

                  default:
                    if (o && o.WTF) throw new Error("SYLK bad record " + C);
                }
            }
            return m.length > 0 && (S["!rows"] = m), w.length > 0 && (S["!cols"] = w), 
            o && o.sheetRows && (g = g.slice(0, o.sheetRows)), [ g, S ];
        }
        function s(i, o) {
            var f = function(d, p) {
                switch (p.type) {
                  case "base64":
                    return a(Nt(d), p);

                  case "binary":
                    return a(d, p);

                  case "buffer":
                    return a(be && Buffer.isBuffer(d) ? d.toString("binary") : wr(d), p);

                  case "array":
                    return a(Yr(d), p);
                }
                throw new Error("Unrecognized type " + p.type);
            }(i, o), u = f[0], c = f[1], h = ir(u, o);
            return Je(c).forEach(function(d) {
                h[d] = c[d];
            }), h;
        }
        function l(i, o, f, u) {
            var c = "C;Y" + (f + 1) + ";X" + (u + 1) + ";K";
            switch (i.t) {
              case "n":
                c += i.v || 0, i.f && !i.F && (c += ";E" + Bn(i.f, {
                    r: f,
                    c: u
                }));
                break;

              case "b":
                c += i.v ? "TRUE" : "FALSE";
                break;

              case "e":
                c += i.w || i.v;
                break;

              case "d":
                c += '"' + (i.w || i.v) + '"';
                break;

              case "s":
                c += '"' + i.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
            }
            return c;
        }
        return e["|"] = 254, {
            to_workbook: function(i, o) {
                return Yt(s(i, o), o);
            },
            to_sheet: s,
            from_sheet: function(i, o) {
                var f, u, c = [ "ID;PWXL;N;E" ], h = [], d = Ne(i["!ref"]), p = Array.isArray(i), g = `\r
`;
                c.push("P;PGeneral"), c.push("F;P0;DG0G8;M255"), i["!cols"] && (u = c, 
                i["!cols"].forEach(function(m, w) {
                    var v = "F;W" + (w + 1) + " " + (w + 1) + " ";
                    m.hidden ? v += "0" : (typeof m.width != "number" || m.wpx || (m.wpx = en(m.width)), 
                    typeof m.wpx != "number" || m.wch || (m.wch = tn(m.wpx)), typeof m.wch == "number" && (v += Math.round(m.wch))), 
                    v.charAt(v.length - 1) != " " && u.push(v);
                })), i["!rows"] && function(m, w) {
                    w.forEach(function(v, T) {
                        var A = "F;";
                        v.hidden ? A += "M0;" : v.hpt ? A += "M" + 20 * v.hpt + ";" : v.hpx && (A += "M" + 20 * rn(v.hpx) + ";"), 
                        A.length > 2 && m.push(A + "R" + (T + 1));
                    });
                }(c, i["!rows"]), c.push("B;Y" + (d.e.r - d.s.r + 1) + ";X" + (d.e.c - d.s.c + 1) + ";D" + [ d.s.c, d.s.r, d.e.c, d.e.r ].join(" "));
                for (var E = d.s.r; E <= d.e.r; ++E) for (var x = d.s.c; x <= d.e.c; ++x) {
                    var S = Re({
                        r: E,
                        c: x
                    });
                    (f = p ? (i[E] || [])[x] : i[S]) && (f.v != null || f.f && !f.F) && h.push(l(f, 0, E, x));
                }
                return c.join(g) + g + h.join(g) + g + "E" + g;
            }
        };
    }(), $o = function() {
        function e(t, n) {
            for (var a = t.split(`
`), s = -1, l = -1, i = 0, o = []; i !== a.length; ++i) if (a[i].trim() !== "BOT") {
                if (!(s < 0)) {
                    for (var f = a[i].trim().split(","), u = f[0], c = f[1], h = a[++i] || ""; 1 & (h.match(/["]/g) || []).length && i < a.length - 1; ) h += `
` + a[++i];
                    switch (h = h.trim(), +u) {
                      case -1:
                        if (h === "BOT") {
                            o[++s] = [], l = 0;
                            continue;
                        }
                        if (h !== "EOD") throw new Error("Unrecognized DIF special command " + h);
                        break;

                      case 0:
                        h === "TRUE" ? o[s][l] = !0 : h === "FALSE" ? o[s][l] = !1 : isNaN(Pt(c)) ? isNaN(Sr(c).getDate()) ? o[s][l] = c : o[s][l] = it(c) : o[s][l] = Pt(c), 
                        ++l;
                        break;

                      case 1:
                        (h = (h = h.slice(1, h.length - 1)).replace(/""/g, '"')) && h.match(/^=".*"$/) && (h = h.slice(2, -1)), 
                        o[s][l++] = h !== "" ? h : null;
                    }
                    if (h === "EOD") break;
                }
            } else o[++s] = [], l = 0;
            return n && n.sheetRows && (o = o.slice(0, n.sheetRows)), o;
        }
        function r(t, n) {
            return ir(function(a, s) {
                switch (s.type) {
                  case "base64":
                    return e(Nt(a), s);

                  case "binary":
                    return e(a, s);

                  case "buffer":
                    return e(be && Buffer.isBuffer(a) ? a.toString("binary") : wr(a), s);

                  case "array":
                    return e(Yr(a), s);
                }
                throw new Error("Unrecognized type " + s.type);
            }(t, n), n);
        }
        return {
            to_workbook: function(t, n) {
                return Yt(r(t, n), n);
            },
            to_sheet: r,
            from_sheet: function() {
                var t = function(a, s, l, i, o) {
                    a.push(s), a.push(l + "," + i), a.push('"' + o.replace(/"/g, '""') + '"');
                }, n = function(a, s, l, i) {
                    a.push(s + "," + l), a.push(s == 1 ? '"' + i.replace(/"/g, '""') + '"' : i);
                };
                return function(a) {
                    var s, l = [], i = Ne(a["!ref"]), o = Array.isArray(a);
                    t(l, "TABLE", 0, 1, "sheetjs"), t(l, "VECTORS", 0, i.e.r - i.s.r + 1, ""), 
                    t(l, "TUPLES", 0, i.e.c - i.s.c + 1, ""), t(l, "DATA", 0, 0, "");
                    for (var f = i.s.r; f <= i.e.r; ++f) {
                        n(l, -1, 0, "BOT");
                        for (var u = i.s.c; u <= i.e.c; ++u) {
                            var c = Re({
                                r: f,
                                c: u
                            });
                            if (s = o ? (a[f] || [])[u] : a[c]) switch (s.t) {
                              case "n":
                                var h = s.w;
                                h || s.v == null || (h = s.v), h == null ? s.f && !s.F ? n(l, 1, 0, "=" + s.f) : n(l, 1, 0, "") : n(l, 0, h, "V");
                                break;

                              case "b":
                                n(l, 0, s.v ? 1 : 0, s.v ? "TRUE" : "FALSE");
                                break;

                              case "s":
                                n(l, 1, 0, isNaN(s.v) ? s.v : '="' + s.v + '"');
                                break;

                              case "d":
                                s.w || (s.w = Ht(s.z || Le[14], lt(it(s.v)))), n(l, 0, s.w, "V");
                                break;

                              default:
                                n(l, 1, 0, "");
                            } else n(l, 1, 0, "");
                        }
                    }
                    return n(l, -1, 0, "EOD"), l.join(`\r
`);
                };
            }()
        };
    }(), Rs = function() {
        function e(i) {
            return i.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
        }
        function r(i, o) {
            return ir(function(f, u) {
                for (var c = f.split(`
`), h = -1, d = -1, p = 0, g = []; p !== c.length; ++p) {
                    var E = c[p].trim().split(":");
                    if (E[0] === "cell") {
                        var x = ze(E[1]);
                        if (g.length <= x.r) for (h = g.length; h <= x.r; ++h) g[h] || (g[h] = []);
                        switch (h = x.r, d = x.c, E[2]) {
                          case "t":
                            g[h][d] = E[3].replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
                            break;

                          case "v":
                            g[h][d] = +E[3];
                            break;

                          case "vtf":
                            var S = E[E.length - 1];

                          case "vtc":
                            E[3] === "nl" ? g[h][d] = !!+E[4] : g[h][d] = +E[4], 
                            E[2] == "vtf" && (g[h][d] = [ g[h][d], S ]);
                        }
                    }
                }
                return u && u.sheetRows && (g = g.slice(0, u.sheetRows)), g;
            }(i, o), o);
        }
        var t = [ "socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave" ].join(`
`), n = [ "--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8" ].join(`
`) + `
`, a = [ "# SocialCalc Spreadsheet Control Save", "part:sheet" ].join(`
`), s = "--SocialCalcSpreadsheetControlSave--";
        function l(i) {
            if (!i || !i["!ref"]) return "";
            for (var o, f = [], u = [], c = "", h = mt(i["!ref"]), d = Array.isArray(i), p = h.s.r; p <= h.e.r; ++p) for (var g = h.s.c; g <= h.e.c; ++g) if (c = Re({
                r: p,
                c: g
            }), (o = d ? (i[p] || [])[g] : i[c]) && o.v != null && o.t !== "z") {
                switch (u = [ "cell", c, "t" ], o.t) {
                  case "s":
                  case "str":
                    u.push(e(o.v));
                    break;

                  case "n":
                    o.f ? (u[2] = "vtf", u[3] = "n", u[4] = o.v, u[5] = e(o.f)) : (u[2] = "v", 
                    u[3] = o.v);
                    break;

                  case "b":
                    u[2] = "vt" + (o.f ? "f" : "c"), u[3] = "nl", u[4] = o.v ? "1" : "0", 
                    u[5] = e(o.f || (o.v ? "TRUE" : "FALSE"));
                    break;

                  case "d":
                    var E = lt(it(o.v));
                    u[2] = "vtc", u[3] = "nd", u[4] = "" + E, u[5] = o.w || Ht(o.z || Le[14], E);
                    break;

                  case "e":
                    continue;
                }
                f.push(u.join(":"));
            }
            return f.push("sheet:c:" + (h.e.c - h.s.c + 1) + ":r:" + (h.e.r - h.s.r + 1) + ":tvf:1"), 
            f.push("valueformat:1:text-wiki"), f.join(`
`);
        }
        return {
            to_workbook: function(i, o) {
                return Yt(r(i, o), o);
            },
            to_sheet: r,
            from_sheet: function(i) {
                return [ t, n, a, n, l(i), s ].join(`
`);
            }
        };
    }(), Xo = function() {
        function e(i, o, f, u, c) {
            c.raw ? o[f][u] = i : i === "" || (i === "TRUE" ? o[f][u] = !0 : i === "FALSE" ? o[f][u] = !1 : isNaN(Pt(i)) ? isNaN(Sr(i).getDate()) ? o[f][u] = i : o[f][u] = it(i) : o[f][u] = Pt(i));
        }
        var r = {
            44: ",",
            9: "\t",
            59: ";",
            124: "|"
        }, t = {
            44: 3,
            9: 2,
            59: 1,
            124: 0
        };
        function n(i) {
            for (var o = {}, f = !1, u = 0, c = 0; u < i.length; ++u) (c = i.charCodeAt(u)) == 34 ? f = !f : !f && c in r && (o[c] = (o[c] || 0) + 1);
            for (u in c = [], o) Object.prototype.hasOwnProperty.call(o, u) && c.push([ o[u], u ]);
            if (!c.length) for (u in o = t) Object.prototype.hasOwnProperty.call(o, u) && c.push([ o[u], u ]);
            return c.sort(function(h, d) {
                return h[0] - d[0] || t[h[1]] - t[d[1]];
            }), r[c.pop()[1]] || 44;
        }
        function a(i, o) {
            var f = o || {}, u = "", c = f.dense ? [] : {}, h = {
                s: {
                    c: 0,
                    r: 0
                },
                e: {
                    c: 0,
                    r: 0
                }
            };
            i.slice(0, 4) == "sep=" ? i.charCodeAt(5) == 13 && i.charCodeAt(6) == 10 ? (u = i.charAt(4), 
            i = i.slice(7)) : i.charCodeAt(5) == 13 || i.charCodeAt(5) == 10 ? (u = i.charAt(4), 
            i = i.slice(6)) : u = n(i.slice(0, 1024)) : u = f && f.FS ? f.FS : n(i.slice(0, 1024));
            var d = 0, p = 0, g = 0, E = 0, x = 0, S = u.charCodeAt(0), m = !1, w = 0, v = i.charCodeAt(0);
            i = i.replace(/\r\n/gm, `
`);
            var T, A, C = f.dateNF != null ? (T = f.dateNF, A = (A = typeof T == "number" ? Le[T] : T).replace(xa, "(\\d+)"), 
            new RegExp("^" + A + "$")) : null;
            function I() {
                var D = i.slice(E, x), N = {};
                if (D.charAt(0) == '"' && D.charAt(D.length - 1) == '"' && (D = D.slice(1, -1).replace(/""/g, '"')), 
                D.length === 0) N.t = "z"; else if (f.raw) N.t = "s", N.v = D; else if (D.trim().length === 0) N.t = "s", 
                N.v = D; else if (D.charCodeAt(0) == 61) D.charCodeAt(1) == 34 && D.charCodeAt(D.length - 1) == 34 ? (N.t = "s", 
                N.v = D.slice(2, -1).replace(/""/g, '"')) : D.length != 1 ? (N.t = "n", 
                N.f = D.slice(1)) : (N.t = "s", N.v = D); else if (D == "TRUE") N.t = "b", 
                N.v = !0; else if (D == "FALSE") N.t = "b", N.v = !1; else if (isNaN(g = Pt(D))) if (!isNaN(Sr(D).getDate()) || C && D.match(C)) {
                    N.z = f.dateNF || Le[14];
                    var G = 0;
                    C && D.match(C) && (D = function(B, J, ne) {
                        var ce = -1, K = -1, W = -1, Se = -1, ke = -1, ge = -1;
                        (J.match(xa) || []).forEach(function(Ie, Fe) {
                            var Ue = parseInt(ne[Fe + 1], 10);
                            switch (Ie.toLowerCase().charAt(0)) {
                              case "y":
                                ce = Ue;
                                break;

                              case "d":
                                W = Ue;
                                break;

                              case "h":
                                Se = Ue;
                                break;

                              case "s":
                                ge = Ue;
                                break;

                              case "m":
                                Se >= 0 ? ke = Ue : K = Ue;
                            }
                        }), ge >= 0 && ke == -1 && K >= 0 && (ke = K, K = -1);
                        var le = ("" + (ce >= 0 ? ce : new Date().getFullYear())).slice(-4) + "-" + ("00" + (K >= 1 ? K : 1)).slice(-2) + "-" + ("00" + (W >= 1 ? W : 1)).slice(-2);
                        le.length == 7 && (le = "0" + le), le.length == 8 && (le = "20" + le);
                        var ve = ("00" + (Se >= 0 ? Se : 0)).slice(-2) + ":" + ("00" + (ke >= 0 ? ke : 0)).slice(-2) + ":" + ("00" + (ge >= 0 ? ge : 0)).slice(-2);
                        return Se == -1 && ke == -1 && ge == -1 ? le : ce == -1 && K == -1 && W == -1 ? ve : le + "T" + ve;
                    }(0, f.dateNF, D.match(C) || []), G = 1), f.cellDates ? (N.t = "d", 
                    N.v = it(D, G)) : (N.t = "n", N.v = lt(it(D, G))), f.cellText !== !1 && (N.w = Ht(N.z, N.v instanceof Date ? lt(N.v) : N.v)), 
                    f.cellNF || delete N.z;
                } else N.t = "s", N.v = D; else N.t = "n", f.cellText !== !1 && (N.w = D), 
                N.v = g;
                if (N.t == "z" || (f.dense ? (c[d] || (c[d] = []), c[d][p] = N) : c[Re({
                    c: p,
                    r: d
                })] = N), E = x + 1, v = i.charCodeAt(E), h.e.c < p && (h.e.c = p), 
                h.e.r < d && (h.e.r = d), w == S) ++p; else if (p = 0, ++d, f.sheetRows && f.sheetRows <= d) return !0;
            }
            e: for (;x < i.length; ++x) switch (w = i.charCodeAt(x)) {
              case 34:
                v === 34 && (m = !m);
                break;

              case S:
              case 10:
              case 13:
                if (!m && I()) break e;
            }
            return x - E > 0 && I(), c["!ref"] = We(h), c;
        }
        function s(i, o) {
            return o && o.PRN ? o.FS || i.slice(0, 4) == "sep=" || i.indexOf("\t") >= 0 || i.indexOf(",") >= 0 || i.indexOf(";") >= 0 ? a(i, o) : ir(function(f, u) {
                var c = u || {}, h = [];
                if (!f || f.length === 0) return h;
                for (var d = f.split(/[\r\n]/), p = d.length - 1; p >= 0 && d[p].length === 0; ) --p;
                for (var g = 10, E = 0, x = 0; x <= p; ++x) (E = d[x].indexOf(" ")) == -1 ? E = d[x].length : E++, 
                g = Math.max(g, E);
                for (x = 0; x <= p; ++x) {
                    h[x] = [];
                    var S = 0;
                    for (e(d[x].slice(0, g).trim(), h, x, S, c), S = 1; S <= (d[x].length - g) / 10 + 1; ++S) e(d[x].slice(g + 10 * (S - 1), g + 10 * S).trim(), h, x, S, c);
                }
                return c.sheetRows && (h = h.slice(0, c.sheetRows)), h;
            }(i, o), o) : a(i, o);
        }
        function l(i, o) {
            var f = "", u = o.type == "string" ? [ 0, 0, 0, 0 ] : function(c, h) {
                var d = "";
                switch ((h || {}).type || "base64") {
                  case "buffer":
                  case "array":
                    return [ c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7] ];

                  case "base64":
                    d = Nt(c.slice(0, 12));
                    break;

                  case "binary":
                    d = c;
                    break;

                  default:
                    throw new Error("Unrecognized type " + (h && h.type || "undefined"));
                }
                return [ d.charCodeAt(0), d.charCodeAt(1), d.charCodeAt(2), d.charCodeAt(3), d.charCodeAt(4), d.charCodeAt(5), d.charCodeAt(6), d.charCodeAt(7) ];
            }(i, o);
            switch (o.type) {
              case "base64":
                f = Nt(i);
                break;

              case "binary":
              case "string":
                f = i;
                break;

              case "buffer":
                o.codepage == 65001 ? f = i.toString("utf8") : (o.codepage, f = be && Buffer.isBuffer(i) ? i.toString("binary") : wr(i));
                break;

              case "array":
                f = Yr(i);
                break;

              default:
                throw new Error("Unrecognized type " + o.type);
            }
            return u[0] == 239 && u[1] == 187 && u[2] == 191 ? f = Ar(f.slice(3)) : o.type != "string" && o.type != "buffer" && o.codepage == 65001 ? f = Ar(f) : o.type, 
            f.slice(0, 19) == "socialcalc:version:" ? Rs.to_sheet(o.type == "string" ? f : Ar(f), o) : s(f, o);
        }
        return {
            to_workbook: function(i, o) {
                return Yt(l(i, o), o);
            },
            to_sheet: l,
            from_sheet: function(i) {
                for (var o, f = [], u = Ne(i["!ref"]), c = Array.isArray(i), h = u.s.r; h <= u.e.r; ++h) {
                    for (var d = [], p = u.s.c; p <= u.e.c; ++p) {
                        var g = Re({
                            r: h,
                            c: p
                        });
                        if ((o = c ? (i[h] || [])[p] : i[g]) && o.v != null) {
                            for (var E = (o.w || (Mt(o), o.w) || "").slice(0, 10); E.length < 10; ) E += " ";
                            d.push(E + (p === 0 ? " " : ""));
                        } else d.push("          ");
                    }
                    f.push(d.join(""));
                }
                return f.join(`
`);
            }
        };
    }(), Cs = function() {
        function e(m, w, v) {
            if (m) {
                dt(m, m.l || 0);
                for (var T = v.Enum || x; m.l < m.length; ) {
                    var A = m.read_shift(2), C = T[A] || T[65535], I = m.read_shift(2), D = m.l + I, N = C.f && C.f(m, I, v);
                    if (m.l = D, w(N, C, A)) return;
                }
            }
        }
        function r(m, w) {
            if (!m) return m;
            var v = w || {}, T = v.dense ? [] : {}, A = "Sheet1", C = "", I = 0, D = {}, N = [], G = [], B = {
                s: {
                    r: 0,
                    c: 0
                },
                e: {
                    r: 0,
                    c: 0
                }
            }, J = v.sheetRows || 0;
            if (m[2] == 0 && (m[3] == 8 || m[3] == 9) && m.length >= 16 && m[14] == 5 && m[15] === 108) throw new Error("Unsupported Works 3 for Mac file");
            if (m[2] == 2) v.Enum = x, e(m, function(W, Se, ke) {
                switch (ke) {
                  case 0:
                    v.vers = W, W >= 4096 && (v.qpro = !0);
                    break;

                  case 6:
                    B = W;
                    break;

                  case 204:
                    W && (C = W);
                    break;

                  case 222:
                    C = W;
                    break;

                  case 15:
                  case 51:
                    v.qpro || (W[1].v = W[1].v.slice(1));

                  case 13:
                  case 14:
                  case 16:
                    ke == 14 && !(112 & ~W[2]) && (15 & W[2]) > 1 && (15 & W[2]) < 15 && (W[1].z = v.dateNF || Le[14], 
                    v.cellDates && (W[1].t = "d", W[1].v = Ra(W[1].v))), v.qpro && W[3] > I && (T["!ref"] = We(B), 
                    D[A] = T, N.push(A), T = v.dense ? [] : {}, B = {
                        s: {
                            r: 0,
                            c: 0
                        },
                        e: {
                            r: 0,
                            c: 0
                        }
                    }, I = W[3], A = C || "Sheet" + (I + 1), C = "");
                    var ge = v.dense ? (T[W[0].r] || [])[W[0].c] : T[Re(W[0])];
                    if (ge) {
                        ge.t = W[1].t, ge.v = W[1].v, W[1].z != null && (ge.z = W[1].z), 
                        W[1].f != null && (ge.f = W[1].f);
                        break;
                    }
                    v.dense ? (T[W[0].r] || (T[W[0].r] = []), T[W[0].r][W[0].c] = W[1]) : T[Re(W[0])] = W[1];
                }
            }, v); else {
                if (m[2] != 26 && m[2] != 14) throw new Error("Unrecognized LOTUS BOF " + m[2]);
                v.Enum = S, m[2] == 14 && (v.qpro = !0, m.l = 0), e(m, function(W, Se, ke) {
                    switch (ke) {
                      case 204:
                        A = W;
                        break;

                      case 22:
                        W[1].v = W[1].v.slice(1);

                      case 23:
                      case 24:
                      case 25:
                      case 37:
                      case 39:
                      case 40:
                        if (W[3] > I && (T["!ref"] = We(B), D[A] = T, N.push(A), 
                        T = v.dense ? [] : {}, B = {
                            s: {
                                r: 0,
                                c: 0
                            },
                            e: {
                                r: 0,
                                c: 0
                            }
                        }, I = W[3], A = "Sheet" + (I + 1)), J > 0 && W[0].r >= J) break;
                        v.dense ? (T[W[0].r] || (T[W[0].r] = []), T[W[0].r][W[0].c] = W[1]) : T[Re(W[0])] = W[1], 
                        B.e.c < W[0].c && (B.e.c = W[0].c), B.e.r < W[0].r && (B.e.r = W[0].r);
                        break;

                      case 27:
                        W[14e3] && (G[W[14e3][0]] = W[14e3][1]);
                        break;

                      case 1537:
                        G[W[0]] = W[1], W[0] == I && (A = W[1]);
                    }
                }, v);
            }
            if (T["!ref"] = We(B), D[C || A] = T, N.push(C || A), !G.length) return {
                SheetNames: N,
                Sheets: D
            };
            for (var ne = {}, ce = [], K = 0; K < G.length; ++K) D[N[K]] ? (ce.push(G[K] || N[K]), 
            ne[G[K]] = D[G[K]] || D[N[K]]) : (ce.push(G[K]), ne[G[K]] = {
                "!ref": "A1"
            });
            return {
                SheetNames: ce,
                Sheets: ne
            };
        }
        function t(m, w, v) {
            var T = [ {
                c: 0,
                r: 0
            }, {
                t: "n",
                v: 0
            }, 0, 0 ];
            return v.qpro && v.vers != 20768 ? (T[0].c = m.read_shift(1), T[3] = m.read_shift(1), 
            T[0].r = m.read_shift(2), m.l += 2) : (T[2] = m.read_shift(1), T[0].c = m.read_shift(2), 
            T[0].r = m.read_shift(2)), T;
        }
        function n(m, w, v) {
            var T = m.l + w, A = t(m, 0, v);
            if (A[1].t = "s", v.vers == 20768) {
                m.l++;
                var C = m.read_shift(1);
                return A[1].v = m.read_shift(C, "utf8"), A;
            }
            return v.qpro && m.l++, A[1].v = m.read_shift(T - m.l, "cstr"), A;
        }
        function a(m, w, v) {
            var T = M(7 + v.length);
            T.write_shift(1, 255), T.write_shift(2, w), T.write_shift(2, m), T.write_shift(1, 39);
            for (var A = 0; A < T.length; ++A) {
                var C = v.charCodeAt(A);
                T.write_shift(1, C >= 128 ? 95 : C);
            }
            return T.write_shift(1, 0), T;
        }
        function s(m, w, v) {
            var T = M(7);
            return T.write_shift(1, 255), T.write_shift(2, w), T.write_shift(2, m), 
            T.write_shift(2, v, "i"), T;
        }
        function l(m, w, v) {
            var T = M(13);
            return T.write_shift(1, 255), T.write_shift(2, w), T.write_shift(2, m), 
            T.write_shift(8, v, "f"), T;
        }
        function i(m, w, v) {
            var T = 32768 & w;
            return w = (T ? m : 0) + ((w &= -32769) >= 8192 ? w - 16384 : w), (T ? "" : "$") + (v ? rt(w) : qe(w));
        }
        var o = {
            51: [ "FALSE", 0 ],
            52: [ "TRUE", 0 ],
            70: [ "LEN", 1 ],
            80: [ "SUM", 69 ],
            81: [ "AVERAGEA", 69 ],
            82: [ "COUNTA", 69 ],
            83: [ "MINA", 69 ],
            84: [ "MAXA", 69 ],
            111: [ "T", 1 ]
        }, f = [ "", "", "", "", "", "", "", "", "", "+", "-", "*", "/", "^", "=", "<>", "<=", ">=", "<", ">", "", "", "", "", "&", "", "", "", "", "", "", "" ];
        function u(m) {
            var w = [ {
                c: 0,
                r: 0
            }, {
                t: "n",
                v: 0
            }, 0 ];
            return w[0].r = m.read_shift(2), w[3] = m[m.l++], w[0].c = m[m.l++], 
            w;
        }
        function c(m, w, v, T) {
            var A = M(6 + T.length);
            A.write_shift(2, m), A.write_shift(1, v), A.write_shift(1, w), A.write_shift(1, 39);
            for (var C = 0; C < T.length; ++C) {
                var I = T.charCodeAt(C);
                A.write_shift(1, I >= 128 ? 95 : I);
            }
            return A.write_shift(1, 0), A;
        }
        function h(m, w) {
            var v = u(m), T = m.read_shift(4), A = m.read_shift(4), C = m.read_shift(2);
            if (C == 65535) return T === 0 && A === 3221225472 ? (v[1].t = "e", 
            v[1].v = 15) : T === 0 && A === 3489660928 ? (v[1].t = "e", v[1].v = 42) : v[1].v = 0, 
            v;
            var I = 32768 & C;
            return C = (32767 & C) - 16446, v[1].v = (1 - 2 * I) * (A * Math.pow(2, C + 32) + T * Math.pow(2, C)), 
            v;
        }
        function d(m, w, v, T) {
            var A = M(14);
            if (A.write_shift(2, m), A.write_shift(1, v), A.write_shift(1, w), T == 0) return A.write_shift(4, 0), 
            A.write_shift(4, 0), A.write_shift(2, 65535), A;
            var C, I = 0, D = 0, N = 0;
            return T < 0 && (I = 1, T = -T), D = 0 | Math.log2(T), 2147483648 & (N = (T /= Math.pow(2, D - 31)) >>> 0) || (++D, 
            N = (T /= 2) >>> 0), T -= N, N |= 2147483648, N >>>= 0, C = (T *= Math.pow(2, 32)) >>> 0, 
            A.write_shift(4, C), A.write_shift(4, N), D += 16383 + (I ? 32768 : 0), 
            A.write_shift(2, D), A;
        }
        function p(m, w) {
            var v = u(m), T = m.read_shift(8, "f");
            return v[1].v = T, v;
        }
        function g(m, w) {
            return m[m.l + w - 1] == 0 ? m.read_shift(w, "cstr") : "";
        }
        function E(m, w) {
            var v = M(5 + m.length);
            v.write_shift(2, 14e3), v.write_shift(2, w);
            for (var T = 0; T < m.length; ++T) {
                var A = m.charCodeAt(T);
                v[v.l++] = A > 127 ? 95 : A;
            }
            return v[v.l++] = 0, v;
        }
        var x = {
            0: {
                n: "BOF",
                f: Es
            },
            1: {
                n: "EOF"
            },
            2: {
                n: "CALCMODE"
            },
            3: {
                n: "CALCORDER"
            },
            4: {
                n: "SPLIT"
            },
            5: {
                n: "SYNC"
            },
            6: {
                n: "RANGE",
                f: function(m, w, v) {
                    var T = {
                        s: {
                            c: 0,
                            r: 0
                        },
                        e: {
                            c: 0,
                            r: 0
                        }
                    };
                    return w == 8 && v.qpro ? (T.s.c = m.read_shift(1), m.l++, T.s.r = m.read_shift(2), 
                    T.e.c = m.read_shift(1), m.l++, T.e.r = m.read_shift(2), T) : (T.s.c = m.read_shift(2), 
                    T.s.r = m.read_shift(2), w == 12 && v.qpro && (m.l += 2), T.e.c = m.read_shift(2), 
                    T.e.r = m.read_shift(2), w == 12 && v.qpro && (m.l += 2), T.s.c == 65535 && (T.s.c = T.e.c = T.s.r = T.e.r = 0), 
                    T);
                }
            },
            7: {
                n: "WINDOW1"
            },
            8: {
                n: "COLW1"
            },
            9: {
                n: "WINTWO"
            },
            10: {
                n: "COLW2"
            },
            11: {
                n: "NAME"
            },
            12: {
                n: "BLANK"
            },
            13: {
                n: "INTEGER",
                f: function(m, w, v) {
                    var T = t(m, 0, v);
                    return T[1].v = m.read_shift(2, "i"), T;
                }
            },
            14: {
                n: "NUMBER",
                f: function(m, w, v) {
                    var T = t(m, 0, v);
                    return T[1].v = m.read_shift(8, "f"), T;
                }
            },
            15: {
                n: "LABEL",
                f: n
            },
            16: {
                n: "FORMULA",
                f: function(m, w, v) {
                    var T = m.l + w, A = t(m, 0, v);
                    if (A[1].v = m.read_shift(8, "f"), v.qpro) m.l = T; else {
                        var C = m.read_shift(2);
                        (function(I, D) {
                            dt(I, 0);
                            for (var N = [], G = 0, B = "", J = "", ne = "", ce = ""; I.l < I.length; ) {
                                var K = I[I.l++];
                                switch (K) {
                                  case 0:
                                    N.push(I.read_shift(8, "f"));
                                    break;

                                  case 1:
                                    J = i(D[0].c, I.read_shift(2), !0), B = i(D[0].r, I.read_shift(2), !1), 
                                    N.push(J + B);
                                    break;

                                  case 2:
                                    var W = i(D[0].c, I.read_shift(2), !0), Se = i(D[0].r, I.read_shift(2), !1);
                                    J = i(D[0].c, I.read_shift(2), !0), B = i(D[0].r, I.read_shift(2), !1), 
                                    N.push(W + Se + ":" + J + B);
                                    break;

                                  case 3:
                                    if (I.l < I.length) return;
                                    break;

                                  case 4:
                                    N.push("(" + N.pop() + ")");
                                    break;

                                  case 5:
                                    N.push(I.read_shift(2));
                                    break;

                                  case 6:
                                    for (var ke = ""; K = I[I.l++]; ) ke += String.fromCharCode(K);
                                    N.push('"' + ke.replace(/"/g, '""') + '"');
                                    break;

                                  case 8:
                                    N.push("-" + N.pop());
                                    break;

                                  case 23:
                                    N.push("+" + N.pop());
                                    break;

                                  case 22:
                                    N.push("NOT(" + N.pop() + ")");
                                    break;

                                  case 20:
                                  case 21:
                                    ce = N.pop(), ne = N.pop(), N.push([ "AND", "OR" ][K - 20] + "(" + ne + "," + ce + ")");
                                    break;

                                  default:
                                    if (K < 32 && f[K]) ce = N.pop(), ne = N.pop(), 
                                    N.push(ne + f[K] + ce); else {
                                        if (!o[K] || ((G = o[K][1]) == 69 && (G = I[I.l++]), 
                                        G > N.length)) return;
                                        var ge = N.slice(-G);
                                        N.length -= G, N.push(o[K][0] + "(" + ge.join(",") + ")");
                                    }
                                }
                            }
                            N.length == 1 && (D[1].f = "" + N[0]);
                        })(m.slice(m.l, m.l + C), A), m.l += C;
                    }
                    return A;
                }
            },
            24: {
                n: "TABLE"
            },
            25: {
                n: "ORANGE"
            },
            26: {
                n: "PRANGE"
            },
            27: {
                n: "SRANGE"
            },
            28: {
                n: "FRANGE"
            },
            29: {
                n: "KRANGE1"
            },
            32: {
                n: "HRANGE"
            },
            35: {
                n: "KRANGE2"
            },
            36: {
                n: "PROTEC"
            },
            37: {
                n: "FOOTER"
            },
            38: {
                n: "HEADER"
            },
            39: {
                n: "SETUP"
            },
            40: {
                n: "MARGINS"
            },
            41: {
                n: "LABELFMT"
            },
            42: {
                n: "TITLES"
            },
            43: {
                n: "SHEETJS"
            },
            45: {
                n: "GRAPH"
            },
            46: {
                n: "NGRAPH"
            },
            47: {
                n: "CALCCOUNT"
            },
            48: {
                n: "UNFORMATTED"
            },
            49: {
                n: "CURSORW12"
            },
            50: {
                n: "WINDOW"
            },
            51: {
                n: "STRING",
                f: n
            },
            55: {
                n: "PASSWORD"
            },
            56: {
                n: "LOCKED"
            },
            60: {
                n: "QUERY"
            },
            61: {
                n: "QUERYNAME"
            },
            62: {
                n: "PRINT"
            },
            63: {
                n: "PRINTNAME"
            },
            64: {
                n: "GRAPH2"
            },
            65: {
                n: "GRAPHNAME"
            },
            66: {
                n: "ZOOM"
            },
            67: {
                n: "SYMSPLIT"
            },
            68: {
                n: "NSROWS"
            },
            69: {
                n: "NSCOLS"
            },
            70: {
                n: "RULER"
            },
            71: {
                n: "NNAME"
            },
            72: {
                n: "ACOMM"
            },
            73: {
                n: "AMACRO"
            },
            74: {
                n: "PARSE"
            },
            102: {
                n: "PRANGES??"
            },
            103: {
                n: "RRANGES??"
            },
            104: {
                n: "FNAME??"
            },
            105: {
                n: "MRANGES??"
            },
            204: {
                n: "SHEETNAMECS",
                f: g
            },
            222: {
                n: "SHEETNAMELP",
                f: function(m, w) {
                    var v = m[m.l++];
                    v > w - 1 && (v = w - 1);
                    for (var T = ""; T.length < v; ) T += String.fromCharCode(m[m.l++]);
                    return T;
                }
            },
            65535: {
                n: ""
            }
        }, S = {
            0: {
                n: "BOF"
            },
            1: {
                n: "EOF"
            },
            2: {
                n: "PASSWORD"
            },
            3: {
                n: "CALCSET"
            },
            4: {
                n: "WINDOWSET"
            },
            5: {
                n: "SHEETCELLPTR"
            },
            6: {
                n: "SHEETLAYOUT"
            },
            7: {
                n: "COLUMNWIDTH"
            },
            8: {
                n: "HIDDENCOLUMN"
            },
            9: {
                n: "USERRANGE"
            },
            10: {
                n: "SYSTEMRANGE"
            },
            11: {
                n: "ZEROFORCE"
            },
            12: {
                n: "SORTKEYDIR"
            },
            13: {
                n: "FILESEAL"
            },
            14: {
                n: "DATAFILLNUMS"
            },
            15: {
                n: "PRINTMAIN"
            },
            16: {
                n: "PRINTSTRING"
            },
            17: {
                n: "GRAPHMAIN"
            },
            18: {
                n: "GRAPHSTRING"
            },
            19: {
                n: "??"
            },
            20: {
                n: "ERRCELL"
            },
            21: {
                n: "NACELL"
            },
            22: {
                n: "LABEL16",
                f: function(m, w) {
                    var v = u(m);
                    return v[1].t = "s", v[1].v = m.read_shift(w - 4, "cstr"), v;
                }
            },
            23: {
                n: "NUMBER17",
                f: h
            },
            24: {
                n: "NUMBER18",
                f: function(m, w) {
                    var v = u(m);
                    v[1].v = m.read_shift(2);
                    var T = v[1].v >> 1;
                    if (1 & v[1].v) switch (7 & T) {
                      case 0:
                        T = 5e3 * (T >> 3);
                        break;

                      case 1:
                        T = 500 * (T >> 3);
                        break;

                      case 2:
                        T = (T >> 3) / 20;
                        break;

                      case 3:
                        T = (T >> 3) / 200;
                        break;

                      case 4:
                        T = (T >> 3) / 2e3;
                        break;

                      case 5:
                        T = (T >> 3) / 2e4;
                        break;

                      case 6:
                        T = (T >> 3) / 16;
                        break;

                      case 7:
                        T = (T >> 3) / 64;
                    }
                    return v[1].v = T, v;
                }
            },
            25: {
                n: "FORMULA19",
                f: function(m, w) {
                    var v = h(m);
                    return m.l += w - 14, v;
                }
            },
            26: {
                n: "FORMULA1A"
            },
            27: {
                n: "XFORMAT",
                f: function(m, w) {
                    for (var v = {}, T = m.l + w; m.l < T; ) {
                        var A = m.read_shift(2);
                        if (A == 14e3) {
                            for (v[A] = [ 0, "" ], v[A][0] = m.read_shift(2); m[m.l]; ) v[A][1] += String.fromCharCode(m[m.l]), 
                            m.l++;
                            m.l++;
                        }
                    }
                    return v;
                }
            },
            28: {
                n: "DTLABELMISC"
            },
            29: {
                n: "DTLABELCELL"
            },
            30: {
                n: "GRAPHWINDOW"
            },
            31: {
                n: "CPA"
            },
            32: {
                n: "LPLAUTO"
            },
            33: {
                n: "QUERY"
            },
            34: {
                n: "HIDDENSHEET"
            },
            35: {
                n: "??"
            },
            37: {
                n: "NUMBER25",
                f: function(m, w) {
                    var v = u(m), T = m.read_shift(4);
                    return v[1].v = T >> 6, v;
                }
            },
            38: {
                n: "??"
            },
            39: {
                n: "NUMBER27",
                f: p
            },
            40: {
                n: "FORMULA28",
                f: function(m, w) {
                    var v = p(m);
                    return m.l += w - 10, v;
                }
            },
            142: {
                n: "??"
            },
            147: {
                n: "??"
            },
            150: {
                n: "??"
            },
            151: {
                n: "??"
            },
            152: {
                n: "??"
            },
            153: {
                n: "??"
            },
            154: {
                n: "??"
            },
            155: {
                n: "??"
            },
            156: {
                n: "??"
            },
            163: {
                n: "??"
            },
            174: {
                n: "??"
            },
            175: {
                n: "??"
            },
            176: {
                n: "??"
            },
            177: {
                n: "??"
            },
            184: {
                n: "??"
            },
            185: {
                n: "??"
            },
            186: {
                n: "??"
            },
            187: {
                n: "??"
            },
            188: {
                n: "??"
            },
            195: {
                n: "??"
            },
            201: {
                n: "??"
            },
            204: {
                n: "SHEETNAMECS",
                f: g
            },
            205: {
                n: "??"
            },
            206: {
                n: "??"
            },
            207: {
                n: "??"
            },
            208: {
                n: "??"
            },
            256: {
                n: "??"
            },
            259: {
                n: "??"
            },
            260: {
                n: "??"
            },
            261: {
                n: "??"
            },
            262: {
                n: "??"
            },
            263: {
                n: "??"
            },
            265: {
                n: "??"
            },
            266: {
                n: "??"
            },
            267: {
                n: "??"
            },
            268: {
                n: "??"
            },
            270: {
                n: "??"
            },
            271: {
                n: "??"
            },
            384: {
                n: "??"
            },
            389: {
                n: "??"
            },
            390: {
                n: "??"
            },
            393: {
                n: "??"
            },
            396: {
                n: "??"
            },
            512: {
                n: "??"
            },
            514: {
                n: "??"
            },
            513: {
                n: "??"
            },
            516: {
                n: "??"
            },
            517: {
                n: "??"
            },
            640: {
                n: "??"
            },
            641: {
                n: "??"
            },
            642: {
                n: "??"
            },
            643: {
                n: "??"
            },
            644: {
                n: "??"
            },
            645: {
                n: "??"
            },
            646: {
                n: "??"
            },
            647: {
                n: "??"
            },
            648: {
                n: "??"
            },
            658: {
                n: "??"
            },
            659: {
                n: "??"
            },
            660: {
                n: "??"
            },
            661: {
                n: "??"
            },
            662: {
                n: "??"
            },
            665: {
                n: "??"
            },
            666: {
                n: "??"
            },
            768: {
                n: "??"
            },
            772: {
                n: "??"
            },
            1537: {
                n: "SHEETINFOQP",
                f: function(m, w, v) {
                    if (v.qpro && !(w < 21)) {
                        var T = m.read_shift(1);
                        return m.l += 17, m.l += 1, m.l += 2, [ T, m.read_shift(w - 21, "cstr") ];
                    }
                }
            },
            1600: {
                n: "??"
            },
            1602: {
                n: "??"
            },
            1793: {
                n: "??"
            },
            1794: {
                n: "??"
            },
            1795: {
                n: "??"
            },
            1796: {
                n: "??"
            },
            1920: {
                n: "??"
            },
            2048: {
                n: "??"
            },
            2049: {
                n: "??"
            },
            2052: {
                n: "??"
            },
            2688: {
                n: "??"
            },
            10998: {
                n: "??"
            },
            12849: {
                n: "??"
            },
            28233: {
                n: "??"
            },
            28484: {
                n: "??"
            },
            65535: {
                n: ""
            }
        };
        return {
            sheet_to_wk1: function(m, w) {
                var v = w || {};
                if (+v.codepage >= 0 && vr(+v.codepage), v.type == "string") throw new Error("Cannot write WK1 to JS string");
                var T, A, C = ct(), I = Ne(m["!ref"]), D = Array.isArray(m), N = [];
                z(C, 0, (T = 1030, (A = M(2)).write_shift(2, T), A)), z(C, 6, function(W) {
                    var Se = M(8);
                    return Se.write_shift(2, W.s.c), Se.write_shift(2, W.s.r), Se.write_shift(2, W.e.c), 
                    Se.write_shift(2, W.e.r), Se;
                }(I));
                for (var G = Math.min(I.e.r, 8191), B = I.s.r; B <= G; ++B) for (var J = qe(B), ne = I.s.c; ne <= I.e.c; ++ne) {
                    B === I.s.r && (N[ne] = rt(ne));
                    var ce = N[ne] + J, K = D ? (m[B] || [])[ne] : m[ce];
                    K && K.t != "z" && (K.t == "n" ? (0 | K.v) == K.v && K.v >= -32768 && K.v <= 32767 ? z(C, 13, s(B, ne, K.v)) : z(C, 14, l(B, ne, K.v)) : z(C, 15, a(B, ne, Mt(K).slice(0, 239))));
                }
                return z(C, 1), C.end();
            },
            book_to_wk3: function(m, w) {
                var v = w || {};
                if (+v.codepage >= 0 && vr(+v.codepage), v.type == "string") throw new Error("Cannot write WK3 to JS string");
                var T = ct();
                z(T, 0, function(ke) {
                    var ge = M(26);
                    ge.write_shift(2, 4096), ge.write_shift(2, 4), ge.write_shift(4, 0);
                    for (var le = 0, ve = 0, Ie = 0, Fe = 0; Fe < ke.SheetNames.length; ++Fe) {
                        var Ue = ke.SheetNames[Fe], Ee = ke.Sheets[Ue];
                        if (Ee && Ee["!ref"]) {
                            ++Ie;
                            var je = mt(Ee["!ref"]);
                            le < je.e.r && (le = je.e.r), ve < je.e.c && (ve = je.e.c);
                        }
                    }
                    return le > 8191 && (le = 8191), ge.write_shift(2, le), ge.write_shift(1, Ie), 
                    ge.write_shift(1, ve), ge.write_shift(2, 0), ge.write_shift(2, 0), 
                    ge.write_shift(1, 1), ge.write_shift(1, 2), ge.write_shift(4, 0), 
                    ge.write_shift(4, 0), ge;
                }(m));
                for (var A = 0, C = 0; A < m.SheetNames.length; ++A) (m.Sheets[m.SheetNames[A]] || {})["!ref"] && z(T, 27, E(m.SheetNames[A], C++));
                var I = 0;
                for (A = 0; A < m.SheetNames.length; ++A) {
                    var D = m.Sheets[m.SheetNames[A]];
                    if (D && D["!ref"]) {
                        for (var N = Ne(D["!ref"]), G = Array.isArray(D), B = [], J = Math.min(N.e.r, 8191), ne = N.s.r; ne <= J; ++ne) for (var ce = qe(ne), K = N.s.c; K <= N.e.c; ++K) {
                            ne === N.s.r && (B[K] = rt(K));
                            var W = B[K] + ce, Se = G ? (D[ne] || [])[K] : D[W];
                            Se && Se.t != "z" && (Se.t == "n" ? z(T, 23, d(ne, K, I, Se.v)) : z(T, 22, c(ne, K, I, Mt(Se).slice(0, 239))));
                        }
                        ++I;
                    }
                }
                return z(T, 1), T.end();
            },
            to_workbook: function(m, w) {
                switch (w.type) {
                  case "base64":
                    return r(Et(Nt(m)), w);

                  case "binary":
                    return r(Et(m), w);

                  case "buffer":
                  case "array":
                    return r(m, w);
                }
                throw "Unsupported type " + w.type;
            }
        };
    }(), Yo = /^\s|\s$|[\t\n\r]/;
    function ks(e, r) {
        if (!r.bookSST) return "";
        var t = [ Be ];
        t[t.length] = V("sst", null, {
            xmlns: ar[0],
            count: e.Count,
            uniqueCount: e.Unique
        });
        for (var n = 0; n != e.length; ++n) if (e[n] != null) {
            var a = e[n], s = "<si>";
            a.r ? s += a.r : (s += "<t", a.t || (a.t = ""), a.t.match(Yo) && (s += ' xml:space="preserve"'), 
            s += ">" + xe(a.t) + "</t>"), s += "</si>", t[t.length] = s;
        }
        return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), 
        t.join("");
    }
    var Ko = function(e, r) {
        var t = !1;
        return r == null && (t = !0, r = M(15 + 4 * e.t.length)), r.write_shift(1, 0), 
        $e(e.t, r), t ? r.slice(0, r.l) : r;
    };
    function Jo(e) {
        var r = ct();
        F(r, 159, function(n, a) {
            return a || (a = M(8)), a.write_shift(4, n.Count), a.write_shift(4, n.Unique), 
            a;
        }(e));
        for (var t = 0; t < e.length; ++t) F(r, 19, Ko(e[t]));
        return F(r, 160), r.end();
    }
    function Ns(e) {
        var r, t, n = 0, a = function(l) {
            for (var i = [], o = l.split(""), f = 0; f < o.length; ++f) i[f] = o[f].charCodeAt(0);
            return i;
        }(e), s = a.length + 1;
        for ((r = $t(s))[0] = a.length, t = 1; t != s; ++t) r[t] = a[t - 1];
        for (t = s - 1; t >= 0; --t) n = ((16384 & n ? 1 : 0) | n << 1 & 32767) ^ r[t];
        return 52811 ^ n;
    }
    var Zo = function() {
        function e(t, n) {
            switch (n.type) {
              case "base64":
                return r(Nt(t), n);

              case "binary":
                return r(t, n);

              case "buffer":
                return r(be && Buffer.isBuffer(t) ? t.toString("binary") : wr(t), n);

              case "array":
                return r(Yr(t), n);
            }
            throw new Error("Unrecognized type " + n.type);
        }
        function r(t, n) {
            var a = (n || {}).dense ? [] : {}, s = t.match(/\\trowd.*?\\row\b/g);
            if (!s.length) throw new Error("RTF missing table");
            var l = {
                s: {
                    c: 0,
                    r: 0
                },
                e: {
                    c: 0,
                    r: s.length - 1
                }
            };
            return s.forEach(function(i, o) {
                Array.isArray(a) && (a[o] = []);
                for (var f, u = /\\\w+\b/g, c = 0, h = -1; f = u.exec(i); ) {
                    if (f[0] === "\\cell") {
                        var d = i.slice(c, u.lastIndex - f[0].length);
                        if (d[0] == " " && (d = d.slice(1)), ++h, d.length) {
                            var p = {
                                v: d,
                                t: "s"
                            };
                            Array.isArray(a) ? a[o][h] = p : a[Re({
                                r: o,
                                c: h
                            })] = p;
                        }
                    }
                    c = u.lastIndex;
                }
                h > l.e.c && (l.e.c = h);
            }), a["!ref"] = We(l), a;
        }
        return {
            to_workbook: function(t, n) {
                return Yt(e(t, n), n);
            },
            to_sheet: e,
            from_sheet: function(t) {
                for (var n, a = [ "{\\rtf1\\ansi" ], s = Ne(t["!ref"]), l = Array.isArray(t), i = s.s.r; i <= s.e.r; ++i) {
                    a.push("\\trowd\\trautofit1");
                    for (var o = s.s.c; o <= s.e.c; ++o) a.push("\\cellx" + (o + 1));
                    for (a.push("\\pard\\intbl"), o = s.s.c; o <= s.e.c; ++o) {
                        var f = Re({
                            r: i,
                            c: o
                        });
                        (n = l ? (t[i] || [])[o] : t[f]) && (n.v != null || n.f && !n.F) && (a.push(" " + (n.w || (Mt(n), 
                        n.w))), a.push("\\cell"));
                    }
                    a.push("\\pard\\intbl\\row");
                }
                return a.join("") + "}";
            }
        };
    }();
    function Is(e) {
        for (var r = 0, t = 1; r != 3; ++r) t = 256 * t + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
        return t.toString(16).toUpperCase().slice(1);
    }
    var Ft = 6;
    function en(e) {
        return Math.floor((e + Math.round(128 / Ft) / 256) * Ft);
    }
    function tn(e) {
        return Math.floor((e - 5) / Ft * 100 + .5) / 100;
    }
    function Ln(e) {
        return Math.round((e * Ft + 5) / Ft * 256) / 256;
    }
    function Mn(e) {
        e.width ? (e.wpx = en(e.width), e.wch = tn(e.wpx), e.MDW = Ft) : e.wpx ? (e.wch = tn(e.wpx), 
        e.width = Ln(e.wch), e.MDW = Ft) : typeof e.wch == "number" && (e.width = Ln(e.wch), 
        e.wpx = en(e.width), e.MDW = Ft), e.customWidth && delete e.customWidth;
    }
    var Ds = 96;
    function rn(e) {
        return 96 * e / Ds;
    }
    function Ps(e) {
        return e * Ds / 96;
    }
    function Ls(e, r) {
        var t, n = [ Be, V("styleSheet", null, {
            xmlns: ar[0],
            "xmlns:vt": Ve.vt
        }) ];
        return e.SSF && (t = function(a) {
            var s = [ "<numFmts>" ];
            return [ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 50, 392 ] ].forEach(function(l) {
                for (var i = l[0]; i <= l[1]; ++i) a[i] != null && (s[s.length] = V("numFmt", null, {
                    numFmtId: i,
                    formatCode: xe(a[i])
                }));
            }), s.length === 1 ? "" : (s[s.length] = "</numFmts>", s[0] = V("numFmts", null, {
                count: s.length - 2
            }).replace("/>", ">"), s.join(""));
        }(e.SSF)) != null && (n[n.length] = t), n[n.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', 
        n[n.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', 
        n[n.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', 
        n[n.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', 
        (t = function(a) {
            var s = [];
            return s[s.length] = V("cellXfs", null), a.forEach(function(l) {
                s[s.length] = V("xf", null, l);
            }), s[s.length] = "</cellXfs>", s.length === 2 ? "" : (s[0] = V("cellXfs", null, {
                count: s.length - 2
            }).replace("/>", ">"), s.join(""));
        }(r.cellXfs)) && (n[n.length] = t), n[n.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', 
        n[n.length] = '<dxfs count="0"/>', n[n.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', 
        n.length > 2 && (n[n.length] = "</styleSheet>", n[1] = n[1].replace("/>", ">")), 
        n.join("");
    }
    function qo(e, r, t) {
        t || (t = M(6 + 4 * r.length)), t.write_shift(2, e), $e(r, t);
        var n = t.length > t.l ? t.slice(0, t.l) : t;
        return t.l == null && (t.l = t.length), n;
    }
    function Qo(e, r) {
        r || (r = M(153)), r.write_shift(2, 20 * e.sz), function(a, s) {
            s || (s = M(2));
            var l = (a.italic ? 2 : 0) | (a.strike ? 8 : 0) | (a.outline ? 16 : 0) | (a.shadow ? 32 : 0) | (a.condense ? 64 : 0) | (a.extend ? 128 : 0);
            s.write_shift(1, l), s.write_shift(1, 0);
        }(e, r), r.write_shift(2, e.bold ? 700 : 400);
        var t = 0;
        e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), 
        r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), 
        r.write_shift(1, e.charset || 0), r.write_shift(1, 0), qr(e.color, r);
        var n = 0;
        return e.scheme == "major" && (n = 1), e.scheme == "minor" && (n = 2), r.write_shift(1, n), 
        $e(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
    }
    var Fn, el = [ "none", "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625" ], tl = Ot;
    function Ms(e, r) {
        r || (r = M(84)), Fn || (Fn = Tn(el));
        var t = Fn[e.patternType];
        t == null && (t = 40), r.write_shift(4, t);
        var n = 0;
        if (t != 40) for (qr({
            auto: 1
        }, r), qr({
            auto: 1
        }, r); n < 12; ++n) r.write_shift(4, 0); else {
            for (;n < 4; ++n) r.write_shift(4, 0);
            for (;n < 12; ++n) r.write_shift(4, 0);
        }
        return r.length > r.l ? r.slice(0, r.l) : r;
    }
    function Fs(e, r, t) {
        return t || (t = M(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), 
        t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), 
        t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), 
        t.write_shift(1, 0), t;
    }
    function Nr(e, r) {
        return r || (r = M(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), 
        r.write_shift(4, 0), r;
    }
    var rl = Ot;
    function nl(e) {
        var r;
        F(e, 613, At(1)), F(e, 46, (r || (r = M(51)), r.write_shift(1, 0), Nr(0, r), 
        Nr(0, r), Nr(0, r), Nr(0, r), Nr(0, r), r.length > r.l ? r.slice(0, r.l) : r)), 
        F(e, 614);
    }
    function al(e) {
        var r, t;
        F(e, 619, At(1)), F(e, 48, (r = {
            xfId: 0,
            builtinId: 0,
            name: "Normal"
        }, t || (t = M(52)), t.write_shift(4, r.xfId), t.write_shift(2, 1), t.write_shift(1, +r.builtinId), 
        t.write_shift(1, 0), Zr(r.name || "", t), t.length > t.l ? t.slice(0, t.l) : t)), 
        F(e, 620);
    }
    function sl(e) {
        F(e, 508, function(r, t, n) {
            var a = M(2052);
            return a.write_shift(4, r), Zr(t, a), Zr(n, a), a.length > a.l ? a.slice(0, a.l) : a;
        }(0, "TableStyleMedium9", "PivotStyleMedium4")), F(e, 509);
    }
    function il(e, r) {
        var t = ct();
        return F(t, 278), function(n, a) {
            if (a) {
                var s = 0;
                [ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 50, 392 ] ].forEach(function(l) {
                    for (var i = l[0]; i <= l[1]; ++i) a[i] != null && ++s;
                }), s != 0 && (F(n, 615, At(s)), [ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 50, 392 ] ].forEach(function(l) {
                    for (var i = l[0]; i <= l[1]; ++i) a[i] != null && F(n, 44, qo(i, a[i]));
                }), F(n, 616));
            }
        }(t, e.SSF), function(n) {
            F(n, 611, At(1)), F(n, 43, Qo({
                sz: 12,
                color: {
                    theme: 1
                },
                name: "Calibri",
                family: 2,
                scheme: "minor"
            })), F(n, 612);
        }(t), function(n) {
            F(n, 603, At(2)), F(n, 45, Ms({
                patternType: "none"
            })), F(n, 45, Ms({
                patternType: "gray125"
            })), F(n, 604);
        }(t), nl(t), function(n) {
            F(n, 626, At(1)), F(n, 47, Fs({
                numFmtId: 0,
                fontId: 0,
                fillId: 0,
                borderId: 0
            }, 65535)), F(n, 627);
        }(t), function(n, a) {
            F(n, 617, At(a.length)), a.forEach(function(s) {
                F(n, 47, Fs(s, 0));
            }), F(n, 618);
        }(t, r.cellXfs), al(t), function(n) {
            F(n, 505, At(0)), F(n, 506);
        }(t), sl(t), F(t, 279), t.end();
    }
    function Us(e, r) {
        if (r && r.themeXLSX) return r.themeXLSX;
        if (e && typeof e.raw == "string") return e.raw;
        var t = [ Be ];
        return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', 
        t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', 
        t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', 
        t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', 
        t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', 
        t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', 
        t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', 
        t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', 
        t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', 
        t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', 
        t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', 
        t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', 
        t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', 
        t[t.length] = '<a:font script="Hans" typeface="宋体"/>', t[t.length] = '<a:font script="Hant" typeface="新細明體"/>', 
        t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', 
        t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', 
        t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', 
        t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', 
        t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', 
        t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', 
        t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', 
        t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', 
        t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', 
        t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', 
        t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', 
        t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', 
        t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', 
        t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", 
        t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', 
        t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', 
        t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', 
        t[t.length] = '<a:font script="Hans" typeface="宋体"/>', t[t.length] = '<a:font script="Hant" typeface="新細明體"/>', 
        t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', 
        t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', 
        t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', 
        t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', 
        t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', 
        t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', 
        t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', 
        t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', 
        t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', 
        t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', 
        t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', 
        t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', 
        t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', 
        t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", 
        t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', 
        t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', 
        t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", 
        t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', 
        t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', 
        t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', 
        t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', 
        t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', 
        t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", 
        t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', 
        t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', 
        t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', 
        t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", 
        t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', 
        t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", 
        t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', 
        t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", 
        t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', 
        t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', 
        t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", 
        t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", 
        t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', 
        t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', 
        t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', 
        t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', 
        t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', 
        t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', 
        t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', 
        t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", 
        t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", 
        t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', 
        t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', 
        t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", 
        t[t.length] = "</a:theme>", t.join("");
    }
    function ol() {
        var e, r, t = ct();
        return F(t, 332), F(t, 334, At(1)), F(t, 335, ((r = M(12 + 2 * (e = {
            name: "XLDAPR",
            version: 12e4,
            flags: 3496657072
        }).name.length)).write_shift(4, e.flags), r.write_shift(4, e.version), $e(e.name, r), 
        r.slice(0, r.l))), F(t, 336), F(t, 339, function(n, a) {
            var s = M(8 + 2 * a.length);
            return s.write_shift(4, n), $e(a, s), s.slice(0, s.l);
        }(1, "XLDAPR")), F(t, 52), F(t, 35, At(514)), F(t, 4096, At(0)), F(t, 4097, Tt(1)), 
        F(t, 36), F(t, 53), F(t, 340), F(t, 337, function(n, a) {
            var s = M(8);
            return s.write_shift(4, n), s.write_shift(4, a ? 1 : 0), s;
        }(1, !0)), F(t, 51, function(n) {
            var a = M(4 + 8 * n.length);
            a.write_shift(4, n.length);
            for (var s = 0; s < n.length; ++s) a.write_shift(4, n[s][0]), a.write_shift(4, n[s][1]);
            return a;
        }([ [ 1, 0 ] ])), F(t, 338), F(t, 333), t.end();
    }
    function Bs() {
        var e = [ Be ];
        return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
    }
    var ur = 1024;
    function Hs(e, r) {
        for (var t = [ 21600, 21600 ], n = [ "m0,0l0", t[1], t[0], t[1], t[0], "0xe" ].join(","), a = [ V("xml", null, {
            "xmlns:v": ut.v,
            "xmlns:o": ut.o,
            "xmlns:x": ut.x,
            "xmlns:mv": ut.mv
        }).replace(/\/>/, ">"), V("o:shapelayout", V("o:idmap", null, {
            "v:ext": "edit",
            data: e
        }), {
            "v:ext": "edit"
        }), V("v:shapetype", [ V("v:stroke", null, {
            joinstyle: "miter"
        }), V("v:path", null, {
            gradientshapeok: "t",
            "o:connecttype": "rect"
        }) ].join(""), {
            id: "_x0000_t202",
            "o:spt": 202,
            coordsize: t.join(","),
            path: n
        }) ]; ur < 1e3 * e; ) ur += 1e3;
        return r.forEach(function(s) {
            var l = ze(s[0]), i = {
                color2: "#BEFF82",
                type: "gradient"
            };
            i.type == "gradient" && (i.angle = "-180");
            var o = i.type == "gradient" ? V("o:fill", null, {
                type: "gradientUnscaled",
                "v:ext": "view"
            }) : null, f = V("v:fill", o, i);
            ++ur, a = a.concat([ "<v:shape" + xr({
                id: "_x0000_s" + ur,
                type: "#_x0000_t202",
                style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (s[1].hidden ? ";visibility:hidden" : ""),
                fillcolor: "#ECFAD4",
                strokecolor: "#edeaa1"
            }) + ">", f, V("v:shadow", null, {
                on: "t",
                obscured: "t"
            }), V("v:path", null, {
                "o:connecttype": "none"
            }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", Ze("x:Anchor", [ l.c + 1, 0, l.r + 1, 0, l.c + 3, 20, l.r + 5, 20 ].join(",")), Ze("x:AutoFill", "False"), Ze("x:Row", String(l.r)), Ze("x:Column", String(l.c)), s[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>" ]);
        }), a.push("</xml>"), a.join("");
    }
    function Ws(e) {
        var r = [ Be, V("comments", null, {
            xmlns: ar[0]
        }) ], t = [];
        return r.push("<authors>"), e.forEach(function(n) {
            n[1].forEach(function(a) {
                var s = xe(a.a);
                t.indexOf(s) == -1 && (t.push(s), r.push("<author>" + s + "</author>")), 
                a.T && a.ID && t.indexOf("tc=" + a.ID) == -1 && (t.push("tc=" + a.ID), 
                r.push("<author>tc=" + a.ID + "</author>"));
            });
        }), t.length == 0 && (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")), 
        r.push("</authors>"), r.push("<commentList>"), e.forEach(function(n) {
            var a = 0, s = [];
            if (n[1][0] && n[1][0].T && n[1][0].ID ? a = t.indexOf("tc=" + n[1][0].ID) : n[1].forEach(function(o) {
                o.a && (a = t.indexOf(xe(o.a))), s.push(o.t || "");
            }), r.push('<comment ref="' + n[0] + '" authorId="' + a + '"><text>'), 
            s.length <= 1) r.push(Ze("t", xe(s[0] || ""))); else {
                for (var l = `Comment:
    ` + s[0] + `
`, i = 1; i < s.length; ++i) l += `Reply:
    ` + s[i] + `
`;
                r.push(Ze("t", xe(l)));
            }
            r.push("</text></comment>");
        }), r.push("</commentList>"), r.length > 2 && (r[r.length] = "</comments>", 
        r[1] = r[1].replace("/>", ">")), r.join("");
    }
    function ll(e, r, t) {
        var n = [ Be, V("ThreadedComments", null, {
            xmlns: Ve.TCMNT
        }).replace(/[\/]>/, ">") ];
        return e.forEach(function(a) {
            var s = "";
            (a[1] || []).forEach(function(l, i) {
                if (l.T) {
                    l.a && r.indexOf(l.a) == -1 && r.push(l.a);
                    var o = {
                        ref: a[0],
                        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t.tcid++).slice(-12) + "}"
                    };
                    i == 0 ? s = o.id : o.parentId = s, l.ID = o.id, l.a && (o.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r.indexOf(l.a)).slice(-12) + "}"), 
                    n.push(V("threadedComment", Ze("text", l.t || ""), o));
                } else delete l.ID;
            });
        }), n.push("</ThreadedComments>"), n.join("");
    }
    var fl = nt;
    function cl(e) {
        var r = ct(), t = [];
        return F(r, 628), F(r, 630), e.forEach(function(n) {
            n[1].forEach(function(a) {
                t.indexOf(a.a) > -1 || (t.push(a.a.slice(0, 54)), F(r, 632, function(s) {
                    return $e(s.slice(0, 54));
                }(a.a)));
            });
        }), F(r, 631), F(r, 633), e.forEach(function(n) {
            n[1].forEach(function(a) {
                a.iauthor = t.indexOf(a.a);
                var s = {
                    s: ze(n[0]),
                    e: ze(n[0])
                };
                F(r, 635, function(l, i) {
                    return i == null && (i = M(36)), i.write_shift(4, l[1].iauthor), 
                    or(l[0], i), i.write_shift(4, 0), i.write_shift(4, 0), i.write_shift(4, 0), 
                    i.write_shift(4, 0), i;
                }([ s, a ])), a.t && a.t.length > 0 && F(r, 637, Co(a)), F(r, 636), 
                delete a.iauthor;
            });
        }), F(r, 634), F(r, 629), r.end();
    }
    var Gs = [ "xlsb", "xlsm", "xlam", "biff8", "xla" ], hl = function() {
        var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = {
            r: 0,
            c: 0
        };
        function t(n, a, s, l) {
            var i = !1, o = !1;
            s.length == 0 ? o = !0 : s.charAt(0) == "[" && (o = !0, s = s.slice(1, -1)), 
            l.length == 0 ? i = !0 : l.charAt(0) == "[" && (i = !0, l = l.slice(1, -1));
            var f = s.length > 0 ? 0 | parseInt(s, 10) : 0, u = l.length > 0 ? 0 | parseInt(l, 10) : 0;
            return i ? u += r.c : --u, o ? f += r.r : --f, a + (i ? "" : "$") + rt(u) + (o ? "" : "$") + qe(f);
        }
        return function(n, a) {
            return r = a, n.replace(e, t);
        };
    }(), Un = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Bn = function() {
        return function(e, r) {
            return e.replace(Un, function(t, n, a, s, l, i) {
                var o = Rn(s) - (a ? 0 : r.c), f = On(i) - (l ? 0 : r.r);
                return n + "R" + (f == 0 ? "" : l ? f + 1 : "[" + f + "]") + "C" + (o == 0 ? "" : a ? o + 1 : "[" + o + "]");
            });
        };
    }();
    function ul(e, r) {
        return e.replace(Un, function(t, n, a, s, l, i) {
            return n + (a == "$" ? a + s : rt(Rn(s) + r.c)) + (l == "$" ? l + i : qe(On(i) + r.r));
        });
    }
    function He(e) {
        e.l += 1;
    }
    function Wt(e, r) {
        var t = e.read_shift(r == 1 ? 1 : 2);
        return [ 16383 & t, t >> 14 & 1, t >> 15 & 1 ];
    }
    function js(e, r, t) {
        var n = 2;
        if (t) {
            if (t.biff >= 2 && t.biff <= 5) return Vs(e);
            t.biff == 12 && (n = 4);
        }
        var a = e.read_shift(n), s = e.read_shift(n), l = Wt(e, 2), i = Wt(e, 2);
        return {
            s: {
                r: a,
                c: l[0],
                cRel: l[1],
                rRel: l[2]
            },
            e: {
                r: s,
                c: i[0],
                cRel: i[1],
                rRel: i[2]
            }
        };
    }
    function Vs(e) {
        var r = Wt(e, 2), t = Wt(e, 2), n = e.read_shift(1), a = e.read_shift(1);
        return {
            s: {
                r: r[0],
                c: n,
                cRel: r[1],
                rRel: r[2]
            },
            e: {
                r: t[0],
                c: a,
                cRel: t[1],
                rRel: t[2]
            }
        };
    }
    function zs(e, r, t) {
        if (t && t.biff >= 2 && t.biff <= 5) return function(s) {
            var l = Wt(s, 2), i = s.read_shift(1);
            return {
                r: l[0],
                c: i,
                cRel: l[1],
                rRel: l[2]
            };
        }(e);
        var n = e.read_shift(t && t.biff == 12 ? 4 : 2), a = Wt(e, 2);
        return {
            r: n,
            c: a[0],
            cRel: a[1],
            rRel: a[2]
        };
    }
    function pl(e) {
        var r = e.read_shift(2), t = e.read_shift(2);
        return {
            r: r,
            c: 255 & t,
            fQuoted: !!(16384 & t),
            cRel: t >> 15,
            rRel: t >> 15
        };
    }
    function $s(e) {
        var r = 1 & e[e.l + 1];
        return e.l += 4, [ r, 1 ];
    }
    function Xs(e) {
        return [ e.read_shift(1), e.read_shift(1) ];
    }
    function dl(e, r) {
        var t = [ e.read_shift(1) ];
        if (r == 12) switch (t[0]) {
          case 2:
            t[0] = 4;
            break;

          case 4:
            t[0] = 16;
            break;

          case 0:
            t[0] = 1;
            break;

          case 1:
            t[0] = 2;
        }
        switch (t[0]) {
          case 4:
            t[1] = function(n, a) {
                return n.read_shift(a) === 1;
            }(e, 1) ? "TRUE" : "FALSE", r != 12 && (e.l += 7);
            break;

          case 37:
          case 16:
            t[1] = kr[e[e.l]], e.l += r == 12 ? 4 : 8;
            break;

          case 0:
            e.l += 8;
            break;

          case 1:
            t[1] = lr(e);
            break;

          case 2:
            t[1] = function(n, a, s) {
                if (s.biff > 5) return function(i, o, f) {
                    var u = i.read_shift(f && f.biff == 2 ? 1 : 2);
                    return u === 0 ? (i.l++, "") : function(c, h, d) {
                        if (d) {
                            if (d.biff >= 2 && d.biff <= 5) return c.read_shift(h, "cpstr");
                            if (d.biff >= 12) return c.read_shift(h, "dbcs-cont");
                        }
                        return c.read_shift(1) === 0 ? c.read_shift(h, "sbcs-cont") : c.read_shift(h, "dbcs-cont");
                    }(i, u, f);
                }(n, 0, s);
                var l = n.read_shift(1);
                return l === 0 ? (n.l++, "") : n.read_shift(l, s.biff <= 4 || !n.lens ? "cpstr" : "sbcs-cont");
            }(e, 0, {
                biff: r > 0 && r < 8 ? 2 : r
            });
            break;

          default:
            throw new Error("Bad SerAr: " + t[0]);
        }
        return t;
    }
    function ml(e, r, t) {
        for (var n = e.read_shift(t.biff == 12 ? 4 : 2), a = [], s = 0; s != n; ++s) a.push((t.biff == 12 ? qt : Bo)(e));
        return a;
    }
    function gl(e, r, t) {
        var n = 0, a = 0;
        t.biff == 12 ? (n = e.read_shift(4), a = e.read_shift(4)) : (a = 1 + e.read_shift(1), 
        n = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--n, --a == 0 && (a = 256));
        for (var s = 0, l = []; s != n && (l[s] = []); ++s) for (var i = 0; i != a; ++i) l[s][i] = dl(e, t.biff);
        return l;
    }
    function Ir(e, r, t) {
        return e.l += 2, [ pl(e) ];
    }
    function Hn(e) {
        return e.l += 6, [];
    }
    function Ys(e) {
        return e.l += 2, [ Es(e), 1 & e.read_shift(2) ];
    }
    var vl = [ "Data", "All", "Headers", "??", "?Data2", "??", "?DataHeaders", "??", "Totals", "??", "??", "??", "?DataTotals", "??", "??", "??", "?Current" ], Ks = {
        1: {
            n: "PtgExp",
            f: function(e, r, t) {
                return e.l++, t && t.biff == 12 ? [ e.read_shift(4, "i"), 0 ] : [ e.read_shift(2), e.read_shift(t && t.biff == 2 ? 1 : 2) ];
            }
        },
        2: {
            n: "PtgTbl",
            f: Ot
        },
        3: {
            n: "PtgAdd",
            f: He
        },
        4: {
            n: "PtgSub",
            f: He
        },
        5: {
            n: "PtgMul",
            f: He
        },
        6: {
            n: "PtgDiv",
            f: He
        },
        7: {
            n: "PtgPower",
            f: He
        },
        8: {
            n: "PtgConcat",
            f: He
        },
        9: {
            n: "PtgLt",
            f: He
        },
        10: {
            n: "PtgLe",
            f: He
        },
        11: {
            n: "PtgEq",
            f: He
        },
        12: {
            n: "PtgGe",
            f: He
        },
        13: {
            n: "PtgGt",
            f: He
        },
        14: {
            n: "PtgNe",
            f: He
        },
        15: {
            n: "PtgIsect",
            f: He
        },
        16: {
            n: "PtgUnion",
            f: He
        },
        17: {
            n: "PtgRange",
            f: He
        },
        18: {
            n: "PtgUplus",
            f: He
        },
        19: {
            n: "PtgUminus",
            f: He
        },
        20: {
            n: "PtgPercent",
            f: He
        },
        21: {
            n: "PtgParen",
            f: He
        },
        22: {
            n: "PtgMissArg",
            f: He
        },
        23: {
            n: "PtgStr",
            f: function(e, r, t) {
                return e.l++, As(e, 0, t);
            }
        },
        26: {
            n: "PtgSheet",
            f: function(e, r, t) {
                return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, [ "PTGSHEET" ];
            }
        },
        27: {
            n: "PtgEndSheet",
            f: function(e, r, t) {
                return e.l += t.biff == 2 ? 4 : 5, [ "PTGENDSHEET" ];
            }
        },
        28: {
            n: "PtgErr",
            f: function(e) {
                return e.l++, kr[e.read_shift(1)];
            }
        },
        29: {
            n: "PtgBool",
            f: function(e) {
                return e.l++, e.read_shift(1) !== 0;
            }
        },
        30: {
            n: "PtgInt",
            f: function(e) {
                return e.l++, e.read_shift(2);
            }
        },
        31: {
            n: "PtgNum",
            f: function(e) {
                return e.l++, lr(e);
            }
        },
        32: {
            n: "PtgArray",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5;
                return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [ n ];
            }
        },
        33: {
            n: "PtgFunc",
            f: function(e, r, t) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(t && t.biff <= 3 ? 1 : 2);
                return [ Rl[a], qs[a], n ];
            }
        },
        34: {
            n: "PtgFuncVar",
            f: function(e, r, t) {
                var n = e[e.l++], a = e.read_shift(1), s = t && t.biff <= 3 ? [ n == 88 ? -1 : 0, e.read_shift(1) ] : function(l) {
                    return [ l[l.l + 1] >> 7, 32767 & l.read_shift(2) ];
                }(e);
                return [ a, (s[0] === 0 ? qs : Ol)[s[1]] ];
            }
        },
        35: {
            n: "PtgName",
            f: function(e, r, t) {
                var n = e.read_shift(1) >>> 5 & 3, a = !t || t.biff >= 8 ? 4 : 2, s = e.read_shift(a);
                switch (t.biff) {
                  case 2:
                    e.l += 5;
                    break;

                  case 3:
                  case 4:
                    e.l += 8;
                    break;

                  case 5:
                    e.l += 12;
                }
                return [ n, 0, s ];
            }
        },
        36: {
            n: "PtgRef",
            f: function(e, r, t) {
                var n = (96 & e[e.l]) >> 5;
                return e.l += 1, [ n, zs(e, 0, t) ];
            }
        },
        37: {
            n: "PtgArea",
            f: function(e, r, t) {
                return [ (96 & e[e.l++]) >> 5, js(e, t.biff >= 2 && t.biff, t) ];
            }
        },
        38: {
            n: "PtgMemArea",
            f: function(e, r, t) {
                var n = e.read_shift(1) >>> 5 & 3;
                return e.l += t && t.biff == 2 ? 3 : 4, [ n, e.read_shift(t && t.biff == 2 ? 1 : 2) ];
            }
        },
        39: {
            n: "PtgMemErr",
            f: Ot
        },
        40: {
            n: "PtgMemNoMem",
            f: Ot
        },
        41: {
            n: "PtgMemFunc",
            f: function(e, r, t) {
                return [ e.read_shift(1) >>> 5 & 3, e.read_shift(t && t.biff == 2 ? 1 : 2) ];
            }
        },
        42: {
            n: "PtgRefErr",
            f: function(e, r, t) {
                var n = e.read_shift(1) >>> 5 & 3;
                return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), 
                [ n ];
            }
        },
        43: {
            n: "PtgAreaErr",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5;
                return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [ n ];
            }
        },
        44: {
            n: "PtgRefN",
            f: function(e, r, t) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = function(s, l, i) {
                    var o = i && i.biff ? i.biff : 8;
                    if (o >= 2 && o <= 5) return function(d) {
                        var p = d.read_shift(2), g = d.read_shift(1), E = (32768 & p) >> 15, x = (16384 & p) >> 14;
                        return p &= 16383, E == 1 && p >= 8192 && (p -= 16384), 
                        x == 1 && g >= 128 && (g -= 256), {
                            r: p,
                            c: g,
                            cRel: x,
                            rRel: E
                        };
                    }(s);
                    var f = s.read_shift(o >= 12 ? 4 : 2), u = s.read_shift(2), c = (16384 & u) >> 14, h = (32768 & u) >> 15;
                    if (u &= 16383, h == 1) for (;f > 524287; ) f -= 1048576;
                    if (c == 1) for (;u > 8191; ) u -= 16384;
                    return {
                        r: f,
                        c: u,
                        cRel: c,
                        rRel: h
                    };
                }(e, 0, t);
                return [ n, a ];
            }
        },
        45: {
            n: "PtgAreaN",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5, a = function(s, l, i) {
                    if (i.biff < 8) return Vs(s);
                    var o = s.read_shift(i.biff == 12 ? 4 : 2), f = s.read_shift(i.biff == 12 ? 4 : 2), u = Wt(s, 2), c = Wt(s, 2);
                    return {
                        s: {
                            r: o,
                            c: u[0],
                            cRel: u[1],
                            rRel: u[2]
                        },
                        e: {
                            r: f,
                            c: c[0],
                            cRel: c[1],
                            rRel: c[2]
                        }
                    };
                }(e, 0, t);
                return [ n, a ];
            }
        },
        46: {
            n: "PtgMemAreaN",
            f: function(e) {
                return [ e.read_shift(1) >>> 5 & 3, e.read_shift(2) ];
            }
        },
        47: {
            n: "PtgMemNoMemN",
            f: function(e) {
                return [ e.read_shift(1) >>> 5 & 3, e.read_shift(2) ];
            }
        },
        57: {
            n: "PtgNameX",
            f: function(e, r, t) {
                return t.biff == 5 ? function(n) {
                    var a = n.read_shift(1) >>> 5 & 3, s = n.read_shift(2, "i");
                    n.l += 8;
                    var l = n.read_shift(2);
                    return n.l += 12, [ a, s, l ];
                }(e) : [ e.read_shift(1) >>> 5 & 3, e.read_shift(2), e.read_shift(4) ];
            }
        },
        58: {
            n: "PtgRef3d",
            f: function(e, r, t) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(2);
                return t && t.biff == 5 && (e.l += 12), [ n, a, zs(e, 0, t) ];
            }
        },
        59: {
            n: "PtgArea3d",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2, "i");
                if (t) switch (t.biff) {
                  case 5:
                    e.l += 12;
                    break;

                  case 12:
                }
                return [ n, a, js(e, 0, t) ];
            }
        },
        60: {
            n: "PtgRefErr3d",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2), s = 4;
                if (t) switch (t.biff) {
                  case 5:
                    s = 15;
                    break;

                  case 12:
                    s = 6;
                }
                return e.l += s, [ n, a ];
            }
        },
        61: {
            n: "PtgAreaErr3d",
            f: function(e, r, t) {
                var n = (96 & e[e.l++]) >> 5, a = e.read_shift(2), s = 8;
                if (t) switch (t.biff) {
                  case 5:
                    e.l += 12, s = 6;
                    break;

                  case 12:
                    s = 12;
                }
                return e.l += s, [ n, a ];
            }
        },
        255: {}
    }, Tl = {
        64: 32,
        96: 32,
        65: 33,
        97: 33,
        66: 34,
        98: 34,
        67: 35,
        99: 35,
        68: 36,
        100: 36,
        69: 37,
        101: 37,
        70: 38,
        102: 38,
        71: 39,
        103: 39,
        72: 40,
        104: 40,
        73: 41,
        105: 41,
        74: 42,
        106: 42,
        75: 43,
        107: 43,
        76: 44,
        108: 44,
        77: 45,
        109: 45,
        78: 46,
        110: 46,
        79: 47,
        111: 47,
        88: 34,
        120: 34,
        89: 57,
        121: 57,
        90: 58,
        122: 58,
        91: 59,
        123: 59,
        92: 60,
        124: 60,
        93: 61,
        125: 61
    }, wl = {
        1: {
            n: "PtgElfLel",
            f: Ys
        },
        2: {
            n: "PtgElfRw",
            f: Ir
        },
        3: {
            n: "PtgElfCol",
            f: Ir
        },
        6: {
            n: "PtgElfRwV",
            f: Ir
        },
        7: {
            n: "PtgElfColV",
            f: Ir
        },
        10: {
            n: "PtgElfRadical",
            f: Ir
        },
        11: {
            n: "PtgElfRadicalS",
            f: Hn
        },
        13: {
            n: "PtgElfColS",
            f: Hn
        },
        15: {
            n: "PtgElfColSV",
            f: Hn
        },
        16: {
            n: "PtgElfRadicalLel",
            f: Ys
        },
        25: {
            n: "PtgList",
            f: function(e) {
                e.l += 2;
                var r = e.read_shift(2), t = e.read_shift(2), n = e.read_shift(4), a = e.read_shift(2), s = e.read_shift(2);
                return {
                    ixti: r,
                    coltype: 3 & t,
                    rt: vl[t >> 2 & 31],
                    idx: n,
                    c: a,
                    C: s
                };
            }
        },
        29: {
            n: "PtgSxName",
            f: function(e) {
                return e.l += 2, [ e.read_shift(4) ];
            }
        },
        255: {}
    }, bl = {
        0: {
            n: "PtgAttrNoop",
            f: function(e) {
                return e.l += 4, [ 0, 0 ];
            }
        },
        1: {
            n: "PtgAttrSemi",
            f: function(e, r, t) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += t && t.biff == 2 ? 3 : 4, [ n ];
            }
        },
        2: {
            n: "PtgAttrIf",
            f: function(e, r, t) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [ n, e.read_shift(t && t.biff == 2 ? 1 : 2) ];
            }
        },
        4: {
            n: "PtgAttrChoose",
            f: function(e, r, t) {
                e.l += 2;
                for (var n = e.read_shift(t && t.biff == 2 ? 1 : 2), a = [], s = 0; s <= n; ++s) a.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
                return a;
            }
        },
        8: {
            n: "PtgAttrGoto",
            f: function(e, r, t) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [ n, e.read_shift(t && t.biff == 2 ? 1 : 2) ];
            }
        },
        16: {
            n: "PtgAttrSum",
            f: function(e, r, t) {
                e.l += t && t.biff == 2 ? 3 : 4;
            }
        },
        32: {
            n: "PtgAttrBaxcel",
            f: $s
        },
        33: {
            n: "PtgAttrBaxcel",
            f: $s
        },
        64: {
            n: "PtgAttrSpace",
            f: function(e) {
                return e.read_shift(2), Xs(e);
            }
        },
        65: {
            n: "PtgAttrSpaceSemi",
            f: function(e) {
                return e.read_shift(2), Xs(e);
            }
        },
        128: {
            n: "PtgAttrIfError",
            f: function(e) {
                var r = 255 & e[e.l + 1] ? 1 : 0;
                return e.l += 2, [ r, e.read_shift(2) ];
            }
        },
        255: {}
    };
    function El(e) {
        for (var r = [], t = 0; t < e.length; ++t) {
            for (var n = e[t], a = [], s = 0; s < n.length; ++s) {
                var l = n[s];
                l ? l[0] === 2 ? a.push('"' + l[1].replace(/"/g, '""') + '"') : a.push(l[1]) : a.push("");
            }
            r.push(a.join(","));
        }
        return r.join(";");
    }
    var Sl = {
        PtgAdd: "+",
        PtgConcat: "&",
        PtgDiv: "/",
        PtgEq: "=",
        PtgGe: ">=",
        PtgGt: ">",
        PtgLe: "<=",
        PtgLt: "<",
        PtgMul: "*",
        PtgNe: "<>",
        PtgPower: "^",
        PtgSub: "-"
    };
    function Js(e, r, t) {
        if (!e) return "SH33TJSERR0";
        if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
        if (!e.XTI) return "SH33TJSERR6";
        var n = e.XTI[r];
        if (t.biff < 8) return r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? "" : e.XTI[r - 1];
        if (!n) return "SH33TJSERR1";
        var a = "";
        if (t.biff > 8) switch (e[n[0]][0]) {
          case 357:
            return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];

          case 358:
            return t.SID != null ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[n[0]][0];

          default:
            return "SH33TJSSRC" + e[n[0]][0];
        }
        switch (e[n[0]][0][0]) {
          case 1025:
            return a = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", 
            n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]];

          case 14849:
            return e[n[0]].slice(1).map(function(s) {
                return s.Name;
            }).join(";;");

          default:
            return e[n[0]][0][3] ? (a = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", 
            n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
        }
    }
    function Zs(e, r, t) {
        var n = Js(e, r, t);
        return n == "#REF" ? n : function(a, s) {
            if (!(a || s && s.biff <= 5 && s.biff >= 2)) throw new Error("empty sheet name");
            return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(a) ? "'" + a + "'" : a;
        }(n, t);
    }
    function pr(e, r, t, n, a) {
        var s, l, i, o, f = a && a.biff || 8, u = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: 0,
                r: 0
            }
        }, c = [], h = 0, d = 0, p = "";
        if (!e[0] || !e[0][0]) return "";
        for (var g = -1, E = "", x = 0, S = e[0].length; x < S; ++x) {
            var m = e[0][x];
            switch (m[0]) {
              case "PtgUminus":
                c.push("-" + c.pop());
                break;

              case "PtgUplus":
                c.push("+" + c.pop());
                break;

              case "PtgPercent":
                c.push(c.pop() + "%");
                break;

              case "PtgAdd":
              case "PtgConcat":
              case "PtgDiv":
              case "PtgEq":
              case "PtgGe":
              case "PtgGt":
              case "PtgLe":
              case "PtgLt":
              case "PtgMul":
              case "PtgNe":
              case "PtgPower":
              case "PtgSub":
                if (s = c.pop(), l = c.pop(), g >= 0) {
                    switch (e[0][g][1][0]) {
                      case 0:
                        E = Me(" ", e[0][g][1][1]);
                        break;

                      case 1:
                        E = Me("\r", e[0][g][1][1]);
                        break;

                      default:
                        if (E = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
                    }
                    l += E, g = -1;
                }
                c.push(l + Sl[m[0]] + s);
                break;

              case "PtgIsect":
                s = c.pop(), l = c.pop(), c.push(l + " " + s);
                break;

              case "PtgUnion":
                s = c.pop(), l = c.pop(), c.push(l + "," + s);
                break;

              case "PtgRange":
                s = c.pop(), l = c.pop(), c.push(l + ":" + s);
                break;

              case "PtgAttrChoose":
              case "PtgAttrGoto":
              case "PtgAttrIf":
              case "PtgAttrIfError":
              case "PtgAttrBaxcel":
              case "PtgAttrSemi":
              case "PtgMemArea":
              case "PtgTbl":
              case "PtgMemErr":
              case "PtgMemAreaN":
              case "PtgMemNoMemN":
              case "PtgAttrNoop":
              case "PtgSheet":
              case "PtgEndSheet":
              case "PtgMemFunc":
              case "PtgMemNoMem":
                break;

              case "PtgRef":
                i = Rr(m[1][1], u, a), c.push(Cr(i, f));
                break;

              case "PtgRefN":
                i = t ? Rr(m[1][1], t, a) : m[1][1], c.push(Cr(i, f));
                break;

              case "PtgRef3d":
                h = m[1][1], i = Rr(m[1][2], u, a), p = Zs(n, h, a), c.push(p + "!" + Cr(i, f));
                break;

              case "PtgFunc":
              case "PtgFuncVar":
                var w = m[1][0], v = m[1][1];
                w || (w = 0);
                var T = (w &= 127) == 0 ? [] : c.slice(-w);
                c.length -= w, v === "User" && (v = T.shift()), c.push(v + "(" + T.join(",") + ")");
                break;

              case "PtgBool":
                c.push(m[1] ? "TRUE" : "FALSE");
                break;

              case "PtgInt":
              case "PtgErr":
                c.push(m[1]);
                break;

              case "PtgNum":
                c.push(String(m[1]));
                break;

              case "PtgStr":
                c.push('"' + m[1].replace(/"/g, '""') + '"');
                break;

              case "PtgAreaN":
                o = es(m[1][1], t ? {
                    s: t
                } : u, a), c.push(yn(o, a));
                break;

              case "PtgArea":
                o = es(m[1][1], u, a), c.push(yn(o, a));
                break;

              case "PtgArea3d":
                h = m[1][1], o = m[1][2], p = Zs(n, h, a), c.push(p + "!" + yn(o, a));
                break;

              case "PtgAttrSum":
                c.push("SUM(" + c.pop() + ")");
                break;

              case "PtgName":
                d = m[1][2];
                var A = (n.names || [])[d - 1] || (n[0] || [])[d], C = A ? A.Name : "SH33TJSNAME" + String(d);
                C && C.slice(0, 6) == "_xlfn." && !a.xlfn && (C = C.slice(6)), c.push(C);
                break;

              case "PtgNameX":
                var I, D = m[1][1];
                if (d = m[1][2], !(a.biff <= 5)) {
                    var N = "";
                    if (((n[D] || [])[0] || [])[0] == 14849 || (((n[D] || [])[0] || [])[0] == 1025 ? n[D][d] && n[D][d].itab > 0 && (N = n.SheetNames[n[D][d].itab - 1] + "!") : N = n.SheetNames[d - 1] + "!"), 
                    n[D] && n[D][d]) N += n[D][d].Name; else if (n[0] && n[0][d]) N += n[0][d].Name; else {
                        var G = (Js(n, D, a) || "").split(";;");
                        G[d - 1] ? N = G[d - 1] : N += "SH33TJSERRX";
                    }
                    c.push(N);
                    break;
                }
                D < 0 && (D = -D), n[D] && (I = n[D][d]), I || (I = {
                    Name: "SH33TJSERRY"
                }), c.push(I.Name);
                break;

              case "PtgParen":
                var B = "(", J = ")";
                if (g >= 0) {
                    switch (E = "", e[0][g][1][0]) {
                      case 2:
                        B = Me(" ", e[0][g][1][1]) + B;
                        break;

                      case 3:
                        B = Me("\r", e[0][g][1][1]) + B;
                        break;

                      case 4:
                        J = Me(" ", e[0][g][1][1]) + J;
                        break;

                      case 5:
                        J = Me("\r", e[0][g][1][1]) + J;
                        break;

                      default:
                        if (a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
                    }
                    g = -1;
                }
                c.push(B + c.pop() + J);
                break;

              case "PtgRefErr":
              case "PtgRefErr3d":
              case "PtgAreaErr":
              case "PtgAreaErr3d":
                c.push("#REF!");
                break;

              case "PtgExp":
                i = {
                    c: m[1][1],
                    r: m[1][0]
                };
                var ne = {
                    c: t.c,
                    r: t.r
                };
                if (n.sharedf[Re(i)]) {
                    var ce = n.sharedf[Re(i)];
                    c.push(pr(ce, u, ne, n, a));
                } else {
                    var K = !1;
                    for (s = 0; s != n.arrayf.length; ++s) if (l = n.arrayf[s], 
                    !(i.c < l[0].s.c || i.c > l[0].e.c || i.r < l[0].s.r || i.r > l[0].e.r)) {
                        c.push(pr(l[1], u, ne, n, a)), K = !0;
                        break;
                    }
                    K || c.push(m[1]);
                }
                break;

              case "PtgArray":
                c.push("{" + El(m[1]) + "}");
                break;

              case "PtgAttrSpace":
              case "PtgAttrSpaceSemi":
                g = x;
                break;

              case "PtgMissArg":
                c.push("");
                break;

              case "PtgList":
                c.push("Table" + m[1].idx + "[#" + m[1].rt + "]");
                break;

              case "PtgElfCol":
              case "PtgElfColS":
              case "PtgElfColSV":
              case "PtgElfColV":
              case "PtgElfLel":
              case "PtgElfRadical":
              case "PtgElfRadicalLel":
              case "PtgElfRadicalS":
              case "PtgElfRw":
              case "PtgElfRwV":
                throw new Error("Unsupported ELFs");

              default:
                throw new Error("Unrecognized Formula Token: " + String(m));
            }
            if (a.biff != 3 && g >= 0 && [ "PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto" ].indexOf(e[0][x][0]) == -1) {
                var W = !0;
                switch ((m = e[0][g])[1][0]) {
                  case 4:
                    W = !1;

                  case 0:
                    E = Me(" ", m[1][1]);
                    break;

                  case 5:
                    W = !1;

                  case 1:
                    E = Me("\r", m[1][1]);
                    break;

                  default:
                    if (E = "", a.WTF) throw new Error("Unexpected PtgAttrSpaceType " + m[1][0]);
                }
                c.push((W ? E : "") + c.pop() + (W ? "" : E)), g = -1;
            }
        }
        if (c.length > 1 && a.WTF) throw new Error("bad formula stack");
        return c[0];
    }
    function Al(e, r, t, n, a) {
        var s = er(r, t, a), l = function(u) {
            if (u == null) {
                var c = M(8);
                return c.write_shift(1, 3), c.write_shift(1, 0), c.write_shift(2, 0), 
                c.write_shift(2, 0), c.write_shift(2, 65535), c;
            }
            return fr(typeof u == "number" ? u : 0);
        }(e.v), i = M(6);
        i.write_shift(2, 33), i.write_shift(4, 0);
        for (var o = M(e.bf.length), f = 0; f < e.bf.length; ++f) o[f] = e.bf[f];
        return Ke([ s, l, i, o ]);
    }
    function nn(e, r, t) {
        var n = e.read_shift(4), a = function(i, o, f) {
            for (var u, c, h = i.l + o, d = []; h != i.l; ) o = h - i.l, c = i[i.l], 
            u = Ks[c] || Ks[Tl[c]], c !== 24 && c !== 25 || (u = (c === 24 ? wl : bl)[i[i.l + 1]]), 
            u && u.f ? d.push([ u.n, u.f(i, o, f) ]) : Ot(i, o);
            return d;
        }(e, n, t), s = e.read_shift(4), l = s > 0 ? function(i, o, f, u) {
            if (u.biff < 8) return Ot(i, o);
            for (var c = i.l + o, h = [], d = 0; d !== f.length; ++d) switch (f[d][0]) {
              case "PtgArray":
                f[d][1] = gl(i, 0, u), h.push(f[d][1]);
                break;

              case "PtgMemArea":
                f[d][2] = ml(i, f[d][1], u), h.push(f[d][2]);
                break;

              case "PtgExp":
                u && u.biff == 12 && (f[d][1][1] = i.read_shift(4), h.push(f[d][1]));
                break;

              case "PtgList":
              case "PtgElfRadicalS":
              case "PtgElfColS":
              case "PtgElfColSV":
                throw "Unsupported " + f[d][0];
            }
            return (o = c - i.l) != 0 && h.push(Ot(i, o)), h;
        }(e, s, a, t) : null;
        return [ a, l ];
    }
    var xl = nn, an = nn, _l = nn, yl = nn, Ol = {
        0: "BEEP",
        1: "OPEN",
        2: "OPEN.LINKS",
        3: "CLOSE.ALL",
        4: "SAVE",
        5: "SAVE.AS",
        6: "FILE.DELETE",
        7: "PAGE.SETUP",
        8: "PRINT",
        9: "PRINTER.SETUP",
        10: "QUIT",
        11: "NEW.WINDOW",
        12: "ARRANGE.ALL",
        13: "WINDOW.SIZE",
        14: "WINDOW.MOVE",
        15: "FULL",
        16: "CLOSE",
        17: "RUN",
        22: "SET.PRINT.AREA",
        23: "SET.PRINT.TITLES",
        24: "SET.PAGE.BREAK",
        25: "REMOVE.PAGE.BREAK",
        26: "FONT",
        27: "DISPLAY",
        28: "PROTECT.DOCUMENT",
        29: "PRECISION",
        30: "A1.R1C1",
        31: "CALCULATE.NOW",
        32: "CALCULATION",
        34: "DATA.FIND",
        35: "EXTRACT",
        36: "DATA.DELETE",
        37: "SET.DATABASE",
        38: "SET.CRITERIA",
        39: "SORT",
        40: "DATA.SERIES",
        41: "TABLE",
        42: "FORMAT.NUMBER",
        43: "ALIGNMENT",
        44: "STYLE",
        45: "BORDER",
        46: "CELL.PROTECTION",
        47: "COLUMN.WIDTH",
        48: "UNDO",
        49: "CUT",
        50: "COPY",
        51: "PASTE",
        52: "CLEAR",
        53: "PASTE.SPECIAL",
        54: "EDIT.DELETE",
        55: "INSERT",
        56: "FILL.RIGHT",
        57: "FILL.DOWN",
        61: "DEFINE.NAME",
        62: "CREATE.NAMES",
        63: "FORMULA.GOTO",
        64: "FORMULA.FIND",
        65: "SELECT.LAST.CELL",
        66: "SHOW.ACTIVE.CELL",
        67: "GALLERY.AREA",
        68: "GALLERY.BAR",
        69: "GALLERY.COLUMN",
        70: "GALLERY.LINE",
        71: "GALLERY.PIE",
        72: "GALLERY.SCATTER",
        73: "COMBINATION",
        74: "PREFERRED",
        75: "ADD.OVERLAY",
        76: "GRIDLINES",
        77: "SET.PREFERRED",
        78: "AXES",
        79: "LEGEND",
        80: "ATTACH.TEXT",
        81: "ADD.ARROW",
        82: "SELECT.CHART",
        83: "SELECT.PLOT.AREA",
        84: "PATTERNS",
        85: "MAIN.CHART",
        86: "OVERLAY",
        87: "SCALE",
        88: "FORMAT.LEGEND",
        89: "FORMAT.TEXT",
        90: "EDIT.REPEAT",
        91: "PARSE",
        92: "JUSTIFY",
        93: "HIDE",
        94: "UNHIDE",
        95: "WORKSPACE",
        96: "FORMULA",
        97: "FORMULA.FILL",
        98: "FORMULA.ARRAY",
        99: "DATA.FIND.NEXT",
        100: "DATA.FIND.PREV",
        101: "FORMULA.FIND.NEXT",
        102: "FORMULA.FIND.PREV",
        103: "ACTIVATE",
        104: "ACTIVATE.NEXT",
        105: "ACTIVATE.PREV",
        106: "UNLOCKED.NEXT",
        107: "UNLOCKED.PREV",
        108: "COPY.PICTURE",
        109: "SELECT",
        110: "DELETE.NAME",
        111: "DELETE.FORMAT",
        112: "VLINE",
        113: "HLINE",
        114: "VPAGE",
        115: "HPAGE",
        116: "VSCROLL",
        117: "HSCROLL",
        118: "ALERT",
        119: "NEW",
        120: "CANCEL.COPY",
        121: "SHOW.CLIPBOARD",
        122: "MESSAGE",
        124: "PASTE.LINK",
        125: "APP.ACTIVATE",
        126: "DELETE.ARROW",
        127: "ROW.HEIGHT",
        128: "FORMAT.MOVE",
        129: "FORMAT.SIZE",
        130: "FORMULA.REPLACE",
        131: "SEND.KEYS",
        132: "SELECT.SPECIAL",
        133: "APPLY.NAMES",
        134: "REPLACE.FONT",
        135: "FREEZE.PANES",
        136: "SHOW.INFO",
        137: "SPLIT",
        138: "ON.WINDOW",
        139: "ON.DATA",
        140: "DISABLE.INPUT",
        142: "OUTLINE",
        143: "LIST.NAMES",
        144: "FILE.CLOSE",
        145: "SAVE.WORKBOOK",
        146: "DATA.FORM",
        147: "COPY.CHART",
        148: "ON.TIME",
        149: "WAIT",
        150: "FORMAT.FONT",
        151: "FILL.UP",
        152: "FILL.LEFT",
        153: "DELETE.OVERLAY",
        155: "SHORT.MENUS",
        159: "SET.UPDATE.STATUS",
        161: "COLOR.PALETTE",
        162: "DELETE.STYLE",
        163: "WINDOW.RESTORE",
        164: "WINDOW.MAXIMIZE",
        166: "CHANGE.LINK",
        167: "CALCULATE.DOCUMENT",
        168: "ON.KEY",
        169: "APP.RESTORE",
        170: "APP.MOVE",
        171: "APP.SIZE",
        172: "APP.MINIMIZE",
        173: "APP.MAXIMIZE",
        174: "BRING.TO.FRONT",
        175: "SEND.TO.BACK",
        185: "MAIN.CHART.TYPE",
        186: "OVERLAY.CHART.TYPE",
        187: "SELECT.END",
        188: "OPEN.MAIL",
        189: "SEND.MAIL",
        190: "STANDARD.FONT",
        191: "CONSOLIDATE",
        192: "SORT.SPECIAL",
        193: "GALLERY.3D.AREA",
        194: "GALLERY.3D.COLUMN",
        195: "GALLERY.3D.LINE",
        196: "GALLERY.3D.PIE",
        197: "VIEW.3D",
        198: "GOAL.SEEK",
        199: "WORKGROUP",
        200: "FILL.GROUP",
        201: "UPDATE.LINK",
        202: "PROMOTE",
        203: "DEMOTE",
        204: "SHOW.DETAIL",
        206: "UNGROUP",
        207: "OBJECT.PROPERTIES",
        208: "SAVE.NEW.OBJECT",
        209: "SHARE",
        210: "SHARE.NAME",
        211: "DUPLICATE",
        212: "APPLY.STYLE",
        213: "ASSIGN.TO.OBJECT",
        214: "OBJECT.PROTECTION",
        215: "HIDE.OBJECT",
        216: "SET.EXTRACT",
        217: "CREATE.PUBLISHER",
        218: "SUBSCRIBE.TO",
        219: "ATTRIBUTES",
        220: "SHOW.TOOLBAR",
        222: "PRINT.PREVIEW",
        223: "EDIT.COLOR",
        224: "SHOW.LEVELS",
        225: "FORMAT.MAIN",
        226: "FORMAT.OVERLAY",
        227: "ON.RECALC",
        228: "EDIT.SERIES",
        229: "DEFINE.STYLE",
        240: "LINE.PRINT",
        243: "ENTER.DATA",
        249: "GALLERY.RADAR",
        250: "MERGE.STYLES",
        251: "EDITION.OPTIONS",
        252: "PASTE.PICTURE",
        253: "PASTE.PICTURE.LINK",
        254: "SPELLING",
        256: "ZOOM",
        259: "INSERT.OBJECT",
        260: "WINDOW.MINIMIZE",
        265: "SOUND.NOTE",
        266: "SOUND.PLAY",
        267: "FORMAT.SHAPE",
        268: "EXTEND.POLYGON",
        269: "FORMAT.AUTO",
        272: "GALLERY.3D.BAR",
        273: "GALLERY.3D.SURFACE",
        274: "FILL.AUTO",
        276: "CUSTOMIZE.TOOLBAR",
        277: "ADD.TOOL",
        278: "EDIT.OBJECT",
        279: "ON.DOUBLECLICK",
        280: "ON.ENTRY",
        281: "WORKBOOK.ADD",
        282: "WORKBOOK.MOVE",
        283: "WORKBOOK.COPY",
        284: "WORKBOOK.OPTIONS",
        285: "SAVE.WORKSPACE",
        288: "CHART.WIZARD",
        289: "DELETE.TOOL",
        290: "MOVE.TOOL",
        291: "WORKBOOK.SELECT",
        292: "WORKBOOK.ACTIVATE",
        293: "ASSIGN.TO.TOOL",
        295: "COPY.TOOL",
        296: "RESET.TOOL",
        297: "CONSTRAIN.NUMERIC",
        298: "PASTE.TOOL",
        302: "WORKBOOK.NEW",
        305: "SCENARIO.CELLS",
        306: "SCENARIO.DELETE",
        307: "SCENARIO.ADD",
        308: "SCENARIO.EDIT",
        309: "SCENARIO.SHOW",
        310: "SCENARIO.SHOW.NEXT",
        311: "SCENARIO.SUMMARY",
        312: "PIVOT.TABLE.WIZARD",
        313: "PIVOT.FIELD.PROPERTIES",
        314: "PIVOT.FIELD",
        315: "PIVOT.ITEM",
        316: "PIVOT.ADD.FIELDS",
        318: "OPTIONS.CALCULATION",
        319: "OPTIONS.EDIT",
        320: "OPTIONS.VIEW",
        321: "ADDIN.MANAGER",
        322: "MENU.EDITOR",
        323: "ATTACH.TOOLBARS",
        324: "VBAActivate",
        325: "OPTIONS.CHART",
        328: "VBA.INSERT.FILE",
        330: "VBA.PROCEDURE.DEFINITION",
        336: "ROUTING.SLIP",
        338: "ROUTE.DOCUMENT",
        339: "MAIL.LOGON",
        342: "INSERT.PICTURE",
        343: "EDIT.TOOL",
        344: "GALLERY.DOUGHNUT",
        350: "CHART.TREND",
        352: "PIVOT.ITEM.PROPERTIES",
        354: "WORKBOOK.INSERT",
        355: "OPTIONS.TRANSITION",
        356: "OPTIONS.GENERAL",
        370: "FILTER.ADVANCED",
        373: "MAIL.ADD.MAILER",
        374: "MAIL.DELETE.MAILER",
        375: "MAIL.REPLY",
        376: "MAIL.REPLY.ALL",
        377: "MAIL.FORWARD",
        378: "MAIL.NEXT.LETTER",
        379: "DATA.LABEL",
        380: "INSERT.TITLE",
        381: "FONT.PROPERTIES",
        382: "MACRO.OPTIONS",
        383: "WORKBOOK.HIDE",
        384: "WORKBOOK.UNHIDE",
        385: "WORKBOOK.DELETE",
        386: "WORKBOOK.NAME",
        388: "GALLERY.CUSTOM",
        390: "ADD.CHART.AUTOFORMAT",
        391: "DELETE.CHART.AUTOFORMAT",
        392: "CHART.ADD.DATA",
        393: "AUTO.OUTLINE",
        394: "TAB.ORDER",
        395: "SHOW.DIALOG",
        396: "SELECT.ALL",
        397: "UNGROUP.SHEETS",
        398: "SUBTOTAL.CREATE",
        399: "SUBTOTAL.REMOVE",
        400: "RENAME.OBJECT",
        412: "WORKBOOK.SCROLL",
        413: "WORKBOOK.NEXT",
        414: "WORKBOOK.PREV",
        415: "WORKBOOK.TAB.SPLIT",
        416: "FULL.SCREEN",
        417: "WORKBOOK.PROTECT",
        420: "SCROLLBAR.PROPERTIES",
        421: "PIVOT.SHOW.PAGES",
        422: "TEXT.TO.COLUMNS",
        423: "FORMAT.CHARTTYPE",
        424: "LINK.FORMAT",
        425: "TRACER.DISPLAY",
        430: "TRACER.NAVIGATE",
        431: "TRACER.CLEAR",
        432: "TRACER.ERROR",
        433: "PIVOT.FIELD.GROUP",
        434: "PIVOT.FIELD.UNGROUP",
        435: "CHECKBOX.PROPERTIES",
        436: "LABEL.PROPERTIES",
        437: "LISTBOX.PROPERTIES",
        438: "EDITBOX.PROPERTIES",
        439: "PIVOT.REFRESH",
        440: "LINK.COMBO",
        441: "OPEN.TEXT",
        442: "HIDE.DIALOG",
        443: "SET.DIALOG.FOCUS",
        444: "ENABLE.OBJECT",
        445: "PUSHBUTTON.PROPERTIES",
        446: "SET.DIALOG.DEFAULT",
        447: "FILTER",
        448: "FILTER.SHOW.ALL",
        449: "CLEAR.OUTLINE",
        450: "FUNCTION.WIZARD",
        451: "ADD.LIST.ITEM",
        452: "SET.LIST.ITEM",
        453: "REMOVE.LIST.ITEM",
        454: "SELECT.LIST.ITEM",
        455: "SET.CONTROL.VALUE",
        456: "SAVE.COPY.AS",
        458: "OPTIONS.LISTS.ADD",
        459: "OPTIONS.LISTS.DELETE",
        460: "SERIES.AXES",
        461: "SERIES.X",
        462: "SERIES.Y",
        463: "ERRORBAR.X",
        464: "ERRORBAR.Y",
        465: "FORMAT.CHART",
        466: "SERIES.ORDER",
        467: "MAIL.LOGOFF",
        468: "CLEAR.ROUTING.SLIP",
        469: "APP.ACTIVATE.MICROSOFT",
        470: "MAIL.EDIT.MAILER",
        471: "ON.SHEET",
        472: "STANDARD.WIDTH",
        473: "SCENARIO.MERGE",
        474: "SUMMARY.INFO",
        475: "FIND.FILE",
        476: "ACTIVE.CELL.FONT",
        477: "ENABLE.TIPWIZARD",
        478: "VBA.MAKE.ADDIN",
        480: "INSERTDATATABLE",
        481: "WORKGROUP.OPTIONS",
        482: "MAIL.SEND.MAILER",
        485: "AUTOCORRECT",
        489: "POST.DOCUMENT",
        491: "PICKLIST",
        493: "VIEW.SHOW",
        494: "VIEW.DEFINE",
        495: "VIEW.DELETE",
        509: "SHEET.BACKGROUND",
        510: "INSERT.MAP.OBJECT",
        511: "OPTIONS.MENONO",
        517: "MSOCHECKS",
        518: "NORMAL",
        519: "LAYOUT",
        520: "RM.PRINT.AREA",
        521: "CLEAR.PRINT.AREA",
        522: "ADD.PRINT.AREA",
        523: "MOVE.BRK",
        545: "HIDECURR.NOTE",
        546: "HIDEALL.NOTES",
        547: "DELETE.NOTE",
        548: "TRAVERSE.NOTES",
        549: "ACTIVATE.NOTES",
        620: "PROTECT.REVISIONS",
        621: "UNPROTECT.REVISIONS",
        647: "OPTIONS.ME",
        653: "WEB.PUBLISH",
        667: "NEWWEBQUERY",
        673: "PIVOT.TABLE.CHART",
        753: "OPTIONS.SAVE",
        755: "OPTIONS.SPELL",
        808: "HIDEALL.INKANNOTS"
    }, qs = {
        0: "COUNT",
        1: "IF",
        2: "ISNA",
        3: "ISERROR",
        4: "SUM",
        5: "AVERAGE",
        6: "MIN",
        7: "MAX",
        8: "ROW",
        9: "COLUMN",
        10: "NA",
        11: "NPV",
        12: "STDEV",
        13: "DOLLAR",
        14: "FIXED",
        15: "SIN",
        16: "COS",
        17: "TAN",
        18: "ATAN",
        19: "PI",
        20: "SQRT",
        21: "EXP",
        22: "LN",
        23: "LOG10",
        24: "ABS",
        25: "INT",
        26: "SIGN",
        27: "ROUND",
        28: "LOOKUP",
        29: "INDEX",
        30: "REPT",
        31: "MID",
        32: "LEN",
        33: "VALUE",
        34: "TRUE",
        35: "FALSE",
        36: "AND",
        37: "OR",
        38: "NOT",
        39: "MOD",
        40: "DCOUNT",
        41: "DSUM",
        42: "DAVERAGE",
        43: "DMIN",
        44: "DMAX",
        45: "DSTDEV",
        46: "VAR",
        47: "DVAR",
        48: "TEXT",
        49: "LINEST",
        50: "TREND",
        51: "LOGEST",
        52: "GROWTH",
        53: "GOTO",
        54: "HALT",
        55: "RETURN",
        56: "PV",
        57: "FV",
        58: "NPER",
        59: "PMT",
        60: "RATE",
        61: "MIRR",
        62: "IRR",
        63: "RAND",
        64: "MATCH",
        65: "DATE",
        66: "TIME",
        67: "DAY",
        68: "MONTH",
        69: "YEAR",
        70: "WEEKDAY",
        71: "HOUR",
        72: "MINUTE",
        73: "SECOND",
        74: "NOW",
        75: "AREAS",
        76: "ROWS",
        77: "COLUMNS",
        78: "OFFSET",
        79: "ABSREF",
        80: "RELREF",
        81: "ARGUMENT",
        82: "SEARCH",
        83: "TRANSPOSE",
        84: "ERROR",
        85: "STEP",
        86: "TYPE",
        87: "ECHO",
        88: "SET.NAME",
        89: "CALLER",
        90: "DEREF",
        91: "WINDOWS",
        92: "SERIES",
        93: "DOCUMENTS",
        94: "ACTIVE.CELL",
        95: "SELECTION",
        96: "RESULT",
        97: "ATAN2",
        98: "ASIN",
        99: "ACOS",
        100: "CHOOSE",
        101: "HLOOKUP",
        102: "VLOOKUP",
        103: "LINKS",
        104: "INPUT",
        105: "ISREF",
        106: "GET.FORMULA",
        107: "GET.NAME",
        108: "SET.VALUE",
        109: "LOG",
        110: "EXEC",
        111: "CHAR",
        112: "LOWER",
        113: "UPPER",
        114: "PROPER",
        115: "LEFT",
        116: "RIGHT",
        117: "EXACT",
        118: "TRIM",
        119: "REPLACE",
        120: "SUBSTITUTE",
        121: "CODE",
        122: "NAMES",
        123: "DIRECTORY",
        124: "FIND",
        125: "CELL",
        126: "ISERR",
        127: "ISTEXT",
        128: "ISNUMBER",
        129: "ISBLANK",
        130: "T",
        131: "N",
        132: "FOPEN",
        133: "FCLOSE",
        134: "FSIZE",
        135: "FREADLN",
        136: "FREAD",
        137: "FWRITELN",
        138: "FWRITE",
        139: "FPOS",
        140: "DATEVALUE",
        141: "TIMEVALUE",
        142: "SLN",
        143: "SYD",
        144: "DDB",
        145: "GET.DEF",
        146: "REFTEXT",
        147: "TEXTREF",
        148: "INDIRECT",
        149: "REGISTER",
        150: "CALL",
        151: "ADD.BAR",
        152: "ADD.MENU",
        153: "ADD.COMMAND",
        154: "ENABLE.COMMAND",
        155: "CHECK.COMMAND",
        156: "RENAME.COMMAND",
        157: "SHOW.BAR",
        158: "DELETE.MENU",
        159: "DELETE.COMMAND",
        160: "GET.CHART.ITEM",
        161: "DIALOG.BOX",
        162: "CLEAN",
        163: "MDETERM",
        164: "MINVERSE",
        165: "MMULT",
        166: "FILES",
        167: "IPMT",
        168: "PPMT",
        169: "COUNTA",
        170: "CANCEL.KEY",
        171: "FOR",
        172: "WHILE",
        173: "BREAK",
        174: "NEXT",
        175: "INITIATE",
        176: "REQUEST",
        177: "POKE",
        178: "EXECUTE",
        179: "TERMINATE",
        180: "RESTART",
        181: "HELP",
        182: "GET.BAR",
        183: "PRODUCT",
        184: "FACT",
        185: "GET.CELL",
        186: "GET.WORKSPACE",
        187: "GET.WINDOW",
        188: "GET.DOCUMENT",
        189: "DPRODUCT",
        190: "ISNONTEXT",
        191: "GET.NOTE",
        192: "NOTE",
        193: "STDEVP",
        194: "VARP",
        195: "DSTDEVP",
        196: "DVARP",
        197: "TRUNC",
        198: "ISLOGICAL",
        199: "DCOUNTA",
        200: "DELETE.BAR",
        201: "UNREGISTER",
        204: "USDOLLAR",
        205: "FINDB",
        206: "SEARCHB",
        207: "REPLACEB",
        208: "LEFTB",
        209: "RIGHTB",
        210: "MIDB",
        211: "LENB",
        212: "ROUNDUP",
        213: "ROUNDDOWN",
        214: "ASC",
        215: "DBCS",
        216: "RANK",
        219: "ADDRESS",
        220: "DAYS360",
        221: "TODAY",
        222: "VDB",
        223: "ELSE",
        224: "ELSE.IF",
        225: "END.IF",
        226: "FOR.CELL",
        227: "MEDIAN",
        228: "SUMPRODUCT",
        229: "SINH",
        230: "COSH",
        231: "TANH",
        232: "ASINH",
        233: "ACOSH",
        234: "ATANH",
        235: "DGET",
        236: "CREATE.OBJECT",
        237: "VOLATILE",
        238: "LAST.ERROR",
        239: "CUSTOM.UNDO",
        240: "CUSTOM.REPEAT",
        241: "FORMULA.CONVERT",
        242: "GET.LINK.INFO",
        243: "TEXT.BOX",
        244: "INFO",
        245: "GROUP",
        246: "GET.OBJECT",
        247: "DB",
        248: "PAUSE",
        251: "RESUME",
        252: "FREQUENCY",
        253: "ADD.TOOLBAR",
        254: "DELETE.TOOLBAR",
        255: "User",
        256: "RESET.TOOLBAR",
        257: "EVALUATE",
        258: "GET.TOOLBAR",
        259: "GET.TOOL",
        260: "SPELLING.CHECK",
        261: "ERROR.TYPE",
        262: "APP.TITLE",
        263: "WINDOW.TITLE",
        264: "SAVE.TOOLBAR",
        265: "ENABLE.TOOL",
        266: "PRESS.TOOL",
        267: "REGISTER.ID",
        268: "GET.WORKBOOK",
        269: "AVEDEV",
        270: "BETADIST",
        271: "GAMMALN",
        272: "BETAINV",
        273: "BINOMDIST",
        274: "CHIDIST",
        275: "CHIINV",
        276: "COMBIN",
        277: "CONFIDENCE",
        278: "CRITBINOM",
        279: "EVEN",
        280: "EXPONDIST",
        281: "FDIST",
        282: "FINV",
        283: "FISHER",
        284: "FISHERINV",
        285: "FLOOR",
        286: "GAMMADIST",
        287: "GAMMAINV",
        288: "CEILING",
        289: "HYPGEOMDIST",
        290: "LOGNORMDIST",
        291: "LOGINV",
        292: "NEGBINOMDIST",
        293: "NORMDIST",
        294: "NORMSDIST",
        295: "NORMINV",
        296: "NORMSINV",
        297: "STANDARDIZE",
        298: "ODD",
        299: "PERMUT",
        300: "POISSON",
        301: "TDIST",
        302: "WEIBULL",
        303: "SUMXMY2",
        304: "SUMX2MY2",
        305: "SUMX2PY2",
        306: "CHITEST",
        307: "CORREL",
        308: "COVAR",
        309: "FORECAST",
        310: "FTEST",
        311: "INTERCEPT",
        312: "PEARSON",
        313: "RSQ",
        314: "STEYX",
        315: "SLOPE",
        316: "TTEST",
        317: "PROB",
        318: "DEVSQ",
        319: "GEOMEAN",
        320: "HARMEAN",
        321: "SUMSQ",
        322: "KURT",
        323: "SKEW",
        324: "ZTEST",
        325: "LARGE",
        326: "SMALL",
        327: "QUARTILE",
        328: "PERCENTILE",
        329: "PERCENTRANK",
        330: "MODE",
        331: "TRIMMEAN",
        332: "TINV",
        334: "MOVIE.COMMAND",
        335: "GET.MOVIE",
        336: "CONCATENATE",
        337: "POWER",
        338: "PIVOT.ADD.DATA",
        339: "GET.PIVOT.TABLE",
        340: "GET.PIVOT.FIELD",
        341: "GET.PIVOT.ITEM",
        342: "RADIANS",
        343: "DEGREES",
        344: "SUBTOTAL",
        345: "SUMIF",
        346: "COUNTIF",
        347: "COUNTBLANK",
        348: "SCENARIO.GET",
        349: "OPTIONS.LISTS.GET",
        350: "ISPMT",
        351: "DATEDIF",
        352: "DATESTRING",
        353: "NUMBERSTRING",
        354: "ROMAN",
        355: "OPEN.DIALOG",
        356: "SAVE.DIALOG",
        357: "VIEW.GET",
        358: "GETPIVOTDATA",
        359: "HYPERLINK",
        360: "PHONETIC",
        361: "AVERAGEA",
        362: "MAXA",
        363: "MINA",
        364: "STDEVPA",
        365: "VARPA",
        366: "STDEVA",
        367: "VARA",
        368: "BAHTTEXT",
        369: "THAIDAYOFWEEK",
        370: "THAIDIGIT",
        371: "THAIMONTHOFYEAR",
        372: "THAINUMSOUND",
        373: "THAINUMSTRING",
        374: "THAISTRINGLENGTH",
        375: "ISTHAIDIGIT",
        376: "ROUNDBAHTDOWN",
        377: "ROUNDBAHTUP",
        378: "THAIYEAR",
        379: "RTD",
        380: "CUBEVALUE",
        381: "CUBEMEMBER",
        382: "CUBEMEMBERPROPERTY",
        383: "CUBERANKEDMEMBER",
        384: "HEX2BIN",
        385: "HEX2DEC",
        386: "HEX2OCT",
        387: "DEC2BIN",
        388: "DEC2HEX",
        389: "DEC2OCT",
        390: "OCT2BIN",
        391: "OCT2HEX",
        392: "OCT2DEC",
        393: "BIN2DEC",
        394: "BIN2OCT",
        395: "BIN2HEX",
        396: "IMSUB",
        397: "IMDIV",
        398: "IMPOWER",
        399: "IMABS",
        400: "IMSQRT",
        401: "IMLN",
        402: "IMLOG2",
        403: "IMLOG10",
        404: "IMSIN",
        405: "IMCOS",
        406: "IMEXP",
        407: "IMARGUMENT",
        408: "IMCONJUGATE",
        409: "IMAGINARY",
        410: "IMREAL",
        411: "COMPLEX",
        412: "IMSUM",
        413: "IMPRODUCT",
        414: "SERIESSUM",
        415: "FACTDOUBLE",
        416: "SQRTPI",
        417: "QUOTIENT",
        418: "DELTA",
        419: "GESTEP",
        420: "ISEVEN",
        421: "ISODD",
        422: "MROUND",
        423: "ERF",
        424: "ERFC",
        425: "BESSELJ",
        426: "BESSELK",
        427: "BESSELY",
        428: "BESSELI",
        429: "XIRR",
        430: "XNPV",
        431: "PRICEMAT",
        432: "YIELDMAT",
        433: "INTRATE",
        434: "RECEIVED",
        435: "DISC",
        436: "PRICEDISC",
        437: "YIELDDISC",
        438: "TBILLEQ",
        439: "TBILLPRICE",
        440: "TBILLYIELD",
        441: "PRICE",
        442: "YIELD",
        443: "DOLLARDE",
        444: "DOLLARFR",
        445: "NOMINAL",
        446: "EFFECT",
        447: "CUMPRINC",
        448: "CUMIPMT",
        449: "EDATE",
        450: "EOMONTH",
        451: "YEARFRAC",
        452: "COUPDAYBS",
        453: "COUPDAYS",
        454: "COUPDAYSNC",
        455: "COUPNCD",
        456: "COUPNUM",
        457: "COUPPCD",
        458: "DURATION",
        459: "MDURATION",
        460: "ODDLPRICE",
        461: "ODDLYIELD",
        462: "ODDFPRICE",
        463: "ODDFYIELD",
        464: "RANDBETWEEN",
        465: "WEEKNUM",
        466: "AMORDEGRC",
        467: "AMORLINC",
        468: "CONVERT",
        724: "SHEETJS",
        469: "ACCRINT",
        470: "ACCRINTM",
        471: "WORKDAY",
        472: "NETWORKDAYS",
        473: "GCD",
        474: "MULTINOMIAL",
        475: "LCM",
        476: "FVSCHEDULE",
        477: "CUBEKPIMEMBER",
        478: "CUBESET",
        479: "CUBESETCOUNT",
        480: "IFERROR",
        481: "COUNTIFS",
        482: "SUMIFS",
        483: "AVERAGEIF",
        484: "AVERAGEIFS"
    }, Rl = {
        2: 1,
        3: 1,
        10: 0,
        15: 1,
        16: 1,
        17: 1,
        18: 1,
        19: 0,
        20: 1,
        21: 1,
        22: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 2,
        30: 2,
        31: 3,
        32: 1,
        33: 1,
        34: 0,
        35: 0,
        38: 1,
        39: 2,
        40: 3,
        41: 3,
        42: 3,
        43: 3,
        44: 3,
        45: 3,
        47: 3,
        48: 2,
        53: 1,
        61: 3,
        63: 0,
        65: 3,
        66: 3,
        67: 1,
        68: 1,
        69: 1,
        70: 1,
        71: 1,
        72: 1,
        73: 1,
        74: 0,
        75: 1,
        76: 1,
        77: 1,
        79: 2,
        80: 2,
        83: 1,
        85: 0,
        86: 1,
        89: 0,
        90: 1,
        94: 0,
        95: 0,
        97: 2,
        98: 1,
        99: 1,
        101: 3,
        102: 3,
        105: 1,
        106: 1,
        108: 2,
        111: 1,
        112: 1,
        113: 1,
        114: 1,
        117: 2,
        118: 1,
        119: 4,
        121: 1,
        126: 1,
        127: 1,
        128: 1,
        129: 1,
        130: 1,
        131: 1,
        133: 1,
        134: 1,
        135: 1,
        136: 2,
        137: 2,
        138: 2,
        140: 1,
        141: 1,
        142: 3,
        143: 4,
        144: 4,
        161: 1,
        162: 1,
        163: 1,
        164: 1,
        165: 2,
        172: 1,
        175: 2,
        176: 2,
        177: 3,
        178: 2,
        179: 1,
        184: 1,
        186: 1,
        189: 3,
        190: 1,
        195: 3,
        196: 3,
        197: 1,
        198: 1,
        199: 3,
        201: 1,
        207: 4,
        210: 3,
        211: 1,
        212: 2,
        213: 2,
        214: 1,
        215: 1,
        225: 0,
        229: 1,
        230: 1,
        231: 1,
        232: 1,
        233: 1,
        234: 1,
        235: 3,
        244: 1,
        247: 4,
        252: 2,
        257: 1,
        261: 1,
        271: 1,
        273: 4,
        274: 2,
        275: 2,
        276: 2,
        277: 3,
        278: 3,
        279: 1,
        280: 3,
        281: 3,
        282: 3,
        283: 1,
        284: 1,
        285: 2,
        286: 4,
        287: 3,
        288: 2,
        289: 4,
        290: 3,
        291: 3,
        292: 3,
        293: 4,
        294: 1,
        295: 3,
        296: 1,
        297: 3,
        298: 1,
        299: 2,
        300: 3,
        301: 3,
        302: 4,
        303: 2,
        304: 2,
        305: 2,
        306: 2,
        307: 2,
        308: 2,
        309: 3,
        310: 2,
        311: 2,
        312: 2,
        313: 2,
        314: 2,
        315: 2,
        316: 4,
        325: 2,
        326: 2,
        327: 2,
        328: 2,
        331: 2,
        332: 2,
        337: 2,
        342: 1,
        343: 1,
        346: 2,
        347: 1,
        350: 4,
        351: 3,
        352: 1,
        353: 2,
        360: 1,
        368: 1,
        369: 1,
        370: 1,
        371: 1,
        372: 1,
        373: 1,
        374: 1,
        375: 1,
        376: 1,
        377: 1,
        378: 1,
        382: 3,
        385: 1,
        392: 1,
        393: 1,
        396: 2,
        397: 2,
        398: 2,
        399: 1,
        400: 1,
        401: 1,
        402: 1,
        403: 1,
        404: 1,
        405: 1,
        406: 1,
        407: 1,
        408: 1,
        409: 1,
        410: 1,
        414: 4,
        415: 1,
        416: 1,
        417: 2,
        420: 1,
        421: 1,
        422: 2,
        424: 1,
        425: 2,
        426: 2,
        427: 2,
        428: 2,
        430: 3,
        438: 3,
        439: 3,
        440: 3,
        443: 2,
        444: 2,
        445: 2,
        446: 2,
        447: 6,
        448: 6,
        449: 2,
        450: 2,
        464: 2,
        468: 3,
        476: 2,
        479: 1,
        480: 2,
        65535: 0
    }, Dr = typeof Map < "u";
    function Wn(e, r, t) {
        var n = 0, a = e.length;
        if (t) {
            if (Dr ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
                for (var s = Dr ? t.get(r) : t[r]; n < s.length; ++n) if (e[s[n]].t === r) return e.Count++, 
                s[n];
            }
        } else for (;n < a; ++n) if (e[n].t === r) return e.Count++, n;
        return e[a] = {
            t: r
        }, e.Count++, e.Unique++, t && (Dr ? (t.has(r) || t.set(r, []), t.get(r).push(a)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), 
        t[r].push(a))), a;
    }
    function sn(e, r) {
        var t = {
            min: e + 1,
            max: e + 1
        }, n = -1;
        return r.MDW && (Ft = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? n = tn(r.wpx) : r.wch != null && (n = r.wch), 
        n > -1 ? (t.width = Ln(n), t.customWidth = 1) : r.width != null && (t.width = r.width), 
        r.hidden && (t.hidden = !0), r.level != null && (t.outlineLevel = t.level = r.level), 
        t;
    }
    function Qs(e, r) {
        if (e) {
            var t = [ .7, .7, .75, .75, .3, .3 ];
            r == "xlml" && (t = [ 1, 1, 1, 1, .5, .5 ]), e.left == null && (e.left = t[0]), 
            e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), 
            e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), 
            e.footer == null && (e.footer = t[5]);
        }
    }
    function Gt(e, r, t) {
        var n = t.revssf[r.z != null ? r.z : "General"], a = 60, s = e.length;
        if (n == null && t.ssf) {
            for (;a < 392; ++a) if (t.ssf[a] == null) {
                Aa(r.z, a), t.ssf[a] = r.z, t.revssf[r.z] = n = a;
                break;
            }
        }
        for (a = 0; a != s; ++a) if (e[a].numFmtId === n) return a;
        return e[s] = {
            numFmtId: n,
            fontId: 0,
            fillId: 0,
            borderId: 0,
            xfId: 0,
            applyNumberFormat: 1
        }, s;
    }
    function Cl(e, r, t) {
        if (e && e["!ref"]) {
            var n = Ne(e["!ref"]);
            if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
        }
    }
    var kl = [ "objects", "scenarios", "selectLockedCells", "selectUnlockedCells" ], Nl = [ "formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables" ];
    function Il(e, r, t, n) {
        if (e.c && t["!comments"].push([ r, e.c ]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f) return "";
        var a = "", s = e.t, l = e.v;
        if (e.t !== "z") switch (e.t) {
          case "b":
            a = e.v ? "1" : "0";
            break;

          case "n":
            a = "" + e.v;
            break;

          case "e":
            a = kr[e.v];
            break;

          case "d":
            n && n.cellDates ? a = it(e.v, -1).toISOString() : ((e = ft(e)).t = "n", 
            a = "" + (e.v = lt(it(e.v)))), e.z === void 0 && (e.z = Le[14]);
            break;

          default:
            a = e.v;
        }
        var i = Ze("v", xe(a)), o = {
            r: r
        }, f = Gt(n.cellXfs, e, n);
        switch (f !== 0 && (o.s = f), e.t) {
          case "n":
          case "z":
            break;

          case "d":
            o.t = "d";
            break;

          case "b":
            o.t = "b";
            break;

          case "e":
            o.t = "e";
            break;

          default:
            if (e.v == null) {
                delete e.t;
                break;
            }
            if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
            if (n && n.bookSST) {
                i = Ze("v", "" + Wn(n.Strings, e.v, n.revStrings)), o.t = "s";
                break;
            }
            o.t = "str";
        }
        if (e.t != s && (e.t = s, e.v = l), typeof e.f == "string" && e.f) {
            var u = e.F && e.F.slice(0, r.length) == r ? {
                t: "array",
                ref: e.F
            } : null;
            i = V("f", xe(e.f), u) + (e.v != null ? i : "");
        }
        return e.l && t["!links"].push([ r, e.l ]), e.D && (o.cm = 1), V("c", i, o);
    }
    function ei(e, r, t, n) {
        var a, s = [ Be, V("worksheet", null, {
            xmlns: ar[0],
            "xmlns:r": Ve.r
        }) ], l = t.SheetNames[e], i = "", o = t.Sheets[l];
        o == null && (o = {});
        var f = o["!ref"] || "A1", u = Ne(f);
        if (u.e.c > 16383 || u.e.r > 1048575) {
            if (r.WTF) throw new Error("Range " + f + " exceeds format limit A1:XFD1048576");
            u.e.c = Math.min(u.e.c, 16383), u.e.r = Math.min(u.e.c, 1048575), f = We(u);
        }
        n || (n = {}), o["!comments"] = [];
        var c = [];
        (function(E, x, S, m, w) {
            var v = !1, T = {}, A = null;
            if (m.bookType !== "xlsx" && x.vbaraw) {
                var C = x.SheetNames[S];
                try {
                    x.Workbook && (C = x.Workbook.Sheets[S].CodeName || C);
                } catch {}
                v = !0, T.codeName = Lt(xe(C));
            }
            if (E && E["!outline"]) {
                var I = {
                    summaryBelow: 1,
                    summaryRight: 1
                };
                E["!outline"].above && (I.summaryBelow = 0), E["!outline"].left && (I.summaryRight = 0), 
                A = (A || "") + V("outlinePr", null, I);
            }
            (v || A) && (w[w.length] = V("sheetPr", A, T));
        })(o, t, e, r, s), s[s.length] = V("dimension", null, {
            ref: f
        }), s[s.length] = function(E, x, S, m) {
            var w = {
                workbookViewId: "0"
            };
            return (((m || {}).Workbook || {}).Views || [])[0] && (w.rightToLeft = m.Workbook.Views[0].RTL ? "1" : "0"), 
            V("sheetViews", V("sheetView", null, w), {});
        }(0, 0, 0, t), r.sheetFormat && (s[s.length] = V("sheetFormatPr", null, {
            defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
            baseColWidth: r.sheetFormat.baseColWidth || "10",
            outlineLevelRow: r.sheetFormat.outlineLevelRow || "7"
        })), o["!cols"] != null && o["!cols"].length > 0 && (s[s.length] = function(E, x) {
            for (var S, m = [ "<cols>" ], w = 0; w != x.length; ++w) (S = x[w]) && (m[m.length] = V("col", null, sn(w, S)));
            return m[m.length] = "</cols>", m.join("");
        }(0, o["!cols"])), s[a = s.length] = "<sheetData/>", o["!links"] = [], o["!ref"] != null && (i = function(E, x, S, m) {
            var w, v, T = [], A = [], C = Ne(E["!ref"]), I = "", D = "", N = [], G = 0, B = 0, J = E["!rows"], ne = Array.isArray(E), ce = {
                r: D
            }, K = -1;
            for (B = C.s.c; B <= C.e.c; ++B) N[B] = rt(B);
            for (G = C.s.r; G <= C.e.r; ++G) {
                for (A = [], D = qe(G), B = C.s.c; B <= C.e.c; ++B) {
                    w = N[B] + D;
                    var W = ne ? (E[G] || [])[B] : E[w];
                    W !== void 0 && (I = Il(W, w, E, x)) != null && A.push(I);
                }
                (A.length > 0 || J && J[G]) && (ce = {
                    r: D
                }, J && J[G] && ((v = J[G]).hidden && (ce.hidden = 1), K = -1, v.hpx ? K = rn(v.hpx) : v.hpt && (K = v.hpt), 
                K > -1 && (ce.ht = K, ce.customHeight = 1), v.level && (ce.outlineLevel = v.level)), 
                T[T.length] = V("row", A.join(""), ce));
            }
            if (J) for (;G < J.length; ++G) J && J[G] && (ce = {
                r: G + 1
            }, (v = J[G]).hidden && (ce.hidden = 1), K = -1, v.hpx ? K = rn(v.hpx) : v.hpt && (K = v.hpt), 
            K > -1 && (ce.ht = K, ce.customHeight = 1), v.level && (ce.outlineLevel = v.level), 
            T[T.length] = V("row", "", ce));
            return T.join("");
        }(o, r), i.length > 0 && (s[s.length] = i)), s.length > a + 1 && (s[s.length] = "</sheetData>", 
        s[a] = s[a].replace("/>", ">")), o["!protect"] && (s[s.length] = function(E) {
            var x = {
                sheet: 1
            };
            return kl.forEach(function(S) {
                E[S] != null && E[S] && (x[S] = "1");
            }), Nl.forEach(function(S) {
                E[S] == null || E[S] || (x[S] = "0");
            }), E.password && (x.password = Ns(E.password).toString(16).toUpperCase()), 
            V("sheetProtection", null, x);
        }(o["!protect"])), o["!autofilter"] != null && (s[s.length] = function(E, x, S, m) {
            var w = typeof E.ref == "string" ? E.ref : We(E.ref);
            S.Workbook || (S.Workbook = {
                Sheets: []
            }), S.Workbook.Names || (S.Workbook.Names = []);
            var v = S.Workbook.Names, T = mt(w);
            T.s.r == T.e.r && (T.e.r = mt(x["!ref"]).e.r, w = We(T));
            for (var A = 0; A < v.length; ++A) {
                var C = v[A];
                if (C.Name == "_xlnm._FilterDatabase" && C.Sheet == m) {
                    C.Ref = "'" + S.SheetNames[m] + "'!" + w;
                    break;
                }
            }
            return A == v.length && v.push({
                Name: "_xlnm._FilterDatabase",
                Sheet: m,
                Ref: "'" + S.SheetNames[m] + "'!" + w
            }), V("autoFilter", null, {
                ref: w
            });
        }(o["!autofilter"], o, t, e)), o["!merges"] != null && o["!merges"].length > 0 && (s[s.length] = function(E) {
            if (E.length === 0) return "";
            for (var x = '<mergeCells count="' + E.length + '">', S = 0; S != E.length; ++S) x += '<mergeCell ref="' + We(E[S]) + '"/>';
            return x + "</mergeCells>";
        }(o["!merges"]));
        var h, d, p = -1, g = -1;
        return o["!links"].length > 0 && (s[s.length] = "<hyperlinks>", o["!links"].forEach(function(E) {
            E[1].Target && (h = {
                ref: E[0]
            }, E[1].Target.charAt(0) != "#" && (g = _e(n, -1, xe(E[1].Target).replace(/#.*$/, ""), Te.HLINK), 
            h["r:id"] = "rId" + g), (p = E[1].Target.indexOf("#")) > -1 && (h.location = xe(E[1].Target.slice(p + 1))), 
            E[1].Tooltip && (h.tooltip = xe(E[1].Tooltip)), s[s.length] = V("hyperlink", null, h));
        }), s[s.length] = "</hyperlinks>"), delete o["!links"], o["!margins"] != null && (s[s.length] = (Qs(d = o["!margins"]), 
        V("pageMargins", null, d))), r && !r.ignoreEC && r.ignoreEC != null || (s[s.length] = Ze("ignoredErrors", V("ignoredError", null, {
            numberStoredAsText: 1,
            sqref: f
        }))), c.length > 0 && (g = _e(n, -1, "../drawings/drawing" + (e + 1) + ".xml", Te.DRAW), 
        s[s.length] = V("drawing", null, {
            "r:id": "rId" + g
        }), o["!drawing"] = c), o["!comments"].length > 0 && (g = _e(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Te.VML), 
        s[s.length] = V("legacyDrawing", null, {
            "r:id": "rId" + g
        }), o["!legacy"] = g), s.length > 1 && (s[s.length] = "</worksheet>", s[1] = s[1].replace("/>", ">")), 
        s.join("");
    }
    function Dl(e, r, t, n) {
        var a = function(s, l, i) {
            var o = M(145), f = (i["!rows"] || [])[s] || {};
            o.write_shift(4, s), o.write_shift(4, 0);
            var u = 320;
            f.hpx ? u = 20 * rn(f.hpx) : f.hpt && (u = 20 * f.hpt), o.write_shift(2, u), 
            o.write_shift(1, 0);
            var c = 0;
            f.level && (c |= f.level), f.hidden && (c |= 16), (f.hpx || f.hpt) && (c |= 32), 
            o.write_shift(1, c), o.write_shift(1, 0);
            var h = 0, d = o.l;
            o.l += 4;
            for (var p = {
                r: s,
                c: 0
            }, g = 0; g < 16; ++g) if (!(l.s.c > g + 1 << 10 || l.e.c < g << 10)) {
                for (var E = -1, x = -1, S = g << 10; S < g + 1 << 10; ++S) p.c = S, 
                (Array.isArray(i) ? (i[p.r] || [])[p.c] : i[Re(p)]) && (E < 0 && (E = S), 
                x = S);
                E < 0 || (++h, o.write_shift(4, E), o.write_shift(4, x));
            }
            var m = o.l;
            return o.l = d, o.write_shift(4, h), o.l = m, o.length > o.l ? o.slice(0, o.l) : o;
        }(n, t, r);
        (a.length > 17 || (r["!rows"] || [])[n]) && F(e, 0, a);
    }
    var Pl = qt, Ll = or, Ml = qt, Fl = or, ti = [ "left", "right", "top", "bottom", "header", "footer" ];
    function Ul(e, r, t, n, a, s, l) {
        if (r.v === void 0) return !1;
        var i = "";
        switch (r.t) {
          case "b":
            i = r.v ? "1" : "0";
            break;

          case "d":
            (r = ft(r)).z = r.z || Le[14], r.v = lt(it(r.v)), r.t = "n";
            break;

          case "n":
          case "e":
            i = "" + r.v;
            break;

          default:
            i = r.v;
        }
        var o = {
            r: t,
            c: n
        };
        switch (o.s = Gt(a.cellXfs, r, a), r.l && s["!links"].push([ Re(o), r.l ]), 
        r.c && s["!comments"].push([ Re(o), r.c ]), r.t) {
          case "s":
          case "str":
            return a.bookSST ? (i = Wn(a.Strings, r.v, a.revStrings), o.t = "s", 
            o.v = i, l ? F(e, 18, function(f, u, c) {
                return c == null && (c = M(8)), Zt(u, c), c.write_shift(4, u.v), 
                c;
            }(0, o)) : F(e, 7, function(f, u, c) {
                return c == null && (c = M(12)), Kt(u, c), c.write_shift(4, u.v), 
                c;
            }(0, o))) : (o.t = "str", l ? F(e, 17, function(f, u, c) {
                return c == null && (c = M(8 + 4 * f.v.length)), Zt(u, c), $e(f.v, c), 
                c.length > c.l ? c.slice(0, c.l) : c;
            }(r, o)) : F(e, 6, function(f, u, c) {
                return c == null && (c = M(12 + 4 * f.v.length)), Kt(u, c), $e(f.v, c), 
                c.length > c.l ? c.slice(0, c.l) : c;
            }(r, o))), !0;

          case "n":
            return r.v == (0 | r.v) && r.v > -1e3 && r.v < 1e3 ? l ? F(e, 13, function(f, u, c) {
                return c == null && (c = M(8)), Zt(u, c), as(f.v, c), c;
            }(r, o)) : F(e, 2, function(f, u, c) {
                return c == null && (c = M(12)), Kt(u, c), as(f.v, c), c;
            }(r, o)) : l ? F(e, 16, function(f, u, c) {
                return c == null && (c = M(12)), Zt(u, c), fr(f.v, c), c;
            }(r, o)) : F(e, 5, function(f, u, c) {
                return c == null && (c = M(16)), Kt(u, c), fr(f.v, c), c;
            }(r, o)), !0;

          case "b":
            return o.t = "b", l ? F(e, 15, function(f, u, c) {
                return c == null && (c = M(5)), Zt(u, c), c.write_shift(1, f.v ? 1 : 0), 
                c;
            }(r, o)) : F(e, 4, function(f, u, c) {
                return c == null && (c = M(9)), Kt(u, c), c.write_shift(1, f.v ? 1 : 0), 
                c;
            }(r, o)), !0;

          case "e":
            return o.t = "e", l ? F(e, 14, function(f, u, c) {
                return c == null && (c = M(8)), Zt(u, c), c.write_shift(1, f.v), 
                c.write_shift(2, 0), c.write_shift(1, 0), c;
            }(r, o)) : F(e, 3, function(f, u, c) {
                return c == null && (c = M(9)), Kt(u, c), c.write_shift(1, f.v), 
                c;
            }(r, o)), !0;
        }
        return l ? F(e, 12, function(f, u, c) {
            return c == null && (c = M(4)), Zt(u, c);
        }(0, o)) : F(e, 1, function(f, u, c) {
            return c == null && (c = M(8)), Kt(u, c);
        }(0, o)), !0;
    }
    function Bl(e, r) {
        var t, n;
        r && r["!merges"] && (F(e, 177, (t = r["!merges"].length, n == null && (n = M(4)), 
        n.write_shift(4, t), n)), r["!merges"].forEach(function(a) {
            F(e, 176, Fl(a));
        }), F(e, 178));
    }
    function Hl(e, r) {
        r && r["!cols"] && (F(e, 390), r["!cols"].forEach(function(t, n) {
            t && F(e, 60, function(a, s, l) {
                l == null && (l = M(18));
                var i = sn(a, s);
                l.write_shift(-4, a), l.write_shift(-4, a), l.write_shift(4, 256 * (i.width || 10)), 
                l.write_shift(4, 0);
                var o = 0;
                return s.hidden && (o |= 1), typeof i.width == "number" && (o |= 2), 
                s.level && (o |= s.level << 8), l.write_shift(2, o), l;
            }(n, t));
        }), F(e, 391));
    }
    function Wl(e, r) {
        var t, n;
        r && r["!ref"] && (F(e, 648), F(e, 649, (t = Ne(r["!ref"]), (n = M(24)).write_shift(4, 4), 
        n.write_shift(4, 1), or(t, n), n)), F(e, 650));
    }
    function Gl(e, r, t) {
        r["!links"].forEach(function(n) {
            if (n[1].Target) {
                var a = _e(t, -1, n[1].Target.replace(/#.*$/, ""), Te.HLINK);
                F(e, 494, function(s, l) {
                    var i = M(50 + 4 * (s[1].Target.length + (s[1].Tooltip || "").length));
                    or({
                        s: ze(s[0]),
                        e: ze(s[0])
                    }, i), In("rId" + l, i);
                    var o = s[1].Target.indexOf("#");
                    return $e((o == -1 ? "" : s[1].Target.slice(o + 1)) || "", i), 
                    $e(s[1].Tooltip || "", i), $e("", i), i.slice(0, i.l);
                }(n, a));
            }
        }), delete r["!links"];
    }
    function jl(e, r, t) {
        F(e, 133), F(e, 137, function(n, a, s) {
            s == null && (s = M(30));
            var l = 924;
            return (((a || {}).Views || [])[0] || {}).RTL && (l |= 32), s.write_shift(2, l), 
            s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(1, 0), 
            s.write_shift(1, 0), s.write_shift(2, 0), s.write_shift(2, 100), s.write_shift(2, 0), 
            s.write_shift(2, 0), s.write_shift(2, 0), s.write_shift(4, 0), s;
        }(0, t)), F(e, 138), F(e, 134);
    }
    function Vl(e, r) {
        var t, n;
        r["!protect"] && F(e, 535, (t = r["!protect"], n == null && (n = M(66)), 
        n.write_shift(2, t.password ? Ns(t.password) : 0), n.write_shift(4, 1), 
        [ [ "objects", !1 ], [ "scenarios", !1 ], [ "formatCells", !0 ], [ "formatColumns", !0 ], [ "formatRows", !0 ], [ "insertColumns", !0 ], [ "insertRows", !0 ], [ "insertHyperlinks", !0 ], [ "deleteColumns", !0 ], [ "deleteRows", !0 ], [ "selectLockedCells", !1 ], [ "sort", !0 ], [ "autoFilter", !0 ], [ "pivotTables", !0 ], [ "selectUnlockedCells", !1 ] ].forEach(function(a) {
            a[1] ? n.write_shift(4, t[a[0]] == null || t[a[0]] ? 0 : 1) : n.write_shift(4, t[a[0]] != null && t[a[0]] ? 0 : 1);
        }), n));
    }
    function zl(e, r, t, n) {
        var a = ct(), s = t.SheetNames[e], l = t.Sheets[s] || {}, i = s;
        try {
            t && t.Workbook && (i = t.Workbook.Sheets[e].CodeName || i);
        } catch {}
        var o, f, u = Ne(l["!ref"] || "A1");
        if (u.e.c > 16383 || u.e.r > 1048575) {
            if (r.WTF) throw new Error("Range " + (l["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
            u.e.c = Math.min(u.e.c, 16383), u.e.r = Math.min(u.e.c, 1048575);
        }
        return l["!links"] = [], l["!comments"] = [], F(a, 129), (t.vbaraw || l["!outline"]) && F(a, 147, function(c, h, d) {
            d == null && (d = M(84 + 4 * c.length));
            var p = 192;
            h && (h.above && (p &= -65), h.left && (p &= -129)), d.write_shift(1, p);
            for (var g = 1; g < 3; ++g) d.write_shift(1, 0);
            return qr({
                auto: 1
            }, d), d.write_shift(-4, -1), d.write_shift(-4, -1), rs(c, d), d.slice(0, d.l);
        }(i, l["!outline"])), F(a, 148, Ll(u)), jl(a, 0, t.Workbook), Hl(a, l), 
        function(c, h, d, p) {
            var g, E = Ne(h["!ref"] || "A1"), x = "", S = [];
            F(c, 145);
            var m = Array.isArray(h), w = E.e.r;
            h["!rows"] && (w = Math.max(E.e.r, h["!rows"].length - 1));
            for (var v = E.s.r; v <= w; ++v) {
                x = qe(v), Dl(c, h, E, v);
                var T = !1;
                if (v <= E.e.r) for (var A = E.s.c; A <= E.e.c; ++A) {
                    v === E.s.r && (S[A] = rt(A)), g = S[A] + x;
                    var C = m ? (h[v] || [])[A] : h[g];
                    T = !!C && Ul(c, C, v, A, p, h, T);
                }
            }
            F(c, 146);
        }(a, l, 0, r), Vl(a, l), function(c, h, d, p) {
            if (h["!autofilter"]) {
                var g = h["!autofilter"], E = typeof g.ref == "string" ? g.ref : We(g.ref);
                d.Workbook || (d.Workbook = {
                    Sheets: []
                }), d.Workbook.Names || (d.Workbook.Names = []);
                var x = d.Workbook.Names, S = mt(E);
                S.s.r == S.e.r && (S.e.r = mt(h["!ref"]).e.r, E = We(S));
                for (var m = 0; m < x.length; ++m) {
                    var w = x[m];
                    if (w.Name == "_xlnm._FilterDatabase" && w.Sheet == p) {
                        w.Ref = "'" + d.SheetNames[p] + "'!" + E;
                        break;
                    }
                }
                m == x.length && x.push({
                    Name: "_xlnm._FilterDatabase",
                    Sheet: p,
                    Ref: "'" + d.SheetNames[p] + "'!" + E
                }), F(c, 161, or(Ne(E))), F(c, 162);
            }
        }(a, l, t, e), Bl(a, l), Gl(a, l, n), l["!margins"] && F(a, 476, (o = l["!margins"], 
        f == null && (f = M(48)), Qs(o), ti.forEach(function(c) {
            fr(o[c], f);
        }), f)), r && !r.ignoreEC && r.ignoreEC != null || Wl(a, l), function(c, h, d, p) {
            if (h["!comments"].length > 0) {
                var g = _e(p, -1, "../drawings/vmlDrawing" + (d + 1) + ".vml", Te.VML);
                F(c, 551, In("rId" + g)), h["!legacy"] = g;
            }
        }(a, l, e, n), F(a, 130), a.end();
    }
    var $l = [ [ "allowRefreshQuery", !1, "bool" ], [ "autoCompressPictures", !0, "bool" ], [ "backupFile", !1, "bool" ], [ "checkCompatibility", !1, "bool" ], [ "CodeName", "" ], [ "date1904", !1, "bool" ], [ "defaultThemeVersion", 0, "int" ], [ "filterPrivacy", !1, "bool" ], [ "hidePivotFieldList", !1, "bool" ], [ "promptedSolutions", !1, "bool" ], [ "publishItems", !1, "bool" ], [ "refreshAllConnections", !1, "bool" ], [ "saveExternalLinkValues", !0, "bool" ], [ "showBorderUnselectedTables", !0, "bool" ], [ "showInkAnnotation", !0, "bool" ], [ "showObjects", "all" ], [ "showPivotChartFilter", !1, "bool" ], [ "updateLinks", "userSet" ] ], Xl = "][*?/\\".split("");
    function ri(e, r) {
        if (e.length > 31) {
            if (r) return !1;
            throw new Error("Sheet names cannot exceed 31 chars");
        }
        var t = !0;
        return Xl.forEach(function(n) {
            if (e.indexOf(n) != -1) {
                if (!r) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
                t = !1;
            }
        }), t;
    }
    function Yl(e) {
        if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
        if (!e.SheetNames.length) throw new Error("Workbook is empty");
        var r, t, n, a = e.Workbook && e.Workbook.Sheets || [];
        r = e.SheetNames, t = a, n = !!e.vbaraw, r.forEach(function(l, i) {
            ri(l);
            for (var o = 0; o < i; ++o) if (l == r[o]) throw new Error("Duplicate Sheet Name: " + l);
            if (n) {
                var f = t && t[i] && t[i].CodeName || l;
                if (f.charCodeAt(0) == 95 && f.length > 22) throw new Error("Bad Code Name: Worksheet" + f);
            }
        });
        for (var s = 0; s < e.SheetNames.length; ++s) Cl(e.Sheets[e.SheetNames[s]], e.SheetNames[s], s);
    }
    function ni(e) {
        var r = [ Be ];
        r[r.length] = V("workbook", null, {
            xmlns: ar[0],
            "xmlns:r": Ve.r
        });
        var t = e.Workbook && (e.Workbook.Names || []).length > 0, n = {
            codeName: "ThisWorkbook"
        };
        e.Workbook && e.Workbook.WBProps && ($l.forEach(function(i) {
            e.Workbook.WBProps[i[0]] != null && e.Workbook.WBProps[i[0]] != i[1] && (n[i[0]] = e.Workbook.WBProps[i[0]]);
        }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, 
        delete n.CodeName)), r[r.length] = V("workbookPr", null, n);
        var a = e.Workbook && e.Workbook.Sheets || [], s = 0;
        if (a && a[0] && a[0].Hidden) {
            for (r[r.length] = "<bookViews>", s = 0; s != e.SheetNames.length && a[s] && a[s].Hidden; ++s);
            s == e.SheetNames.length && (s = 0), r[r.length] = '<workbookView firstSheet="' + s + '" activeTab="' + s + '"/>', 
            r[r.length] = "</bookViews>";
        }
        for (r[r.length] = "<sheets>", s = 0; s != e.SheetNames.length; ++s) {
            var l = {
                name: xe(e.SheetNames[s].slice(0, 31))
            };
            if (l.sheetId = "" + (s + 1), l["r:id"] = "rId" + (s + 1), a[s]) switch (a[s].Hidden) {
              case 1:
                l.state = "hidden";
                break;

              case 2:
                l.state = "veryHidden";
            }
            r[r.length] = V("sheet", null, l);
        }
        return r[r.length] = "</sheets>", t && (r[r.length] = "<definedNames>", 
        e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(i) {
            var o = {
                name: i.Name
            };
            i.Comment && (o.comment = i.Comment), i.Sheet != null && (o.localSheetId = "" + i.Sheet), 
            i.Hidden && (o.hidden = "1"), i.Ref && (r[r.length] = V("definedName", xe(i.Ref), o));
        }), r[r.length] = "</definedNames>"), r.length > 2 && (r[r.length] = "</workbook>", 
        r[1] = r[1].replace("/>", ">")), r.join("");
    }
    function Kl(e, r) {
        if (r.Workbook && r.Workbook.Sheets) {
            for (var t, n, a = r.Workbook.Sheets, s = 0, l = -1, i = -1; s < a.length; ++s) !a[s] || !a[s].Hidden && l == -1 ? l = s : a[s].Hidden == 1 && i == -1 && (i = s);
            i > l || (F(e, 135), F(e, 158, (t = l, n || (n = M(29)), n.write_shift(-4, 0), 
            n.write_shift(-4, 460), n.write_shift(4, 28800), n.write_shift(4, 17600), 
            n.write_shift(4, 500), n.write_shift(4, t), n.write_shift(4, t), n.write_shift(1, 120), 
            n.length > n.l ? n.slice(0, n.l) : n)), F(e, 136));
        }
    }
    function Jl(e, r) {
        var t = ct();
        return F(t, 131), F(t, 128, function(n, a) {
            a || (a = M(127));
            for (var s = 0; s != 4; ++s) a.write_shift(4, 0);
            return $e("SheetJS", a), $e(pn.version, a), $e(pn.version, a), $e("7262", a), 
            a.length > a.l ? a.slice(0, a.l) : a;
        }()), F(t, 153, function(n, a) {
            a || (a = M(72));
            var s = 0;
            return n && n.filterPrivacy && (s |= 8), a.write_shift(4, s), a.write_shift(4, 0), 
            rs(n && n.CodeName || "ThisWorkbook", a), a.slice(0, a.l);
        }(e.Workbook && e.Workbook.WBProps || null)), Kl(t, e), function(n, a) {
            F(n, 143);
            for (var s = 0; s != a.SheetNames.length; ++s) F(n, 156, (l = {
                Hidden: a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[s] && a.Workbook.Sheets[s].Hidden || 0,
                iTabID: s + 1,
                strRelID: "rId" + (s + 1),
                name: a.SheetNames[s]
            }, (i = void 0) || (i = M(127)), i.write_shift(4, l.Hidden), i.write_shift(4, l.iTabID), 
            In(l.strRelID, i), $e(l.name.slice(0, 31), i), i.length > i.l ? i.slice(0, i.l) : i));
            var l, i;
            F(n, 144);
        }(t, e), F(t, 132), t.end();
    }
    function Zl(e, r, t, n, a) {
        return (r.slice(-4) === ".bin" ? zl : ei)(e, t, n, a);
    }
    function ql(e, r, t) {
        return (r.slice(-4) === ".bin" ? cl : Ws)(e);
    }
    function Ql(e, r) {
        var t = [];
        return e.Props && t.push(function(n, a) {
            var s = [];
            return Je(gs).map(function(l) {
                for (var i = 0; i < Qt.length; ++i) if (Qt[i][1] == l) return Qt[i];
                for (i = 0; i < hr.length; ++i) if (hr[i][1] == l) return hr[i];
                throw l;
            }).forEach(function(l) {
                if (n[l[1]] != null) {
                    var i = a && a.Props && a.Props[l[1]] != null ? a.Props[l[1]] : n[l[1]];
                    l[2] === "date" && (i = new Date(i).toISOString().replace(/\.\d*Z/, "Z")), 
                    typeof i == "number" ? i = String(i) : i === !0 || i === !1 ? i = i ? "1" : "0" : i instanceof Date && (i = new Date(i).toISOString().replace(/\.\d*Z/, "")), 
                    s.push(Ze(gs[l[1]] || l[1], i));
                }
            }), V("DocumentProperties", s.join(""), {
                xmlns: ut.o
            });
        }(e.Props, r)), e.Custprops && t.push(function(n, a) {
            var s = [ "Worksheets", "SheetNames" ], l = "CustomDocumentProperties", i = [];
            return n && Je(n).forEach(function(o) {
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                    for (var f = 0; f < Qt.length; ++f) if (o == Qt[f][1]) return;
                    for (f = 0; f < hr.length; ++f) if (o == hr[f][1]) return;
                    for (f = 0; f < s.length; ++f) if (o == s[f]) return;
                    var u = n[o], c = "string";
                    typeof u == "number" ? (c = "float", u = String(u)) : u === !0 || u === !1 ? (c = "boolean", 
                    u = u ? "1" : "0") : u = String(u), i.push(V(Na(o), u, {
                        "dt:dt": c
                    }));
                }
            }), a && Je(a).forEach(function(o) {
                if (Object.prototype.hasOwnProperty.call(a, o) && (!n || !Object.prototype.hasOwnProperty.call(n, o))) {
                    var f = a[o], u = "string";
                    typeof f == "number" ? (u = "float", f = String(f)) : f === !0 || f === !1 ? (u = "boolean", 
                    f = f ? "1" : "0") : f instanceof Date ? (u = "dateTime.tz", 
                    f = f.toISOString()) : f = String(f), i.push(V(Na(o), f, {
                        "dt:dt": u
                    }));
                }
            }), "<" + l + ' xmlns="' + ut.o + '">' + i.join("") + "</" + l + ">";
        }(e.Props, e.Custprops)), t.join("");
    }
    function ai(e) {
        return V("NamedRange", null, {
            "ss:Name": e.Name,
            "ss:RefersTo": "=" + Bn(e.Ref, {
                r: 0,
                c: 0
            })
        });
    }
    function ef(e, r, t, n, a, s, l) {
        if (!e || e.v == null && e.f == null) return "";
        var i = {};
        if (e.f && (i["ss:Formula"] = "=" + xe(Bn(e.f, l))), e.F && e.F.slice(0, r.length) == r) {
            var o = ze(e.F.slice(r.length + 1));
            i["ss:ArrayRange"] = "RC:R" + (o.r == l.r ? "" : "[" + (o.r - l.r) + "]") + "C" + (o.c == l.c ? "" : "[" + (o.c - l.c) + "]");
        }
        if (e.l && e.l.Target && (i["ss:HRef"] = xe(e.l.Target), e.l.Tooltip && (i["x:HRefScreenTip"] = xe(e.l.Tooltip))), 
        t["!merges"]) for (var f = t["!merges"], u = 0; u != f.length; ++u) f[u].s.c == l.c && f[u].s.r == l.r && (f[u].e.c > f[u].s.c && (i["ss:MergeAcross"] = f[u].e.c - f[u].s.c), 
        f[u].e.r > f[u].s.r && (i["ss:MergeDown"] = f[u].e.r - f[u].s.r));
        var c = "", h = "";
        switch (e.t) {
          case "z":
            if (!n.sheetStubs) return "";
            break;

          case "n":
            c = "Number", h = String(e.v);
            break;

          case "b":
            c = "Boolean", h = e.v ? "1" : "0";
            break;

          case "e":
            c = "Error", h = kr[e.v];
            break;

          case "d":
            c = "DateTime", h = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || Le[14]);
            break;

          case "s":
            c = "String", h = ((e.v || "") + "").replace(En, function(E) {
                return bn[E];
            }).replace(Ia, function(E) {
                return "&#x" + E.charCodeAt(0).toString(16).toUpperCase() + ";";
            });
        }
        var d = Gt(n.cellXfs, e, n);
        i["ss:StyleID"] = "s" + (21 + d), i["ss:Index"] = l.c + 1;
        var p = e.v != null ? h : "", g = e.t == "z" ? "" : '<Data ss:Type="' + c + '">' + p + "</Data>";
        return (e.c || []).length > 0 && (g += e.c.map(function(E) {
            var x = V("ss:Data", (E.t || "").replace(/(\r\n|[\r\n])/g, "&#10;"), {
                xmlns: "http://www.w3.org/TR/REC-html40"
            });
            return V("Comment", x, {
                "ss:Author": E.a
            });
        }).join("")), V("Cell", g, i);
    }
    function tf(e, r) {
        var t = '<Row ss:Index="' + (e + 1) + '"';
        return r && (r.hpt && !r.hpx && (r.hpx = Ps(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), 
        r.hidden && (t += ' ss:Hidden="1"')), t + ">";
    }
    function rf(e, r, t) {
        var n = [], a = t.SheetNames[e], s = t.Sheets[a], l = s ? function(i, o, f, u) {
            if (!i || !((u || {}).Workbook || {}).Names) return "";
            for (var c = u.Workbook.Names, h = [], d = 0; d < c.length; ++d) {
                var p = c[d];
                p.Sheet == f && (p.Name.match(/^_xlfn\./) || h.push(ai(p)));
            }
            return h.join("");
        }(s, 0, e, t) : "";
        return l.length > 0 && n.push("<Names>" + l + "</Names>"), l = s ? function(i, o, f, u) {
            if (!i["!ref"]) return "";
            var c = Ne(i["!ref"]), h = i["!merges"] || [], d = 0, p = [];
            i["!cols"] && i["!cols"].forEach(function(A, C) {
                Mn(A);
                var I = !!A.width, D = sn(C, A), N = {
                    "ss:Index": C + 1
                };
                I && (N["ss:Width"] = en(D.width)), A.hidden && (N["ss:Hidden"] = "1"), 
                p.push(V("Column", null, N));
            });
            for (var g = Array.isArray(i), E = c.s.r; E <= c.e.r; ++E) {
                for (var x = [ tf(E, (i["!rows"] || [])[E]) ], S = c.s.c; S <= c.e.c; ++S) {
                    var m = !1;
                    for (d = 0; d != h.length; ++d) if (!(h[d].s.c > S || h[d].s.r > E || h[d].e.c < S || h[d].e.r < E)) {
                        h[d].s.c == S && h[d].s.r == E || (m = !0);
                        break;
                    }
                    if (!m) {
                        var w = {
                            r: E,
                            c: S
                        }, v = Re(w), T = g ? (i[E] || [])[S] : i[v];
                        x.push(ef(T, v, i, o, 0, 0, w));
                    }
                }
                x.push("</Row>"), x.length > 2 && p.push(x.join(""));
            }
            return p.join("");
        }(s, r) : "", l.length > 0 && n.push("<Table>" + l + "</Table>"), n.push(function(i, o, f, u) {
            if (!i) return "";
            var c = [];
            if (i["!margins"] && (c.push("<PageSetup>"), i["!margins"].header && c.push(V("Header", null, {
                "x:Margin": i["!margins"].header
            })), i["!margins"].footer && c.push(V("Footer", null, {
                "x:Margin": i["!margins"].footer
            })), c.push(V("PageMargins", null, {
                "x:Bottom": i["!margins"].bottom || "0.75",
                "x:Left": i["!margins"].left || "0.7",
                "x:Right": i["!margins"].right || "0.7",
                "x:Top": i["!margins"].top || "0.75"
            })), c.push("</PageSetup>")), u && u.Workbook && u.Workbook.Sheets && u.Workbook.Sheets[f]) if (u.Workbook.Sheets[f].Hidden) c.push(V("Visible", u.Workbook.Sheets[f].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {})); else {
                for (var h = 0; h < f && (!u.Workbook.Sheets[h] || u.Workbook.Sheets[h].Hidden); ++h);
                h == f && c.push("<Selected/>");
            }
            return ((((u || {}).Workbook || {}).Views || [])[0] || {}).RTL && c.push("<DisplayRightToLeft/>"), 
            i["!protect"] && (c.push(Ze("ProtectContents", "True")), i["!protect"].objects && c.push(Ze("ProtectObjects", "True")), 
            i["!protect"].scenarios && c.push(Ze("ProtectScenarios", "True")), i["!protect"].selectLockedCells == null || i["!protect"].selectLockedCells ? i["!protect"].selectUnlockedCells == null || i["!protect"].selectUnlockedCells || c.push(Ze("EnableSelection", "UnlockedCells")) : c.push(Ze("EnableSelection", "NoSelection")), 
            [ [ "formatCells", "AllowFormatCells" ], [ "formatColumns", "AllowSizeCols" ], [ "formatRows", "AllowSizeRows" ], [ "insertColumns", "AllowInsertCols" ], [ "insertRows", "AllowInsertRows" ], [ "insertHyperlinks", "AllowInsertHyperlinks" ], [ "deleteColumns", "AllowDeleteCols" ], [ "deleteRows", "AllowDeleteRows" ], [ "sort", "AllowSort" ], [ "autoFilter", "AllowFilter" ], [ "pivotTables", "AllowUsePivotTables" ] ].forEach(function(d) {
                i["!protect"][d[0]] && c.push("<" + d[1] + "/>");
            })), c.length == 0 ? "" : V("WorksheetOptions", c.join(""), {
                xmlns: ut.x
            });
        }(s, 0, e, t)), n.join("");
    }
    function nf(e, r) {
        r || (r = {}), e.SSF || (e.SSF = ft(Le)), e.SSF && (zr(), Vr(e.SSF), r.revssf = $r(e.SSF), 
        r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], Gt(r.cellXfs, {}, {
            revssf: {
                General: 0
            }
        }));
        var t = [];
        t.push(Ql(e, r)), t.push(""), t.push(""), t.push("");
        for (var n = 0; n < e.SheetNames.length; ++n) t.push(V("Worksheet", rf(n, r, e), {
            "ss:Name": xe(e.SheetNames[n])
        }));
        return t[2] = function(a, s) {
            var l = [ '<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>' ];
            return s.cellXfs.forEach(function(i, o) {
                var f = [];
                f.push(V("NumberFormat", null, {
                    "ss:Format": xe(Le[i.numFmtId])
                }));
                var u = {
                    "ss:ID": "s" + (21 + o)
                };
                l.push(V("Style", f.join(""), u));
            }), V("Styles", l.join(""));
        }(0, r), t[3] = function(a) {
            if (!((a || {}).Workbook || {}).Names) return "";
            for (var s = a.Workbook.Names, l = [], i = 0; i < s.length; ++i) {
                var o = s[i];
                o.Sheet == null && (o.Name.match(/^_xlfn\./) || l.push(ai(o)));
            }
            return V("Names", l.join(""));
        }(e), Be + V("Workbook", t.join(""), {
            xmlns: ut.ss,
            "xmlns:o": ut.o,
            "xmlns:x": ut.x,
            "xmlns:ss": ut.ss,
            "xmlns:dt": ut.dt,
            "xmlns:html": ut.html
        });
    }
    var Gn = {
        SI: "e0859ff2f94f6810ab9108002b27b3d9",
        DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
        UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
    };
    function af(e, r) {
        var t = r || {}, n = Oe.utils.cfb_new({
            root: "R"
        }), a = "/Workbook";
        switch (t.bookType || "xls") {
          case "xls":
            t.bookType = "biff8";

          case "xla":
            t.bookType || (t.bookType = "xla");

          case "biff8":
            a = "/Workbook", t.biff = 8;
            break;

          case "biff5":
            a = "/Book", t.biff = 5;
            break;

          default:
            throw new Error("invalid type " + t.bookType + " for XLS CFB");
        }
        return Oe.utils.cfb_add(n, a, si(e, t)), t.biff == 8 && (e.Props || e.Custprops) && function(s, l) {
            var i, o = [], f = [], u = [], c = 0, h = _a(is, "n"), d = _a(os, "n");
            if (s.Props) for (i = Je(s.Props), c = 0; c < i.length; ++c) (Object.prototype.hasOwnProperty.call(h, i[c]) ? o : Object.prototype.hasOwnProperty.call(d, i[c]) ? f : u).push([ i[c], s.Props[i[c]] ]);
            if (s.Custprops) for (i = Je(s.Custprops), c = 0; c < i.length; ++c) Object.prototype.hasOwnProperty.call(s.Props || {}, i[c]) || (Object.prototype.hasOwnProperty.call(h, i[c]) ? o : Object.prototype.hasOwnProperty.call(d, i[c]) ? f : u).push([ i[c], s.Custprops[i[c]] ]);
            var p = [];
            for (c = 0; c < u.length; ++c) Ts.indexOf(u[c][0]) > -1 || ps.indexOf(u[c][0]) > -1 || u[c][1] != null && p.push(u[c]);
            f.length && Oe.utils.cfb_add(l, "/SummaryInformation", bs(f, Gn.SI, d, os)), 
            (o.length || p.length) && Oe.utils.cfb_add(l, "/DocumentSummaryInformation", bs(o, Gn.DSI, h, is, p.length ? p : null, Gn.UDI));
        }(e, n), t.biff == 8 && e.vbaraw && function(s, l) {
            l.FullPaths.forEach(function(i, o) {
                if (o != 0) {
                    var f = i.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
                    f.slice(-1) !== "/" && Oe.utils.cfb_add(s, f, l.FileIndex[o].content);
                }
            });
        }(n, Oe.read(e.vbaraw, {
            type: typeof e.vbaraw == "string" ? "binary" : "buffer"
        })), n;
    }
    var sf = {
        0: {
            f: function(e, r) {
                var t = {}, n = e.l + r;
                t.r = e.read_shift(4), e.l += 4;
                var a = e.read_shift(2);
                e.l += 1;
                var s = e.read_shift(1);
                return e.l = n, 7 & s && (t.level = 7 & s), 16 & s && (t.hidden = !0), 
                32 & s && (t.hpt = a / 20), t;
            }
        },
        1: {
            f: function(e) {
                return [ vt(e) ];
            }
        },
        2: {
            f: function(e) {
                return [ vt(e), ns(e), "n" ];
            }
        },
        3: {
            f: function(e) {
                return [ vt(e), e.read_shift(1), "e" ];
            }
        },
        4: {
            f: function(e) {
                return [ vt(e), e.read_shift(1), "b" ];
            }
        },
        5: {
            f: function(e) {
                return [ vt(e), lr(e), "n" ];
            }
        },
        6: {
            f: function(e) {
                return [ vt(e), nt(e), "str" ];
            }
        },
        7: {
            f: function(e) {
                return [ vt(e), e.read_shift(4), "s" ];
            }
        },
        8: {
            f: function(e, r, t) {
                var n = e.l + r, a = vt(e);
                a.r = t["!row"];
                var s = [ a, nt(e), "str" ];
                if (t.cellFormula) {
                    e.l += 2;
                    var l = an(e, n - e.l, t);
                    s[3] = pr(l, 0, a, t.supbooks, t);
                } else e.l = n;
                return s;
            }
        },
        9: {
            f: function(e, r, t) {
                var n = e.l + r, a = vt(e);
                a.r = t["!row"];
                var s = [ a, lr(e), "n" ];
                if (t.cellFormula) {
                    e.l += 2;
                    var l = an(e, n - e.l, t);
                    s[3] = pr(l, 0, a, t.supbooks, t);
                } else e.l = n;
                return s;
            }
        },
        10: {
            f: function(e, r, t) {
                var n = e.l + r, a = vt(e);
                a.r = t["!row"];
                var s = [ a, e.read_shift(1), "b" ];
                if (t.cellFormula) {
                    e.l += 2;
                    var l = an(e, n - e.l, t);
                    s[3] = pr(l, 0, a, t.supbooks, t);
                } else e.l = n;
                return s;
            }
        },
        11: {
            f: function(e, r, t) {
                var n = e.l + r, a = vt(e);
                a.r = t["!row"];
                var s = [ a, e.read_shift(1), "e" ];
                if (t.cellFormula) {
                    e.l += 2;
                    var l = an(e, n - e.l, t);
                    s[3] = pr(l, 0, a, t.supbooks, t);
                } else e.l = n;
                return s;
            }
        },
        12: {
            f: function(e) {
                return [ Jt(e) ];
            }
        },
        13: {
            f: function(e) {
                return [ Jt(e), ns(e), "n" ];
            }
        },
        14: {
            f: function(e) {
                return [ Jt(e), e.read_shift(1), "e" ];
            }
        },
        15: {
            f: function(e) {
                return [ Jt(e), e.read_shift(1), "b" ];
            }
        },
        16: {
            f: function(e) {
                return [ Jt(e), lr(e), "n" ];
            }
        },
        17: {
            f: function(e) {
                return [ Jt(e), nt(e), "str" ];
            }
        },
        18: {
            f: function(e) {
                return [ Jt(e), e.read_shift(4), "s" ];
            }
        },
        19: {
            f: Cn
        },
        20: {},
        21: {},
        22: {},
        23: {},
        24: {},
        25: {},
        26: {},
        27: {},
        28: {},
        29: {},
        30: {},
        31: {},
        32: {},
        33: {},
        34: {},
        35: {
            T: 1
        },
        36: {
            T: -1
        },
        37: {
            T: 1
        },
        38: {
            T: -1
        },
        39: {
            f: function(e, r, t) {
                var n = e.l + r;
                e.l += 4, e.l += 1;
                var a = e.read_shift(4), s = No(e), l = _l(e, 0, t), i = kn(e);
                e.l = n;
                var o = {
                    Name: s,
                    Ptg: l
                };
                return a < 268435455 && (o.Sheet = a), i && (o.Comment = i), o;
            }
        },
        40: {},
        42: {},
        43: {
            f: function(e, r, t) {
                var n = {};
                n.sz = e.read_shift(2) / 20;
                var a = function(o) {
                    var f = o.read_shift(1);
                    return o.l++, {
                        fBold: 1 & f,
                        fItalic: 2 & f,
                        fUnderline: 4 & f,
                        fStrikeout: 8 & f,
                        fOutline: 16 & f,
                        fShadow: 32 & f,
                        fCondense: 64 & f,
                        fExtend: 128 & f
                    };
                }(e);
                switch (a.fItalic && (n.italic = 1), a.fCondense && (n.condense = 1), 
                a.fExtend && (n.extend = 1), a.fShadow && (n.shadow = 1), a.fOutline && (n.outline = 1), 
                a.fStrikeout && (n.strike = 1), e.read_shift(2) === 700 && (n.bold = 1), 
                e.read_shift(2)) {
                  case 1:
                    n.vertAlign = "superscript";
                    break;

                  case 2:
                    n.vertAlign = "subscript";
                }
                var s = e.read_shift(1);
                s != 0 && (n.underline = s);
                var l = e.read_shift(1);
                l > 0 && (n.family = l);
                var i = e.read_shift(1);
                switch (i > 0 && (n.charset = i), e.l++, n.color = function(o) {
                    var f = {}, u = o.read_shift(1) >>> 1, c = o.read_shift(1), h = o.read_shift(2, "i"), d = o.read_shift(1), p = o.read_shift(1), g = o.read_shift(1);
                    switch (o.l++, u) {
                      case 0:
                        f.auto = 1;
                        break;

                      case 1:
                        f.index = c;
                        var E = Do[c];
                        E && (f.rgb = Is(E));
                        break;

                      case 2:
                        f.rgb = Is([ d, p, g ]);
                        break;

                      case 3:
                        f.theme = c;
                    }
                    return h != 0 && (f.tint = h > 0 ? h / 32767 : h / 32768), f;
                }(e), e.read_shift(1)) {
                  case 1:
                    n.scheme = "major";
                    break;

                  case 2:
                    n.scheme = "minor";
                }
                return n.name = nt(e), n;
            }
        },
        44: {
            f: function(e, r) {
                return [ e.read_shift(2), nt(e) ];
            }
        },
        45: {
            f: tl
        },
        46: {
            f: rl
        },
        47: {
            f: function(e, r) {
                var t = e.l + r, n = e.read_shift(2), a = e.read_shift(2);
                return e.l = t, {
                    ixfe: n,
                    numFmtId: a
                };
            }
        },
        48: {},
        49: {
            f: function(e) {
                return e.read_shift(4, "i");
            }
        },
        50: {},
        51: {
            f: function(e) {
                for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([ e.read_shift(4), e.read_shift(4) ]);
                return r;
            }
        },
        52: {
            T: 1
        },
        53: {
            T: -1
        },
        54: {
            T: 1
        },
        55: {
            T: -1
        },
        56: {
            T: 1
        },
        57: {
            T: -1
        },
        58: {},
        59: {},
        60: {
            f: function(e, r, t) {
                if (!t.cellStyles) return Ot(e, r);
                var n = t && t.biff >= 12 ? 4 : 2, a = e.read_shift(n), s = e.read_shift(n), l = e.read_shift(n), i = e.read_shift(n), o = e.read_shift(2);
                n == 2 && (e.l += 2);
                var f = {
                    s: a,
                    e: s,
                    w: l,
                    ixfe: i,
                    flags: o
                };
                return (t.biff >= 5 || !t.biff) && (f.level = o >> 8 & 7), f;
            }
        },
        62: {
            f: function(e) {
                return [ vt(e), Cn(e), "is" ];
            }
        },
        63: {
            f: function(e) {
                var r = {};
                r.i = e.read_shift(4);
                var t = {};
                t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = Re(t);
                var n = e.read_shift(1);
                return 2 & n && (r.l = "1"), 8 & n && (r.a = "1"), r;
            }
        },
        64: {
            f: function() {}
        },
        65: {},
        66: {},
        67: {},
        68: {},
        69: {},
        70: {},
        128: {},
        129: {
            T: 1
        },
        130: {
            T: -1
        },
        131: {
            T: 1,
            f: Ot,
            p: 0
        },
        132: {
            T: -1
        },
        133: {
            T: 1
        },
        134: {
            T: -1
        },
        135: {
            T: 1
        },
        136: {
            T: -1
        },
        137: {
            T: 1,
            f: function(e) {
                var r = e.read_shift(2);
                return e.l += 28, {
                    RTL: 32 & r
                };
            }
        },
        138: {
            T: -1
        },
        139: {
            T: 1
        },
        140: {
            T: -1
        },
        141: {
            T: 1
        },
        142: {
            T: -1
        },
        143: {
            T: 1
        },
        144: {
            T: -1
        },
        145: {
            T: 1
        },
        146: {
            T: -1
        },
        147: {
            f: function(e, r) {
                var t = {}, n = e[e.l];
                return ++e.l, t.above = !(64 & n), t.left = !(128 & n), e.l += 18, 
                t.name = ko(e), t;
            }
        },
        148: {
            f: Pl,
            p: 16
        },
        151: {
            f: function() {}
        },
        152: {},
        153: {
            f: function(e, r) {
                var t = {}, n = e.read_shift(4);
                t.defaultThemeVersion = e.read_shift(4);
                var a = r > 8 ? nt(e) : "";
                return a.length > 0 && (t.CodeName = a), t.autoCompressPictures = !!(65536 & n), 
                t.backupFile = !!(64 & n), t.checkCompatibility = !!(4096 & n), 
                t.date1904 = !!(1 & n), t.filterPrivacy = !!(8 & n), t.hidePivotFieldList = !!(1024 & n), 
                t.promptedSolutions = !!(16 & n), t.publishItems = !!(2048 & n), 
                t.refreshAllConnections = !!(262144 & n), t.saveExternalLinkValues = !!(128 & n), 
                t.showBorderUnselectedTables = !!(4 & n), t.showInkAnnotation = !!(32 & n), 
                t.showObjects = [ "all", "placeholders", "none" ][n >> 13 & 3], 
                t.showPivotChartFilter = !!(32768 & n), t.updateLinks = [ "userSet", "never", "always" ][n >> 8 & 3], 
                t;
            }
        },
        154: {},
        155: {},
        156: {
            f: function(e, r) {
                var t = {};
                return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Nn(e), 
                t.name = nt(e), t;
            }
        },
        157: {},
        158: {},
        159: {
            T: 1,
            f: function(e) {
                return [ e.read_shift(4), e.read_shift(4) ];
            }
        },
        160: {
            T: -1
        },
        161: {
            T: 1,
            f: qt
        },
        162: {
            T: -1
        },
        163: {
            T: 1
        },
        164: {
            T: -1
        },
        165: {
            T: 1
        },
        166: {
            T: -1
        },
        167: {},
        168: {},
        169: {},
        170: {},
        171: {},
        172: {
            T: 1
        },
        173: {
            T: -1
        },
        174: {},
        175: {},
        176: {
            f: Ml
        },
        177: {
            T: 1
        },
        178: {
            T: -1
        },
        179: {
            T: 1
        },
        180: {
            T: -1
        },
        181: {
            T: 1
        },
        182: {
            T: -1
        },
        183: {
            T: 1
        },
        184: {
            T: -1
        },
        185: {
            T: 1
        },
        186: {
            T: -1
        },
        187: {
            T: 1
        },
        188: {
            T: -1
        },
        189: {
            T: 1
        },
        190: {
            T: -1
        },
        191: {
            T: 1
        },
        192: {
            T: -1
        },
        193: {
            T: 1
        },
        194: {
            T: -1
        },
        195: {
            T: 1
        },
        196: {
            T: -1
        },
        197: {
            T: 1
        },
        198: {
            T: -1
        },
        199: {
            T: 1
        },
        200: {
            T: -1
        },
        201: {
            T: 1
        },
        202: {
            T: -1
        },
        203: {
            T: 1
        },
        204: {
            T: -1
        },
        205: {
            T: 1
        },
        206: {
            T: -1
        },
        207: {
            T: 1
        },
        208: {
            T: -1
        },
        209: {
            T: 1
        },
        210: {
            T: -1
        },
        211: {
            T: 1
        },
        212: {
            T: -1
        },
        213: {
            T: 1
        },
        214: {
            T: -1
        },
        215: {
            T: 1
        },
        216: {
            T: -1
        },
        217: {
            T: 1
        },
        218: {
            T: -1
        },
        219: {
            T: 1
        },
        220: {
            T: -1
        },
        221: {
            T: 1
        },
        222: {
            T: -1
        },
        223: {
            T: 1
        },
        224: {
            T: -1
        },
        225: {
            T: 1
        },
        226: {
            T: -1
        },
        227: {
            T: 1
        },
        228: {
            T: -1
        },
        229: {
            T: 1
        },
        230: {
            T: -1
        },
        231: {
            T: 1
        },
        232: {
            T: -1
        },
        233: {
            T: 1
        },
        234: {
            T: -1
        },
        235: {
            T: 1
        },
        236: {
            T: -1
        },
        237: {
            T: 1
        },
        238: {
            T: -1
        },
        239: {
            T: 1
        },
        240: {
            T: -1
        },
        241: {
            T: 1
        },
        242: {
            T: -1
        },
        243: {
            T: 1
        },
        244: {
            T: -1
        },
        245: {
            T: 1
        },
        246: {
            T: -1
        },
        247: {
            T: 1
        },
        248: {
            T: -1
        },
        249: {
            T: 1
        },
        250: {
            T: -1
        },
        251: {
            T: 1
        },
        252: {
            T: -1
        },
        253: {
            T: 1
        },
        254: {
            T: -1
        },
        255: {
            T: 1
        },
        256: {
            T: -1
        },
        257: {
            T: 1
        },
        258: {
            T: -1
        },
        259: {
            T: 1
        },
        260: {
            T: -1
        },
        261: {
            T: 1
        },
        262: {
            T: -1
        },
        263: {
            T: 1
        },
        264: {
            T: -1
        },
        265: {
            T: 1
        },
        266: {
            T: -1
        },
        267: {
            T: 1
        },
        268: {
            T: -1
        },
        269: {
            T: 1
        },
        270: {
            T: -1
        },
        271: {
            T: 1
        },
        272: {
            T: -1
        },
        273: {
            T: 1
        },
        274: {
            T: -1
        },
        275: {
            T: 1
        },
        276: {
            T: -1
        },
        277: {},
        278: {
            T: 1
        },
        279: {
            T: -1
        },
        280: {
            T: 1
        },
        281: {
            T: -1
        },
        282: {
            T: 1
        },
        283: {
            T: 1
        },
        284: {
            T: -1
        },
        285: {
            T: 1
        },
        286: {
            T: -1
        },
        287: {
            T: 1
        },
        288: {
            T: -1
        },
        289: {
            T: 1
        },
        290: {
            T: -1
        },
        291: {
            T: 1
        },
        292: {
            T: -1
        },
        293: {
            T: 1
        },
        294: {
            T: -1
        },
        295: {
            T: 1
        },
        296: {
            T: -1
        },
        297: {
            T: 1
        },
        298: {
            T: -1
        },
        299: {
            T: 1
        },
        300: {
            T: -1
        },
        301: {
            T: 1
        },
        302: {
            T: -1
        },
        303: {
            T: 1
        },
        304: {
            T: -1
        },
        305: {
            T: 1
        },
        306: {
            T: -1
        },
        307: {
            T: 1
        },
        308: {
            T: -1
        },
        309: {
            T: 1
        },
        310: {
            T: -1
        },
        311: {
            T: 1
        },
        312: {
            T: -1
        },
        313: {
            T: -1
        },
        314: {
            T: 1
        },
        315: {
            T: -1
        },
        316: {
            T: 1
        },
        317: {
            T: -1
        },
        318: {
            T: 1
        },
        319: {
            T: -1
        },
        320: {
            T: 1
        },
        321: {
            T: -1
        },
        322: {
            T: 1
        },
        323: {
            T: -1
        },
        324: {
            T: 1
        },
        325: {
            T: -1
        },
        326: {
            T: 1
        },
        327: {
            T: -1
        },
        328: {
            T: 1
        },
        329: {
            T: -1
        },
        330: {
            T: 1
        },
        331: {
            T: -1
        },
        332: {
            T: 1
        },
        333: {
            T: -1
        },
        334: {
            T: 1
        },
        335: {
            f: function(e, r) {
                return {
                    flags: e.read_shift(4),
                    version: e.read_shift(4),
                    name: nt(e)
                };
            }
        },
        336: {
            T: -1
        },
        337: {
            f: function(e) {
                return e.l += 4, e.read_shift(4) != 0;
            },
            T: 1
        },
        338: {
            T: -1
        },
        339: {
            T: 1
        },
        340: {
            T: -1
        },
        341: {
            T: 1
        },
        342: {
            T: -1
        },
        343: {
            T: 1
        },
        344: {
            T: -1
        },
        345: {
            T: 1
        },
        346: {
            T: -1
        },
        347: {
            T: 1
        },
        348: {
            T: -1
        },
        349: {
            T: 1
        },
        350: {
            T: -1
        },
        351: {},
        352: {},
        353: {
            T: 1
        },
        354: {
            T: -1
        },
        355: {
            f: Nn
        },
        357: {},
        358: {},
        359: {},
        360: {
            T: 1
        },
        361: {},
        362: {
            f: function(e, r, t) {
                if (t.biff < 8) return function(l, i, o) {
                    l[l.l + 1] == 3 && l[l.l]++;
                    var f = As(l, 0, o);
                    return f.charCodeAt(0) == 3 ? f.slice(1) : f;
                }(e, 0, t);
                for (var n = [], a = e.l + r, s = e.read_shift(t.biff > 8 ? 4 : 2); s-- != 0; ) n.push(Uo(e, t.biff, t));
                if (e.l != a) throw new Error("Bad ExternSheet: " + e.l + " != " + a);
                return n;
            }
        },
        363: {},
        364: {},
        366: {},
        367: {},
        368: {},
        369: {},
        370: {},
        371: {},
        372: {
            T: 1
        },
        373: {
            T: -1
        },
        374: {
            T: 1
        },
        375: {
            T: -1
        },
        376: {
            T: 1
        },
        377: {
            T: -1
        },
        378: {
            T: 1
        },
        379: {
            T: -1
        },
        380: {
            T: 1
        },
        381: {
            T: -1
        },
        382: {
            T: 1
        },
        383: {
            T: -1
        },
        384: {
            T: 1
        },
        385: {
            T: -1
        },
        386: {
            T: 1
        },
        387: {
            T: -1
        },
        388: {
            T: 1
        },
        389: {
            T: -1
        },
        390: {
            T: 1
        },
        391: {
            T: -1
        },
        392: {
            T: 1
        },
        393: {
            T: -1
        },
        394: {
            T: 1
        },
        395: {
            T: -1
        },
        396: {},
        397: {},
        398: {},
        399: {},
        400: {},
        401: {
            T: 1
        },
        403: {},
        404: {},
        405: {},
        406: {},
        407: {},
        408: {},
        409: {},
        410: {},
        411: {},
        412: {},
        413: {},
        414: {},
        415: {},
        416: {},
        417: {},
        418: {},
        419: {},
        420: {},
        421: {},
        422: {
            T: 1
        },
        423: {
            T: 1
        },
        424: {
            T: -1
        },
        425: {
            T: -1
        },
        426: {
            f: function(e, r, t) {
                var n = e.l + r, a = ss(e), s = e.read_shift(1), l = [ a ];
                if (l[2] = s, t.cellFormula) {
                    var i = xl(e, n - e.l, t);
                    l[1] = i;
                } else e.l = n;
                return l;
            }
        },
        427: {
            f: function(e, r, t) {
                var n = e.l + r, a = [ qt(e) ];
                if (t.cellFormula) {
                    var s = yl(e, n - e.l, t);
                    a[1] = s, e.l = n;
                } else e.l = n;
                return a;
            }
        },
        428: {},
        429: {
            T: 1
        },
        430: {
            T: -1
        },
        431: {
            T: 1
        },
        432: {
            T: -1
        },
        433: {
            T: 1
        },
        434: {
            T: -1
        },
        435: {
            T: 1
        },
        436: {
            T: -1
        },
        437: {
            T: 1
        },
        438: {
            T: -1
        },
        439: {
            T: 1
        },
        440: {
            T: -1
        },
        441: {
            T: 1
        },
        442: {
            T: -1
        },
        443: {
            T: 1
        },
        444: {
            T: -1
        },
        445: {
            T: 1
        },
        446: {
            T: -1
        },
        447: {
            T: 1
        },
        448: {
            T: -1
        },
        449: {
            T: 1
        },
        450: {
            T: -1
        },
        451: {
            T: 1
        },
        452: {
            T: -1
        },
        453: {
            T: 1
        },
        454: {
            T: -1
        },
        455: {
            T: 1
        },
        456: {
            T: -1
        },
        457: {
            T: 1
        },
        458: {
            T: -1
        },
        459: {
            T: 1
        },
        460: {
            T: -1
        },
        461: {
            T: 1
        },
        462: {
            T: -1
        },
        463: {
            T: 1
        },
        464: {
            T: -1
        },
        465: {
            T: 1
        },
        466: {
            T: -1
        },
        467: {
            T: 1
        },
        468: {
            T: -1
        },
        469: {
            T: 1
        },
        470: {
            T: -1
        },
        471: {},
        472: {},
        473: {
            T: 1
        },
        474: {
            T: -1
        },
        475: {},
        476: {
            f: function(e) {
                var r = {};
                return ti.forEach(function(t) {
                    r[t] = lr(e);
                }), r;
            }
        },
        477: {},
        478: {},
        479: {
            T: 1
        },
        480: {
            T: -1
        },
        481: {
            T: 1
        },
        482: {
            T: -1
        },
        483: {
            T: 1
        },
        484: {
            T: -1
        },
        485: {
            f: function() {}
        },
        486: {
            T: 1
        },
        487: {
            T: -1
        },
        488: {
            T: 1
        },
        489: {
            T: -1
        },
        490: {
            T: 1
        },
        491: {
            T: -1
        },
        492: {
            T: 1
        },
        493: {
            T: -1
        },
        494: {
            f: function(e, r) {
                var t = e.l + r, n = qt(e), a = kn(e), s = nt(e), l = nt(e), i = nt(e);
                e.l = t;
                var o = {
                    rfx: n,
                    relId: a,
                    loc: s,
                    display: i
                };
                return l && (o.Tooltip = l), o;
            }
        },
        495: {
            T: 1
        },
        496: {
            T: -1
        },
        497: {
            T: 1
        },
        498: {
            T: -1
        },
        499: {},
        500: {
            T: 1
        },
        501: {
            T: -1
        },
        502: {
            T: 1
        },
        503: {
            T: -1
        },
        504: {},
        505: {
            T: 1
        },
        506: {
            T: -1
        },
        507: {},
        508: {
            T: 1
        },
        509: {
            T: -1
        },
        510: {
            T: 1
        },
        511: {
            T: -1
        },
        512: {},
        513: {},
        514: {
            T: 1
        },
        515: {
            T: -1
        },
        516: {
            T: 1
        },
        517: {
            T: -1
        },
        518: {
            T: 1
        },
        519: {
            T: -1
        },
        520: {
            T: 1
        },
        521: {
            T: -1
        },
        522: {},
        523: {},
        524: {},
        525: {},
        526: {},
        527: {},
        528: {
            T: 1
        },
        529: {
            T: -1
        },
        530: {
            T: 1
        },
        531: {
            T: -1
        },
        532: {
            T: 1
        },
        533: {
            T: -1
        },
        534: {},
        535: {},
        536: {},
        537: {},
        538: {
            T: 1
        },
        539: {
            T: -1
        },
        540: {
            T: 1
        },
        541: {
            T: -1
        },
        542: {
            T: 1
        },
        548: {},
        549: {},
        550: {
            f: Nn
        },
        551: {},
        552: {},
        553: {},
        554: {
            T: 1
        },
        555: {
            T: -1
        },
        556: {
            T: 1
        },
        557: {
            T: -1
        },
        558: {
            T: 1
        },
        559: {
            T: -1
        },
        560: {
            T: 1
        },
        561: {
            T: -1
        },
        562: {},
        564: {},
        565: {
            T: 1
        },
        566: {
            T: -1
        },
        569: {
            T: 1
        },
        570: {
            T: -1
        },
        572: {},
        573: {
            T: 1
        },
        574: {
            T: -1
        },
        577: {},
        578: {},
        579: {},
        580: {},
        581: {},
        582: {},
        583: {},
        584: {},
        585: {},
        586: {},
        587: {},
        588: {
            T: -1
        },
        589: {},
        590: {
            T: 1
        },
        591: {
            T: -1
        },
        592: {
            T: 1
        },
        593: {
            T: -1
        },
        594: {
            T: 1
        },
        595: {
            T: -1
        },
        596: {},
        597: {
            T: 1
        },
        598: {
            T: -1
        },
        599: {
            T: 1
        },
        600: {
            T: -1
        },
        601: {
            T: 1
        },
        602: {
            T: -1
        },
        603: {
            T: 1
        },
        604: {
            T: -1
        },
        605: {
            T: 1
        },
        606: {
            T: -1
        },
        607: {},
        608: {
            T: 1
        },
        609: {
            T: -1
        },
        610: {},
        611: {
            T: 1
        },
        612: {
            T: -1
        },
        613: {
            T: 1
        },
        614: {
            T: -1
        },
        615: {
            T: 1
        },
        616: {
            T: -1
        },
        617: {
            T: 1
        },
        618: {
            T: -1
        },
        619: {
            T: 1
        },
        620: {
            T: -1
        },
        625: {},
        626: {
            T: 1
        },
        627: {
            T: -1
        },
        628: {
            T: 1
        },
        629: {
            T: -1
        },
        630: {
            T: 1
        },
        631: {
            T: -1
        },
        632: {
            f: fl
        },
        633: {
            T: 1
        },
        634: {
            T: -1
        },
        635: {
            T: 1,
            f: function(e) {
                var r = {};
                r.iauthor = e.read_shift(4);
                var t = qt(e);
                return r.rfx = t.s, r.ref = Re(t.s), e.l += 16, r;
            }
        },
        636: {
            T: -1
        },
        637: {
            f: Ro
        },
        638: {
            T: 1
        },
        639: {},
        640: {
            T: -1
        },
        641: {
            T: 1
        },
        642: {
            T: -1
        },
        643: {
            T: 1
        },
        644: {},
        645: {
            T: -1
        },
        646: {
            T: 1
        },
        648: {
            T: 1
        },
        649: {},
        650: {
            T: -1
        },
        651: {
            f: function(e, r) {
                return e.l += 10, {
                    name: nt(e)
                };
            }
        },
        652: {},
        653: {
            T: 1
        },
        654: {
            T: -1
        },
        655: {
            T: 1
        },
        656: {
            T: -1
        },
        657: {
            T: 1
        },
        658: {
            T: -1
        },
        659: {},
        660: {
            T: 1
        },
        661: {},
        662: {
            T: -1
        },
        663: {},
        664: {
            T: 1
        },
        665: {},
        666: {
            T: -1
        },
        667: {},
        668: {},
        669: {},
        671: {
            T: 1
        },
        672: {
            T: -1
        },
        673: {
            T: 1
        },
        674: {
            T: -1
        },
        675: {},
        676: {},
        677: {},
        678: {},
        679: {},
        680: {},
        681: {},
        1024: {},
        1025: {},
        1026: {
            T: 1
        },
        1027: {
            T: -1
        },
        1028: {
            T: 1
        },
        1029: {
            T: -1
        },
        1030: {},
        1031: {
            T: 1
        },
        1032: {
            T: -1
        },
        1033: {
            T: 1
        },
        1034: {
            T: -1
        },
        1035: {},
        1036: {},
        1037: {},
        1038: {
            T: 1
        },
        1039: {
            T: -1
        },
        1040: {},
        1041: {
            T: 1
        },
        1042: {
            T: -1
        },
        1043: {},
        1044: {},
        1045: {},
        1046: {
            T: 1
        },
        1047: {
            T: -1
        },
        1048: {
            T: 1
        },
        1049: {
            T: -1
        },
        1050: {},
        1051: {
            T: 1
        },
        1052: {
            T: 1
        },
        1053: {
            f: function() {}
        },
        1054: {
            T: 1
        },
        1055: {},
        1056: {
            T: 1
        },
        1057: {
            T: -1
        },
        1058: {
            T: 1
        },
        1059: {
            T: -1
        },
        1061: {},
        1062: {
            T: 1
        },
        1063: {
            T: -1
        },
        1064: {
            T: 1
        },
        1065: {
            T: -1
        },
        1066: {
            T: 1
        },
        1067: {
            T: -1
        },
        1068: {
            T: 1
        },
        1069: {
            T: -1
        },
        1070: {
            T: 1
        },
        1071: {
            T: -1
        },
        1072: {
            T: 1
        },
        1073: {
            T: -1
        },
        1075: {
            T: 1
        },
        1076: {
            T: -1
        },
        1077: {
            T: 1
        },
        1078: {
            T: -1
        },
        1079: {
            T: 1
        },
        1080: {
            T: -1
        },
        1081: {
            T: 1
        },
        1082: {
            T: -1
        },
        1083: {
            T: 1
        },
        1084: {
            T: -1
        },
        1085: {},
        1086: {
            T: 1
        },
        1087: {
            T: -1
        },
        1088: {
            T: 1
        },
        1089: {
            T: -1
        },
        1090: {
            T: 1
        },
        1091: {
            T: -1
        },
        1092: {
            T: 1
        },
        1093: {
            T: -1
        },
        1094: {
            T: 1
        },
        1095: {
            T: -1
        },
        1096: {},
        1097: {
            T: 1
        },
        1098: {},
        1099: {
            T: -1
        },
        1100: {
            T: 1
        },
        1101: {
            T: -1
        },
        1102: {},
        1103: {},
        1104: {},
        1105: {},
        1111: {},
        1112: {},
        1113: {
            T: 1
        },
        1114: {
            T: -1
        },
        1115: {
            T: 1
        },
        1116: {
            T: -1
        },
        1117: {},
        1118: {
            T: 1
        },
        1119: {
            T: -1
        },
        1120: {
            T: 1
        },
        1121: {
            T: -1
        },
        1122: {
            T: 1
        },
        1123: {
            T: -1
        },
        1124: {
            T: 1
        },
        1125: {
            T: -1
        },
        1126: {},
        1128: {
            T: 1
        },
        1129: {
            T: -1
        },
        1130: {},
        1131: {
            T: 1
        },
        1132: {
            T: -1
        },
        1133: {
            T: 1
        },
        1134: {
            T: -1
        },
        1135: {
            T: 1
        },
        1136: {
            T: -1
        },
        1137: {
            T: 1
        },
        1138: {
            T: -1
        },
        1139: {
            T: 1
        },
        1140: {
            T: -1
        },
        1141: {},
        1142: {
            T: 1
        },
        1143: {
            T: -1
        },
        1144: {
            T: 1
        },
        1145: {
            T: -1
        },
        1146: {},
        1147: {
            T: 1
        },
        1148: {
            T: -1
        },
        1149: {
            T: 1
        },
        1150: {
            T: -1
        },
        1152: {
            T: 1
        },
        1153: {
            T: -1
        },
        1154: {
            T: -1
        },
        1155: {
            T: -1
        },
        1156: {
            T: -1
        },
        1157: {
            T: 1
        },
        1158: {
            T: -1
        },
        1159: {
            T: 1
        },
        1160: {
            T: -1
        },
        1161: {
            T: 1
        },
        1162: {
            T: -1
        },
        1163: {
            T: 1
        },
        1164: {
            T: -1
        },
        1165: {
            T: 1
        },
        1166: {
            T: -1
        },
        1167: {
            T: 1
        },
        1168: {
            T: -1
        },
        1169: {
            T: 1
        },
        1170: {
            T: -1
        },
        1171: {},
        1172: {
            T: 1
        },
        1173: {
            T: -1
        },
        1177: {},
        1178: {
            T: 1
        },
        1180: {},
        1181: {},
        1182: {},
        2048: {
            T: 1
        },
        2049: {
            T: -1
        },
        2050: {},
        2051: {
            T: 1
        },
        2052: {
            T: -1
        },
        2053: {},
        2054: {},
        2055: {
            T: 1
        },
        2056: {
            T: -1
        },
        2057: {
            T: 1
        },
        2058: {
            T: -1
        },
        2060: {},
        2067: {},
        2068: {
            T: 1
        },
        2069: {
            T: -1
        },
        2070: {},
        2071: {},
        2072: {
            T: 1
        },
        2073: {
            T: -1
        },
        2075: {},
        2076: {},
        2077: {
            T: 1
        },
        2078: {
            T: -1
        },
        2079: {},
        2080: {
            T: 1
        },
        2081: {
            T: -1
        },
        2082: {},
        2083: {
            T: 1
        },
        2084: {
            T: -1
        },
        2085: {
            T: 1
        },
        2086: {
            T: -1
        },
        2087: {
            T: 1
        },
        2088: {
            T: -1
        },
        2089: {
            T: 1
        },
        2090: {
            T: -1
        },
        2091: {},
        2092: {},
        2093: {
            T: 1
        },
        2094: {
            T: -1
        },
        2095: {},
        2096: {
            T: 1
        },
        2097: {
            T: -1
        },
        2098: {
            T: 1
        },
        2099: {
            T: -1
        },
        2100: {
            T: 1
        },
        2101: {
            T: -1
        },
        2102: {},
        2103: {
            T: 1
        },
        2104: {
            T: -1
        },
        2105: {},
        2106: {
            T: 1
        },
        2107: {
            T: -1
        },
        2108: {},
        2109: {
            T: 1
        },
        2110: {
            T: -1
        },
        2111: {
            T: 1
        },
        2112: {
            T: -1
        },
        2113: {
            T: 1
        },
        2114: {
            T: -1
        },
        2115: {},
        2116: {},
        2117: {},
        2118: {
            T: 1
        },
        2119: {
            T: -1
        },
        2120: {},
        2121: {
            T: 1
        },
        2122: {
            T: -1
        },
        2123: {
            T: 1
        },
        2124: {
            T: -1
        },
        2125: {},
        2126: {
            T: 1
        },
        2127: {
            T: -1
        },
        2128: {},
        2129: {
            T: 1
        },
        2130: {
            T: -1
        },
        2131: {
            T: 1
        },
        2132: {
            T: -1
        },
        2133: {
            T: 1
        },
        2134: {},
        2135: {},
        2136: {},
        2137: {
            T: 1
        },
        2138: {
            T: -1
        },
        2139: {
            T: 1
        },
        2140: {
            T: -1
        },
        2141: {},
        3072: {},
        3073: {},
        4096: {
            T: 1
        },
        4097: {
            T: -1
        },
        5002: {
            T: 1
        },
        5003: {
            T: -1
        },
        5081: {
            T: 1
        },
        5082: {
            T: -1
        },
        5083: {},
        5084: {
            T: 1
        },
        5085: {
            T: -1
        },
        5086: {
            T: 1
        },
        5087: {
            T: -1
        },
        5088: {},
        5089: {},
        5090: {},
        5092: {
            T: 1
        },
        5093: {
            T: -1
        },
        5094: {},
        5095: {
            T: 1
        },
        5096: {
            T: -1
        },
        5097: {},
        5099: {},
        65535: {
            n: ""
        }
    };
    function z(e, r, t, n) {
        var a = r;
        if (!isNaN(a)) {
            var s = n || (t || []).length || 0, l = e.next(4);
            l.write_shift(2, a), l.write_shift(2, s), s > 0 && _n(t) && e.push(t);
        }
    }
    function Pr(e, r, t) {
        return e || (e = M(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(2, 0), 
        e.write_shift(1, 0), e;
    }
    function of(e, r, t, n) {
        if (r.v != null) switch (r.t) {
          case "d":
          case "n":
            var a = r.t == "d" ? lt(it(r.v)) : r.v;
            return void (a == (0 | a) && a >= 0 && a < 65536 ? z(e, 2, (s = t, l = n, 
            i = a, o = M(9), Pr(o, s, l), o.write_shift(2, i), o)) : z(e, 3, function(f, u, c) {
                var h = M(15);
                return Pr(h, f, u), h.write_shift(8, c, "f"), h;
            }(t, n, a)));

          case "b":
          case "e":
            return void z(e, 5, function(f, u, c, h) {
                var d = M(9);
                return Pr(d, f, u), Ss(c, h || "b", d), d;
            }(t, n, r.v, r.t));

          case "s":
          case "str":
            return void z(e, 4, function(f, u, c) {
                var h = M(8 + 2 * c.length);
                return Pr(h, f, u), h.write_shift(1, c.length), h.write_shift(c.length, c, "sbcs"), 
                h.l < h.length ? h.slice(0, h.l) : h;
            }(t, n, (r.v || "").slice(0, 255)));
        }
        var s, l, i, o;
        z(e, 1, Pr(null, t, n));
    }
    function lf(e, r) {
        for (var t = r || {}, n = ct(), a = 0, s = 0; s < e.SheetNames.length; ++s) e.SheetNames[s] == t.sheet && (a = s);
        if (a == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
        return z(n, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, Pn(0, 16, t)), function(l, i, o, f) {
            var u, c = Array.isArray(i), h = Ne(i["!ref"] || "A1"), d = "", p = [];
            if (h.e.c > 255 || h.e.r > 16383) {
                if (f.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
                h.e.c = Math.min(h.e.c, 255), h.e.r = Math.min(h.e.c, 16383), u = We(h);
            }
            for (var g = h.s.r; g <= h.e.r; ++g) {
                d = qe(g);
                for (var E = h.s.c; E <= h.e.c; ++E) {
                    g === h.s.r && (p[E] = rt(E)), u = p[E] + d;
                    var x = c ? (i[g] || [])[E] : i[u];
                    x && of(l, x, g, E);
                }
            }
        }(n, e.Sheets[e.SheetNames[a]], 0, t), z(n, 10), n.end();
    }
    function ff(e, r, t) {
        z(e, 49, function(n, a) {
            var s = n.name || "Arial", l = a && a.biff == 5, i = M(l ? 15 + s.length : 16 + 2 * s.length);
            return i.write_shift(2, 20 * (n.sz || 12)), i.write_shift(4, 0), i.write_shift(2, 400), 
            i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, s.length), 
            l || i.write_shift(1, 1), i.write_shift((l ? 1 : 2) * s.length, s, l ? "sbcs" : "utf16le"), 
            i;
        }({
            sz: 12,
            color: {
                theme: 1
            },
            name: "Arial",
            family: 2,
            scheme: "minor"
        }, t));
    }
    function cf(e, r) {
        if (r) {
            var t = 0;
            r.forEach(function(n, a) {
                ++t <= 256 && n && z(e, 125, function(s, l) {
                    var i = M(12);
                    i.write_shift(2, l), i.write_shift(2, l), i.write_shift(2, 256 * s.width), 
                    i.write_shift(2, 0);
                    var o = 0;
                    return s.hidden && (o |= 1), i.write_shift(1, o), o = s.level || 0, 
                    i.write_shift(1, o), i.write_shift(2, 0), i;
                }(sn(a, n), a));
            });
        }
    }
    function hf(e, r, t, n, a) {
        var s = 16 + Gt(a.cellXfs, r, a);
        if (r.v != null || r.bf) if (r.bf) z(e, 6, Al(r, t, n, 0, s)); else switch (r.t) {
          case "d":
          case "n":
            z(e, 515, function(l, i, o, f) {
                var u = M(14);
                return er(l, i, f, u), fr(o, u), u;
            }(t, n, r.t == "d" ? lt(it(r.v)) : r.v, s));
            break;

          case "b":
          case "e":
            z(e, 517, function(l, i, o, f, u, c) {
                var h = M(8);
                return er(l, i, f, h), Ss(o, c, h), h;
            }(t, n, r.v, s, 0, r.t));
            break;

          case "s":
          case "str":
            a.bookSST ? z(e, 253, function(l, i, o, f) {
                var u = M(10);
                return er(l, i, f, u), u.write_shift(4, o), u;
            }(t, n, Wn(a.Strings, r.v, a.revStrings), s)) : z(e, 516, function(l, i, o, f, u) {
                var c = !u || u.biff == 8, h = M(+c + 8 + (1 + c) * o.length);
                return er(l, i, f, h), h.write_shift(2, o.length), c && h.write_shift(1, 1), 
                h.write_shift((1 + c) * o.length, o, c ? "utf16le" : "sbcs"), h;
            }(t, n, (r.v || "").slice(0, 255), s, a));
            break;

          default:
            z(e, 513, er(t, n, s));
        } else z(e, 513, er(t, n, s));
    }
    function uf(e, r, t) {
        var n, a, s, l = ct(), i = t.SheetNames[e], o = t.Sheets[i] || {}, f = (t || {}).Workbook || {}, u = (f.Sheets || [])[e] || {}, c = Array.isArray(o), h = r.biff == 8, d = "", p = [], g = Ne(o["!ref"] || "A1"), E = h ? 65536 : 16384;
        if (g.e.c > 255 || g.e.r >= E) {
            if (r.WTF) throw new Error("Range " + (o["!ref"] || "A1") + " exceeds format limit A1:IV16384");
            g.e.c = Math.min(g.e.c, 255), g.e.r = Math.min(g.e.c, E - 1);
        }
        z(l, 2057, Pn(0, 16, r)), z(l, 13, Tt(1)), z(l, 12, Tt(100)), z(l, 15, ot(!0)), 
        z(l, 17, ot(!1)), z(l, 16, fr(.001)), z(l, 95, ot(!0)), z(l, 42, ot(!1)), 
        z(l, 43, ot(!1)), z(l, 130, Tt(1)), z(l, 128, (a = [ 0, 0 ], (s = M(8)).write_shift(4, 0), 
        s.write_shift(2, a[0] ? a[0] + 1 : 0), s.write_shift(2, a[1] ? a[1] + 1 : 0), 
        s)), z(l, 131, ot(!1)), z(l, 132, ot(!1)), h && cf(l, o["!cols"]), z(l, 512, function(v, T) {
            var A = T.biff != 8 && T.biff ? 2 : 4, C = M(2 * A + 6);
            return C.write_shift(A, v.s.r), C.write_shift(A, v.e.r + 1), C.write_shift(2, v.s.c), 
            C.write_shift(2, v.e.c + 1), C.write_shift(2, 0), C;
        }(g, r)), h && (o["!links"] = []);
        for (var x = g.s.r; x <= g.e.r; ++x) {
            d = qe(x);
            for (var S = g.s.c; S <= g.e.c; ++S) {
                x === g.s.r && (p[S] = rt(S)), n = p[S] + d;
                var m = c ? (o[x] || [])[S] : o[n];
                m && (hf(l, m, x, S, r), h && m.l && o["!links"].push([ n, m.l ]));
            }
        }
        var w = u.CodeName || u.name || i;
        return h && z(l, 574, function(v) {
            var T = M(18), A = 1718;
            return v && v.RTL && (A |= 64), T.write_shift(2, A), T.write_shift(4, 0), 
            T.write_shift(4, 64), T.write_shift(4, 0), T.write_shift(4, 0), T;
        }((f.Views || [])[0])), h && (o["!merges"] || []).length && z(l, 229, function(v) {
            var T = M(2 + 8 * v.length);
            T.write_shift(2, v.length);
            for (var A = 0; A < v.length; ++A) ys(v[A], T);
            return T;
        }(o["!merges"])), h && function(v, T) {
            for (var A = 0; A < T["!links"].length; ++A) {
                var C = T["!links"][A];
                z(v, 440, Go(C)), C[1].Tooltip && z(v, 2048, jo(C));
            }
            delete T["!links"];
        }(l, o), z(l, 442, xs(w)), h && function(v, T) {
            var A = M(19);
            A.write_shift(4, 2151), A.write_shift(4, 0), A.write_shift(4, 0), A.write_shift(2, 3), 
            A.write_shift(1, 1), A.write_shift(4, 0), z(v, 2151, A), (A = M(39)).write_shift(4, 2152), 
            A.write_shift(4, 0), A.write_shift(4, 0), A.write_shift(2, 3), A.write_shift(1, 0), 
            A.write_shift(4, 0), A.write_shift(2, 1), A.write_shift(4, 4), A.write_shift(2, 0), 
            ys(Ne(T["!ref"] || "A1"), A), A.write_shift(4, 4), z(v, 2152, A);
        }(l, o), z(l, 10), l.end();
    }
    function pf(e, r, t) {
        var n, a = ct(), s = (e || {}).Workbook || {}, l = s.Sheets || [], i = s.WBProps || {}, o = t.biff == 8, f = t.biff == 5;
        z(a, 2057, Pn(0, 5, t)), t.bookType == "xla" && z(a, 135), z(a, 225, o ? Tt(1200) : null), 
        z(a, 193, function(m, w) {
            w || (w = M(m));
            for (var v = 0; v < m; ++v) w.write_shift(1, 0);
            return w;
        }(2)), f && z(a, 191), f && z(a, 192), z(a, 226), z(a, 92, function(m, w) {
            var v = !w || w.biff == 8, T = M(v ? 112 : 54);
            for (T.write_shift(w.biff == 8 ? 2 : 1, 7), v && T.write_shift(1, 0), 
            T.write_shift(4, 859007059), T.write_shift(4, 5458548 | (v ? 0 : 536870912)); T.l < T.length; ) T.write_shift(1, v ? 0 : 32);
            return T;
        }(0, t)), z(a, 66, Tt(o ? 1200 : 1252)), o && z(a, 353, Tt(0)), o && z(a, 448), 
        z(a, 317, function(m) {
            for (var w = M(2 * m), v = 0; v < m; ++v) w.write_shift(2, v + 1);
            return w;
        }(e.SheetNames.length)), o && e.vbaraw && z(a, 211), o && e.vbaraw && z(a, 442, xs(i.CodeName || "ThisWorkbook")), 
        z(a, 156, Tt(17)), z(a, 25, ot(!1)), z(a, 18, ot(!1)), z(a, 19, Tt(0)), 
        o && z(a, 431, ot(!1)), o && z(a, 444, Tt(0)), z(a, 61, ((n = M(18)).write_shift(2, 0), 
        n.write_shift(2, 0), n.write_shift(2, 29280), n.write_shift(2, 17600), n.write_shift(2, 56), 
        n.write_shift(2, 0), n.write_shift(2, 0), n.write_shift(2, 1), n.write_shift(2, 500), 
        n)), z(a, 64, ot(!1)), z(a, 141, Tt(0)), z(a, 34, ot(function(m) {
            return m.Workbook && m.Workbook.WBProps && function(w) {
                switch (w) {
                  case 1:
                  case !0:
                  case "1":
                  case "true":
                  case "TRUE":
                    return !0;

                  default:
                    return !1;
                }
            }(m.Workbook.WBProps.date1904) ? "true" : "false";
        }(e) == "true")), z(a, 14, ot(!0)), o && z(a, 439, ot(!1)), z(a, 218, Tt(0)), 
        ff(a, 0, t), function(m, w, v) {
            w && [ [ 5, 8 ], [ 23, 26 ], [ 41, 44 ], [ 50, 392 ] ].forEach(function(T) {
                for (var A = T[0]; A <= T[1]; ++A) w[A] != null && z(m, 1054, Wo(A, w[A], v));
            });
        }(a, e.SSF, t), function(m, w) {
            for (var v = 0; v < 16; ++v) z(m, 224, Os({
                numFmtId: 0,
                style: !0
            }, 0, w));
            w.cellXfs.forEach(function(T) {
                z(m, 224, Os(T, 0, w));
            });
        }(a, t), o && z(a, 352, ot(!1));
        var u = a.end(), c = ct();
        o && z(c, 140, function(m) {
            return m || (m = M(4)), m.write_shift(2, 1), m.write_shift(2, 1), m;
        }()), o && t.Strings && function(m, w, v, T) {
            var A = T || (v || []).length || 0;
            if (A <= 8224) return z(m, w, v, A);
            var C = w;
            if (!isNaN(C)) {
                for (var I = v.parts || [], D = 0, N = 0, G = 0; G + (I[D] || 8224) <= 8224; ) G += I[D] || 8224, 
                D++;
                var B = m.next(4);
                for (B.write_shift(2, C), B.write_shift(2, G), m.push(v.slice(N, N + G)), 
                N += G; N < A; ) {
                    for ((B = m.next(4)).write_shift(2, 60), G = 0; G + (I[D] || 8224) <= 8224; ) G += I[D] || 8224, 
                    D++;
                    B.write_shift(2, G), m.push(v.slice(N, N + G)), N += G;
                }
            }
        }(c, 252, function(m, w) {
            var v = M(8);
            v.write_shift(4, m.Count), v.write_shift(4, m.Unique);
            for (var T = [], A = 0; A < m.length; ++A) T[A] = Mo(m[A]);
            var C = Ke([ v ].concat(T));
            return C.parts = [ v.length ].concat(T.map(function(I) {
                return I.length;
            })), C;
        }(t.Strings)), z(c, 10);
        var h = c.end(), d = ct(), p = 0, g = 0;
        for (g = 0; g < e.SheetNames.length; ++g) p += (o ? 12 : 11) + (o ? 2 : 1) * e.SheetNames[g].length;
        var E = u.length + p + h.length;
        for (g = 0; g < e.SheetNames.length; ++g) z(d, 133, Ho({
            pos: E,
            hs: (l[g] || {}).Hidden || 0,
            dt: 0,
            name: e.SheetNames[g]
        }, t)), E += r[g].length;
        var x = d.end();
        if (p != x.length) throw new Error("BS8 " + p + " != " + x.length);
        var S = [];
        return u.length && S.push(u), x.length && S.push(x), h.length && S.push(h), 
        Ke(S);
    }
    function si(e, r) {
        for (var t = 0; t <= e.SheetNames.length; ++t) {
            var n = e.Sheets[e.SheetNames[t]];
            n && n["!ref"] && mt(n["!ref"]).e.c > 255 && typeof console < "u";
        }
        var a = r || {};
        switch (a.biff || 2) {
          case 8:
          case 5:
            return function(s, l) {
                var i = l || {}, o = [];
                s && !s.SSF && (s.SSF = ft(Le)), s && s.SSF && (zr(), Vr(s.SSF), 
                i.revssf = $r(s.SSF), i.revssf[s.SSF[65535]] = 0, i.ssf = s.SSF), 
                i.Strings = [], i.Strings.Count = 0, i.Strings.Unique = 0, zn(i), 
                i.cellXfs = [], Gt(i.cellXfs, {}, {
                    revssf: {
                        General: 0
                    }
                }), s.Props || (s.Props = {});
                for (var f = 0; f < s.SheetNames.length; ++f) o[o.length] = uf(f, i, s);
                return o.unshift(pf(s, o, i)), Ke(o);
            }(e, r);

          case 4:
          case 3:
          case 2:
            return lf(e, r);
        }
        throw new Error("invalid type " + a.bookType + " for BIFF");
    }
    function df(e, r, t, n) {
        for (var a = e["!merges"] || [], s = [], l = r.s.c; l <= r.e.c; ++l) {
            for (var i = 0, o = 0, f = 0; f < a.length; ++f) if (!(a[f].s.r > t || a[f].s.c > l || a[f].e.r < t || a[f].e.c < l)) {
                if (a[f].s.r < t || a[f].s.c < l) {
                    i = -1;
                    break;
                }
                i = a[f].e.r - a[f].s.r + 1, o = a[f].e.c - a[f].s.c + 1;
                break;
            }
            if (!(i < 0)) {
                var u = Re({
                    r: t,
                    c: l
                }), c = n.dense ? (e[t] || [])[l] : e[u], h = c && c.v != null && (c.h || ((c.w || (Mt(c), 
                c.w) || "") + "").replace(En, function(p) {
                    return bn[p];
                }).replace(/\n/g, "<br/>").replace(Ia, function(p) {
                    return "&#x" + ("000" + p.charCodeAt(0).toString(16)).slice(-4) + ";";
                })) || "", d = {};
                i > 1 && (d.rowspan = i), o > 1 && (d.colspan = o), n.editable ? h = '<span contenteditable="true">' + h + "</span>" : c && (d["data-t"] = c && c.t || "z", 
                c.v != null && (d["data-v"] = c.v), c.z != null && (d["data-z"] = c.z), 
                c.l && (c.l.Target || "#").charAt(0) != "#" && (h = '<a href="' + c.l.Target + '">' + h + "</a>")), 
                d.id = (n.id || "sjs") + "-" + u, s.push(V("td", h, d));
            }
        }
        return "<tr>" + s.join("") + "</tr>";
    }
    var mf = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', gf = "</body></html>";
    function ii(e, r) {
        var t = r || {}, n = t.header != null ? t.header : mf, a = t.footer != null ? t.footer : gf, s = [ n ], l = mt(e["!ref"]);
        t.dense = Array.isArray(e), s.push(function(o, f, u) {
            return [].join("") + "<table" + (u && u.id ? ' id="' + u.id + '"' : "") + ">";
        }(0, 0, t));
        for (var i = l.s.r; i <= l.e.r; ++i) s.push(df(e, l, i, t));
        return s.push("</table>" + a), s.join("");
    }
    function oi(e, r, t) {
        var n = t || {}, a = 0, s = 0;
        if (n.origin != null) if (typeof n.origin == "number") a = n.origin; else {
            var l = typeof n.origin == "string" ? ze(n.origin) : n.origin;
            a = l.r, s = l.c;
        }
        var i = r.getElementsByTagName("tr"), o = Math.min(n.sheetRows || 1e7, i.length), f = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: a,
                c: s
            }
        };
        if (e["!ref"]) {
            var u = mt(e["!ref"]);
            f.s.r = Math.min(f.s.r, u.s.r), f.s.c = Math.min(f.s.c, u.s.c), f.e.r = Math.max(f.e.r, u.e.r), 
            f.e.c = Math.max(f.e.c, u.e.c), a == -1 && (f.e.r = a = u.e.r + 1);
        }
        var c = [], h = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, g = 0, E = 0, x = 0, S = 0, m = 0;
        for (e["!cols"] || (e["!cols"] = []); p < i.length && g < o; ++p) {
            var w = i[p];
            if (fi(w)) {
                if (n.display) continue;
                d[g] = {
                    hidden: !0
                };
            }
            var v = w.children;
            for (E = x = 0; E < v.length; ++E) {
                var T = v[E];
                if (!n.display || !fi(T)) {
                    var A = T.hasAttribute("data-v") ? T.getAttribute("data-v") : T.hasAttribute("v") ? T.getAttribute("v") : wo(T.innerHTML), C = T.getAttribute("data-z") || T.getAttribute("z");
                    for (h = 0; h < c.length; ++h) {
                        var I = c[h];
                        I.s.c == x + s && I.s.r < g + a && g + a <= I.e.r && (x = I.e.c + 1 - s, 
                        h = -1);
                    }
                    m = +T.getAttribute("colspan") || 1, ((S = +T.getAttribute("rowspan") || 1) > 1 || m > 1) && c.push({
                        s: {
                            r: g + a,
                            c: x + s
                        },
                        e: {
                            r: g + a + (S || 1) - 1,
                            c: x + s + (m || 1) - 1
                        }
                    });
                    var D = {
                        t: "s",
                        v: A
                    }, N = T.getAttribute("data-t") || T.getAttribute("t") || "";
                    A != null && (A.length == 0 ? D.t = N || "z" : n.raw || A.trim().length == 0 || N == "s" || (A === "TRUE" ? D = {
                        t: "b",
                        v: !0
                    } : A === "FALSE" ? D = {
                        t: "b",
                        v: !1
                    } : isNaN(Pt(A)) ? isNaN(Sr(A).getDate()) || (D = {
                        t: "d",
                        v: it(A)
                    }, n.cellDates || (D = {
                        t: "n",
                        v: lt(D.v)
                    }), D.z = n.dateNF || Le[14]) : D = {
                        t: "n",
                        v: Pt(A)
                    })), D.z === void 0 && C != null && (D.z = C);
                    var G = "", B = T.getElementsByTagName("A");
                    if (B && B.length) for (var J = 0; J < B.length && (!B[J].hasAttribute("href") || (G = B[J].getAttribute("href")).charAt(0) == "#"); ++J);
                    G && G.charAt(0) != "#" && (D.l = {
                        Target: G
                    }), n.dense ? (e[g + a] || (e[g + a] = []), e[g + a][x + s] = D) : e[Re({
                        c: x + s,
                        r: g + a
                    })] = D, f.e.c < x + s && (f.e.c = x + s), x += m;
                }
            }
            ++g;
        }
        return c.length && (e["!merges"] = (e["!merges"] || []).concat(c)), f.e.r = Math.max(f.e.r, g - 1 + a), 
        e["!ref"] = We(f), g >= o && (e["!fullref"] = We((f.e.r = i.length - p + g - 1 + a, 
        f))), e;
    }
    function li(e, r) {
        return oi((r || {}).dense ? [] : {}, e, r);
    }
    function fi(e) {
        var r = "", t = function(n) {
            return n.ownerDocument.defaultView && typeof n.ownerDocument.defaultView.getComputedStyle == "function" ? n.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
        }(e);
        return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), 
        r === "none";
    }
    var vf = function() {
        var e = [ "<office:master-styles>", '<style:master-page style:name="mp1" style:page-layout-name="mp1">', "<style:header/>", '<style:header-left style:display="false"/>', "<style:footer/>", '<style:footer-left style:display="false"/>', "</style:master-page>", "</office:master-styles>" ].join(""), r = "<office:document-styles " + xr({
            "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
            "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
            "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
            "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
            "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
            "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            "xmlns:dc": "http://purl.org/dc/elements/1.1/",
            "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
            "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
            "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
            "office:version": "1.2"
        }) + ">" + e + "</office:document-styles>";
        return function() {
            return Be + r;
        };
    }(), ci = function() {
        var e = `          <table:table-cell />
`, r = function(t, n, a) {
            var s = [];
            s.push('      <table:table table:name="' + xe(n.SheetNames[a]) + `" table:style-name="ta1">
`);
            var l = 0, i = 0, o = mt(t["!ref"] || "A1"), f = t["!merges"] || [], u = 0, c = Array.isArray(t);
            if (t["!cols"]) for (i = 0; i <= o.e.c; ++i) s.push("        <table:table-column" + (t["!cols"][i] ? ' table:style-name="co' + t["!cols"][i].ods + '"' : "") + `></table:table-column>
`);
            var h = "", d = t["!rows"] || [];
            for (l = 0; l < o.s.r; ++l) h = d[l] ? ' table:style-name="ro' + d[l].ods + '"' : "", 
            s.push("        <table:table-row" + h + `></table:table-row>
`);
            for (;l <= o.e.r; ++l) {
                for (h = d[l] ? ' table:style-name="ro' + d[l].ods + '"' : "", s.push("        <table:table-row" + h + `>
`), i = 0; i < o.s.c; ++i) s.push(e);
                for (;i <= o.e.c; ++i) {
                    var p = !1, g = {}, E = "";
                    for (u = 0; u != f.length; ++u) if (!(f[u].s.c > i || f[u].s.r > l || f[u].e.c < i || f[u].e.r < l)) {
                        f[u].s.c == i && f[u].s.r == l || (p = !0), g["table:number-columns-spanned"] = f[u].e.c - f[u].s.c + 1, 
                        g["table:number-rows-spanned"] = f[u].e.r - f[u].s.r + 1;
                        break;
                    }
                    if (p) s.push(`          <table:covered-table-cell/>
`); else {
                        var x = Re({
                            r: l,
                            c: i
                        }), S = c ? (t[l] || [])[i] : t[x];
                        if (S && S.f && (g["table:formula"] = xe(("of:=" + S.f.replace(Un, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")).replace(/;/g, "|").replace(/,/g, ";")), 
                        S.F && S.F.slice(0, x.length) == x)) {
                            var m = mt(S.F);
                            g["table:number-matrix-columns-spanned"] = m.e.c - m.s.c + 1, 
                            g["table:number-matrix-rows-spanned"] = m.e.r - m.s.r + 1;
                        }
                        if (S) {
                            switch (S.t) {
                              case "b":
                                E = S.v ? "TRUE" : "FALSE", g["office:value-type"] = "boolean", 
                                g["office:boolean-value"] = S.v ? "true" : "false";
                                break;

                              case "n":
                                E = S.w || String(S.v || 0), g["office:value-type"] = "float", 
                                g["office:value"] = S.v || 0;
                                break;

                              case "s":
                              case "str":
                                E = S.v == null ? "" : S.v, g["office:value-type"] = "string";
                                break;

                              case "d":
                                E = S.w || it(S.v).toISOString(), g["office:value-type"] = "date", 
                                g["office:date-value"] = it(S.v).toISOString(), 
                                g["table:style-name"] = "ce1";
                                break;

                              default:
                                s.push(e);
                                continue;
                            }
                            var w = xe(E).replace(/  +/g, function(T) {
                                return '<text:s text:c="' + T.length + '"/>';
                            }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
                            if (S.l && S.l.Target) {
                                var v = S.l.Target;
                                (v = v.charAt(0) == "#" ? "#" + v.slice(1).replace(/\./, "!") : v).charAt(0) == "#" || v.match(/^\w+:/) || (v = "../" + v), 
                                w = V("text:a", w, {
                                    "xlink:href": v.replace(/&/g, "&amp;")
                                });
                            }
                            s.push("          " + V("table:table-cell", V("text:p", w, {}), g) + `
`);
                        } else s.push(e);
                    }
                }
                s.push(`        </table:table-row>
`);
            }
            return s.push(`      </table:table>
`), s.join("");
        };
        return function(t, n) {
            var a = [ Be ], s = xr({
                "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                "xmlns:ooo": "http://openoffice.org/2004/office",
                "xmlns:ooow": "http://openoffice.org/2004/writer",
                "xmlns:oooc": "http://openoffice.org/2004/calc",
                "xmlns:dom": "http://www.w3.org/2001/xml-events",
                "xmlns:xforms": "http://www.w3.org/2002/xforms",
                "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                "xmlns:rpt": "http://openoffice.org/2005/report",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                "xmlns:tableooo": "http://openoffice.org/2009/table",
                "xmlns:drawooo": "http://openoffice.org/2010/draw",
                "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                "office:version": "1.2"
            }), l = xr({
                "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
            });
            n.bookType == "fods" ? (a.push("<office:document" + s + l + `>
`), a.push(hs().replace(/office:document-meta/g, "office:meta"))) : a.push("<office:document-content" + s + `>
`), function(o, f) {
                o.push(` <office:automatic-styles>
`), o.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), o.push(`   <number:month number:style="long"/>
`), o.push(`   <number:text>/</number:text>
`), o.push(`   <number:day number:style="long"/>
`), o.push(`   <number:text>/</number:text>
`), o.push(`   <number:year/>
`), o.push(`  </number:date-style>
`);
                var u = 0;
                f.SheetNames.map(function(h) {
                    return f.Sheets[h];
                }).forEach(function(h) {
                    if (h && h["!cols"]) {
                        for (var d = 0; d < h["!cols"].length; ++d) if (h["!cols"][d]) {
                            var p = h["!cols"][d];
                            if (p.width == null && p.wpx == null && p.wch == null) continue;
                            Mn(p), p.ods = u;
                            var g = h["!cols"][d].wpx + "px";
                            o.push('  <style:style style:name="co' + u + `" style:family="table-column">
`), o.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + g + `"/>
`), o.push(`  </style:style>
`), ++u;
                        }
                    }
                });
                var c = 0;
                f.SheetNames.map(function(h) {
                    return f.Sheets[h];
                }).forEach(function(h) {
                    if (h && h["!rows"]) {
                        for (var d = 0; d < h["!rows"].length; ++d) if (h["!rows"][d]) {
                            h["!rows"][d].ods = c;
                            var p = h["!rows"][d].hpx + "px";
                            o.push('  <style:style style:name="ro' + c + `" style:family="table-row">
`), o.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + p + `"/>
`), o.push(`  </style:style>
`), ++c;
                        }
                    }
                }), o.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), o.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), o.push(`  </style:style>
`), o.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), o.push(` </office:automatic-styles>
`);
            }(a, t), a.push(`  <office:body>
`), a.push(`    <office:spreadsheet>
`);
            for (var i = 0; i != t.SheetNames.length; ++i) a.push(r(t.Sheets[t.SheetNames[i]], t, i));
            return a.push(`    </office:spreadsheet>
`), a.push(`  </office:body>
`), n.bookType == "fods" ? a.push("</office:document>") : a.push("</office:document-content>"), 
            a.join("");
        };
    }();
    function hi(e, r) {
        if (r.bookType == "fods") return ci(e, r);
        var t = wn(), n = "", a = [], s = [];
        return pe(t, n = "mimetype", "application/vnd.oasis.opendocument.spreadsheet"), 
        pe(t, n = "content.xml", ci(e, r)), a.push([ n, "text/xml" ]), s.push([ n, "ContentFile" ]), 
        pe(t, n = "styles.xml", vf(e, r)), a.push([ n, "text/xml" ]), s.push([ n, "StylesFile" ]), 
        pe(t, n = "meta.xml", Be + hs()), a.push([ n, "text/xml" ]), s.push([ n, "MetadataFile" ]), 
        pe(t, n = "manifest.rdf", function(l) {
            var i, o, f = [ Be ];
            f.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
            for (var u = 0; u != l.length; ++u) f.push(cs(l[u][0], l[u][1])), f.push((i = "", 
            o = l[u][0], [ '  <rdf:Description rdf:about="' + i + `">
`, '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + o + `"/>
`, `  </rdf:Description>
` ].join("")));
            return f.push(cs("", "Document", "pkg")), f.push("</rdf:RDF>"), f.join("");
        }(s)), a.push([ n, "application/rdf+xml" ]), pe(t, n = "META-INF/manifest.xml", function(l) {
            var i = [ Be ];
            i.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), i.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
            for (var o = 0; o < l.length; ++o) i.push('  <manifest:file-entry manifest:full-path="' + l[o][0] + '" manifest:media-type="' + l[o][1] + `"/>
`);
            return i.push("</manifest:manifest>"), i.join("");
        }(a)), t;
    }
    function on(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    function Tf(e) {
        return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Et(Lt(e));
    }
    function jt(e) {
        var r = e.reduce(function(a, s) {
            return a + s.length;
        }, 0), t = new Uint8Array(r), n = 0;
        return e.forEach(function(a) {
            t.set(a, n), n += a.length;
        }), t;
    }
    function Lr(e, r) {
        var t = r ? r[0] : 0, n = 127 & e[t];
        e: if (e[t++] >= 128 && (n |= (127 & e[t]) << 7, e[t++] < 128 || (n |= (127 & e[t]) << 14, 
        e[t++] < 128) || (n |= (127 & e[t]) << 21, e[t++] < 128) || (n += (127 & e[t]) * Math.pow(2, 28), 
        ++t, e[t++] < 128) || (n += (127 & e[t]) * Math.pow(2, 35), ++t, e[t++] < 128) || (n += (127 & e[t]) * Math.pow(2, 42), 
        ++t, e[t++] < 128))) break e;
        return r && (r[0] = t), n;
    }
    function ye(e) {
        var r = new Uint8Array(7);
        r[0] = 127 & e;
        var t = 1;
        e: if (e > 127) {
            if (r[t - 1] |= 128, r[t] = e >> 7 & 127, ++t, e <= 16383 || (r[t - 1] |= 128, 
            r[t] = e >> 14 & 127, ++t, e <= 2097151) || (r[t - 1] |= 128, r[t] = e >> 21 & 127, 
            ++t, e <= 268435455) || (r[t - 1] |= 128, r[t] = e / 256 >>> 21 & 127, 
            ++t, e <= 34359738367) || (r[t - 1] |= 128, r[t] = e / 65536 >>> 21 & 127, 
            ++t, e <= 4398046511103)) break e;
            r[t - 1] |= 128, r[t] = e / 16777216 >>> 21 & 127, ++t;
        }
        return r.slice(0, t);
    }
    function dr(e) {
        var r = 0, t = 127 & e[r];
        e: if (e[r++] >= 128) {
            if (t |= (127 & e[r]) << 7, e[r++] < 128 || (t |= (127 & e[r]) << 14, 
            e[r++] < 128) || (t |= (127 & e[r]) << 21, e[r++] < 128)) break e;
            t |= (127 & e[r]) << 28;
        }
        return t;
    }
    function Ge(e) {
        for (var r = [], t = [ 0 ]; t[0] < e.length; ) {
            var n, a = t[0], s = Lr(e, t), l = 7 & s, i = 0;
            if ((s = Math.floor(s / 8)) == 0) break;
            switch (l) {
              case 0:
                for (var o = t[0]; e[t[0]++] >= 128; );
                n = e.slice(o, t[0]);
                break;

              case 5:
                i = 4, n = e.slice(t[0], t[0] + i), t[0] += i;
                break;

              case 1:
                i = 8, n = e.slice(t[0], t[0] + i), t[0] += i;
                break;

              case 2:
                i = Lr(e, t), n = e.slice(t[0], t[0] + i), t[0] += i;
                break;

              default:
                throw new Error("PB Type ".concat(l, " for Field ").concat(s, " at offset ").concat(a));
            }
            var f = {
                data: n,
                type: l
            };
            r[s] == null ? r[s] = [ f ] : r[s].push(f);
        }
        return r;
    }
    function et(e) {
        var r = [];
        return e.forEach(function(t, n) {
            t.forEach(function(a) {
                a.data && (r.push(ye(8 * n + a.type)), a.type == 2 && r.push(ye(a.data.length)), 
                r.push(a.data));
            });
        }), jt(r);
    }
    function xt(e) {
        for (var r, t = [], n = [ 0 ]; n[0] < e.length; ) {
            var a = Lr(e, n), s = Ge(e.slice(n[0], n[0] + a));
            n[0] += a;
            var l = {
                id: dr(s[1][0].data),
                messages: []
            };
            s[2].forEach(function(i) {
                var o = Ge(i.data), f = dr(o[3][0].data);
                l.messages.push({
                    meta: o,
                    data: e.slice(n[0], n[0] + f)
                }), n[0] += f;
            }), (r = s[3]) != null && r[0] && (l.merge = dr(s[3][0].data) >>> 0 > 0), 
            t.push(l);
        }
        return t;
    }
    function mr(e) {
        var r = [];
        return e.forEach(function(t) {
            var n = [];
            n[1] = [ {
                data: ye(t.id),
                type: 0
            } ], n[2] = [], t.merge != null && (n[3] = [ {
                data: ye(+!!t.merge),
                type: 0
            } ]);
            var a = [];
            t.messages.forEach(function(l) {
                a.push(l.data), l.meta[3] = [ {
                    type: 0,
                    data: ye(l.data.length)
                } ], n[2].push({
                    data: et(l.meta),
                    type: 2
                });
            });
            var s = et(n);
            r.push(ye(s.length)), r.push(s), a.forEach(function(l) {
                return r.push(l);
            });
        }), jt(r);
    }
    function wf(e, r) {
        if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
        for (var t = [ 0 ], n = Lr(r, t), a = []; t[0] < r.length; ) {
            var s = 3 & r[t[0]];
            if (s != 0) {
                var l = 0, i = 0;
                if (s == 1 ? (i = 4 + (r[t[0]] >> 2 & 7), l = (224 & r[t[0]++]) << 3, 
                l |= r[t[0]++]) : (i = 1 + (r[t[0]++] >> 2), s == 2 ? (l = r[t[0]] | r[t[0] + 1] << 8, 
                t[0] += 2) : (l = (r[t[0]] | r[t[0] + 1] << 8 | r[t[0] + 2] << 16 | r[t[0] + 3] << 24) >>> 0, 
                t[0] += 4)), a = [ jt(a) ], l == 0) throw new Error("Invalid offset 0");
                if (l > a[0].length) throw new Error("Invalid offset beyond length");
                if (i >= l) for (a.push(a[0].slice(-l)), i -= l; i >= a[a.length - 1].length; ) a.push(a[a.length - 1]), 
                i -= a[a.length - 1].length;
                a.push(a[0].slice(-l, -l + i));
            } else {
                var o = r[t[0]++] >> 2;
                if (o < 60) ++o; else {
                    var f = o - 59;
                    o = r[t[0]], f > 1 && (o |= r[t[0] + 1] << 8), f > 2 && (o |= r[t[0] + 2] << 16), 
                    f > 3 && (o |= r[t[0] + 3] << 24), o >>>= 0, o++, t[0] += f;
                }
                a.push(r.slice(t[0], t[0] + o)), t[0] += o;
            }
        }
        var u = jt(a);
        if (u.length != n) throw new Error("Unexpected length: ".concat(u.length, " != ").concat(n));
        return u;
    }
    function _t(e) {
        for (var r = [], t = 0; t < e.length; ) {
            var n = e[t++], a = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
            t += 3, r.push(wf(n, e.slice(t, t + a))), t += a;
        }
        if (t !== e.length) throw new Error("data is not a valid framed stream!");
        return jt(r);
    }
    function gr(e) {
        for (var r = [], t = 0; t < e.length; ) {
            var n = Math.min(e.length - t, 268435455), a = new Uint8Array(4);
            r.push(a);
            var s = ye(n), l = s.length;
            r.push(s), n <= 60 ? (l++, r.push(new Uint8Array([ n - 1 << 2 ]))) : n <= 256 ? (l += 2, 
            r.push(new Uint8Array([ 240, n - 1 & 255 ]))) : n <= 65536 ? (l += 3, 
            r.push(new Uint8Array([ 244, n - 1 & 255, n - 1 >> 8 & 255 ]))) : n <= 16777216 ? (l += 4, 
            r.push(new Uint8Array([ 248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255 ]))) : n <= 4294967296 && (l += 5, 
            r.push(new Uint8Array([ 252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255 ]))), 
            r.push(e.slice(t, t + n)), l += n, a[0] = 0, a[1] = 255 & l, a[2] = l >> 8 & 255, 
            a[3] = l >> 16 & 255, t += n;
        }
        return jt(r);
    }
    function jn(e, r) {
        var t = new Uint8Array(32), n = on(t), a = 12, s = 0;
        switch (t[0] = 5, e.t) {
          case "n":
            t[1] = 2, function(l, i, o) {
                var f = Math.floor(o == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(o))) + 6176 - 20, u = o / Math.pow(10, f - 6176);
                l[i + 15] |= f >> 7, l[i + 14] |= (127 & f) << 1;
                for (var c = 0; u >= 1; ++c, u /= 256) l[i + c] = 255 & u;
                l[i + 15] |= o >= 0 ? 0 : 128;
            }(t, a, e.v), s |= 1, a += 16;
            break;

          case "b":
            t[1] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), s |= 2, a += 8;
            break;

          case "s":
            if (r.indexOf(e.v) == -1) throw new Error("Value ".concat(e.v, " missing from SST!"));
            t[1] = 3, n.setUint32(a, r.indexOf(e.v), !0), s |= 8, a += 4;
            break;

          default:
            throw "unsupported cell type " + e.t;
        }
        return n.setUint32(8, s, !0), t.slice(0, a);
    }
    function Vn(e, r) {
        var t = new Uint8Array(32), n = on(t), a = 12, s = 0;
        switch (t[0] = 3, e.t) {
          case "n":
            t[2] = 2, n.setFloat64(a, e.v, !0), s |= 32, a += 8;
            break;

          case "b":
            t[2] = 6, n.setFloat64(a, e.v ? 1 : 0, !0), s |= 32, a += 8;
            break;

          case "s":
            if (r.indexOf(e.v) == -1) throw new Error("Value ".concat(e.v, " missing from SST!"));
            t[2] = 3, n.setUint32(a, r.indexOf(e.v), !0), s |= 16, a += 4;
            break;

          default:
            throw "unsupported cell type " + e.t;
        }
        return n.setUint32(4, s, !0), t.slice(0, a);
    }
    function Vt(e) {
        return Lr(Ge(e)[1][0].data);
    }
    function bf(e, r, t) {
        var n, a, s, l;
        if (!((n = e[6]) != null && n[0]) || !((a = e[7]) != null && a[0])) throw "Mutation only works on post-BNC storages!";
        if ((l = (s = e[8]) == null ? void 0 : s[0]) != null && l.data && dr(e[8][0].data) > 0) throw "Math only works with normal offsets";
        for (var i = 0, o = on(e[7][0].data), f = 0, u = [], c = on(e[4][0].data), h = 0, d = [], p = 0; p < r.length; ++p) if (r[p] != null) {
            var g, E;
            switch (o.setUint16(2 * p, f, !0), c.setUint16(2 * p, h, !0), typeof r[p]) {
              case "string":
                g = jn({
                    t: "s",
                    v: r[p]
                }, t), E = Vn({
                    t: "s",
                    v: r[p]
                }, t);
                break;

              case "number":
                g = jn({
                    t: "n",
                    v: r[p]
                }, t), E = Vn({
                    t: "n",
                    v: r[p]
                }, t);
                break;

              case "boolean":
                g = jn({
                    t: "b",
                    v: r[p]
                }, t), E = Vn({
                    t: "b",
                    v: r[p]
                }, t);
                break;

              default:
                throw new Error("Unsupported value " + r[p]);
            }
            u.push(g), f += g.length, d.push(E), h += E.length, ++i;
        } else o.setUint16(2 * p, 65535, !0), c.setUint16(2 * p, 65535);
        for (e[2][0].data = ye(i); p < e[7][0].data.length / 2; ++p) o.setUint16(2 * p, 65535, !0), 
        c.setUint16(2 * p, 65535, !0);
        return e[6][0].data = jt(u), e[3][0].data = jt(d), i;
    }
    function zn(e) {
        var r;
        (r = [ [ "cellDates", !1 ], [ "bookSST", !1 ], [ "bookType", "xlsx" ], [ "compression", !1 ], [ "WTF", !1 ] ], 
        function(t) {
            for (var n = 0; n != r.length; ++n) {
                var a = r[n];
                t[a[0]] === void 0 && (t[a[0]] = a[1]), a[2] === "n" && (t[a[0]] = Number(t[a[0]]));
            }
        })(e);
    }
    function Ef(e, r) {
        return r.bookType == "ods" ? hi(e, r) : r.bookType == "numbers" ? function(t, n) {
            if (!n || !n.numbers) throw new Error("Must pass a `numbers` option -- check the README");
            var a = t.Sheets[t.SheetNames[0]];
            t.SheetNames.length;
            var s = mt(a["!ref"]);
            s.s.r = s.s.c = 0, s.e.c > 9 && (s.e.c = 9), s.e.r > 49 && (s.e.r = 49);
            var l = fn(a, {
                range: s,
                header: 1
            }), i = [ "~Sh33tJ5~" ];
            l.forEach(function(le) {
                return le.forEach(function(ve) {
                    typeof ve == "string" && i.push(ve);
                });
            });
            var o = {}, f = [], u = Oe.read(n.numbers, {
                type: "base64"
            });
            u.FileIndex.map(function(le, ve) {
                return [ le, u.FullPaths[ve] ];
            }).forEach(function(le) {
                var ve = le[0], Ie = le[1];
                ve.type == 2 && ve.name.match(/\.iwa/) && xt(_t(ve.content)).forEach(function(Fe) {
                    f.push(Fe.id), o[Fe.id] = {
                        deps: [],
                        location: Ie,
                        type: dr(Fe.messages[0].meta[1][0].data)
                    };
                });
            }), f.sort(function(le, ve) {
                return le - ve;
            });
            var c = f.filter(function(le) {
                return le > 1;
            }).map(function(le) {
                return [ le, ye(le) ];
            });
            u.FileIndex.map(function(le, ve) {
                return [ le, u.FullPaths[ve] ];
            }).forEach(function(le) {
                var ve = le[0];
                le[1], ve.name.match(/\.iwa/) && xt(_t(ve.content)).forEach(function(Ie) {
                    Ie.messages.forEach(function(Fe) {
                        c.forEach(function(Ue) {
                            Ie.messages.some(function(Ee) {
                                return dr(Ee.meta[1][0].data) != 11006 && function(je, wt) {
                                    e: for (var ht = 0; ht <= je.length - wt.length; ++ht) {
                                        for (var Xe = 0; Xe < wt.length; ++Xe) if (je[ht + Xe] != wt[Xe]) continue e;
                                        return !0;
                                    }
                                    return !1;
                                }(Ee.data, Ue[1]);
                            }) && o[Ue[0]].deps.push(Ie.id);
                        });
                    });
                });
            });
            for (var h, d = Oe.find(u, o[1].location), p = xt(_t(d.content)), g = 0; g < p.length; ++g) {
                var E = p[g];
                E.id == 1 && (h = E);
            }
            var x = Vt(Ge(h.messages[0].data)[1][0].data);
            for (p = xt(_t((d = Oe.find(u, o[x].location)).content)), g = 0; g < p.length; ++g) (E = p[g]).id == x && (h = E);
            for (x = Vt(Ge(h.messages[0].data)[2][0].data), p = xt(_t((d = Oe.find(u, o[x].location)).content)), 
            g = 0; g < p.length; ++g) (E = p[g]).id == x && (h = E);
            for (x = Vt(Ge(h.messages[0].data)[2][0].data), p = xt(_t((d = Oe.find(u, o[x].location)).content)), 
            g = 0; g < p.length; ++g) (E = p[g]).id == x && (h = E);
            var S = Ge(h.messages[0].data);
            S[6][0].data = ye(s.e.r + 1), S[7][0].data = ye(s.e.c + 1);
            for (var m = Vt(S[46][0].data), w = Oe.find(u, o[m].location), v = xt(_t(w.content)), T = 0; T < v.length && v[T].id != m; ++T);
            if (v[T].id != m) throw "Bad ColumnRowUIDMapArchive";
            var A = Ge(v[T].messages[0].data);
            A[1] = [], A[2] = [], A[3] = [];
            for (var C = 0; C <= s.e.c; ++C) {
                var I = [];
                I[1] = I[2] = [ {
                    type: 0,
                    data: ye(C + 420690)
                } ], A[1].push({
                    type: 2,
                    data: et(I)
                }), A[2].push({
                    type: 0,
                    data: ye(C)
                }), A[3].push({
                    type: 0,
                    data: ye(C)
                });
            }
            A[4] = [], A[5] = [], A[6] = [];
            for (var D = 0; D <= s.e.r; ++D) (I = [])[1] = I[2] = [ {
                type: 0,
                data: ye(D + 726270)
            } ], A[4].push({
                type: 2,
                data: et(I)
            }), A[5].push({
                type: 0,
                data: ye(D)
            }), A[6].push({
                type: 0,
                data: ye(D)
            });
            v[T].messages[0].data = et(A), w.content = gr(mr(v)), w.size = w.content.length, 
            delete S[46];
            var N = Ge(S[4][0].data);
            N[7][0].data = ye(s.e.r + 1);
            var G = Vt(Ge(N[1][0].data)[2][0].data);
            if ((v = xt(_t((w = Oe.find(u, o[G].location)).content)))[0].id != G) throw "Bad HeaderStorageBucket";
            var B = Ge(v[0].messages[0].data);
            for (D = 0; D < l.length; ++D) {
                var J = Ge(B[2][0].data);
                J[1][0].data = ye(D), J[4][0].data = ye(l[D].length), B[2][D] = {
                    type: B[2][0].type,
                    data: et(J)
                };
            }
            v[0].messages[0].data = et(B), w.content = gr(mr(v)), w.size = w.content.length;
            var ne = Vt(N[2][0].data);
            if ((v = xt(_t((w = Oe.find(u, o[ne].location)).content)))[0].id != ne) throw "Bad HeaderStorageBucket";
            for (B = Ge(v[0].messages[0].data), C = 0; C <= s.e.c; ++C) (J = Ge(B[2][0].data))[1][0].data = ye(C), 
            J[4][0].data = ye(s.e.r + 1), B[2][C] = {
                type: B[2][0].type,
                data: et(J)
            };
            v[0].messages[0].data = et(B), w.content = gr(mr(v)), w.size = w.content.length;
            var ce = Vt(N[4][0].data);
            (function() {
                for (var le, ve = Oe.find(u, o[ce].location), Ie = xt(_t(ve.content)), Fe = 0; Fe < Ie.length; ++Fe) {
                    var Ue = Ie[Fe];
                    Ue.id == ce && (le = Ue);
                }
                var Ee = Ge(le.messages[0].data);
                Ee[3] = [];
                var je = [];
                i.forEach(function(ht, Xe) {
                    je[1] = [ {
                        type: 0,
                        data: ye(Xe)
                    } ], je[2] = [ {
                        type: 0,
                        data: ye(1)
                    } ], je[3] = [ {
                        type: 2,
                        data: Tf(ht)
                    } ], Ee[3].push({
                        type: 2,
                        data: et(je)
                    });
                }), le.messages[0].data = et(Ee);
                var wt = gr(mr(Ie));
                ve.content = wt, ve.size = ve.content.length;
            })();
            var K = Ge(N[3][0].data), W = K[1][0];
            delete K[2];
            var Se = Ge(W.data), ke = Vt(Se[2][0].data);
            (function() {
                for (var le, ve = Oe.find(u, o[ke].location), Ie = xt(_t(ve.content)), Fe = 0; Fe < Ie.length; ++Fe) {
                    var Ue = Ie[Fe];
                    Ue.id == ke && (le = Ue);
                }
                var Ee = Ge(le.messages[0].data);
                delete Ee[6], delete K[7];
                var je = new Uint8Array(Ee[5][0].data);
                Ee[5] = [];
                for (var wt = 0, ht = 0; ht <= s.e.r; ++ht) {
                    var Xe = Ge(je);
                    wt += bf(Xe, l[ht], i), Xe[1][0].data = ye(ht), Ee[5].push({
                        data: et(Xe),
                        type: 2
                    });
                }
                Ee[1] = [ {
                    type: 0,
                    data: ye(s.e.c + 1)
                } ], Ee[2] = [ {
                    type: 0,
                    data: ye(s.e.r + 1)
                } ], Ee[3] = [ {
                    type: 0,
                    data: ye(wt)
                } ], Ee[4] = [ {
                    type: 0,
                    data: ye(s.e.r + 1)
                } ], le.messages[0].data = et(Ee);
                var Yn = gr(mr(Ie));
                ve.content = Yn, ve.size = ve.content.length;
            })(), W.data = et(Se), N[3][0].data = et(K), S[4][0].data = et(N), h.messages[0].data = et(S);
            var ge = gr(mr(p));
            return d.content = ge, d.size = d.content.length, u;
        }(e, r) : r.bookType == "xlsb" ? function(t, n) {
            ur = 1024, t && !t.SSF && (t.SSF = ft(Le)), t && t.SSF && (zr(), Vr(t.SSF), 
            n.revssf = $r(t.SSF), n.revssf[t.SSF[65535]] = 0, n.ssf = t.SSF), n.rels = {}, 
            n.wbrels = {}, n.Strings = [], n.Strings.Count = 0, n.Strings.Unique = 0, 
            Dr ? n.revStrings = new Map() : (n.revStrings = {}, n.revStrings.foo = [], 
            delete n.revStrings.foo);
            var a = n.bookType == "xlsb" ? "bin" : "xml", s = Gs.indexOf(n.bookType) > -1, l = {
                workbooks: [],
                sheets: [],
                charts: [],
                dialogs: [],
                macros: [],
                rels: [],
                strs: [],
                comments: [],
                threadedcomments: [],
                links: [],
                coreprops: [],
                extprops: [],
                custprops: [],
                themes: [],
                styles: [],
                calcchains: [],
                vba: [],
                drawings: [],
                metadata: [],
                people: [],
                TODO: [],
                xmlns: ""
            };
            zn(n = n || {});
            var i = wn(), o = "", f = 0;
            if (n.cellXfs = [], Gt(n.cellXfs, {}, {
                revssf: {
                    General: 0
                }
            }), t.Props || (t.Props = {}), pe(i, o = "docProps/core.xml", us(t.Props, n)), 
            l.coreprops.push(o), _e(n.rels, 2, o, Te.CORE_PROPS), o = "docProps/app.xml", 
            !(t.Props && t.Props.SheetNames)) if (t.Workbook && t.Workbook.Sheets) {
                for (var u = [], c = 0; c < t.SheetNames.length; ++c) (t.Workbook.Sheets[c] || {}).Hidden != 2 && u.push(t.SheetNames[c]);
                t.Props.SheetNames = u;
            } else t.Props.SheetNames = t.SheetNames;
            for (t.Props.Worksheets = t.Props.SheetNames.length, pe(i, o, ds(t.Props)), 
            l.extprops.push(o), _e(n.rels, 3, o, Te.EXT_PROPS), t.Custprops !== t.Props && Je(t.Custprops || {}).length > 0 && (pe(i, o = "docProps/custom.xml", ms(t.Custprops)), 
            l.custprops.push(o), _e(n.rels, 4, o, Te.CUST_PROPS)), f = 1; f <= t.SheetNames.length; ++f) {
                var h = {
                    "!id": {}
                }, d = t.Sheets[t.SheetNames[f - 1]];
                if ((d || {})["!type"], pe(i, o = "xl/worksheets/sheet" + f + "." + a, Zl(f - 1, o, n, t, h)), 
                l.sheets.push(o), _e(n.wbrels, -1, "worksheets/sheet" + f + "." + a, Te.WS[0]), 
                d) {
                    var p = d["!comments"], g = !1, E = "";
                    p && p.length > 0 && (pe(i, E = "xl/comments" + f + "." + a, ql(p, E)), 
                    l.comments.push(E), _e(h, -1, "../comments" + f + "." + a, Te.CMNT), 
                    g = !0), d["!legacy"] && g && pe(i, "xl/drawings/vmlDrawing" + f + ".vml", Hs(f, d["!comments"])), 
                    delete d["!comments"], delete d["!legacy"];
                }
                h["!id"].rId1 && pe(i, fs(o), cr(h));
            }
            return n.Strings != null && n.Strings.length > 0 && (pe(i, o = "xl/sharedStrings." + a, function(x, S, m) {
                return (S.slice(-4) === ".bin" ? Jo : ks)(x, m);
            }(n.Strings, o, n)), l.strs.push(o), _e(n.wbrels, -1, "sharedStrings." + a, Te.SST)), 
            pe(i, o = "xl/workbook." + a, function(x, S, m) {
                return (S.slice(-4) === ".bin" ? Jl : ni)(x);
            }(t, o)), l.workbooks.push(o), _e(n.rels, 1, o, Te.WB), pe(i, o = "xl/theme/theme1.xml", Us(t.Themes, n)), 
            l.themes.push(o), _e(n.wbrels, -1, "theme/theme1.xml", Te.THEME), pe(i, o = "xl/styles." + a, function(x, S, m) {
                return (S.slice(-4) === ".bin" ? il : Ls)(x, m);
            }(t, o, n)), l.styles.push(o), _e(n.wbrels, -1, "styles." + a, Te.STY), 
            t.vbaraw && s && (pe(i, o = "xl/vbaProject.bin", t.vbaraw), l.vba.push(o), 
            _e(n.wbrels, -1, "vbaProject.bin", Te.VBA)), pe(i, o = "xl/metadata." + a, function(x) {
                return (x.slice(-4) === ".bin" ? ol : Bs)();
            }(o)), l.metadata.push(o), _e(n.wbrels, -1, "metadata." + a, Te.XLMETA), 
            pe(i, "[Content_Types].xml", ls(l, n)), pe(i, "_rels/.rels", cr(n.rels)), 
            pe(i, "xl/_rels/workbook." + a + ".rels", cr(n.wbrels)), delete n.revssf, 
            delete n.ssf, i;
        }(e, r) : function(t, n) {
            ur = 1024, t && !t.SSF && (t.SSF = ft(Le)), t && t.SSF && (zr(), Vr(t.SSF), 
            n.revssf = $r(t.SSF), n.revssf[t.SSF[65535]] = 0, n.ssf = t.SSF), n.rels = {}, 
            n.wbrels = {}, n.Strings = [], n.Strings.Count = 0, n.Strings.Unique = 0, 
            Dr ? n.revStrings = new Map() : (n.revStrings = {}, n.revStrings.foo = [], 
            delete n.revStrings.foo);
            var a = "xml", s = Gs.indexOf(n.bookType) > -1, l = {
                workbooks: [],
                sheets: [],
                charts: [],
                dialogs: [],
                macros: [],
                rels: [],
                strs: [],
                comments: [],
                threadedcomments: [],
                links: [],
                coreprops: [],
                extprops: [],
                custprops: [],
                themes: [],
                styles: [],
                calcchains: [],
                vba: [],
                drawings: [],
                metadata: [],
                people: [],
                TODO: [],
                xmlns: ""
            };
            zn(n = n || {});
            var i = wn(), o = "", f = 0;
            if (n.cellXfs = [], Gt(n.cellXfs, {}, {
                revssf: {
                    General: 0
                }
            }), t.Props || (t.Props = {}), pe(i, o = "docProps/core.xml", us(t.Props, n)), 
            l.coreprops.push(o), _e(n.rels, 2, o, Te.CORE_PROPS), o = "docProps/app.xml", 
            !(t.Props && t.Props.SheetNames)) if (t.Workbook && t.Workbook.Sheets) {
                for (var u = [], c = 0; c < t.SheetNames.length; ++c) (t.Workbook.Sheets[c] || {}).Hidden != 2 && u.push(t.SheetNames[c]);
                t.Props.SheetNames = u;
            } else t.Props.SheetNames = t.SheetNames;
            t.Props.Worksheets = t.Props.SheetNames.length, pe(i, o, ds(t.Props)), 
            l.extprops.push(o), _e(n.rels, 3, o, Te.EXT_PROPS), t.Custprops !== t.Props && Je(t.Custprops || {}).length > 0 && (pe(i, o = "docProps/custom.xml", ms(t.Custprops)), 
            l.custprops.push(o), _e(n.rels, 4, o, Te.CUST_PROPS));
            var h = [ "SheetJ5" ];
            for (n.tcid = 0, f = 1; f <= t.SheetNames.length; ++f) {
                var d = {
                    "!id": {}
                }, p = t.Sheets[t.SheetNames[f - 1]];
                if ((p || {})["!type"], pe(i, o = "xl/worksheets/sheet" + f + "." + a, ei(f - 1, n, t, d)), 
                l.sheets.push(o), _e(n.wbrels, -1, "worksheets/sheet" + f + "." + a, Te.WS[0]), 
                p) {
                    var g = p["!comments"], E = !1, x = "";
                    if (g && g.length > 0) {
                        var S = !1;
                        g.forEach(function(m) {
                            m[1].forEach(function(w) {
                                w.T == 1 && (S = !0);
                            });
                        }), S && (pe(i, x = "xl/threadedComments/threadedComment" + f + "." + a, ll(g, h, n)), 
                        l.threadedcomments.push(x), _e(d, -1, "../threadedComments/threadedComment" + f + "." + a, Te.TCMNT)), 
                        pe(i, x = "xl/comments" + f + "." + a, Ws(g)), l.comments.push(x), 
                        _e(d, -1, "../comments" + f + "." + a, Te.CMNT), E = !0;
                    }
                    p["!legacy"] && E && pe(i, "xl/drawings/vmlDrawing" + f + ".vml", Hs(f, p["!comments"])), 
                    delete p["!comments"], delete p["!legacy"];
                }
                d["!id"].rId1 && pe(i, fs(o), cr(d));
            }
            return n.Strings != null && n.Strings.length > 0 && (pe(i, o = "xl/sharedStrings." + a, ks(n.Strings, n)), 
            l.strs.push(o), _e(n.wbrels, -1, "sharedStrings." + a, Te.SST)), pe(i, o = "xl/workbook." + a, ni(t)), 
            l.workbooks.push(o), _e(n.rels, 1, o, Te.WB), pe(i, o = "xl/theme/theme1.xml", Us(t.Themes, n)), 
            l.themes.push(o), _e(n.wbrels, -1, "theme/theme1.xml", Te.THEME), pe(i, o = "xl/styles." + a, Ls(t, n)), 
            l.styles.push(o), _e(n.wbrels, -1, "styles." + a, Te.STY), t.vbaraw && s && (pe(i, o = "xl/vbaProject.bin", t.vbaraw), 
            l.vba.push(o), _e(n.wbrels, -1, "vbaProject.bin", Te.VBA)), pe(i, o = "xl/metadata." + a, Bs()), 
            l.metadata.push(o), _e(n.wbrels, -1, "metadata." + a, Te.XLMETA), h.length > 1 && (pe(i, o = "xl/persons/person.xml", function(m) {
                var w = [ Be, V("personList", null, {
                    xmlns: Ve.TCMNT,
                    "xmlns:x": ar[0]
                }).replace(/[\/]>/, ">") ];
                return m.forEach(function(v, T) {
                    w.push(V("person", null, {
                        displayName: v,
                        id: "{54EE7950-7262-4200-6969-" + ("000000000000" + T).slice(-12) + "}",
                        userId: v,
                        providerId: "None"
                    }));
                }), w.push("</personList>"), w.join("");
            }(h)), l.people.push(o), _e(n.wbrels, -1, "persons/person.xml", Te.PEOPLE)), 
            pe(i, "[Content_Types].xml", ls(l, n)), pe(i, "_rels/.rels", cr(n.rels)), 
            pe(i, "xl/_rels/workbook." + a + ".rels", cr(n.wbrels)), delete n.revssf, 
            delete n.ssf, i;
        }(e, r);
    }
    function ui(e, r) {
        switch (r.type) {
          case "base64":
          case "binary":
            break;

          case "buffer":
          case "array":
            r.type = "";
            break;

          case "file":
            return Er(r.file, Oe.write(e, {
                type: be ? "buffer" : ""
            }));

          case "string":
            throw new Error("'string' output type invalid for '" + r.bookType + "' files");

          default:
            throw new Error("Unrecognized type " + r.type);
        }
        return Oe.write(e, r);
    }
    function Sf(e, r) {
        var t = ft(r || {});
        return function(n, a) {
            var s = {}, l = be ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
            if (a.compression && (s.compression = "DEFLATE"), a.password) s.type = l; else switch (a.type) {
              case "base64":
                s.type = "base64";
                break;

              case "binary":
                s.type = "string";
                break;

              case "string":
                throw new Error("'string' output type invalid for '" + a.bookType + "' files");

              case "buffer":
              case "file":
                s.type = l;
                break;

              default:
                throw new Error("Unrecognized type " + a.type);
            }
            var i = n.FullPaths ? Oe.write(n, {
                fileType: "zip",
                type: {
                    nodebuffer: "buffer",
                    string: "binary"
                }[s.type] || s.type,
                compression: !!a.compression
            }) : n.generate(s);
            if (typeof Deno < "u" && typeof i == "string") {
                if (a.type == "binary" || a.type == "base64") return i;
                i = new Uint8Array(Ur(i));
            }
            return a.password && typeof encrypt_agile < "u" ? ui(encrypt_agile(i, a.password), a) : a.type === "file" ? Er(a.file, i) : a.type == "string" ? Ar(i) : i;
        }(Ef(e, t), t);
    }
    function Rt(e, r, t) {
        t || (t = "");
        var n = t + e;
        switch (r.type) {
          case "base64":
            return Tr(Lt(n));

          case "binary":
            return Lt(n);

          case "string":
            return e;

          case "file":
            return Er(r.file, n, "utf8");

          case "buffer":
            return be ? It(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : Rt(n, {
                type: "binary"
            }).split("").map(function(a) {
                return a.charCodeAt(0);
            });
        }
        throw new Error("Unrecognized type " + r.type);
    }
    function ln(e, r) {
        switch (r.type) {
          case "string":
          case "base64":
          case "binary":
            for (var t = "", n = 0; n < e.length; ++n) t += String.fromCharCode(e[n]);
            return r.type == "base64" ? Tr(t) : r.type == "string" ? Ar(t) : t;

          case "file":
            return Er(r.file, e);

          case "buffer":
            return e;

          default:
            throw new Error("Unrecognized type " + r.type);
        }
    }
    function pi(e, r) {
        so(), Yl(e);
        var t = ft(r || {});
        if (t.cellStyles && (t.cellNF = !0, t.sheetStubs = !0), t.type == "array") {
            t.type = "binary";
            var n = pi(e, t);
            return t.type = "array", Ur(n);
        }
        var a = 0;
        if (t.sheet && (a = typeof t.sheet == "number" ? t.sheet : e.SheetNames.indexOf(t.sheet), 
        !e.SheetNames[a])) throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
        switch (t.bookType || "xlsb") {
          case "xml":
          case "xlml":
            return Rt(nf(e, t), t);

          case "slk":
          case "sylk":
            return Rt(zo.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "htm":
          case "html":
            return Rt(ii(e.Sheets[e.SheetNames[a]], t), t);

          case "txt":
            return function(s, l) {
                switch (l.type) {
                  case "base64":
                    return Tr(s);

                  case "binary":
                  case "string":
                    return s;

                  case "file":
                    return Er(l.file, s, "binary");

                  case "buffer":
                    return be ? It(s, "binary") : s.split("").map(function(i) {
                        return i.charCodeAt(0);
                    });
                }
                throw new Error("Unrecognized type " + l.type);
            }(mi(e.Sheets[e.SheetNames[a]], t), t);

          case "csv":
            return Rt($n(e.Sheets[e.SheetNames[a]], t), t, "\ufeff");

          case "dif":
            return Rt($o.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "dbf":
            return ln(Vo.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "prn":
            return Rt(Xo.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "rtf":
            return Rt(Zo.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "eth":
            return Rt(Rs.from_sheet(e.Sheets[e.SheetNames[a]], t), t);

          case "fods":
            return Rt(hi(e, t), t);

          case "wk1":
            return ln(Cs.sheet_to_wk1(e.Sheets[e.SheetNames[a]], t), t);

          case "wk3":
            return ln(Cs.book_to_wk3(e, t), t);

          case "biff2":
            t.biff || (t.biff = 2);

          case "biff3":
            t.biff || (t.biff = 3);

          case "biff4":
            return t.biff || (t.biff = 4), ln(si(e, t), t);

          case "biff5":
            t.biff || (t.biff = 5);

          case "biff8":
          case "xla":
          case "xls":
            return t.biff || (t.biff = 8), function(s, l) {
                var i = l || {};
                return ui(af(s, i), i);
            }(e, t);

          case "xlsx":
          case "xlsm":
          case "xlam":
          case "xlsb":
          case "numbers":
          case "ods":
            return Sf(e, t);

          default:
            throw new Error("Unrecognized bookType |" + t.bookType + "|");
        }
    }
    function Af(e, r, t, n, a, s, l, i) {
        var o = qe(t), f = i.defval, u = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw"), c = !0, h = a === 1 ? [] : {};
        if (a !== 1) if (Object.defineProperty) try {
            Object.defineProperty(h, "__rowNum__", {
                value: t,
                enumerable: !1
            });
        } catch {
            h.__rowNum__ = t;
        } else h.__rowNum__ = t;
        if (!l || e[t]) for (var d = r.s.c; d <= r.e.c; ++d) {
            var p = l ? e[t][d] : e[n[d] + o];
            if (p !== void 0 && p.t !== void 0) {
                var g = p.v;
                switch (p.t) {
                  case "z":
                    if (g == null) break;
                    continue;

                  case "e":
                    g = g == 0 ? null : void 0;
                    break;

                  case "s":
                  case "d":
                  case "b":
                  case "n":
                    break;

                  default:
                    throw new Error("unrecognized type " + p.t);
                }
                if (s[d] != null) {
                    if (g == null) if (p.t == "e" && g === null) h[s[d]] = null; else if (f !== void 0) h[s[d]] = f; else {
                        if (!u || g !== null) continue;
                        h[s[d]] = null;
                    } else h[s[d]] = u && (p.t !== "n" || p.t === "n" && i.rawNumbers !== !1) ? g : Mt(p, g, i);
                    g != null && (c = !1);
                }
            } else {
                if (f === void 0) continue;
                s[d] != null && (h[s[d]] = f);
            }
        }
        return {
            row: h,
            isempty: c
        };
    }
    function fn(e, r) {
        if (e == null || e["!ref"] == null) return [];
        var t = {
            t: "n",
            v: 0
        }, n = 0, a = 1, s = [], l = 0, i = "", o = {
            s: {
                r: 0,
                c: 0
            },
            e: {
                r: 0,
                c: 0
            }
        }, f = r || {}, u = f.range != null ? f.range : e["!ref"];
        switch (f.header === 1 ? n = 1 : f.header === "A" ? n = 2 : Array.isArray(f.header) ? n = 3 : f.header == null && (n = 0), 
        typeof u) {
          case "string":
            o = Ne(u);
            break;

          case "number":
            (o = Ne(e["!ref"])).s.r = u;
            break;

          default:
            o = u;
        }
        n > 0 && (a = 0);
        var c = qe(o.s.r), h = [], d = [], p = 0, g = 0, E = Array.isArray(e), x = o.s.r, S = 0, m = {};
        E && !e[x] && (e[x] = []);
        var w = f.skipHidden && e["!cols"] || [], v = f.skipHidden && e["!rows"] || [];
        for (S = o.s.c; S <= o.e.c; ++S) if (!(w[S] || {}).hidden) switch (h[S] = rt(S), 
        t = E ? e[x][S] : e[h[S] + c], n) {
          case 1:
            s[S] = S - o.s.c;
            break;

          case 2:
            s[S] = h[S];
            break;

          case 3:
            s[S] = f.header[S - o.s.c];
            break;

          default:
            if (t == null && (t = {
                w: "__EMPTY",
                t: "s"
            }), i = l = Mt(t, null, f), g = m[l] || 0) {
                do {
                    i = l + "_" + g++;
                } while (m[i]);
                m[l] = g, m[i] = 1;
            } else m[l] = 1;
            s[S] = i;
        }
        for (x = o.s.r + a; x <= o.e.r; ++x) if (!(v[x] || {}).hidden) {
            var T = Af(e, o, x, h, n, s, E, f);
            (T.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) && (d[p++] = T.row);
        }
        return d.length = p, d;
    }
    var di = /"/g;
    function xf(e, r, t, n, a, s, l, i) {
        for (var o = !0, f = [], u = "", c = qe(t), h = r.s.c; h <= r.e.c; ++h) if (n[h]) {
            var d = i.dense ? (e[t] || [])[h] : e[n[h] + c];
            if (d == null) u = ""; else if (d.v != null) {
                o = !1, u = "" + (i.rawNumbers && d.t == "n" ? d.v : Mt(d, null, i));
                for (var p = 0, g = 0; p !== u.length; ++p) if ((g = u.charCodeAt(p)) === a || g === s || g === 34 || i.forceQuotes) {
                    u = '"' + u.replace(di, '""') + '"';
                    break;
                }
                u == "ID" && (u = '"ID"');
            } else d.f == null || d.F ? u = "" : (o = !1, (u = "=" + d.f).indexOf(",") >= 0 && (u = '"' + u.replace(di, '""') + '"'));
            f.push(u);
        }
        return i.blankrows === !1 && o ? null : f.join(l);
    }
    function $n(e, r) {
        var t = [], n = r ?? {};
        if (e == null || e["!ref"] == null) return "";
        var a = Ne(e["!ref"]), s = n.FS !== void 0 ? n.FS : ",", l = s.charCodeAt(0), i = n.RS !== void 0 ? n.RS : `
`, o = i.charCodeAt(0), f = new RegExp((s == "|" ? "\\|" : s) + "+$"), u = "", c = [];
        n.dense = Array.isArray(e);
        for (var h = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], p = a.s.c; p <= a.e.c; ++p) (h[p] || {}).hidden || (c[p] = rt(p));
        for (var g = 0, E = a.s.r; E <= a.e.r; ++E) (d[E] || {}).hidden || (u = xf(e, a, E, c, l, o, s, n)) != null && (n.strip && (u = u.replace(f, "")), 
        (u || n.blankrows !== !1) && t.push((g++ ? i : "") + u));
        return delete n.dense, t.join("");
    }
    function mi(e, r) {
        return r || (r = {}), r.FS = "\t", r.RS = `
`, $n(e, r);
    }
    function gi(e, r, t) {
        var n, a = t || {}, s = +!a.skipHeader, l = e || {}, i = 0, o = 0;
        if (l && a.origin != null) if (typeof a.origin == "number") i = a.origin; else {
            var f = typeof a.origin == "string" ? ze(a.origin) : a.origin;
            i = f.r, o = f.c;
        }
        var u = {
            s: {
                c: 0,
                r: 0
            },
            e: {
                c: o,
                r: i + r.length - 1 + s
            }
        };
        if (l["!ref"]) {
            var c = Ne(l["!ref"]);
            u.e.c = Math.max(u.e.c, c.e.c), u.e.r = Math.max(u.e.r, c.e.r), i == -1 && (i = c.e.r + 1, 
            u.e.r = i + r.length - 1 + s);
        } else i == -1 && (i = 0, u.e.r = r.length - 1 + s);
        var h = a.header || [], d = 0;
        r.forEach(function(g, E) {
            Je(g).forEach(function(x) {
                (d = h.indexOf(x)) == -1 && (h[d = h.length] = x);
                var S = g[x], m = "z", w = "", v = Re({
                    c: o + d,
                    r: i + E + s
                });
                n = cn(l, v), !S || typeof S != "object" || S instanceof Date ? (typeof S == "number" ? m = "n" : typeof S == "boolean" ? m = "b" : typeof S == "string" ? m = "s" : S instanceof Date ? (m = "d", 
                a.cellDates || (m = "n", S = lt(S)), w = a.dateNF || Le[14]) : S === null && a.nullError && (m = "e", 
                S = 0), n ? (n.t = m, n.v = S, delete n.w, delete n.R, w && (n.z = w)) : l[v] = n = {
                    t: m,
                    v: S
                }, w && (n.z = w)) : l[v] = S;
            });
        }), u.e.c = Math.max(u.e.c, o + h.length - 1);
        var p = qe(i);
        if (s) for (d = 0; d < h.length; ++d) l[rt(d + o) + p] = {
            t: "s",
            v: h[d]
        };
        return l["!ref"] = We(u), l;
    }
    function cn(e, r, t) {
        if (typeof r == "string") {
            if (Array.isArray(e)) {
                var n = ze(r);
                return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = {
                    t: "z"
                });
            }
            return e[r] || (e[r] = {
                t: "z"
            });
        }
        return cn(e, Re(typeof r != "number" ? r : {
            r: r,
            c: t || 0
        }));
    }
    function vi(e, r, t) {
        return r ? (e.l = {
            Target: r
        }, t && (e.l.Tooltip = t)) : delete e.l, e;
    }
    var Ti, Xn = {
        encode_col: rt,
        encode_row: qe,
        encode_cell: Re,
        encode_range: We,
        decode_col: Rn,
        decode_row: On,
        split_cell: function(e) {
            return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
        },
        decode_cell: ze,
        decode_range: mt,
        format_cell: Mt,
        sheet_add_aoa: ts,
        sheet_add_json: gi,
        sheet_add_dom: oi,
        aoa_to_sheet: ir,
        json_to_sheet: function(e, r) {
            return gi(null, e, r);
        },
        table_to_sheet: li,
        table_to_book: function(e, r) {
            return Yt(li(e, r), r);
        },
        sheet_to_csv: $n,
        sheet_to_txt: mi,
        sheet_to_json: fn,
        sheet_to_html: ii,
        sheet_to_formulae: function(e) {
            var r, t = "", n = "";
            if (e == null || e["!ref"] == null) return [];
            var a, s = Ne(e["!ref"]), l = "", i = [], o = [], f = Array.isArray(e);
            for (a = s.s.c; a <= s.e.c; ++a) i[a] = rt(a);
            for (var u = s.s.r; u <= s.e.r; ++u) for (l = qe(u), a = s.s.c; a <= s.e.c; ++a) if (t = i[a] + l, 
            n = "", (r = f ? (e[u] || [])[a] : e[t]) !== void 0) {
                if (r.F != null) {
                    if (t = r.F, !r.f) continue;
                    n = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
                }
                if (r.f != null) n = r.f; else {
                    if (r.t == "z") continue;
                    if (r.t == "n" && r.v != null) n = "" + r.v; else if (r.t == "b") n = r.v ? "TRUE" : "FALSE"; else if (r.w !== void 0) n = "'" + r.w; else {
                        if (r.v === void 0) continue;
                        n = r.t == "s" ? "'" + r.v : "" + r.v;
                    }
                }
                o[o.length] = t + "=" + n;
            }
            return o;
        },
        sheet_to_row_object_array: fn,
        sheet_get_cell: cn,
        book_new: function() {
            return {
                SheetNames: [],
                Sheets: {}
            };
        },
        book_append_sheet: function(e, r, t, n) {
            var a = 1;
            if (!t) for (;a <= 65535 && e.SheetNames.indexOf(t = "Sheet" + a) != -1; ++a, 
            t = void 0);
            if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
            if (n && e.SheetNames.indexOf(t) >= 0) {
                var s = t.match(/(^.*?)(\d+)$/);
                a = s && +s[2] || 0;
                var l = s && s[1] || t;
                for (++a; a <= 65535 && e.SheetNames.indexOf(t = l + a) != -1; ++a);
            }
            if (ri(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
            return e.SheetNames.push(t), e.Sheets[t] = r, t;
        },
        book_set_sheet_visibility: function(e, r, t) {
            e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
            var n = function(a, s) {
                if (typeof s == "number") {
                    if (s >= 0 && a.SheetNames.length > s) return s;
                    throw new Error("Cannot find sheet # " + s);
                }
                if (typeof s == "string") {
                    var l = a.SheetNames.indexOf(s);
                    if (l > -1) return l;
                    throw new Error("Cannot find sheet name |" + s + "|");
                }
                throw new Error("Cannot find sheet |" + s + "|");
            }(e, r);
            switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), t) {
              case 0:
              case 1:
              case 2:
                break;

              default:
                throw new Error("Bad sheet visibility setting " + t);
            }
            e.Workbook.Sheets[n].Hidden = t;
        },
        cell_set_number_format: function(e, r) {
            return e.z = r, e;
        },
        cell_set_hyperlink: vi,
        cell_set_internal_link: function(e, r, t) {
            return vi(e, "#" + r, t);
        },
        cell_add_comment: function(e, r, t) {
            e.c || (e.c = []), e.c.push({
                t: r,
                a: t || "SheetJS"
            });
        },
        sheet_set_array_formula: function(e, r, t, n) {
            for (var a = typeof r != "string" ? r : Ne(r), s = typeof r == "string" ? r : We(r), l = a.s.r; l <= a.e.r; ++l) for (var i = a.s.c; i <= a.e.c; ++i) {
                var o = cn(e, l, i);
                o.t = "n", o.F = s, delete o.v, l == a.s.r && i == a.s.c && (o.f = t, 
                n && (o.D = !0));
            }
            return e;
        },
        consts: {
            SHEET_VISIBLE: 0,
            SHEET_HIDDEN: 1,
            SHEET_VERY_HIDDEN: 2
        }
    }, wi = {
        exports: {}
    };
    Ti = wi, function() {
        function e(i, o) {
            return o === void 0 ? o = {
                autoBom: !1
            } : typeof o != "object" && (o = {
                autoBom: !o
            }), o.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type) ? new Blob([ "\ufeff", i ], {
                type: i.type
            }) : i;
        }
        function r(i, o, f) {
            var u = new XMLHttpRequest();
            u.open("GET", i), u.responseType = "blob", u.onload = function() {
                l(u.response, o, f);
            }, u.onerror = function() {}, u.send();
        }
        function t(i) {
            var o = new XMLHttpRequest();
            o.open("HEAD", i, !1);
            try {
                o.send();
            } catch {}
            return 200 <= o.status && 299 >= o.status;
        }
        function n(i) {
            try {
                i.dispatchEvent(new MouseEvent("click"));
            } catch {
                var o = document.createEvent("MouseEvents");
                o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), 
                i.dispatchEvent(o);
            }
        }
        var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof hn == "object" && hn.global === hn ? hn : void 0, s = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = a.saveAs || (typeof window != "object" || window !== a ? function() {} : "download" in HTMLAnchorElement.prototype && !s ? function(i, o, f) {
            var u = a.URL || a.webkitURL, c = document.createElement("a");
            o = o || i.name || "download", c.download = o, c.rel = "noopener", typeof i == "string" ? (c.href = i, 
            c.origin === location.origin ? n(c) : t(c.href) ? r(i, o, f) : n(c, c.target = "_blank")) : (c.href = u.createObjectURL(i), 
            setTimeout(function() {
                u.revokeObjectURL(c.href);
            }, 4e4), setTimeout(function() {
                n(c);
            }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(i, o, f) {
            if (o = o || i.name || "download", typeof i != "string") navigator.msSaveOrOpenBlob(e(i, f), o); else if (t(i)) r(i, o, f); else {
                var u = document.createElement("a");
                u.href = i, u.target = "_blank", setTimeout(function() {
                    n(u);
                });
            }
        } : function(i, o, f, u) {
            if ((u = u || open("", "_blank")) && (u.document.title = u.document.body.innerText = "downloading..."), 
            typeof i == "string") return r(i, o, f);
            var c = i.type === "application/octet-stream", h = /constructor/i.test(a.HTMLElement) || a.safari, d = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((d || c && h || s) && typeof FileReader < "u") {
                var p = new FileReader();
                p.onloadend = function() {
                    var x = p.result;
                    x = d ? x : x.replace(/^data:[^;]*;/, "data:attachment/file;"), 
                    u ? u.location.href = x : location = x, u = null;
                }, p.readAsDataURL(i);
            } else {
                var g = a.URL || a.webkitURL, E = g.createObjectURL(i);
                u ? u.location = E : location.href = E, u = null, setTimeout(function() {
                    g.revokeObjectURL(E);
                }, 4e4);
            }
        });
        a.saveAs = l.saveAs = l, Ti.exports = l;
    }();
    var _f = wi.exports;
    const tr = "https://neustudy.neumooc.com";
    Gi = function(e, r, t) {
        return Ct.upload({
            url: "/content/s3/batchUpload",
            baseURL: tr,
            showLoading: !1,
            timeout: 36e5,
            onUploadProgress: r,
            cancelToken: t,
            data: e
        });
    }, Yi = function(e, r, t) {
        return Ct.upload({
            url: "/content/s3/putObject",
            baseURL: tr,
            showLoading: !1,
            timeout: 36e5,
            onUploadProgress: r,
            cancelToken: t,
            data: e
        });
    }, eo = function(e, r, t) {
        return Ct.upload({
            url: "/content/s3/putObjectOldEid",
            baseURL: tr,
            showLoading: !1,
            timeout: 36e5,
            onUploadProgress: r,
            cancelToken: t,
            data: e
        });
    }, Qn = function(e) {
        return Ct.get({
            url: "/content/search/queryIndexById",
            baseURL: tr,
            params: {
                source: kt,
                eid: e
            }
        });
    }, qn = function(e) {
        return Ct.get({
            url: `/content/s3/previewObject?eid=${e}&source=${kt}`,
            baseURL: tr,
            showLoading: !1,
            timeout: 36e5
        });
    }, no = function(e, r, t) {
        return Ct.upload({
            url: "/dataset/upload",
            showLoading: !1,
            timeout: 36e5,
            onUploadProgress: r,
            cancelToken: t,
            data: e
        });
    }, Di = function(e, r) {
        return Ct.baseURL + `/dataset/download?path=${encodeURIComponent(e)}&name=${encodeURIComponent(r)}`;
    }, to = function(e, r, t) {
        return Ct.upload({
            url: "/dataset/judge/upload",
            showLoading: !1,
            timeout: 36e5,
            onUploadProgress: r,
            cancelToken: t,
            data: e
        });
    }, Pi = function(e) {
        return Ct.post({
            url: "/content/s3/batchDownForPath",
            baseURL: tr,
            showLoading: !1,
            timeout: 36e5,
            data: {
                ...e,
                source: kt
            }
        });
    };
    let bi, Ei, Mr;
    ({
        bucketName: bi,
        indexName: Ei,
        source: kt
    } = JSON.parse('{"source":"NEUNSE","bucketName":"neunsebucket","indexName":"neunseindex"}')), 
    Mr = "https://neustudy.neumooc.com", Zn = function(e) {
        return `${Mr}/content/s3/getObjectIO?eid=${e}&source=${kt}`;
    };
    function Si(e) {
        return `${Mr}/content/s3/getObjectIOForDown?eid=${e}&source=${kt}`;
    }
    Hi = async function(e) {
        return "//" + await qn(e);
    };
    async function yf(e) {
        return "//" + await function(t) {
            return Ct.post({
                url: `/content/s3/getObject?eid=${t}&source=${kt}`,
                baseURL: tr,
                showLoading: !1,
                timeout: 36e5
            });
        }(e);
    }
    Ji = function(e, r) {
        const t = new Blob([ e ]);
        if ("download" in document.createElement("a")) {
            const n = document.createElement("a");
            n.download = r, n.style.display = "none", n.href = URL.createObjectURL(t), 
            document.body.appendChild(n), n.click(), URL.revokeObjectURL(n.href), 
            document.body.removeChild(n);
        } else navigator.msSaveBlob(t, r);
    }, Ui = async function(e) {
        return new Promise(async (r, t) => {
            const n = await fetch(Si(e), {
                credentials: "same-origin"
            });
            if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
            r(await n.blob());
        });
    }, Wi = async function(e, r) {
        if ((await Qn(e)).fileType == "WD") try {
            const t = await fetch(Si(e), {
                credentials: "same-origin"
            });
            if (!t.ok) throw new Error(`HTTP error! status: ${t.status}`);
            const n = await t.blob(), a = window.URL.createObjectURL(n), s = document.createElement("a");
            s.href = a, s.download = r, s.style.display = "none", document.body.appendChild(s), 
            s.click(), window.URL.revokeObjectURL(a), document.body.removeChild(s);
        } catch {} else try {
            const t = yf(e), n = document.createElement("a");
            n.style.display = "none", n.href = await t, n.download = r, n.target = "_blank", 
            document.body.appendChild(n), n.click(), document.body.removeChild(n);
        } catch {}
    }, zi = function() {
        return Date.now().toString(16) + Math.random().toString(16).slice(2, 10);
    }, Vi = function(e = 0) {
        const r = [ "Bytes", "KB", "MB", "GB" ];
        let t = 0;
        for (;e >= 1024 && t < r.length - 1; ) e /= 1024, t++;
        return e === 0 ? 0 : e.toFixed(2) + " " + r[t];
    };
    const Of = {
        doc: "文档",
        docx: "文档",
        xls: "文档",
        xlsx: "文档",
        ppt: "文档",
        pptx: "文档",
        pdf: "文档",
        txt: "文档",
        jpg: "图片",
        jpeg: "图片",
        png: "图片",
        bmp: "图片",
        gif: "图片",
        mp4: "视频",
        ogg: "视频",
        zip: "压缩包",
        rar: "压缩包",
        mp3: "音频",
        md: "Markdown"
    };
    Xi = function(e) {
        const {
            baseName: r,
            extension: t
        } = function(n) {
            const a = n.lastIndexOf(".");
            return a === -1 ? {
                baseName: n,
                extension: ""
            } : {
                baseName: n.substring(0, a),
                extension: n.substring(a + 1).toLowerCase()
            };
        }(e);
        return t ? {
            baseName: r,
            extension: t,
            fileType: Of[t] || "其他"
        } : {
            baseName: r,
            extension: "",
            fileType: ""
        };
    };
    const Rf = {
        ".doc": 3,
        ".docx": 3,
        ".xls": 3,
        ".xlsx": 3,
        ".ppt": 3,
        ".pptx": 3,
        ".pdf": 3,
        ".txt": 3,
        ".jpg": 4,
        ".jpeg": 4,
        ".png": 4,
        ".bmp": 4,
        ".gif": 4,
        ".mp4": 1,
        ".ogg": 1,
        ".zip": 5,
        ".rar": 5,
        ".mp3": 2,
        ".md": 7
    };
    Qi = function(e) {
        return Rf[e] || -1;
    };
    const Cf = {
        0: "文件夹",
        1: "视频",
        2: "音频",
        3: "文档",
        4: "图片",
        5: "压缩包",
        6: "链接",
        7: "MD"
    };
    Ki = function(e) {
        return Cf[e] || "未知类型";
    }, $i = function(e, r) {
        const t = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: "Bearer " + Ii()
            }
        };
        return un.post(`${e}`, r, t);
    }, ji = function(e) {
        const r = new FormData();
        return Array.isArray(e) ? Object.keys(e).forEach(t => {
            r.append("files", e[t]);
        }) : r.append("files", e), r.append("source", kt), r.append("bucketName", bi), 
        r.append("index", Ei), un.post(`${Mr}/content/s3/batchUpload`, r, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }, qi = function(e) {
        const r = new FormData();
        return r.append("file", e), r.append("isSlice", "true"), r.append("isCheck", "true"), 
        r.append("source", kt), un.post(`${Mr}/content/s3/putObject`, r, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }, Mi = function(e) {
        return new Promise((r, t) => {
            un.get(Zn(e), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: "Bearer " + Ii()
                }
            }).then(n => {
                r(n.data + "");
            }).catch(n => {
                t(n);
            });
        });
    }, ro = function(e, r = "markdown.md") {
        const t = new Blob([ e ], {
            type: "text/plain;charset=utf-8"
        });
        return new File([ t ], r, {
            type: "text/plain;charset=utf-8"
        });
    }, Li = function(e, r = "错误信息文件.xlsx") {
        const t = Xn.aoa_to_sheet(e), n = Xn.book_new();
        Xn.book_append_sheet(n, t, "Sheet1");
        const a = pi(n, {
            bookType: "xlsx",
            type: "array"
        }), s = new Blob([ a ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
        });
        _f.saveAs(s, r);
    }, Zi = function({
        list: e,
        listAttrCode: r,
        rawAttrCode: t
    }) {
        var a;
        return (a = e.filter(s => {
            var l;
            return ((l = s[r]) == null ? void 0 : l.toString()) === (t == null ? void 0 : t.toString());
        })) == null ? void 0 : a.pop();
    }, Bi = function(e, r) {
        const t = function(a) {
            const s = a.split(";base64,"), l = s[0].split(":")[1], i = window.atob(s[1]), o = i.length, f = new Uint8Array(o);
            for (let u = 0; u < o; ++u) f[u] = i.charCodeAt(u);
            return new Blob([ f ], {
                type: l
            });
        }(e), n = document.createElement("a");
        n.download = r, n.style.display = "none", n.href = URL.createObjectURL(t), 
        document.body.appendChild(n), n.click(), URL.revokeObjectURL(n.href), document.body.removeChild(n);
    }, Fi = (e, r) => {
        const t = e.split(","), n = t[0].match(/:(.*?);/)[1], a = atob(t[1]);
        let s = a.length || 0;
        const l = new Uint8Array(s);
        for (;s--; ) l[s] = a.charCodeAt(s);
        const i = new Blob([ l ], {
            type: n
        });
        return new File([ i ], r, {
            type: n
        });
    };
});

export {
    Di as A,
    Pi as B,
    Li as C,
    Ff as __tla,
    Zn as a,
    kt as b,
    Mi as c,
    Fi as d,
    Ui as e,
    Bi as f,
    Hi as g,
    Wi as h,
    qn as i,
    Gi as j,
    ji as k,
    Vi as l,
    zi as m,
    $i as n,
    Xi as o,
    Yi as p,
    Qn as q,
    Ki as r,
    Ji as s,
    Zi as t,
    qi as u,
    Qi as v,
    eo as w,
    to as x,
    ro as y,
    no as z
};