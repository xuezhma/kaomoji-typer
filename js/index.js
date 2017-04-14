"use strict"

let suggestionsTurnOff = false

window.onload = () => {
	window.activeTab = 0
	window.totalTab = 0
	const container = initSuggestionPopup()
	document.onkeydown = e => {
		if ((e.key === "-" || e.key === "=" || e.key > 0) && window.totalTab) return false
		if (e.key === " " && e.shiftKey) {
			suggestionsTurnOff = !suggestionsTurnOff
			forceUpdate(container)
			return false
		}
	}
	document.onkeyup = e => {
		if (e.key === " " && e.shiftKey === true) return
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
			const selectKaomoji = window.suggestionsTabs[window.activeTab] && window.suggestionsTabs[window.activeTab][e.key ]
			if (selectKaomoji) inputSelectedKaomoji(document.activeElement, selectKaomoji)
		}

		forceUpdate(container)
	}
}

function forceUpdate(container = document.getElementsByClassName("kaomoji-typer-container")[0]) {
	setTimeout(() => {
		window.activeTab = 0
		window.totalTab = 0
		window.suggestionsTabs = []
		const node = document.activeElement
		node.addEventListener("focus", focusListener)
		const nodeName = node.nodeName
		const shouldSuggest = nodeName === "TEXTAREA" || ( nodeName === "INPUT" && node.type !== "password")
		if (shouldSuggest) window.DOMCache = node
		if (suggestionsTurnOff) container.style.display = "none"
		const willSuggest = !suggestionsTurnOff && shouldSuggest
		node.addEventListener("blur", blurListener)
		if (!willSuggest) return
		return openNewDropDown(node, container)
	}, 1)
}

function focusListener() {
	forceUpdate()
}

function blurListener(e) {
	forceUpdate()
}
