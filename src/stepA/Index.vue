<template>
	<div id="step-main" ref="stepMain">
		<section>
			<h1>
				<strong>FIND</strong>
				<br>
				<span>THE HIDDEN</span>
				<br>
				<strong>CALEB</strong>
			</h1>
			<p>
				<q-btn
					@click="nextGame()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="negative"
					padding=".5rem 3rem 0"
					label="게임시작"
				/>
			</p>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import pObj from 'src/inc/js/onLoadEvt.js'

const store = useStore()
const stepMain = ref(null)
onMounted(() => pObj.playIn(stepMain.value))
const nextGame = () => pObj.playOut(stepMain.value, store, 'B')
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 100);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		> * {
			display: block;
			line-height: .3;
		}
		strong {
			font-size: 10rem;
		}
		span {
			font-size: 2.5rem;
			margin-top: -3.3rem;
		}
		strong:last-of-type {
			margin-top: -1.3rem;
			font-size: 12rem;
			letter-spacing: 0rem;
		}
		color: #f9f9f9;
		text-align: center;
		@include dtxt-shadow($color: $warning, $effect: 5px);
	}
	p {
		text-align: center;
	}
	&::after {
		@include after-bg($bg-src: 'src/assets/fd-2.jpg');
	}
}
</style>