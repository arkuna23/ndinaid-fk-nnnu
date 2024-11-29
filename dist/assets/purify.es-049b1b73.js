function M(a) {
    return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, M(a);
}

function xe(a, n) {
    return xe = Object.setPrototypeOf || function(o, c) {
        return o.__proto__ = c, o;
    }, xe(a, n);
}

function Re(a, n, o) {
    return Re = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
            !0;
        } catch {
            return !1;
        }
    }() ? Reflect.construct : function(c, p, _) {
        var k = [ null ];
        k.push.apply(k, p);
        var U = new (Function.bind.apply(c, k))();
        return _ && xe(U, _.prototype), U;
    }, Re.apply(null, arguments);
}

function x(a) {
    return function(n) {
        if (Array.isArray(n)) return Oe(n);
    }(a) || function(n) {
        if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
    }(a) || function(n, o) {
        if (n) {
            if (typeof n == "string") return Oe(n, o);
            var c = Object.prototype.toString.call(n).slice(8, -1);
            if (c === "Object" && n.constructor && (c = n.constructor.name), c === "Map" || c === "Set") return Array.from(n);
            if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return Oe(n, o);
        }
    }(a) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
}

function Oe(a, n) {
    (n == null || n > a.length) && (n = a.length);
    for (var o = 0, c = new Array(n); o < n; o++) c[o] = a[o];
    return c;
}

var Ut = Object.hasOwnProperty, ut = Object.setPrototypeOf, Ht = Object.isFrozen, zt = Object.getPrototypeOf, Pt = Object.getOwnPropertyDescriptor, T = Object.freeze, A = Object.seal, Bt = Object.create, st = typeof Reflect < "u" && Reflect, ae = st.apply, ke = st.construct;

ae || (ae = function(a, n, o) {
    return a.apply(n, o);
}), T || (T = function(a) {
    return a;
}), A || (A = function(a) {
    return a;
}), ke || (ke = function(a, n) {
    return Re(a, x(n));
});

var mt, jt = S(Array.prototype.forEach), ft = S(Array.prototype.pop), V = S(Array.prototype.push), ie = S(String.prototype.toLowerCase), Le = S(String.prototype.toString), pt = S(String.prototype.match), R = S(String.prototype.replace), Gt = S(String.prototype.indexOf), Wt = S(String.prototype.trim), b = S(RegExp.prototype.test), Ce = (mt = TypeError, 
function() {
    for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++) n[o] = arguments[o];
    return ke(mt, n);
});

function S(a) {
    return function(n) {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), p = 1; p < o; p++) c[p - 1] = arguments[p];
        return ae(a, n, c);
    };
}

function i(a, n, o) {
    var c;
    o = (c = o) !== null && c !== void 0 ? c : ie, ut && ut(a, null);
    for (var p = n.length; p--; ) {
        var _ = n[p];
        if (typeof _ == "string") {
            var k = o(_);
            k !== _ && (Ht(n) || (n[p] = k), _ = k);
        }
        a[_] = !0;
    }
    return a;
}

function F(a) {
    var n, o = Bt(null);
    for (n in a) ae(Ut, a, [ n ]) === !0 && (o[n] = a[n]);
    return o;
}

function le(a, n) {
    for (;a !== null; ) {
        var o = Pt(a, n);
        if (o) {
            if (o.get) return S(o.get);
            if (typeof o.value == "function") return S(o.value);
        }
        a = zt(a);
    }
    return function(c) {
        return null;
    };
}

