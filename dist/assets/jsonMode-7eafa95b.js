import {
    m as Mn,
    __tla as jn
} from "./index-1344e56b.js";

import {
    __tla as Ln
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let ke, nn, be, we, Ce, rn, on, ye, Ee, Ae, xe, an, sn, Ie, Se, P, ce, cn, un, w, O, Fn = Promise.all([ (() => {
    try {
        return jn;
    } catch {}
})(), (() => {
    try {
        return Ln;
    } catch {}
})() ]).then(async () => {
    var Re, De, gn = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, hn = Object.getOwnPropertyNames, fn = Object.prototype.hasOwnProperty, Pe = (t, e, r, n) => {
        if (e && typeof e == "object" || typeof e == "function") for (let i of hn(e)) fn.call(t, i) || i === r || gn(t, i, {
            get: () => e[i],
            enumerable: !(n = ln(e, i)) || n.enumerable
        });
        return t;
    }, u = {};
    Pe(u, Re = Mn, "default"), De && Pe(De, Re, "default");
    let Me, je, Z, Le, T, Fe, k, Oe, ue, Ne, We, Ue, de, Ve, He, Ke, ze, qe, H, ge, Xe, Be, le, $e, N, ee, Je, Qe, Ge, te, Ye, K, Ze, M, ne, W, et, C, j, re, ie, tt, z, nt, q, rt, X, it, he;
    Se = class {
        constructor(t) {
            this._defaults = t, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 3e4), 
            this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
        }
        _stopWorker() {
            this._worker && (this._worker.dispose(), this._worker = null), this._client = null;
        }
        dispose() {
            clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), 
            this._stopWorker();
        }
        _checkIfIdle() {
            this._worker && Date.now() - this._lastUsedTime > 12e4 && this._stopWorker();
        }
        _getClient() {
            return this._lastUsedTime = Date.now(), this._client || (this._worker = u.editor.createWebWorker({
                moduleId: "vs/language/json/jsonWorker",
                label: this._defaults.languageId,
                createData: {
                    languageSettings: this._defaults.diagnosticsOptions,
                    languageId: this._defaults.languageId,
                    enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
                }
            }), this._client = this._worker.getProxy()), this._client;
        }
        getLanguageServiceWorker(...t) {
            let e;
            return this._getClient().then(r => {
                e = r;
            }).then(r => {
                if (this._worker) return this._worker.withSyncedResources(t);
            }).then(r => e);
        }
    }, (je = Me || (Me = {})).MIN_VALUE = -2147483648, je.MAX_VALUE = 2147483647, 
    (Le = Z || (Z = {})).MIN_VALUE = 0, Le.MAX_VALUE = 2147483647, (Fe = T || (T = {})).create = function(t, e) {
        return t === Number.MAX_VALUE && (t = Z.MAX_VALUE), e === Number.MAX_VALUE && (e = Z.MAX_VALUE), 
        {
            line: t,
            character: e
        };
    }, Fe.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && a.uinteger(e.line) && a.uinteger(e.character);
    }, (Oe = k || (k = {})).create = function(t, e, r, n) {
        if (a.uinteger(t) && a.uinteger(e) && a.uinteger(r) && a.uinteger(n)) return {
            start: T.create(t, e),
            end: T.create(r, n)
        };
        if (T.is(t) && T.is(e)) return {
            start: t,
            end: e
        };
        throw new Error("Range#create called with invalid arguments[" + t + ", " + e + ", " + r + ", " + n + "]");
    }, Oe.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && T.is(e.start) && T.is(e.end);
    }, (Ne = ue || (ue = {})).create = function(t, e) {
        return {
            uri: t,
            range: e
        };
    }, Ne.is = function(t) {
        var e = t;
        return a.defined(e) && k.is(e.range) && (a.string(e.uri) || a.undefined(e.uri));
    }, (Ue = We || (We = {})).create = function(t, e, r, n) {
        return {
            targetUri: t,
            targetRange: e,
            targetSelectionRange: r,
            originSelectionRange: n
        };
    }, Ue.is = function(t) {
        var e = t;
        return a.defined(e) && k.is(e.targetRange) && a.string(e.targetUri) && (k.is(e.targetSelectionRange) || a.undefined(e.targetSelectionRange)) && (k.is(e.originSelectionRange) || a.undefined(e.originSelectionRange));
    }, (Ve = de || (de = {})).create = function(t, e, r, n) {
        return {
            red: t,
            green: e,
            blue: r,
            alpha: n
        };
    }, Ve.is = function(t) {
        var e = t;
        return a.numberRange(e.red, 0, 1) && a.numberRange(e.green, 0, 1) && a.numberRange(e.blue, 0, 1) && a.numberRange(e.alpha, 0, 1);
    }, (Ke = He || (He = {})).create = function(t, e) {
        return {
            range: t,
            color: e
        };
    }, Ke.is = function(t) {
        var e = t;
        return k.is(e.range) && de.is(e.color);
    }, (qe = ze || (ze = {})).create = function(t, e, r) {
        return {
            label: t,
            textEdit: e,
            additionalTextEdits: r
        };
    }, qe.is = function(t) {
        var e = t;
        return a.string(e.label) && (a.undefined(e.textEdit) || M.is(e)) && (a.undefined(e.additionalTextEdits) || a.typedArray(e.additionalTextEdits, M.is));
    }, (ge = H || (H = {})).Comment = "comment", ge.Imports = "imports", ge.Region = "region", 
    (Be = Xe || (Xe = {})).create = function(t, e, r, n, i) {
        var o = {
            startLine: t,
            endLine: e
        };
        return a.defined(r) && (o.startCharacter = r), a.defined(n) && (o.endCharacter = n), 
        a.defined(i) && (o.kind = i), o;
    }, Be.is = function(t) {
        var e = t;
        return a.uinteger(e.startLine) && a.uinteger(e.startLine) && (a.undefined(e.startCharacter) || a.uinteger(e.startCharacter)) && (a.undefined(e.endCharacter) || a.uinteger(e.endCharacter)) && (a.undefined(e.kind) || a.string(e.kind));
    }, ($e = le || (le = {})).create = function(t, e) {
        return {
            location: t,
            message: e
        };
    }, $e.is = function(t) {
        var e = t;
        return a.defined(e) && ue.is(e.location) && a.string(e.message);
    }, (ee = N || (N = {})).Error = 1, ee.Warning = 2, ee.Information = 3, ee.Hint = 4, 
    (Qe = Je || (Je = {})).Unnecessary = 1, Qe.Deprecated = 2, (Ge || (Ge = {})).is = function(t) {
        var e = t;
        return e != null && a.string(e.href);
    }, (Ye = te || (te = {})).create = function(t, e, r, n, i, o) {
        var s = {
            range: t,
            message: e
        };
        return a.defined(r) && (s.severity = r), a.defined(n) && (s.code = n), a.defined(i) && (s.source = i), 
        a.defined(o) && (s.relatedInformation = o), s;
    }, Ye.is = function(t) {
        var e, r = t;
        return a.defined(r) && k.is(r.range) && a.string(r.message) && (a.number(r.severity) || a.undefined(r.severity)) && (a.integer(r.code) || a.string(r.code) || a.undefined(r.code)) && (a.undefined(r.codeDescription) || a.string((e = r.codeDescription) === null || e === void 0 ? void 0 : e.href)) && (a.string(r.source) || a.undefined(r.source)) && (a.undefined(r.relatedInformation) || a.typedArray(r.relatedInformation, le.is));
    }, (Ze = K || (K = {})).create = function(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = {
            title: t,
            command: e
        };
        return a.defined(r) && r.length > 0 && (i.arguments = r), i;
    }, Ze.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.title) && a.string(e.command);
    }, (ne = M || (M = {})).replace = function(t, e) {
        return {
            range: t,
            newText: e
        };
    }, ne.insert = function(t, e) {
        return {
            range: {
                start: t,
                end: t
            },
            newText: e
        };
    }, ne.del = function(t) {
        return {
            range: t,
            newText: ""
        };
    }, ne.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && a.string(e.newText) && k.is(e.range);
    }, (et = W || (W = {})).create = function(t, e, r) {
        var n = {
            label: t
        };
        return e !== void 0 && (n.needsConfirmation = e), r !== void 0 && (n.description = r), 
        n;
    }, et.is = function(t) {
        var e = t;
        return e !== void 0 && a.objectLiteral(e) && a.string(e.label) && (a.boolean(e.needsConfirmation) || e.needsConfirmation === void 0) && (a.string(e.description) || e.description === void 0);
    }, (C || (C = {})).is = function(t) {
        return typeof t == "string";
    }, (re = j || (j = {})).replace = function(t, e, r) {
        return {
            range: t,
            newText: e,
            annotationId: r
        };
    }, re.insert = function(t, e, r) {
        return {
            range: {
                start: t,
                end: t
            },
            newText: e,
            annotationId: r
        };
    }, re.del = function(t, e) {
        return {
            range: t,
            newText: "",
            annotationId: e
        };
    }, re.is = function(t) {
        var e = t;
        return M.is(e) && (W.is(e.annotationId) || C.is(e.annotationId));
    }, (tt = ie || (ie = {})).create = function(t, e) {
        return {
            textDocument: t,
            edits: e
        };
    }, tt.is = function(t) {
        var e = t;
        return a.defined(e) && oe.is(e.textDocument) && Array.isArray(e.edits);
    }, (nt = z || (z = {})).create = function(t, e, r) {
        var n = {
            kind: "create",
            uri: t
        };
        return e === void 0 || e.overwrite === void 0 && e.ignoreIfExists === void 0 || (n.options = e), 
        r !== void 0 && (n.annotationId = r), n;
    }, nt.is = function(t) {
        var e = t;
        return e && e.kind === "create" && a.string(e.uri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || C.is(e.annotationId));
    }, (rt = q || (q = {})).create = function(t, e, r, n) {
        var i = {
            kind: "rename",
            oldUri: t,
            newUri: e
        };
        return r === void 0 || r.overwrite === void 0 && r.ignoreIfExists === void 0 || (i.options = r), 
        n !== void 0 && (i.annotationId = n), i;
    }, rt.is = function(t) {
        var e = t;
        return e && e.kind === "rename" && a.string(e.oldUri) && a.string(e.newUri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || C.is(e.annotationId));
    }, (it = X || (X = {})).create = function(t, e, r) {
        var n = {
            kind: "delete",
            uri: t
        };
        return e === void 0 || e.recursive === void 0 && e.ignoreIfNotExists === void 0 || (n.options = e), 
        r !== void 0 && (n.annotationId = r), n;
    }, it.is = function(t) {
        var e = t;
        return e && e.kind === "delete" && a.string(e.uri) && (e.options === void 0 || (e.options.recursive === void 0 || a.boolean(e.options.recursive)) && (e.options.ignoreIfNotExists === void 0 || a.boolean(e.options.ignoreIfNotExists))) && (e.annotationId === void 0 || C.is(e.annotationId));
    }, (he || (he = {})).is = function(t) {
        var e = t;
        return e && (e.changes !== void 0 || e.documentChanges !== void 0) && (e.documentChanges === void 0 || e.documentChanges.every(function(r) {
            return a.string(r.kind) ? z.is(r) || q.is(r) || X.is(r) : ie.is(r);
        }));
    };
    var ot, at, st, ct, oe, ut, dt, gt, B, lt, fe, v, p, pe, ht, ft, pt, mt, vt, _t, kt, bt, ae, wt, Ct, yt, Et, $, me, At, _, f, xt, It, St, Tt, Rt, R, Dt, Pt, Mt, jt, Lt, Ft, Ot, Nt, Wt, Ut, Vt, ve, Ht, se = function() {
        function t(e, r) {
            this.edits = e, this.changeAnnotations = r;
        }
        return t.prototype.insert = function(e, r, n) {
            var i, o;
            if (n === void 0 ? i = M.insert(e, r) : C.is(n) ? (o = n, i = j.insert(e, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(n), i = j.insert(e, r, o)), this.edits.push(i), 
            o !== void 0) return o;
        }, t.prototype.replace = function(e, r, n) {
            var i, o;
            if (n === void 0 ? i = M.replace(e, r) : C.is(n) ? (o = n, i = j.replace(e, r, n)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(n), i = j.replace(e, r, o)), this.edits.push(i), 
            o !== void 0) return o;
        }, t.prototype.delete = function(e, r) {
            var n, i;
            if (r === void 0 ? n = M.del(e) : C.is(r) ? (i = r, n = j.del(e, r)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            i = this.changeAnnotations.manage(r), n = j.del(e, i)), this.edits.push(n), 
            i !== void 0) return i;
        }, t.prototype.add = function(e) {
            this.edits.push(e);
        }, t.prototype.all = function() {
            return this.edits;
        }, t.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
        }, t.prototype.assertChangeAnnotations = function(e) {
            if (e === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
        }, t;
    }(), Kt = function() {
        function t(e) {
            this._annotations = e === void 0 ? Object.create(null) : e, this._counter = 0, 
            this._size = 0;
        }
        return t.prototype.all = function() {
            return this._annotations;
        }, Object.defineProperty(t.prototype, "size", {
            get: function() {
                return this._size;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.manage = function(e, r) {
            var n;
            if (C.is(e) ? n = e : (n = this.nextId(), r = e), this._annotations[n] !== void 0) throw new Error("Id " + n + " is already in use.");
            if (r === void 0) throw new Error("No annotation provided for id " + n);
            return this._annotations[n] = r, this._size++, n;
        }, t.prototype.nextId = function() {
            return this._counter++, this._counter.toString();
        }, t;
    }();
    (function() {
        function t(e) {
            var r = this;
            this._textEditChanges = Object.create(null), e !== void 0 ? (this._workspaceEdit = e, 
            e.documentChanges ? (this._changeAnnotations = new Kt(e.changeAnnotations), 
            e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach(function(n) {
                if (ie.is(n)) {
                    var i = new se(n.edits, r._changeAnnotations);
                    r._textEditChanges[n.textDocument.uri] = i;
                }
            })) : e.changes && Object.keys(e.changes).forEach(function(n) {
                var i = new se(e.changes[n]);
                r._textEditChanges[n] = i;
            })) : this._workspaceEdit = {};
        }
        Object.defineProperty(t.prototype, "edit", {
            get: function() {
                return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), 
                this._workspaceEdit;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.getTextEditChange = function(e) {
            if (oe.is(e)) {
                if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
                var r = {
                    uri: e.uri,
                    version: e.version
                };
                if (!(i = this._textEditChanges[r.uri])) {
                    var n = {
                        textDocument: r,
                        edits: o = []
                    };
                    this._workspaceEdit.documentChanges.push(n), i = new se(o, this._changeAnnotations), 
                    this._textEditChanges[r.uri] = i;
                }
                return i;
            }
            if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
            var i;
            if (!(i = this._textEditChanges[e])) {
                var o = [];
                this._workspaceEdit.changes[e] = o, i = new se(o), this._textEditChanges[e] = i;
            }
            return i;
        }, t.prototype.initDocumentChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Kt(), 
            this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
        }, t.prototype.initChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = Object.create(null));
        }, t.prototype.createFile = function(e, r, n) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var i, o, s;
            if (W.is(r) || C.is(r) ? i = r : n = r, i === void 0 ? o = z.create(e, n) : (s = C.is(i) ? i : this._changeAnnotations.manage(i), 
            o = z.create(e, n, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        }, t.prototype.renameFile = function(e, r, n, i) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var o, s, c;
            if (W.is(n) || C.is(n) ? o = n : i = n, o === void 0 ? s = q.create(e, r, i) : (c = C.is(o) ? o : this._changeAnnotations.manage(o), 
            s = q.create(e, r, i, c)), this._workspaceEdit.documentChanges.push(s), 
            c !== void 0) return c;
        }, t.prototype.deleteFile = function(e, r, n) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var i, o, s;
            if (W.is(r) || C.is(r) ? i = r : n = r, i === void 0 ? o = X.create(e, n) : (s = C.is(i) ? i : this._changeAnnotations.manage(i), 
            o = X.create(e, n, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        };
    })(), (at = ot || (ot = {})).create = function(t) {
        return {
            uri: t
        };
    }, at.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri);
    }, (ct = st || (st = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, ct.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.integer(e.version);
    }, (ut = oe || (oe = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, ut.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && (e.version === null || a.integer(e.version));
    }, (gt = dt || (dt = {})).create = function(t, e, r, n) {
        return {
            uri: t,
            languageId: e,
            version: r,
            text: n
        };
    }, gt.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.string(e.languageId) && a.integer(e.version) && a.string(e.text);
    }, (lt = B || (B = {})).PlainText = "plaintext", lt.Markdown = "markdown", function(t) {
        t.is = function(e) {
            var r = e;
            return r === t.PlainText || r === t.Markdown;
        };
    }(B || (B = {})), (fe || (fe = {})).is = function(t) {
        var e = t;
        return a.objectLiteral(t) && B.is(e.kind) && a.string(e.value);
    }, (p = v || (v = {})).Text = 1, p.Method = 2, p.Function = 3, p.Constructor = 4, 
    p.Field = 5, p.Variable = 6, p.Class = 7, p.Interface = 8, p.Module = 9, p.Property = 10, 
    p.Unit = 11, p.Value = 12, p.Enum = 13, p.Keyword = 14, p.Snippet = 15, p.Color = 16, 
    p.File = 17, p.Reference = 18, p.Folder = 19, p.EnumMember = 20, p.Constant = 21, 
    p.Struct = 22, p.Event = 23, p.Operator = 24, p.TypeParameter = 25, (ht = pe || (pe = {})).PlainText = 1, 
    ht.Snippet = 2, (ft || (ft = {})).Deprecated = 1, (mt = pt || (pt = {})).create = function(t, e, r) {
        return {
            newText: t,
            insert: e,
            replace: r
        };
    }, mt.is = function(t) {
        var e = t;
        return e && a.string(e.newText) && k.is(e.insert) && k.is(e.replace);
    }, (_t = vt || (vt = {})).asIs = 1, _t.adjustIndentation = 2, (kt || (kt = {})).create = function(t) {
        return {
            label: t
        };
    }, (bt || (bt = {})).create = function(t, e) {
        return {
            items: t || [],
            isIncomplete: !!e
        };
    }, (wt = ae || (ae = {})).fromPlainText = function(t) {
        return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, wt.is = function(t) {
        var e = t;
        return a.string(e) || a.objectLiteral(e) && a.string(e.language) && a.string(e.value);
    }, (Ct || (Ct = {})).is = function(t) {
        var e = t;
        return !!e && a.objectLiteral(e) && (fe.is(e.contents) || ae.is(e.contents) || a.typedArray(e.contents, ae.is)) && (t.range === void 0 || k.is(t.range));
    }, (yt || (yt = {})).create = function(t, e) {
        return e ? {
            label: t,
            documentation: e
        } : {
            label: t
        };
    }, (Et || (Et = {})).create = function(t, e) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var i = {
            label: t
        };
        return a.defined(e) && (i.documentation = e), a.defined(r) ? i.parameters = r : i.parameters = [], 
        i;
    }, (me = $ || ($ = {})).Text = 1, me.Read = 2, me.Write = 3, (At || (At = {})).create = function(t, e) {
        var r = {
            range: t
        };
        return a.number(e) && (r.kind = e), r;
    }, (f = _ || (_ = {})).File = 1, f.Module = 2, f.Namespace = 3, f.Package = 4, 
    f.Class = 5, f.Method = 6, f.Property = 7, f.Field = 8, f.Constructor = 9, f.Enum = 10, 
    f.Interface = 11, f.Function = 12, f.Variable = 13, f.Constant = 14, f.String = 15, 
    f.Number = 16, f.Boolean = 17, f.Array = 18, f.Object = 19, f.Key = 20, f.Null = 21, 
    f.EnumMember = 22, f.Struct = 23, f.Event = 24, f.Operator = 25, f.TypeParameter = 26, 
    (xt || (xt = {})).Deprecated = 1, (It || (It = {})).create = function(t, e, r, n, i) {
        var o = {
            name: t,
            kind: e,
            location: {
                uri: n,
                range: r
            }
        };
        return i && (o.containerName = i), o;
    }, (Tt = St || (St = {})).create = function(t, e, r, n, i, o) {
        var s = {
            name: t,
            detail: e,
            kind: r,
            range: n,
            selectionRange: i
        };
        return o !== void 0 && (s.children = o), s;
    }, Tt.is = function(t) {
        var e = t;
        return e && a.string(e.name) && a.number(e.kind) && k.is(e.range) && k.is(e.selectionRange) && (e.detail === void 0 || a.string(e.detail)) && (e.deprecated === void 0 || a.boolean(e.deprecated)) && (e.children === void 0 || Array.isArray(e.children)) && (e.tags === void 0 || Array.isArray(e.tags));
    }, (R = Rt || (Rt = {})).Empty = "", R.QuickFix = "quickfix", R.Refactor = "refactor", 
    R.RefactorExtract = "refactor.extract", R.RefactorInline = "refactor.inline", 
    R.RefactorRewrite = "refactor.rewrite", R.Source = "source", R.SourceOrganizeImports = "source.organizeImports", 
    R.SourceFixAll = "source.fixAll", (Pt = Dt || (Dt = {})).create = function(t, e) {
        var r = {
            diagnostics: t
        };
        return e != null && (r.only = e), r;
    }, Pt.is = function(t) {
        var e = t;
        return a.defined(e) && a.typedArray(e.diagnostics, te.is) && (e.only === void 0 || a.typedArray(e.only, a.string));
    }, (jt = Mt || (Mt = {})).create = function(t, e, r) {
        var n = {
            title: t
        }, i = !0;
        return typeof e == "string" ? (i = !1, n.kind = e) : K.is(e) ? n.command = e : n.edit = e, 
        i && r !== void 0 && (n.kind = r), n;
    }, jt.is = function(t) {
        var e = t;
        return e && a.string(e.title) && (e.diagnostics === void 0 || a.typedArray(e.diagnostics, te.is)) && (e.kind === void 0 || a.string(e.kind)) && (e.edit !== void 0 || e.command !== void 0) && (e.command === void 0 || K.is(e.command)) && (e.isPreferred === void 0 || a.boolean(e.isPreferred)) && (e.edit === void 0 || he.is(e.edit));
    }, (Ft = Lt || (Lt = {})).create = function(t, e) {
        var r = {
            range: t
        };
        return a.defined(e) && (r.data = e), r;
    }, Ft.is = function(t) {
        var e = t;
        return a.defined(e) && k.is(e.range) && (a.undefined(e.command) || K.is(e.command));
    }, (Nt = Ot || (Ot = {})).create = function(t, e) {
        return {
            tabSize: t,
            insertSpaces: e
        };
    }, Nt.is = function(t) {
        var e = t;
        return a.defined(e) && a.uinteger(e.tabSize) && a.boolean(e.insertSpaces);
    }, (Ut = Wt || (Wt = {})).create = function(t, e, r) {
        return {
            range: t,
            target: e,
            data: r
        };
    }, Ut.is = function(t) {
        var e = t;
        return a.defined(e) && k.is(e.range) && (a.undefined(e.target) || a.string(e.target));
    }, (ve = Vt || (Vt = {})).create = function(t, e) {
        return {
            range: t,
            parent: e
        };
    }, ve.is = function(t) {
        var e = t;
        return e !== void 0 && k.is(e.range) && (e.parent === void 0 || ve.is(e.parent));
    }, function(t) {
        function e(r, n) {
            if (r.length <= 1) return r;
            var i = r.length / 2 | 0, o = r.slice(0, i), s = r.slice(i);
            e(o, n), e(s, n);
            for (var c = 0, m = 0, d = 0; c < o.length && m < s.length; ) {
                var h = n(o[c], s[m]);
                r[d++] = h <= 0 ? o[c++] : s[m++];
            }
            for (;c < o.length; ) r[d++] = o[c++];
            for (;m < s.length; ) r[d++] = s[m++];
            return r;
        }
        t.create = function(r, n, i, o) {
            return new pn(r, n, i, o);
        }, t.is = function(r) {
            var n = r;
            return !!(a.defined(n) && a.string(n.uri) && (a.undefined(n.languageId) || a.string(n.languageId)) && a.uinteger(n.lineCount) && a.func(n.getText) && a.func(n.positionAt) && a.func(n.offsetAt));
        }, t.applyEdits = function(r, n) {
            for (var i = r.getText(), o = e(n, function(g, I) {
                var D = g.range.start.line - I.range.start.line;
                return D === 0 ? g.range.start.character - I.range.start.character : D;
            }), s = i.length, c = o.length - 1; c >= 0; c--) {
                var m = o[c], d = r.offsetAt(m.range.start), h = r.offsetAt(m.range.end);
                if (!(h <= s)) throw new Error("Overlapping edit");
                i = i.substring(0, d) + m.newText + i.substring(h, i.length), s = d;
            }
            return i;
        };
    }(Ht || (Ht = {}));
    var a, A, F, pn = function() {
        function t(e, r, n, i) {
            this._uri = e, this._languageId = r, this._version = n, this._content = i, 
            this._lineOffsets = void 0;
        }
        return Object.defineProperty(t.prototype, "uri", {
            get: function() {
                return this._uri;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "languageId", {
            get: function() {
                return this._languageId;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "version", {
            get: function() {
                return this._version;
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.getText = function(e) {
            if (e) {
                var r = this.offsetAt(e.start), n = this.offsetAt(e.end);
                return this._content.substring(r, n);
            }
            return this._content;
        }, t.prototype.update = function(e, r) {
            this._content = e.text, this._version = r, this._lineOffsets = void 0;
        }, t.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
                for (var e = [], r = this._content, n = !0, i = 0; i < r.length; i++) {
                    n && (e.push(i), n = !1);
                    var o = r.charAt(i);
                    n = o === "\r" || o === `
`, o === "\r" && i + 1 < r.length && r.charAt(i + 1) === `
` && i++;
                }
                n && r.length > 0 && e.push(r.length), this._lineOffsets = e;
            }
            return this._lineOffsets;
        }, t.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var r = this.getLineOffsets(), n = 0, i = r.length;
            if (i === 0) return T.create(0, e);
            for (;n < i; ) {
                var o = Math.floor((n + i) / 2);
                r[o] > e ? i = o : n = o + 1;
            }
            var s = n - 1;
            return T.create(s, e - r[s]);
        }, t.prototype.offsetAt = function(e) {
            var r = this.getLineOffsets();
            if (e.line >= r.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = r[e.line], i = e.line + 1 < r.length ? r[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, i), n);
        }, Object.defineProperty(t.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }();
    A = a || (a = {}), F = Object.prototype.toString, A.defined = function(t) {
        return t !== void 0;
    }, A.undefined = function(t) {
        return t === void 0;
    }, A.boolean = function(t) {
        return t === !0 || t === !1;
    }, A.string = function(t) {
        return F.call(t) === "[object String]";
    }, A.number = function(t) {
        return F.call(t) === "[object Number]";
    }, A.numberRange = function(t, e, r) {
        return F.call(t) === "[object Number]" && e <= t && t <= r;
    }, A.integer = function(t) {
        return F.call(t) === "[object Number]" && -2147483648 <= t && t <= 2147483647;
    }, A.uinteger = function(t) {
        return F.call(t) === "[object Number]" && 0 <= t && t <= 2147483647;
    }, A.func = function(t) {
        return F.call(t) === "[object Function]";
    }, A.objectLiteral = function(t) {
        return t !== null && typeof t == "object";
    }, A.typedArray = function(t, e) {
        return Array.isArray(t) && t.every(e);
    }, be = class {
        constructor(t, e, r) {
            this._languageId = t, this._worker = e, this._disposables = [], this._listener = Object.create(null);
            const n = o => {
                let s, c = o.getLanguageId();
                c === this._languageId && (this._listener[o.uri.toString()] = o.onDidChangeContent(() => {
                    window.clearTimeout(s), s = window.setTimeout(() => this._doValidate(o.uri, c), 500);
                }), this._doValidate(o.uri, c));
            }, i = o => {
                u.editor.setModelMarkers(o, this._languageId, []);
                let s = o.uri.toString(), c = this._listener[s];
                c && (c.dispose(), delete this._listener[s]);
            };
            this._disposables.push(u.editor.onDidCreateModel(n)), this._disposables.push(u.editor.onWillDisposeModel(i)), 
            this._disposables.push(u.editor.onDidChangeModelLanguage(o => {
                i(o.model), n(o.model);
            })), this._disposables.push(r(o => {
                u.editor.getModels().forEach(s => {
                    s.getLanguageId() === this._languageId && (i(s), n(s));
                });
            })), this._disposables.push({
                dispose: () => {
                    u.editor.getModels().forEach(i);
                    for (let o in this._listener) this._listener[o].dispose();
                }
            }), u.editor.getModels().forEach(n);
        }
        dispose() {
            this._disposables.forEach(t => t && t.dispose()), this._disposables.length = 0;
        }
        _doValidate(t, e) {
            this._worker(t).then(r => r.doValidation(t.toString())).then(r => {
                const n = r.map(o => function(s, c) {
                    let m = typeof c.code == "number" ? String(c.code) : c.code;
                    return {
                        severity: mn(c.severity),
                        startLineNumber: c.range.start.line + 1,
                        startColumn: c.range.start.character + 1,
                        endLineNumber: c.range.end.line + 1,
                        endColumn: c.range.end.character + 1,
                        message: c.message,
                        code: m,
                        source: c.source
                    };
                }(0, o));
                let i = u.editor.getModel(t);
                i && i.getLanguageId() === e && u.editor.setModelMarkers(i, e, n);
            }).then(void 0, r => {});
        }
    };
    function mn(t) {
        switch (t) {
          case N.Error:
            return u.MarkerSeverity.Error;

          case N.Warning:
            return u.MarkerSeverity.Warning;

          case N.Information:
            return u.MarkerSeverity.Info;

          case N.Hint:
            return u.MarkerSeverity.Hint;

          default:
            return u.MarkerSeverity.Info;
        }
    }
    ke = class {
        constructor(t, e) {
            this._worker = t, this._triggerCharacters = e;
        }
        get triggerCharacters() {
            return this._triggerCharacters;
        }
        provideCompletionItems(t, e, r, n) {
            const i = t.uri;
            return this._worker(i).then(o => o.doComplete(i.toString(), P(e))).then(o => {
                if (!o) return;
                const s = t.getWordUntilPosition(e), c = new u.Range(e.lineNumber, s.startColumn, e.lineNumber, s.endColumn), m = o.items.map(d => {
                    const h = {
                        label: d.label,
                        insertText: d.insertText || d.label,
                        sortText: d.sortText,
                        filterText: d.filterText,
                        documentation: d.documentation,
                        detail: d.detail,
                        command: (g = d.command, g && g.command === "editor.action.triggerSuggest" ? {
                            id: g.command,
                            title: g.title,
                            arguments: g.arguments
                        } : void 0),
                        range: c,
                        kind: vn(d.kind)
                    };
                    var g, I;
                    return d.textEdit && ((I = d.textEdit).insert !== void 0 && I.replace !== void 0 ? h.range = {
                        insert: w(d.textEdit.insert),
                        replace: w(d.textEdit.replace)
                    } : h.range = w(d.textEdit.range), h.insertText = d.textEdit.newText), 
                    d.additionalTextEdits && (h.additionalTextEdits = d.additionalTextEdits.map(O)), 
                    d.insertTextFormat === pe.Snippet && (h.insertTextRules = u.languages.CompletionItemInsertTextRule.InsertAsSnippet), 
                    h;
                });
                return {
                    isIncomplete: o.isIncomplete,
                    suggestions: m
                };
            });
        }
    }, P = function(t) {
        if (t) return {
            character: t.column - 1,
            line: t.lineNumber - 1
        };
    }, ce = function(t) {
        if (t) return {
            start: {
                line: t.startLineNumber - 1,
                character: t.startColumn - 1
            },
            end: {
                line: t.endLineNumber - 1,
                character: t.endColumn - 1
            }
        };
    }, w = function(t) {
        if (t) return new u.Range(t.start.line + 1, t.start.character + 1, t.end.line + 1, t.end.character + 1);
    };
    function vn(t) {
        const e = u.languages.CompletionItemKind;
        switch (t) {
          case v.Text:
            return e.Text;

          case v.Method:
            return e.Method;

          case v.Function:
            return e.Function;

          case v.Constructor:
            return e.Constructor;

          case v.Field:
            return e.Field;

          case v.Variable:
            return e.Variable;

          case v.Class:
            return e.Class;

          case v.Interface:
            return e.Interface;

          case v.Module:
            return e.Module;

          case v.Property:
            return e.Property;

          case v.Unit:
            return e.Unit;

          case v.Value:
            return e.Value;

          case v.Enum:
            return e.Enum;

          case v.Keyword:
            return e.Keyword;

          case v.Snippet:
            return e.Snippet;

          case v.Color:
            return e.Color;

          case v.File:
            return e.File;

          case v.Reference:
            return e.Reference;
        }
        return e.Property;
    }
    O = function(t) {
        if (t) return {
            range: w(t.range),
            text: t.newText
        };
    }, xe = class {
        constructor(t) {
            this._worker = t;
        }
        provideHover(t, e, r) {
            let n = t.uri;
            return this._worker(n).then(i => i.doHover(n.toString(), P(e))).then(i => {
                if (i) return {
                    range: w(i.range),
                    contents: _n(i.contents)
                };
            });
        }
    };
    function zt(t) {
        return typeof t == "string" ? {
            value: t
        } : (e = t) && typeof e == "object" && typeof e.kind == "string" ? t.kind === "plaintext" ? {
            value: t.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        } : {
            value: t.value
        } : {
            value: "```" + t.language + `
` + t.value + "\n```\n"
        };
        var e;
    }
    function _n(t) {
        if (t) return Array.isArray(t) ? t.map(zt) : [ zt(t) ];
    }
    rn = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentHighlights(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.findDocumentHighlights(n.toString(), P(e))).then(i => {
                if (i) return i.map(o => ({
                    range: w(o.range),
                    kind: kn(o.kind)
                }));
            });
        }
    };
    function kn(t) {
        switch (t) {
          case $.Read:
            return u.languages.DocumentHighlightKind.Read;

          case $.Write:
            return u.languages.DocumentHighlightKind.Write;

          case $.Text:
            return u.languages.DocumentHighlightKind.Text;
        }
        return u.languages.DocumentHighlightKind.Text;
    }
    nn = class {
        constructor(t) {
            this._worker = t;
        }
        provideDefinition(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.findDefinition(n.toString(), P(e))).then(i => {
                if (i) return [ qt(i) ];
            });
        }
    };
    function qt(t) {
        return {
            uri: u.Uri.parse(t.uri),
            range: w(t.range)
        };
    }
    an = class {
        constructor(t) {
            this._worker = t;
        }
        provideReferences(t, e, r, n) {
            const i = t.uri;
            return this._worker(i).then(o => o.findReferences(i.toString(), P(e))).then(o => {
                if (o) return o.map(qt);
            });
        }
    }, sn = class {
        constructor(t) {
            this._worker = t;
        }
        provideRenameEdits(t, e, r, n) {
            const i = t.uri;
            return this._worker(i).then(o => o.doRename(i.toString(), P(e), r)).then(o => function(s) {
                if (!s || !s.changes) return;
                let c = [];
                for (let m in s.changes) {
                    const d = u.Uri.parse(m);
                    for (let h of s.changes[m]) c.push({
                        resource: d,
                        versionId: void 0,
                        textEdit: {
                            range: w(h.range),
                            text: h.newText
                        }
                    });
                }
                return {
                    edits: c
                };
            }(o));
        }
    }, Ee = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentSymbols(t, e) {
            const r = t.uri;
            return this._worker(r).then(n => n.findDocumentSymbols(r.toString())).then(n => {
                if (n) return n.map(i => "children" in i ? Xt(i) : {
                    name: i.name,
                    detail: "",
                    containerName: i.containerName,
                    kind: Bt(i.kind),
                    range: w(i.location.range),
                    selectionRange: w(i.location.range),
                    tags: []
                });
            });
        }
    };
    function Xt(t) {
        return {
            name: t.name,
            detail: t.detail ?? "",
            kind: Bt(t.kind),
            range: w(t.range),
            selectionRange: w(t.selectionRange),
            tags: t.tags ?? [],
            children: (t.children ?? []).map(e => Xt(e))
        };
    }
    function Bt(t) {
        let e = u.languages.SymbolKind;
        switch (t) {
          case _.File:
            return e.File;

          case _.Module:
            return e.Module;

          case _.Namespace:
            return e.Namespace;

          case _.Package:
            return e.Package;

          case _.Class:
            return e.Class;

          case _.Method:
            return e.Method;

          case _.Property:
            return e.Property;

          case _.Field:
            return e.Field;

          case _.Constructor:
            return e.Constructor;

          case _.Enum:
            return e.Enum;

          case _.Interface:
            return e.Interface;

          case _.Function:
            return e.Function;

          case _.Variable:
            return e.Variable;

          case _.Constant:
            return e.Constant;

          case _.String:
            return e.String;

          case _.Number:
            return e.Number;

          case _.Boolean:
            return e.Boolean;

          case _.Array:
            return e.Array;
        }
        return e.Function;
    }
    on = class {
        constructor(t) {
            this._worker = t;
        }
        provideLinks(t, e) {
            const r = t.uri;
            return this._worker(r).then(n => n.findDocumentLinks(r.toString())).then(n => {
                if (n) return {
                    links: n.map(i => ({
                        range: w(i.range),
                        url: i.target
                    }))
                };
            });
        }
    }, Ce = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentFormattingEdits(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.format(n.toString(), null, $t(e)).then(o => {
                if (o && o.length !== 0) return o.map(O);
            }));
        }
    }, ye = class {
        constructor(t) {
            this._worker = t, this.canFormatMultipleRanges = !1;
        }
        provideDocumentRangeFormattingEdits(t, e, r, n) {
            const i = t.uri;
            return this._worker(i).then(o => o.format(i.toString(), ce(e), $t(r)).then(s => {
                if (s && s.length !== 0) return s.map(O);
            }));
        }
    };
    function $t(t) {
        return {
            tabSize: t.tabSize,
            insertSpaces: t.insertSpaces
        };
    }
    we = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentColors(t, e) {
            const r = t.uri;
            return this._worker(r).then(n => n.findDocumentColors(r.toString())).then(n => {
                if (n) return n.map(i => ({
                    color: i.color,
                    range: w(i.range)
                }));
            });
        }
        provideColorPresentations(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.getColorPresentations(n.toString(), e.color, ce(e.range))).then(i => {
                if (i) return i.map(o => {
                    let s = {
                        label: o.label
                    };
                    return o.textEdit && (s.textEdit = O(o.textEdit)), o.additionalTextEdits && (s.additionalTextEdits = o.additionalTextEdits.map(O)), 
                    s;
                });
            });
        }
    }, Ae = class {
        constructor(t) {
            this._worker = t;
        }
        provideFoldingRanges(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.getFoldingRanges(n.toString(), e)).then(i => {
                if (i) return i.map(o => {
                    const s = {
                        start: o.startLine + 1,
                        end: o.endLine + 1
                    };
                    return o.kind !== void 0 && (s.kind = function(c) {
                        switch (c) {
                          case H.Comment:
                            return u.languages.FoldingRangeKind.Comment;

                          case H.Imports:
                            return u.languages.FoldingRangeKind.Imports;

                          case H.Region:
                            return u.languages.FoldingRangeKind.Region;
                        }
                    }(o.kind)), s;
                });
            });
        }
    };
    let Jt;
    Ie = class {
        constructor(t) {
            this._worker = t;
        }
        provideSelectionRanges(t, e, r) {
            const n = t.uri;
            return this._worker(n).then(i => i.getSelectionRanges(n.toString(), e.map(P))).then(i => {
                if (i) return i.map(o => {
                    const s = [];
                    for (;o; ) s.push({
                        range: w(o.range)
                    }), o = o.parent;
                    return s;
                });
            });
        }
    };
    function _e(t) {
        return t === 32 || t === 9 || t === 11 || t === 12 || t === 160 || t === 5760 || t >= 8192 && t <= 8203 || t === 8239 || t === 8287 || t === 12288 || t === 65279;
    }
    function J(t) {
        return t === 10 || t === 13 || t === 8232 || t === 8233;
    }
    function U(t) {
        return t >= 48 && t <= 57;
    }
    (Jt || (Jt = {})).DEFAULT = {
        allowTrailingComma: !1
    };
    var bn = function(t, e) {
        e === void 0 && (e = !1);
        var r = t.length, n = 0, i = "", o = 0, s = 16, c = 0, m = 0, d = 0, h = 0, g = 0;
        function I(l, V) {
            for (var G = 0, S = 0; G < l || !V; ) {
                var E = t.charCodeAt(n);
                if (E >= 48 && E <= 57) S = 16 * S + E - 48; else if (E >= 65 && E <= 70) S = 16 * S + E - 65 + 10; else {
                    if (!(E >= 97 && E <= 102)) break;
                    S = 16 * S + E - 97 + 10;
                }
                n++, G++;
            }
            return G < l && (S = -1), S;
        }
        function D() {
            if (i = "", g = 0, o = n, m = c, h = d, n >= r) return o = r, s = 17;
            var l = t.charCodeAt(n);
            if (_e(l)) {
                do {
                    n++, i += String.fromCharCode(l), l = t.charCodeAt(n);
                } while (_e(l));
                return s = 15;
            }
            if (J(l)) return n++, i += String.fromCharCode(l), l === 13 && t.charCodeAt(n) === 10 && (n++, 
            i += `
`), c++, d = n, s = 14;
            switch (l) {
              case 123:
                return n++, s = 1;

              case 125:
                return n++, s = 2;

              case 91:
                return n++, s = 3;

              case 93:
                return n++, s = 4;

              case 58:
                return n++, s = 6;

              case 44:
                return n++, s = 5;

              case 34:
                return n++, i = function() {
                    for (var b = "", L = n; ;) {
                        if (n >= r) {
                            b += t.substring(L, n), g = 2;
                            break;
                        }
                        var Y = t.charCodeAt(n);
                        if (Y === 34) {
                            b += t.substring(L, n), n++;
                            break;
                        }
                        if (Y !== 92) {
                            if (Y >= 0 && Y <= 31) {
                                if (J(Y)) {
                                    b += t.substring(L, n), g = 2;
                                    break;
                                }
                                g = 6;
                            }
                            n++;
                        } else {
                            if (b += t.substring(L, n), ++n >= r) {
                                g = 2;
                                break;
                            }
                            switch (t.charCodeAt(n++)) {
                              case 34:
                                b += '"';
                                break;

                              case 92:
                                b += "\\";
                                break;

                              case 47:
                                b += "/";
                                break;

                              case 98:
                                b += "\b";
                                break;

                              case 102:
                                b += "\f";
                                break;

                              case 110:
                                b += `
`;
                                break;

                              case 114:
                                b += "\r";
                                break;

                              case 116:
                                b += "\t";
                                break;

                              case 117:
                                var tn = I(4, !0);
                                tn >= 0 ? b += String.fromCharCode(tn) : g = 4;
                                break;

                              default:
                                g = 5;
                            }
                            L = n;
                        }
                    }
                    return b;
                }(), s = 10;

              case 47:
                var V = n - 1;
                if (t.charCodeAt(n + 1) === 47) {
                    for (n += 2; n < r && !J(t.charCodeAt(n)); ) n++;
                    return i = t.substring(V, n), s = 12;
                }
                if (t.charCodeAt(n + 1) === 42) {
                    n += 2;
                    for (var G = r - 1, S = !1; n < G; ) {
                        var E = t.charCodeAt(n);
                        if (E === 42 && t.charCodeAt(n + 1) === 47) {
                            n += 2, S = !0;
                            break;
                        }
                        n++, J(E) && (E === 13 && t.charCodeAt(n) === 10 && n++, 
                        c++, d = n);
                    }
                    return S || (n++, g = 1), i = t.substring(V, n), s = 13;
                }
                return i += String.fromCharCode(l), n++, s = 16;

              case 45:
                if (i += String.fromCharCode(l), ++n === r || !U(t.charCodeAt(n))) return s = 16;

              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return i += function() {
                    var b = n;
                    if (t.charCodeAt(n) === 48) n++; else for (n++; n < t.length && U(t.charCodeAt(n)); ) n++;
                    if (n < t.length && t.charCodeAt(n) === 46) {
                        if (!(++n < t.length && U(t.charCodeAt(n)))) return g = 3, 
                        t.substring(b, n);
                        for (n++; n < t.length && U(t.charCodeAt(n)); ) n++;
                    }
                    var L = n;
                    if (n < t.length && (t.charCodeAt(n) === 69 || t.charCodeAt(n) === 101)) if ((++n < t.length && t.charCodeAt(n) === 43 || t.charCodeAt(n) === 45) && n++, 
                    n < t.length && U(t.charCodeAt(n))) {
                        for (n++; n < t.length && U(t.charCodeAt(n)); ) n++;
                        L = n;
                    } else g = 3;
                    return t.substring(b, L);
                }(), s = 11;

              default:
                for (;n < r && y(l); ) n++, l = t.charCodeAt(n);
                if (o !== n) {
                    switch (i = t.substring(o, n)) {
                      case "true":
                        return s = 8;

                      case "false":
                        return s = 9;

                      case "null":
                        return s = 7;
                    }
                    return s = 16;
                }
                return i += String.fromCharCode(l), n++, s = 16;
            }
        }
        function y(l) {
            if (_e(l) || J(l)) return !1;
            switch (l) {
              case 125:
              case 93:
              case 123:
              case 91:
              case 34:
              case 58:
              case 44:
              case 47:
                return !1;
            }
            return !0;
        }
        return {
            setPosition: function(l) {
                n = l, i = "", o = 0, s = 16, g = 0;
            },
            getPosition: function() {
                return n;
            },
            scan: e ? function() {
                var l;
                do {
                    l = D();
                } while (l >= 12 && l <= 15);
                return l;
            } : D,
            getToken: function() {
                return s;
            },
            getTokenValue: function() {
                return i;
            },
            getTokenOffset: function() {
                return o;
            },
            getTokenLength: function() {
                return n - o;
            },
            getTokenStartLine: function() {
                return m;
            },
            getTokenStartCharacter: function() {
                return o - h;
            },
            getTokenError: function() {
                return g;
            }
        };
    };
    function wn(t) {
        return {
            getInitialState: () => new Yt(null, null, !1, null),
            tokenize: (e, r) => function(n, i, o, s = 0) {
                let c = 0, m = !1;
                switch (o.scanError) {
                  case 2:
                    i = '"' + i, c = 1;
                    break;

                  case 1:
                    i = "/*" + i, c = 2;
                }
                const d = bn(i);
                let h = o.lastWasColon, g = o.parents;
                const I = {
                    tokens: [],
                    endState: o.clone()
                };
                for (;;) {
                    let D = s + d.getPosition(), y = "";
                    const l = d.scan();
                    if (l === 17) break;
                    if (D === s + d.getPosition()) throw new Error("Scanner did not advance, next 3 characters are: " + i.substr(d.getPosition(), 3));
                    switch (m && (D -= c), m = c > 0, l) {
                      case 1:
                        g = Q.push(g, 0), y = Qt, h = !1;
                        break;

                      case 2:
                        g = Q.pop(g), y = Qt, h = !1;
                        break;

                      case 3:
                        g = Q.push(g, 1), y = Gt, h = !1;
                        break;

                      case 4:
                        g = Q.pop(g), y = Gt, h = !1;
                        break;

                      case 6:
                        y = Cn, h = !0;
                        break;

                      case 5:
                        y = yn, h = !1;
                        break;

                      case 8:
                      case 9:
                        y = En, h = !1;
                        break;

                      case 7:
                        y = An, h = !1;
                        break;

                      case 10:
                        const V = g ? g.type : 0;
                        y = h || V === 1 ? xn : Sn, h = !1;
                        break;

                      case 11:
                        y = In, h = !1;
                    }
                    if (n) switch (l) {
                      case 12:
                        y = Rn;
                        break;

                      case 13:
                        y = Tn;
                    }
                    I.endState = new Yt(o.getStateData(), d.getTokenError(), h, g), 
                    I.tokens.push({
                        startIndex: D,
                        scopes: y
                    });
                }
                return I;
            }(t, e, r)
        };
    }
    var x, Qt = "delimiter.bracket.json", Gt = "delimiter.array.json", Cn = "delimiter.colon.json", yn = "delimiter.comma.json", En = "keyword.json", An = "keyword.json", xn = "string.value.json", In = "number.json", Sn = "string.key.json", Tn = "comment.block.json", Rn = "comment.line.json", Q = class dn {
        constructor(e, r) {
            this.parent = e, this.type = r;
        }
        static pop(e) {
            return e ? e.parent : null;
        }
        static push(e, r) {
            return new dn(e, r);
        }
        static equals(e, r) {
            if (!e && !r) return !0;
            if (!e || !r) return !1;
            for (;e && r; ) {
                if (e === r) return !0;
                if (e.type !== r.type) return !1;
                e = e.parent, r = r.parent;
            }
            return !0;
        }
    }, Yt = class Te {
        constructor(e, r, n, i) {
            this._state = e, this.scanError = r, this.lastWasColon = n, this.parents = i;
        }
        clone() {
            return new Te(this._state, this.scanError, this.lastWasColon, this.parents);
        }
        equals(e) {
            return e === this || !!(e && e instanceof Te) && this.scanError === e.scanError && this.lastWasColon === e.lastWasColon && Q.equals(this.parents, e.parents);
        }
        getStateData() {
            return this._state;
        }
        setStateData(e) {
            this._state = e;
        }
    };
    cn = function() {
        return new Promise((t, e) => {
            if (!x) return e("JSON not registered!");
            t(x);
        });
    };
    var Dn = class extends be {
        constructor(t, e, r) {
            super(t, e, r.onDidChange), this._disposables.push(u.editor.onWillDisposeModel(n => {
                this._resetSchema(n.uri);
            })), this._disposables.push(u.editor.onDidChangeModelLanguage(n => {
                this._resetSchema(n.model.uri);
            }));
        }
        _resetSchema(t) {
            this._worker().then(e => {
                e.resetSchema(t.toString());
            });
        }
    };
    un = function(t) {
        const e = [], r = [], n = new Se(t);
        function i() {
            const {
                languageId: s,
                modeConfiguration: c
            } = t;
            en(r), c.documentFormattingEdits && r.push(u.languages.registerDocumentFormattingEditProvider(s, new Ce(x))), 
            c.documentRangeFormattingEdits && r.push(u.languages.registerDocumentRangeFormattingEditProvider(s, new ye(x))), 
            c.completionItems && r.push(u.languages.registerCompletionItemProvider(s, new ke(x, [ " ", ":", '"' ]))), 
            c.hovers && r.push(u.languages.registerHoverProvider(s, new xe(x))), 
            c.documentSymbols && r.push(u.languages.registerDocumentSymbolProvider(s, new Ee(x))), 
            c.tokens && r.push(u.languages.setTokensProvider(s, wn(!0))), c.colors && r.push(u.languages.registerColorProvider(s, new we(x))), 
            c.foldingRanges && r.push(u.languages.registerFoldingRangeProvider(s, new Ae(x))), 
            c.diagnostics && r.push(new Dn(s, x, t)), c.selectionRanges && r.push(u.languages.registerSelectionRangeProvider(s, new Ie(x)));
        }
        e.push(n), x = (...s) => n.getLanguageServiceWorker(...s), i(), e.push(u.languages.setLanguageConfiguration(t.languageId, Pn));
        let o = t.modeConfiguration;
        return t.onDidChange(s => {
            s.modeConfiguration !== o && (o = s.modeConfiguration, i());
        }), e.push(Zt(r)), Zt(e);
    };
    function Zt(t) {
        return {
            dispose: () => en(t)
        };
    }
    function en(t) {
        for (;t.length; ) t.pop().dispose();
    }
    var Pn = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: {
            lineComment: "//",
            blockComment: [ "/*", "*/" ]
        },
        brackets: [ [ "{", "}" ], [ "[", "]" ] ],
        autoClosingPairs: [ {
            open: "{",
            close: "}",
            notIn: [ "string" ]
        }, {
            open: "[",
            close: "]",
            notIn: [ "string" ]
        }, {
            open: '"',
            close: '"',
            notIn: [ "string" ]
        } ]
    };
});

export {
    ke as CompletionAdapter,
    nn as DefinitionAdapter,
    be as DiagnosticsAdapter,
    we as DocumentColorAdapter,
    Ce as DocumentFormattingEditProvider,
    rn as DocumentHighlightAdapter,
    on as DocumentLinkAdapter,
    ye as DocumentRangeFormattingEditProvider,
    Ee as DocumentSymbolAdapter,
    Ae as FoldingRangeAdapter,
    xe as HoverAdapter,
    an as ReferenceAdapter,
    sn as RenameAdapter,
    Ie as SelectionRangeAdapter,
    Se as WorkerManager,
    Fn as __tla,
    P as fromPosition,
    ce as fromRange,
    cn as getWorker,
    un as setupMode,
    w as toRange,
    O as toTextEdit
};