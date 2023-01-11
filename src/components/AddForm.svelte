<script>
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();
	let item = '',
		note = '',
		quantity = 1;

	function emitAddItem() {
		const new_item = {
			item, quantity, note
		}

		dispatch('additem', new_item);
		item = '';
		note = '';
		quantity = 1;
	}
</script>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>


	
<form on:submit|preventDefault={emitAddItem}>
    <h2><b>Add New Item</b></h2>
	<label for="item">Item:</label>
	<input type="text" name="item" placeholder="Item" required bind:value={item} />
	<label for="quantity">Quantity:</label><br />
	<input
		type="number"
		name="quantity"
		placeholder="1"
		min="1"
		title="There must be at least 1 pieces"
		required
		bind:value={quantity}
	/>
	<label for="note">Note:</label>
	<input type="text" name="note" placeholder="Note for this item" bind:value={note} />
	<input type="submit" value="Add Item" />
</form>

<style>
	h2 {
		position: absolute;
		left: 50%;
		top: -10%;
		transform: translate(-50%, -50%);
        margin-bottom: 20px;
		font-family: "Courier New", sans-serif;
		font-size: 2vw;
	}

	form {
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: orange;
		border-radius: 10px;
		padding: 0 60px;
		box-sizing: border-box;
		margin-top: 5%;
		margin-bottom: 5%;
		max-width: 50%;
		max-height: 35%;
	}

	input {
		border-top: none;
		border-right: none;
		border-left: none;
		width: 100%;
		margin-bottom: 10px;
		padding: 0 5px;
		height: 40px;
		font-size: 16px;
		background: none;
		outline: none;
	}

	input[type='submit'] {
		width: 100%;
		max-height: 20%;
		border: 1px solid;
		border-radius: 25px;
		font-size: 1.5vw;
		background-color: white;
		font-weight: 700;
		cursor: pointer;
		outline: none;
		margin-top: 30px;
		margin-bottom: 30px;
	}
</style>
