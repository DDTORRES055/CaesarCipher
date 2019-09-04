function autoResize() {
    var textboxInput = document.getElementById('textboxInput');
    var textboxOutput = document.getElementById('textboxOutput');
    var button = document.getElementById('button');

    textboxInput.style.height = "100px";
    textboxInput.style.height = textboxInput.scrollHeight + 'px';

    textboxOutput.style.height = "100px";
    textboxOutput.style.height = textboxOutput.scrollHeight + 'px';

    if(textboxInput.value === "")
        button.style.display = "none";
    else
        button.style.display = "inline";
}

function cipherText() {
    var shift = 20;
    var text = document.getElementById('textboxInput').value;
    var textEncrypted = "";
    var textboxOutput = document.getElementById('textboxOutput');

    for (let i = 0; i < text.length; i++) {
        let charNumber = text.charAt(i).charCodeAt();
        for (let j = 0; j < shift; j++) {
            if (charNumber >= 65 && charNumber <= 90) {
                charNumber++;
                if(charNumber > 90)
                    charNumber = 65;
                textboxOutput.value = textEncrypted + String.fromCharCode(charNumber);
            }
            else if (charNumber >= 97 && charNumber <= 122) {
                charNumber++;
                if(charNumber > 122)
                    charNumber = 97;
                textboxOutput.value = textEncrypted + String.fromCharCode(charNumber);
            }
            else{
                textboxOutput.value += text.charAt(i);
            }
        }
        textEncrypted += String.fromCharCode(charNumber)
    }
}