"use strict"

function unionArrayOfObj(a, b) {
	const mem = {}
	const newArr = a
	for (const key in a) {
		mem[a[key]] = 1
	}
	for (const key in b) {
		if (!mem[key]) newArr.push(b[key])
	}
	return newArr
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
