let textGenerator = document.getElementById("text_generator");
if(textGenerator != null) {
    textGenerator.addEventListener("click", ()=> {
        let DataViewWrapper = document.querySelector(".generated-result-wrap");
        let UserInput = document.getElementById("user_input");
        let DataView = document.getElementById("generated-data");
        if(UserInput.value.trim() != "") {
            typeWritingEffect(UserInput, DataView)
            // DataView.textContent = UserInput.value;
            DataViewWrapper.style.display = "block";
        }
        else {
            DataViewWrapper.style.display = "none";
        }
    });
}

const typeWritingEffect = (input, inputShow) => {
    if(inputShow.textContent != "") {
        inputShow.textContent = "";
        clearTimeout(typeWriter);
    }
    var i = 0;
    var txt = input.value;
    var speed = .5;
    function typeWriter() {
        if (i < txt.length) {
            inputShow.textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()
}