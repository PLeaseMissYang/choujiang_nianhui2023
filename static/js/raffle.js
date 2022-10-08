var jsonData = []; // 要导出到excel的json数据

if (localStorage.getItem("excel_data")) {
    temp = localStorage.getItem("excel_data");
    jsonData = $.parseJSON(temp);
}

function changeReward(reward_str) {
    $(".lucky_people_title").text(reward_str);
    if (reward_str != '安慰奖') {
        $(".btn_circle").text('开始');
    }
    if (reward_str == '九等奖') {
        Obj.luckyNum = 20;
    }
    if (reward_str == '九等奖 ') { //注意空格，区分20和30的抽奖数
        Obj.luckyNum = 30;
    }
    if (reward_str == '八等奖') {
        Obj.luckyNum = 20;
    }
    if (reward_str == '七等奖') {
        Obj.luckyNum = 20;
    }
    if (reward_str == '六等奖') {
        Obj.luckyNum = 10;
    }
    if (reward_str == '五等奖') {
        Obj.luckyNum = 10;
    }
    if (reward_str == '四等奖') {
        Obj.luckyNum = 5;
    }
    if (reward_str == '三等奖') {
        Obj.luckyNum = 5;
    }
    if (reward_str == '二等奖') {
        Obj.luckyNum = 5;
    }
    if (reward_str == '一等奖') {
        Obj.luckyNum = 1;
    }
    if (reward_str == '安慰奖') {
        Obj.luckyNum = 2;
        $(".btn_circle").text('安慰奖');
    }
    $('.lpl_list.active').children().remove()
}
function tableToExcel() {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `姓名,部门,获奖\n`;
    // 增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < jsonData.length; i++) {
        for (const key in jsonData[i]) {
            str += `${jsonData[i][key] + '\t'},`;
        }
        str += '\n';
    }
    // encodeURIComponent解决中文乱码
    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    // 通过创建a标签实现
    const link = document.createElement("a");
    link.href = uri;
    // 对下载的文件命名
    var tableName = $('#name').val();
    link.download = tableName + ".csv";
    link.click();
}

music_bool = false;

// 音乐开关
function music_control() {
    if (music_bool) {
        var myAuto = document.getElementById('myaudio');
        myAuto.pause()
        music_bool = false;
    } else {
        var myAuto = document.getElementById('myaudio');
        myAuto.play();
        music_bool = true;
    }
}
// 清除数据开关
function clearLocalData() {
    var sure = confirm('警告：确定清除所有数据？！');
    if (sure) {
        localStorage.clear();
        window.location.reload();
    }
}

// 测试LocalStorage
function test_data() {
    console.log(localStorage.getItem('award_history'));
    console.log($.parseJSON(localStorage.getItem('excel_data')));
    console.log('personArray.length: '+personArray.length)
    console.log('Obj.luckyResult_history.length: '+Obj.luckyResult_history.length)
}