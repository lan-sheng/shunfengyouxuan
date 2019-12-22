// 首页效果
// 顶部效果
let toppromo_effect = (function() {
    $(".banner").hide();
    $(".topclose").hide();
    $(".topshow").slideDown(500, function() {
        setTimeout(function() {
            $(".topshow").slideUp(500);
            $(".banner").slideDown(500);
            $(".topclose").show();
        }, 5000);
    });
    $(".topclose").click(function() {
        $(".topclose").hide();
        $(".banner").slideUp(500)
    });
})()


// 侧边栏效果
let allSort_effect_a = $('#booksort .item').mouseenter(function() {
    $(this).addClass("hover")
})
let allSort_effect_b = $('#booksort .item').mouseleave(function() {
    $(this).removeClass("hover");
})

// 首页轮播图
let home_slideshow_effect = (function() {
    let currIndex; //图片的索引;
    let lis; //li变量
    let liWidth; //每个li的宽度
    let len //li的个数
    let id;
    init()

    function init() {
        let ddwidth = document.body.clientWidth;
        currIndex = 1; //初始化时第一张图片为1；因为前面有一个最后一张图片的复制
        let li_first = document.querySelector('#index_slide ol li:first-of-type')
        let copy_first = li_first.cloneNode(true);
        let li_last = document.querySelector('#index_slide ol li:last-of-type');
        let copy_last = li_last.cloneNode(true);
        let list = document.querySelector('#index_slide ol') //ul
        list.appendChild(copy_first);
        list.insertBefore(copy_last, li_first);
        let dd_first = document.querySelector('.indexbg dl dd:first-of-type');
        let copydd_first = dd_first.cloneNode(true);
        let ddst = document.querySelector('.indexbg dl') //ul
        ddst.appendChild(copydd_first);
        let dd_last = document.querySelector('.indexbg dl dd:last-of-type');
        let copydd_last = dd_last.cloneNode(true);
        ddst.insertBefore(copydd_last, dd_first);
        dds = document.querySelectorAll('.indexbg dl dd');

        for (let i = 0; i < dds.length; i++) {
            dds[i].style.width = ddwidth + 'px'
        }


        lis = document.querySelectorAll('#index_slide ol li');
        liWidth = lis[0].offsetWidth;
        len = lis.length;

        list.style.width = liWidth * len + 'px';
        list.style.left = -liWidth + 'px';

        let bullets = document.querySelectorAll('.slide_show #lunboNum li');
        for (let i = 0; i < bullets.length; i++) {
            bullets[i].index = i;
            bullets[i].onclick = function() {
                currIndex = this.index + 1;
                slideTo(currIndex);
            }
        }
        auto();
        document.querySelector('.slide_wrap').onmouseover = function() {
            stop();
        }
        document.querySelector('.slide_wrap').onmouseout = function() {
            auto();
        }
    }

    function slideNext() {
        currIndex++;
        slideTo(currIndex);
    }



    function slideTo(index) {
        let list = document.querySelector('#index_slide ol') //ul
        let ddst = document.querySelector('.indexbg dl') //ul
        let ddwidth = document.body.clientWidth;
        let dds = document.querySelectorAll('.indexbg dl dd');
        if (currIndex === len) {
            index = currIndex = 2;
            list.style.left = -liWidth + 'px';
            ddst.style.left = -ddwidth + 'px';
        }
        if (currIndex === -1) {
            index = currIndex = len - 3;
            list.style.left = -liWidth * (len - 2) + 'px';
            dds.style.left = -ddwidth * (len - 2) + 'px';
        }
        let focusIndex;
        let bullets = document.querySelectorAll('.slide_show #lunboNum li');
        if (index === 0) {
            focusIndex = bullets.length - 1;
        } else if (index === (len - 1)) {
            focusIndex = 0
        } else {
            focusIndex = index - 1
        }


        document.querySelector('.cur').className = '';
        bullets[focusIndex].className = 'cur';
        let left = -index * liWidth;
        let ddleft = -index * ddwidth;
        animate(list, {
            left: left
        });
        animate(ddst, {
            left: ddleft
        })
    }

    function auto() {
        clearInterval(id);
        id = setInterval(function() {
            slideNext()
        }, 5000)
    }

    function stop() {
        clearInterval(id)
    }
})()

//为你推荐:鼠标移入移出显示消失“加入购物车”效果
let ptList_effect = $('.ptList li').each(function() {
    $(this).hover(function() {
        $(this).find(".gBtn").animate({
            top: "186px"
        }, 200);
    }, function() {
        $(this).find(".gBtn").animate({
            top: "211px"
        }, 300);
    })
})
export { toppromo_effect, ptList_effect, allSort_effect_a, allSort_effect_b, home_slideshow_effect }