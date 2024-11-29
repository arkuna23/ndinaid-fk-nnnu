function g(e) {
    for (var n = {}, t = e.split(","), r = 0; r < t.length; ++r) {
        var i = t[r].toUpperCase(), a = t[r].charAt(0).toUpperCase() + t[r].slice(1);
        n[t[r]] = !0, n[i] = !0, n[a] = !0;
    }
    return n;
}

function b(e) {
    return e.eatWhile(/[\w\$_]/), "meta";
}

var o, w = g("null"), h = {
    "`": b,
    $: b
}, k = !1, z = g("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"), E = g("architecture,entity,begin,case,port,else,elsif,end,for,function,if"), v = /[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;

function p(e, n) {
    var t, r = e.next();
    if (h[r]) {
        var i = h[r](e, n);
        if (i !== !1) return i;
    }
    if (r == '"') return n.tokenize = (t = r, function(d, m) {
        for (var s, l = !1, u = !1; (s = d.next()) != null; ) {
            if (s == t && !l) {
                u = !0;
                break;
            }
            l = !l && s == "--";
        }
        return (u || !l && !k) && (m.tokenize = p), "string.special";
    }), n.tokenize(e, n);
    if (r == "'") return n.tokenize = function(d) {
        return function(m, s) {
            for (var l, u = !1, y = !1; (l = m.next()) != null; ) {
                if (l == d && !u) {
                    y = !0;
                    break;
                }
                u = !u && l == "--";
            }
            return (y || !u && !k) && (s.tokenize = p), "string";
        };
    }(r), n.tokenize(e, n);
    if (/[\[\]{}\(\),;\:\.]/.test(r)) return o = r, null;
    if (/[\d']/.test(r)) return e.eatWhile(/[\w\.']/), "number";
    if (r == "-" && e.eat("-")) return e.skipToEnd(), "comment";
    if (v.test(r)) return e.eatWhile(v), "operator";
    e.eatWhile(/[\w\$_]/);
    var a = e.current();
    return z.propertyIsEnumerable(a.toLowerCase()) ? (E.propertyIsEnumerable(a) && (o = "newstatement"), 
    "keyword") : w.propertyIsEnumerable(a) ? "atom" : "variable";
}

function x(e, n, t, r, i) {
    this.indented = e, this.column = n, this.type = t, this.align = r, this.prev = i;
}

function f(e, n, t) {
    return e.context = new x(e.indented, n, t, null, e.context);
}

function c(e) {
    var n = e.context.type;
    return n != ")" && n != "]" && n != "}" || (e.indented = e.context.indented), 
    e.context = e.context.prev;
}

const I = {
    name: "vhdl",
    startState: function(e) {
        return {
            tokenize: null,
            context: new x(-e, 0, "top", !1),
            indented: 0,
            startOfLine: !0
        };
    },
    token: function(e, n) {
        var t = n.context;
        if (e.sol() && (t.align == null && (t.align = !1), n.indented = e.indentation(), 
        n.startOfLine = !0), e.eatSpace()) return null;
        o = null;
        var r = (n.tokenize || p)(e, n);
        if (r == "comment" || r == "meta") return r;
        if (t.align == null && (t.align = !0), o != ";" && o != ":" || t.type != "statement") if (o == "{") f(n, e.column(), "}"); else if (o == "[") f(n, e.column(), "]"); else if (o == "(") f(n, e.column(), ")"); else if (o == "}") {
            for (;t.type == "statement"; ) t = c(n);
            for (t.type == "}" && (t = c(n)); t.type == "statement"; ) t = c(n);
        } else o == t.type ? c(n) : (t.type == "}" || t.type == "top" || t.type == "statement" && o == "newstatement") && f(n, e.column(), "statement"); else c(n);
        return n.startOfLine = !1, r;
    },
    indent: function(e, n, t) {
        if (e.tokenize != p && e.tokenize != null) return 0;
        var r = n && n.charAt(0), i = e.context, a = r == i.type;
        return i.type == "statement" ? i.indented + (r == "{" ? 0 : t.unit) : i.align ? i.column + (a ? 0 : 1) : i.indented + (a ? 0 : t.unit);
    },
    languageData: {
        indentOnInput: /^\s*[{}]$/,
        commentTokens: {
            line: "--"
        }
    }
};

export {
    I as vhdl
};