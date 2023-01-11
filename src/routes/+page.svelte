<script>
	import { onMount } from 'svelte';
	import AddForm from '../components/AddForm.svelte';
	import ShoppingList from '../components/ShoppingList.svelte';

	let shopping_list = [];

	onMount(() => {
		if (typeof localStorage !== undefined)
			shopping_list = JSON.parse(localStorage.getItem('shopping_list')) || [];
	});

	function addItem(e) {
		const new_item = e.detail;
		shopping_list = [...shopping_list, new_item];
		localStorage.setItem('shopping_list', JSON.stringify(shopping_list));
	}

	function removeCompleted(e) {
		const del_index = e.detail;
		shopping_list.splice(del_index, 1);
		shopping_list = shopping_list;
		localStorage.setItem('shopping_list', JSON.stringify(shopping_list));
	}
</script>

<title>Shopping List 🛒</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<body>
	<ShoppingList {shopping_list} on:deleteitem={(e) => removeCompleted(e)} />
	<AddForm on:additem={(e) => addItem(e)} />
</body>

<style>
	:global(label, input[type="text"], input[type="number"], input[type="submit"]) {
		font-size: 1vw;
	}
	
	body {
		font-size: 1vw;
		background-color: antiquewhite;
		font-family: 'Courier New', sans-serif;
	}
</style>
