function n(a) {
    return new RegExp("^((" + a.join(")|(") + "))\\b");
}

var m = [ "Clamp", "Constructor", "EnforceRange", "Exposed", "ImplicitThis", "Global", "PrimaryGlobal", "LegacyArrayClass", "LegacyUnenumerableNamedProperties", "LenientThis", "NamedConstructor", "NewObject", "NoInterfaceObject", "OverrideBuiltins", "PutForwards", "Replaceable", "SameObject", "TreatNonObjectAsNull", "TreatNullAs", "EmptyString", "Unforgeable", "Unscopeable" ], y = n(m), s = [ "unsigned", "short", "long", "unrestricted", "float", "double", "boolean", "byte", "octet", "Promise", "ArrayBuffer", "DataView", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint16Array", "Uint32Array", "Uint8ClampedArray", "Float32Array", "Float64Array", "ByteString", "DOMString", "USVString", "sequence", "object", "RegExp", "Error", "DOMException", "FrozenArray", "any", "void" ], b = n(s), u = [ "attribute", "callback", "const", "deleter", "dictionary", "enum", "getter", "implements", "inherit", "interface", "iterable", "legacycaller", "maplike", "partial", "required", "serializer", "setlike", "setter", "static", "stringifier", "typedef", "optional", "readonly", "or" ], p = n(u), f = [ "true", "false", "Infinity", "NaN", "null" ], h = n(f), A = n([ "callback", "dictionary", "enum", "interface" ]), g = n([ "typedef" ]), D = /^[:<=>?]/, k = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/, E = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/, d = /^_?[A-Za-z][0-9A-Z_a-z-]*/, C = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/, N = /^"[^"]*"/, T = /^\/\*.*?\*\//, w = /^\/\*.*/, S = /^.*?\*\//;

const U = {
    name: "webidl",
    startState: function() {
        return {
            inComment: !1,
            lastToken: "",
            startDef: !1,
            endDef: !1
        };
    },
    token: function(a, r) {
        var i = function(t, e) {
            if (t.eatSpace()) return null;
            if (e.inComment) return t.match(S) ? (e.inComment = !1, "comment") : (t.skipToEnd(), 
            "comment");
            if (t.match("//")) return t.skipToEnd(), "comment";
            if (t.match(T)) return "comment";
            if (t.match(w)) return e.inComment = !0, "comment";
            if (t.match(/^-?[0-9\.]/, !1) && (t.match(k) || t.match(E))) return "number";
            if (t.match(N)) return "string";
            if (e.startDef && t.match(d)) return "def";
            if (e.endDef && t.match(C)) return e.endDef = !1, "def";
            if (t.match(p)) return "keyword";
            if (t.match(b)) {
                var c = e.lastToken, l = (t.match(/^\s*(.+?)\b/, !1) || [])[1];
                return c === ":" || c === "implements" || l === "implements" || l === "=" ? "builtin" : "type";
            }
            return t.match(y) ? "builtin" : t.match(h) ? "atom" : t.match(d) ? "variable" : t.match(D) ? "operator" : (t.next(), 
            null);
        }(a, r);
        if (i) {
            var o = a.current();
            r.lastToken = o, i === "keyword" ? (r.startDef = A.test(o), r.endDef = r.endDef || g.test(o)) : r.startDef = !1;
        }
        return i;
    },
    languageData: {
        autocomplete: m.concat(s).concat(u).concat(f)
    }
};

export {
    U as webIDL
};