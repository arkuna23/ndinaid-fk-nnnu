const e = {
    patientsList: [ {
        ID: "202202220001",
        Name: "张玉芳",
        BirthDate: "19690206",
        Sex: "女",
        Age: 53,
        AgeGroup: "成人",
        OutpatientDoctor: "王杰",
        Radiologists: "孙玮",
        Info: "全腹部CT平扫"
    }, {
        ID: "202202220002",
        Name: "赵金朔",
        BirthDate: "19891117",
        Sex: "男",
        Age: 33,
        AgeGroup: "成人",
        OutpatientDoctor: "王杰",
        Radiologists: "孙玮",
        Info: "CT胸部及心脏平扫（64排）"
    }, {
        ID: "202202220003",
        Name: "周国庆",
        BirthDate: "19481001",
        Sex: "男",
        Age: 74,
        AgeGroup: "老人",
        OutpatientDoctor: "柳志鹏",
        Radiologists: "孙玮",
        Info: "头颅CT扫描"
    }, {
        ID: "202202220004",
        Name: "张鹏",
        BirthDate: "19960728",
        Sex: "男",
        Age: 26,
        AgeGroup: "成人",
        OutpatientDoctor: "王杰",
        Radiologists: "刘玉婷",
        Info: "CT膝关节（右侧）"
    } ],
    bodyInfoList: [ {
        name: "头部",
        value: "1",
        children: [ {
            name: "头部-常规",
            value: "11"
        }, {
            name: "头部-儿童",
            value: "12"
        }, {
            name: "头部-高分辨率",
            value: "13"
        } ]
    }, {
        name: "颈部",
        value: "2",
        children: [ {
            name: "颈部-常规",
            value: "21"
        }, {
            name: "颈部-儿童",
            value: "22"
        } ]
    }, {
        name: "肺部",
        value: "3",
        children: [ {
            name: "肺部-常规",
            value: "31"
        }, {
            name: "肺部-儿童",
            value: "32"
        }, {
            name: "肺部-低剂量",
            value: "33"
        } ]
    }, {
        name: "腹部",
        value: "4",
        children: [ {
            name: "腹部-常规",
            value: "41"
        }, {
            name: "腹部-超重",
            value: "42"
        }, {
            name: "腹部-儿童10-30kg",
            value: "43"
        }, {
            name: "腹部-儿童30-50kg",
            value: "44"
        } ]
    }, {
        name: "腰椎",
        value: "5",
        children: [ {
            name: "腰椎-常规",
            value: "51"
        } ]
    }, {
        name: "膝盖",
        value: "6",
        children: [ {
            name: "膝盖-常规",
            value: "61"
        }, {
            name: "膝盖-儿童",
            value: "62"
        } ]
    }, {
        name: "心脏",
        value: "7",
        children: [ {
            name: "心脏-常规",
            value: "71"
        }, {
            name: "心脏-儿童",
            value: "72"
        }, {
            name: "心脏-高分辨率",
            value: "73"
        }, {
            name: "心脏-灌注",
            value: "74"
        } ]
    }, {
        name: "介入",
        value: "8",
        children: [ {
            name: "介入-常规",
            value: "81"
        }, {
            name: "介入-儿童",
            value: "82"
        }, {
            name: "介入-超重",
            value: "83"
        } ]
    } ],
    shapeInfoList: [ {
        name: "正面-从头到脚",
        value: "1"
    }, {
        name: "正面-从脚到头",
        value: "2"
    }, {
        name: "背面-从头到脚",
        value: "3"
    }, {
        name: "背面-从脚到头",
        value: "4"
    } ]
};

export {
    e as C
};