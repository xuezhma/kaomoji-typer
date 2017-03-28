const kaomojiCollection = window["8aad06a6-a176-4807-a898-a9f56fa10298"]
const kaomoji = kaomojiCollection.kaomoji
const nameMap = kaomojiCollection.nameMap
const nameArr = kaomojiCollection.nameArr
const getSuggestions = window["c5abf658-dbfb-4691-90bb-da26bfc1b7c7"]

let suggestionsTurnOff = false

$(document).ready(() => {
    const inputPopup = initHelper('Kaomoji Typer')
    inputPopup.hide()
    $('.ui-button-icon.ui-icon.ui-icon-closethick').on('click', () => {
        $(".suggestions").html("")
        inputPopup.remove()
        suggestionsTurnOff = true
    })

    let listenedDomCache

    (function checkNewDom () {
        const currentDom = $('textarea, input')
        const newDom = _.difference(currentDom, listenedDomCache, suggestionsTurnOff)
        if (newDom && newDom.length > 0) addListenEvent(inputPopup, newDom)
        listenedDomCache = currentDom
        setTimeout(checkNewDom, 3000)
    })()

    const originalTop = $('.ui-dialog').offset().top
    $(window).scroll(function () {
        $('.ui-dialog').css('top', originalTop + $(this).scrollTop())
    })
})

let suggestedKaomojis = []

function addListenEvent (inputPopup, newDom) {
    $(newDom).on('input selectionchange propertychange', function (e) {
        if (this.type === "password") return inputPopup.hide()
        inputPopup.show()
        const allWords = $(this).val().split(/\s/)
        const lastWord = allWords.pop()
        const lastWordLength = lastWord.length
        if (suggestionsTurnOff) {
        } else if (lastWordLength === 0) {
            inputPopup.hide()
            $(".suggestions").html("")
        } else if (lastWordLength > 1) {
            const lastChar = lastWord.charAt(lastWordLength - 1)
            if (lastChar > 0 && lastChar <= suggestedKaomojis.length) {
                $(this).val(`${allWords.join(" ")} ${suggestedKaomojis[lastChar - 1]} `)
                inputPopup.hide()
                $(".suggestions").html("")
            } else {
                updateDropDown(this, allWords, lastWord)
            }
        } else {
            openNewDropDown(this, allWords)
            inputPopup.show()
            updateDropDown(this, allWords, lastWord) // get suggestions when only one char is typed or not?
        }
    })
}

function updateDropDown (el, allWords, lastWord) {
    suggestedKaomojis = getSuggestions (kaomoji, nameMap, nameArr, lastWord)
    let innerHtml = "<div><p class='tip'>No need to click. Just type 1-9</p>"
    _.forEach(suggestedKaomojis, (kaomoji, index) => {
        if (index < 9) innerHtml += "<span>" + (index + 1) + ". " + kaomoji + "</span><br />"
    })
    innerHtml += "</div>"

    $(".suggestions").html(innerHtml)
    $('.tip').hide()
    $('.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable').hover(() => {
        $('.tip').show()
        $('.tip').stop()
        $('.tip').fadeIn(1)
    }, () => {
        setTimeout(() => {
            $('.tip').fadeOut(1500)
        }, 500)
    })
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

    return $('.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable')
}
