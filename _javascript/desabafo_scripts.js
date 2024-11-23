const sendForm = document.getElementsByTagName("form")[0];
const textAreaInput = document.getElementsByTagName("textarea")[0];
const wordNum = document.getElementById("word_num");
const formWithButtonsTheme = document.getElementsByName("theme")[0];

sendForm.action = location.href

if (textAreaInput && wordNum) {
    textAreaInput.addEventListener("input", () => {wordNum.innerText = textAreaInput.textLength});
}

const changeFormTheme = () => { 
    if (siteTheme === "dark") {
        formWithButtonsTheme.value = "light";
    } else {
        formWithButtonsTheme.value = "dark";
    };
};

changeFormTheme()
