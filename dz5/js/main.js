const API = 'https://raw.githubusercontent.com/toskatlt/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: '/catalogData.json',
		products: [],
		imgCatalog: 'https://placehold.it/261x280',
		searchLine: '',
		cartItems: [],
	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					console.log(error);
				})
		},
		addProduct(product) {
			console.log(product.id);
		},
	},
	computed:{
		filterGoods() {
			return this.products.filter((product) => {
				return product.productName.toLowerCase().includes(this.searchLine.toLowerCase());
			})
		},
		total() {
			return 0
		}
	},
	mounted() {
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for(let el of data) {
					this.products.push(el);
				}

		});
	}
});