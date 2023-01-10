<script>
	export let item = { item: '', quantity: 1, note: '' };
</script>

<div class="item-container">
	{item.item} x {item.quantity}<br />
	{#if item.note !== ''}<strong>Note: </strong>{item.note}<br />{/if}
	<button on:click><i class="fa fa-trash" /></button>
</div>

<style>
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
</style>
