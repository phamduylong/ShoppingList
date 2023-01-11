<script>
	import { onMount } from 'svelte';
	import AddForm from '../components/AddForm.svelte';
	import ShoppingList from '../components/ShoppingList.svelte';

	let shopping_list = [];

	onMount(() => {
		if (typeof localStorage !== undefined) shopping_list = JSON.parse(localStorage.getItem("shopping_list")) || [];
	})

	function addItem(e) {
		const new_item = e.detail;
		shopping_list = [...shopping_list, new_item];
		localStorage.setItem("shopping_list", JSON.stringify(shopping_list));
	}

	function removeCompleted(e) {
		const del_index = e.detail
		shopping_list.splice(del_index, 1);
		shopping_list = shopping_list;
		localStorage.setItem("shopping_list", JSON.stringify(shopping_list));
	}
</script>

<title>Shopping List 🛒</title>

<div id="wrapper">
	<ShoppingList {shopping_list} on:deleteitem={(e) => removeCompleted(e)}/>
	<AddForm on:additem={(e) => addItem(e)} />
</div>
<style>
	#wrapper {
		font-family: "Courier New", sans-serif;
		background-color: antiquewhite;
	}
</style>
