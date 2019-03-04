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