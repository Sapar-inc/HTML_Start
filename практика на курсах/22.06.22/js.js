$(document).ready(function() {
    var $btn = $(".block1");
    var $cnt = $(".cnt");
    $btn.click(function() {
            $cnt.html(parseInt($cnt.html()) + 1)
    });
});