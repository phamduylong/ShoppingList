<script>
	let item = '',
		note = '',
		quantity = 1;

	let shopping_list = [
		{ title: 'kanamunia', quantity: 10, note: 'Kplussa vain' },
		{ title: 'filetpihvi', quantity: 2, note: '' },
		{ title: 'juusto', quantity: 1, note: '' },
		{ title: 'Voi', quantity: 2, note: '' }
	];

	function addTodo() {
		//assign to overwrite value
		shopping_list = [...shopping_list, { title: item, quantity: quantity, note: note }];
		item = '';
		note = '';
		quantity = 1;
		console.log(shopping_list);
	}

	function removeCompleted(index) {
		shopping_list.splice(index, 1);
		shopping_list = shopping_list;
	}
</script>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<title>Shopping List 🛒</title>

<div id="page">
	<form on:submit|preventDefault={addTodo}>
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
	<div id="shopping_list">
		<h2><b>Shopping List</b></h2>
		{#each shopping_list as item, idx}
			{#if item.note === ''}
				<div class="item-container">
					{item.title} x {item.quantity}<br />
					<button on:click={() => removeCompleted(idx)}><i class="fa fa-trash" /></button>
				</div>
			{:else}
				<div class="item-container">
					{item.title} x {item.quantity}<br /><strong>Note: </strong>{item.note}<br />
					<button on:click={() => removeCompleted(idx)}><i class="fa fa-trash" /></button>
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	#page {
		margin: 0 auto;
	}

	h2 {
		position: relative;
		left: 50%;
		top: 2%;
		transform: translate(-50%, -50%);
	}

	form {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: orange;
		border-radius: 10px;
		padding: 0 60px;
		box-sizing: border-box;
		margin-top: 5%;
		margin-bottom: 5%;
	}

	.item-container {
		position: relative;
		display: inline-block;
		height: 2%;
		width: 100%;
		background-color: orange;
		border-radius: 5px;
		border: black solid 1.5px;
		margin: 5px;
		padding: 1em;
	}

	button {
		position: absolute;
		top: 50%;
		right: 1%;
		background-color: orange;
		border: none;
		margin-left: auto;
	}

	#shopping_list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: cadetblue;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
		padding: 0.5%;
		max-height: 400px;
		max-lines: 3;
		overflow: scroll;
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
		height: 20%;
		border: 1px solid;
		border-radius: 25px;
		font-size: 20px;
		background-color: white;
		font-weight: 700;
		cursor: pointer;
		outline: none;
		margin-top: 30px;
		margin-bottom: 30px;
	}
</style>
