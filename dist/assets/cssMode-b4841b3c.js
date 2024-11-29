import {
    m as Jt,
    __tla as Yt
} from "./index-1344e56b.js";

import {
    __tla as Zt
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let ie, oe, ae, se, ue, ce, Wt, de, ge, le, he, fe, pe, me, ve, C, q, Vt, m, S, en = Promise.all([ (() => {
    try {
        return Yt;
    } catch {}
})(), (() => {
    try {
        return Zt;
    } catch {}
})() ]).then(async () => {
    var _e, we, Ht = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, zt = Object.getOwnPropertyNames, Xt = Object.prototype.hasOwnProperty, be = (t, e, n, i) => {
        if (e && typeof e == "object" || typeof e == "function") for (let r of zt(e)) Xt.call(t, r) || r === n || Ht(t, r, {
            get: () => e[r],
            enumerable: !(i = Kt(e, r)) || i.enumerable
        });
        return t;
    }, u = {};
    be(u, _e = Jt, "default"), we && be(we, _e, "default");
    let ke, ye, U, Ee, k, Ce, p, xe, Q, Ae, Ie, Se, G, Re, Te, De, Me, Pe, D, J, Fe, Le, Y, je, R, W, Oe, Ne, Ue, V, We, M, Ve, x, H, T, He, v, A, K, z, Ke, P, ze, F, Xe, L, Be, Z;
    ve = class {
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
                moduleId: "vs/language/css/cssWorker",
                label: this._defaults.languageId,
                createData: {
                    options: this._defaults.options,
                    languageId: this._defaults.languageId
                }
            }), this._client = this._worker.getProxy()), this._client;
        }
        getLanguageServiceWorker(...t) {
            let e;
            return this._getClient().then(n => {
                e = n;
            }).then(n => {
                if (this._worker) return this._worker.withSyncedResources(t);
            }).then(n => e);
        }
    }, (ye = ke || (ke = {})).MIN_VALUE = -2147483648, ye.MAX_VALUE = 2147483647, 
    (Ee = U || (U = {})).MIN_VALUE = 0, Ee.MAX_VALUE = 2147483647, (Ce = k || (k = {})).create = function(t, e) {
        return t === Number.MAX_VALUE && (t = U.MAX_VALUE), e === Number.MAX_VALUE && (e = U.MAX_VALUE), 
        {
            line: t,
            character: e
        };
    }, Ce.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && a.uinteger(e.line) && a.uinteger(e.character);
    }, (xe = p || (p = {})).create = function(t, e, n, i) {
        if (a.uinteger(t) && a.uinteger(e) && a.uinteger(n) && a.uinteger(i)) return {
            start: k.create(t, e),
            end: k.create(n, i)
        };
        if (k.is(t) && k.is(e)) return {
            start: t,
            end: e
        };
        throw new Error("Range#create called with invalid arguments[" + t + ", " + e + ", " + n + ", " + i + "]");
    }, xe.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && k.is(e.start) && k.is(e.end);
    }, (Ae = Q || (Q = {})).create = function(t, e) {
        return {
            uri: t,
            range: e
        };
    }, Ae.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.string(e.uri) || a.undefined(e.uri));
    }, (Se = Ie || (Ie = {})).create = function(t, e, n, i) {
        return {
            targetUri: t,
            targetRange: e,
            targetSelectionRange: n,
            originSelectionRange: i
        };
    }, Se.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.targetRange) && a.string(e.targetUri) && (p.is(e.targetSelectionRange) || a.undefined(e.targetSelectionRange)) && (p.is(e.originSelectionRange) || a.undefined(e.originSelectionRange));
    }, (Re = G || (G = {})).create = function(t, e, n, i) {
        return {
            red: t,
            green: e,
            blue: n,
            alpha: i
        };
    }, Re.is = function(t) {
        var e = t;
        return a.numberRange(e.red, 0, 1) && a.numberRange(e.green, 0, 1) && a.numberRange(e.blue, 0, 1) && a.numberRange(e.alpha, 0, 1);
    }, (De = Te || (Te = {})).create = function(t, e) {
        return {
            range: t,
            color: e
        };
    }, De.is = function(t) {
        var e = t;
        return p.is(e.range) && G.is(e.color);
    }, (Pe = Me || (Me = {})).create = function(t, e, n) {
        return {
            label: t,
            textEdit: e,
            additionalTextEdits: n
        };
    }, Pe.is = function(t) {
        var e = t;
        return a.string(e.label) && (a.undefined(e.textEdit) || x.is(e)) && (a.undefined(e.additionalTextEdits) || a.typedArray(e.additionalTextEdits, x.is));
    }, (J = D || (D = {})).Comment = "comment", J.Imports = "imports", J.Region = "region", 
    (Le = Fe || (Fe = {})).create = function(t, e, n, i, r) {
        var o = {
            startLine: t,
            endLine: e
        };
        return a.defined(n) && (o.startCharacter = n), a.defined(i) && (o.endCharacter = i), 
        a.defined(r) && (o.kind = r), o;
    }, Le.is = function(t) {
        var e = t;
        return a.uinteger(e.startLine) && a.uinteger(e.startLine) && (a.undefined(e.startCharacter) || a.uinteger(e.startCharacter)) && (a.undefined(e.endCharacter) || a.uinteger(e.endCharacter)) && (a.undefined(e.kind) || a.string(e.kind));
    }, (je = Y || (Y = {})).create = function(t, e) {
        return {
            location: t,
            message: e
        };
    }, je.is = function(t) {
        var e = t;
        return a.defined(e) && Q.is(e.location) && a.string(e.message);
    }, (W = R || (R = {})).Error = 1, W.Warning = 2, W.Information = 3, W.Hint = 4, 
    (Ne = Oe || (Oe = {})).Unnecessary = 1, Ne.Deprecated = 2, (Ue || (Ue = {})).is = function(t) {
        var e = t;
        return e != null && a.string(e.href);
    }, (We = V || (V = {})).create = function(t, e, n, i, r, o) {
        var s = {
            range: t,
            message: e
        };
        return a.defined(n) && (s.severity = n), a.defined(i) && (s.code = i), a.defined(r) && (s.source = r), 
        a.defined(o) && (s.relatedInformation = o), s;
    }, We.is = function(t) {
        var e, n = t;
        return a.defined(n) && p.is(n.range) && a.string(n.message) && (a.number(n.severity) || a.undefined(n.severity)) && (a.integer(n.code) || a.string(n.code) || a.undefined(n.code)) && (a.undefined(n.codeDescription) || a.string((e = n.codeDescription) === null || e === void 0 ? void 0 : e.href)) && (a.string(n.source) || a.undefined(n.source)) && (a.undefined(n.relatedInformation) || a.typedArray(n.relatedInformation, Y.is));
    }, (Ve = M || (M = {})).create = function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        var r = {
            title: t,
            command: e
        };
        return a.defined(n) && n.length > 0 && (r.arguments = n), r;
    }, Ve.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.title) && a.string(e.command);
    }, (H = x || (x = {})).replace = function(t, e) {
        return {
            range: t,
            newText: e
        };
    }, H.insert = function(t, e) {
        return {
            range: {
                start: t,
                end: t
            },
            newText: e
        };
    }, H.del = function(t) {
        return {
            range: t,
            newText: ""
        };
    }, H.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && a.string(e.newText) && p.is(e.range);
    }, (He = T || (T = {})).create = function(t, e, n) {
        var i = {
            label: t
        };
        return e !== void 0 && (i.needsConfirmation = e), n !== void 0 && (i.description = n), 
        i;
    }, He.is = function(t) {
        var e = t;
        return e !== void 0 && a.objectLiteral(e) && a.string(e.label) && (a.boolean(e.needsConfirmation) || e.needsConfirmation === void 0) && (a.string(e.description) || e.description === void 0);
    }, (v || (v = {})).is = function(t) {
        return typeof t == "string";
    }, (K = A || (A = {})).replace = function(t, e, n) {
        return {
            range: t,
            newText: e,
            annotationId: n
        };
    }, K.insert = function(t, e, n) {
        return {
            range: {
                start: t,
                end: t
            },
            newText: e,
            annotationId: n
        };
    }, K.del = function(t, e) {
        return {
            range: t,
            newText: "",
            annotationId: e
        };
    }, K.is = function(t) {
        var e = t;
        return x.is(e) && (T.is(e.annotationId) || v.is(e.annotationId));
    }, (Ke = z || (z = {})).create = function(t, e) {
        return {
            textDocument: t,
            edits: e
        };
    }, Ke.is = function(t) {
        var e = t;
        return a.defined(e) && X.is(e.textDocument) && Array.isArray(e.edits);
    }, (ze = P || (P = {})).create = function(t, e, n) {
        var i = {
            kind: "create",
            uri: t
        };
        return e === void 0 || e.overwrite === void 0 && e.ignoreIfExists === void 0 || (i.options = e), 
        n !== void 0 && (i.annotationId = n), i;
    }, ze.is = function(t) {
        var e = t;
        return e && e.kind === "create" && a.string(e.uri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (Xe = F || (F = {})).create = function(t, e, n, i) {
        var r = {
            kind: "rename",
            oldUri: t,
            newUri: e
        };
        return n === void 0 || n.overwrite === void 0 && n.ignoreIfExists === void 0 || (r.options = n), 
        i !== void 0 && (r.annotationId = i), r;
    }, Xe.is = function(t) {
        var e = t;
        return e && e.kind === "rename" && a.string(e.oldUri) && a.string(e.newUri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (Be = L || (L = {})).create = function(t, e, n) {
        var i = {
            kind: "delete",
            uri: t
        };
        return e === void 0 || e.recursive === void 0 && e.ignoreIfNotExists === void 0 || (i.options = e), 
        n !== void 0 && (i.annotationId = n), i;
    }, Be.is = function(t) {
        var e = t;
        return e && e.kind === "delete" && a.string(e.uri) && (e.options === void 0 || (e.options.recursive === void 0 || a.boolean(e.options.recursive)) && (e.options.ignoreIfNotExists === void 0 || a.boolean(e.options.ignoreIfNotExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (Z || (Z = {})).is = function(t) {
        var e = t;
        return e && (e.changes !== void 0 || e.documentChanges !== void 0) && (e.documentChanges === void 0 || e.documentChanges.every(function(n) {
            return a.string(n.kind) ? P.is(n) || F.is(n) || L.is(n) : z.is(n);
        }));
    };
    var $e, qe, Qe, Ge, X, Je, Ye, Ze, j, et, ee, h, l, te, tt, nt, rt, it, ot, at, st, ut, B, ct, dt, gt, lt, O, ne, ht, f, g, ft, pt, mt, vt, _t, y, wt, bt, kt, yt, Et, Ct, xt, At, It, St, Rt, re, Tt, $ = function() {
        function t(e, n) {
            this.edits = e, this.changeAnnotations = n;
        }
        return t.prototype.insert = function(e, n, i) {
            var r, o;
            if (i === void 0 ? r = x.insert(e, n) : v.is(i) ? (o = i, r = A.insert(e, n, i)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(i), r = A.insert(e, n, o)), this.edits.push(r), 
            o !== void 0) return o;
        }, t.prototype.replace = function(e, n, i) {
            var r, o;
            if (i === void 0 ? r = x.replace(e, n) : v.is(i) ? (o = i, r = A.replace(e, n, i)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(i), r = A.replace(e, n, o)), this.edits.push(r), 
            o !== void 0) return o;
        }, t.prototype.delete = function(e, n) {
            var i, r;
            if (n === void 0 ? i = x.del(e) : v.is(n) ? (r = n, i = A.del(e, n)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            r = this.changeAnnotations.manage(n), i = A.del(e, r)), this.edits.push(i), 
            r !== void 0) return r;
        }, t.prototype.add = function(e) {
            this.edits.push(e);
        }, t.prototype.all = function() {
            return this.edits;
        }, t.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
        }, t.prototype.assertChangeAnnotations = function(e) {
            if (e === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
        }, t;
    }(), Dt = function() {
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
        }), t.prototype.manage = function(e, n) {
            var i;
            if (v.is(e) ? i = e : (i = this.nextId(), n = e), this._annotations[i] !== void 0) throw new Error("Id " + i + " is already in use.");
            if (n === void 0) throw new Error("No annotation provided for id " + i);
            return this._annotations[i] = n, this._size++, i;
        }, t.prototype.nextId = function() {
            return this._counter++, this._counter.toString();
        }, t;
    }();
    (function() {
        function t(e) {
            var n = this;
            this._textEditChanges = Object.create(null), e !== void 0 ? (this._workspaceEdit = e, 
            e.documentChanges ? (this._changeAnnotations = new Dt(e.changeAnnotations), 
            e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach(function(i) {
                if (z.is(i)) {
                    var r = new $(i.edits, n._changeAnnotations);
                    n._textEditChanges[i.textDocument.uri] = r;
                }
            })) : e.changes && Object.keys(e.changes).forEach(function(i) {
                var r = new $(e.changes[i]);
                n._textEditChanges[i] = r;
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
            if (X.is(e)) {
                if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
                var n = {
                    uri: e.uri,
                    version: e.version
                };
                if (!(r = this._textEditChanges[n.uri])) {
                    var i = {
                        textDocument: n,
                        edits: o = []
                    };
                    this._workspaceEdit.documentChanges.push(i), r = new $(o, this._changeAnnotations), 
                    this._textEditChanges[n.uri] = r;
                }
                return r;
            }
            if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
            var r;
            if (!(r = this._textEditChanges[e])) {
                var o = [];
                this._workspaceEdit.changes[e] = o, r = new $(o), this._textEditChanges[e] = r;
            }
            return r;
        }, t.prototype.initDocumentChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Dt(), 
            this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
        }, t.prototype.initChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = Object.create(null));
        }, t.prototype.createFile = function(e, n, i) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var r, o, s;
            if (T.is(n) || v.is(n) ? r = n : i = n, r === void 0 ? o = P.create(e, i) : (s = v.is(r) ? r : this._changeAnnotations.manage(r), 
            o = P.create(e, i, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        }, t.prototype.renameFile = function(e, n, i, r) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var o, s, c;
            if (T.is(i) || v.is(i) ? o = i : r = i, o === void 0 ? s = F.create(e, n, r) : (c = v.is(o) ? o : this._changeAnnotations.manage(o), 
            s = F.create(e, n, r, c)), this._workspaceEdit.documentChanges.push(s), 
            c !== void 0) return c;
        }, t.prototype.deleteFile = function(e, n, i) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var r, o, s;
            if (T.is(n) || v.is(n) ? r = n : i = n, r === void 0 ? o = L.create(e, i) : (s = v.is(r) ? r : this._changeAnnotations.manage(r), 
            o = L.create(e, i, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        };
    })(), (qe = $e || ($e = {})).create = function(t) {
        return {
            uri: t
        };
    }, qe.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri);
    }, (Ge = Qe || (Qe = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, Ge.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.integer(e.version);
    }, (Je = X || (X = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, Je.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && (e.version === null || a.integer(e.version));
    }, (Ze = Ye || (Ye = {})).create = function(t, e, n, i) {
        return {
            uri: t,
            languageId: e,
            version: n,
            text: i
        };
    }, Ze.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.string(e.languageId) && a.integer(e.version) && a.string(e.text);
    }, (et = j || (j = {})).PlainText = "plaintext", et.Markdown = "markdown", function(t) {
        t.is = function(e) {
            var n = e;
            return n === t.PlainText || n === t.Markdown;
        };
    }(j || (j = {})), (ee || (ee = {})).is = function(t) {
        var e = t;
        return a.objectLiteral(t) && j.is(e.kind) && a.string(e.value);
    }, (l = h || (h = {})).Text = 1, l.Method = 2, l.Function = 3, l.Constructor = 4, 
    l.Field = 5, l.Variable = 6, l.Class = 7, l.Interface = 8, l.Module = 9, l.Property = 10, 
    l.Unit = 11, l.Value = 12, l.Enum = 13, l.Keyword = 14, l.Snippet = 15, l.Color = 16, 
    l.File = 17, l.Reference = 18, l.Folder = 19, l.EnumMember = 20, l.Constant = 21, 
    l.Struct = 22, l.Event = 23, l.Operator = 24, l.TypeParameter = 25, (tt = te || (te = {})).PlainText = 1, 
    tt.Snippet = 2, (nt || (nt = {})).Deprecated = 1, (it = rt || (rt = {})).create = function(t, e, n) {
        return {
            newText: t,
            insert: e,
            replace: n
        };
    }, it.is = function(t) {
        var e = t;
        return e && a.string(e.newText) && p.is(e.insert) && p.is(e.replace);
    }, (at = ot || (ot = {})).asIs = 1, at.adjustIndentation = 2, (st || (st = {})).create = function(t) {
        return {
            label: t
        };
    }, (ut || (ut = {})).create = function(t, e) {
        return {
            items: t || [],
            isIncomplete: !!e
        };
    }, (ct = B || (B = {})).fromPlainText = function(t) {
        return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, ct.is = function(t) {
        var e = t;
        return a.string(e) || a.objectLiteral(e) && a.string(e.language) && a.string(e.value);
    }, (dt || (dt = {})).is = function(t) {
        var e = t;
        return !!e && a.objectLiteral(e) && (ee.is(e.contents) || B.is(e.contents) || a.typedArray(e.contents, B.is)) && (t.range === void 0 || p.is(t.range));
    }, (gt || (gt = {})).create = function(t, e) {
        return e ? {
            label: t,
            documentation: e
        } : {
            label: t
        };
    }, (lt || (lt = {})).create = function(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        var r = {
            label: t
        };
        return a.defined(e) && (r.documentation = e), a.defined(n) ? r.parameters = n : r.parameters = [], 
        r;
    }, (ne = O || (O = {})).Text = 1, ne.Read = 2, ne.Write = 3, (ht || (ht = {})).create = function(t, e) {
        var n = {
            range: t
        };
        return a.number(e) && (n.kind = e), n;
    }, (g = f || (f = {})).File = 1, g.Module = 2, g.Namespace = 3, g.Package = 4, 
    g.Class = 5, g.Method = 6, g.Property = 7, g.Field = 8, g.Constructor = 9, g.Enum = 10, 
    g.Interface = 11, g.Function = 12, g.Variable = 13, g.Constant = 14, g.String = 15, 
    g.Number = 16, g.Boolean = 17, g.Array = 18, g.Object = 19, g.Key = 20, g.Null = 21, 
    g.EnumMember = 22, g.Struct = 23, g.Event = 24, g.Operator = 25, g.TypeParameter = 26, 
    (ft || (ft = {})).Deprecated = 1, (pt || (pt = {})).create = function(t, e, n, i, r) {
        var o = {
            name: t,
            kind: e,
            location: {
                uri: i,
                range: n
            }
        };
        return r && (o.containerName = r), o;
    }, (vt = mt || (mt = {})).create = function(t, e, n, i, r, o) {
        var s = {
            name: t,
            detail: e,
            kind: n,
            range: i,
            selectionRange: r
        };
        return o !== void 0 && (s.children = o), s;
    }, vt.is = function(t) {
        var e = t;
        return e && a.string(e.name) && a.number(e.kind) && p.is(e.range) && p.is(e.selectionRange) && (e.detail === void 0 || a.string(e.detail)) && (e.deprecated === void 0 || a.boolean(e.deprecated)) && (e.children === void 0 || Array.isArray(e.children)) && (e.tags === void 0 || Array.isArray(e.tags));
    }, (y = _t || (_t = {})).Empty = "", y.QuickFix = "quickfix", y.Refactor = "refactor", 
    y.RefactorExtract = "refactor.extract", y.RefactorInline = "refactor.inline", 
    y.RefactorRewrite = "refactor.rewrite", y.Source = "source", y.SourceOrganizeImports = "source.organizeImports", 
    y.SourceFixAll = "source.fixAll", (bt = wt || (wt = {})).create = function(t, e) {
        var n = {
            diagnostics: t
        };
        return e != null && (n.only = e), n;
    }, bt.is = function(t) {
        var e = t;
        return a.defined(e) && a.typedArray(e.diagnostics, V.is) && (e.only === void 0 || a.typedArray(e.only, a.string));
    }, (yt = kt || (kt = {})).create = function(t, e, n) {
        var i = {
            title: t
        }, r = !0;
        return typeof e == "string" ? (r = !1, i.kind = e) : M.is(e) ? i.command = e : i.edit = e, 
        r && n !== void 0 && (i.kind = n), i;
    }, yt.is = function(t) {
        var e = t;
        return e && a.string(e.title) && (e.diagnostics === void 0 || a.typedArray(e.diagnostics, V.is)) && (e.kind === void 0 || a.string(e.kind)) && (e.edit !== void 0 || e.command !== void 0) && (e.command === void 0 || M.is(e.command)) && (e.isPreferred === void 0 || a.boolean(e.isPreferred)) && (e.edit === void 0 || Z.is(e.edit));
    }, (Ct = Et || (Et = {})).create = function(t, e) {
        var n = {
            range: t
        };
        return a.defined(e) && (n.data = e), n;
    }, Ct.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.undefined(e.command) || M.is(e.command));
    }, (At = xt || (xt = {})).create = function(t, e) {
        return {
            tabSize: t,
            insertSpaces: e
        };
    }, At.is = function(t) {
        var e = t;
        return a.defined(e) && a.uinteger(e.tabSize) && a.boolean(e.insertSpaces);
    }, (St = It || (It = {})).create = function(t, e, n) {
        return {
            range: t,
            target: e,
            data: n
        };
    }, St.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.undefined(e.target) || a.string(e.target));
    }, (re = Rt || (Rt = {})).create = function(t, e) {
        return {
            range: t,
            parent: e
        };
    }, re.is = function(t) {
        var e = t;
        return e !== void 0 && p.is(e.range) && (e.parent === void 0 || re.is(e.parent));
    }, function(t) {
        function e(n, i) {
            if (n.length <= 1) return n;
            var r = n.length / 2 | 0, o = n.slice(0, r), s = n.slice(r);
            e(o, i), e(s, i);
            for (var c = 0, _ = 0, d = 0; c < o.length && _ < s.length; ) {
                var w = i(o[c], s[_]);
                n[d++] = w <= 0 ? o[c++] : s[_++];
            }
            for (;c < o.length; ) n[d++] = o[c++];
            for (;_ < s.length; ) n[d++] = s[_++];
            return n;
        }
        t.create = function(n, i, r, o) {
            return new Bt(n, i, r, o);
        }, t.is = function(n) {
            var i = n;
            return !!(a.defined(i) && a.string(i.uri) && (a.undefined(i.languageId) || a.string(i.languageId)) && a.uinteger(i.lineCount) && a.func(i.getText) && a.func(i.positionAt) && a.func(i.offsetAt));
        }, t.applyEdits = function(n, i) {
            for (var r = n.getText(), o = e(i, function(E, N) {
                var Ut = E.range.start.line - N.range.start.line;
                return Ut === 0 ? E.range.start.character - N.range.start.character : Ut;
            }), s = r.length, c = o.length - 1; c >= 0; c--) {
                var _ = o[c], d = n.offsetAt(_.range.start), w = n.offsetAt(_.range.end);
                if (!(w <= s)) throw new Error("Overlapping edit");
                r = r.substring(0, d) + _.newText + r.substring(w, r.length), s = d;
            }
            return r;
        };
    }(Tt || (Tt = {}));
    var a, b, I, Bt = function() {
        function t(e, n, i, r) {
            this._uri = e, this._languageId = n, this._version = i, this._content = r, 
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
                var n = this.offsetAt(e.start), i = this.offsetAt(e.end);
                return this._content.substring(n, i);
            }
            return this._content;
        }, t.prototype.update = function(e, n) {
            this._content = e.text, this._version = n, this._lineOffsets = void 0;
        }, t.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
                for (var e = [], n = this._content, i = !0, r = 0; r < n.length; r++) {
                    i && (e.push(r), i = !1);
                    var o = n.charAt(r);
                    i = o === "\r" || o === `
`, o === "\r" && r + 1 < n.length && n.charAt(r + 1) === `
` && r++;
                }
                i && n.length > 0 && e.push(n.length), this._lineOffsets = e;
            }
            return this._lineOffsets;
        }, t.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var n = this.getLineOffsets(), i = 0, r = n.length;
            if (r === 0) return k.create(0, e);
            for (;i < r; ) {
                var o = Math.floor((i + r) / 2);
                n[o] > e ? r = o : i = o + 1;
            }
            var s = i - 1;
            return k.create(s, e - n[s]);
        }, t.prototype.offsetAt = function(e) {
            var n = this.getLineOffsets();
            if (e.line >= n.length) return this._content.length;
            if (e.line < 0) return 0;
            var i = n[e.line], r = e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
            return Math.max(Math.min(i + e.character, r), i);
        }, Object.defineProperty(t.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }();
    b = a || (a = {}), I = Object.prototype.toString, b.defined = function(t) {
        return t !== void 0;
    }, b.undefined = function(t) {
        return t === void 0;
    }, b.boolean = function(t) {
        return t === !0 || t === !1;
    }, b.string = function(t) {
        return I.call(t) === "[object String]";
    }, b.number = function(t) {
        return I.call(t) === "[object Number]";
    }, b.numberRange = function(t, e, n) {
        return I.call(t) === "[object Number]" && e <= t && t <= n;
    }, b.integer = function(t) {
        return I.call(t) === "[object Number]" && -2147483648 <= t && t <= 2147483647;
    }, b.uinteger = function(t) {
        return I.call(t) === "[object Number]" && 0 <= t && t <= 2147483647;
    }, b.func = function(t) {
        return I.call(t) === "[object Function]";
    }, b.objectLiteral = function(t) {
        return t !== null && typeof t == "object";
    }, b.typedArray = function(t, e) {
        return Array.isArray(t) && t.every(e);
    }, ae = class {
        constructor(t, e, n) {
            this._languageId = t, this._worker = e, this._disposables = [], this._listener = Object.create(null);
            const i = o => {
                let s, c = o.getLanguageId();
                c === this._languageId && (this._listener[o.uri.toString()] = o.onDidChangeContent(() => {
                    window.clearTimeout(s), s = window.setTimeout(() => this._doValidate(o.uri, c), 500);
                }), this._doValidate(o.uri, c));
            }, r = o => {
                u.editor.setModelMarkers(o, this._languageId, []);
                let s = o.uri.toString(), c = this._listener[s];
                c && (c.dispose(), delete this._listener[s]);
            };
            this._disposables.push(u.editor.onDidCreateModel(i)), this._disposables.push(u.editor.onWillDisposeModel(r)), 
            this._disposables.push(u.editor.onDidChangeModelLanguage(o => {
                r(o.model), i(o.model);
            })), this._disposables.push(n(o => {
                u.editor.getModels().forEach(s => {
                    s.getLanguageId() === this._languageId && (r(s), i(s));
                });
            })), this._disposables.push({
                dispose: () => {
                    u.editor.getModels().forEach(r);
                    for (let o in this._listener) this._listener[o].dispose();
                }
            }), u.editor.getModels().forEach(i);
        }
        dispose() {
            this._disposables.forEach(t => t && t.dispose()), this._disposables.length = 0;
        }
        _doValidate(t, e) {
            this._worker(t).then(n => n.doValidation(t.toString())).then(n => {
                const i = n.map(o => function(s, c) {
                    let _ = typeof c.code == "number" ? String(c.code) : c.code;
                    return {
                        severity: $t(c.severity),
                        startLineNumber: c.range.start.line + 1,
                        startColumn: c.range.start.character + 1,
                        endLineNumber: c.range.end.line + 1,
                        endColumn: c.range.end.character + 1,
                        message: c.message,
                        code: _,
                        source: c.source
                    };
                }(0, o));
                let r = u.editor.getModel(t);
                r && r.getLanguageId() === e && u.editor.setModelMarkers(r, e, i);
            }).then(void 0, n => {});
        }
    };
    function $t(t) {
        switch (t) {
          case R.Error:
            return u.MarkerSeverity.Error;

          case R.Warning:
            return u.MarkerSeverity.Warning;

          case R.Information:
            return u.MarkerSeverity.Info;

          case R.Hint:
            return u.MarkerSeverity.Hint;

          default:
            return u.MarkerSeverity.Info;
        }
    }
    ie = class {
        constructor(t, e) {
            this._worker = t, this._triggerCharacters = e;
        }
        get triggerCharacters() {
            return this._triggerCharacters;
        }
        provideCompletionItems(t, e, n, i) {
            const r = t.uri;
            return this._worker(r).then(o => o.doComplete(r.toString(), C(e))).then(o => {
                if (!o) return;
                const s = t.getWordUntilPosition(e), c = new u.Range(e.lineNumber, s.startColumn, e.lineNumber, s.endColumn), _ = o.items.map(d => {
                    const w = {
                        label: d.label,
                        insertText: d.insertText || d.label,
                        sortText: d.sortText,
                        filterText: d.filterText,
                        documentation: d.documentation,
                        detail: d.detail,
                        command: (E = d.command, E && E.command === "editor.action.triggerSuggest" ? {
                            id: E.command,
                            title: E.title,
                            arguments: E.arguments
                        } : void 0),
                        range: c,
                        kind: qt(d.kind)
                    };
                    var E, N;
                    return d.textEdit && ((N = d.textEdit).insert !== void 0 && N.replace !== void 0 ? w.range = {
                        insert: m(d.textEdit.insert),
                        replace: m(d.textEdit.replace)
                    } : w.range = m(d.textEdit.range), w.insertText = d.textEdit.newText), 
                    d.additionalTextEdits && (w.additionalTextEdits = d.additionalTextEdits.map(S)), 
                    d.insertTextFormat === te.Snippet && (w.insertTextRules = u.languages.CompletionItemInsertTextRule.InsertAsSnippet), 
                    w;
                });
                return {
                    isIncomplete: o.isIncomplete,
                    suggestions: _
                };
            });
        }
    }, C = function(t) {
        if (t) return {
            character: t.column - 1,
            line: t.lineNumber - 1
        };
    }, q = function(t) {
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
    }, m = function(t) {
        if (t) return new u.Range(t.start.line + 1, t.start.character + 1, t.end.line + 1, t.end.character + 1);
    };
    function qt(t) {
        const e = u.languages.CompletionItemKind;
        switch (t) {
          case h.Text:
            return e.Text;

          case h.Method:
            return e.Method;

          case h.Function:
            return e.Function;

          case h.Constructor:
            return e.Constructor;

          case h.Field:
            return e.Field;

          case h.Variable:
            return e.Variable;

          case h.Class:
            return e.Class;

          case h.Interface:
            return e.Interface;

          case h.Module:
            return e.Module;

          case h.Property:
            return e.Property;

          case h.Unit:
            return e.Unit;

          case h.Value:
            return e.Value;

          case h.Enum:
            return e.Enum;

          case h.Keyword:
            return e.Keyword;

          case h.Snippet:
            return e.Snippet;

          case h.Color:
            return e.Color;

          case h.File:
            return e.File;

          case h.Reference:
            return e.Reference;
        }
        return e.Property;
    }
    S = function(t) {
        if (t) return {
            range: m(t.range),
            text: t.newText
        };
    }, he = class {
        constructor(t) {
            this._worker = t;
        }
        provideHover(t, e, n) {
            let i = t.uri;
            return this._worker(i).then(r => r.doHover(i.toString(), C(e))).then(r => {
                if (r) return {
                    range: m(r.range),
                    contents: Qt(r.contents)
                };
            });
        }
    };
    function Mt(t) {
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
    function Qt(t) {
        if (t) return Array.isArray(t) ? t.map(Mt) : [ Mt(t) ];
    }
    ce = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentHighlights(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.findDocumentHighlights(i.toString(), C(e))).then(r => {
                if (r) return r.map(o => ({
                    range: m(o.range),
                    kind: Gt(o.kind)
                }));
            });
        }
    };
    function Gt(t) {
        switch (t) {
          case O.Read:
            return u.languages.DocumentHighlightKind.Read;

          case O.Write:
            return u.languages.DocumentHighlightKind.Write;

          case O.Text:
            return u.languages.DocumentHighlightKind.Text;
        }
        return u.languages.DocumentHighlightKind.Text;
    }
    oe = class {
        constructor(t) {
            this._worker = t;
        }
        provideDefinition(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.findDefinition(i.toString(), C(e))).then(r => {
                if (r) return [ Pt(r) ];
            });
        }
    };
    function Pt(t) {
        return {
            uri: u.Uri.parse(t.uri),
            range: m(t.range)
        };
    }
    fe = class {
        constructor(t) {
            this._worker = t;
        }
        provideReferences(t, e, n, i) {
            const r = t.uri;
            return this._worker(r).then(o => o.findReferences(r.toString(), C(e))).then(o => {
                if (o) return o.map(Pt);
            });
        }
    }, pe = class {
        constructor(t) {
            this._worker = t;
        }
        provideRenameEdits(t, e, n, i) {
            const r = t.uri;
            return this._worker(r).then(o => o.doRename(r.toString(), C(e), n)).then(o => function(s) {
                if (!s || !s.changes) return;
                let c = [];
                for (let _ in s.changes) {
                    const d = u.Uri.parse(_);
                    for (let w of s.changes[_]) c.push({
                        resource: d,
                        versionId: void 0,
                        textEdit: {
                            range: m(w.range),
                            text: w.newText
                        }
                    });
                }
                return {
                    edits: c
                };
            }(o));
        }
    }, ge = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentSymbols(t, e) {
            const n = t.uri;
            return this._worker(n).then(i => i.findDocumentSymbols(n.toString())).then(i => {
                if (i) return i.map(r => "children" in r ? Ft(r) : {
                    name: r.name,
                    detail: "",
                    containerName: r.containerName,
                    kind: Lt(r.kind),
                    range: m(r.location.range),
                    selectionRange: m(r.location.range),
                    tags: []
                });
            });
        }
    };
    function Ft(t) {
        return {
            name: t.name,
            detail: t.detail ?? "",
            kind: Lt(t.kind),
            range: m(t.range),
            selectionRange: m(t.selectionRange),
            tags: t.tags ?? [],
            children: (t.children ?? []).map(e => Ft(e))
        };
    }
    function Lt(t) {
        let e = u.languages.SymbolKind;
        switch (t) {
          case f.File:
            return e.File;

          case f.Module:
            return e.Module;

          case f.Namespace:
            return e.Namespace;

          case f.Package:
            return e.Package;

          case f.Class:
            return e.Class;

          case f.Method:
            return e.Method;

          case f.Property:
            return e.Property;

          case f.Field:
            return e.Field;

          case f.Constructor:
            return e.Constructor;

          case f.Enum:
            return e.Enum;

          case f.Interface:
            return e.Interface;

          case f.Function:
            return e.Function;

          case f.Variable:
            return e.Variable;

          case f.Constant:
            return e.Constant;

          case f.String:
            return e.String;

          case f.Number:
            return e.Number;

          case f.Boolean:
            return e.Boolean;

          case f.Array:
            return e.Array;
        }
        return e.Function;
    }
    Wt = class {
        constructor(t) {
            this._worker = t;
        }
        provideLinks(t, e) {
            const n = t.uri;
            return this._worker(n).then(i => i.findDocumentLinks(n.toString())).then(i => {
                if (i) return {
                    links: i.map(r => ({
                        range: m(r.range),
                        url: r.target
                    }))
                };
            });
        }
    }, ue = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentFormattingEdits(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.format(i.toString(), null, jt(e)).then(o => {
                if (o && o.length !== 0) return o.map(S);
            }));
        }
    }, de = class {
        constructor(t) {
            this._worker = t, this.canFormatMultipleRanges = !1;
        }
        provideDocumentRangeFormattingEdits(t, e, n, i) {
            const r = t.uri;
            return this._worker(r).then(o => o.format(r.toString(), q(e), jt(n)).then(s => {
                if (s && s.length !== 0) return s.map(S);
            }));
        }
    };
    function jt(t) {
        return {
            tabSize: t.tabSize,
            insertSpaces: t.insertSpaces
        };
    }
    se = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentColors(t, e) {
            const n = t.uri;
            return this._worker(n).then(i => i.findDocumentColors(n.toString())).then(i => {
                if (i) return i.map(r => ({
                    color: r.color,
                    range: m(r.range)
                }));
            });
        }
        provideColorPresentations(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.getColorPresentations(i.toString(), e.color, q(e.range))).then(r => {
                if (r) return r.map(o => {
                    let s = {
                        label: o.label
                    };
                    return o.textEdit && (s.textEdit = S(o.textEdit)), o.additionalTextEdits && (s.additionalTextEdits = o.additionalTextEdits.map(S)), 
                    s;
                });
            });
        }
    }, le = class {
        constructor(t) {
            this._worker = t;
        }
        provideFoldingRanges(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.getFoldingRanges(i.toString(), e)).then(r => {
                if (r) return r.map(o => {
                    const s = {
                        start: o.startLine + 1,
                        end: o.endLine + 1
                    };
                    return o.kind !== void 0 && (s.kind = function(c) {
                        switch (c) {
                          case D.Comment:
                            return u.languages.FoldingRangeKind.Comment;

                          case D.Imports:
                            return u.languages.FoldingRangeKind.Imports;

                          case D.Region:
                            return u.languages.FoldingRangeKind.Region;
                        }
                    }(o.kind)), s;
                });
            });
        }
    }, me = class {
        constructor(t) {
            this._worker = t;
        }
        provideSelectionRanges(t, e, n) {
            const i = t.uri;
            return this._worker(i).then(r => r.getSelectionRanges(i.toString(), e.map(C))).then(r => {
                if (r) return r.map(o => {
                    const s = [];
                    for (;o; ) s.push({
                        range: m(o.range)
                    }), o = o.parent;
                    return s;
                });
            });
        }
    }, Vt = function(t) {
        const e = [], n = [], i = new ve(t);
        e.push(i);
        const r = (...o) => i.getLanguageServiceWorker(...o);
        return function() {
            const {
                languageId: o,
                modeConfiguration: s
            } = t;
            Nt(n), s.completionItems && n.push(u.languages.registerCompletionItemProvider(o, new ie(r, [ "/", "-", ":" ]))), 
            s.hovers && n.push(u.languages.registerHoverProvider(o, new he(r))), 
            s.documentHighlights && n.push(u.languages.registerDocumentHighlightProvider(o, new ce(r))), 
            s.definitions && n.push(u.languages.registerDefinitionProvider(o, new oe(r))), 
            s.references && n.push(u.languages.registerReferenceProvider(o, new fe(r))), 
            s.documentSymbols && n.push(u.languages.registerDocumentSymbolProvider(o, new ge(r))), 
            s.rename && n.push(u.languages.registerRenameProvider(o, new pe(r))), 
            s.colors && n.push(u.languages.registerColorProvider(o, new se(r))), 
            s.foldingRanges && n.push(u.languages.registerFoldingRangeProvider(o, new le(r))), 
            s.diagnostics && n.push(new ae(o, r, t.onDidChange)), s.selectionRanges && n.push(u.languages.registerSelectionRangeProvider(o, new me(r))), 
            s.documentFormattingEdits && n.push(u.languages.registerDocumentFormattingEditProvider(o, new ue(r))), 
            s.documentRangeFormattingEdits && n.push(u.languages.registerDocumentRangeFormattingEditProvider(o, new de(r)));
        }(), e.push(Ot(n)), Ot(e);
    };
    function Ot(t) {
        return {
            dispose: () => Nt(t)
        };
    }
    function Nt(t) {
        for (;t.length; ) t.pop().dispose();
    }
});

export {
    ie as CompletionAdapter,
    oe as DefinitionAdapter,
    ae as DiagnosticsAdapter,
    se as DocumentColorAdapter,
    ue as DocumentFormattingEditProvider,
    ce as DocumentHighlightAdapter,
    Wt as DocumentLinkAdapter,
    de as DocumentRangeFormattingEditProvider,
    ge as DocumentSymbolAdapter,
    le as FoldingRangeAdapter,
    he as HoverAdapter,
    fe as ReferenceAdapter,
    pe as RenameAdapter,
    me as SelectionRangeAdapter,
    ve as WorkerManager,
    en as __tla,
    C as fromPosition,
    q as fromRange,
    Vt as setupMode,
    m as toRange,
    S as toTextEdit
};