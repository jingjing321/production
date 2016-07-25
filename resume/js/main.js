/**
 * Created by Administrator on 2016/7/21.
 */
var curindex = 1;
function next() {
    var cutpage = document.getElementById("page" + curindex);
    cutpage.style.transform = "rotateX(-90deg)";
    if (curindex == 4)
        curindex=0;
    curindex++;
    var nextpage = document.getElementById("page" + curindex);
    nextpage.style.transform = "rotateX(0deg)";
}

function pre() {
    var cutpage = document.getElementById("page" + curindex);
    cutpage.style.webkitTransform = "rotateX(90deg)";
    if (curindex == 1)
        curindex=5;
    curindex--;
    var prepage = document.getElementById("page" + curindex);
    prepage.style.webkitTransform = "rotateX(0deg)";
}
 var a=setInterval(next,4000);
