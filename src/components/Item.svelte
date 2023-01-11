<script>
	export let item = { item: '', quantity: 1, note: '' };
</script>



<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>



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
		font-size: 1.5vw;
	}

	button {
		position: absolute;
		top: 50%;
		right: 0.5%;
		transform: translate(-50%, -50%);
		background-color: orange;
		border: none;
		margin-left: auto;
	}
</style>
