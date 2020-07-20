/**
 * Selector
 */

var Selector = {
	find: function (selector) {
		let result = document.querySelectorAll(selector);
		return result;
	},
	findOne: function (selector) {
		let result = document.querySelector(selector);
		return result;
	},
	prop: function (elem, property) {
		let result = elem.getAttribute(property);
		return result;
	},
	setProp: function (elem, { prop, value }) {
		let result = elem.setAttribute(prop, value);
	}
}

/*
 * Collapse
 */

const COLLAPSE_SELECTOR = '[data-toggle="collapse"]';

var Collapse = function () {
	let list = Selector.find(COLLAPSE_SELECTOR);
	let size = list.length;
	
	for (let i = 0; i < size; i++) {
		_collapseToggle(list[i]);
	}
}

var _collapseToggle = function (elem) {
	let _targetSelector = Selector.prop(elem, 'data-target');
	let target = Selector.findOne(_targetSelector);
	let maxHeight = target.scrollHeight;
	
	elem.addEventListener('click', function (e) {
	let _state = Selector.prop(elem, 'data-state');
		e.preventDefault();
		if(_state === 'hidden') {
			target.classList.add('active');
			Selector.setProp(elem, { prop: 'data-state', value: 'shown' });
			target.classList.remove('nomg');
			target.style.setProperty('--collapse-maximum', maxHeight + 'px');
		} else {
			target.classList.remove('active');
			Selector.setProp(elem, { prop: 'data-state', value: 'hidden' });
			target.classList.add('nomg');
		}
		// add margin top 
		if(!Selector.prop(target, 'class').indexOf('mgt') > -1) {
			target.classList.add('mgt');
		}

	});
}













