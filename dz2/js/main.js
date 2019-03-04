class ProductsList {
	constructor(container = '.product') {
		this.container = container;
		this.goods = [];
		this.allProducts = [];
		this._fetchProducts();
	}
	_fetchProducts() {
		this.goods = [
			{ id:'1', productName:'Mango футболка', price:52 },
			{ id:'2', productName:'D&G блузка', price:48 },
			{ id:'3', productName:'Mango куртка', price:49 },
			{ id:'4', productName:'Mango платье', price:34 },
			{ id:'5', productName:'ТВОЕ штаны', price:24 },
			{ id:'6', productName:'ADIDAS костюм', price:20 },
			{ id:'7', productName:'Reebok штаны', price:33 },
			{ id:'8', productName:'ZARA толстовка', price:12 },
		];
	}
	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const ProductOdj = new ProductItem(product);
			this.allProducts.push(ProductOdj);
			block.insertAdjacentHTML('beforeend', ProductOdj.render());
		}
	}
	calcSum() {
			const div = document.querySelector('.calcSum');
			let sum = 0;
			for (let product of this.goods) {
				sum = sum + product.price;
				console.log(sum);
			}
			div.textContent = 'Сумма товара: $' + sum;
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


let list = new ProductsList();
list.render();
list.calcSum();






/*
const products = [
	{ id:'1', productName:'Mango футболка', price:52 },
	{ id:'2', productName:'D&G блузка', price:48 },
	{ id:'3', productName:'Mango куртка', price:49 },
	{ id:'4', productName:'Mango платье', price:34 },
	{ id:'5', productName:'ТВОЕ штаны'}, // price по умолчанию
	{ id:'6', productName:'ADIDAS костюм', price:20 },
	{ id:'7', productName:'Reebok штаны', price:33 },
	{ id:'8', productName:'ZARA толстовка', price:12 },
];

const renderProduct = (id, productName, price = 10) => {
	return `<div class="item">
				<img class="item-img" src="img/product/img_${id}.jpg" alt="${productName}">
				<div class="item-text-block">
					<p class="item-name">${productName}</p>
					<p class="item-price pink">$${price}</p>
				</div>
				<div class="add_cart"><a href="#" class="add">Add to Cart</a></div>
			</div>`
};

const renderPage = list => {
	const productsList = list.map(item => renderProduct(item.id, item.productName, item.price)).join('');
	
	// .join(''); убирает вывод запятых из созданного массива методом map() 
	
	document.querySelector('.product').innerHTML = productsList;
};

renderPage(products);
*/