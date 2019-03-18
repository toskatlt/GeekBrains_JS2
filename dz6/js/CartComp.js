Vue.component('cart', {
	data () {
		return {
			showCart: false,
			cartItems: [],
		}
	},
	methods: {
		addProduct(product) {
			this.$parent.getJson(`${API}/addToBasket.json`)
			.then(data => {
				if(data.result === 1) {
					let find = this.cartItems.find(el => el.id === product.id);
					if (find) {
						find.quantity++;
					} else {
						let prod = Object.assign({quantity: 1}, product);
						this.cartItems.push(prod)
					}
				 } else {
					 alert('Error');
				 }
			})
		},
		remove (product) {
			this.$parent.getJson(`${API}/deleteFromBasket.json`)
			.then(data => {
				if (data.result === 1) {
					if (product.quantity > 1) {
						product.quantity--;
					} else {
						this.cartItems.splice(this.cartItems.indexOf(product), 1)
					}	
				}
			})
		}
	},
	mounted() {
		this.$parent.getJson(`${API}/getBasket.json`)
			.then(data => {
				for(let el of data.contents) {
					this.cartItems.push(el);
				}

		});
	},
	template: `
	<div class="cart">
		<button class="button" @click="showCart = !showCart"><span class="my-account">Корзина<i class="fas fa-caret-down"></i></span></button>
		<div class="drop__cart" v-show="showCart">
			<p class="cart-empty" v-if="!cartItems.length">Корзина пуста</p>
			<cart-item class="items" 
				v-for="cartItem of cartItems" 
				:key="cartItem.id" 
				:cart-item="cartItem"
				@remove="remove">
			</cart-item> 

			<div class="cart__total">
				<p>TOTAL</p>
				<p></p>
			</div>
			<a href="checkout.html" class="cart__button">Checkout</a>
			<a href="cart.html" class="cart__button">Go to cart</a>
		</div>
	</div>`
});

Vue.component('cart-item', {
	props: ['cartItem'],
	template: `
		<div class="cart__item">
			<img :src="'img/product/small/img_' + cartItem.id + '.jpg'" :alt="cartItem.productName" class="cart__item-img">
			<div class="cart__item-text">
				<p class="cart__item-text1">{{ cartItem.productName }}</p>
				<p class="cart__item-text3">{{ cartItem.quantity }} x {{ cartItem.price }}$</p>
			</div>
			<div><a href="#" class="cart__del" @click="$emit('remove', cartItem)"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div>
		</div>
		`
});