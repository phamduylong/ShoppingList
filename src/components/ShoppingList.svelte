<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    export let shopping_list = [];

    function emitFinish(index) {
        dispatch('deleteitem', index);
    }
</script>

<div id="shopping_list">
	<h2><b>Shopping List</b></h2>
	{#each shopping_list as item, index}
		{#if item.note === ''}
			<div class="item-container">
				{item.item} x {item.quantity}<br />
				<button on:click={() => emitFinish(index)}><i class="fa fa-trash" /></button>
			</div>
		{:else}
			<div class="item-container">
				{item.item} x {item.quantity}<br /><strong>Note: </strong>{item.note}<br />
				<button on:click={() => emitFinish(index)}><i class="fa fa-trash" /></button>
			</div>
		{/if}
	{/each}
</div>

<style>
	h2 {
		position: relative;
		left: 50%;
		top: 2%;
		transform: translate(-50%, -50%);
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
</style>
