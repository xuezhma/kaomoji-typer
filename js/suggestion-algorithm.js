"use strict"

function unionArrayOfObj(a, b) {
	return a.concat(b.filter(function (item) {
	    return a.indexOf(item) < 0
	}))
}

function getSuggestions (kaomoji, nameMap, nameArr, lastWord) {
    lastWord = lastWord.toLowerCase()
    let matchingKaomojis = []
    if (kaomoji[lastWord]) matchingKaomojis = unionArrayOfObj(matchingKaomojis, kaomoji[lastWord])
    if (nameMap[lastWord]) matchingKaomojis = unionArrayOfObj(matchingKaomojis, kaomoji[nameMap[lastWord]])
	nameArr.forEach(name => {
        if (name.includes(lastWord)) {
            matchingKaomojis = unionArrayOfObj(matchingKaomojis, kaomoji[nameMap[name]])
        }
    })

    return matchingKaomojis
}
