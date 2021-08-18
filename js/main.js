$(document).ready(function () {
    $(".main").load("main.html");
});
var user = "";
setTimeout(function () {
    $(".name-button").click(function () {
        user = $("#name")[0].value;
        $("body").load("data.html");
    });
}, 500);
