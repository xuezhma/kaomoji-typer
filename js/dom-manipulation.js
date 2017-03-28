"use strict"

function openNewDropDown(node, container) {

	const lastWord = node.value.split(" ").pop()
	container.style.display = lastWord.length > 1 ? "" : "none"
	if (container.style.display === "none") return
	const suggestions = getSuggestions(kaomoji, nameMap, nameArr, lastWord)
	const totalSuggestions = suggestions.length
	const suggestionsTabs = []
	suggestions.forEach((element, index) => {
		const tabIndex = Math.floor(index / 9)
		const indexInsideTab =  index % 9 + 1
		if (indexInsideTab === 1) suggestionsTabs.push([])
		suggestionsTabs[tabIndex][indexInsideTab] = {
			index: indexInsideTab,
			value: element
		}
	})
	const suggestionPopupDOMNode = container.getElementsByClassName("kaomoji-typer--body")[0]
	window.totalTab = suggestionsTabs.length
	window.suggestionsTabs = suggestionsTabs
	return renderSuggestionPopup(suggestionsTabs , suggestionPopupDOMNode)
}

function initSuggestionPopup() {

	const container = document.createElement("div")
	container.className = "kaomoji-typer-container"
	container.innerHTML = `
		<div class="kaomoji-typer kaomoji-typer--header">
			<span>Kaomoji Typer</span> <small>v0.2.0</small>
		</div>
		<div class="kaomoji-typer kaomoji-typer--body">
		</div>
		<div class="kaomoji-typer kaomoji-typer--footer">
			<span>Report an Issue</span>
		</div>
	`
	container.style.display = "none"
	document.body.appendChild(container)
	return container
}

function renderSuggestionPopup(suggestionsTabs , suggestionPopupDOMNode) {
	const suggestionPopupDOMNodeInnerHTML = suggestionsTabs.reduce(allTabToDOMString,"")
	suggestionPopupDOMNode.innerHTML = suggestionPopupDOMNodeInnerHTML
	renderSuggestionPopupTab(suggestionPopupDOMNode, 0)
}

function singleTabToDOMString(a, b) {
	return`${a}\n<div class="kaomoji-typer-listitem"><span>${b.index}. ${b.value}</span></div>`
}

function allTabToDOMString(tabA, tabB) {
	return `${tabA}\n<div class="kaomoji-typer-listitem-group kaomoji-typer-listitem-group--hide">${tabB.reduce(singleTabToDOMString, "")}\n</div>`
}

function renderSuggestionPopupTab(suggestionPopupDOMNode, activeTabIndex, preTabIndex) {
	const tabDOMNodes = suggestionPopupDOMNode.getElementsByClassName("kaomoji-typer-listitem-group")
	tabDOMNodes[activeTabIndex].classList.remove("kaomoji-typer-listitem-group--hide")
	if (preTabIndex !== undefined) tabDOMNodes[preTabIndex].classList.add("kaomoji-typer-listitem-group--hide")
}

function inputSelectedKaomoji(node, selectedKaomoji) {
	const value = node.value.split(" ")
	value.pop()
	value.push(selectedKaomoji.value)
	node.value = value.join(" ") + " "
}
