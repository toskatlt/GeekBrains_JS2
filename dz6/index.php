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
					<form class="form" action="#" @submit.prevent="filterGoods">
						<input class="search" type="text" v-model="userSearch" placeholder="введите товар">
						<button type="submit" class="find">
							<i class="fas fa-search"></i>
						</button>
					</form>
				</div>
				<div class="header-right">
					<cart ref="cart"></cart>
				</div>
			</div>
		</header>
		<main>
			<products ref="products"></products>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script src="js/CartComp.js?ver=<?=$randval?>'"></script>
	<script src="js/ProductComp.js?ver=<?=$randval?>'"></script>
	<script src="js/main.js?ver=<?=$randval?>'"></script>	
</body>
</html>