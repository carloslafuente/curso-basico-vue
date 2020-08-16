new Vue({
	el: '#app',
	data() {
		return {
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
			showPrices: true,
			color: 'f0f0f0',
			value: 0,
		};
	},
	computed: {
		title() {
			return `${this.name} - ${this.symbol}`;
		},
		convertedValue() {
			if (!this.value) {
				return 0;
			}
			return this.value / this.price;
		},
	},
	watch: {
		showPrices(newVal, oldVal) {
			console.log(newVal, oldVal);
		},
	},
	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices;

			this.color = this.color.split('').reverse().join('');
		},
	},
});
