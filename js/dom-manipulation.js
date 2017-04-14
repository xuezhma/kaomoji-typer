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

	const tips = [
		"scroll with '-' and '=' when there're 9+ results?",
		"toggle the app with 'shift' + 'space'?",
		"select a kaomoji by typing its index? "
	]
	const randomNumber = Math.floor(Math.random() * tips.length)
	const container = document.createElement("div")
	container.className = "kaomoji-typer-container"
	container.innerHTML = `
		<div class="kaomoji-typer kaomoji-typer--header">
			<span>Kaomoji Typer</span> <small>v1.0.0 beta</small>
		</div>
		<div class="kaomoji-typer kaomoji-typer--body">
		</div>
		<div class="kaomoji-typer kaomoji-typer--footer">
			<span>Do you know you can...<br /> ${tips[randomNumber]}</span>
		</div>
	`
	container.style.display = "none"
	document.body.appendChild(container)
	const containerBody = container.getElementsByClassName("kaomoji-typer--body")[0]

	container.addEventListener("mouseup", () => {
		window.DOMCache.focus()
	})

	containerBody.addEventListener("mouseup", () => {
		const clickErrorDOM = document.createElement("div")
		clickErrorDOM.className = "kaomoji-typer-click-error"
		clickErrorDOM.innerHTML = "(　･ω･)☞ <br /> Type the index instead of clicking"
		container.appendChild(clickErrorDOM)
		setTimeout(() => container.removeChild(clickErrorDOM), 4000)
	})

	const containerHeader = container.getElementsByClassName("kaomoji-typer--header")[0]

	containerHeader.addEventListener("mousedown", () => {
		window.dragging = true
	})

	containerHeader.addEventListener("mouseup", () => {
		window.dragging = false
		window.x = null
		window.y = null
	})

	window.addEventListener("mousemove", e => {
		if (!window.dragging) return
		const prevX = window.x
		const prevY = window.y
		if (prevX !== null) {
			const moveX = prevX - e.x
			const moveY = prevY - e.y
			container.style.left = +container.style.left.split("px")[0] - moveX + "px"
			container.style.bottom = +container.style.bottom.split("px")[0] + moveY + "px"
		}

		window.x = e.x
		window.y = e.y
	})

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
	if (tabDOMNodes[activeTabIndex]) tabDOMNodes[activeTabIndex].classList.remove("kaomoji-typer-listitem-group--hide")
	if (preTabIndex !== undefined) tabDOMNodes[preTabIndex].classList.add("kaomoji-typer-listitem-group--hide")
}

function inputSelectedKaomoji(node, selectedKaomoji) {
	const value = node.value.split(" ")
	value.pop()
	value.push(selectedKaomoji.value)
	node.value = value.join(" ") + " "
}
