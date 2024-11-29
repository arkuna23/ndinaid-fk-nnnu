import {
    d as he,
    aa as ye,
    p as ve,
    r as H,
    U as Ee,
    f as Ae,
    j as we,
    o as Z,
    C as P,
    l as N,
    t as V,
    A as J,
    k as L,
    a as w,
    c as Ne,
    F as xe,
    y as Se,
    v as ke,
    B as Re,
    m as Oe,
    e3 as Ce,
    Z as Ie,
    cn as Te,
    J as Me,
    M as je,
    s as $e,
    aU as Be,
    a9 as ze,
    __tla as Ze
} from "./index-6c08ea4c.js";

import {
    a as Le
} from "./tree-05ea8e09.js";

import {
    p as Ue,
    __tla as De
} from "./index-7fb09ff8.js";

import {
    H as x,
    __tla as Pe
} from "./index-234b0463.js";

import {
    j as F
} from "./java-1b38c151.js";

import {
    E as Fe,
    __tla as qe
} from "./index-ee838148.js";

let le, Ge = Promise.all([ (() => {
    try {
        return Ze;
    } catch {}
})(), (() => {
    try {
        return De;
    } catch {}
})(), (() => {
    try {
        return Pe;
    } catch {}
})(), (() => {
    try {
        return qe;
    } catch {}
})() ]).then(async () => {
    const W = "[A-Za-z$_][0-9A-Za-z$_]*", ue = [ "as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends" ], de = [ "true", "false", "null", "undefined", "NaN", "Infinity" ], Q = [ "Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly" ], X = [ "Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError" ], Y = [ "setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape" ], ge = [ "arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global" ], me = [].concat(Y, Q, X);
    function be(e) {
        const a = e.regex, n = W, E = "<>", v = "</>", c = {
            begin: /<[A-Za-z0-9\\._:-]+/,
            end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag: (A, k) => {
                const R = A[0].length + A.index, O = A.input[R];
                if (O === "<" || O === ",") return void k.ignoreMatch();
                let C;
                O === ">" && (((z, {
                    after: G
                }) => {
                    const K = "</" + z[0].slice(1);
                    return z.input.indexOf(K, G) !== -1;
                })(A, {
                    after: R
                }) || k.ignoreMatch());
                const B = A.input.substring(R);
                ((C = B.match(/^\s*=/)) || (C = B.match(/^\s+extends\s+/)) && C.index === 0) && k.ignoreMatch();
            }
        }, s = {
            $pattern: W,
            keyword: ue,
            literal: de,
            built_in: me,
            "variable.language": ge
        }, h = "[0-9](_?[0-9])*", d = `\\.(${h})`, y = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
            className: "number",
            variants: [ {
                begin: `(\\b(${y})((${d})|\\.)?|(${d}))[eE][+-]?(${h})\\b`
            }, {
                begin: `\\b(${y})\\b((${d})\\b|\\.)?|(${d})\\b`
            }, {
                begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
            }, {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            }, {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            }, {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            }, {
                begin: "\\b0[0-7]+n?\\b"
            } ],
            relevance: 0
        }, t = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: s,
            contains: []
        }, r = {
            begin: "html`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "xml"
            }
        }, b = {
            begin: "css`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "css"
            }
        }, g = {
            begin: "gql`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "graphql"
            }
        }, o = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [ e.BACKSLASH_ESCAPE, t ]
        }, m = {
            className: "comment",
            variants: [ e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                relevance: 0,
                contains: [ {
                    begin: "(?=@[A-Za-z]+)",
                    relevance: 0,
                    contains: [ {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }, {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: !0,
                        excludeBegin: !0,
                        relevance: 0
                    }, {
                        className: "variable",
                        begin: n + "(?=\\s*(-)|$)",
                        endsParent: !0,
                        relevance: 0
                    }, {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    } ]
                } ]
            }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE ]
        }, u = [ e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, b, g, o, {
            match: /\$\d+/
        }, f ];
        t.contains = u.concat({
            begin: /\{/,
            end: /\}/,
            keywords: s,
            contains: [ "self" ].concat(u)
        });
        const _ = [].concat(m, t.contains), i = _.concat([ {
            begin: /\(/,
            end: /\)/,
            keywords: s,
            contains: [ "self" ].concat(_)
        } ]), l = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: s,
            contains: i
        }, I = {
            variants: [ {
                match: [ /class/, /\s+/, n, /\s+/, /extends/, /\s+/, a.concat(n, "(", a.concat(/\./, n), ")*") ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            }, {
                match: [ /class/, /\s+/, n ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            } ]
        }, p = {
            relevance: 0,
            match: a.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
            className: "title.class",
            keywords: {
                _: [ ...Q, ...X ]
            }
        }, D = {
            variants: [ {
                match: [ /function/, /\s+/, n, /(?=\s*\()/ ]
            }, {
                match: [ /function/, /\s*(?=\()/ ]
            } ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            label: "func.def",
            contains: [ l ],
            illegal: /%/
        }, T = {
            match: a.concat(/\b/, (S = [ ...Y, "super", "import" ], a.concat("(?!", S.join("|"), ")")), n, a.lookahead(/\(/)),
            className: "title.function",
            relevance: 0
        };
        var S;
        const M = {
            begin: a.concat(/\./, a.lookahead(a.concat(n, /(?![0-9A-Za-z$_(])/))),
            end: n,
            excludeBegin: !0,
            keywords: "prototype",
            className: "property",
            relevance: 0
        }, j = {
            match: [ /get|set/, /\s+/, n, /(?=\()/ ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [ {
                begin: /\(\)/
            }, l ]
        }, $ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", q = {
            match: [ /const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, a.lookahead($) ],
            keywords: "async",
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [ l ]
        };
        return {
            name: "JavaScript",
            aliases: [ "js", "jsx", "mjs", "cjs" ],
            keywords: s,
            exports: {
                PARAMS_CONTAINS: i,
                CLASS_REFERENCE: p
            },
            illegal: /#(?![$_A-z])/,
            contains: [ e.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }), {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, b, g, o, m, {
                match: /\$\d+/
            }, f, p, {
                className: "attr",
                begin: n + a.lookahead(":"),
                relevance: 0
            }, q, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [ m, e.REGEXP_MODE, {
                    className: "function",
                    begin: $,
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [ {
                        className: "params",
                        variants: [ {
                            begin: e.UNDERSCORE_IDENT_RE,
                            relevance: 0
                        }, {
                            className: null,
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: s,
                            contains: i
                        } ]
                    } ]
                }, {
                    begin: /,/,
                    relevance: 0
                }, {
                    match: /\s+/,
                    relevance: 0
                }, {
                    variants: [ {
                        begin: E,
                        end: v
                    }, {
                        match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                    }, {
                        begin: c.begin,
                        "on:begin": c.isTrulyOpeningTag,
                        end: c.end
                    } ],
                    subLanguage: "xml",
                    contains: [ {
                        begin: c.begin,
                        end: c.end,
                        skip: !0,
                        contains: [ "self" ]
                    } ]
                } ]
            }, D, {
                beginKeywords: "while if switch catch for"
            }, {
                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                label: "func.def",
                contains: [ l, e.inherit(e.TITLE_MODE, {
                    begin: n,
                    className: "title.function"
                }) ]
            }, {
                match: /\.\.\./,
                relevance: 0
            }, M, {
                match: "\\$" + n,
                relevance: 0
            }, {
                match: [ /\bconstructor(?=\s*\()/ ],
                className: {
                    1: "title.function"
                },
                contains: [ l ]
            }, T, {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: "variable.constant"
            }, I, j, {
                match: /\$[(.]/
            } ]
        };
    }
    function _e(e) {
        const a = e.regex, n = e.COMMENT("--", "$"), E = [ "true", "false", "unknown" ], v = [ "bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary" ], c = [ "abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket" ], s = [ "create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first" ], h = c, d = [ "abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view" ].filter(f => !c.includes(f)), y = {
            begin: a.concat(/\b/, a.either(...h), /\s*\(/),
            relevance: 0,
            keywords: {
                built_in: h
            }
        };
        return {
            name: "SQL",
            case_insensitive: !0,
            illegal: /[{}]|<\//,
            keywords: {
                $pattern: /\b[\w\.]+/,
                keyword: function(f, {
                    exceptions: t,
                    when: r
                } = {}) {
                    const b = r;
                    return t = t || [], f.map(g => g.match(/\|\d+$/) || t.includes(g) ? g : b(g) ? `${g}|0` : g);
                }(d, {
                    when: f => f.length < 3
                }),
                literal: E,
                type: v,
                built_in: [ "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp" ]
            },
            contains: [ {
                begin: a.either(...s),
                relevance: 0,
                keywords: {
                    $pattern: /[\w\.]+/,
                    keyword: d.concat(s),
                    literal: E,
                    type: v
                }
            }, {
                className: "type",
                begin: a.either("double precision", "large object", "with timezone", "without timezone")
            }, y, {
                className: "variable",
                begin: /@[a-z0-9][a-z0-9_]*/
            }, {
                className: "string",
                variants: [ {
                    begin: /'/,
                    end: /'/,
                    contains: [ {
                        begin: /''/
                    } ]
                } ]
            }, {
                begin: /"/,
                end: /"/,
                contains: [ {
                    begin: /""/
                } ]
            }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                className: "operator",
                begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                relevance: 0
            } ]
        };
    }
    const U = "[A-Za-z$_][0-9A-Za-z$_]*", ee = [ "as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends" ], ae = [ "true", "false", "null", "undefined", "NaN", "Infinity" ], ne = [ "Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly" ], te = [ "Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError" ], re = [ "setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape" ], se = [ "arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global" ], ie = [].concat(re, ne, te);
    function pe(e) {
        const a = e.regex, n = U, E = "<>", v = "</>", c = {
            begin: /<[A-Za-z0-9\\._:-]+/,
            end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag: (A, k) => {
                const R = A[0].length + A.index, O = A.input[R];
                if (O === "<" || O === ",") return void k.ignoreMatch();
                let C;
                O === ">" && (((z, {
                    after: G
                }) => {
                    const K = "</" + z[0].slice(1);
                    return z.input.indexOf(K, G) !== -1;
                })(A, {
                    after: R
                }) || k.ignoreMatch());
                const B = A.input.substring(R);
                ((C = B.match(/^\s*=/)) || (C = B.match(/^\s+extends\s+/)) && C.index === 0) && k.ignoreMatch();
            }
        }, s = {
            $pattern: U,
            keyword: ee,
            literal: ae,
            built_in: ie,
            "variable.language": se
        }, h = "[0-9](_?[0-9])*", d = `\\.(${h})`, y = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
            className: "number",
            variants: [ {
                begin: `(\\b(${y})((${d})|\\.)?|(${d}))[eE][+-]?(${h})\\b`
            }, {
                begin: `\\b(${y})\\b((${d})\\b|\\.)?|(${d})\\b`
            }, {
                begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
            }, {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            }, {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            }, {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            }, {
                begin: "\\b0[0-7]+n?\\b"
            } ],
            relevance: 0
        }, t = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: s,
            contains: []
        }, r = {
            begin: "html`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "xml"
            }
        }, b = {
            begin: "css`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "css"
            }
        }, g = {
            begin: "gql`",
            end: "",
            starts: {
                end: "`",
                returnEnd: !1,
                contains: [ e.BACKSLASH_ESCAPE, t ],
                subLanguage: "graphql"
            }
        }, o = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [ e.BACKSLASH_ESCAPE, t ]
        }, m = {
            className: "comment",
            variants: [ e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                relevance: 0,
                contains: [ {
                    begin: "(?=@[A-Za-z]+)",
                    relevance: 0,
                    contains: [ {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }, {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: !0,
                        excludeBegin: !0,
                        relevance: 0
                    }, {
                        className: "variable",
                        begin: n + "(?=\\s*(-)|$)",
                        endsParent: !0,
                        relevance: 0
                    }, {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    } ]
                } ]
            }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE ]
        }, u = [ e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, b, g, o, {
            match: /\$\d+/
        }, f ];
        t.contains = u.concat({
            begin: /\{/,
            end: /\}/,
            keywords: s,
            contains: [ "self" ].concat(u)
        });
        const _ = [].concat(m, t.contains), i = _.concat([ {
            begin: /\(/,
            end: /\)/,
            keywords: s,
            contains: [ "self" ].concat(_)
        } ]), l = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: s,
            contains: i
        }, I = {
            variants: [ {
                match: [ /class/, /\s+/, n, /\s+/, /extends/, /\s+/, a.concat(n, "(", a.concat(/\./, n), ")*") ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            }, {
                match: [ /class/, /\s+/, n ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            } ]
        }, p = {
            relevance: 0,
            match: a.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
            className: "title.class",
            keywords: {
                _: [ ...ne, ...te ]
            }
        }, D = {
            variants: [ {
                match: [ /function/, /\s+/, n, /(?=\s*\()/ ]
            }, {
                match: [ /function/, /\s*(?=\()/ ]
            } ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            label: "func.def",
            contains: [ l ],
            illegal: /%/
        }, T = {
            match: a.concat(/\b/, (S = [ ...re, "super", "import" ], a.concat("(?!", S.join("|"), ")")), n, a.lookahead(/\(/)),
            className: "title.function",
            relevance: 0
        };
        var S;
        const M = {
            begin: a.concat(/\./, a.lookahead(a.concat(n, /(?![0-9A-Za-z$_(])/))),
            end: n,
            excludeBegin: !0,
            keywords: "prototype",
            className: "property",
            relevance: 0
        }, j = {
            match: [ /get|set/, /\s+/, n, /(?=\()/ ],
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [ {
                begin: /\(\)/
            }, l ]
        }, $ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", q = {
            match: [ /const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, a.lookahead($) ],
            keywords: "async",
            className: {
                1: "keyword",
                3: "title.function"
            },
            contains: [ l ]
        };
        return {
            name: "JavaScript",
            aliases: [ "js", "jsx", "mjs", "cjs" ],
            keywords: s,
            exports: {
                PARAMS_CONTAINS: i,
                CLASS_REFERENCE: p
            },
            illegal: /#(?![$_A-z])/,
            contains: [ e.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }), {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, b, g, o, m, {
                match: /\$\d+/
            }, f, p, {
                className: "attr",
                begin: n + a.lookahead(":"),
                relevance: 0
            }, q, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [ m, e.REGEXP_MODE, {
                    className: "function",
                    begin: $,
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [ {
                        className: "params",
                        variants: [ {
                            begin: e.UNDERSCORE_IDENT_RE,
                            relevance: 0
                        }, {
                            className: null,
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: s,
                            contains: i
                        } ]
                    } ]
                }, {
                    begin: /,/,
                    relevance: 0
                }, {
                    match: /\s+/,
                    relevance: 0
                }, {
                    variants: [ {
                        begin: E,
                        end: v
                    }, {
                        match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                    }, {
                        begin: c.begin,
                        "on:begin": c.isTrulyOpeningTag,
                        end: c.end
                    } ],
                    subLanguage: "xml",
                    contains: [ {
                        begin: c.begin,
                        end: c.end,
                        skip: !0,
                        contains: [ "self" ]
                    } ]
                } ]
            }, D, {
                beginKeywords: "while if switch catch for"
            }, {
                begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                label: "func.def",
                contains: [ l, e.inherit(e.TITLE_MODE, {
                    begin: n,
                    className: "title.function"
                }) ]
            }, {
                match: /\.\.\./,
                relevance: 0
            }, M, {
                match: "\\$" + n,
                relevance: 0
            }, {
                match: [ /\bconstructor(?=\s*\()/ ],
                className: {
                    1: "title.function"
                },
                contains: [ l ]
            }, T, {
                relevance: 0,
                match: /\b[A-Z][A-Z_0-9]+\b/,
                className: "variable.constant"
            }, I, j, {
                match: /\$[(.]/
            } ]
        };
    }
    function fe(e) {
        const a = pe(e), n = U, E = [ "any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown" ], v = {
            beginKeywords: "namespace",
            end: /\{/,
            excludeEnd: !0,
            contains: [ a.exports.CLASS_REFERENCE ]
        }, c = {
            beginKeywords: "interface",
            end: /\{/,
            excludeEnd: !0,
            keywords: {
                keyword: "interface extends",
                built_in: E
            },
            contains: [ a.exports.CLASS_REFERENCE ]
        }, s = {
            $pattern: U,
            keyword: ee.concat([ "type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override" ]),
            literal: ae,
            built_in: ie.concat(E),
            "variable.language": se
        }, h = {
            className: "meta",
            begin: "@" + n
        }, d = (y, f, t) => {
            const r = y.contains.findIndex(b => b.label === f);
            if (r === -1) throw new Error("can not find mode to replace");
            y.contains.splice(r, 1, t);
        };
        return Object.assign(a.keywords, s), a.exports.PARAMS_CONTAINS.push(h), 
        a.contains = a.contains.concat([ h, v, c ]), d(a, "shebang", e.SHEBANG()), 
        d(a, "use_strict", {
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use strict['"]/
        }), a.contains.find(y => y.label === "func.def").relevance = 0, Object.assign(a, {
            name: "TypeScript",
            aliases: [ "ts", "tsx", "mts", "cts" ]
        }), a;
    }
    let ce, oe;
    ce = {
        class: "flex"
    }, oe = {
        class: "hljs"
    }, le = he({
        name: "InfraCodegenPreviewCode",
        __name: "PreviewCode",
        setup(e, {
            expose: a
        }) {
            const {
                t: n
            } = ye(), E = ve(), v = H(!1), c = H(!1), s = Ee({
                fileTree: [],
                activeName: ""
            }), h = H(), d = async (t, r) => {
                if (r && !r.isLeaf) return !1;
                s.activeName = t.id;
            };
            a({
                open: async t => {
                    v.value = !0;
                    try {
                        c.value = !0;
                        const r = await Ue(t);
                        h.value = r;
                        let b = y(r);
                        s.fileTree = Le(b, "id", "parentId", "children", "/"), s.activeName = r[0].filePath;
                    } finally {
                        c.value = !1;
                    }
                }
            });
            const y = t => {
                let r = {}, b = [];
                for (const g of t) {
                    let o = g.filePath.split("/"), m = "";
                    if (o[o.length - 1].indexOf(".java") >= 0) {
                        let u = [];
                        for (let _ = 0; _ < o.length; _++) {
                            let i = o[_];
                            if (i !== "java") {
                                u.push(i);
                                continue;
                            }
                            u.push(i);
                            let l = "";
                            for (;_ < o.length && (i = o[_ + 1], i !== "controller" && i !== "convert" && i !== "dal" && i !== "enums" && i !== "service" && i !== "vo" && i !== "mysql" && i !== "dataobject"); ) l = l ? l + "." + i : i, 
                            _++;
                            l && u.push(l);
                        }
                        o = u;
                    }
                    for (let u = 0; u < o.length; u++) {
                        let _ = m;
                        m = m.length === 0 ? o[u] : m.replaceAll(".", "/") + "/" + o[u], 
                        r[m] || (r[m] = !0, b.push({
                            id: m,
                            label: o[u],
                            parentId: _ || "/"
                        }));
                    }
                }
                return b;
            }, f = t => {
                const r = t.filePath.substring(t.filePath.lastIndexOf(".") + 1);
                return x.highlight(r, t.code || "", !0).value || "&nbsp;";
            };
            return Ae(async () => {
                x.registerLanguage("java", F), x.registerLanguage("xml", F), x.registerLanguage("html", F), 
                x.registerLanguage("vue", F), x.registerLanguage("javascript", be), 
                x.registerLanguage("sql", _e), x.registerLanguage("typescript", fe);
            }), (t, r) => {
                const b = Ie, g = Te, o = Fe, m = Me, u = je, _ = $e, i = Be, l = ze, I = we("dompurify-html");
                return Z(), P(i, {
                    modelValue: w(v),
                    "onUpdate:modelValue": r[1] || (r[1] = p => Oe(v) ? v.value = p : null),
                    "align-center": "",
                    class: "app-infra-codegen-preview-container",
                    title: "代码预览",
                    width: "80%"
                }, {
                    default: N(() => [ V("div", ce, [ J((Z(), P(o, {
                        gutter: 12,
                        class: "w-1/3",
                        "element-loading-text": "生成文件目录中...",
                        shadow: "hover"
                    }, {
                        default: N(() => [ L(g, {
                            height: "calc(100vh - 88px - 40px)"
                        }, {
                            default: N(() => [ L(b, {
                                ref: "treeRef",
                                data: w(s).fileTree,
                                "expand-on-click-node": !1,
                                "default-expand-all": "",
                                "highlight-current": "",
                                "node-key": "id",
                                onNodeClick: d
                            }, null, 8, [ "data" ]) ]),
                            _: 1
                        }) ]),
                        _: 1
                    })), [ [ l, w(c) ] ]), J((Z(), P(o, {
                        gutter: 12,
                        class: "ml-3 w-2/3",
                        "element-loading-text": "加载代码中...",
                        shadow: "hover"
                    }, {
                        default: N(() => [ L(_, {
                            modelValue: w(s).activeName,
                            "onUpdate:modelValue": r[0] || (r[0] = p => w(s).activeName = p)
                        }, {
                            default: N(() => [ (Z(!0), Ne(xe, null, Se(w(h), p => (Z(), 
                            P(u, {
                                key: p.filePath,
                                label: p.filePath.substring(p.filePath.lastIndexOf("/") + 1),
                                name: p.filePath
                            }, {
                                default: N(() => [ L(m, {
                                    class: "float-right",
                                    text: "",
                                    type: "primary",
                                    onClick: D => (async T => {
                                        const {
                                            copy: S,
                                            copied: M,
                                            isSupported: j
                                        } = Ce({
                                            source: T
                                        });
                                        j ? (await S(), w(M) && E.success(n("common.copySuccess"))) : E.error(n("common.copyError"));
                                    })(p.code)
                                }, {
                                    default: N(() => [ ke(Re(w(n)("common.copy")), 1) ]),
                                    _: 2
                                }, 1032, [ "onClick" ]), L(g, {
                                    height: "600px"
                                }, {
                                    default: N(() => [ V("pre", null, [ J(V("code", oe, null, 512), [ [ I, f(p) ] ]) ]) ]),
                                    _: 2
                                }, 1024) ]),
                                _: 2
                            }, 1032, [ "label", "name" ]))), 128)) ]),
                            _: 1
                        }, 8, [ "modelValue" ]) ]),
                        _: 1
                    })), [ [ l, w(c) ] ]) ]) ]),
                    _: 1
                }, 8, [ "modelValue" ]);
            };
        }
    });
});

export {
    le as _,
    Ge as __tla
};