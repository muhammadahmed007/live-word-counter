const textField = document.getElementById('contentField')
const wordsCountField = document.getElementById('words_count')
const charactersCountField = document.getElementById('characters_count')
const paragraphsCountField = document.getElementById('paragraphs_count')

textField.addEventListener('input', ()=>{
    var _content = textField.value
    if(_content == ''){
        var words = 0
        var chars = 0
        var paragraphs = 0
    }else{
        var words = _content.split(/\s/).length
        var chars = ((_content).replace(/\s/gi, '')).split('').length
        var paragraphs = 0
        var paragraphs_split = _content.split(/\n/)
        paragraphs_split.forEach(par =>{
            if(par.trim() != ""){
                paragraphs++;
            }
        })
    }


    wordsCountField.innerText = words.toLocaleString('en-US')
    charactersCountField.innerText = chars.toLocaleString('en-US')
    paragraphsCountField.innerText = paragraphs.toLocaleString('en-US')
})