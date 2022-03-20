<template>
	<li
		@click="buttonSound(fnVal, { normal: require('src/assets/pzz_open.mp3'), find: require('src/assets/find_caleb.mp3') })"
		:style="{ backgroundColor: randColor.bgColor, color: randColor.txtColor }"
	>
		<strong>{{ fnVal }}</strong>
		<IconLayer v-if="fnB(fnVal) && pzVal !== fnVal" />
	</li>
</template>

<script>
import IconLayer from 'src/stepC/IconLayer.vue'
import rdObj from 'src/inc/js/randomColor.js'

export default {
	components: { IconLayer },
	setup() {
		const randColor = rdObj.randomColor()
		return {
			randColor
		}
	},
	props: {
		fnA: { type: Function, default: () => console.log('Empty Function!') },
		fnB: { type: Function, default: () => console.log('Empty Function!') },
		fnVal: { type: Number, default: -1 },
		pzVal: { type: Number, default: -1 },
	},
	data() {
		return {
			dbl_sheild: false,
		}
	},
	methods: {
		buttonSound (val, opt) {
			let audio = null
			// console.log(`${val} : ${this.pzVal}`)
			if (val === this.pzVal) { // 주니를 찾은 경우
				audio = new Audio(opt.find)
			} else { // 기본
				audio = new Audio(opt.normal)
			}
			audio.play()
			this.fnA(val)
		}
	}
}
</script>

<style lang="scss" scoped>
li {
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	gap: .5rem;
	padding: .5rem 1rem 1rem !important;
	background-color: $light-blue-8;
	border-radius: .5rem;
	box-shadow: .1rem .1rem .3rem rgb(0, 0, 0, .8);
	color: #fff;
	font-size: 4.5rem !important;
	font-family: 'Acme', sans-serif !important;
	cursor: pointer;
	overflow: hidden;
	&:hover {
		background-color: #D1E8FF !important;
		color: #0529A6 !important;
	}
	> div {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
	}
}
</style>