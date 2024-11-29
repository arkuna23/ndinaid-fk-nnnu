import {
    t as re,
    m as ne,
    __tla as ae
} from "./index-1344e56b.js";

import {
    __tla as oe
} from "./index-6c08ea4c.js";

import "./_plugin-vue_export-helper-1b428a4d.js";

let _, F, I, T, P, L, w, O, N, g, M, K, R, E, H, V, W, j, x, J, Q, q, X, le = Promise.all([ (() => {
    try {
        return ae;
    } catch {}
})(), (() => {
    try {
        return oe;
    } catch {}
})() ]).then(async () => {
    var p;
    var B, U, Z = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, te = Object.getOwnPropertyNames, se = Object.prototype.hasOwnProperty, $ = (e, t, r, l) => {
        if (t && typeof t == "object" || typeof t == "function") for (let s of te(t)) se.call(e, s) || s === r || Z(e, s, {
            get: () => t[s],
            enumerable: !(l = ee(t, s)) || l.enumerable
        });
        return e;
    }, n = {};
    $(n, B = ne, "default"), U && $(U, B, "default");
    let i;
    j = class {
        constructor(e, t) {
            this._modeId = e, this._defaults = t, this._worker = null, this._client = null, 
            this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker()), 
            this._updateExtraLibsToken = 0, this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(() => this._updateExtraLibs());
        }
        dispose() {
            this._configChangeListener.dispose(), this._extraLibsChangeListener.dispose(), 
            this._stopWorker();
        }
        _stopWorker() {
            this._worker && (this._worker.dispose(), this._worker = null), this._client = null;
        }
        async _updateExtraLibs() {
            if (!this._worker) return;
            const e = ++this._updateExtraLibsToken, t = await this._worker.getProxy();
            this._updateExtraLibsToken === e && t.updateExtraLibs(this._defaults.getExtraLibs());
        }
        _getClient() {
            return this._client || (this._client = (async () => (this._worker = n.editor.createWebWorker({
                moduleId: "vs/language/typescript/tsWorker",
                label: this._modeId,
                keepIdleModels: !0,
                createData: {
                    compilerOptions: this._defaults.getCompilerOptions(),
                    extraLibs: this._defaults.getExtraLibs(),
                    customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                    inlayHintsOptions: this._defaults.inlayHintsOptions
                }
            }), this._defaults.getEagerModelSync() ? await this._worker.withSyncedResources(n.editor.getModels().filter(e => e.getLanguageId() === this._modeId).map(e => e.uri)) : await this._worker.getProxy()))()), 
            this._client;
        }
        async getLanguageServiceWorker(...e) {
            const t = await this._getClient();
            return this._worker && await this._worker.withSyncedResources(e), t;
        }
    }, i = {}, x = function(e, t, r = 0) {
        if (typeof e == "string") return e;
        if (e === void 0) return "";
        let l = "";
        if (r) {
            l += t;
            for (let s = 0; s < r; s++) l += "  ";
        }
        if (l += e.messageText, r++, e.next) for (const s of e.next) l += x(s, t, r);
        return l;
    };
    function y(e) {
        return e ? e.map(t => t.text).join("") : "";
    }
    i["lib.d.ts"] = !0, i["lib.decorators.d.ts"] = !0, i["lib.decorators.legacy.d.ts"] = !0, 
    i["lib.dom.d.ts"] = !0, i["lib.dom.iterable.d.ts"] = !0, i["lib.es2015.collection.d.ts"] = !0, 
    i["lib.es2015.core.d.ts"] = !0, i["lib.es2015.d.ts"] = !0, i["lib.es2015.generator.d.ts"] = !0, 
    i["lib.es2015.iterable.d.ts"] = !0, i["lib.es2015.promise.d.ts"] = !0, i["lib.es2015.proxy.d.ts"] = !0, 
    i["lib.es2015.reflect.d.ts"] = !0, i["lib.es2015.symbol.d.ts"] = !0, i["lib.es2015.symbol.wellknown.d.ts"] = !0, 
    i["lib.es2016.array.include.d.ts"] = !0, i["lib.es2016.d.ts"] = !0, i["lib.es2016.full.d.ts"] = !0, 
    i["lib.es2017.d.ts"] = !0, i["lib.es2017.full.d.ts"] = !0, i["lib.es2017.intl.d.ts"] = !0, 
    i["lib.es2017.object.d.ts"] = !0, i["lib.es2017.sharedmemory.d.ts"] = !0, i["lib.es2017.string.d.ts"] = !0, 
    i["lib.es2017.typedarrays.d.ts"] = !0, i["lib.es2018.asyncgenerator.d.ts"] = !0, 
    i["lib.es2018.asynciterable.d.ts"] = !0, i["lib.es2018.d.ts"] = !0, i["lib.es2018.full.d.ts"] = !0, 
    i["lib.es2018.intl.d.ts"] = !0, i["lib.es2018.promise.d.ts"] = !0, i["lib.es2018.regexp.d.ts"] = !0, 
    i["lib.es2019.array.d.ts"] = !0, i["lib.es2019.d.ts"] = !0, i["lib.es2019.full.d.ts"] = !0, 
    i["lib.es2019.intl.d.ts"] = !0, i["lib.es2019.object.d.ts"] = !0, i["lib.es2019.string.d.ts"] = !0, 
    i["lib.es2019.symbol.d.ts"] = !0, i["lib.es2020.bigint.d.ts"] = !0, i["lib.es2020.d.ts"] = !0, 
    i["lib.es2020.date.d.ts"] = !0, i["lib.es2020.full.d.ts"] = !0, i["lib.es2020.intl.d.ts"] = !0, 
    i["lib.es2020.number.d.ts"] = !0, i["lib.es2020.promise.d.ts"] = !0, i["lib.es2020.sharedmemory.d.ts"] = !0, 
    i["lib.es2020.string.d.ts"] = !0, i["lib.es2020.symbol.wellknown.d.ts"] = !0, 
    i["lib.es2021.d.ts"] = !0, i["lib.es2021.full.d.ts"] = !0, i["lib.es2021.intl.d.ts"] = !0, 
    i["lib.es2021.promise.d.ts"] = !0, i["lib.es2021.string.d.ts"] = !0, i["lib.es2021.weakref.d.ts"] = !0, 
    i["lib.es2022.array.d.ts"] = !0, i["lib.es2022.d.ts"] = !0, i["lib.es2022.error.d.ts"] = !0, 
    i["lib.es2022.full.d.ts"] = !0, i["lib.es2022.intl.d.ts"] = !0, i["lib.es2022.object.d.ts"] = !0, 
    i["lib.es2022.regexp.d.ts"] = !0, i["lib.es2022.sharedmemory.d.ts"] = !0, i["lib.es2022.string.d.ts"] = !0, 
    i["lib.es2023.array.d.ts"] = !0, i["lib.es2023.d.ts"] = !0, i["lib.es2023.full.d.ts"] = !0, 
    i["lib.es5.d.ts"] = !0, i["lib.es6.d.ts"] = !0, i["lib.esnext.d.ts"] = !0, i["lib.esnext.full.d.ts"] = !0, 
    i["lib.esnext.intl.d.ts"] = !0, i["lib.scripthost.d.ts"] = !0, i["lib.webworker.d.ts"] = !0, 
    i["lib.webworker.importscripts.d.ts"] = !0, i["lib.webworker.iterable.d.ts"] = !0, 
    _ = class {
        constructor(e) {
            this._worker = e;
        }
        _textSpanToRange(e, t) {
            let r = e.getPositionAt(t.start), l = e.getPositionAt(t.start + t.length), {
                lineNumber: s,
                column: d
            } = r, {
                lineNumber: a,
                column: o
            } = l;
            return {
                startLineNumber: s,
                startColumn: d,
                endLineNumber: a,
                endColumn: o
            };
        }
    }, M = class {
        constructor(e) {
            this._worker = e, this._libFiles = {}, this._hasFetchedLibFiles = !1, 
            this._fetchLibFilesPromise = null;
        }
        isLibFile(e) {
            return !!e && e.path.indexOf("/lib.") === 0 && !!i[e.path.slice(1)];
        }
        getOrCreateModel(e) {
            const t = n.Uri.parse(e), r = n.editor.getModel(t);
            if (r) return r;
            if (this.isLibFile(t) && this._hasFetchedLibFiles) return n.editor.createModel(this._libFiles[t.path.slice(1)], "typescript", t);
            const l = re.getExtraLibs()[e];
            return l ? n.editor.createModel(l.content, "typescript", t) : null;
        }
        _containsLibFile(e) {
            for (let t of e) if (this.isLibFile(t)) return !0;
            return !1;
        }
        async fetchLibFilesIfNecessary(e) {
            this._containsLibFile(e) && await this._fetchLibFiles();
        }
        _fetchLibFiles() {
            return this._fetchLibFilesPromise || (this._fetchLibFilesPromise = this._worker().then(e => e.getLibFiles()).then(e => {
                this._hasFetchedLibFiles = !0, this._libFiles = e;
            })), this._fetchLibFilesPromise;
        }
    }, T = class extends _ {
        constructor(e, t, r, l) {
            super(l), this._libFiles = e, this._defaults = t, this._selector = r, 
            this._disposables = [], this._listener = Object.create(null);
            const s = o => {
                if (o.getLanguageId() !== r) return;
                const c = () => {
                    const {
                        onlyVisible: f
                    } = this._defaults.getDiagnosticsOptions();
                    f ? o.isAttachedToEditor() && this._doValidate(o) : this._doValidate(o);
                };
                let u;
                const h = o.onDidChangeContent(() => {
                    clearTimeout(u), u = window.setTimeout(c, 500);
                }), m = o.onDidChangeAttached(() => {
                    const {
                        onlyVisible: f
                    } = this._defaults.getDiagnosticsOptions();
                    f && (o.isAttachedToEditor() ? c() : n.editor.setModelMarkers(o, this._selector, []));
                });
                this._listener[o.uri.toString()] = {
                    dispose() {
                        h.dispose(), m.dispose(), clearTimeout(u);
                    }
                }, c();
            }, d = o => {
                n.editor.setModelMarkers(o, this._selector, []);
                const c = o.uri.toString();
                this._listener[c] && (this._listener[c].dispose(), delete this._listener[c]);
            };
            this._disposables.push(n.editor.onDidCreateModel(o => s(o))), this._disposables.push(n.editor.onWillDisposeModel(d)), 
            this._disposables.push(n.editor.onDidChangeModelLanguage(o => {
                d(o.model), s(o.model);
            })), this._disposables.push({
                dispose() {
                    for (const o of n.editor.getModels()) d(o);
                }
            });
            const a = () => {
                for (const o of n.editor.getModels()) d(o), s(o);
            };
            this._disposables.push(this._defaults.onDidChange(a)), this._disposables.push(this._defaults.onDidExtraLibsChange(a)), 
            n.editor.getModels().forEach(o => s(o));
        }
        dispose() {
            this._disposables.forEach(e => e && e.dispose()), this._disposables = [];
        }
        async _doValidate(e) {
            const t = await this._worker(e.uri);
            if (e.isDisposed()) return;
            const r = [], {
                noSyntaxValidation: l,
                noSemanticValidation: s,
                noSuggestionDiagnostics: d
            } = this._defaults.getDiagnosticsOptions();
            l || r.push(t.getSyntacticDiagnostics(e.uri.toString())), s || r.push(t.getSemanticDiagnostics(e.uri.toString())), 
            d || r.push(t.getSuggestionDiagnostics(e.uri.toString()));
            const a = await Promise.all(r);
            if (!a || e.isDisposed()) return;
            const o = a.reduce((u, h) => h.concat(u), []).filter(u => (this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(u.code) === -1), c = o.map(u => u.relatedInformation || []).reduce((u, h) => h.concat(u), []).map(u => u.file ? n.Uri.parse(u.file.fileName) : null);
            await this._libFiles.fetchLibFilesIfNecessary(c), e.isDisposed() || n.editor.setModelMarkers(e, this._selector, o.map(u => this._convertDiagnostics(e, u)));
        }
        _convertDiagnostics(e, t) {
            const r = t.start || 0, l = t.length || 1, {
                lineNumber: s,
                column: d
            } = e.getPositionAt(r), {
                lineNumber: a,
                column: o
            } = e.getPositionAt(r + l), c = [];
            return t.reportsUnnecessary && c.push(n.MarkerTag.Unnecessary), t.reportsDeprecated && c.push(n.MarkerTag.Deprecated), 
            {
                severity: this._tsDiagnosticCategoryToMarkerSeverity(t.category),
                startLineNumber: s,
                startColumn: d,
                endLineNumber: a,
                endColumn: o,
                message: x(t.messageText, `
`),
                code: t.code.toString(),
                tags: c,
                relatedInformation: this._convertRelatedInformation(e, t.relatedInformation)
            };
        }
        _convertRelatedInformation(e, t) {
            if (!t) return [];
            const r = [];
            return t.forEach(l => {
                let s = e;
                if (l.file && (s = this._libFiles.getOrCreateModel(l.file.fileName)), 
                !s) return;
                const d = l.start || 0, a = l.length || 1, {
                    lineNumber: o,
                    column: c
                } = s.getPositionAt(d), {
                    lineNumber: u,
                    column: h
                } = s.getPositionAt(d + a);
                r.push({
                    resource: s.uri,
                    startLineNumber: o,
                    startColumn: c,
                    endLineNumber: u,
                    endColumn: h,
                    message: x(l.messageText, `
`)
                });
            }), r;
        }
        _tsDiagnosticCategoryToMarkerSeverity(e) {
            switch (e) {
              case 1:
                return n.MarkerSeverity.Error;

              case 3:
                return n.MarkerSeverity.Info;

              case 0:
                return n.MarkerSeverity.Warning;

              case 2:
                return n.MarkerSeverity.Hint;
            }
            return n.MarkerSeverity.Info;
        }
    }, W = class C extends _ {
        get triggerCharacters() {
            return [ "." ];
        }
        async provideCompletionItems(t, r, l, s) {
            const d = t.getWordUntilPosition(r), a = new n.Range(r.lineNumber, d.startColumn, r.lineNumber, d.endColumn), o = t.uri, c = t.getOffsetAt(r), u = await this._worker(o);
            if (t.isDisposed()) return;
            const h = await u.getCompletionsAtPosition(o.toString(), c);
            if (!(!h || t.isDisposed())) return {
                suggestions: h.entries.map(m => {
                    let f = a;
                    if (m.replacementSpan) {
                        const v = t.getPositionAt(m.replacementSpan.start), S = t.getPositionAt(m.replacementSpan.start + m.replacementSpan.length);
                        f = new n.Range(v.lineNumber, v.column, S.lineNumber, S.column);
                    }
                    const k = [];
                    return m.kindModifiers !== void 0 && m.kindModifiers.indexOf("deprecated") !== -1 && k.push(n.languages.CompletionItemTag.Deprecated), 
                    {
                        uri: o,
                        position: r,
                        offset: c,
                        range: f,
                        label: m.name,
                        insertText: m.name,
                        sortText: m.sortText,
                        kind: C.convertKind(m.kind),
                        tags: k
                    };
                })
            };
        }
        async resolveCompletionItem(t, r) {
            const l = t, s = l.uri, d = l.position, a = l.offset, o = await this._worker(s), c = await o.getCompletionEntryDetails(s.toString(), a, l.label);
            return c ? {
                uri: s,
                position: d,
                label: c.name,
                kind: C.convertKind(c.kind),
                detail: y(c.displayParts),
                documentation: {
                    value: C.createDocumentationString(c)
                }
            } : l;
        }
        static convertKind(t) {
            switch (t) {
              case g.primitiveType:
              case g.keyword:
                return n.languages.CompletionItemKind.Keyword;

              case g.variable:
              case g.localVariable:
                return n.languages.CompletionItemKind.Variable;

              case g.memberVariable:
              case g.memberGetAccessor:
              case g.memberSetAccessor:
                return n.languages.CompletionItemKind.Field;

              case g.function:
              case g.memberFunction:
              case g.constructSignature:
              case g.callSignature:
              case g.indexSignature:
                return n.languages.CompletionItemKind.Function;

              case g.enum:
                return n.languages.CompletionItemKind.Enum;

              case g.module:
                return n.languages.CompletionItemKind.Module;

              case g.class:
                return n.languages.CompletionItemKind.Class;

              case g.interface:
                return n.languages.CompletionItemKind.Interface;

              case g.warning:
                return n.languages.CompletionItemKind.File;
            }
            return n.languages.CompletionItemKind.Property;
        }
        static createDocumentationString(t) {
            let r = y(t.documentation);
            if (t.tags) for (const l of t.tags) r += `

${z(l)}`;
            return r;
        }
    };
    function z(e) {
        let t = `*@${e.name}*`;
        if (e.name === "param" && e.text) {
            const [ r, ...l ] = e.text;
            t += `\`${r.text}\``, l.length > 0 && (t += ` \u2014 ${l.map(s => s.text).join(" ")}`);
        } else Array.isArray(e.text) ? t += ` \u2014 ${e.text.map(r => r.text).join(" ")}` : e.text && (t += ` \u2014 ${e.text}`);
        return t;
    }
    let b;
    V = class Y extends _ {
        constructor() {
            super(...arguments), this.signatureHelpTriggerCharacters = [ "(", "," ];
        }
        static _toSignatureHelpTriggerReason(t) {
            switch (t.triggerKind) {
              case n.languages.SignatureHelpTriggerKind.TriggerCharacter:
                return t.triggerCharacter ? t.isRetrigger ? {
                    kind: "retrigger",
                    triggerCharacter: t.triggerCharacter
                } : {
                    kind: "characterTyped",
                    triggerCharacter: t.triggerCharacter
                } : {
                    kind: "invoked"
                };

              case n.languages.SignatureHelpTriggerKind.ContentChange:
                return t.isRetrigger ? {
                    kind: "retrigger"
                } : {
                    kind: "invoked"
                };

              case n.languages.SignatureHelpTriggerKind.Invoke:
              default:
                return {
                    kind: "invoked"
                };
            }
        }
        async provideSignatureHelp(t, r, l, s) {
            const d = t.uri, a = t.getOffsetAt(r), o = await this._worker(d);
            if (t.isDisposed()) return;
            const c = await o.getSignatureHelpItems(d.toString(), a, {
                triggerReason: Y._toSignatureHelpTriggerReason(s)
            });
            if (!c || t.isDisposed()) return;
            const u = {
                activeSignature: c.selectedItemIndex,
                activeParameter: c.argumentIndex,
                signatures: []
            };
            return c.items.forEach(h => {
                const m = {
                    label: "",
                    parameters: []
                };
                m.documentation = {
                    value: y(h.documentation)
                }, m.label += y(h.prefixDisplayParts), h.parameters.forEach((f, k, v) => {
                    const S = y(f.displayParts), ie = {
                        label: S,
                        documentation: {
                            value: y(f.documentation)
                        }
                    };
                    m.label += S, m.parameters.push(ie), k < v.length - 1 && (m.label += y(h.separatorDisplayParts));
                }), m.label += y(h.suffixDisplayParts), u.signatures.push(m);
            }), {
                value: u,
                dispose() {}
            };
        }
    }, R = class extends _ {
        async provideHover(e, t, r) {
            const l = e.uri, s = e.getOffsetAt(t), d = await this._worker(l);
            if (e.isDisposed()) return;
            const a = await d.getQuickInfoAtPosition(l.toString(), s);
            if (!a || e.isDisposed()) return;
            const o = y(a.documentation), c = a.tags ? a.tags.map(h => z(h)).join(`  

`) : "", u = y(a.displayParts);
            return {
                range: this._textSpanToRange(e, a.textSpan),
                contents: [ {
                    value: "```typescript\n" + u + "\n```\n"
                }, {
                    value: o + (c ? `

` + c : "")
                } ]
            };
        }
    }, P = class extends _ {
        async provideDocumentHighlights(e, t, r) {
            const l = e.uri, s = e.getOffsetAt(t), d = await this._worker(l);
            if (e.isDisposed()) return;
            const a = await d.getDocumentHighlights(l.toString(), s, [ l.toString() ]);
            return a && !e.isDisposed() ? a.flatMap(o => o.highlightSpans.map(c => ({
                range: this._textSpanToRange(e, c.textSpan),
                kind: c.kind === "writtenReference" ? n.languages.DocumentHighlightKind.Write : n.languages.DocumentHighlightKind.Text
            }))) : void 0;
        }
    }, I = class extends _ {
        constructor(e, t) {
            super(t), this._libFiles = e;
        }
        async provideDefinition(e, t, r) {
            const l = e.uri, s = e.getOffsetAt(t), d = await this._worker(l);
            if (e.isDisposed()) return;
            const a = await d.getDefinitionAtPosition(l.toString(), s);
            if (!a || e.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(a.map(c => n.Uri.parse(c.fileName))), 
            e.isDisposed())) return;
            const o = [];
            for (let c of a) {
                const u = this._libFiles.getOrCreateModel(c.fileName);
                u && o.push({
                    uri: u.uri,
                    range: this._textSpanToRange(u, c.textSpan)
                });
            }
            return o;
        }
    }, E = class extends _ {
        constructor(e, t) {
            super(t), this._libFiles = e;
        }
        async provideReferences(e, t, r, l) {
            const s = e.uri, d = e.getOffsetAt(t), a = await this._worker(s);
            if (e.isDisposed()) return;
            const o = await a.getReferencesAtPosition(s.toString(), d);
            if (!o || e.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(o.map(u => n.Uri.parse(u.fileName))), 
            e.isDisposed())) return;
            const c = [];
            for (let u of o) {
                const h = this._libFiles.getOrCreateModel(u.fileName);
                h && c.push({
                    uri: h.uri,
                    range: this._textSpanToRange(h, u.textSpan)
                });
            }
            return c;
        }
    }, K = class extends _ {
        async provideDocumentSymbols(e, t) {
            const r = e.uri, l = await this._worker(r);
            if (e.isDisposed()) return;
            const s = await l.getNavigationTree(r.toString());
            if (!s || e.isDisposed()) return;
            const d = (a, o) => {
                var c;
                return {
                    name: a.text,
                    detail: "",
                    kind: b[a.kind] || n.languages.SymbolKind.Variable,
                    range: this._textSpanToRange(e, a.spans[0]),
                    selectionRange: this._textSpanToRange(e, a.spans[0]),
                    tags: [],
                    children: (c = a.childItems) == null ? void 0 : c.map(u => d(u, a.text)),
                    containerName: o
                };
            };
            return s.childItems ? s.childItems.map(a => d(a)) : [];
        }
    }, g = (p = class {}, p.unknown = "", p.keyword = "keyword", p.script = "script", 
    p.module = "module", p.class = "class", p.interface = "interface", p.type = "type", 
    p.enum = "enum", p.variable = "var", p.localVariable = "local var", p.function = "function", 
    p.localFunction = "local function", p.memberFunction = "method", p.memberGetAccessor = "getter", 
    p.memberSetAccessor = "setter", p.memberVariable = "property", p.constructorImplementation = "constructor", 
    p.callSignature = "call", p.indexSignature = "index", p.constructSignature = "construct", 
    p.parameter = "parameter", p.typeParameter = "type parameter", p.primitiveType = "primitive type", 
    p.label = "label", p.alias = "alias", p.const = "const", p.let = "let", p.warning = "warning", 
    p), b = Object.create(null), b[g.module] = n.languages.SymbolKind.Module, b[g.class] = n.languages.SymbolKind.Class, 
    b[g.enum] = n.languages.SymbolKind.Enum, b[g.interface] = n.languages.SymbolKind.Interface, 
    b[g.memberFunction] = n.languages.SymbolKind.Method, b[g.memberVariable] = n.languages.SymbolKind.Property, 
    b[g.memberGetAccessor] = n.languages.SymbolKind.Property, b[g.memberSetAccessor] = n.languages.SymbolKind.Property, 
    b[g.variable] = n.languages.SymbolKind.Variable, b[g.const] = n.languages.SymbolKind.Variable, 
    b[g.localVariable] = n.languages.SymbolKind.Variable, b[g.variable] = n.languages.SymbolKind.Variable, 
    b[g.function] = n.languages.SymbolKind.Function, b[g.localFunction] = n.languages.SymbolKind.Function;
    let D, A;
    w = class extends _ {
        static _convertOptions(e) {
            return {
                ConvertTabsToSpaces: e.insertSpaces,
                TabSize: e.tabSize,
                IndentSize: e.tabSize,
                IndentStyle: 2,
                NewLineCharacter: `
`,
                InsertSpaceAfterCommaDelimiter: !0,
                InsertSpaceAfterSemicolonInForStatements: !0,
                InsertSpaceBeforeAndAfterBinaryOperators: !0,
                InsertSpaceAfterKeywordsInControlFlowStatements: !0,
                InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
                InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
                InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
                InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
                PlaceOpenBraceOnNewLineForControlBlocks: !1,
                PlaceOpenBraceOnNewLineForFunctions: !1
            };
        }
        _convertTextChanges(e, t) {
            return {
                text: t.newText,
                range: this._textSpanToRange(e, t.span)
            };
        }
    }, L = class extends w {
        constructor() {
            super(...arguments), this.canFormatMultipleRanges = !1;
        }
        async provideDocumentRangeFormattingEdits(e, t, r, l) {
            const s = e.uri, d = e.getOffsetAt({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            }), a = e.getOffsetAt({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            }), o = await this._worker(s);
            if (e.isDisposed()) return;
            const c = await o.getFormattingEditsForRange(s.toString(), d, a, w._convertOptions(r));
            return c && !e.isDisposed() ? c.map(u => this._convertTextChanges(e, u)) : void 0;
        }
    }, O = class extends w {
        get autoFormatTriggerCharacters() {
            return [ ";", "}", `
` ];
        }
        async provideOnTypeFormattingEdits(e, t, r, l, s) {
            const d = e.uri, a = e.getOffsetAt(t), o = await this._worker(d);
            if (e.isDisposed()) return;
            const c = await o.getFormattingEditsAfterKeystroke(d.toString(), a, r, w._convertOptions(l));
            return c && !e.isDisposed() ? c.map(u => this._convertTextChanges(e, u)) : void 0;
        }
    }, F = class extends w {
        async provideCodeActions(e, t, r, l) {
            const s = e.uri, d = e.getOffsetAt({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            }), a = e.getOffsetAt({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            }), o = w._convertOptions(e.getOptions()), c = r.markers.filter(m => m.code).map(m => m.code).map(Number), u = await this._worker(s);
            if (e.isDisposed()) return;
            const h = await u.getCodeFixesAtPosition(s.toString(), d, a, c, o);
            return !h || e.isDisposed() ? {
                actions: [],
                dispose: () => {}
            } : {
                actions: h.filter(m => m.changes.filter(f => f.isNewFile).length === 0).map(m => this._tsCodeFixActionToMonacoCodeAction(e, r, m)),
                dispose: () => {}
            };
        }
        _tsCodeFixActionToMonacoCodeAction(e, t, r) {
            const l = [];
            for (const s of r.changes) for (const d of s.textChanges) l.push({
                resource: e.uri,
                versionId: void 0,
                textEdit: {
                    range: this._textSpanToRange(e, d.span),
                    text: d.newText
                }
            });
            return {
                title: r.description,
                edit: {
                    edits: l
                },
                diagnostics: t.markers,
                kind: "quickfix"
            };
        }
    }, H = class extends _ {
        constructor(e, t) {
            super(t), this._libFiles = e;
        }
        async provideRenameEdits(e, t, r, l) {
            const s = e.uri, d = s.toString(), a = e.getOffsetAt(t), o = await this._worker(s);
            if (e.isDisposed()) return;
            const c = await o.getRenameInfo(d, a, {
                allowRenameOfImportPath: !1
            });
            if (c.canRename === !1) return {
                edits: [],
                rejectReason: c.localizedErrorMessage
            };
            if (c.fileToRename !== void 0) throw new Error("Renaming files is not supported.");
            const u = await o.findRenameLocations(d, a, !1, !1, !1);
            if (!u || e.isDisposed()) return;
            const h = [];
            for (const m of u) {
                const f = this._libFiles.getOrCreateModel(m.fileName);
                if (!f) throw new Error(`Unknown file ${m.fileName}.`);
                h.push({
                    resource: f.uri,
                    versionId: void 0,
                    textEdit: {
                        range: this._textSpanToRange(f, m.textSpan),
                        text: r
                    }
                });
            }
            return {
                edits: h
            };
        }
    }, N = class extends _ {
        async provideInlayHints(e, t, r) {
            const l = e.uri, s = l.toString(), d = e.getOffsetAt({
                lineNumber: t.startLineNumber,
                column: t.startColumn
            }), a = e.getOffsetAt({
                lineNumber: t.endLineNumber,
                column: t.endColumn
            }), o = await this._worker(l);
            return e.isDisposed() ? null : {
                hints: (await o.provideInlayHints(s, d, a)).map(c => ({
                    ...c,
                    label: c.text,
                    position: e.getPositionAt(c.position),
                    kind: this._convertHintKind(c.kind)
                })),
                dispose: () => {}
            };
        }
        _convertHintKind(e) {
            return e === "Parameter" ? n.languages.InlayHintKind.Parameter : n.languages.InlayHintKind.Type;
        }
    }, X = function(e) {
        A = G(e, "typescript");
    }, q = function(e) {
        D = G(e, "javascript");
    }, J = function() {
        return new Promise((e, t) => {
            if (!D) return t("JavaScript not registered!");
            e(D);
        });
    }, Q = function() {
        return new Promise((e, t) => {
            if (!A) return t("TypeScript not registered!");
            e(A);
        });
    };
    function G(e, t) {
        const r = [], l = new j(t, e), s = (...a) => l.getLanguageServiceWorker(...a), d = new M(s);
        return function() {
            const {
                modeConfiguration: a
            } = e;
            (function(o) {
                for (;o.length; ) o.pop().dispose();
            })(r), a.completionItems && r.push(n.languages.registerCompletionItemProvider(t, new W(s))), 
            a.signatureHelp && r.push(n.languages.registerSignatureHelpProvider(t, new V(s))), 
            a.hovers && r.push(n.languages.registerHoverProvider(t, new R(s))), 
            a.documentHighlights && r.push(n.languages.registerDocumentHighlightProvider(t, new P(s))), 
            a.definitions && r.push(n.languages.registerDefinitionProvider(t, new I(d, s))), 
            a.references && r.push(n.languages.registerReferenceProvider(t, new E(d, s))), 
            a.documentSymbols && r.push(n.languages.registerDocumentSymbolProvider(t, new K(s))), 
            a.rename && r.push(n.languages.registerRenameProvider(t, new H(d, s))), 
            a.documentRangeFormattingEdits && r.push(n.languages.registerDocumentRangeFormattingEditProvider(t, new L(s))), 
            a.onTypeFormattingEdits && r.push(n.languages.registerOnTypeFormattingEditProvider(t, new O(s))), 
            a.codeActions && r.push(n.languages.registerCodeActionProvider(t, new F(s))), 
            a.inlayHints && r.push(n.languages.registerInlayHintsProvider(t, new N(s))), 
            a.diagnostics && r.push(new T(d, e, t, s));
        }(), s;
    }
});

export {
    _ as Adapter,
    F as CodeActionAdaptor,
    I as DefinitionAdapter,
    T as DiagnosticsAdapter,
    P as DocumentHighlightAdapter,
    L as FormatAdapter,
    w as FormatHelper,
    O as FormatOnTypeAdapter,
    N as InlayHintsAdapter,
    g as Kind,
    M as LibFiles,
    K as OutlineAdapter,
    R as QuickInfoAdapter,
    E as ReferenceAdapter,
    H as RenameAdapter,
    V as SignatureHelpAdapter,
    W as SuggestAdapter,
    j as WorkerManager,
    le as __tla,
    x as flattenDiagnosticMessageText,
    J as getJavaScriptWorker,
    Q as getTypeScriptWorker,
    q as setupJavaScript,
    X as setupTypeScript
};