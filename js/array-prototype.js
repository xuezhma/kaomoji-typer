"use strict"

Array.prototype.forEach = function(a) {
	for (let i = 0; i < this.length; i++) a(this[i], i, this)
}

Array.prototype.map = function(a) {
	const array = new Array(this.length)
	for (let i = 0; i < this.length; i++) array[i] = a(this[i], i, this)
	return array
}
