<script lang="ts">
	import type { Item } from './types';
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	let item : string = '',
		note : string = '',
		quantity : number = 1;
	let inputIsInvalid : boolean = true;
	$: inputIsInvalid = (item === null || item === "" || quantity <= 0);

	function emitAddItem() : void {
		const new_item : Item = {
			item,
			quantity,
			note
		};

		dispatch('additem', new_item);
		item = '';
		note = '';
		quantity = 1;
	}
</script>

<form autocomplete="off" on:submit|preventDefault={emitAddItem}>
	<h2><b>Add New Item</b></h2>
	<label for="item" class="required">Item</label>
	<input type="text" name="item" placeholder="Item" required bind:value={item} />
	<label for="quantity" class="required">Quantity</label><br />
	<input type="number" name="quantity" min="1" required bind:value={quantity} />
	<label for="note">Note</label>
	<input type="text" name="note" placeholder="Note for this item" bind:value={note} />
	<button type="submit" disabled={inputIsInvalid}>Add Item</button>
</form>

<style>
	h2 {
		position: absolute;
		left: 50%;
		top: -25%;
		transform: translate(-50%, -50%);
		margin-bottom: 6vw;
		font-family: 'Courier New', sans-serif;
		font-size: 2vw;
	}

	form {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0 5vw;
		box-sizing: border-box;
		margin-top: 5%;
		margin-bottom: 5%;
		max-width: 40%;
		max-height: 20%;
	}

	label {
		font-size: 1.5vw;
	}

	.required:after {
		content: '*';
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
		margin-top: 6vw;
		margin-bottom: 2vw;
		position: relative;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	button:disabled,
	button[disabled] {
		background-color: #cccccc;
		color: #666666;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type=number] {
		-moz-appearance: textfield;
	}

	@media only screen and (orientation: portrait) and (max-width: 768px) {
		label {
			font-size: 2vw;
		}
		input {
			font-size: 1.75vw !important;
		}
		form {
			max-width: 60%;
		}
	}
</style>
