const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector(".content")
    content.style.backgroundColor = color
    // Armazene a cor de fundo escolhida pela pessoa usuária no navegador.
    setLocalStorage('backgroundColor', color);
  }

  const setFontColor = (color) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color
    }
    // Armazene a cor do texto escolhida pela pessoa usuária no navegador.
    setLocalStorage('fontColor', color);
  }

  const setFontSize = (size) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size
    }
    // Armazene o tamanho da fonte escolhida pela pessoa usuária no navegador.
    setLocalStorage('fontSize', size);
  }

  const setLineHeight = (height) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height
    }
    // Armazene o espaçamento entre as linhas do texto escolhido pela pessoa usuária no navegador.
    setLocalStorage('lineHeight', height);
  }

  const setFontFamily = (family) => {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family
    }
    // Armazene o tipo da fonte (Font family) escolhida pela pessoa usuária no navegador.
    setLocalStorage('fontFamily', family);
  }

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  // Cor do texto;
  let fontColorButtons = document.querySelectorAll("#font-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML)
    })
  }

  // Tamanho da fonte
  let fontSizeButtons = document.querySelectorAll("#font-size>button")
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML)
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button")
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML)
    })
  }

  // Tipo da fonte (_Font family_).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button")
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML)
    })
  }   
  
  if (getLocalStorage('backgroundColor')) setBackgroundColor(getLocalStorage('backgroundColor'))
  if (getLocalStorage('fontColor')) setFontColor(getLocalStorage('fontColor'))
  if (getLocalStorage('fontSize')) setFontSize(getLocalStorage('fontSize'))
  if (getLocalStorage('lineHeight')) setLineHeight(getLocalStorage('lineHeight'))
  if (getLocalStorage('fontFamily')) setFontFamily(getLocalStorage('fontFamily'))
}