window["c5abf658-dbfb-4691-90bb-da26bfc1b7c7"] =  (kaomoji, nameMap, nameArr, lastWord) => {
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
