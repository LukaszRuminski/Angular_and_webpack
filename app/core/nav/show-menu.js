$(".tn-language").hover(function () {
    $(this).find(".dropdown-menu").first().stop(true, true).fadeIn(400);
}, function () {
    $(this).find(".dropdown-menu").first().stop(true, true).fadeOut(400)
});

$(function () {
    // Do our DOM lookups beforehand
    var nav_container = $("header");
    var nav = $("div.stickmenu");
    var top_spacing = 0;
    var waypoint_offset = 50;
    nav_container.waypoint({
        handler: function (event, direction) {
            if (direction == "down") {
                nav_container.css({
                    "height": nav.outerHeight()
                });
                nav.stop().addClass("sticky").css("top", -nav.outerHeight()).animate({
                    "top": top_spacing
                });
            } else {
                nav_container.css({
                    "height": "auto"
                });
                nav.stop().removeClass("sticky").css("top", nav.outerHeight() + waypoint_offset).animate({
                    "top": ""
                });
            }
        },
        offset: function () {
            return -nav.outerHeight() - waypoint_offset;
        }
    });
});
var menuLeft = document.getElementById("ver-menu"),
    showPushMenu = document.getElementById("showPushMenu"),
    body = document.body;

showPushMenu.onclick = function () {
    classie.toggle(this, "active");
    classie.toggle(body, "cbp-spmenu-push-toright");
    classie.toggle(menuLeft, "cbp-spmenu-open");
    disableOther("showLeftPush");
};

function disableOther(button) {
    if (button !== "showPushMenu") {
        classie.toggle(showPushMenu, "disabled");
    }
}
$(function () {
    $("#mobile-menu").dlmenu({
        animationClasses: {
            classin: "dl-animate-in-2",
            classout: "dl-animate-out-2"
        }
    });
});