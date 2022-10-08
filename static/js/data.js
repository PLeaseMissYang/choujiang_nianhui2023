var personArray = new Array;
var nameList = [
    {
        "name": "大林伴行",
        "department": "tx11"
    },
    {
        "name": "杨国洪",
        "department": "tx1"
    },
    {
        "name": "张金凤",
        "department": "tx4"
    },
    {
        "name": "周贤",
        "department": "tx6"
    },
    {
        "name": "沈凌",
        "department": "tx6"
    },
    {
        "name": "周茹",
        "department": "tx9"
    },
    {
        "name": "杨皎洁",
        "department": "tx5"
    },
    {
        "name": "袁峥",
        "department": "tx2"
    },
    {
        "name": "李含琦",
        "department": "tx10"
    },
    {
        "name": "蒋苑媛",
        "department": "tx8"
    },
    {
        "name": "张斯妤",
        "department": "tx8"
    },
    {
        "name": "陈浩俊",
        "department": "tx6"
    },
    {
        "name": "张丽",
        "department": "tx4"
    },
    {
        "name": "于锦鸿",
        "department": "tx5"
    },
    {
        "name": "顾维轶",
        "department": "tx9"
    },
    {
        "name": "张邱峰",
        "department": "tx2"
    },
    {
        "name": "叶澍清",
        "department": "tx5"
    },
    {
        "name": "陈坚",
        "department": "tx3"
    },
    {
        "name": "陈艳",
        "department": "tx8"
    },
    {
        "name": "恽华明",
        "department": "tx3"
    },
    {
        "name": "钱蓓",
        "department": "tx12"
    },
    {
        "name": "顾小炀",
        "department": "tx11"
    },
    {
        "name": "魏丽",
        "department": "tx4"
    },
    {
        "name": "陆朝辉",
        "department": "tx5"
    },
    {
        "name": "姚丰华",
        "department": "tx2"
    },
    {
        "name": "程铭",
        "department": "tx9"
    },
    {
        "name": "龙雨",
        "department": "tx6"
    },
    {
        "name": "徐晓梁",
        "department": "tx5"
    },
    {
        "name": "冯立",
        "department": "tx1"
    },
    {
        "name": "王海龙",
        "department": "tx11"
    },
    {
        "name": "陈仕扬",
        "department": "tx1"
    },
    {
        "name": "郑军",
        "department": "tx4"
    },
    {
        "name": "李玮",
        "department": "tx11"
    },
    {
        "name": "郑云松",
        "department": "tx10"
    },
    {
        "name": "久光拓也",
        "department": "tx11"
    },
    {
        "name": "单建明",
        "department": "tx11"
    },
    {
        "name": "史日萍",
        "department": "tx9"
    },
    {
        "name": "周莹",
        "department": "tx10"
    },
    {
        "name": "胡庆军",
        "department": "tx7"
    },
    {
        "name": "卢欣瑜",
        "department": "tx9"
    },
    {
        "name": "西川  启",
        "department": "tx4"
    },
    {
        "name": "赵嘉斌",
        "department": "tx4"
    },
    {
        "name": "徐辰秀",
        "department": "tx7"
    },
    {
        "name": "茅健",
        "department": "tx1"
    },
    {
        "name": "骆庆生",
        "department": "tx9"
    },
    {
        "name": "陈健清",
        "department": "tx12"
    },
    {
        "name": "胡平",
        "department": "tx9"
    },
    {
        "name": "王豪",
        "department": "tx8"
    },
    {
        "name": "何非",
        "department": "tx9"
    },
    {
        "name": "姜巍",
        "department": "tx10"
    },
    {
        "name": "郭健睿",
        "department": "tx11"
    },
    {
        "name": "倪惠彬",
        "department": "tx6"
    },
    {
        "name": "国谷晋二",
        "department": "tx12"
    },
    {
        "name": "严咏",
        "department": "tx9"
    },
    {
        "name": "顾姗姗",
        "department": "tx2"
    },
    {
        "name": "周鑫",
        "department": "tx6"
    },
    {
        "name": "陈朔",
        "department": "tx5"
    },
    {
        "name": "贾洪民",
        "department": "tx3"
    },
    {
        "name": "储月娥",
        "department": "tx3"
    },
    {
        "name": "任琳晓",
        "department": "tx6"
    },
    {
        "name": "平田铁宗",
        "department": "tx7"
    },
    {
        "name": "中村一树",
        "department": "tx2"
    },
    {
        "name": "布施 玲",
        "department": "tx4"
    },
    {
        "name": "沈琦",
        "department": "tx12"
    },
    {
        "name": "张建平",
        "department": "tx8"
    },
    {
        "name": "李红禹",
        "department": "tx4"
    },
    {
        "name": "吴动",
        "department": "tx7"
    },
    {
        "name": "张翼",
        "department": "tx1"
    },
    {
        "name": "熊天鹏",
        "department": "tx1"
    },
    {
        "name": "桑建刚",
        "department": "tx11"
    },
    {
        "name": "邢嘉骏",
        "department": "tx3"
    },
    {
        "name": "娄茂林",
        "department": "tx5"
    },
    {
        "name": "蔡庆王",
        "department": "tx3"
    },
    {
        "name": "钱俊",
        "department": "tx7"
    },
    {
        "name": "王中华",
        "department": "tx5"
    },
    {
        "name": "周建波",
        "department": "tx12"
    },
    {
        "name": "靳宇宁",
        "department": "tx2"
    },
    {
        "name": "陈恩龙",
        "department": "tx12"
    },
    {
        "name": "程汉鹏",
        "department": "tx4"
    },
    {
        "name": "夏小丹",
        "department": "tx7"
    },
    {
        "name": "黄皖琛",
        "department": "tx7"
    },
    {
        "name": "王妮妮",
        "department": "tx12"
    },
    {
        "name": "钱国平",
        "department": "tx4"
    },
    {
        "name": "朱继业",
        "department": "tx12"
    },
    {
        "name": "姚捷",
        "department": "tx3"
    },
    {
        "name": "尹理坤",
        "department": "tx8"
    },
    {
        "name": "李炯",
        "department": "tx5"
    },
    {
        "name": "姚瑶",
        "department": "tx8"
    },
    {
        "name": "王伟",
        "department": "tx9"
    },
    {
        "name": "王国华",
        "department": "tx7"
    },
    {
        "name": "邓成锟",
        "department": "tx6"
    },
    {
        "name": "瞿黎明",
        "department": "tx8"
    },
    {
        "name": "徐清",
        "department": "tx7"
    },
    {
        "name": "董俊朋",
        "department": "tx1"
    },
    {
        "name": "康文伟",
        "department": "tx1"
    },
    {
        "name": "杨东辉",
        "department": "tx8"
    },
    {
        "name": "王丹菁",
        "department": "tx4"
    },
    {
        "name": "邬海潭",
        "department": "tx7"
    },
    {
        "name": "许赟赟",
        "department": "tx11"
    },
    {
        "name": "茹海靖",
        "department": "tx4"
    },
    {
        "name": "于雯婷",
        "department": "tx12"
    },
    {
        "name": "曹艳华",
        "department": "tx1"
    },
    {
        "name": "肖团如",
        "department": "tx12"
    },
    {
        "name": "王娟",
        "department": "tx7"
    },
    {
        "name": "吴珊",
        "department": "tx4"
    },
    {
        "name": "程亦铮",
        "department": "tx9"
    },
    {
        "name": "吴励励",
        "department": "tx12"
    },
    {
        "name": "管铭燕",
        "department": "tx8"
    },
    {
        "name": "夏春芳",
        "department": "tx9"
    },
    {
        "name": "邓楚楚",
        "department": "tx6"
    },
    {
        "name": "陈龙维",
        "department": "tx3"
    },
    {
        "name": "朱雪峰",
        "department": "tx5"
    },
    {
        "name": "胡超明",
        "department": "tx2"
    },
    {
        "name": "庄乾明",
        "department": "tx8"
    },
    {
        "name": "薛佳骏",
        "department": "tx3"
    },
    {
        "name": "王国芳",
        "department": "tx7"
    },
    {
        "name": "蒋魏康",
        "department": "tx7"
    },
    {
        "name": "巫瑛",
        "department": "tx7"
    },
    {
        "name": "高佳良",
        "department": "tx4"
    },
    {
        "name": "朱健",
        "department": "tx11"
    },
    {
        "name": "张春亮",
        "department": "tx8"
    },
    {
        "name": "王国荃",
        "department": "tx9"
    },
    {
        "name": "魏权",
        "department": "tx6"
    },
    {
        "name": "平志纲",
        "department": "tx4"
    },
    {
        "name": "林吉",
        "department": "tx7"
    },
    {
        "name": "羊伟龙",
        "department": "tx2"
    },
    {
        "name": "宋臻祺",
        "department": "tx2"
    },
    {
        "name": "王嘉伟",
        "department": "tx11"
    },
    {
        "name": "唐家辉",
        "department": "tx5"
    },
    {
        "name": "唐良",
        "department": "tx6"
    },
    {
        "name": "陈帅",
        "department": "tx5"
    },
    {
        "name": "许晓博",
        "department": "tx2"
    },
    {
        "name": "俞春花",
        "department": "tx8"
    },
    {
        "name": "邓中浩",
        "department": "tx10"
    },
    {
        "name": "陈煜婷",
        "department": "tx12"
    },
    {
        "name": "童欣",
        "department": "tx4"
    },
    {
        "name": "朱龙飞",
        "department": "tx2"
    },
    {
        "name": "史君燕",
        "department": "tx3"
    },
    {
        "name": "黄燕玲",
        "department": "tx12"
    },
    {
        "name": "王栋",
        "department": "tx4"
    },
    {
        "name": "朱卫星",
        "department": "tx8"
    },
    {
        "name": "吕江范",
        "department": "tx5"
    },
    {
        "name": "王晓磊",
        "department": "tx12"
    },
    {
        "name": "顾剑峰",
        "department": "tx5"
    },
    {
        "name": "徐靖",
        "department": "tx12"
    },
    {
        "name": "张钧豪",
        "department": "tx5"
    },
    {
        "name": "王剑峰",
        "department": "tx2"
    },
    {
        "name": "杨嘉辰",
        "department": "tx9"
    },
    {
        "name": "包放硕",
        "department": "tx3"
    },
    {
        "name": "袁帅",
        "department": "tx11"
    },
    {
        "name": "许成刚",
        "department": "tx4"
    },
    {
        "name": "楼一兴",
        "department": "tx5"
    },
    {
        "name": "王逸翔",
        "department": "tx5"
    },
    {
        "name": "姚琪鑫",
        "department": "tx7"
    },
    {
        "name": "蒋驰杰",
        "department": "tx1"
    },
    {
        "name": "施一峰",
        "department": "tx2"
    },
    {
        "name": "胡巍",
        "department": "tx10"
    },
    {
        "name": "莫大军",
        "department": "tx7"
    },
    {
        "name": "张嘉骐",
        "department": "tx4"
    },
    {
        "name": "卞耀强",
        "department": "tx3"
    },
    {
        "name": "周玮琳",
        "department": "tx11"
    },
    {
        "name": "王佳鸣",
        "department": "tx2"
    },
    {
        "name": "胡辉",
        "department": "tx9"
    },
    {
        "name": "杜文晨",
        "department": "tx9"
    },
    {
        "name": "金维乐",
        "department": "tx11"
    },
    {
        "name": "徐伟立",
        "department": "tx10"
    },
    {
        "name": "马飞燕",
        "department": "tx8"
    },
    {
        "name": "夏伟",
        "department": "tx10"
    },
    {
        "name": "陈玲玲",
        "department": "tx6"
    },
    {
        "name": "陆勇伟",
        "department": "tx8"
    },
    {
        "name": "康子晨",
        "department": "tx1"
    },
    {
        "name": "陆琰纯",
        "department": "tx2"
    },
    {
        "name": "钱维熊",
        "department": "tx12"
    },
    {
        "name": "树志俊",
        "department": "tx7"
    },
    {
        "name": "黄锋",
        "department": "tx11"
    },
    {
        "name": "许学正",
        "department": "tx2"
    },
    {
        "name": "但志波",
        "department": "tx4"
    },
    {
        "name": "周泓卿",
        "department": "tx9"
    },
    {
        "name": "马文遥",
        "department": "tx9"
    },
    {
        "name": "吴俊伟",
        "department": "tx8"
    },
    {
        "name": "顾荣",
        "department": "tx7"
    },
    {
        "name": "姚晓承",
        "department": "tx1"
    },
    {
        "name": "李志强",
        "department": "tx10"
    },
    {
        "name": "荣悦敏",
        "department": "tx7"
    },
    {
        "name": "张建赟",
        "department": "tx4"
    },
    {
        "name": "杨建东",
        "department": "tx4"
    },
    {
        "name": "陈哲欣",
        "department": "tx12"
    },
    {
        "name": "罗川",
        "department": "tx7"
    },
    {
        "name": "施飞鹿",
        "department": "tx8"
    },
    {
        "name": "张云峰",
        "department": "tx6"
    },
    {
        "name": "崔兆军",
        "department": "tx12"
    },
    {
        "name": "王嘉乐",
        "department": "tx3"
    },
    {
        "name": "王旭成",
        "department": "tx8"
    },
    {
        "name": "丁秋栋",
        "department": "tx4"
    },
    {
        "name": "刘洋",
        "department": "tx3"
    },
    {
        "name": "曹家亮",
        "department": "tx2"
    },
    {
        "name": "丁晗佳",
        "department": "tx7"
    },
    {
        "name": "薛辉",
        "department": "tx5"
    },
    {
        "name": "魏学永",
        "department": "tx11"
    },
    {
        "name": "徐俊杰",
        "department": "tx4"
    },
    {
        "name": "黄德龙",
        "department": "tx9"
    },
    {
        "name": "鲍峥嵘",
        "department": "tx3"
    },
    {
        "name": "成健",
        "department": "tx5"
    },
    {
        "name": "赵兴印",
        "department": "tx3"
    },
    {
        "name": "王雯俊",
        "department": "tx1"
    },
    {
        "name": "文金龙",
        "department": "tx1"
    },
    {
        "name": "蒋景晖",
        "department": "tx7"
    },
    {
        "name": "李佳",
        "department": "tx5"
    },
    {
        "name": "陈勇旭",
        "department": "tx2"
    },
    {
        "name": "刘斌",
        "department": "tx6"
    },
    {
        "name": "叶康",
        "department": "tx3"
    },
    {
        "name": "唐佳波",
        "department": "tx3"
    },
    {
        "name": "关威刚",
        "department": "tx5"
    },
    {
        "name": "姚春敏",
        "department": "tx12"
    },
    {
        "name": "彭晟敏",
        "department": "tx9"
    },
    {
        "name": "邱怡瞳",
        "department": "tx5"
    },
    {
        "name": "叶军",
        "department": "tx7"
    },
    {
        "name": "陈东庚",
        "department": "tx5"
    },
    {
        "name": "李晓明",
        "department": "tx12"
    },
    {
        "name": "何颖捷",
        "department": "tx1"
    },
    {
        "name": "赵德荣",
        "department": "tx5"
    },
    {
        "name": "许佳尧",
        "department": "tx7"
    },
    {
        "name": "曹磊",
        "department": "tx10"
    },
    {
        "name": "何耀斌",
        "department": "tx11"
    },
    {
        "name": "樊庆",
        "department": "tx9"
    },
    {
        "name": "祝罗程",
        "department": "tx2"
    },
    {
        "name": "杜建国",
        "department": "tx3"
    },
    {
        "name": "周祯翔",
        "department": "tx7"
    },
    {
        "name": "蔡雨昇",
        "department": "tx6"
    },
    {
        "name": "张杰",
        "department": "tx5"
    },
    {
        "name": "胡尧杰",
        "department": "tx2"
    },
    {
        "name": "高云飞",
        "department": "tx11"
    },
    {
        "name": "张忠平",
        "department": "tx10"
    },
    {
        "name": "陈雅琦",
        "department": "tx6"
    },
    {
        "name": "俞岭",
        "department": "tx3"
    },
    {
        "name": "沈和彬",
        "department": "tx8"
    },
    {
        "name": "顾潇嵘",
        "department": "tx1"
    },
    {
        "name": "朱庆华",
        "department": "tx8"
    },
    {
        "name": "蒋杰",
        "department": "tx6"
    },
    {
        "name": "李睿隽",
        "department": "tx8"
    },
    {
        "name": "沈骏良",
        "department": "tx10"
    },
    {
        "name": "顾涛",
        "department": "tx2"
    },
    {
        "name": "陈鹏飞",
        "department": "tx7"
    },
    {
        "name": "李俊",
        "department": "tx1"
    },
    {
        "name": "俞田田",
        "department": "tx2"
    },
    {
        "name": "朱文静",
        "department": "tx3"
    },
    {
        "name": "韩健明",
        "department": "tx2"
    },
    {
        "name": "张广映",
        "department": "tx4"
    },
    {
        "name": "龚敏敏",
        "department": "tx1"
    },
];
function initData() {
    personArray = [];
    for (var i = 0; i < nameList.length; i++) {
        var person = {
            id: i,
            image: "img/" + nameList[i].department + ".jpg",
            thumb_image: "img/" + nameList[i].department + ".jpg",
            name: nameList[i].name,
            department: nameList[i].department
        }
        personArray.push(person)
    }
}

initData();
