var Obj = {};
Obj.luckyResult = [];
Obj.luckyResult_history = [];
Obj.luckyPrize = '';

if (localStorage.getItem("award_history")) {
    Obj.luckyResult_history = localStorage.getItem('award_history').split(",")
}
$(function () {

    function loadImage(arr, callback) {
        var loadImageLen = 1;
        var arrLen = arr.length;
        $('.all_number').html("/" + arrLen);
        for (var i = 0; i < arrLen; i++) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                ++loadImageLen;
                $(".current_number").html(loadImageLen);
                if (loadImageLen == arrLen) {
                    callback(img);
                }
            }
            img.src = arr[i].image;
        }
    }
    Obj.M = $('.container').lucky({
        row: 5, //每排显示个数  必须为奇数
        col: 5, //每列显示个数  必须为奇数
        depth: 5, //纵深度
        iconW: 28, //图片的宽
        iconH: 28, //图片的高
        iconRadius: 8, //图片的圆角
        data: personArray //数据的地址数组
    });
    loadImage(personArray, function (img) {
        $('.loader_file').hide();
    });
    function showLuckyPeople(num) {
        setTimeout(function () {
            var $luckyEle = $('<img class="lucky_icon" />');
            var $userName = $('<p class="lucky_userName"></p>');
            var $fragEle = $('<div class="lucky_userInfo"></div>');
            $fragEle.append($luckyEle, $userName);
            $('.mask').append($fragEle);
            $(".mask").fadeIn(200);
            $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
            $userName.text(personArray[Obj.luckyResult[num]].name)
            $fragEle.animate({
                'left': '50%',
                'top': '50%',
                'height': '200px',
                'width': '200px',
                'margin-left': '-100px',
                'margin-top': '-100px',
            }, 1000, function () {
                setTimeout(function () {
                    $fragEle.animate({
                        'height': '100px',
                        'width': '100px',
                        'margin-left': '-300px',
                        'margin-top': '-100px',
                    }, 400, function () {
                        // $(".mask").fadeOut(100);
                        $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                        $userName.attr('class', 'lpl_userName').attr('style', '');
                        $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                        $('.lpl_list.active').append($fragEle);
                    })
                }, 1000)
            })
        }, num * 2000)
        // setTimeout(function() {
        //    $('.lucky_list').show();
        // }, 2500)
    }
    $('#stop').click(async function () {
        Obj.M.stop();
        $(".container").hide();
        $(this).hide();
        var i = 0;
        for (; i < Obj.luckyResult.length; i++) {
            showLuckyPeople(i);
        }
        // await sleep(60000);
        await sleep(Obj.luckyNum * 2000);
        $(".mask").fadeOut(100);
        await sleep(200);
        $("#open").show();
        pausePlay();
    })
    $('#open').click(function () {
        // $('.lucky_list').hide();
        if (personArray.length - Obj.luckyResult_history.length < Obj.luckyNum) {
            alert($(".lucky_people_title").text() + '-名额不足！');
            return 0;
        }
        if (personArray.length == Obj.luckyResult_history.length) {
            alert('抽奖结束！');
            return 0;
        }
        if (null == Obj.luckyNum) {
            alert('请选择奖项');
            return 0;
        } else {
            autoPlay();
            $("#open").hide();
            $(".container").show();
            Obj.M.open();
            randomLuckyArr();
            add_export();
            setTimeout(function () {
                $("#stop").show();
            }, 1000)
        }
    })
    function randomLuckyArr() {
        Obj.luckyResult = [];
        for (var i = 0; i < Obj.luckyNum; i++) {
            var random = Math.floor(Math.random() * personArray.length);
            if (Obj.luckyResult.indexOf(random) == -1 & Obj.luckyResult_history.indexOf(random) == -1) {
                Obj.luckyResult.push(random)
                Obj.luckyResult_history.push(random)
                localStorage.setItem("award_history", Obj.luckyResult_history);
            } else {
                i--;
            }
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //自动播放
    function autoPlay() {

        var myAuto = document.getElementById('myaudio');
        // myAuto.src = '/media/v2/sss.mp3';//MP3路径
        myAuto.currentTime = 0;
        myAuto.play();
        music_bool = true;
    }
    //自动暂停
    function pausePlay() {

        var myAuto = document.getElementById('myaudio');
        myAuto.pause();
        music_bool = false;

    }
    // 添加导出的数据
    function add_export() {
        for (var index of Obj.luckyResult) {
            data = {
                name: personArray[index].name,
                department: personArray[index].department,
                reward: $(".lucky_people_title").text()
            }
            jsonData.push(data)
        }
        localStorage.setItem("excel_data", JSON.stringify(jsonData));
    }
})
