const body = document.getElementsByTagName('body')[0];
const article = document.getElementsByClassName('paragraph')[0];

const changeColorBody = () => {
    const buttonsBackground = document.querySelectorAll('#background-color button');
    for (let index = 0; index < buttonsBackground.length; index += 1) {
        buttonsBackground[index].addEventListener('click', () => {
            body.style.backgroundColor = buttonsBackground[index].innerText;
            localStorage.setItem('background', buttonsBackground[index].innerText);
        })
    }
};

const changeColorText = () => {
    const buttonsColorFont = document.querySelectorAll('#font-color button');
    for (let index = 0; index < buttonsColorFont.length; index += 1) {
        buttonsColorFont[index].addEventListener('click', () => {
            article.style.color = buttonsColorFont[index].innerText;
            localStorage.setItem('fontColor', buttonsColorFont[index].innerText);
        })
    }
};

const changeSizeText = () => {
    const buttonsFontSize = document.querySelectorAll('#font-size button');
    for (let index = 0; index < buttonsFontSize.length; index += 1) {
        buttonsFontSize[index].addEventListener('click', () => {
            article.style.fontSize = buttonsFontSize[index].innerText;
            localStorage.setItem('FontSize', buttonsFontSize[index].innerText);
        })
    }
};

const changeLineHeight = () => {
    const buttonsLineHeight = document.querySelectorAll('#line-height button');
    for (let index = 0; index < buttonsLineHeight.length; index += 1) {
        buttonsLineHeight[index].addEventListener('click', () => {
            article.style.lineHeight = buttonsLineHeight[index].innerText;
            localStorage.setItem('LineHeight', buttonsLineHeight[index].innerText);
        })
    }
};

const changeFontFamily = () => {
    const buttonsFontFamily = document.querySelectorAll('#font-family button');
    for (let index = 0; index < buttonsFontFamily.length; index += 1) {
        buttonsFontFamily[index].addEventListener('click', () => {
            article.style.fontFamily = buttonsFontFamily[index].innerText;
            localStorage.setItem('FontFamily', buttonsFontFamily[index].innerText);
        })
    }
};

const recoverStorage = () => {
    body.style.backgroundColor = localStorage.getItem('background');
    article.style.color = localStorage.getItem('fontColor');
    article.style.fontSize = localStorage.getItem('FontSize');
    article.style.lineHeight = localStorage.getItem('LineHeight');
    article.style.fontFamily = localStorage.getItem('FontFamily');  
};

changeColorBody();
changeColorText();
changeSizeText();
changeLineHeight();
changeFontFamily();

window.onload = () => {
    recoverStorage();
}