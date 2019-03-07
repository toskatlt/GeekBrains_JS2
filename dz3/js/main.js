const API = 'https://raw.githubusercontent.com/toskatlt/online-store-api/master/responses';

let qetRequest = (url, cb) => {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			if (xhr.status !== 200) {
				console.log('Error');
			} else {
				cb(xhr.responseText);
			}
		}
	};
	xhr.send();
};

/*
let qetRequestPromise = (url) => { //promise
	return new Promise(function(resolve, reject) {	
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onload = function() {
		  if (this.status == 200) {
			resolve(this.response);
		  } else {
			let error = new Error(this.statusText);
			error.code = this.status;
			reject(error);
		  }
		};
		xhr.onerror = function() {
		  reject(new Error("Error"));
		};
		xhr.send();
	});
};
*/

class ProductsList {
	constructor(container = '.product') {
		this.container = container;
		this.goods = [];
		this.allProducts = [];
		this._getProducts()
			.then (data => {
				this.goods = [...data];
				this.render()
			})
	}
	_getProducts() {
		return fetch(`${API}/catalogData.json`)
			.then (result => result.json())
			.catch (error => {
				console.log(error);
			})
	}
	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const ProductOdj = new ProductItem(product);
			this.allProducts.push(ProductOdj);
			block.insertAdjacentHTML('beforeend', ProductOdj.render());
		}
	}
}

class ProductItem {
	constructor(product) {
		this.productName = product.productName;
		this.price = product.price;
		this.id = product.id;
	}
	render() {
		return `<div class="item" data-id="${this.id}">
					<img class="item-img" src="img/product/img_${this.id}.jpg" alt="${this.productName}">
					<div class="item-text-block">
						<p class="item-name">${this.productName}</p>
						<p class="item-price pink">$${this.price}</p>
					</div>
				<div class="add_cart"><a href="#" class="add">Add to Cart</a></div>
			</div>`
	}
}

class Cart {
	constructor(container = '.basket') {
		this.container = container;
		this.cart = [];
		this.allProductsCart = [];
		this._fetchCart()
			.then (data => {
				console.log(data);
                this.amount = data.amount;
				this.cart = [...data.contents];
                this.countGoods = data.countGoods;
                this.render()
            })
	}
	_fetchCart() {
		return fetch(`${API}/getBasket.json`)
			.then (result => result.json())
			.catch (error => {
				console.log(error);
			})
	}
	render() {
		const cartBlock = document.querySelector(this.container);
		for (let cartProduct of this.cart) {
			const ProductOdj = new CartItem(cartProduct);
			this.allProductsCart.push(ProductOdj);
			cartBlock.insertAdjacentHTML('beforeend', ProductOdj.render());
		}
	}
}

class CartItem {
	constructor(product) {
		this.productName = product.productName;
		this.price = product.price;
		this.id = product.id;
		this.quantity = product.quantity;
		this.sum = product.quantity * product.price;
	}
	render() {
		return `<div class="container" data-id="${this.id}">
					<span class="productName">${this.productName}</span>
					<span class="price pink">${this.price}</span>$ x
					<span class="quantity">${this.quantity}</span>
					 [ сумма <span class="sum">${this.sum}</span>$ ]	
					<button>x</button>
				</div>`
	}
}


let list = new ProductsList();
let cart = new Cart();