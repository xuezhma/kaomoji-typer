const lib = {
    "kaomoji": {
        "sparkles": [
            "✧･ﾟ: *✧･ﾟ:* 　　 *:･ﾟ✧*:･ﾟ✧",
            "*＊✿❀　❀✿＊*"
        ],
        "bears": [
            "ʕ •ᴥ•ʔ",
            "ᶘಠᴥಠᶅ"
        ],
        "cats": [
            "ฅ(＾・ω・＾ฅ)",
            `චᆽච`
        ],
        "dogs": [
            "▼・ᴥ・▼",
            "U・ᴥ・U"
        ],
        "jailed": [
            "||Φ|(|ﾟ|∀|ﾟ|)|Φ||",
            "━━━━||Φ|(|´|Д|`|)|Φ||━━━━"
        ],
        "flower girl": [
            "(　◕‿◕✿)",
            "(◕▽◕✿)"
        ],
        "blushing _flower _girl": [
            "(˶◕‿◕˶✿)",
            "(⁄ ⁄◕⁄ω⁄◕⁄ ⁄✿)"
        ],
        "sad __flower __girl": [
            "(◕‸ ◕✿) *pout*",
            "(◕︿◕✿)"
        ],
        "table flipping throwing": [
            "(╯°□°）╯︵ ┻━┻",
            "┻━┻ミ＼(≧ﾛ≦＼)"
        ],
        "_bears __table _flipping __throwing": [
            "ʕノ•ᴥ•ʔノ ︵ ┻━┻",
            " ┳┳ヾ(T(エ)Tヽ)"
        ],
        "setting the _table": [
            "┬──┬ ノ( ゜-゜ノ)",
            "(ヘ･_･)ヘ┳━┳"
        ],
        "good morning": [
            "(*^｡^*)Rise (*^o^*)And ＼(*^0^*)／Shineｰ!!",
            "(_ _)(-.-)(~O~)*yawn*・・(~O~)(-.-)"
        ],
        "kissing kisses": [
            "( ˘ ³˘)♥",
            "(ɔˆ ³(ˆ⌣ˆc)"
        ],
        "_throwing _kisssing  _kisses": [
            "★⌒ヽ(●’､＾●)Kiss!",
            "(^з^)-☆Chu!!"
        ],
        "hugs hugging": [
            "(つ・▽・)つ⊂(・▽・⊂)",
            "(つ≧▽≦)つ⊂(・ヮ・⊂)"
        ],
        "mad": [
            "┗(｀Дﾟ┗(｀ﾟДﾟ´)┛ﾟД´)┛",
            "!!!!|┛*｀Д´|┛・・~~┻━┻　┳━┳"
        ],
        "pigs": [
            "(´・(oo)・｀)",
            "(V´・(oo)・｀V)"
        ],
        "deep crying face": [
            "ಥ_ಥ",
            "ಥ╭╮ಥ"
        ],
        "denko shoboon": [
            "(´・ω・｀)",
            "Σ(´・ω・｀)"
        ],
        "raise your dongers": [
            "ヽ༼ຈل͜ຈ༽ﾉ",
            "✺◟༼ຈ ل͜ ຈ༽◞✺"
        ],
        "strolling happy gary": [
            "ᕕ( ᐛ )ᕗ",
            "ᐠ( ᐛ )ᐟ"
        ],
        "it’s here / kitaaa": [
            "ｷﾀ━(ﾟ∀ﾟ)━!",
            "ｷﾀ━━━(Дﾟ(○=(ﾟ∀ﾟ)=○)Дﾟ)━━━!!"
        ],
        "laughing": [
            "(´∀｀)",
            "ヽ（´∀｀）ノ"
        ],
        "lenny face": [
            "( ͡° ͜ʖ ͡°)",
            "ᕦ( ͡° ͜ʖ ͡°)ᕤ"
        ]
    },
    "nameMap": {
        // eslint-disable-line
    },
    "nameArr": [
        // eslint-disable-line
    ]
}

//     (╯°□°）╯ logics*:

_.forEach(lib.kaomoji, (kaomoji, fullName) => {
    _.forEach(fullName.split(" "), partiallyName => {
        lib.nameMap[partiallyName] = fullName
        lib.nameArr.push(partiallyName)
    })
})

const kaomoji = lib.kaomoji
const nameMap = lib.nameMap
const nameArr = lib.nameArr

$(document).ready(() => {
    initHelper('Kaomoji Typer')
    $('textarea, input').on('input selectionchange propertychange', function (e) {
        const allWords = $(this).val().split(/\s/)
        const lastWord = allWords.pop()
        const lastWordLength = lastWord.length
        if (lastWordLength === 0) {
            $(".suggestions").html("")
        } else if (lastWordLength > 1) {
            const lastChar = lastWord.charAt(lastWordLength - 1)
            if (lastChar > 0 && lastChar <= suggestedKaomojis.length) {
                $(this).val(`${allWords} ${suggestedKaomojis[lastChar - 1]} `)
                $(".suggestions").html("")
            } else {
                updateDropDown(this, allWords, lastWord)
            }
        } else {
            openNewDropDown(this, allWords)
            updateDropDown(this, allWords, lastWord) // get suggestions when only one char is typed or not?
        }
    })
    const originalTop = $('.ui-dialog').offset().top
    $(window).scroll(function () {
        console.log("wow!!", $(this).scrollTop())
        $('.ui-dialog').css('top', originalTop + $(this).scrollTop())
    })
})

let suggestedKaomojis = []

function getSuggestions (lastWord) {
    lastWord = lastWord.toLowerCase()
    let matchingKaomojis = []
    if (kaomoji[lastWord]) matchingKaomojis = _.union(matchingKaomojis, kaomoji[lastWord])
    if (nameMap[lastWord]) matchingKaomojis = _.union(matchingKaomojis, kaomoji[nameMap[lastWord]])
    _.forEach(nameArr, name => {
        if (name.includes(lastWord)) {
            matchingKaomojis = _.union(matchingKaomojis, kaomoji[nameMap[name]])
        }
    })

    return matchingKaomojis
}

function updateDropDown (el, allWords, lastWord) {
    suggestedKaomojis = getSuggestions (lastWord)
    let innerHtml = "<ol>"
    _.forEach(suggestedKaomojis, (kaomoji, index) => {
        if (index < 9) innerHtml += "<li>" + kaomoji + "</li>"
    })
    innerHtml += "</ol>"
    $(".suggestions").html(innerHtml)
}

function openNewDropDown (el) {
    $(".suggestions").show()
}

function initHelper (title) {
    $("body").append(`
            <div class="suggestions"></div>
        `)
    $(".suggestions").dialog()
    $("span.ui-dialog-title").text(title)
}
