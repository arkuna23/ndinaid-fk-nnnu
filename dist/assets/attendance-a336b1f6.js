import {
    a7 as m,
    r as s,
    f as d,
    aV as f,
    o as p,
    c as b,
    __tla as h
} from "./index-6c08ea4c.js";

import {
    e as w
} from "./index-0d885c8d.js";

import "./install-67fb146c.js";

let v, _ = Promise.all([ (() => {
    try {
        return h;
    } catch {}
})() ]).then(async () => {
    v = {
        __name: "attendance",
        setup(g) {
            let e = s(null);
            const n = s(null), r = s({
                tooltip: {
                    show: !1,
                    trigger: "item"
                },
                legend: {
                    orient: "vertical",
                    top: "center",
                    left: "0%",
                    formatter: function(l) {
                        return l;
                    }
                },
                series: [ {
                    name: "Access From",
                    type: "pie",
                    radius: [ "65%", "80%" ],
                    avoidLabelOverlap: !1,
                    label: {
                        show: !1,
                        position: "center"
                    },
                    itemStyle: {
                        borderRadius: 0,
                        borderColor: "#fff",
                        borderWidth: 2
                    },
                    emphasis: {
                        label: {
                            show: !0,
                            fontSize: 40,
                            fontWeight: "bold",
                            formatter: `{d}%
{b}`
                        }
                    },
                    labelLine: {
                        show: !1
                    },
                    data: [ {
                        value: 0,
                        name: "出勤"
                    }, {
                        value: 0,
                        name: "缺勤"
                    }, {
                        value: 0,
                        name: "迟到"
                    }, {
                        value: 0,
                        name: "早退"
                    }, {
                        value: 0,
                        name: "事假"
                    }, {
                        value: 0,
                        name: "病假"
                    } ]
                } ]
            });
            d(() => {
                var l;
                m.get({
                    url: "/teachmanager/teach-course-attendance-detail/getStudentStatic",
                    params: l
                }).then(u => {
                    var o, a;
                    o = r.value.series[0].data, a = u, o.forEach(t => {
                        switch (t.name) {
                          case "出勤":
                            t.value = a.attendanceNum;
                            break;

                          case "缺勤":
                            t.value = a.absenceNum;
                            break;

                          case "迟到":
                            t.value = a.lateNum;
                            break;

                          case "早退":
                            t.value = a.leaveEarlyNum;
                            break;

                          case "事假":
                            t.value = a.leavePersonalAffairsNum;
                            break;

                          case "病假":
                            t.value = a.leaveSickNum;
                        }
                    }), e.value && (e.value.setOption(r.value), e.value.resize());
                }), c(), window.addEventListener("resize", i);
            });
            const c = () => {
                e.value = w.init(n.value), e.value.setOption(r.value);
            }, i = () => {
                e.value && e.value.resize();
            };
            return f(() => {
                e.value && e.value.dispose(), window.removeEventListener("resize", i);
            }), (l, u) => (p(), b("div", {
                class: "h-100px w-100%",
                ref_key: "pieContainerRef",
                ref: n
            }, null, 512));
        }
    };
});

export {
    _ as __tla,
    v as default
};