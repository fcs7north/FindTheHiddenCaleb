<template>
	<div id="step-main">
		<section>
			<h1 class="text-h1">아무개님이 부릅니다!</h1>
			<p>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="accent"
					label="135번 OOOOOOOOOOOOO"
				/>
			</p>
			<p>
				<q-btn
					@click="g_sojJ()"
					size="36px"
					class="q-px-xl q-py-xs"
					color="primary"
					label="참가자 목록으로"
				/>
			</p>
		</section>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const age = ref(0)
const g_sojJ = () => {
	age.value++
	return false
}
</script>

<style lang="scss" scoped>
div#step-main {
	@include setPos($zIndex: 7);
	width: 100%;
	height: 100vh;
	font-family: $bhs-font;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		font-size: 6.5rem;
		letter-spacing: -0.5rem;
		color: #f9f9f9;
		text-align: center;
		@include dtxt-shadow($color: $warning, $effect: 5px);
	}
	p {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
	&::after {
		@include after-bg(/* $bg-src: 'src/assets/step-a.jpg', */);
	}
}
</style>