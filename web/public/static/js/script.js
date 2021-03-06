function topBarAnimation(e) {
    $(".topBar ul li").each(function (t) {
        $(this).delay(3e3 * t).animate({
            top: 0
        }, function () {
            $(this).delay(2e3).animate({
                top: "-48px"
            }, function () {
                $(this).css("top", "48px"), t === e && topBarAnimation(e)
            })
        })
    })
}
$(function () {
    $(".sy-top-msg").slide({
        mainCell: "ul",
        autoPlay: !0,
        effect: "topLoop"
    }), $(".gongg").slide({
        mainCell: "ul",
        autoPlay: !0,
        effect: "leftMarquee",
        interTime: 50,
        vis: 1
    }), $(".program").slide({}), $(".sy-m-banner").slide({
        titCell: ".banner-page",
        mainCell: ".pic",
        effect: "leftLoop",
        autoPage: "<li><a></a></li>",
        autoPlay: !0,
        delayTime: 1e3,
        interTime: 3e3,
        prevCell: ".arrow-left",
        nextCell: ".arrow-right",
        pnLoop: !0,
        trriger: "click",
        vis: "auto"
    }), $(".smallbanner").slide({
        mainCell: ".pic",
        effect: "left",
        pnLoop: !1
    });
    var e = $(".topBar ul li").length - 1;
    topBarAnimation(e)
});