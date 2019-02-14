function switchTheme() {
    var checkBox = document.getElementById("switcher");
    var theme = document.getElementById("theme");
    if (checkBox.checked == true){
        document.getElementById("theme").href = "dark.css";
    } else {
        document.getElementById("theme").href = "main.css";
    }
}
