$(function () {
    "use strict";
    document["addEventListener"]("touchstart", function () { }, false);
    MegaMenu();
    MenuSearch();
}());
function MegaMenu() {
    var smallSizeWidth = 992;
    const icon = "<i class=\"fal fa-angle-down\"></i>";
    $("<div class=\"overlapblackbg\"></div>").prependTo(".menu");
    $(".menu-toggle-btn").on("click", function () {
        $("body")["toggleClass"]("menu-active");
    });

    $(".overlapblackbg").on("click",function () {
        $("body").removeClass("menu-active");
    });

    $(".menu > .menu-list > li")["has"](".sub-menu")["prepend"]("<span class=\"menu-arrow\">" + icon);
    $(".menu > .menu-list > li")["has"](".megamenu")["prepend"]("<span class=\"menu-arrow\">" + icon);
    $(".menu-arrow")["click"](function () {
        $(this)["toggleClass"]("menu-activearrow")["parent"]()["siblings"]()["children"]().removeClass("menu-activearrow");
        $(".menu > .menu-list > li > ul, .megamenu")["not"]($(this)["siblings"](".menu > .menu-list > li > ul, .megamenu"))["slideUp"]("slow");
            $(this)["siblings"](".sub-menu")["slideToggle"]("slow");
            $(this)["siblings"](".megamenu")["slideToggle"]("slow");
    });
    $(".menu > .menu-list > li > ul > li")["has"](".sub-menu")["prepend"]("<span class=\"menu-arrow-02\">" + icon);
    $(".menu > .menu-list > li > ul > li > ul > li")["has"](".sub-menu")["prepend"]("<span class=\"menu-arrow-03\">" + icon);
    $(".menu-arrow-02")["click"](function () {
        $(this)["toggleClass"]("menu-activearrow")["parent"]()["siblings"]()["children"]().removeClass("menu-activearrow");
        $(".menu > .menu-list > li > ul.sub-menu > li > ul.sub-menu")["not"]($(this)["siblings"](".menu > .menu-list > li > ul.sub-menu > li > ul.sub-menu"))["slideUp"]("slow");
        $(this)["siblings"](".sub-menu")["slideToggle"]("slow");
    });

    $(window)["on"]("resize", function () {
        if ($(window)["outerWidth"]() < smallSizeWidth) {
        } else {
            $(".menu").removeAttr("style");
            $(".wsmenucontainer").removeAttr("style");
            $("body").removeClass("menu-active");
            $(".menu > .menu-list > li > .megamenu, .menu > .menu-list > li >  ul, .menu > .menu-list > li >  ul > li >  ul, .menu > .menu-list > li >  ul > li >  ul > li >  ul").removeAttr("style");
            $(".menu-arrow").removeClass("menu-activearrow");
            $(".menu-arrow-02 > i").removeClass("menu-rotate");
        }
    });
    $(window)["trigger"]("resize");
}
function MenuSearch() {
    var menuMobile = $(".menu-mobile");
    if (!menuMobile.length) return false;
    var menuSearch = menuMobile.find(".menu-search");
    if (!menuSearch.length) return false;

    menuMobile.find(".menu-search-toggle").on("click", function () {
        menuSearch.toggleClass("menu-search-open");
        $(this).find(".icon").toggleClass("fa-times");
    });

    $("body, .menu-search-open .menu-search-toggle").on("click", function () {
        if (menuSearch.hasClass("menu-search-open")) {
            menuSearch.removeClass("menu-search-open");
            $(".menu-search").find(".icon").toggleClass("fa-times");

        }
    });

    $(".menu-mobile, .menu-searchform").on("click", function (e) {
        e.stopPropagation();
    });

    return false;
}