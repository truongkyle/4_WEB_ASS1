function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
window.onscroll = function (e){
    var header = document.getElementById("header");
    var y = window.scrollY;
    if (y>=50){
        if (!hasClass(header, "special")) header.className += " special";
    }
    else {
        header.className = header.className.replace(/\bspecial\b/g, "")
    }
}
function showsidebar(){
    var sidebar = document.getElementById("sidebar-wrapper");
    if (hasClass(sidebar, "hide_sidebar")) sidebar.className = sidebar.className.replace(/\bhide_sidebar\b/g, "");
    else sidebar.className += " hide_sidebar";
}
document.addEventListener("click", function(event) {

    // If user clicks inside the element, do nothing
    if (event.target.closest(".wrapper_button")) return;
    console.log(event.target.closest(".wrapper_button"));
    // If user clicks outside the element, hide it!
    var sidebar = document.getElementById("sidebar-wrapper");
    if (!hasClass(sidebar,"hide_sidebar")) sidebar.className += " hide_sidebar"
});