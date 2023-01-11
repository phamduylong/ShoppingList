<script>
    import { createEventDispatcher } from 'svelte';
	import Item from './Item.svelte';
    let dispatch = createEventDispatcher();

    export let shopping_list = [];

    function emitDeleteItem(index) {
        dispatch('deleteitem', index);
    }
</script>

<div id="shopping_list">
	<h2><b>Shopping List</b></h2>
	{#each shopping_list as item, index}
		<Item {item} on:click={() => emitDeleteItem(index)}/>
	{/each}
</div>

<style>
	h2 {
		position: relative;
		left: 50%;
		top: 2%;
		transform: translate(-50%, -50%);
		font-family: "Courier New", sans-serif;
		font-size: 3vw;
	}


	#shopping_list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background-color: cadetblue;
		padding: 0.5%;
		max-height: 40%;
		width: 100%;
		overflow: scroll;
		position: absolute;
		top: 2%;
	}
</style>
