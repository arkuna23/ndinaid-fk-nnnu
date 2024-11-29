import {
    m as Zt,
    __tla as en
} from "./index-1344e56b.js";

import {
    __tla as tn
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let pe, Nt, Ut, Wt, q, Q, G, J, Y, Z, ee, Vt, te, ne, re, x, ie, Ht, Kt, m, S, nn = Promise.all([ (() => {
    try {
        return en;
    } catch {}
})(), (() => {
    try {
        return tn;
    } catch {}
})() ]).then(async () => {
    var me, ve, zt = Object.defineProperty, Xt = Object.getOwnPropertyDescriptor, Bt = Object.getOwnPropertyNames, $t = Object.prototype.hasOwnProperty, _e = (t, e, n, r) => {
        if (e && typeof e == "object" || typeof e == "function") for (let i of Bt(e)) $t.call(t, i) || i === n || zt(t, i, {
            get: () => e[i],
            enumerable: !(r = Xt(e, i)) || r.enumerable
        });
        return t;
    }, u = {};
    _e(u, me = Zt, "default"), ve && _e(ve, me, "default");
    let we, ke, U, be, b, ye, p, Ee, oe, xe, Ce, Ie, ae, Ae, Se, Re, Pe, Te, T, se, De, Me, ue, Fe, R, W, Le, je, Oe, V, Ne, D, Ue, C, H, P, We, v, I, K, z, Ve, M, He, F, Ke, L, ze, ce;
    re = class {
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
                moduleId: "vs/language/html/htmlWorker",
                createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId
                },
                label: this._defaults.languageId
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
    }, (ke = we || (we = {})).MIN_VALUE = -2147483648, ke.MAX_VALUE = 2147483647, 
    (be = U || (U = {})).MIN_VALUE = 0, be.MAX_VALUE = 2147483647, (ye = b || (b = {})).create = function(t, e) {
        return t === Number.MAX_VALUE && (t = U.MAX_VALUE), e === Number.MAX_VALUE && (e = U.MAX_VALUE), 
        {
            line: t,
            character: e
        };
    }, ye.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && a.uinteger(e.line) && a.uinteger(e.character);
    }, (Ee = p || (p = {})).create = function(t, e, n, r) {
        if (a.uinteger(t) && a.uinteger(e) && a.uinteger(n) && a.uinteger(r)) return {
            start: b.create(t, e),
            end: b.create(n, r)
        };
        if (b.is(t) && b.is(e)) return {
            start: t,
            end: e
        };
        throw new Error("Range#create called with invalid arguments[" + t + ", " + e + ", " + n + ", " + r + "]");
    }, Ee.is = function(t) {
        var e = t;
        return a.objectLiteral(e) && b.is(e.start) && b.is(e.end);
    }, (xe = oe || (oe = {})).create = function(t, e) {
        return {
            uri: t,
            range: e
        };
    }, xe.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.string(e.uri) || a.undefined(e.uri));
    }, (Ie = Ce || (Ce = {})).create = function(t, e, n, r) {
        return {
            targetUri: t,
            targetRange: e,
            targetSelectionRange: n,
            originSelectionRange: r
        };
    }, Ie.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.targetRange) && a.string(e.targetUri) && (p.is(e.targetSelectionRange) || a.undefined(e.targetSelectionRange)) && (p.is(e.originSelectionRange) || a.undefined(e.originSelectionRange));
    }, (Ae = ae || (ae = {})).create = function(t, e, n, r) {
        return {
            red: t,
            green: e,
            blue: n,
            alpha: r
        };
    }, Ae.is = function(t) {
        var e = t;
        return a.numberRange(e.red, 0, 1) && a.numberRange(e.green, 0, 1) && a.numberRange(e.blue, 0, 1) && a.numberRange(e.alpha, 0, 1);
    }, (Re = Se || (Se = {})).create = function(t, e) {
        return {
            range: t,
            color: e
        };
    }, Re.is = function(t) {
        var e = t;
        return p.is(e.range) && ae.is(e.color);
    }, (Te = Pe || (Pe = {})).create = function(t, e, n) {
        return {
            label: t,
            textEdit: e,
            additionalTextEdits: n
        };
    }, Te.is = function(t) {
        var e = t;
        return a.string(e.label) && (a.undefined(e.textEdit) || C.is(e)) && (a.undefined(e.additionalTextEdits) || a.typedArray(e.additionalTextEdits, C.is));
    }, (se = T || (T = {})).Comment = "comment", se.Imports = "imports", se.Region = "region", 
    (Me = De || (De = {})).create = function(t, e, n, r, i) {
        var o = {
            startLine: t,
            endLine: e
        };
        return a.defined(n) && (o.startCharacter = n), a.defined(r) && (o.endCharacter = r), 
        a.defined(i) && (o.kind = i), o;
    }, Me.is = function(t) {
        var e = t;
        return a.uinteger(e.startLine) && a.uinteger(e.startLine) && (a.undefined(e.startCharacter) || a.uinteger(e.startCharacter)) && (a.undefined(e.endCharacter) || a.uinteger(e.endCharacter)) && (a.undefined(e.kind) || a.string(e.kind));
    }, (Fe = ue || (ue = {})).create = function(t, e) {
        return {
            location: t,
            message: e
        };
    }, Fe.is = function(t) {
        var e = t;
        return a.defined(e) && oe.is(e.location) && a.string(e.message);
    }, (W = R || (R = {})).Error = 1, W.Warning = 2, W.Information = 3, W.Hint = 4, 
    (je = Le || (Le = {})).Unnecessary = 1, je.Deprecated = 2, (Oe || (Oe = {})).is = function(t) {
        var e = t;
        return e != null && a.string(e.href);
    }, (Ne = V || (V = {})).create = function(t, e, n, r, i, o) {
        var s = {
            range: t,
            message: e
        };
        return a.defined(n) && (s.severity = n), a.defined(r) && (s.code = r), a.defined(i) && (s.source = i), 
        a.defined(o) && (s.relatedInformation = o), s;
    }, Ne.is = function(t) {
        var e, n = t;
        return a.defined(n) && p.is(n.range) && a.string(n.message) && (a.number(n.severity) || a.undefined(n.severity)) && (a.integer(n.code) || a.string(n.code) || a.undefined(n.code)) && (a.undefined(n.codeDescription) || a.string((e = n.codeDescription) === null || e === void 0 ? void 0 : e.href)) && (a.string(n.source) || a.undefined(n.source)) && (a.undefined(n.relatedInformation) || a.typedArray(n.relatedInformation, ue.is));
    }, (Ue = D || (D = {})).create = function(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = {
            title: t,
            command: e
        };
        return a.defined(n) && n.length > 0 && (i.arguments = n), i;
    }, Ue.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.title) && a.string(e.command);
    }, (H = C || (C = {})).replace = function(t, e) {
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
    }, (We = P || (P = {})).create = function(t, e, n) {
        var r = {
            label: t
        };
        return e !== void 0 && (r.needsConfirmation = e), n !== void 0 && (r.description = n), 
        r;
    }, We.is = function(t) {
        var e = t;
        return e !== void 0 && a.objectLiteral(e) && a.string(e.label) && (a.boolean(e.needsConfirmation) || e.needsConfirmation === void 0) && (a.string(e.description) || e.description === void 0);
    }, (v || (v = {})).is = function(t) {
        return typeof t == "string";
    }, (K = I || (I = {})).replace = function(t, e, n) {
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
        return C.is(e) && (P.is(e.annotationId) || v.is(e.annotationId));
    }, (Ve = z || (z = {})).create = function(t, e) {
        return {
            textDocument: t,
            edits: e
        };
    }, Ve.is = function(t) {
        var e = t;
        return a.defined(e) && X.is(e.textDocument) && Array.isArray(e.edits);
    }, (He = M || (M = {})).create = function(t, e, n) {
        var r = {
            kind: "create",
            uri: t
        };
        return e === void 0 || e.overwrite === void 0 && e.ignoreIfExists === void 0 || (r.options = e), 
        n !== void 0 && (r.annotationId = n), r;
    }, He.is = function(t) {
        var e = t;
        return e && e.kind === "create" && a.string(e.uri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (Ke = F || (F = {})).create = function(t, e, n, r) {
        var i = {
            kind: "rename",
            oldUri: t,
            newUri: e
        };
        return n === void 0 || n.overwrite === void 0 && n.ignoreIfExists === void 0 || (i.options = n), 
        r !== void 0 && (i.annotationId = r), i;
    }, Ke.is = function(t) {
        var e = t;
        return e && e.kind === "rename" && a.string(e.oldUri) && a.string(e.newUri) && (e.options === void 0 || (e.options.overwrite === void 0 || a.boolean(e.options.overwrite)) && (e.options.ignoreIfExists === void 0 || a.boolean(e.options.ignoreIfExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (ze = L || (L = {})).create = function(t, e, n) {
        var r = {
            kind: "delete",
            uri: t
        };
        return e === void 0 || e.recursive === void 0 && e.ignoreIfNotExists === void 0 || (r.options = e), 
        n !== void 0 && (r.annotationId = n), r;
    }, ze.is = function(t) {
        var e = t;
        return e && e.kind === "delete" && a.string(e.uri) && (e.options === void 0 || (e.options.recursive === void 0 || a.boolean(e.options.recursive)) && (e.options.ignoreIfNotExists === void 0 || a.boolean(e.options.ignoreIfNotExists))) && (e.annotationId === void 0 || v.is(e.annotationId));
    }, (ce || (ce = {})).is = function(t) {
        var e = t;
        return e && (e.changes !== void 0 || e.documentChanges !== void 0) && (e.documentChanges === void 0 || e.documentChanges.every(function(n) {
            return a.string(n.kind) ? M.is(n) || F.is(n) || L.is(n) : z.is(n);
        }));
    };
    var Xe, Be, $e, qe, X, Qe, Ge, Je, j, Ye, de, h, l, ge, Ze, et, tt, nt, rt, it, ot, at, B, st, ut, ct, dt, O, le, gt, f, g, lt, ht, ft, pt, mt, y, vt, _t, wt, kt, bt, yt, Et, xt, Ct, It, At, he, St, $ = function() {
        function t(e, n) {
            this.edits = e, this.changeAnnotations = n;
        }
        return t.prototype.insert = function(e, n, r) {
            var i, o;
            if (r === void 0 ? i = C.insert(e, n) : v.is(r) ? (o = r, i = I.insert(e, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(r), i = I.insert(e, n, o)), this.edits.push(i), 
            o !== void 0) return o;
        }, t.prototype.replace = function(e, n, r) {
            var i, o;
            if (r === void 0 ? i = C.replace(e, n) : v.is(r) ? (o = r, i = I.replace(e, n, r)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            o = this.changeAnnotations.manage(r), i = I.replace(e, n, o)), this.edits.push(i), 
            o !== void 0) return o;
        }, t.prototype.delete = function(e, n) {
            var r, i;
            if (n === void 0 ? r = C.del(e) : v.is(n) ? (i = n, r = I.del(e, n)) : (this.assertChangeAnnotations(this.changeAnnotations), 
            i = this.changeAnnotations.manage(n), r = I.del(e, i)), this.edits.push(r), 
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
    }(), Rt = function() {
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
            var r;
            if (v.is(e) ? r = e : (r = this.nextId(), n = e), this._annotations[r] !== void 0) throw new Error("Id " + r + " is already in use.");
            if (n === void 0) throw new Error("No annotation provided for id " + r);
            return this._annotations[r] = n, this._size++, r;
        }, t.prototype.nextId = function() {
            return this._counter++, this._counter.toString();
        }, t;
    }();
    (function() {
        function t(e) {
            var n = this;
            this._textEditChanges = Object.create(null), e !== void 0 ? (this._workspaceEdit = e, 
            e.documentChanges ? (this._changeAnnotations = new Rt(e.changeAnnotations), 
            e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach(function(r) {
                if (z.is(r)) {
                    var i = new $(r.edits, n._changeAnnotations);
                    n._textEditChanges[r.textDocument.uri] = i;
                }
            })) : e.changes && Object.keys(e.changes).forEach(function(r) {
                var i = new $(e.changes[r]);
                n._textEditChanges[r] = i;
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
                if (!(i = this._textEditChanges[n.uri])) {
                    var r = {
                        textDocument: n,
                        edits: o = []
                    };
                    this._workspaceEdit.documentChanges.push(r), i = new $(o, this._changeAnnotations), 
                    this._textEditChanges[n.uri] = i;
                }
                return i;
            }
            if (this.initChanges(), this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
            var i;
            if (!(i = this._textEditChanges[e])) {
                var o = [];
                this._workspaceEdit.changes[e] = o, i = new $(o), this._textEditChanges[e] = i;
            }
            return i;
        }, t.prototype.initDocumentChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Rt(), 
            this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
        }, t.prototype.initChanges = function() {
            this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = Object.create(null));
        }, t.prototype.createFile = function(e, n, r) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var i, o, s;
            if (P.is(n) || v.is(n) ? i = n : r = n, i === void 0 ? o = M.create(e, r) : (s = v.is(i) ? i : this._changeAnnotations.manage(i), 
            o = M.create(e, r, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        }, t.prototype.renameFile = function(e, n, r, i) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var o, s, c;
            if (P.is(r) || v.is(r) ? o = r : i = r, o === void 0 ? s = F.create(e, n, i) : (c = v.is(o) ? o : this._changeAnnotations.manage(o), 
            s = F.create(e, n, i, c)), this._workspaceEdit.documentChanges.push(s), 
            c !== void 0) return c;
        }, t.prototype.deleteFile = function(e, n, r) {
            if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var i, o, s;
            if (P.is(n) || v.is(n) ? i = n : r = n, i === void 0 ? o = L.create(e, r) : (s = v.is(i) ? i : this._changeAnnotations.manage(i), 
            o = L.create(e, r, s)), this._workspaceEdit.documentChanges.push(o), 
            s !== void 0) return s;
        };
    })(), (Be = Xe || (Xe = {})).create = function(t) {
        return {
            uri: t
        };
    }, Be.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri);
    }, (qe = $e || ($e = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, qe.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.integer(e.version);
    }, (Qe = X || (X = {})).create = function(t, e) {
        return {
            uri: t,
            version: e
        };
    }, Qe.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && (e.version === null || a.integer(e.version));
    }, (Je = Ge || (Ge = {})).create = function(t, e, n, r) {
        return {
            uri: t,
            languageId: e,
            version: n,
            text: r
        };
    }, Je.is = function(t) {
        var e = t;
        return a.defined(e) && a.string(e.uri) && a.string(e.languageId) && a.integer(e.version) && a.string(e.text);
    }, (Ye = j || (j = {})).PlainText = "plaintext", Ye.Markdown = "markdown", function(t) {
        t.is = function(e) {
            var n = e;
            return n === t.PlainText || n === t.Markdown;
        };
    }(j || (j = {})), (de || (de = {})).is = function(t) {
        var e = t;
        return a.objectLiteral(t) && j.is(e.kind) && a.string(e.value);
    }, (l = h || (h = {})).Text = 1, l.Method = 2, l.Function = 3, l.Constructor = 4, 
    l.Field = 5, l.Variable = 6, l.Class = 7, l.Interface = 8, l.Module = 9, l.Property = 10, 
    l.Unit = 11, l.Value = 12, l.Enum = 13, l.Keyword = 14, l.Snippet = 15, l.Color = 16, 
    l.File = 17, l.Reference = 18, l.Folder = 19, l.EnumMember = 20, l.Constant = 21, 
    l.Struct = 22, l.Event = 23, l.Operator = 24, l.TypeParameter = 25, (Ze = ge || (ge = {})).PlainText = 1, 
    Ze.Snippet = 2, (et || (et = {})).Deprecated = 1, (nt = tt || (tt = {})).create = function(t, e, n) {
        return {
            newText: t,
            insert: e,
            replace: n
        };
    }, nt.is = function(t) {
        var e = t;
        return e && a.string(e.newText) && p.is(e.insert) && p.is(e.replace);
    }, (it = rt || (rt = {})).asIs = 1, it.adjustIndentation = 2, (ot || (ot = {})).create = function(t) {
        return {
            label: t
        };
    }, (at || (at = {})).create = function(t, e) {
        return {
            items: t || [],
            isIncomplete: !!e
        };
    }, (st = B || (B = {})).fromPlainText = function(t) {
        return t.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, st.is = function(t) {
        var e = t;
        return a.string(e) || a.objectLiteral(e) && a.string(e.language) && a.string(e.value);
    }, (ut || (ut = {})).is = function(t) {
        var e = t;
        return !!e && a.objectLiteral(e) && (de.is(e.contents) || B.is(e.contents) || a.typedArray(e.contents, B.is)) && (t.range === void 0 || p.is(t.range));
    }, (ct || (ct = {})).create = function(t, e) {
        return e ? {
            label: t,
            documentation: e
        } : {
            label: t
        };
    }, (dt || (dt = {})).create = function(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var i = {
            label: t
        };
        return a.defined(e) && (i.documentation = e), a.defined(n) ? i.parameters = n : i.parameters = [], 
        i;
    }, (le = O || (O = {})).Text = 1, le.Read = 2, le.Write = 3, (gt || (gt = {})).create = function(t, e) {
        var n = {
            range: t
        };
        return a.number(e) && (n.kind = e), n;
    }, (g = f || (f = {})).File = 1, g.Module = 2, g.Namespace = 3, g.Package = 4, 
    g.Class = 5, g.Method = 6, g.Property = 7, g.Field = 8, g.Constructor = 9, g.Enum = 10, 
    g.Interface = 11, g.Function = 12, g.Variable = 13, g.Constant = 14, g.String = 15, 
    g.Number = 16, g.Boolean = 17, g.Array = 18, g.Object = 19, g.Key = 20, g.Null = 21, 
    g.EnumMember = 22, g.Struct = 23, g.Event = 24, g.Operator = 25, g.TypeParameter = 26, 
    (lt || (lt = {})).Deprecated = 1, (ht || (ht = {})).create = function(t, e, n, r, i) {
        var o = {
            name: t,
            kind: e,
            location: {
                uri: r,
                range: n
            }
        };
        return i && (o.containerName = i), o;
    }, (pt = ft || (ft = {})).create = function(t, e, n, r, i, o) {
        var s = {
            name: t,
            detail: e,
            kind: n,
            range: r,
            selectionRange: i
        };
        return o !== void 0 && (s.children = o), s;
    }, pt.is = function(t) {
        var e = t;
        return e && a.string(e.name) && a.number(e.kind) && p.is(e.range) && p.is(e.selectionRange) && (e.detail === void 0 || a.string(e.detail)) && (e.deprecated === void 0 || a.boolean(e.deprecated)) && (e.children === void 0 || Array.isArray(e.children)) && (e.tags === void 0 || Array.isArray(e.tags));
    }, (y = mt || (mt = {})).Empty = "", y.QuickFix = "quickfix", y.Refactor = "refactor", 
    y.RefactorExtract = "refactor.extract", y.RefactorInline = "refactor.inline", 
    y.RefactorRewrite = "refactor.rewrite", y.Source = "source", y.SourceOrganizeImports = "source.organizeImports", 
    y.SourceFixAll = "source.fixAll", (_t = vt || (vt = {})).create = function(t, e) {
        var n = {
            diagnostics: t
        };
        return e != null && (n.only = e), n;
    }, _t.is = function(t) {
        var e = t;
        return a.defined(e) && a.typedArray(e.diagnostics, V.is) && (e.only === void 0 || a.typedArray(e.only, a.string));
    }, (kt = wt || (wt = {})).create = function(t, e, n) {
        var r = {
            title: t
        }, i = !0;
        return typeof e == "string" ? (i = !1, r.kind = e) : D.is(e) ? r.command = e : r.edit = e, 
        i && n !== void 0 && (r.kind = n), r;
    }, kt.is = function(t) {
        var e = t;
        return e && a.string(e.title) && (e.diagnostics === void 0 || a.typedArray(e.diagnostics, V.is)) && (e.kind === void 0 || a.string(e.kind)) && (e.edit !== void 0 || e.command !== void 0) && (e.command === void 0 || D.is(e.command)) && (e.isPreferred === void 0 || a.boolean(e.isPreferred)) && (e.edit === void 0 || ce.is(e.edit));
    }, (yt = bt || (bt = {})).create = function(t, e) {
        var n = {
            range: t
        };
        return a.defined(e) && (n.data = e), n;
    }, yt.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.undefined(e.command) || D.is(e.command));
    }, (xt = Et || (Et = {})).create = function(t, e) {
        return {
            tabSize: t,
            insertSpaces: e
        };
    }, xt.is = function(t) {
        var e = t;
        return a.defined(e) && a.uinteger(e.tabSize) && a.boolean(e.insertSpaces);
    }, (It = Ct || (Ct = {})).create = function(t, e, n) {
        return {
            range: t,
            target: e,
            data: n
        };
    }, It.is = function(t) {
        var e = t;
        return a.defined(e) && p.is(e.range) && (a.undefined(e.target) || a.string(e.target));
    }, (he = At || (At = {})).create = function(t, e) {
        return {
            range: t,
            parent: e
        };
    }, he.is = function(t) {
        var e = t;
        return e !== void 0 && p.is(e.range) && (e.parent === void 0 || he.is(e.parent));
    }, function(t) {
        function e(n, r) {
            if (n.length <= 1) return n;
            var i = n.length / 2 | 0, o = n.slice(0, i), s = n.slice(i);
            e(o, r), e(s, r);
            for (var c = 0, _ = 0, d = 0; c < o.length && _ < s.length; ) {
                var w = r(o[c], s[_]);
                n[d++] = w <= 0 ? o[c++] : s[_++];
            }
            for (;c < o.length; ) n[d++] = o[c++];
            for (;_ < s.length; ) n[d++] = s[_++];
            return n;
        }
        t.create = function(n, r, i, o) {
            return new qt(n, r, i, o);
        }, t.is = function(n) {
            var r = n;
            return !!(a.defined(r) && a.string(r.uri) && (a.undefined(r.languageId) || a.string(r.languageId)) && a.uinteger(r.lineCount) && a.func(r.getText) && a.func(r.positionAt) && a.func(r.offsetAt));
        }, t.applyEdits = function(n, r) {
            for (var i = n.getText(), o = e(r, function(E, N) {
                var Ot = E.range.start.line - N.range.start.line;
                return Ot === 0 ? E.range.start.character - N.range.start.character : Ot;
            }), s = i.length, c = o.length - 1; c >= 0; c--) {
                var _ = o[c], d = n.offsetAt(_.range.start), w = n.offsetAt(_.range.end);
                if (!(w <= s)) throw new Error("Overlapping edit");
                i = i.substring(0, d) + _.newText + i.substring(w, i.length), s = d;
            }
            return i;
        };
    }(St || (St = {}));
    var a, k, A, qt = function() {
        function t(e, n, r, i) {
            this._uri = e, this._languageId = n, this._version = r, this._content = i, 
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
                var n = this.offsetAt(e.start), r = this.offsetAt(e.end);
                return this._content.substring(n, r);
            }
            return this._content;
        }, t.prototype.update = function(e, n) {
            this._content = e.text, this._version = n, this._lineOffsets = void 0;
        }, t.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
                for (var e = [], n = this._content, r = !0, i = 0; i < n.length; i++) {
                    r && (e.push(i), r = !1);
                    var o = n.charAt(i);
                    r = o === "\r" || o === `
`, o === "\r" && i + 1 < n.length && n.charAt(i + 1) === `
` && i++;
                }
                r && n.length > 0 && e.push(n.length), this._lineOffsets = e;
            }
            return this._lineOffsets;
        }, t.prototype.positionAt = function(e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var n = this.getLineOffsets(), r = 0, i = n.length;
            if (i === 0) return b.create(0, e);
            for (;r < i; ) {
                var o = Math.floor((r + i) / 2);
                n[o] > e ? i = o : r = o + 1;
            }
            var s = r - 1;
            return b.create(s, e - n[s]);
        }, t.prototype.offsetAt = function(e) {
            var n = this.getLineOffsets();
            if (e.line >= n.length) return this._content.length;
            if (e.line < 0) return 0;
            var r = n[e.line], i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
            return Math.max(Math.min(r + e.character, i), r);
        }, Object.defineProperty(t.prototype, "lineCount", {
            get: function() {
                return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0
        }), t;
    }();
    k = a || (a = {}), A = Object.prototype.toString, k.defined = function(t) {
        return t !== void 0;
    }, k.undefined = function(t) {
        return t === void 0;
    }, k.boolean = function(t) {
        return t === !0 || t === !1;
    }, k.string = function(t) {
        return A.call(t) === "[object String]";
    }, k.number = function(t) {
        return A.call(t) === "[object Number]";
    }, k.numberRange = function(t, e, n) {
        return A.call(t) === "[object Number]" && e <= t && t <= n;
    }, k.integer = function(t) {
        return A.call(t) === "[object Number]" && -2147483648 <= t && t <= 2147483647;
    }, k.uinteger = function(t) {
        return A.call(t) === "[object Number]" && 0 <= t && t <= 2147483647;
    }, k.func = function(t) {
        return A.call(t) === "[object Function]";
    }, k.objectLiteral = function(t) {
        return t !== null && typeof t == "object";
    }, k.typedArray = function(t, e) {
        return Array.isArray(t) && t.every(e);
    }, Ut = class {
        constructor(t, e, n) {
            this._languageId = t, this._worker = e, this._disposables = [], this._listener = Object.create(null);
            const r = o => {
                let s, c = o.getLanguageId();
                c === this._languageId && (this._listener[o.uri.toString()] = o.onDidChangeContent(() => {
                    window.clearTimeout(s), s = window.setTimeout(() => this._doValidate(o.uri, c), 500);
                }), this._doValidate(o.uri, c));
            }, i = o => {
                u.editor.setModelMarkers(o, this._languageId, []);
                let s = o.uri.toString(), c = this._listener[s];
                c && (c.dispose(), delete this._listener[s]);
            };
            this._disposables.push(u.editor.onDidCreateModel(r)), this._disposables.push(u.editor.onWillDisposeModel(i)), 
            this._disposables.push(u.editor.onDidChangeModelLanguage(o => {
                i(o.model), r(o.model);
            })), this._disposables.push(n(o => {
                u.editor.getModels().forEach(s => {
                    s.getLanguageId() === this._languageId && (i(s), r(s));
                });
            })), this._disposables.push({
                dispose: () => {
                    u.editor.getModels().forEach(i);
                    for (let o in this._listener) this._listener[o].dispose();
                }
            }), u.editor.getModels().forEach(r);
        }
        dispose() {
            this._disposables.forEach(t => t && t.dispose()), this._disposables.length = 0;
        }
        _doValidate(t, e) {
            this._worker(t).then(n => n.doValidation(t.toString())).then(n => {
                const r = n.map(o => function(s, c) {
                    let _ = typeof c.code == "number" ? String(c.code) : c.code;
                    return {
                        severity: Qt(c.severity),
                        startLineNumber: c.range.start.line + 1,
                        startColumn: c.range.start.character + 1,
                        endLineNumber: c.range.end.line + 1,
                        endColumn: c.range.end.character + 1,
                        message: c.message,
                        code: _,
                        source: c.source
                    };
                }(0, o));
                let i = u.editor.getModel(t);
                i && i.getLanguageId() === e && u.editor.setModelMarkers(i, e, r);
            }).then(void 0, n => {});
        }
    };
    function Qt(t) {
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
    pe = class {
        constructor(t, e) {
            this._worker = t, this._triggerCharacters = e;
        }
        get triggerCharacters() {
            return this._triggerCharacters;
        }
        provideCompletionItems(t, e, n, r) {
            const i = t.uri;
            return this._worker(i).then(o => o.doComplete(i.toString(), x(e))).then(o => {
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
                        kind: Gt(d.kind)
                    };
                    var E, N;
                    return d.textEdit && ((N = d.textEdit).insert !== void 0 && N.replace !== void 0 ? w.range = {
                        insert: m(d.textEdit.insert),
                        replace: m(d.textEdit.replace)
                    } : w.range = m(d.textEdit.range), w.insertText = d.textEdit.newText), 
                    d.additionalTextEdits && (w.additionalTextEdits = d.additionalTextEdits.map(S)), 
                    d.insertTextFormat === ge.Snippet && (w.insertTextRules = u.languages.CompletionItemInsertTextRule.InsertAsSnippet), 
                    w;
                });
                return {
                    isIncomplete: o.isIncomplete,
                    suggestions: _
                };
            });
        }
    }, x = function(t) {
        if (t) return {
            character: t.column - 1,
            line: t.lineNumber - 1
        };
    }, ie = function(t) {
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
    function Gt(t) {
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
    }, ee = class {
        constructor(t) {
            this._worker = t;
        }
        provideHover(t, e, n) {
            let r = t.uri;
            return this._worker(r).then(i => i.doHover(r.toString(), x(e))).then(i => {
                if (i) return {
                    range: m(i.range),
                    contents: Jt(i.contents)
                };
            });
        }
    };
    function Pt(t) {
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
    function Jt(t) {
        if (t) return Array.isArray(t) ? t.map(Pt) : [ Pt(t) ];
    }
    Q = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentHighlights(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.findDocumentHighlights(r.toString(), x(e))).then(i => {
                if (i) return i.map(o => ({
                    range: m(o.range),
                    kind: Yt(o.kind)
                }));
            });
        }
    };
    function Yt(t) {
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
    Nt = class {
        constructor(t) {
            this._worker = t;
        }
        provideDefinition(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.findDefinition(r.toString(), x(e))).then(i => {
                if (i) return [ Tt(i) ];
            });
        }
    };
    function Tt(t) {
        return {
            uri: u.Uri.parse(t.uri),
            range: m(t.range)
        };
    }
    Vt = class {
        constructor(t) {
            this._worker = t;
        }
        provideReferences(t, e, n, r) {
            const i = t.uri;
            return this._worker(i).then(o => o.findReferences(i.toString(), x(e))).then(o => {
                if (o) return o.map(Tt);
            });
        }
    }, te = class {
        constructor(t) {
            this._worker = t;
        }
        provideRenameEdits(t, e, n, r) {
            const i = t.uri;
            return this._worker(i).then(o => o.doRename(i.toString(), x(e), n)).then(o => function(s) {
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
    }, Y = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentSymbols(t, e) {
            const n = t.uri;
            return this._worker(n).then(r => r.findDocumentSymbols(n.toString())).then(r => {
                if (r) return r.map(i => "children" in i ? Dt(i) : {
                    name: i.name,
                    detail: "",
                    containerName: i.containerName,
                    kind: Mt(i.kind),
                    range: m(i.location.range),
                    selectionRange: m(i.location.range),
                    tags: []
                });
            });
        }
    };
    function Dt(t) {
        return {
            name: t.name,
            detail: t.detail ?? "",
            kind: Mt(t.kind),
            range: m(t.range),
            selectionRange: m(t.selectionRange),
            tags: t.tags ?? [],
            children: (t.children ?? []).map(e => Dt(e))
        };
    }
    function Mt(t) {
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
    G = class {
        constructor(t) {
            this._worker = t;
        }
        provideLinks(t, e) {
            const n = t.uri;
            return this._worker(n).then(r => r.findDocumentLinks(n.toString())).then(r => {
                if (r) return {
                    links: r.map(i => ({
                        range: m(i.range),
                        url: i.target
                    }))
                };
            });
        }
    }, q = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentFormattingEdits(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.format(r.toString(), null, Ft(e)).then(o => {
                if (o && o.length !== 0) return o.map(S);
            }));
        }
    }, J = class {
        constructor(t) {
            this._worker = t, this.canFormatMultipleRanges = !1;
        }
        provideDocumentRangeFormattingEdits(t, e, n, r) {
            const i = t.uri;
            return this._worker(i).then(o => o.format(i.toString(), ie(e), Ft(n)).then(s => {
                if (s && s.length !== 0) return s.map(S);
            }));
        }
    };
    function Ft(t) {
        return {
            tabSize: t.tabSize,
            insertSpaces: t.insertSpaces
        };
    }
    Wt = class {
        constructor(t) {
            this._worker = t;
        }
        provideDocumentColors(t, e) {
            const n = t.uri;
            return this._worker(n).then(r => r.findDocumentColors(n.toString())).then(r => {
                if (r) return r.map(i => ({
                    color: i.color,
                    range: m(i.range)
                }));
            });
        }
        provideColorPresentations(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.getColorPresentations(r.toString(), e.color, ie(e.range))).then(i => {
                if (i) return i.map(o => {
                    let s = {
                        label: o.label
                    };
                    return o.textEdit && (s.textEdit = S(o.textEdit)), o.additionalTextEdits && (s.additionalTextEdits = o.additionalTextEdits.map(S)), 
                    s;
                });
            });
        }
    }, Z = class {
        constructor(t) {
            this._worker = t;
        }
        provideFoldingRanges(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.getFoldingRanges(r.toString(), e)).then(i => {
                if (i) return i.map(o => {
                    const s = {
                        start: o.startLine + 1,
                        end: o.endLine + 1
                    };
                    return o.kind !== void 0 && (s.kind = function(c) {
                        switch (c) {
                          case T.Comment:
                            return u.languages.FoldingRangeKind.Comment;

                          case T.Imports:
                            return u.languages.FoldingRangeKind.Imports;

                          case T.Region:
                            return u.languages.FoldingRangeKind.Region;
                        }
                    }(o.kind)), s;
                });
            });
        }
    };
    let fe;
    ne = class {
        constructor(t) {
            this._worker = t;
        }
        provideSelectionRanges(t, e, n) {
            const r = t.uri;
            return this._worker(r).then(i => i.getSelectionRanges(r.toString(), e.map(x))).then(i => {
                if (i) return i.map(o => {
                    const s = [];
                    for (;o; ) s.push({
                        range: m(o.range)
                    }), o = o.parent;
                    return s;
                });
            });
        }
    }, fe = class extends pe {
        constructor(t) {
            super(t, [ ".", ":", "<", '"', "=", "/" ]);
        }
    }, Kt = function(t) {
        const e = new re(t), n = (...i) => e.getLanguageServiceWorker(...i);
        let r = t.languageId;
        u.languages.registerCompletionItemProvider(r, new fe(n)), u.languages.registerHoverProvider(r, new ee(n)), 
        u.languages.registerDocumentHighlightProvider(r, new Q(n)), u.languages.registerLinkProvider(r, new G(n)), 
        u.languages.registerFoldingRangeProvider(r, new Z(n)), u.languages.registerDocumentSymbolProvider(r, new Y(n)), 
        u.languages.registerSelectionRangeProvider(r, new ne(n)), u.languages.registerRenameProvider(r, new te(n)), 
        r === "html" && (u.languages.registerDocumentFormattingEditProvider(r, new q(n)), 
        u.languages.registerDocumentRangeFormattingEditProvider(r, new J(n)));
    }, Ht = function(t) {
        const e = [], n = [], r = new re(t);
        e.push(r);
        const i = (...o) => r.getLanguageServiceWorker(...o);
        return function() {
            const {
                languageId: o,
                modeConfiguration: s
            } = t;
            jt(n), s.completionItems && n.push(u.languages.registerCompletionItemProvider(o, new fe(i))), 
            s.hovers && n.push(u.languages.registerHoverProvider(o, new ee(i))), 
            s.documentHighlights && n.push(u.languages.registerDocumentHighlightProvider(o, new Q(i))), 
            s.links && n.push(u.languages.registerLinkProvider(o, new G(i))), s.documentSymbols && n.push(u.languages.registerDocumentSymbolProvider(o, new Y(i))), 
            s.rename && n.push(u.languages.registerRenameProvider(o, new te(i))), 
            s.foldingRanges && n.push(u.languages.registerFoldingRangeProvider(o, new Z(i))), 
            s.selectionRanges && n.push(u.languages.registerSelectionRangeProvider(o, new ne(i))), 
            s.documentFormattingEdits && n.push(u.languages.registerDocumentFormattingEditProvider(o, new q(i))), 
            s.documentRangeFormattingEdits && n.push(u.languages.registerDocumentRangeFormattingEditProvider(o, new J(i)));
        }(), e.push(Lt(n)), Lt(e);
    };
    function Lt(t) {
        return {
            dispose: () => jt(t)
        };
    }
    function jt(t) {
        for (;t.length; ) t.pop().dispose();
    }
});

export {
    pe as CompletionAdapter,
    Nt as DefinitionAdapter,
    Ut as DiagnosticsAdapter,
    Wt as DocumentColorAdapter,
    q as DocumentFormattingEditProvider,
    Q as DocumentHighlightAdapter,
    G as DocumentLinkAdapter,
    J as DocumentRangeFormattingEditProvider,
    Y as DocumentSymbolAdapter,
    Z as FoldingRangeAdapter,
    ee as HoverAdapter,
    Vt as ReferenceAdapter,
    te as RenameAdapter,
    ne as SelectionRangeAdapter,
    re as WorkerManager,
    nn as __tla,
    x as fromPosition,
    ie as fromRange,
    Ht as setupMode,
    Kt as setupMode1,
    m as toRange,
    S as toTextEdit
};