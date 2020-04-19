var imgs = document.getElementsByClassName("banner_img");
var next = document.getElementById("next");
var billboard = document.getElementById("billboard")
var billboard_title = document.getElementsByClassName("billboard_title")
var billboard_content = document.getElementsByClassName("billboard_content")
var product_list = document.getElementsByClassName("product_list")
var fa_link = document.getElementsByClassName("fa-link")
var original_intention_list = document.getElementsByClassName("original_intention_list")
var serve_banner_list = document.getElementsByClassName("serve_banner_list")
var serve_prev = document.getElementById("serve_prev")
var serve_next = document.getElementById("serve_next")
var case_list_bg = document.getElementsByClassName("case_list_bg")
var message_list = document.getElementsByClassName("message_list")
var message_list_left = document.getElementsByClassName("message_list_left")
var shade = document.getElementsByClassName("shade")
var bg = document.getElementsByClassName("bg")
var tab_box = document.getElementById("tab_box")
var last = document.getElementById("last")
var header = document.querySelector("header")


var x = 0;
imgs[x].style.opacity = 1;

serve_banner_list[x].style.opacity = 1;
setInterval(() => {
    imgs[x].style.opacity = 0;
    x++;
    if (x > imgs.length - 1) {
        x = 0;
    }
    imgs[x].style.opacity = 1;
    myAnimate();
}, 5000);

next.onclick = function () {
    imgs[x].style.opacity = 0;
    x++;
    if (x > imgs.length - 1) {
        x = 0;
    }
    imgs[x].style.opacity = 1;
    myAnimate();
}
prev.onclick = function () {
    imgs[x].style.opacity = 0;
    x--;
    if (x < 0) {
        x = imgs.length - 1;
    }
    imgs[x].style.opacity = 1;
    myAnimate();
}
function myAnimate() {
    billboard.classList.add("animated", "bounceInLeft");
    setTimeout(() => {
        billboard.classList.remove("animated", "bounceInLeft");
    }, 1000);
}

for (let i = 0; i < product_list.length; i++) {
    product_list[i].style.opacity = 1;
    product_list[i].index = i;
    product_list[i].onmouseover = function () {
        product_list[i].classList.add("product_list_bg");
        product_list[i].style.opacity = .6;
        fa_link[this.index].style.opacity = .6;
    }
    product_list[i].onmouseout = function () {
        product_list[i].classList.remove("product_list_bg");
        product_list[i].style.opacity = 1;
        fa_link[this.index].style.opacity = 0;
    }
}
for (let i = 0; i < original_intention_list.length; i++) {

    original_intention_list[i].index = i + 1;
    original_intention_list[i].onmouseover = function () {
        original_intention_list[i].style.backgroundImage = "url(" + "http://www.nalijiaju.com.cn/skin/nalijiaju/style/images/o" + this.index + ".png" + ")"
        original_intention_list[i].classList.add("original_intention_list_bg")
    }
    original_intention_list[i].onmouseout = function () {
        original_intention_list[i].style.backgroundImage = ""
        original_intention_list[i].classList.remove("original_intention_list_bg")
    }
}

serve_next.onclick = function () {
    serve_banner_list[x].style.opacity = 0;
    x++;
    if (x > serve_banner_list.length - 1) {
        x = 0;
    }
    serve_banner_list[x].style.opacity = 1;
}
serve_prev.onclick = function () {
    serve_banner_list[x].style.opacity = 0;
    x--;
    if (x < 0) {
        x = serve_banner_list.length - 1;
    }
    serve_banner_list[x].style.opacity = 1;
}

for (let i = 0; i < case_list_bg.length; i++) {
    case_list_bg[i].index = i;
    case_list_bg[i].onmouseover = function () {
        case_list_bg[i].style.opacity = .7;
    }
    case_list_bg[i].onmouseout = function () {
        case_list_bg[i].style.opacity = 1;
    }
}

for (let i = 0; i < message_list_left.length; i++) {
    message_list_left[i].onmouseover = function () {
        message_list_left[i].style.opacity = .7;
        shade[i].style.opacity = .7;
    }
    message_list_left[i].onmouseout = function () {
        message_list_left[i].style.opacity = 1;
        shade[i].style.opacity = 0;
    }
}

for (let i = 0; i < tab_box.children.length; i++) {
    tab_box.children[i].onmouseover = function () {
        this.style.transform = "translateX(" + -95 + "px)"
        this.style.backgroundColor = "red"
    }
    tab_box.children[i].onmouseout = function () {
        this.style.transform = "translateX(" + 0 + "px)"
        this.style.backgroundColor = "rgba(0, 0, 0, 0.61)"
    }
}
last.onmouseover = function () {
    this.style.transform = "translateX(" + 0 + "px)"
}

window.onscroll = function () {
    var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
    if (scrollTop > 35) {
        header.style.transform = "translateY(" + -60 + "px)"
    }else {
        header.style.transform = "translateY(" + 0 + "px)"
    }
}

last.onclick = function(){
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 14);
}


// var head = document.getElementsByClassName("head")
// var head_list = document.getElementsByClassName("head_list")
// for (let i = 0; i < head.length; i++) {
//     head[i].index = i;
//     head[i].onmouseover = function(){
//         head_list[this.index].style.display = "block"
//     }
//     head[i].onmouseout = function(){
//         head_list[this.index].style.display = "none"
//     }  
// }

