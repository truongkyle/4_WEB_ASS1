function openTab(tabName,elmnt) {
    var i, tabcontent, tablinks;
    var readMoreBtn = document.getElementById("readMoreBtn");
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    if (tabName !== "Cottruyen"){
        readMoreBtn.style.display = "none";
    }
    else{
        readMoreBtn.style.display = "";
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = "red";
}   
window.onload = function(e){
    document.getElementById("defaultOpen").click();
    var desc = document.getElementsByClassName("desc");
    var buttonrow = document.getElementsByClassName("button-row");
    desc[0].style.paddingBottom = buttonrow[0].offsetHeight + "px";
    window.onresize = function(e){
        var buttonrow = document.getElementsByClassName("button-row");
        desc[0].style.paddingBottom = buttonrow[0].offsetHeight + "px";
        console.log("ss")
    }
}
function expandMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Rút gọn";
      moreText.style.display = "inline";
    }
}

function equalHeightDesc(){
    var tabcontent = document.getElementsByClassName("tabcontent");
    var preview_img = document.getElementById("preview-img");
    var desc = document.getElementsByClassName("desc");
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].style.display == "block"){
            if (tabcontent[i].offsetHeight < preview_img.offsetHeight) desc[0].style.minHeight = preview_img.offsetHeight + 'px';
            console.log(tabcontent[i].offsetHeight);
            console.log(preview_img.offsetHeight);
        }
        else {
            tabcontent[i].style.height = "";
        }
    }
}