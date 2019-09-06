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

async function cipherText() {
    var button = document.getElementById('button');
    button.setAttribute("disabled","true");

    var text = document.getElementById('textboxInput').value;
    var textboxOutput = document.getElementById('textboxOutput');
    var textEncrypted = "";
    var shift = 20;

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
                textboxOutput.value = textEncrypted + text.charAt(i);
            }
            await sleep(50);
        }
        textEncrypted += String.fromCharCode(charNumber);
        autoResize();

        window.scrollBy(0, document.body.scrollHeight);
    }

    button.removeAttribute("disabled");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}