const lib = {
    "kaomoji": {
        "table flipping": [
            "(╯°□°）╯︵ ┻━┻",
            "┻━┻ミ＼(≧ﾛ≦＼)"
        ],
        "good morning": [
            "(*^｡^*)Rise (*^o^*)And ＼(*^0^*)／Shineｰ!!",
            "(_ _)(-.-)(~O~)*yawn*・・(~O~)(-.-)"
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
    $("body").append(`
            <div class="suggestions"></div>
        `)
    $(".suggestions").dialog()
    $("span.ui-dialog-title").text('Kaomoji Typer')
    const theChosenOnes = {}
    let lastWordCache = ""
    $('textarea').on('input selectionchange propertychange', function () {
        const allWords = $(this).val().split(/\s/)
        const lastWord = allWords.pop()
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

const kaomoji = lib.kaomoji
const nameMap = lib.nameMap
const nameArr = lib.nameArr

function getSuggestions (lastWord) {
    lastWord = lastWord.toLowerCase()
    if (kaomoji[lastWord]) return kaomoji[lastWord]
    if (nameMap[lastWord]) return kaomoji[nameMap[lastWord]]
    let matchingKaomojis = []
    _.forEach(nameArr, name => {
        if (name.includes(lastWord)) {
            matchingKaomojis = _.union(matchingKaomojis, kaomoji[nameMap[name]])
        }
    })

    return matchingKaomojis
}

function closeLastDropDown (fel) {
    $(".suggestions").html("")
}

function updateDropDown (el, allWords, lastWord) {
    const suggestedKaomojis = getSuggestions (lastWord)
    console.log("lastWord: ", lastWord)
    console.log("suggestedKaomojis: ", suggestedKaomojis)
    // _.forEach(suggestedKaomojis, kaomoji => {
    //     allWords += kaomoji
    // })
    // allWords += " "
    // $(el).val(allWords)
    let innerHtml = "<ol>"
    _.forEach(suggestedKaomojis, kaomoji => {
        innerHtml += "<li>" + kaomoji + "</li>"
    })
    innerHtml += "</ol>"
    $(".suggestions").html(innerHtml)
    console.log(`$(".suggestions").html(): ${$("suggestions").html()}`)
}

function openNewDropDown (el) {
    $(".suggestions").show()
}

function initHelper () {

}
