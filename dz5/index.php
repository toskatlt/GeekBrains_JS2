<?php $randval = rand(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Интернет магазин</title>
	<link rel="stylesheet" href="css/style.css?ver=<?=$randval?>'">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>
<body>
	<div id="app">
		<header class="header">
			<div class="container header-flex">
				<div class="header-left">
					<input class="search" type="text" v-model="searchLine" placeholder="введите товар">
				</div>
				<div class="header-right">
					<div class="cart">
						<button class="button"><span class="my-account">Корзина<i class="fas fa-caret-down"></i></span></button>
						<div class="drop__cart">
							<div class="cart-empty" v-if="total == 0">Корзина пуста</div>
							<div class="items" v-else>
								<div class="item" v-for="cartItem of cartItems">
									<div class="cart__item">
										<img :src="'img/product/small/img_' + cartItem.id + '.jpg'" :alt="cartItem.productName" class="cart__item-img">
										<div class="cart__item-text">
											<p class="cart__item-text1">{{ cartItem.productName }}</p>
											<p class="cart__item-text3">{{ cartItem.quantity }} x ${{ cartItem.price }}</p>
										</div>
										<a href="#" class="cart__del"><i class="fa fa-times-circle" aria-hidden="true"></i></a>	
									</div>
								</div>
							</div>
							<div class="cart__total">
								<p>TOTAL</p>
								<p>${{total}}</p>
							</div>
							<a href="checkout.html" class="cart__button">Checkout</a>
							<a href="cart.html" class="cart__button">Go to cart</a>
							
						</div>					
					</div>
				</div>
			</div>
		</header>
		<main>
			<div class="product container">
				<div class="item" v-for="product of filterGoods" :key="product.id">
					<img class="item-img" :src="'img/product/img_' + product.id + '.jpg'" :alt="product.productName">
						<div class="item-text-block">
							<p class="item-name">{{ product.productName }}</p>
							<p class="item-price pink">${{ product.price }}</p>
						</div>
					<div class="add_cart"><a href="#" class="add" @click="addProduct(product)">Add to Cart</a></div>
				</div>
			</div>
			<div class="basket container"></div>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="js/main.js?ver=<?=$randval?>'"></script>	
</body>
</html>