function a(e, r) {
    for (var t = (r = r || {}).prefix !== void 0 ? r.prefix : "^", o = r.suffix !== void 0 ? r.suffix : "\\b", n = 0; n < e.length; n++) e[n] instanceof RegExp ? e[n] = e[n].source : e[n] = e[n].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    return new RegExp(t + "(" + e.join("|") + ")" + o, "i");
}

var S = "(?=[^A-Za-z\\d\\-_]|$)", c = /[\w\-:]/, C = a([ /begin|break|catch|continue|data|default|do|dynamicparam/, /else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/, /param|process|return|switch|throw|trap|try|until|where|while/ ], {
    suffix: S
}), k = a([ "f", /b?not/, /[ic]?split/, "join", /is(not)?/, "as", /[ic]?(eq|ne|[gl][te])/, /[ic]?(not)?(like|match|contains)/, /[ic]?replace/, /b?(and|or|xor)/ ], {
    prefix: "-"
}), h = a([ k, /[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/ ], {
    suffix: ""
}), x = a([ /Add-(Computer|Content|History|Member|PSSnapin|Type)/, /Checkpoint-Computer/, /Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/, /Compare-Object/, /Complete-Transaction/, /Connect-PSSession/, /ConvertFrom-(Csv|Json|SecureString|StringData)/, /Convert-Path/, /ConvertTo-(Csv|Html|Json|SecureString|Xml)/, /Copy-Item(Property)?/, /Debug-Process/, /Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/, /Disconnect-PSSession/, /Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/, /(Enter|Exit)-PSSession/, /Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/, /ForEach-Object/, /Format-(Custom|List|Table|Wide)/, new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"), /Group-Object/, /Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/, /ImportSystemModules/, /Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/, /Join-Path/, /Limit-EventLog/, /Measure-(Command|Object)/, /Move-Item(Property)?/, new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"), /Out-(Default|File|GridView|Host|Null|Printer|String)/, /Pause/, /(Pop|Push)-Location/, /Read-Host/, /Receive-(Job|PSSession)/, /Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/, /Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/, /Rename-(Computer|Item(Property)?)/, /Reset-ComputerMachinePassword/, /Resolve-Path/, /Restart-(Computer|Service)/, /Restore-Computer/, /Resume-(Job|Service)/, /Save-Help/, /Select-(Object|String|Xml)/, /Send-MailMessage/, new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"), /Show-(Command|ControlPanelItem|EventLog)/, /Sort-Object/, /Split-Path/, /Start-(Job|Process|Service|Sleep|Transaction|Transcript)/, /Stop-(Computer|Job|Process|Service|Transcript)/, /Suspend-(Job|Service)/, /TabExpansion2/, /Tee-Object/, /Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/, /Trace-Command/, /Unblock-File/, /Undo-Transaction/, /Unregister-(Event|PSSessionConfiguration)/, /Update-(FormatData|Help|List|TypeData)/, /Use-Transaction/, /Wait-(Event|Job|Process)/, /Where-Object/, /Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/, /cd|help|mkdir|more|oss|prompt/, /ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/, /echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/, /group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/, /measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/, /rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/, /sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/ ], {
    prefix: "",
    suffix: ""
}), E = a([ /[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/, /FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/, /MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/, /PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/, /PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/, /WarningPreference|WhatIfPreference/, /Event|EventArgs|EventSubscriber|Sender/, /Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/, /true|false|null/ ], {
    prefix: "\\$",
    suffix: ""
}), f = {
    keyword: C,
    number: /^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,
    operator: h,
    builtin: a([ /[A-Z]:|%|\?/i, x, E ], {
        suffix: S
    }),
    punctuation: /[\[\]{},;`\\\.]|@[({]/,
    variable: /^[A-Za-z\_][A-Za-z\-\_\d]*\b/
};

function i(e, r) {
    var t = r.returnStack[r.returnStack.length - 1];
    if (t && t.shouldReturnFrom(r)) return r.tokenize = t.tokenize, r.returnStack.pop(), 
    r.tokenize(e, r);
    if (e.eatSpace()) return null;
    if (e.eat("(")) return r.bracketNesting += 1, "punctuation";
    if (e.eat(")")) return r.bracketNesting -= 1, "punctuation";
    for (var o in f) if (e.match(f[o])) return o;
    var n = e.next();
    if (n === "'") return function(u, b) {
        for (var m; (m = u.peek()) != null; ) if (u.next(), m === "'" && !u.eat("'")) return b.tokenize = i, 
        "string";
        return "error";
    }(e, r);
    if (n === "$") return l(e, r);
    if (n === '"') return P(e, r);
    if (n === "<" && e.eat("#")) return r.tokenize = d, d(e, r);
    if (n === "#") return e.skipToEnd(), "comment";
    if (n === "@") {
        var p = e.eat(/["']/);
        if (p && e.eol()) return r.tokenize = s, r.startQuote = p[0], s(e, r);
        if (e.eol()) return "error";
        if (e.peek().match(/[({]/)) return "punctuation";
        if (e.peek().match(c)) return l(e, r);
    }
    return "error";
}

function P(e, r) {
    for (var t; (t = e.peek()) != null; ) {
        if (t === "$") return r.tokenize = y, "string";
        if (e.next(), t !== "`") {
            if (t === '"' && !e.eat('"')) return r.tokenize = i, "string";
        } else e.next();
    }
    return "error";
}

function y(e, r) {
    return g(e, r, P);
}

function w(e, r) {
    return r.tokenize = s, r.startQuote = '"', s(e, r);
}

function M(e, r) {
    return g(e, r, w);
}

function g(e, r, t) {
    if (e.match("$(")) {
        var o = r.bracketNesting;
        return r.returnStack.push({
            shouldReturnFrom: function(n) {
                return n.bracketNesting === o;
            },
            tokenize: t
        }), r.tokenize = i, r.bracketNesting += 1, "punctuation";
    }
    return e.next(), r.returnStack.push({
        shouldReturnFrom: function() {
            return !0;
        },
        tokenize: t
    }), r.tokenize = l, r.tokenize(e, r);
}

function d(e, r) {
    for (var t, o = !1; (t = e.next()) != null; ) {
        if (o && t == ">") {
            r.tokenize = i;
            break;
        }
        o = t === "#";
    }
    return "comment";
}

function l(e, r) {
    var t = e.peek();
    return e.eat("{") ? (r.tokenize = v, v(e, r)) : t != null && t.match(c) ? (e.eatWhile(c), 
    r.tokenize = i, "variable") : (r.tokenize = i, "error");
}

function v(e, r) {
    for (var t; (t = e.next()) != null; ) if (t === "}") {
        r.tokenize = i;
        break;
    }
    return "variable";
}

function s(e, r) {
    var t = r.startQuote;
    if (e.sol() && e.match(new RegExp(t + "@"))) r.tokenize = i; else if (t === '"') for (;!e.eol(); ) {
        var o = e.peek();
        if (o === "$") return r.tokenize = M, "string";
        e.next(), o === "`" && e.next();
    } else e.skipToEnd();
    return "string";
}

const R = {
    name: "powershell",
    startState: function() {
        return {
            returnStack: [],
            bracketNesting: 0,
            tokenize: i
        };
    },
    token: function(e, r) {
        return r.tokenize(e, r);
    },
    languageData: {
        commentTokens: {
            line: "#",
            block: {
                open: "<#",
                close: "#>"
            }
        }
    }
};

export {
    R as powerShell
};