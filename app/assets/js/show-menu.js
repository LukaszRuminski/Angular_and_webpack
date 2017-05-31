/**
 * Created by grubson on 02.08.2016.
 */
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