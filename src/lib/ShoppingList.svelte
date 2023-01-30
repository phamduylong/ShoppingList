<script>
	import { createEventDispatcher } from 'svelte';
	import Item from './Item.svelte';
	let dispatch = createEventDispatcher();
	import { openModal } from 'svelte-modals';
 	import Modal from './Modal.svelte';
	import { modalResult } from './stores.js';
	export let shopping_list = [];

	function emitDeleteItem(index) {
		openModal(Modal, { title: "Alert", message: `Are you sure you want to delete "${shopping_list[index].item}"`});
		if($modalResult === true) {
			dispatch('deleteitem', index);
			modalResult.setFalse();
		}
	}
</script>

<h2><b>Shopping List 🛒</b></h2>
<div id="wrapper">
	<div id="shopping_list">
		{#if shopping_list.length === 0}
			<h1>Empty list 😥 Add some items 👇</h1>
		{:else}
			{#each shopping_list as item, index}
				<Item {item} on:click={() => emitDeleteItem(index)} />
			{/each}
		{/if}
	</div>	
</div>



<style>
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		font-size: 4vw;
	}

	#wrapper {
		margin-top: 5%;
		background-color: cadetblue;
		padding: 1.5%;
		height: 40%;
		width: 90%;
		position: absolute;
		top: 30%;
		left: 50%;
		border-radius: 2vh;
		transform: translate(-50%, -50%);
		overscroll-behavior: contain;
	}
	

	h2 {
		position: absolute;
		left: 50%;
		top: 5%;
		transform: translate(-50%, -50%);
		font-family: 'Courier New', sans-serif;
		font-size: 3vw;
		margin-bottom: 5%;
	}

	#shopping_list {
		background-color: cadetblue;
		max-height: 102%;
		width: 100%;
		overflow-y: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
</style>