var dt = T([ "a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr" ]), De = T([ "svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern" ]), Me = T([ "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence" ]), qt = T([ "animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use" ]), Ie = T([ "math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover" ]), Yt = T([ "maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none" ]), ht = T([ "#text" ]), gt = T([ "accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot" ]), Fe = T([ "accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan" ]), yt = T([ "accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns" ]), ce = T([ "xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink" ]), $t = A(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Kt = A(/<%[\w\W]*|[\w\W]*%>/gm), Vt = A(/\${[\w\W]*}/gm), Xt = A(/^data-[\-\w.\u00B7-\uFFFF]/), Zt = A(/^aria-[\-\w]+$/), Jt = A(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Qt = A(/^(?:\w+script|data):/i), en = A(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), tn = A(/^html$/i), nn = A(/^[a-z][.\w]*(-[.\w]+)+$/i), rn = function() {
    return typeof window > "u" ? null : window;
}, on = function a() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rn(), o = function(e) {
        return a(e);
    };
    if (o.version = "2.5.6", o.removed = [], !n || !n.document || n.document.nodeType !== 9) return o.isSupported = !1, 
    o;
    var c = n.document, p = n.document, _ = n.DocumentFragment, k = n.HTMLTemplateElement, U = n.Node, Ue = n.Element, q = n.NodeFilter, He = n.NamedNodeMap, bt = He === void 0 ? n.NamedNodeMap || n.MozNamedAttrMap : He, vt = n.HTMLFormElement, Tt = n.DOMParser, X = n.trustedTypes, Z = Ue.prototype, Nt = le(Z, "cloneNode"), Et = le(Z, "nextSibling"), At = le(Z, "childNodes"), ue = le(Z, "parentNode");
    if (typeof k == "function") {
        var se = p.createElement("template");
        se.content && se.content.ownerDocument && (p = se.content.ownerDocument);
    }
    var w = function(e, t) {
        if (M(e) !== "object" || typeof e.createPolicy != "function") return null;
        var r = null, l = "data-tt-policy-suffix";
        t.currentScript && t.currentScript.hasAttribute(l) && (r = t.currentScript.getAttribute(l));
        var y = "dompurify" + (r ? "#" + r : "");
        try {
            return e.createPolicy(y, {
                createHTML: function(s) {
                    return s;
                },
                createScriptURL: function(s) {
                    return s;
                }
            });
        } catch {
            return null;
        }
    }(X, c), me = w ? w.createHTML("") : "", J = p, fe = J.implementation, St = J.createNodeIterator, _t = J.createDocumentFragment, wt = J.getElementsByTagName, xt = c.importNode, ze = {};
    try {
        ze = F(p).documentMode ? p.documentMode : {};
    } catch {}
    var O = {};
    o.isSupported = typeof ue == "function" && fe && fe.createHTMLDocument !== void 0 && ze !== 9;
    var H, d, pe = $t, de = Kt, he = Vt, Rt = Xt, Ot = Zt, kt = Qt, Pe = en, Lt = nn, ge = Jt, h = null, Be = i({}, [].concat(x(dt), x(De), x(Me), x(Ie), x(ht))), g = null, je = i({}, [].concat(x(gt), x(Fe), x(yt), x(ce))), m = Object.seal(Object.create(null, {
        tagNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        },
        attributeNameCheck: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: !0,
            configurable: !1,
            enumerable: !0,
            value: !1
        }
    })), Y = null, ye = null, Ge = !0, be = !0, We = !1, qe = !0, z = !1, ve = !0, I = !1, Te = !1, Ne = !1, P = !1, Q = !1, ee = !1, Ye = !0, $e = !1, Ee = !0, $ = !1, B = {}, j = null, Ke = i({}, [ "annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp" ]), Ve = null, Xe = i({}, [ "audio", "video", "img", "source", "image", "track" ]), Ae = null, Ze = i({}, [ "alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns" ]), te = "http://www.w3.org/1998/Math/MathML", ne = "http://www.w3.org/2000/svg", L = "http://www.w3.org/1999/xhtml", G = L, Je = !1, Se = null, Ct = i({}, [ te, ne, L ], Le), Dt = [ "application/xhtml+xml", "text/html" ], W = null, Mt = p.createElement("form"), Qe = function(e) {
        return e instanceof RegExp || e instanceof Function;
    }, _e = function(e) {
        W && W === e || (e && M(e) === "object" || (e = {}), e = F(e), H = H = Dt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, 
        d = H === "application/xhtml+xml" ? Le : ie, h = "ALLOWED_TAGS" in e ? i({}, e.ALLOWED_TAGS, d) : Be, 
        g = "ALLOWED_ATTR" in e ? i({}, e.ALLOWED_ATTR, d) : je, Se = "ALLOWED_NAMESPACES" in e ? i({}, e.ALLOWED_NAMESPACES, Le) : Ct, 
        Ae = "ADD_URI_SAFE_ATTR" in e ? i(F(Ze), e.ADD_URI_SAFE_ATTR, d) : Ze, Ve = "ADD_DATA_URI_TAGS" in e ? i(F(Xe), e.ADD_DATA_URI_TAGS, d) : Xe, 
        j = "FORBID_CONTENTS" in e ? i({}, e.FORBID_CONTENTS, d) : Ke, Y = "FORBID_TAGS" in e ? i({}, e.FORBID_TAGS, d) : {}, 
        ye = "FORBID_ATTR" in e ? i({}, e.FORBID_ATTR, d) : {}, B = "USE_PROFILES" in e && e.USE_PROFILES, 
        Ge = e.ALLOW_ARIA_ATTR !== !1, be = e.ALLOW_DATA_ATTR !== !1, We = e.ALLOW_UNKNOWN_PROTOCOLS || !1, 
        qe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, 
        ve = e.SAFE_FOR_XML !== !1, I = e.WHOLE_DOCUMENT || !1, P = e.RETURN_DOM || !1, 
        Q = e.RETURN_DOM_FRAGMENT || !1, ee = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, 
        Ye = e.SANITIZE_DOM !== !1, $e = e.SANITIZE_NAMED_PROPS || !1, Ee = e.KEEP_CONTENT !== !1, 
        $ = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || ge, G = e.NAMESPACE || L, 
        m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Qe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), 
        e.CUSTOM_ELEMENT_HANDLING && Qe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), 
        e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), 
        z && (be = !1), Q && (P = !0), B && (h = i({}, x(ht)), g = [], B.html === !0 && (i(h, dt), 
        i(g, gt)), B.svg === !0 && (i(h, De), i(g, Fe), i(g, ce)), B.svgFilters === !0 && (i(h, Me), 
        i(g, Fe), i(g, ce)), B.mathMl === !0 && (i(h, Ie), i(g, yt), i(g, ce))), 
        e.ADD_TAGS && (h === Be && (h = F(h)), i(h, e.ADD_TAGS, d)), e.ADD_ATTR && (g === je && (g = F(g)), 
        i(g, e.ADD_ATTR, d)), e.ADD_URI_SAFE_ATTR && i(Ae, e.ADD_URI_SAFE_ATTR, d), 
        e.FORBID_CONTENTS && (j === Ke && (j = F(j)), i(j, e.FORBID_CONTENTS, d)), 
        Ee && (h["#text"] = !0), I && i(h, [ "html", "head", "body" ]), h.table && (i(h, [ "tbody" ]), 
        delete Y.tbody), T && T(e), W = e);
    }, et = i({}, [ "mi", "mo", "mn", "ms", "mtext" ]), tt = i({}, [ "foreignobject", "annotation-xml" ]), It = i({}, [ "title", "style", "font", "a", "script" ]), re = i({}, De);
    i(re, Me), i(re, qt);
    var we = i({}, Ie);
    i(we, Yt);
    var E = function(e) {
        V(o.removed, {
            element: e
        });
        try {
            e.parentNode.removeChild(e);
        } catch {
            try {
                e.outerHTML = me;
            } catch {
                e.remove();
            }
        }
    }, oe = function(e, t) {
        try {
            V(o.removed, {
                attribute: t.getAttributeNode(e),
                from: t
            });
        } catch {
            V(o.removed, {
                attribute: null,
                from: t
            });
        }
        if (t.removeAttribute(e), e === "is" && !g[e]) if (P || Q) try {
            E(t);
        } catch {} else try {
            t.setAttribute(e, "");
        } catch {}
    }, nt = function(e) {
        var t, r;
        if (Ne) e = "<remove></remove>" + e; else {
            var l = pt(e, /^[\r\n\t ]+/);
            r = l && l[0];
        }
        H === "application/xhtml+xml" && G === L && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
        var y = w ? w.createHTML(e) : e;
        if (G === L) try {
            t = new Tt().parseFromString(y, H);
        } catch {}
        if (!t || !t.documentElement) {
            t = fe.createDocument(G, "template", null);
            try {
                t.documentElement.innerHTML = Je ? me : y;
            } catch {}
        }
        var s = t.body || t.documentElement;
        return e && r && s.insertBefore(p.createTextNode(r), s.childNodes[0] || null), 
        G === L ? wt.call(t, I ? "html" : "body")[0] : I ? t.documentElement : s;
    }, rt = function(e) {
        return St.call(e.ownerDocument || e, e, q.SHOW_ELEMENT | q.SHOW_COMMENT | q.SHOW_TEXT | q.SHOW_PROCESSING_INSTRUCTION | q.SHOW_CDATA_SECTION, null, !1);
    }, ot = function(e) {
        return e instanceof vt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof bt) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
    }, K = function(e) {
        return M(U) === "object" ? e instanceof U : e && M(e) === "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string";
    }, C = function(e, t, r) {
        O[e] && jt(O[e], function(l) {
            l.call(o, t, r, W);
        });
    }, at = function(e) {
        var t;
        if (C("beforeSanitizeElements", e, null), ot(e) || b(/[\u0080-\uFFFF]/, e.nodeName)) return E(e), 
        !0;
        var r = d(e.nodeName);
        if (C("uponSanitizeElement", e, {
            tagName: r,
            allowedTags: h
        }), e.hasChildNodes() && !K(e.firstElementChild) && (!K(e.content) || !K(e.content.firstElementChild)) && b(/<[/\w]/g, e.innerHTML) && b(/<[/\w]/g, e.textContent) || r === "select" && b(/<template/i, e.innerHTML) || e.nodeType === 7 || ve && e.nodeType === 8 && b(/<[/\w]/g, e.data)) return E(e), 
        !0;
        if (!h[r] || Y[r]) {
            if (!Y[r] && lt(r) && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, r) || m.tagNameCheck instanceof Function && m.tagNameCheck(r))) return !1;
            if (Ee && !j[r]) {
                var l = ue(e) || e.parentNode, y = At(e) || e.childNodes;
                if (y && l) for (var s = y.length - 1; s >= 0; --s) {
                    var v = Nt(y[s], !0);
                    v.__removalCount = (e.__removalCount || 0) + 1, l.insertBefore(v, Et(e));
                }
            }
            return E(e), !0;
        }
        return e instanceof Ue && !function(N) {
            var f = ue(N);
            f && f.tagName || (f = {
                namespaceURI: G,
                tagName: "template"
            });
            var u = ie(N.tagName), D = ie(f.tagName);
            return !!Se[N.namespaceURI] && (N.namespaceURI === ne ? f.namespaceURI === L ? u === "svg" : f.namespaceURI === te ? u === "svg" && (D === "annotation-xml" || et[D]) : !!re[u] : N.namespaceURI === te ? f.namespaceURI === L ? u === "math" : f.namespaceURI === ne ? u === "math" && tt[D] : !!we[u] : N.namespaceURI === L ? !(f.namespaceURI === ne && !tt[D]) && !(f.namespaceURI === te && !et[D]) && !we[u] && (It[u] || !re[u]) : !(H !== "application/xhtml+xml" || !Se[N.namespaceURI]));
        }(e) ? (E(e), !0) : r !== "noscript" && r !== "noembed" && r !== "noframes" || !b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (z && e.nodeType === 3 && (t = e.textContent, 
        t = R(t, pe, " "), t = R(t, de, " "), t = R(t, he, " "), e.textContent !== t && (V(o.removed, {
            element: e.cloneNode()
        }), e.textContent = t)), C("afterSanitizeElements", e, null), !1) : (E(e), 
        !0);
    }, it = function(e, t, r) {
        if (Ye && (t === "id" || t === "name") && (r in p || r in Mt)) return !1;
        if (!(be && !ye[t] && b(Rt, t))) {
            if (!(Ge && b(Ot, t))) {
                if (!g[t] || ye[t]) {
                    if (!(lt(e) && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && b(m.attributeNameCheck, t) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(t)) || t === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, r) || m.tagNameCheck instanceof Function && m.tagNameCheck(r)))) return !1;
                } else if (!Ae[t]) {
                    if (!b(ge, R(r, Pe, ""))) {
                        if ((t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || Gt(r, "data:") !== 0 || !Ve[e]) && !(We && !b(kt, R(r, Pe, "")))) {
                            if (r) return !1;
                        }
                    }
                }
            }
        }
        return !0;
    }, lt = function(e) {
        return e !== "annotation-xml" && pt(e, Lt);
    }, ct = function(e) {
        var t, r, l, y;
        C("beforeSanitizeAttributes", e, null);
        var s = e.attributes;
        if (s) {
            var v = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: g
            };
            for (y = s.length; y--; ) {
                var N = t = s[y], f = N.name, u = N.namespaceURI;
                if (r = f === "value" ? t.value : Wt(t.value), l = d(f), v.attrName = l, 
                v.attrValue = r, v.keepAttr = !0, v.forceKeepAttr = void 0, C("uponSanitizeAttribute", e, v), 
                r = v.attrValue, ve && b(/((--!?|])>)|<\/(style|title)/i, r)) oe(f, e); else if (!v.forceKeepAttr && (oe(f, e), 
                v.keepAttr)) if (qe || !b(/\/>/i, r)) {
                    z && (r = R(r, pe, " "), r = R(r, de, " "), r = R(r, he, " "));
                    var D = d(e.nodeName);
                    if (it(D, l, r)) {
                        if (!$e || l !== "id" && l !== "name" || (oe(f, e), r = "user-content-" + r), 
                        w && M(X) === "object" && typeof X.getAttributeType == "function" && !u) switch (X.getAttributeType(D, l)) {
                          case "TrustedHTML":
                            r = w.createHTML(r);
                            break;

                          case "TrustedScriptURL":
                            r = w.createScriptURL(r);
                        }
                        try {
                            u ? e.setAttributeNS(u, f, r) : e.setAttribute(f, r), 
                            ot(e) ? E(e) : ft(o.removed);
                        } catch {}
                    }
                } else oe(f, e);
            }
            C("afterSanitizeAttributes", e, null);
        }
    }, Ft = function e(t) {
        var r, l = rt(t);
        for (C("beforeSanitizeShadowDOM", t, null); r = l.nextNode(); ) C("uponSanitizeShadowNode", r, null), 
        at(r) || (r.content instanceof _ && e(r.content), ct(r));
        C("afterSanitizeShadowDOM", t, null);
    };
    return o.sanitize = function(e) {
        var t, r, l, y, s, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if ((Je = !e) && (e = "\x3c!--\x3e"), typeof e != "string" && !K(e)) {
            if (typeof e.toString != "function") throw Ce("toString is not a function");
            if (typeof (e = e.toString()) != "string") throw Ce("dirty is not a string, aborting");
        }
        if (!o.isSupported) {
            if (M(n.toStaticHTML) === "object" || typeof n.toStaticHTML == "function") {
                if (typeof e == "string") return n.toStaticHTML(e);
                if (K(e)) return n.toStaticHTML(e.outerHTML);
            }
            return e;
        }
        if (Te || _e(v), o.removed = [], typeof e == "string" && ($ = !1), $) {
            if (e.nodeName) {
                var N = d(e.nodeName);
                if (!h[N] || Y[N]) throw Ce("root node is forbidden and cannot be sanitized in-place");
            }
        } else if (e instanceof U) (r = (t = nt("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType === 1 && r.nodeName === "BODY" || r.nodeName === "HTML" ? t = r : t.appendChild(r); else {
            if (!P && !z && !I && e.indexOf("<") === -1) return w && ee ? w.createHTML(e) : e;
            if (!(t = nt(e))) return P ? null : ee ? me : "";
        }
        t && Ne && E(t.firstChild);
        for (var f = rt($ ? e : t); l = f.nextNode(); ) l.nodeType === 3 && l === y || at(l) || (l.content instanceof _ && Ft(l.content), 
        ct(l), y = l);
        if (y = null, $) return e;
        if (P) {
            if (Q) for (s = _t.call(t.ownerDocument); t.firstChild; ) s.appendChild(t.firstChild); else s = t;
            return (g.shadowroot || g.shadowrootmod) && (s = xt.call(c, s, !0)), 
            s;
        }
        var u = I ? t.outerHTML : t.innerHTML;
        return I && h["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && b(tn, t.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + u), z && (u = R(u, pe, " "), u = R(u, de, " "), u = R(u, he, " ")), w && ee ? w.createHTML(u) : u;
    }, o.setConfig = function(e) {
        _e(e), Te = !0;
    }, o.clearConfig = function() {
        W = null, Te = !1;
    }, o.isValidAttribute = function(e, t, r) {
        W || _e({});
        var l = d(e), y = d(t);
        return it(l, y, r);
    }, o.addHook = function(e, t) {
        typeof t == "function" && (O[e] = O[e] || [], V(O[e], t));
    }, o.removeHook = function(e) {
        if (O[e]) return ft(O[e]);
    }, o.removeHooks = function(e) {
        O[e] && (O[e] = []);
    }, o.removeAllHooks = function() {
        O = {};
    }, o;
}();

export {
    on as default
};