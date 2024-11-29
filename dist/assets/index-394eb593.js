import {
    eu as p,
    ev as O,
    eD as g,
    eG as u,
    eH as m,
    eI as c,
    eJ as R,
    eK as h,
    eq as T,
    __tla as d
} from "./index-6c08ea4c.js";

let i, t, l, y = Promise.all([ (() => {
    try {
        return d;
    } catch {}
})() ]).then(async () => {
    let s, P;
    s = p({
        String: O.string,
        Number: O.number,
        "True False": O.bool,
        PropertyName: O.propertyName,
        Null: O.null,
        ",": O.separator,
        "[ ]": O.squareBracket,
        "{ }": O.brace
    }), P = g.deserialize({
        version: 14,
        states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
        stateData: "#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",
        goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
        nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
        maxTerm: 25,
        nodeProps: [ [ "isolate", -2, 6, 11, "" ], [ "openedBy", 7, "{", 12, "[" ], [ "closedBy", 8, "}", 13, "]" ] ],
        propSources: [ s ],
        skippedNodes: [ 0 ],
        repeatNodeCount: 2,
        tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
        tokenizers: [ 0 ],
        topRules: {
            JsonText: [ 0, 1 ]
        },
        tokenPrec: 0
    }), l = () => n => {
        try {
            JSON.parse(n.state.doc.toString());
        } catch (r) {
            if (!(r instanceof SyntaxError)) throw r;
            const o = function(Q, a) {
                let e;
                return (e = Q.message.match(/at position (\d+)/)) ? Math.min(+e[1], a.length) : (e = Q.message.match(/at line (\d+) column (\d+)/)) ? Math.min(a.line(+e[1]).from + +e[2] - 1, a.length) : 0;
            }(r, n.state.doc);
            return [ {
                from: o,
                message: r.message,
                severity: "error",
                to: o
            } ];
        }
        return [];
    }, t = u.define({
        name: "json",
        parser: P.configure({
            props: [ m.add({
                Object: c({
                    except: /^\s*\}/
                }),
                Array: c({
                    except: /^\s*\]/
                })
            }), R.add({
                "Object Array": h
            }) ]
        }),
        languageData: {
            closeBrackets: {
                brackets: [ "[", "{", '"' ]
            },
            indentOnInput: /^\s*[\}\]]$/
        }
    }), i = function() {
        return new T(t);
    };
});

export {
    y as __tla,
    i as json,
    t as jsonLanguage,
    l as jsonParseLinter
};