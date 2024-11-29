function o(a) {
    for (var i = {}, u = a.split(" "), I = 0; I < u.length; ++I) i[u[I]] = !0;
    return i;
}

const E = {
    keywords: o("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),
    cmipVerbs: o("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),
    compareTypes: o("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),
    status: o("current deprecated mandatory obsolete"),
    tags: o("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),
    storage: o("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),
    modifier: o("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),
    accessTypes: o("not-accessible accessible-for-notify read-only read-create read-write"),
    multiLineStrings: !0
};

function P(a) {
    var i, u = a.keywords || E.keywords, I = a.cmipVerbs || E.cmipVerbs, C = a.compareTypes || E.compareTypes, d = a.status || E.status, R = a.tags || E.tags, g = a.storage || E.storage, f = a.modifier || E.modifier, D = a.accessTypes || E.accessTypes, y = a.multiLineStrings || E.multiLineStrings, L = a.indentStatements !== !1, m = /[\|\^]/;
    function U(e, t) {
        var n, r = e.next();
        if (r == '"' || r == "'") return t.tokenize = (n = r, function(N, M) {
            for (var p, A = !1, c = !1; (p = N.next()) != null; ) {
                if (p == n && !A) {
                    var S = N.peek();
                    S && ((S = S.toLowerCase()) != "b" && S != "h" && S != "o" || N.next()), 
                    c = !0;
                    break;
                }
                A = !A && p == "\\";
            }
            return (c || !A && !y) && (M.tokenize = null), "string";
        }), t.tokenize(e, t);
        if (/[\[\]\(\){}:=,;]/.test(r)) return i = r, "punctuation";
        if (r == "-" && e.eat("-")) return e.skipToEnd(), "comment";
        if (/\d/.test(r)) return e.eatWhile(/[\w\.]/), "number";
        if (m.test(r)) return e.eatWhile(m), "operator";
        e.eatWhile(/[\w\-]/);
        var s = e.current();
        return u.propertyIsEnumerable(s) ? "keyword" : I.propertyIsEnumerable(s) ? "variableName" : C.propertyIsEnumerable(s) ? "atom" : d.propertyIsEnumerable(s) ? "comment" : R.propertyIsEnumerable(s) ? "typeName" : g.propertyIsEnumerable(s) || f.propertyIsEnumerable(s) || D.propertyIsEnumerable(s) ? "modifier" : "variableName";
    }
    function O(e, t, n, r, s) {
        this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = s;
    }
    function l(e, t, n) {
        var r = e.indented;
        return e.context && e.context.type == "statement" && (r = e.context.indented), 
        e.context = new O(r, t, n, null, e.context);
    }
    function T(e) {
        var t = e.context.type;
        return t != ")" && t != "]" && t != "}" || (e.indented = e.context.indented), 
        e.context = e.context.prev;
    }
    return {
        name: "asn1",
        startState: function() {
            return {
                tokenize: null,
                context: new O(-2, 0, "top", !1),
                indented: 0,
                startOfLine: !0
            };
        },
        token: function(e, t) {
            var n = t.context;
            if (e.sol() && (n.align == null && (n.align = !1), t.indented = e.indentation(), 
            t.startOfLine = !0), e.eatSpace()) return null;
            i = null;
            var r = (t.tokenize || U)(e, t);
            if (r == "comment") return r;
            if (n.align == null && (n.align = !0), i != ";" && i != ":" && i != "," || n.type != "statement") if (i == "{") l(t, e.column(), "}"); else if (i == "[") l(t, e.column(), "]"); else if (i == "(") l(t, e.column(), ")"); else if (i == "}") {
                for (;n.type == "statement"; ) n = T(t);
                for (n.type == "}" && (n = T(t)); n.type == "statement"; ) n = T(t);
            } else i == n.type ? T(t) : L && ((n.type == "}" || n.type == "top") && i != ";" || n.type == "statement" && i == "newstatement") && l(t, e.column(), "statement"); else T(t);
            return t.startOfLine = !1, r;
        },
        languageData: {
            indentOnInput: /^\s*[{}]$/,
            commentTokens: {
                line: "--"
            }
        }
    };
}

export {
    P as asn1
};