function autoResize() {
    document.getElementById('textbox').style.height = "100px";
    document.getElementById('textbox').style.height = document.getElementById('textbox').scrollHeight + 'px';
    /* var box = document.getElementById('textbox');

    console.log(box.scrollHeight);
    console.log(box.style); */
}