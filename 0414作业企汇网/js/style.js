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
// for (let i = 0; i < $(".search_list").length; i++) {
//     console.log(i);
//     $(".search_list")[i].index = i;
//     $(".search_list").click(function () {
//         var value = $(".search_list a")[this.index].text
//        $(".search").text = value   
//     })
// }


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
        $(".g_1 a").eq(i).mouseover(function () {
            $(".g_2").eq(index).css("display", "none")
            $(".g_1 a").eq(index).removeClass("g_1_bg")
            $(".g_1 a").eq(i).addClass("g_1_bg")
            $(".g_2").eq(i).css("display", "block")
            x = i
        })
        $(".g_1 a").eq(i).mouseout(function () {
            $(".g_1 a").eq(x).removeClass("g_1_bg")
            $(".g_2").eq(x).css("display", "none")
            //     setTimeout(() => {
            //     $(".g_1 a").eq(x).addClass("g_1_bg")
            //     $(".g_2").eq(x).css("display", "block")
            // }, 1000);
        })
    })

}
tab()



