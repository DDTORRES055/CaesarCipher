function autoResize() {
    var textbox = document.getElementById('textbox');
    var button = document.getElementById('button');

    textbox.style.height = "100px";
    textbox.style.height = textbox.scrollHeight + 'px';

    if(textbox.value === "")
        button.style.display = "none";
    else
        button.style.display = "inline";
}