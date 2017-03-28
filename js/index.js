"use strict"

let suggestionsTurnOff = false

window.onload = () => {
	window.activeTab = 0
	window.totalTab = 0
	const container = initSuggestionPopup()
	document.onkeydown = e => {
		if ((e.key === "-" || e.key === "=" || e.key > 0) && window.totalTab) return false
	}
	document.onkeyup = e => {
		if (e.key === " " && e.shiftKey === true) suggestionsTurnOff = !suggestionsTurnOff
		else if (e.key === "=") {
			if (window.activeTab + 2 > window.totalTab) return
			window.activeTab++
			const suggestionPopupDOMNode = container.getElementsByClassName("kaomoji-typer--body")[0]
			return renderSuggestionPopupTab(suggestionPopupDOMNode, window.activeTab, window.activeTab-1)
		}
		else if (e.key === "-") {
			if (window.activeTab === 0) return
			window.activeTab--
			const suggestionPopupDOMNode = container.getElementsByClassName("kaomoji-typer--body")[0]
			return renderSuggestionPopupTab(suggestionPopupDOMNode, window.activeTab, window.activeTab+1)
		}
		else if (e.key > 0) {
			const selectKaomoji = window.suggestionsTabs[window.activeTab][e.key ]
			if (!selectKaomoji) return
			inputSelectedKaomoji(document.activeElement, selectKaomoji)
		}

		window.activeTab = 0
		window.totalTab = 0
		const node = document.activeElement
		const nodeName = node.nodeName
		const shouldSuggest = nodeName === "TEXTAREA" || ( nodeName === "INPUT" && node.type !== "password")
		const willSuggest = !suggestionsTurnOff && shouldSuggest

		if (!willSuggest) return
		return openNewDropDown(node, container)
	}
}
