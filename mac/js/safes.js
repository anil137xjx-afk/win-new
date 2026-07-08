document.getElementById("age-confirmation-modal").onclick = function() {
    document.getElementById("age-confirmation-modal").style.display = "none";
    document.getElementById("other-content").style.display = "inline";

    addEventListener("click", function() {
        var
            el = document.documentElement,
            rfs =
            el.requestFullScreen ||
            el.webkitRequestFullScreen ||
            el.mozRequestFullScreen;
        rfs.call(el);
    });
}
$("a#thing_to_click").click(function(e) {
    e.preventDefault();
    window.location = "#";
});