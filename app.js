Vue.component('CoinDetail', {
	props: ['coin'],
	data() {
		return {
			showPrices: false,
			value: 0,
		};
	},
	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices;
			this.$emit('change-color', this.showPrices ? 'FF80CC' : '393939');
		},
	},
	computed: {
		title() {
			return `${this.coin.name} ${this.coin.symbol}`;
		},
		convertedValue() {
			if (!this.value) {
				return 0;
			}
			return this.value / this.coin.price;
		},
	},
	template: `
		<div>
			<h1 v-bind:class="coin.changePercent ? 'green' : 'red'">{{ title }}</h1>

			<img
				v-on:mouseover="toggleShowPrices"
				v-on:mouseout="toggleShowPrices"
				v-bind:src="coin.img"
				v-bind:alt="coin.name"
			/>

			<span v-if="coin.changePercent > 0">👍</span>

			<span v-else-if="coin.changePercent < 0">👎</span>

			<span v-else>🤞</span>

			<span v-on:click="toggleShowPrices"
				>{{showPrices ? 'Ocultar Precios' : 'Ver Precios'}}
			</span>

			<input type="number" v-model="value" />

			<span>{{ convertedValue }}</span>

			<slot name="text"></slot>
			<slot name="link"></slot>

			<ul v-show="showPrices">
				<li
					class="uppercase"
					v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
					v-for="(p, i) in coin.pricesWithDate"
					v-bind:key="p.day"
				>
					{{ i + 1 }} - {{ p.day }} - {{ p.value }}
				</li>
			</ul>
		</div>
	`,
});

new Vue({
	el: '#app',
	data() {
		return {
			btc: {
				name: 'Bitcoin',
				symbol: 'BTC',
				img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
				changePercent: 5,
				price: 1234,
				pricesWithDate: [
					{ day: 'lunes', value: 1234 },
					{ day: 'martes', value: 65412 },
					{ day: 'miercoles', value: 231854 },
					{ day: 'jueves', value: 523 },
					{ day: 'viernes', value: 123 },
				],
			},
			color: 'f3f3f3',
		};
	},
	computed: {},
	watch: {},
	methods: {
		updateColor(color) {
			this.color = color || this.color.split('').reverse().join('');
		},
	},
});
