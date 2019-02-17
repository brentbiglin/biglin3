function switchTheme() {
    var checkBox = document.getElementById("switcher");
    if (checkBox.checked == true){
        document.getElementById("dark-theme").rel = "stylesheet";
        document.getElementById("main-theme").rel = "alternate stylesheet";
    } else {
        document.getElementById("main-theme").rel = "stylesheet";
        document.getElementById("dark-theme").rel = "alternate stylesheet";
    }
}
