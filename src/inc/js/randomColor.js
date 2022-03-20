const _ = require('lodash')

const colorArr = [
	// { bgColor: '#0A2E52', txtColor: '#fff' }, // primary
	{ bgColor: '#5B9AD9', txtColor: '#fff' }, // accent
	{ bgColor: '#1976D2', txtColor: '#fff' }, // dark
	// { bgColor: '#223A52', txtColor: '#fff' }, // positive
	{ bgColor: '#13599E', txtColor: '#fff' }, // negative
	// { bgColor: '#31CCEC', txtColor: '#fff' }, // info
	// { bgColor: '#F2C037', txtColor: '#fff' }, // warning
	// { bgColor: '#FA5201', txtColor: '#fff' }, // warning
]

export default {
	randomColor: () => colorArr[_.random(0, _.size(colorArr) - 1)]
}