<script>
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();
	let item = '',
		note = '',
		quantity = 1;
	$: valid = item !== "" && item !== undefined && !isNaN(quantity) && quantity > 0;

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
	<label for="item" class="required">Item</label>
	<input type="text" name="item" placeholder="Item" required bind:value={item} />
	<label for="quantity" class="required">Quantity</label><br />
	<input
		type="number"
		name="quantity"
		placeholder="1"
		min="1"
		title="There must be at least 1 pieces"
		required
		bind:value={quantity}
	/>
	<label for="note">Note</label>
	<input type="text" name="note" placeholder="Note for this item" bind:value={note} />
	<button type="submit" disabled={!valid}>Add Item</button>
</form>

<style>
	h2 {
		position: absolute;
		left: 50%;
		top: -25%;
		transform: translate(-50%, -50%);
        margin-bottom: 3vw;
		font-family: "Courier New", sans-serif;
		font-size: 2vw;
	}

	form {
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0 5vw;
		box-sizing: border-box;
		margin-top: 5%;
		margin-bottom: 5%;
		max-width: 50%;
		max-height: 20%;
	}

	label {
		font-size: 1.5vw;
	}

	.required:after {
		content:"*";
		color: red;
  	}

	input {
		border-top: none;
		border-right: none;
		border-left: none;
		width: 100%;
		height: 25%;
		margin-bottom: 0.9vw;
		padding: 0 0.45vw;
		height: 3.6vw;
		background: none;
		outline: none;
		font-size: 1.25vw !important;
	}

	input:focus {
		box-shadow: none;
		border-bottom: 1px solid cadetblue;
	}

	button[type='submit'] {
		font-size: 2.5vw;
		width: 60%;
		height: 20%;
		border: 1px solid black;
		border-radius: 25px;
		font-size: 2vw;
		background-color: white;
		font-weight: 700;
		cursor: pointer;
		outline: none;
		margin-top: 3vw;
		margin-bottom: 2vw;
		position: relative;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media only screen and (orientation: portrait) and (max-width: 600px) {

		label {
			font-size: 2vw;
		}
		input {
			font-size: 1.75 !important;
		}
	}
</style>
