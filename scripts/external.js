function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*Скрыть/показать окно с результатом поиска*/
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}
/* Скрыть/показать социальный граф */
$(document).ready(function(){
    GraphHide();
});

function GraphHide() {
    $("#graph1").hide();
}

function GraphShow() {
    $("#popup1").hide();
    $("#graph1").show();
}

function Reset() {
    location.reload();
}