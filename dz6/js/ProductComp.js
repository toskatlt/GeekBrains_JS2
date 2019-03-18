Vue.component('products', {
	data () {
		return {
			products: [],
			filtered: [],
		}
	},
	methods: {
		filterGoods() {
			let regexp = new RegExp(this.userSearch, 'i');
			this.filtered = this.products.filterGoods(el => regexp.test(el.productName));
		}
	},
	mounted() {
		this.$parent.getJson(`${API}/catalogData.json`)
			.then(data => {
				for(let el of data) {
					this.products.push(el);
					this.filtered.push(el);
				}
		});
		this.$parent.getJson(`getProducts.json`)
			.then(data => {
				for(let el of data) {
					this.products.push(el);
					this.filtered.push(el);
				}
		})
	},
	template: `
	<div class="product container">
		<product class="item" v-for="item of filtered" :key="item.id" :product="item"></product>
	</div>
	`
});
Vue.component('product', {
	props: ['product'],
	template: `
	<div>
		<img class="item-img" :src="'img/product/img_' + product.id + '.jpg'" :alt="product.productName">
		<div class="item-text-block">
			<p class="item-name">{{ product.productName }}</p>
			<p class="item-price pink">{{ product.price }}$</p>
		</div>
		<div class="add_cart"><a href="#" class="add" @click="$parent.$refs.cart.addProduct(product)">Add to Cart</a></div>
	</div>
	`
})