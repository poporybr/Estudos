function maxText(){
    const textIn = document.getElementById('textInput').value
    const areaText = document.getElementById('textOut')
    areaText.value = textIn.toUpperCase()
}

function minText(){
    const textIn = document.getElementById('textInput').value
    const areaText = document.getElementById('textOut')
    areaText.value = textIn.toLowerCase()
}

