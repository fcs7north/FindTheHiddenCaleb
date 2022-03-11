<template>
	<div>
		<div class="q-pa-md all-add-wrap">
			<section>
				<q-input
					v-model="playerList"
					filled
					type="textarea"
				/>

				<div class="btns-part">
					<q-btn
						@click="addPlayer()"
						size="1.5rem"
						class="q-px-xl q-py-xs"
						color="accent"
						label="확인"
						padding=".5rem 2rem"
						:disable="playerListLen <= 0"
						rounded
					/>
					<q-btn
						@click="canclePlayerAdd()"
						size="1.5rem"
						class="q-px-xl q-py-xs"
						color="primary"
						label="취소"
						padding=".5rem 2rem"
						rounded
					/>
				</div>

			</section>
		</div>
	</div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const _ = require('lodash')

// 현재 레이어 출력 제어
const playerAddShow = inject('playerAddShow')
const canclePlayerAdd = () => {
	playerAddShow.value = false
}

// 플레이어 목록 제어
const playerList = ref(null)
playerList.value = store.getters['dbs/g_players'].join(',')
const playerListLen = computed(() => _.size(playerList.value))
const addPlayer = () => {
	store.commit(
		'dbs/m_playersUpdate',
		_.uniq(
			_.map(playerList.value.split(','), _.trim)
			.filter(val => val !== '')
		),
		{ root: true }
	)
	playerAddShow.value = false
}
</script>

<style lang="scss" scoped>
.all-add-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	> section {
		width: 80%;
		height: 50vh;
		background-color: white;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid #ddd;
		box-shadow: .1rem .1rem .5rem rgb(138, 111, 4);
		overflow: hidden;
		> div.btns-part {
			display: flex;
			justify-content: center;
			gap: 1.5rem;
			padding: 2rem 0;
		}
	}
}
</style>