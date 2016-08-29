const lib = {
    "kaomoji": {
        "table flipping": [
            "(╯°□°）╯︵ ┻━┻",
            "┻━┻ミ＼(≧ﾛ≦＼)"
        ]
    },
    "nameMap": {
        // eslint-disable-line
    },
    "nameArr": [
        // eslint-disable-line
    ]
}
_.forEach(lib.kaomoji, (kaomoji, fullName) => {
    _.forEach(fullName.split(" "), partiallyName => {
        lib.nameMap[partiallyName] = fullName
        lib.nameArr.push(partiallyName)
    })
})

console.log("lib: ", JSON.stringify(lib))
//     (╯°□°）╯︵ ┻━┻

$(document).ready(() => {
    const theChosenOnes = {}
    let lastWordCache = ""
    console.log("start")
    $('textarea').on('input selectionchange propertychange', function () {
        const allWords = $(this).val().split(/\s/)
        const lastWord = allWords.pop()
        console.log("lastWord: ", lastWord)
        const lastWordLength = lastWord.length

        if (lastWordLength === 0) {
            closeLastDropDown(this, allWords)
        } else if (lastWordLength > 1) {
            updateDropDown(this, allWords, lastWord)
        } else {
            openNewDropDown(this, allWords)
        }
    })
})

function getSuggestions (word) {
    return lib.kaomoji["table flipping"]
}

function closeLastDropDown (fel) {

}

function updateDropDown (el, allWords, lastWord) {
    const suggestedKaomojis = getSuggestions (lastWord)
    _.forEach(suggestedKaomojis, kaomoji => {
        allWords += kaomoji
    })
    allWords += " "
    $(el).val(allWords)
}

function openNewDropDown (el) {
    const $inputArea = $(el)
    console.log("something")
}
