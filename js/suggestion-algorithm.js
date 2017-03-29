"use strict"

function getSuggestions (kaomoji, nameMap, nameArr, lastWord) {
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
