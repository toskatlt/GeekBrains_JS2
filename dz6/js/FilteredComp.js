Vue.component('filtered', {
   data () {
	   return {
		   userSearch: '',
	   }
    },
	template: `
		<form class="form" action="#" @submit.prevent="$parent.$refs.products.filterGoods(userSearch)">
			<input class="search" type="text" v-model="userSearch" placeholder="введите товар">
			<button type="submit" class="find">
				<i class="fas fa-search"></i>
			</button>
		</form>
        `
});
