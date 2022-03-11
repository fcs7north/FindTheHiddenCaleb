<template>
	<div id="step-main" ref="stepMain" v-show="mounted_chkr">
		<section>
			<h1 class="text-h1">현재 술래</h1>
			<div class="j-cover">
				<q-scroll-area class="j-cover-scroll">
					<ul v-if="taggerSize > 0">
						<li v-for="tgg, i in taggers" :key="i">
							<strong>{{ tgg }}</strong>
						</li>
					</ul>
					<ul v-else>
						<li class="not-tagger"><strong>현재 술래가 없습니다</strong></li>
					</ul>
				</q-scroll-area>
			</div>

			<p>
				<q-btn
					@click="nextGame('A')"
					size="1.5rem"
					class="q-px-xl q-py-xs"
					color="positive"
					label="홈으로"
					padding=".5rem 2rem"
					rounded
				/>
				<q-btn
					@click="nextGame('B')"
					size="1.5rem"
					class="q-px-xl q-py-xs"
					color="primary"
					label="참가자 목록"
					padding=".5rem 2rem"
					rounded
				/>
				<q-btn
					v-if="taggerSize > 0"
					@click="resetGame()"
					size="1.5rem"
					class="q-px-xl q-py-xs"
					color="negative"
					label="술래모두탈출!"
					padding=".5rem 2rem"
					rounded
				/>
				<q-btn
					@click="nextGame('C')"
					size="1.5rem"
					class="q-px-xl q-py-xs"
					color="accent"
					label="게임으로"
					padding=".5rem 2rem"
					rounded
				/>
			</p>
		</section>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import pObj from 'src/inc/js/onLoadEvt.js'

const store = useStore()
const taggers = computed(() => store.getters['dbs/g_taggers'])
const taggerSize = computed(() => _.size(store.getters['dbs/g_taggers']))
const resetGame = () => store.commit('dbs/resetGame', null, { root: true })

// 처음 로드되는 화면 제어
const stepMain = ref(null)
const mounted_chkr = ref(false)
onMounted(() => pObj.playInStepB(stepMain.value, mounted_chkr))
const nextGame = (stage) => pObj.playOut(stepMain.value, store, stage)
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 4);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 7rem;
		letter-spacing: -1rem;
		color: #f9f9f9;
		@include dtxt-shadow($color: $warning, $effect: 5px);
	}
	p {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	&::after {
		@include after-bg($bg-src: 'src/assets/fd-6.jpg',);
	}
	> section {
		width: 80%;
		@include font-nago;
		> h1 {
			font-size: 4.5rem;
			font-weight: 800;
			letter-spacing: -0.3rem;
			text-align: center;
			line-height: 100%;
			// margin: 0 0 2rem;
		}
		> .j-cover {
			width: 100%;
			height: 40vh;
			.j-cover-scroll {
				width: 100%;
				height: 100%;
			}
			ul {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1.5rem;
				list-style: none;
				padding: 0 0 2rem;
				margin: 0;
				li {
					display: flex;
					justify-content: space-around;
					align-items: center;
					align-content: center;
					gap: .5rem;
					padding: .5rem 1rem;
					background-color: $indigo-10;
					border-radius: .5rem;
					box-shadow: .1rem .1rem .3rem rgb(0, 0, 0, .8);
					color: #fff;
					font-weight: 800;
					font-size: 2.5rem;
					cursor: pointer;

					&.not-tagger {
						cursor: initial;
						background-color: $deep-purple-6;
					}
				}
			}
			&+div {
				display: flex;
				justify-content: center;
				gap: 1rem;
				padding: 1rem 0;
				> button {
					font-weight: 700;
				}
			}
		}
	}
}
</style>