var r = {}, d = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;

function s(i, t) {
    for (var e = t.split(" "), n = 0; n < e.length; n++) r[e[n]] = i;
}

function c(i, t) {
    for (var e, n, a = !1; !i.eol() && (e = i.next()) != t.pending; ) {
        if (e === "$" && n != "\\" && t.pending == '"') {
            a = !0;
            break;
        }
        n = e;
    }
    return a && i.backUp(1), e == t.pending ? t.continueString = !1 : t.continueString = !0, 
    "string";
}

s("keyword", "class define site node include import inherits"), s("keyword", "case if else in and elsif default or"), 
s("atom", "false true running present absent file directory undef"), s("builtin", "action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");

const m = {
    name: "puppet",
    startState: function() {
        var i = {
            inDefinition: !1,
            inInclude: !1,
            continueString: !1,
            pending: !1
        };
        return i;
    },
    token: function(i, t) {
        return i.eatSpace() ? null : function(e, n) {
            var a = e.match(/[\w]+/, !1), u = e.match(/(\s+)?\w+\s+=>.*/, !1), l = e.match(/(\s+)?[\w:_]+(\s+)?{/, !1), p = e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, !1), o = e.next();
            if (o === "$") return e.match(d) ? n.continueString ? "variableName.special" : "variable" : "error";
            if (n.continueString) return e.backUp(1), c(e, n);
            if (n.inDefinition) {
                if (e.match(/(\s+)?[\w:_]+(\s+)?/)) return "def";
                e.match(/\s+{/), n.inDefinition = !1;
            }
            return n.inInclude ? (e.match(/(\s+)?\S+(\s+)?/), n.inInclude = !1, 
            "def") : e.match(/(\s+)?\w+\(/) ? (e.backUp(1), "def") : u ? (e.match(/(\s+)?\w+/), 
            "tag") : a && r.hasOwnProperty(a) ? (e.backUp(1), e.match(/[\w]+/), 
            e.match(/\s+\S+\s+{/, !1) && (n.inDefinition = !0), a == "include" && (n.inInclude = !0), 
            r[a]) : /(^|\s+)[A-Z][\w:_]+/.test(a) ? (e.backUp(1), e.match(/(^|\s+)[A-Z][\w:_]+/), 
            "def") : l ? (e.match(/(\s+)?[\w:_]+/), "def") : p ? (e.match(/(\s+)?[@]{1,2}/), 
            "atom") : o == "#" ? (e.skipToEnd(), "comment") : o == "'" || o == '"' ? (n.pending = o, 
            c(e, n)) : o == "{" || o == "}" ? "bracket" : o == "/" ? (e.match(/^[^\/]*\//), 
            "string.special") : o.match(/[0-9]/) ? (e.eatWhile(/[0-9]+/), "number") : o == "=" ? (e.peek() == ">" && e.next(), 
            "operator") : (e.eatWhile(/[\w-]/), null);
        }(i, t);
    }
};

export {
    m as puppet
};