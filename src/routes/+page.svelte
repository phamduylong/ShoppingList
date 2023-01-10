<script>
	import AddForm from '../components/AddForm.svelte';
	import ShoppingList from '../components/ShoppingList.svelte';

	let shopping_list = [
		{ item: 'kanamunia', quantity: 10, note: 'Kplussa vain' },
		{ item: 'filetpihvi', quantity: 2, note: '' },
		{ item: 'juusto', quantity: 1, note: '' },
		{ item: 'Voi', quantity: 2, note: '' }
	];

	function addTodo(e) {
		//assign to overwrite value
		shopping_list = [...shopping_list, e.detail];
	}

	function removeCompleted(e) {
		shopping_list.splice(e.detail, 1);
		shopping_list = shopping_list;
	}
</script>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<title>Shopping List 🛒</title>

<AddForm on:additem={(e) => addTodo(e)} />
<ShoppingList {shopping_list} on:deleteitem={(e) => removeCompleted(e)}/>

<style>

</style>
