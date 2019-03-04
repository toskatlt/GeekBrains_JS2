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
	<header class="header">
		<div class="container header-flex">
			<div class="header-left">
				<div class="calcSum pink"></div>
			</div>
			<div class="header-right">
				<button class="button"><span class="my-account">Корзина<i class="fas fa-caret-down"></i></span></button>
			</div>
		</div>
	</header>
	<main>
		<div class="product container"></div>
	</main>
	<script src="js/main.js?ver=<?=$randval?>'"></script>
</body>
</html>