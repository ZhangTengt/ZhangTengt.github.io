function f(index) {
    var fl = 1;
    $(".search").click(function () {
        fl++;
        if (fl % 2 == 0) {
            $(".search ul").css("display", "block")
            $(".search i").addClass("fa-rotate-180")
        } else if (fl % 2 == 1) {
            $(".search ul").css("display", "none")
            $(".search i").removeClass("fa-rotate-180")
        }
    })
}
f();


function banner() {
    var x = 0;
    $(".bans a").eq(x).css("opacity", "1")
    $(".small li").eq(x).addClass("small_bg")

    setInterval(() => {
        $(".bans a").eq(x).css("opacity", "0")
        $(".small li").eq(x).removeClass("small_bg")
        x++;
        if (x > $(".bans a").length - 1) {
            x = 0
        }
        $(".bans a").eq(x).css("opacity", "1")
        $(".small li").eq(x).addClass("small_bg")
    }, 3000);

    $(".small li").each(function (i, t) {
        $(".small li").eq(i).mouseover(function () {
            $(".small li").eq(x).removeClass("small_bg")
            $(".small li").eq(i).addClass("small_bg")
            $(".bans a").eq(i).css("opacity", "1")
        })
        $(".small li").eq(i).mouseout(function () {
            $(".small li").eq(x).addClass("small_bg")
            $(".small li").eq(i).removeClass("small_bg")
            $(".bans a").eq(i).css("opacity", "0")
        })
    })
}
banner();

function tab() {
    var index = 0;
    $(".g_1 a").eq(index).addClass("g_1_bg")
    $(".g_2").eq(index).css("display", "block")

    $(".g_1 a").each(function (i, obj) {
        $(".g_1 a").eq(i).index = i
        $(".g_1 a").eq(i).mouseover(function () {

            $(".g_2").each(function (j, obj) {
                $(".g_1 a").eq(j).removeClass("g_1_bg")
                $(".g_2").eq(j).css("display", "none")
            })

            $(".g_1 a").eq(i).addClass("g_1_bg")
            $(".g_2").eq(i).css("display", "block")
        })
    })
}
tab();


function lunbo() {
    var x = 0
    $("#sub span").eq(0).css("backgroundColor", "red")
    setInterval(() => {
        for (let i = 0; i < $("#sub span").length; i++) {
            $("#sub span").css("backgroundColor", "")
        }
        x++
        if (x > 3) {
            x = 0
        }
        $("#sub span").eq(x).css("backgroundColor", "red")
        $("#lf_sl").css("left", -x * 344 + "px")
    }, 5000)
    for (let i = 0; i < $("#sub span").length; i++) {
        $("#sub span").mouseover(function () {
            for (let j = 0; j < $("#sub span").length; j++) {
                $("#sub span").css("backgroundColor", "")
            }
            $(this).css("backgroundColor", "red")
            $("#lf_sl").css("left", $(this).index() * -344 + "px")
        })
    }
}
lunbo();


function scroll_auto() {
    for (let i = 0; i < $(".left_tab li").length; i++) {
        $(".left_tab li").eq(i).click(function () {
            var ot = $(".o_t").eq($(this).index() - 1).offset().top
            console.log(ot);

            if (ot < 890) {
                $(".left_tab").css("display", "none")
            } else {
                document.body.scrollTop = ot - 80
                document.documentElement.scrollTop = ot - 80
            }

        })
    }

}
scroll_auto();

function backBtn() {
    $(".back").click(function () {
        window.scrollTo(0, 0)
    })
    $(".back").mouseover(function () {
        $("#backText").css("left", "-67px")
        $(".back").css({ "backgroundColor": "#e02445", "color": "#ffffff" })
        $("#backText").css({ "backgroundColor": "#e02445", "color": "#ffffff" })
    })
    $(".back").mouseout(function () {
        $("#backText").css("left", "39px")
        $(".back").css({ "backgroundColor": "#eee", "color": "black" })
        $("#backText").css({ "backgroundColor": "#eee", "color": "black" })
    })
}
backBtn()

