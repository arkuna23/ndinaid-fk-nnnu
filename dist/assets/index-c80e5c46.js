import {
    eB as L,
    eC as j,
    eu as ee,
    ev as h,
    eD as Oe,
    eG as te,
    eH as ne,
    eJ as ae,
    eR as re,
    eq as le,
    eT as oe,
    eF as N,
    eU as se,
    __tla as ie
} from "./index-6c08ea4c.js";

let X, Q, U, _, ye = Promise.all([ (() => {
    try {
        return ie;
    } catch {}
})() ]).then(async () => {
    function q(e) {
        return e == 45 || e == 46 || e == 58 || e >= 65 && e <= 90 || e == 95 || e >= 97 && e <= 122 || e >= 161;
    }
    let E = null, G = null, R = 0;
    function v(e, O) {
        let t = e.pos + O;
        if (G == e && R == t) return E;
        for (;(r = e.peek(O)) == 9 || r == 10 || r == 13 || r == 32; ) O++;
        var r;
        let c = "";
        for (;;) {
            let g = e.peek(O);
            if (!q(g)) break;
            c += String.fromCharCode(g), O++;
        }
        return G = e, R = t, E = c || null;
    }
    function Z(e, O) {
        this.name = e, this.parent = O, this.hash = O ? O.hash : 0;
        for (let t = 0; t < e.length; t++) this.hash += (this.hash << 4) + e.charCodeAt(t) + (e.charCodeAt(t) << 8);
    }
    const z = new L({
        start: null,
        shift: (e, O, t, r) => O == 1 ? new Z(v(r, 1) || "", e) : e,
        reduce: (e, O) => O == 11 && e ? e.parent : e,
        reuse(e, O, t, r) {
            let c = O.type.id;
            return c == 1 || c == 13 ? new Z(v(r, 1) || "", e) : e;
        },
        hash: e => e ? e.hash : 0,
        strict: !1
    }), D = new j((e, O) => {
        if (e.next == 60) {
            if (e.advance(), e.next == 47) {
                e.advance();
                let t = v(e, 0);
                if (!t) return e.acceptToken(5);
                if (O.context && t == O.context.name) return e.acceptToken(2);
                for (let r = O.context; r; r = r.parent) if (r.name == t) return e.acceptToken(3, -2);
                e.acceptToken(4);
            } else if (e.next != 33 && e.next != 63) return e.acceptToken(1);
        }
    }, {
        contextual: !0
    });
    function W(e, O) {
        return new j(t => {
            let r = 0, c = O.charCodeAt(0);
            e: for (;!(t.next < 0); t.advance(), r++) if (t.next == c) {
                for (let g = 1; g < O.length; g++) if (t.peek(g) != O.charCodeAt(g)) continue e;
                break;
            }
            r && t.acceptToken(e);
        });
    }
    const B = W(35, "--\x3e"), F = W(36, "?>"), M = W(37, "]]>"), J = ee({
        Text: h.content,
        "StartTag StartCloseTag EndTag SelfCloseEndTag": h.angleBracket,
        TagName: h.tagName,
        "MismatchedCloseTag/TagName": [ h.tagName, h.invalid ],
        AttributeName: h.attributeName,
        AttributeValue: h.attributeValue,
        Is: h.definitionOperator,
        "EntityReference CharacterReference": h.character,
        Comment: h.blockComment,
        ProcessingInst: h.processingInstruction,
        DoctypeDecl: h.documentMeta,
        Cdata: h.special(h.string)
    }), H = Oe.deserialize({
        version: 14,
        states: ",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",
        stateData: ")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",
        goto: "%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",
        nodeNames: "⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
        maxTerm: 47,
        context: z,
        nodeProps: [ [ "closedBy", 1, "SelfCloseEndTag EndTag", 13, "CloseTag MissingCloseTag" ], [ "openedBy", 12, "StartTag StartCloseTag", 19, "OpenTag", 20, "StartTag" ], [ "isolate", -6, 13, 18, 19, 21, 22, 24, "" ] ],
        propSources: [ J ],
        skippedNodes: [ 0 ],
        repeatNodeCount: 8,
        tokenData: "Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",
        tokenizers: [ D, B, F, M, 0, 1, 2, 3 ],
        topRules: {
            Document: [ 0, 6 ]
        },
        tokenPrec: 0
    });
    function P(e, O) {
        let t = O && O.getChild("TagName");
        return t ? e.sliceString(t.from, t.to) : "";
    }
    function C(e, O) {
        let t = O && O.firstChild;
        return t && t.name == "OpenTag" ? P(e, t) : "";
    }
    function b(e) {
        for (let O = e && e.parent; O; O = O.parent) if (O.name == "Element") return O;
        return null;
    }
    class K {
        constructor(O, t, r) {
            this.attrs = t, this.attrValues = r, this.children = [], this.name = O.name, 
            this.completion = Object.assign(Object.assign({
                type: "type"
            }, O.completion || {}), {
                label: this.name
            }), this.openCompletion = Object.assign(Object.assign({}, this.completion), {
                label: "<" + this.name
            }), this.closeCompletion = Object.assign(Object.assign({}, this.completion), {
                label: "</" + this.name + ">",
                boost: 2
            }), this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), {
                label: this.name + ">"
            }), this.text = O.textContent ? O.textContent.map(c => ({
                label: c,
                type: "text"
            })) : [];
        }
    }
    const w = /^[:\-\.\w\u00b7-\uffff]*$/;
    function Y(e) {
        return Object.assign(Object.assign({
            type: "property"
        }, e.completion || {}), {
            label: e.name
        });
    }
    function k(e) {
        return typeof e == "string" ? {
            label: `"${e}"`,
            type: "constant"
        } : /^"/.test(e.label) ? e : Object.assign(Object.assign({}, e), {
            label: `"${e.label}"`
        });
    }
    Q = function(e, O) {
        let t = [], r = [], c = Object.create(null);
        for (let a of O) {
            let u = Y(a);
            t.push(u), a.global && r.push(u), a.values && (c[a.name] = a.values.map(k));
        }
        let g = [], f = [], T = Object.create(null);
        for (let a of e) {
            let u = r, i = c;
            a.attributes && (u = u.concat(a.attributes.map(p => typeof p == "string" ? t.find(s => s.label == p) || {
                label: p,
                type: "property"
            } : (p.values && (i == c && (i = Object.create(i)), i[p.name] = p.values.map(k)), 
            Y(p)))));
            let S = new K(a, u, i);
            T[S.name] = S, g.push(S), a.top && f.push(S);
        }
        f.length || (f = g);
        for (let a = 0; a < g.length; a++) {
            let u = e[a], i = g[a];
            if (u.children) for (let S of u.children) T[S] && i.children.push(T[S]); else i.children = g;
        }
        return a => {
            var u;
            let {
                doc: i
            } = a.state, S = function(o, l) {
                var m;
                let n = N(o).resolveInner(l, -1), $ = null;
                for (let y = n; !$ && y.parent; y = y.parent) y.name != "OpenTag" && y.name != "CloseTag" && y.name != "SelfClosingTag" && y.name != "MismatchedCloseTag" || ($ = y);
                if ($ && ($.to > l || $.lastChild.type.isError)) {
                    let y = $.parent;
                    if (n.name == "TagName") return $.name == "CloseTag" || $.name == "MismatchedCloseTag" ? {
                        type: "closeTag",
                        from: n.from,
                        context: y
                    } : {
                        type: "openTag",
                        from: n.from,
                        context: b(y)
                    };
                    if (n.name == "AttributeName") return {
                        type: "attrName",
                        from: n.from,
                        context: $
                    };
                    if (n.name == "AttributeValue") return {
                        type: "attrValue",
                        from: n.from,
                        context: $
                    };
                    let V = n == $ || n.name == "Attribute" ? n.childBefore(l) : n;
                    return (V == null ? void 0 : V.name) == "StartTag" ? {
                        type: "openTag",
                        from: l,
                        context: b(y)
                    } : (V == null ? void 0 : V.name) == "StartCloseTag" && V.to <= l ? {
                        type: "closeTag",
                        from: l,
                        context: y
                    } : (V == null ? void 0 : V.name) == "Is" ? {
                        type: "attrValue",
                        from: l,
                        context: $
                    } : V ? {
                        type: "attrName",
                        from: l,
                        context: $
                    } : null;
                }
                if (n.name == "StartCloseTag") return {
                    type: "closeTag",
                    from: l,
                    context: n.parent
                };
                for (;n.parent && n.to == l && !(!((m = n.lastChild) === null || m === void 0) && m.type.isError); ) n = n.parent;
                return n.name == "Element" || n.name == "Text" || n.name == "Document" ? {
                    type: "tag",
                    from: l,
                    context: n.name == "Element" ? n : b(n)
                } : null;
            }(a.state, a.pos);
            if (!S || S.type == "tag" && !a.explicit) return null;
            let {
                type: p,
                from: s,
                context: d
            } = S;
            if (p == "openTag") {
                let o = f, l = C(i, d);
                if (l) {
                    let m = T[l];
                    o = (m == null ? void 0 : m.children) || g;
                }
                return {
                    from: s,
                    options: o.map(m => m.completion),
                    validFor: w
                };
            }
            if (p == "closeTag") {
                let o = C(i, d);
                return o ? {
                    from: s,
                    to: a.pos + (i.sliceString(a.pos, a.pos + 1) == ">" ? 1 : 0),
                    options: [ ((u = T[o]) === null || u === void 0 ? void 0 : u.closeNameCompletion) || {
                        label: o + ">",
                        type: "type"
                    } ],
                    validFor: w
                } : null;
            }
            if (p == "attrName") {
                let o = T[P(i, d)];
                return {
                    from: s,
                    options: (o == null ? void 0 : o.attrs) || r,
                    validFor: w
                };
            }
            if (p == "attrValue") {
                let o = function(n, $, y) {
                    let V = $ && $.getChildren("Attribute").find(I => I.from <= y && I.to >= y), x = V && V.getChild("AttributeName");
                    return x ? n.sliceString(x.from, x.to) : "";
                }(i, d, s);
                if (!o) return null;
                let l = T[P(i, d)], m = ((l == null ? void 0 : l.attrValues) || c)[o];
                return m && m.length ? {
                    from: s,
                    to: a.pos + (i.sliceString(a.pos, a.pos + 1) == '"' ? 1 : 0),
                    options: m,
                    validFor: /^"[^"]*"?$/
                } : null;
            }
            if (p == "tag") {
                let o = C(i, d), l = T[o], m = [], n = d && d.lastChild;
                !o || n && n.name == "CloseTag" && P(i, n) == o || m.push(l ? l.closeCompletion : {
                    label: "</" + o + ">",
                    type: "type",
                    boost: 2
                });
                let $ = m.concat(((l == null ? void 0 : l.children) || (d ? g : f)).map(y => y.openCompletion));
                if (d && (l != null && l.text.length)) {
                    let y = d.firstChild;
                    y.to > a.pos - 20 && !/\S/.test(a.state.sliceDoc(y.to, a.pos)) && ($ = $.concat(l.text));
                }
                return {
                    from: s,
                    options: $,
                    validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
                };
            }
            return null;
        };
    }, _ = te.define({
        name: "xml",
        parser: H.configure({
            props: [ ne.add({
                Element(e) {
                    let O = /^\s*<\//.test(e.textAfter);
                    return e.lineIndent(e.node.from) + (O ? 0 : e.unit);
                },
                "OpenTag CloseTag SelfClosingTag": e => e.column(e.node.from) + e.unit
            }), ae.add({
                Element(e) {
                    let O = e.firstChild, t = e.lastChild;
                    return O && O.name == "OpenTag" ? {
                        from: O.to,
                        to: t.name == "CloseTag" ? t.from : e.to
                    } : null;
                }
            }), re.add({
                "OpenTag CloseTag": e => e.getChild("TagName")
            }) ]
        }),
        languageData: {
            commentTokens: {
                block: {
                    open: "\x3c!--",
                    close: "--\x3e"
                }
            },
            indentOnInput: /^\s*<\/$/
        }
    }), U = function(e = {}) {
        let O = [ _.data.of({
            autocomplete: Q(e.elements || [], e.attributes || [])
        }) ];
        return e.autoCloseTags !== !1 && O.push(X), new le(_, O);
    };
    function A(e, O, t = e.length) {
        if (!O) return "";
        let r = O.firstChild, c = r && r.getChild("TagName");
        return c ? e.sliceString(c.from, Math.min(c.to, t)) : "";
    }
    X = oe.inputHandler.of((e, O, t, r, c) => {
        if (e.composing || e.state.readOnly || O != t || r != ">" && r != "/" || !_.isActiveAt(e.state, O, -1)) return !1;
        let g = c(), {
            state: f
        } = g, T = f.changeByRange(a => {
            var u, i, S;
            let p, {
                head: s
            } = a, d = f.doc.sliceString(s - 1, s) == r, o = N(f).resolveInner(s, -1);
            if (d && r == ">" && o.name == "EndTag") {
                let l = o.parent;
                if (((i = (u = l.parent) === null || u === void 0 ? void 0 : u.lastChild) === null || i === void 0 ? void 0 : i.name) != "CloseTag" && (p = A(f.doc, l.parent, s))) return {
                    range: a,
                    changes: {
                        from: s,
                        to: s + (f.doc.sliceString(s, s + 1) === ">" ? 1 : 0),
                        insert: `</${p}>`
                    }
                };
            } else if (d && r == "/" && o.name == "StartCloseTag") {
                let l = o.parent;
                if (o.from == s - 2 && ((S = l.lastChild) === null || S === void 0 ? void 0 : S.name) != "CloseTag" && (p = A(f.doc, l, s))) {
                    let m = s + (f.doc.sliceString(s, s + 1) === ">" ? 1 : 0), n = `${p}>`;
                    return {
                        range: se.cursor(s + n.length, -1),
                        changes: {
                            from: s,
                            to: m,
                            insert: n
                        }
                    };
                }
            }
            return {
                range: a
            };
        });
        return !T.changes.empty && (e.dispatch([ g, f.update(T, {
            userEvent: "input.complete",
            scrollIntoView: !0
        }) ]), !0);
    });
});

export {
    ye as __tla,
    X as autoCloseTags,
    Q as completeFromSchema,
    U as xml,
    _ as xmlLanguage
};